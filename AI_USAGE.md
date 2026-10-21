# AI Usage Log

## 1. Công cụ AI

Codex trong ứng dụng máy tính, phiên làm việc ngày 21/10/2026.

## 2. Mục đích sử dụng

Đọc PDF đề bài, khảo sát website bán sách, đề xuất cải tiến, tạo HTML/CSS và SVG, kiểm tra trang trong trình duyệt, chuẩn bị tài liệu và hướng dẫn GitHub.

## 3. Yêu cầu thực tế đã sử dụng

Người dùng gửi file `BaiTap_CaNhan_Chuong1.pdf` và yêu cầu:

> Đọc rồi làm bài tập cho tôi

Không có các lượt người dùng riêng biệt tương ứng Prompt 1/2/3 trong PDF. Các prompt trong PDF là mẫu hướng dẫn của đề, không được ghi giả thành lịch sử cuộc trò chuyện đã diễn ra.

### Prompt gợi ý để sinh viên dùng khi tự đối chiếu (chưa gửi)

**Phân tích:** “Dựa trên các quan sát tôi ghi lại từ Vinabook, lập bảng trang chủ, danh mục, chi tiết sản phẩm, tìm kiếm và giỏ hàng. Phân biệt bằng chứng, nhận xét và đề xuất; đánh dấu mọi tính năng chưa kiểm chứng.”

**Thiết kế:** “Đề xuất thẻ sách cho người mua tại Việt Nam bằng HTML/CSS, hiển thị rõ giá bán, giá gốc, tỷ lệ giảm và tiền tiết kiệm. Giải thích bố cục máy tính/điện thoại, cấu trúc HTML và cách kiểm tra bàn phím.”

**Kiểm tra mã:** “Giải thích Grid, media query, details/summary và z-index trong dự án này. Chỉ ra trường hợp tên sách dài hoặc giá thay đổi có thể làm giao diện sai. Hướng dẫn tôi tự kiểm tra, không khẳng định đã kiểm tra thay tôi.”

## 4. Kết quả AI đề xuất và tạo

- Chọn Vinabook và khảo sát năm khu vực.
- Chọn cải tiến cách trình bày giá và thẻ sản phẩm.
- Tạo nhà sách Mộc với bốn sản phẩm hư cấu, bốn bìa SVG, CSS riêng.
- Dùng `details/summary` cho nút xem giới thiệu; không cần JavaScript.
- Tạo báo cáo và hướng dẫn chạy/đưa mã nguồn lên GitHub.

## 5. Kiểm tra và điều chỉnh

AI đã mở website tham khảo, thử tìm “Sử ký”, thêm một sách vào giỏ để quan sát và mở bản mẫu trong trình duyệt. Không đặt hàng. AI sửa lớp hiển thị nhãn giảm giá sau kiểm tra hình ảnh. Kết quả kỹ thuật chi tiết ở `KIEM_TRA.md`.

Không dùng các khẳng định thiếu bằng chứng như “không có bộ lọc”, “không có giá gốc”, “đã kiểm tra thanh toán” hoặc “bố cục mới tăng tỷ lệ mua hàng”.

**Phần sinh viên:** Chưa được xác nhận đã trực tiếp kiểm tra, điều chỉnh hoặc bổ sung nhận xét. Sau khi thực hiện, ghi rõ ngày, thao tác, kết quả và dòng CSS/HTML đã thay đổi. Không ghi một việc là đã làm nếu chưa làm.

## 6. Nội dung cần hiểu và có thể giải thích sau khi đọc mã

| Thành phần | Vai trò |
| --- | --- |
| `lang="vi"`, UTF-8, viewport | Khai báo tiếng Việt, mã hóa chữ và kích thước trang trên điện thoại. |
| `article` và tiêu đề | Mỗi thẻ sách là một nội dung có tên riêng. |
| `details/summary` | Mở/đóng mô tả bằng thao tác chuột hoặc bàn phím. |
| `display: grid` | Tổ chức các thẻ thành cột. |
| `minmax(0,1fr)` | Chia đều bề rộng và cho cột co nhỏ khi nội dung dài. |
| Media query 960/600 px | Đổi số cột và khoảng cách theo chiều rộng màn hình. |
| `object-fit: contain` | Hiển thị trọn bìa, không cắt ảnh. |
| `.badge { z-index:1 }` | Đưa nhãn giảm giá lên trên ảnh. |
| Giá tĩnh trong HTML | Cần sửa đồng bộ giá bán, giá gốc, mức giảm và tiết kiệm. |

Bảng này là tài liệu ôn tập, không phải lời cam kết sinh viên đã hiểu tất cả nội dung.
