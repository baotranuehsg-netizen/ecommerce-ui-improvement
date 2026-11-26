const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const save = document.querySelector("#save");
const cancel = document.querySelector("#cancel");
const list = document.querySelector("#task-list");
const message = document.querySelector("#message");
const empty = document.querySelector("#empty");
let editing = null;
let pending = false;

async function api(route, method = "GET", body) {
  const options = body ? {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  } : { method };
  const response = await fetch(route, options);
  const result = await response.json();
  if (!response.ok) throw new Error(result.error);
  return result;
}

function show(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("error", isError);
}

function resetForm() {
  editing = null;
  form.reset();
  cancel.hidden = true;
  save.textContent = "Thêm công việc";
}

function taskButton(label, task, action, className = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.className = className;
  button.setAttribute("aria-label", label + ": " + task.title);
  button.addEventListener("click", action);
  return button;
}

function renderTask(task) {
  const row = document.createElement("li");
  row.className = task.done ? "task completed" : "task";
  const text = document.createElement("div");
  const name = document.createElement("p");
  name.className = "task-name";
  name.textContent = task.title;
  const status = document.createElement("p");
  status.className = "task-state";
  status.textContent = task.done ? "Đã hoàn thành" : "Đang thực hiện";
  text.append(name, status);

  const actions = document.createElement("div");
  actions.className = "actions";
  const route = "/api/tasks/" + task.id;
  actions.append(
    taskButton(task.done ? "Mở lại" : "Hoàn thành", task, () => {
      change(() => api(route, "PUT", { title: task.title, done: !task.done }), "Đã cập nhật trạng thái.", task.id);
    }),
    taskButton("Sửa", task, () => {
      editing = task;
      title.value = task.title;
      save.textContent = "Lưu thay đổi";
      cancel.hidden = false;
      title.focus();
    }),
    taskButton("Xóa", task, () => {
      if (window.confirm("Xóa công việc «" + task.title + "»?")) {
        change(() => api(route, "DELETE"), "Đã xóa công việc.", task.id);
      }
    }, "delete")
  );
  row.append(text, actions);
  return row;
}

async function refresh() {
  const { tasks, stats } = await api("/api/tasks");
  list.replaceChildren(...tasks.map(renderTask));
  for (const [key, value] of Object.entries(stats)) {
    document.getElementById(key).textContent = value;
  }
  empty.hidden = tasks.length > 0;
}

async function change(action, notice, targetId, reset = false) {
  if (pending) return;
  pending = true;
  const controls = [title, ...document.querySelectorAll("button")];
  controls.forEach((control) => { control.disabled = true; });
  try {
    await action();
    if (reset || editing?.id === targetId) resetForm();
    await refresh();
    show(notice);
  } catch (err) {
    show(err.message, true);
  } finally {
    pending = false;
    controls.forEach((control) => { control.disabled = false; });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = title.value.trim();
  if (!value) return show("Hãy nhập tên công việc.", true);
  const task = editing;
  if (task) {
    change(() => api("/api/tasks/" + task.id, "PUT", { title: value, done: task.done }), "Đã lưu thay đổi.", task.id, true);
  } else {
    change(() => api("/api/tasks", "POST", { title: value }), "Đã thêm công việc.", undefined, true);
  }
});

cancel.addEventListener("click", () => { resetForm(); title.focus(); });
refresh().catch((err) => show(err.message, true));
