const http = require("node:http");
const { readFileSync, mkdirSync } = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

const dbFile = process.env.TODO_DB || path.join(__dirname, "data", "tasks.sqlite");
mkdirSync(path.dirname(dbFile), { recursive: true });
const db = new DatabaseSync(dbFile);
db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL CHECK (length(title) BETWEEN 1 AND 120),
    done INTEGER NOT NULL DEFAULT 0 CHECK (done IN (0, 1)),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

const files = new Map([
  ["/", ["index.html", "text/html"]],
  ["/style.css", ["style.css", "text/css"]],
  ["/app.js", ["app.js", "text/javascript"]]
]);
const list = db.prepare("SELECT id, title, done FROM tasks ORDER BY done, id DESC");
const insert = db.prepare("INSERT INTO tasks (title) VALUES (?)");
const update = db.prepare("UPDATE tasks SET title = ?, done = ? WHERE id = ?");
const remove = db.prepare("DELETE FROM tasks WHERE id = ?");

function json(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(body));
}

function error(status, message) {
  return Object.assign(new Error(message), { status });
}

async function readBody(req) {
  if (!/^application\/json(?:;|$)/i.test(req.headers["content-type"] || "")) {
    throw error(415, "Dữ liệu gửi lên phải có định dạng JSON.");
  }
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 4096) throw error(413, "Dữ liệu quá lớn.");
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw error(400, "Dữ liệu JSON không hợp lệ.");
  }
}

function titleFrom(body) {
  const title = typeof body?.title === "string" ? body.title.trim() : "";
  if (!title || title.length > 120) throw error(400, "Nhập tên công việc từ 1 đến 120 ký tự.");
  return title;
}

const server = http.createServer(async (req, res) => {
  try {
    const pathname = new URL(req.url, "http://localhost").pathname;
    const file = files.get(pathname);
    if (req.method === "GET" && file) {
      const [name, mime] = file;
      res.writeHead(200, { "Content-Type": mime + "; charset=utf-8" });
      return res.end(readFileSync(path.join(__dirname, "public", name)));
    }
    if (pathname === "/api/tasks" && req.method === "GET") {
      const tasks = list.all().map((task) => ({ ...task, done: Boolean(task.done) }));
      const done = tasks.filter((task) => task.done).length;
      return json(res, 200, { tasks, stats: { total: tasks.length, done, remaining: tasks.length - done } });
    }
    if (pathname === "/api/tasks" && req.method === "POST") {
      const title = titleFrom(await readBody(req));
      const { lastInsertRowid } = insert.run(title);
      return json(res, 201, { id: Number(lastInsertRowid), title, done: false });
    }
    const match = /^\/api\/tasks\/([1-9]\d*)$/.exec(pathname);
    if (match && (req.method === "PUT" || req.method === "DELETE")) {
      const id = Number(match[1]);
      if (!Number.isSafeInteger(id)) throw error(400, "Mã công việc không hợp lệ.");
      if (req.method === "DELETE") {
        if (!remove.run(id).changes) throw error(404, "Không tìm thấy công việc.");
        return json(res, 200, { id });
      }
      const body = await readBody(req);
      const title = titleFrom(body);
      if (typeof body.done !== "boolean") throw error(400, "Trạng thái không hợp lệ.");
      if (!update.run(title, Number(body.done), id).changes) throw error(404, "Không tìm thấy công việc.");
      return json(res, 200, { id, title, done: body.done });
    }
    return json(res, 404, { error: "Không tìm thấy đường dẫn." });
  } catch (err) {
    if (!err.status) console.error(err);
    if (!res.headersSent) json(res, err.status || 500, { error: err.status ? err.message : "Lỗi máy chủ." });
    else res.end();
  }
});

const port = Number(process.env.PORT || 3000);
server.listen(port, "127.0.0.1", () => {
  console.log(`Ứng dụng đang chạy tại http://127.0.0.1:${server.address().port}`);
});
