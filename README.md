# E-commerce UI Improvement

## 1. Giới thiệu

Mộc là giao diện nhà sách minh họa cho bài tập cá nhân Chương 1 môn Phát triển ứng dụng WEB/TMĐT. Khu vực cải tiến là danh sách và thẻ sản phẩm: tên đầy đủ, giá bán nổi bật, giá gốc gạch ngang, phần trăm giảm và số tiền tiết kiệm.

## 2. Website tham khảo

- Tên: Vinabook.
- URL: https://www.vinabook.com/
- Đã khảo sát: trang chủ, danh mục sách kinh tế, chi tiết sản phẩm, tìm kiếm, giỏ hàng.
- Xem bảng khảo sát và giới hạn kiểm chứng trong [BAO_CAO.md](BAO_CAO.md).
- Mẫu Mộc là thiết kế độc lập; sách, tác giả, giá và bìa là dữ liệu hư cấu.

## 3. Chức năng

- Hiển thị 4 sản phẩm với ảnh, tên, tác giả, giá bán, giá gốc, tỷ lệ giảm và số tiền tiết kiệm.
- Nút “Xem giới thiệu” mở/đóng mô tả bằng `details/summary`, hoạt động không cần JavaScript.
- Điều hướng đến tủ sách và phần giới thiệu bằng liên kết nội trang.
- Responsive 4 cột trên màn hình lớn, 2 cột từ 601 đến 960 px, 1 cột từ 600 px trở xuống.
- Không có giỏ hàng thật, đăng nhập, thanh toán, backend hoặc cơ sở dữ liệu.

## 4. Công nghệ và cấu trúc

HTML5, CSS3, SVG tự tạo. Không thư viện, không phụ thuộc mạng.

```text
ecommerce-ui-improvement/
├── index.html
├── css/style.css
├── images/ (4 bìa sách SVG)
├── README.md
├── BAO_CAO.md
├── AI_USAGE.md
└── KIEM_TRA.md
```

## 5. Cách chạy

Giải nén toàn bộ dự án, mở `index.html` bằng Chrome, Edge hoặc Firefox. Giữ nguyên thư mục `css/` và `images/`. Không cần cài thư viện hoặc chạy lệnh build.

## 6. Cải tiến đã thực hiện

- Gom giá bán, giá gốc và tiền tiết kiệm trong cùng thẻ, giúp so sánh nhanh.
- Không cắt tên sách dài; dùng `minmax(0,1fr)` để cột không bị nội dung đẩy rộng.
- `object-fit: contain` giữ nguyên toàn bộ bìa sách.
- Nút thao tác cao tối thiểu 46 px; có viền focus cho bàn phím và liên kết bỏ qua phần đầu trang.
- Sau kiểm tra ảnh, thêm `z-index: 1` cho nhãn giảm giá để ảnh sách có `filter` không che nhãn.

## 7. Hỗ trợ từ AI

Codex hỗ trợ khảo sát, thiết kế, viết mã và kiểm tra. Đây không phải tuyên bố sinh viên đã tự thực hiện các bước đó. Nhật ký trung thực nằm trong [AI_USAGE.md](AI_USAGE.md); các việc sinh viên cần tự làm nằm trong [KIEM_TRA.md](KIEM_TRA.md).

## 8. Đưa lên GitHub

Chưa tạo repository hoặc xuất bản website cho tài khoản sinh viên. Thực hiện sau khi đã tự kiểm tra bài:

1. Đăng nhập GitHub, tạo repository `ecommerce-ui-improvement`, chọn Public.
2. Dùng **Add file → Upload files**, tải toàn bộ nội dung bên trong thư mục dự án, giữ nguyên cấu trúc. Không tải nguyên file ZIP. `index.html` phải nằm ở gốc repository.
3. Commit với nội dung `Add responsive bookstore UI and survey report`.
4. Mở repository khi chưa đăng nhập để kiểm tra khả năng truy cập công khai.
5. Nếu cần website chạy trực tiếp: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
6. Chờ GitHub triển khai và mở URL được hiển thị ở Pages. Kiểm tra ảnh và CSS. Không tự điền URL dự đoán vào báo cáo.

Nếu dùng Git, tạo repo rỗng trước rồi chạy trong thư mục dự án:

```bash
git init
git add .
git commit -m "Add responsive bookstore UI and survey report"
git branch -M main
git remote add origin https://github.com/USERNAME/ecommerce-ui-improvement.git
git push -u origin main
```

Thay `USERNAME` bằng tên tài khoản thật. Nếu Git chưa có danh tính, đặt `git config user.name` và `git config user.email` riêng trong dự án bằng thông tin của bạn. Không commit token hoặc mật khẩu.

Tài liệu: https://docs.github.com/en/pages
