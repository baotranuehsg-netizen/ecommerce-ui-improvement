# Lịch công việc

Ứng dụng TODO cho Phần 2 của bài BackEnd. Giao diện quản lý công việc dùng
HTML, CSS và JavaScript. Máy chủ Node.js cung cấp API và lưu dữ liệu trong SQLite.

## Cách chạy

Cần Node.js 24 trở lên. Tại thư mục này, chạy `node server.js` rồi mở
[http://127.0.0.1:3000](http://127.0.0.1:3000). Không cần cài thêm thư viện.
Máy chủ tự tạo cơ sở dữ liệu trong thư mục `data` khi chạy lần đầu.

## Chức năng

- Thêm, sửa, xóa công việc.
- Đánh dấu hoàn thành và mở lại công việc.
- Thống kê tổng số, số đang thực hiện và số đã hoàn thành.
- Giữ dữ liệu sau khi tải lại trang hoặc khởi động lại máy chủ.

## API

| Phương thức | Đường dẫn | Kết quả |
| --- | --- | --- |
| GET | `/api/tasks` | Danh sách và thống kê |
| POST | `/api/tasks` | Thêm công việc từ `title` |
| PUT | `/api/tasks/:id` | Cập nhật công việc từ `title` và `done` |
| DELETE | `/api/tasks/:id` | Xóa công việc |

Bảng `tasks` có các cột `id`, `title`, `done` và `created_at`.
