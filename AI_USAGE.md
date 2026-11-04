# Nhật ký AI - Buổi 2

**Sinh viên:** Trần Quốc Bảo - 31241028457  
**Ngày:** 04/11/2026  
**Công cụ:** Codex trong ứng dụng máy tính.

## Yêu cầu thực tế

Người dùng gửi BaiTap_CaNhan_Buoi2.pdf và yêu cầu: “Đọc và làm bài tập cho tôi”. Đề và mã nguồn Buổi 1 là ngữ cảnh để làm bài. Không có chín lượt người dùng riêng biệt tương ứng chín prompt mẫu trong PDF; không ghi chúng thành lịch sử giả.

## Các nội dung AI xử lý từ yêu cầu

| Nội dung | Kết quả | Cách đối chiếu |
| --- | --- | --- |
| Rà soát mã Buổi 1 | Giữ sản phẩm; chọn thẻ và menu để cải tiến | Clone repository, lấy mốc d8a2aa0 và chụp ảnh trước |
| HTML có ngữ nghĩa | Thêm ul/li cho menu/thông số; giữ section/article, h1/h2/h3 | Đọc mã, kiểm tra DOM và các đích liên kết |
| Box Model/selector | Padding 24/20 px, margin thông số 18 px, border và bo góc | Đọc computed style trên trình duyệt |
| Flexbox/Grid | Menu/thông số theo hàng; lưới 4/2/1 cột | Thay kích thước viewport, đo số cột |
| Hover/focus | Màu hover và outline bàn phím | Click, Tab, Shift+Tab, Enter và ảnh focus |
| Tài liệu | Báo cáo, bảy câu trả lời và README | Đối chiếu đủ danh mục sản phẩm nộp ở trang cuối PDF |

## Kiểm tra, điều chỉnh và ý tưởng không dùng

- Không viết lại website mới; kế thừa đúng bốn sách và ảnh cũ.
- Không dùng Bootstrap/Tailwind hoặc JavaScript vì bài tập tập trung HTML/CSS.
- Giữ object-fit: contain thay vì cover để bìa không bị cắt.
- Reset margin/padding/list-style của ul để menu không nhận khoảng thụt mặc định.
- Thêm quy tắc hover riêng cho summary khi details đang mở, tránh nền sáng ghi đè trong lúc chữ trắng.
- Tăng padding desktop nhưng dùng 20 px trên mobile; công cụ đo xác nhận các giá trị và không tràn ngang.
- Môi trường đang bật prefers-reduced-motion: reduce, vì vậy không ghi giả rằng đã quan sát transition 0,2s hoạt động. Màu hover và focus đã kiểm tra trực tiếp.

## Phần sinh viên tự điều chỉnh

Chưa có bằng chứng sinh viên đã trực tiếp thực hiện thay đổi độc lập trong phiên này. Sau khi tự làm, ghi ngắn gọn: vấn đề nhìn thấy, thuộc tính đã sửa, dự đoán trước khi chạy và kết quả sau khi chạy. Ví dụ có thể thử thay padding hoặc gap menu, nhưng chỉ ghi hoàn thành khi đã thực sự làm.

## Nội dung cần giải thích

Vai trò nav/article/ul/li; margin khác padding; box-sizing: border-box; trục chính/phụ của Flexbox; Grid chia cột; object-fit; hover khác focus-visible; media query và giảm chuyển động. Câu trả lời gắn với selector cụ thể trong BAO_CAO_BUOI2.md.

---

## Lưu nhật ký Buổi 1

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
