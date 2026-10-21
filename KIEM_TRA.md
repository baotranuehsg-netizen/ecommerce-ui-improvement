# Kiểm tra và hoàn thiện trước khi nộp

## A. Kết quả kiểm tra của AI - 21/10/2026

Kiểm tra trên trình duyệt tích hợp, phục vụ trang qua HTTP cục bộ. Các độ rộng là viewport giả lập, không phải thử trên điện thoại vật lý.

| Hạng mục | Kết quả |
| --- | --- |
| Trang và tài nguyên | Mở được trang; 4 thẻ sách; toàn bộ ảnh tải thành công. |
| Desktop 1366 × 900 | 4 cột, mỗi cột khoảng 278,5 px; không tràn ngang. |
| Tablet 768 × 900 | 2 cột, mỗi cột khoảng 341,4 px; không tràn ngang. |
| Mobile 390 × 844 | 1 cột; ảnh và mô tả hiển thị; không tràn ngang. |
| Màn hình nhỏ 320 × 900 | 1 cột; kiểm tra bề rộng DOM không phát hiện tràn ngang. |
| Xem giới thiệu | Click mở được `details` đầu tiên; nhấn Enter trên `summary` đóng được. |
| Điều hướng Tủ sách | Liên kết đến vùng danh sách hoạt động. |
| Nhãn giảm giá | Sau khi thêm z-index, ảnh kiểm tra desktop/mobile cho thấy nhãn nằm phía trên bìa. |
| Giá mẫu | Đối chiếu bằng tính toán: bốn tỷ lệ 20%, 20%, 15%, 30% khớp giá và số tiền tiết kiệm. |

Chưa kiểm tra toàn diện trên Safari, trình đọc màn hình, điện thoại vật lý hoặc website GitHub Pages. Đây là kiểm tra của AI; không ghi là sinh viên đã tự kiểm tra.

## B. Sinh viên cần tự thực hiện

- [x] Bổ sung họ tên Trần Quốc Bảo và MSSV 31241028457 trong báo cáo.
- [ ] Mở `index.html` từ thư mục đã giải nén.
- [ ] Thử kích thước máy tính và điện thoại trong Chrome DevTools.
- [ ] Mở/đóng giới thiệu cả bốn sách; thử Tab và Enter.
- [ ] Truy cập lại các URL khảo sát, đối chiếu quan sát và ghi nhận thay đổi nếu có.
- [ ] Chọn ít nhất một điểm cần cải thiện do mình trực tiếp phát hiện, sửa và giải thích.
- [ ] Ghi lại việc tự thực hiện trong AI_USAGE.md bằng ngày, thao tác và kết quả thật.
- [ ] Tạo repository Public, tải đủ file và thử mở khi chưa đăng nhập.
- [ ] Nếu bật Pages, kiểm tra website đã triển khai rồi bổ sung URL thật vào báo cáo.

## C. Mẫu ghi nhận chỉnh sửa cá nhân

Chỉ điền sau khi thực hiện, không coi đây là kết quả sẵn có:

- Ngày kiểm tra:
- Thiết bị/trình duyệt và độ rộng:
- Điểm tôi phát hiện:
- File/thuộc tính tôi sửa:
- Lý do sửa:
- Kết quả trước và sau:
- Tôi giải thích được tác dụng của thay đổi như sau:

## D. Hướng dẫn tự thực hành

Ví dụ: thay một tên sách bằng tên dài hơn và kiểm tra việc xuống dòng; nếu khoảng cách trở nên khó đọc, thử điều chỉnh `line-height` hoặc `padding`, rồi nêu sự khác biệt. Có thể thay bảng màu, cỡ chữ hoặc khoảng cách theo nhận xét thực tế. Không bắt buộc dùng ví dụ này; điều quan trọng là tự chạy, quan sát, sửa và giải thích.
