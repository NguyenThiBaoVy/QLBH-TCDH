# TỔNG HỢP TOÀN BỘ CÂU LỆNH & PROMPT YÊU CẦU DỰ ÁN TECHZONE

> Tài liệu lưu trữ toàn bộ các câu lệnh / yêu cầu (prompts) từ người dùng trong suốt quá trình phát triển dự án website TechZone, được sắp xếp theo đúng thứ tự thời gian.

## MỤC LỤC

1. [Prompt 1: Khởi tạo website multi-page tĩnh bán hàng công nghệ & theo dõi vận chuyển](#prompt-1)
2. [Prompt 2: Nâng cấp cấu trúc và giao diện hệ thống theo dõi đơn hàng & vận chuyển](#prompt-2)
3. [Prompt 3: Xây dựng lại toàn bộ giao diện theo thương hiệu TechZone](#prompt-3)
4. [Prompt 4: Sửa lỗi hiển thị các section danh mục sản phẩm (Điện thoại, Laptop, Phụ kiện)](#prompt-4)
5. [Prompt 5: Thay đổi bố cục layout danh mục sản phẩm, bỏ banner lớn cạnh card](#prompt-5)
6. [Prompt 6: Thiết kế lại trang Lịch sử đơn hàng (history.html) & Chi tiết vận chuyển (tracking-detail.html) chuẩn Shopee](#prompt-6)
7. [Prompt 7: Thay thế prompt chọn tỉnh/thành bằng Dropdown Menu trên Topbar](#prompt-7)
8. [Prompt 8: Sửa lỗi menu địa điểm bị mờ và không click được](#prompt-8)
9. [Prompt 9: Thêm nút Trang chủ, Menu Danh mục Mega Menu và Widget tra cứu mã đơn hàng](#prompt-9)
10. [Prompt 10: Xử lý logic lọc sản phẩm theo danh mục khi click Menu Danh mục](#prompt-10)
11. [Prompt 11: Thiết kế lại cụm huy hiệu Giảm giá & Trả góp 0% trên thẻ sản phẩm](#prompt-11)
12. [Prompt 12: Tối ưu CSS Header và Topbar chống vỡ layout khi Zoom trình duyệt (125% - 200%)](#prompt-12)
13. [Prompt 13: Bố cục Header chuẩn 2 hàng khi phóng to / Zoom mức cao (150% - 250%)](#prompt-13)
14. [Prompt 14: Tối ưu Responsive Mobile cho Tin tức công nghệ, Widget lộ trình và Footer](#prompt-14)
15. [Prompt 15: Tối ưu UX tra cứu và lịch sử đơn hàng theo mô hình Shopee (Không cần nhập mã)](#prompt-15)
16. [Prompt 16: Thêm 3 banner phụ mini (Mini Promo Cards) lấp khoảng trống khu vực Hero Section](#prompt-16)
17. [Prompt 17: Thêm icon cho ô Hàng Chính Hãng 100% & Xóa mục Tra cứu đơn hàng trên Topbar](#prompt-17)
18. [Prompt 18: Sửa lỗi menu chọn tỉnh/thành bị thanh Header chính che khuất](#prompt-18)
19. [Prompt 19: Sửa lỗi menu chọn khu vực không click chọn được (z-index & Event Delegation)](#prompt-19)
20. [Prompt 20: Tạo file prompt.md tổng hợp toàn bộ câu lệnh / prompt theo thứ tự](#prompt-20)

---

## <a id="prompt-1"></a>Prompt 1: Khởi tạo website multi-page tĩnh bán hàng công nghệ & theo dõi vận chuyển

- **Thời gian gửi:** `2026-10-20T13:33:00Z`

### Nội dung yêu cầu:

````markdown
Hãy đóng vai một Frontend Developer chuyên nghiệp. Xây dựng một website multi-page tĩnh hoàn chỉnh (gồm HTML5, CSS3 hiện đại và JavaScript thuần ES6) tích hợp cả Bán hàng trực tuyến (E-commerce) và Phân hệ Theo dõi Đơn hàng & Vận chuyển (Order Tracking).

### 1. Cấu trúc thư mục & các trang (Multi-page):
- index.html (Trang chủ: Giới thiệu, banner, tìm kiếm đơn hàng nhanh, sản phẩm nổi bật)
- products.html (Trang danh mục sản phẩm, bộ lọc, chức năng thêm vào giỏ hàng)
- checkout.html (Trang giỏ hàng, điền thông tin giao hàng & thanh toán để tạo mã đơn)
- tracking-detail.html (Trang chi tiết vận chuyển & tiến trình giao nhận)
- history.html (Trang lịch sử mua hàng cá nhân)
- /css/style.css (Chứa toàn bộ CSS chung, layout, responsive, CSS timeline)
- /js/main.js (Xử lý toàn bộ logic: mock data, localStorage, giỏ hàng, đếm ngược, router)

---

### 2. Yêu cầu chi tiết từng trang:

1. Trang chủ (index.html):
- Header chung cho toàn site: Logo, Navigation bar (Trang chủ, Sản phẩm, Tra cứu, Lịch sử), Icon giỏ hàng (hiển thị số lượng badge real-time).
- Hero Section: 
  + Banner quảng cáo và ô tra cứu đơn hàng nhanh (Quick Order Search Form by Order ID).
  + Xử lý submit tra cứu: Tìm theo Order ID, nếu có chuyển thẳng sang `tracking-detail.html?id=[Mã_đơn]`, nếu không báo lỗi trực quan (toast notification). Gợi ý sẵn 1-2 mã đơn mẫu để click nhanh.
- Section: Top sản phẩm bán chạy (có nút "Thêm vào giỏ" và "Mua ngay").
- Footer: Thông tin liên hệ, chính sách đổi trả, bản quyền.

2. Trang sản phẩm (products.html):
- Grid danh sách sản phẩm mẫu (tối thiểu 6-8 sản phẩm gồm: Tên, giá, hình ảnh placeholder đẹp, tag danh mục, nút "Thêm vào giỏ hàng").
- Bộ lọc theo danh mục và tìm kiếm sản phẩm cơ bản.

3. Trang thanh toán / Đặt hàng (checkout.html):
- Hiển thị bảng tóm tắt giỏ hàng (cho phép tăng giảm số lượng, xóa món, tính tổng tiền).
- Form thông tin nhận hàng: Họ tên, Số điện thoại, Địa chỉ giao hàng, Ghi chú, Phương thức vận chuyển/thanh toán.
- Nút "Đặt hàng": Khi bấm, tự động sinh mã đơn ngẫu nhiên (ví dụ: ORD-89234), lưu thông tin đơn hàng cùng trạng thái ban đầu ("Đã đặt") vào `localStorage`, làm trống giỏ hàng và tự động chuyển hướng sang `tracking-detail.html?id=[Mã_vừa_tạo]`.

4. Trang chi tiết vận chuyển (tracking-detail.html) - TRỌNG TÂM ĐỀ BÀI:
- Nhận diện đơn hàng qua URL Param (`?id=...`), nếu không có lấy đơn mới nhất hoặc đơn mặc định từ mock/localStorage.
- Sơ đồ Tiến trình (Timeline): BẮT BUỘC sử dụng CSS Pseudo-elements (`::before`, `::after`) để vẽ các đường line nối và các chấm mốc trạng thái: [Đã đặt -> Đã xác nhận -> Đang giao -> Thành công].
  + Trạng thái hiện tại của đơn hàng phải được highlight màu sắc nổi bật (Active/Completed).
- Đồng hồ đếm ngược (Countdown Timer) bằng JavaScript: Hiển thị thời gian dự kiến giao hàng (ví dụ: "Dự kiến giao sau: 01 giờ 45 phút 20 giây" và đếm ngược từng giây).
- Khối thông tin Shipper & kiện hàng:
  + Thông tin Shipper: Tên tài xế, ảnh đại diện, số điện thoại, biển số xe, đơn vị vận chuyển (GHTK, Viettel Post, v.v.).
  + Thông tin đơn hàng: Danh sách mặt hàng đã mua, số lượng, tổng tiền, địa chỉ nhận hàng.

5. Trang lịch sử mua hàng (history.html):
- Danh sách/Bảng toàn bộ các đơn hàng đã thực hiện (lấy từ `localStorage` kết hợp mock data mẫu 3-4 đơn ở nhiều trạng thái: Đã xác nhận, Đang giao, Đã giao, Đã hủy).
- Các cột: Mã đơn, Ngày đặt, Tổng tiền, Trạng thái (badge màu tương ứng: xanh lá, cam, xanh dương), và Nút "Chi tiết vận chuyển" (dẫn sang tracking-detail.html?id=...).

---

### 3. Yêu cầu kỹ thuật:
- Chuẩn HTML5 ngữ nghĩa và CSS3 hiện đại (Flexbox, CSS Grid, biến CSS root, chuẩn Mobile Responsive).
- CSS Pseudo-elements: Áp dụng kỹ thuật `::before` và `::after` sạch sẽ, chuẩn xác cho đường timeline vận chuyển.
- JavaScript thuần (Vanilla JS): Sử dụng `localStorage` để đồng bộ trạng thái giỏ hàng và danh sách đơn hàng xuyên suốt giữa các trang.
- Code rõ ràng, module hóa logic, có chú thích đầy đủ, cung cấp trọn vẹn mã nguồn các file để copy vào chạy được ngay.
````

---

## <a id="prompt-2"></a>Prompt 2: Nâng cấp cấu trúc và giao diện hệ thống theo dõi đơn hàng & vận chuyển

- **Thời gian gửi:** `2026-10-20T13:50:45Z`

### Nội dung yêu cầu:

````markdown
Dựa trên dự án "Website bán hàng công nghệ kết hợp Hệ thống Theo dõi Đơn hàng & Vận chuyển (Order Tracking)", hãy nâng cấp toàn bộ cấu trúc và giao diện website theo đúng phong cách bố cục đa tầng, dày đặc module đặc trưng của hệ sinh thái CellphoneS (tone màu nhận diện đỏ #d70018 chủ đạo, xám nhạt #f4f6f8 và trắng).

Dự án dạng Multi-page (hoặc Single Page với Router/Tab chuyển trang đa tầng mượt mà), bao gồm các file:
- index.html (Trang chủ đồ sộ phong cách CellphoneS)
- products.html (Danh mục sản phẩm, bộ lọc chi tiết)
- checkout.html (Giỏ hàng & Đặt hàng tạo mã)
- tracking-detail.html (Chi tiết vận chuyển & Timeline chuẩn đề tài)
- history.html (Lịch sử đơn hàng cá nhân)
- /css/style.css
- /js/main.js

---

### CÁC KHỐI / MODULE CHI TIẾT CẦN XÂY DỰNG TRÊN TRANG CHỦ (INDEX.HTML):

1. Header đa tầng (CellphoneS Header):
   - Top Bar: Chọn vị trí cửa hàng/khu vực (Hà Nội / TP.HCM / Đồng Nai...), Hotline 1800.2097, Hệ thống 125 cửa hàng, Tin công nghệ (Sforum).
   - Main Header:
     + Logo thương hiệu công nghệ (chữ đỏ nổi bật).
     + Nút "Danh mục" icon 3 gạch mở Mega Menu.
     + Thanh tìm kiếm trung tâm lớn (placeholder: "Bạn cần tìm gì hôm nay? Ví dụ: iPhone 16, Laptop Gaming...") có gợi ý từ khóa hot.
     + Công cụ tra cứu đơn hàng nhanh (Quick Track input với icon Xe tải giao nhận).
     + Nút "Lịch sử đơn hàng".
     + Nút "Giỏ hàng" kèm badge số lượng cập nhật real-time.

2. Hero Section & Mega Menu:
   - Cột trái: Mega Menu dọc đa danh mục (Điện thoại, Tablet, Laptop, Âm thanh, Đồng hồ thông minh, Phụ kiện, PC - Màn hình, Thu cũ đổi mới, Hàng cũ). Khi hover/click có menu phụ (flyout/dropdown) chứa các thương hiệu nổi tiếng (Apple, Samsung, Xiaomi, Asus...).
   - Khung giữa: Slider/Banner lớn cuộn các chương trình khuyến mãi công nghệ hot.
   - Cột phải: 3-4 Banner phụ nhỏ (Ưu đãi học sinh - sinh viên, Trả góp 0%, Mở bán siêu phẩm mới).
   - Dải banner ticker phụ bên dưới: 4 cam kết vàng (Hàng chính hãng 100%, Bảo hành 12-24 tháng, 1 đổi 1 trong 30 ngày, Giao hàng siêu tốc 2h).

3. Phân hệ Tra cứu đơn hàng nhanh (Quick Order Tracking Box):
   - Thiết kế nổi bật, có ô nhập Order ID, nút "Kiểm tra lộ trình".
   - Bắt sự kiện: Nếu mã có thực -> Chuyển sang `tracking-detail.html?id=[Mã_đơn]`. Nếu chưa có -> Toast cảnh báo và gợi ý 2 mã mẫu (ORD-8899, ORD-6688) bấm để xem thử ngay.

4. Khối Flash Sale / "Hotsale Giờ Vàng":
   - Thanh tiêu đề Flash Sale nền gradient đỏ, kèm icon tia sét và đồng hồ đếm ngược giờ vàng (Countdown: 08:45:12).
   - Danh sách sản phẩm sale có thanh tiến trình "Đã bán [x]/100 cái" kiểu CellphoneS, nhãn giảm giá đỏ (% OFF).

5. Các Block danh mục theo ngành hàng (Mỗi block có tab thương hiệu + Banner riêng):
   - Block 1: ĐIỆN THOẠI NỔI BẬT (Tabs: Apple iPhone, Samsung Galaxy, Xiaomi, OPPO; Banner dọc cạnh trái + Grid 8 sản phẩm).
   - Block 2: LAPTOP & MÁY TÍNH BẢNG (Tabs: Laptop Gaming, Văn phòng, MacBook, iPad; Kèm thông số nhanh: Chip CPU, RAM, Ổ cứng).
   - Block 3: PHỤ KIỆN GIÁ RẺ (Tai nghe, Sạc dự phòng, Cáp sạc, Ốp lưng; Giá sốc sinh viên).

6. Khối Tin tức Công nghệ (Sforum Style):
   - 4 bài viết thủ thuật/đánh giá công nghệ dạng thẻ card hình ảnh.

7. Footer thương mại điện tử 4 cột:
   - Thông tin liên hệ, tổng đài miễn phí, hệ thống cửa hàng, chính sách bảo hành, phương thức thanh toán (Visa, MoMo, VNPAY, COD), chứng nhận Bộ Công Thương.

---

### YÊU CẦU ĐẶC THÙ CHO PHÂN HỆ VẬN CHUYỂN & CHECKOUT:

1. Trang Thanh toán (checkout.html):
   - Giỏ hàng có tăng/giảm số lượng, áp mã giảm giá.
   - Form nhận hàng -> Khi bấm "Xác nhận đặt hàng" tự động tạo mã đơn ngẫu nhiên (ví dụ: ORD-XXXX), lưu vào `localStorage`, và chuyển ngay sang `tracking-detail.html?id=[Mã_vừa_tạo]`.

2. Trang Chi tiết Vận chuyển (tracking-detail.html) - BẮT BUỘC ĐÚNG YÊU CẦU HỌC PHẦN:
   - Timeline trạng thái đơn hàng (Đã đặt -> Đã xác nhận -> Đang giao -> Thành công):
     + BẮT BUỘC dùng CSS Pseudo-elements (`::before`, `::after`) để vẽ đường kẻ nối tiến trình và các nốt trạng thái.
     + Tô màu Active/Completed kèm animation pulse nổi bật cho mốc hiện tại.
   - Đồng hồ đếm ngược (Countdown Timer) JavaScript: Đếm lùi thời gian dự kiến nhận hàng theo giờ:phút:giây.
   - Thẻ thông tin Shipper: Tên shipper, hình đại diện, số điện thoại, đơn vị vận chuyển (Giao Hàng Nhanh / Hỏa Tốc CellphoneS), biển số xe.
   - Khung mô phỏng lộ trình vận chuyển trực quan.

3. Trang Lịch sử mua hàng (history.html):
   - Bảng danh sách đơn hàng lấy từ `localStorage` + mock data có sẵn (với các trạng thái khác nhau).
   - Có bộ lọc tab (Tất cả, Chờ xử lý, Đang giao, Đã giao) và nút "Theo dõi" để mở trang tracking.

---

### YÊU CẦU KỸ THUẬT:
- HTML5 ngữ nghĩa, CSS3 hiện đại (Flexbox, CSS Grid, biến màu `:root`).
- Giao diện trau chuốt, tỉ mỉ, đầy đặn thông tin, chuẩn Responsive cho cả Mobile và Desktop.
- JavaScript thuần ES6 sạch sẽ, đồng bộ dữ liệu `localStorage` giữa Giỏ hàng, Đặt hàng, Lịch sử và Tra cứu lộ trình.
- Cung cấp toàn bộ mã nguồn đầy đủ, không viết tắt hay lược bỏ code (`// code here`).
````

---

## <a id="prompt-3"></a>Prompt 3: Xây dựng lại toàn bộ giao diện theo thương hiệu TechZone

- **Thời gian gửi:** `2026-10-20T14:00:14Z`

### Nội dung yêu cầu:

````markdown
Xây dựng lại giao diện cho website bán hàng công nghệ đa trang (multi-page) với tên thương hiệu riêng hoàn toàn mới: "TechZone" (hoặc "NextGen Tech") theo phong cách hiện đại, chuyên nghiệp.

### 1. PHONG CÁCH GIAO DIỆN MỚI (KHÁC BIỆT CELLPHONES):
- Bảng màu mới: Sử dụng tone màu xanh công nghệ chủ đạo (Primary: Xanh Navy/Deep Blue #0f172a, Accent: Xanh Cyan/Electric Blue #0284c7 hoặc #2563eb), nền xám sáng thanh lịch (#f8fafc). Tránh dùng tone màu đỏ của CellphoneS.
- Typography: Font không chân hiện đại (Inter / Roboto), bo góc thẻ mềm mại (rounded-xl), đổ bóng nhẹ (box-shadow) tạo chiều sâu.

---

### 2. GIỮ NGUYÊN CẤU TRÚC CÁC PHÂN MỤC (SECTIONS THEO ẢNH):

#### A. Header Đa Tầng (Multi-tier Header):
1. Top Bar trên cùng:
   - Bên trái: Chọn vị trí tỉnh/thành, Danh sách chi nhánh cửa hàng, Góc tin công nghệ.
   - Bên phải: Hotline hỗ trợ miễn phí, Nút "Tra cứu đơn hàng".
2. Main Header:
   - Logo thương hiệu riêng (ví dụ: TechZone - Biểu tượng chip/box công nghệ).
   - Nút menu danh mục (Dropdown Toggle).
   - Thanh tìm kiếm sản phẩm lớn ở giữa (có placeholder gợi ý và nút Tìm kiếm nổi bật).
   - Nhóm nút thao tác bên phải:
     + Nút "Tra cứu đơn hàng" (có icon kiện hàng).
     + Nút "Lịch sử mua" (có icon đồng hồ/hóa đơn).
     + Nút "Giỏ hàng" (có badge đếm số lượng mặt hàng).

#### B. Khu Vực Hero Layout (Bố cục 3 cột kinh điển):
- Cột trái (Sidebar Categories): Danh mục ngành hàng dọc (Điện thoại, Laptop & Màn hình, Thiết bị âm thanh, Smartwatch, Phụ kiện, Linh kiện PC, Thu cũ đổi mới...).
- Khung giữa (Main Slider): Banner trượt trình chiếu các chương trình ưu đãi lớn (có nút prev/next và chấm chuyển slide).
- Cột phải (Sub Banners): Khối 3 banner/card phụ xếp chồng theo chiều dọc (Ưu đãi tai nghe, Smartwatch, Máy tính bảng).

#### C. Thanh Cam Kết Dịch Vụ (Trust Badges Bar):
- 4 khối icon cam kết nằm ngang ngay dưới banner:
  1. Hàng chính hãng 100%
  2. Bảo hành 12 - 24 tháng
  3. Đổi trả dễ dàng 30 ngày
  4. Giao hàng hỏa tốc trong 2 giờ

#### D. Widget Tra Cứu Đơn Hàng Nhanh (Order Tracking Widget):
- Đặt ngay sau thanh cam kết: Form nhập nhanh "Mã đơn hàng", nút "Kiểm tra tiến trình", kèm 2-3 mã đơn mẫu (click là tự điền) để điều hướng sang trang `tracking-detail.html?id=[Mã_đơn]`.

#### E. Các Section Bán Hàng & Danh Mục Bên Dưới:
- Section Flash Sale giờ vàng (có countdown và thanh tiến trình đã bán).
- Section Lưới sản phẩm nổi bật (Điện thoại, Laptop) có tag giảm giá, đánh giá sao, nút thêm vào giỏ.
- Footer đầy đủ 4 cột thông tin hỗ trợ, bảo hành, phương thức thanh toán.

---

### 3. CÁC TRANG CÒN LẠI TRONG HỆ THỐNG:
1. tracking-detail.html (Chi tiết vận chuyển - Bắt buộc theo barem):
   - Đọc ID từ URL parameter `?id=...`.
   - Sơ đồ Timeline trạng thái đơn hàng: BẮT BUỘC sử dụng CSS Pseudo-elements (`::before`, `::after`) để vẽ các đường line nối và mốc trạng thái (Đã đặt -> Đã xác nhận -> Đang giao -> Thành công).
   - Đồng hồ đếm ngược (Countdown Timer) thời gian dự kiến nhận hàng bằng JavaScript.
   - Thẻ thông tin shipper (Tên, SĐT, biển số xe) và danh sách sản phẩm trong kiện.
2. history.html (Lịch sử đơn hàng):
   - Danh sách các đơn hàng đã thực hiện (lấy từ localStorage + mock data), có badge trạng thái và nút xem chi tiết dẫn về tracking-detail.html.
3. checkout.html (Đặt hàng):
   - Form thanh toán, khi bấm xác nhận sẽ sinh mã đơn mới (ví dụ: `TZ-10823`), lưu vào localStorage và tự động điều hướng sang tracking-detail.html.

---

### 4. YÊU CẦU KỸ THUẬT:
- HTML5 ngữ nghĩa, CSS3 hiện đại (CSS Variables, Flexbox, Grid).
- CSS Pseudo-elements cho Timeline đơn hàng theo đúng yêu cầu học phần.
- JavaScript thuần lưu trữ giỏ hàng và danh sách đơn bằng `localStorage`.
- Cung cấp mã nguồn hoàn chỉnh, cấu trúc rõ ràng từng file để có thể chạy ngay.
````

---

## <a id="prompt-4"></a>Prompt 4: Sửa lỗi hiển thị các section danh mục sản phẩm (Điện thoại, Laptop, Phụ kiện)

- **Thời gian gửi:** `2026-10-20T14:10:57Z`

### Nội dung yêu cầu:

````markdown
Hãy sửa lại toàn bộ code HTML và CSS cho các Section danh mục sản phẩm (Điện thoại, Laptop, Phụ kiện) trên website vì đang gặp các lỗi hiển thị sau:

### 1. SỬA LỖI GRID VÀ SỐ LƯỢNG SẢN PHẨM:
- Lưới sản phẩm bên phải banner dọc BẮT BUỘC phải đủ 8 sản phẩm (chia làm 2 hàng x 4 cột đều đặn), không để tình trạng hàng dưới chỉ có 1-2 sản phẩm gây hổng giao diện.
- Sửa lại link ảnh bị vỡ (đặc biệt là sản phẩm sạc dự phòng/phụ kiện), thay toàn bộ bằng link ảnh demo Unsplash hoạt động 100% hoặc placeholder SVG có icon sắc nét.

### 2. SỬA CHIỀU CAO & TỶ LỆ BANNER BÊN TRÁI:
- Banner dọc bên trái (`.category-banner`) phải có chiều cao bằng chính xác 100% chiều cao của khối lưới 8 sản phẩm bên phải (`height: 100%`).
- Sử dụng thuộc tính `object-fit: cover; object-position: center; border-radius: 12px;` để ảnh banner không bị méo, không bị vỡ tỷ lệ khi co giãn.

### 3. SỬA CẤU TRÚC CARD SẢN PHẨM (ĐỒNG ĐỀU 100%):
- Mỗi card sản phẩm phải dùng `display: flex; flex-direction: column; height: 100%;`.
- Tên sản phẩm (`.product-title`): Giới hạn hiển thị đúng 2 dòng bằng CSS:
  `display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 2.8em;`
- Khung ảnh sản phẩm (`.product-img`): Đặt chiều cao cố định (ví dụ `height: 150px; width: 100%; object-fit: contain;`) để ảnh hiển thị gọn gàng, không bị tràn viền.
- Cụm nút bấm ("Thêm giỏ" & "Mua ngay"): Đặt `margin-top: auto;` để tất cả các nút luôn luôn nằm thẳng hàng tăm tắp ở dưới đáy card, bất kể nội dung thông số bên trên dài hay ngắn.

### 4. CẤU TRÚC CSS GRID CHUẨN XÁC:
```css
/* Layout bao quanh */
.category-box {
  display: grid;
  grid-template-columns: 240px 1fr; /* Banner trái 240px, còn lại cho grid */
  gap: 16px;
  align-items: stretch;
}

.category-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* Lưới 8 sản phẩm (2 hàng x 4 cột) */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
}
````

---

## <a id="prompt-5"></a>Prompt 5: Thay đổi bố cục layout danh mục sản phẩm, bỏ banner lớn cạnh card

- **Thời gian gửi:** `2026-10-20T14:30:11Z`

### Nội dung yêu cầu:

````markdown
Hãy thay đổi hoàn toàn phương án bố cục (layout) cho các section danh mục: "Điện thoại", "Laptop & Máy tính bảng", "Phụ kiện công nghệ". BỎ HẲN banner dọc bên trái vì hay bị lỗi méo ảnh và lệch chiều cao.

### PHƯƠNG ÁN BỐ CỤC MỚI (CHUẨN E-COMMERCE HIỆN ĐẠI):

1. CẤU TRÚC HEADER MỖI DANH MỤC:
- Dòng tiêu đề danh mục bên trái (VD: "📱 ĐIỆN THOẠI NỔI BẬT").
- Dải Tab lọc nhanh bên phải (Tất cả, Apple, Samsung, Xiaomi, OPPO...) có thể bấm chuyển đổi tab.

2. BANNER NGANG PHỤ (Tùy chọn):
- Một banner ngang mỏng (chiều cao ~120px - 140px, rộng 100%) đặt ngay dưới tiêu đề để quảng bá chương trình chung, bo góc 12px, tràn đều chiều ngang.

3. LƯỚI SẢN PHẨM TOÀN PHẦN (FULL-WIDTH 5 CỘT HOẶC 4 CỘT):
- Bỏ chia cột trái/phải. Sử dụng CSS Grid toàn chiều rộng container:
  `grid-template-columns: repeat(5, 1fr); gap: 14px;` (trên Desktop hiển thị 5 sản phẩm/hàng, tổng cộng 10 sản phẩm chia đều 2 hàng).
  (Trên Tablet tự co về 3 cột, trên Mobile co về 2 cột).

4. CHUẨN HÓA CARD SẢN PHẨM KHÔNG BAO GIỜ BỊ LỆCH:
- Mỗi card có viền xám nhẹ `border: 1px solid #e2e8f0; border-radius: 12px; background: #fff; padding: 12px; display: flex; flex-direction: column; justify-content: space-between;`.
- Khung ảnh sản phẩm: Chiều cao cố định `height: 160px; display: flex; align-items: center; justify-content: center;`. Ảnh bên trong dùng `max-height: 100%; max-width: 100%; object-fit: contain;` (sử dụng link ảnh sản phẩm nền trắng trong suốt hoặc link Unsplash chuẩn công nghệ, KHÔNG DÙNG link die).
- Tên sản phẩm: Đặt cố định chiều cao `height: 40px;` với `-webkit-line-clamp: 2;` để tên dài hay ngắn thì khung vẫn bằng nhau.
- Khối thông số kỹ thuật (Tags/Chip): Kích thước nhỏ gọn, đồng đều.
- Khối Giá & Nút bấm:
  + Giá khuyến mãi in đậm màu xanh/đỏ, giá gốc gạch ngang.
  + Cụm nút "Thêm giỏ" & "Mua ngay" luôn bám sát đáy thẻ (`margin-top: auto`).

5. CUỐI SECTION:
- Nút bấm bo tròn ở giữa: "Xem tất cả [Tên danh mục] >" dẫn sang trang products.html.

Hãy viết lại mã nguồn HTML và CSS của 3 section này theo phương án Full-width Grid mới, đảm bảo 100% không bị hổng hàng và hiển thị thẳng hàng tăm tắp!
````

---

## <a id="prompt-6"></a>Prompt 6: Thiết kế lại trang Lịch sử đơn hàng (history.html) & Chi tiết vận chuyển (tracking-detail.html) chuẩn Shopee

- **Thời gian gửi:** `2026-10-20T14:45:38Z`

### Nội dung yêu cầu:

````markdown
Thiết kế và code lại 2 trang: Lịch sử đơn hàng (history.html) và Chi tiết vận chuyển (tracking-detail.html) theo chuẩn giao diện Shopee (Shopee Order Management & Tracking Style).

### 1. TRANG LỊCH SỬ ĐƠN HÀNG (history.html) - CHUẨN GIAO DIỆN SHOPEE:

1. Thanh Tab Trạng Thái Đơn Hàng (Shopee Navigation Tabs):
   - Nằm ngang trên cùng gồm các tab: [Tất cả] | [Chờ xác nhận] | [Đang giao] | [Đã giao] | [Đã hủy].
   - Có hiệu ứng gạch chân màu chủ đạo khi active. Bấm tab nào thì dùng JavaScript lọc nhanh danh sách đơn hàng tương ứng mà không cần reload trang.

2. Cấu trúc mỗi Thẻ Đơn Hàng (Order Card kiểu Shopee):
   - Header thẻ: Mã đơn hàng (VD: #SPX-892341), Ngày đặt hàng, kèm trạng thái đơn hàng (Badge text màu cam/xanh bên phải, ví dụ: "ĐANG VẬN CHUYỂN" hoặc "GIAO THÀNH CÔNG").
   - Thân thẻ (Item List):
     + Ảnh đại diện sản phẩm nhỏ (80x80px vuông vức).
     + Tên sản phẩm, phân loại hàng (RAM/Bộ nhớ/Màu sắc), số lượng (x1, x2).
     + Giá tiền sản phẩm.
   - Footer thẻ:
     + Dòng thông báo trạng thái vận chuyển ngắn kiểu Shopee: "🚚 Đơn hàng đang trên đường giao đến bạn".
     + Tổng số tiền thanh toán (In đậm nổi bật).
     + Cụm nút hành động bên phải: Nút phụ "Liên hệ Shop" và Nút chính nổi bật "Theo dõi đơn hàng" (bấm vào chuyển hướng sang `tracking-detail.html?id=[Mã_đơn]`).

---

### 2. TRANG THEO DÕI VẬN CHUYỂN (tracking-detail.html) - CHUẨN SHOPEE EXPRESS:

1. Khối Tổng Quan & Countdown:
   - Hiển thị Mã vận đơn, Đơn vị vận chuyển (Shopee Express / SPX Speed), Tên tài xế & Số điện thoại shipper.
   - Khung thông báo màu xanh/vàng nhạt: "Dự kiến giao hàng vào: [Thời gian]" kèm Đồng hồ đếm ngược (Countdown Timer) JavaScript thời gian còn lại.
   - Nút quay lại danh sách đơn hàng ("< Trở về lịch sử").

2. Sơ Đồ Tiến Trình Vận Chuyển (Timeline Ngang + Dọc kiểu Shopee):
   - Phần 1: Thanh tiến trình 4 bước tổng quát nằm ngang: [1. Đơn Đã Đặt -> 2. Đã Xác Nhận -> 3. Đang Vận Chuyển -> 4. Giao Hàng Thành Công].
     + BẮT BUỘC: Sử dụng CSS Pseudo-elements (`::before`, `::after`) để vẽ các đường line nối mốc và chấm tròn icon. Trạng thái đã qua có màu đậm, trạng thái chưa tới có màu xám mờ.
   - Phần 2: Lịch sử hành trình chi tiết (Vertical Timeline theo dòng thời gian bên dưới):
     + Dùng CSS `::before` tạo một đường kẻ dọc liền mạch kết nối các mốc thời gian.
     + Mỗi mốc gồm: Giờ & Ngày (VD: 14:30 20-10-2026), Vị trí/Hành động chi tiết (VD: "Đơn hàng đã rời kho trung chuyển Tân Bình", "Shipper Nguyễn Văn A [0987xxx] đang giao hàng", v.v.). Mốc mới nhất nằm trên cùng và sáng màu hơn.

3. Khối Thông Tin Nhận Hàng & Thanh Toán:
   - Địa chỉ nhận hàng (Tên, SĐT, Địa chỉ chi tiết).
   - Chi tiết phương thức thanh toán (COD hoặc Ví ShopeePay/VNPAY) và bảng tóm tắt: Tiền hàng, Phí vận chuyển, Giảm giá voucher, Tổng cộng.

---

### 3. YÊU CẦU KỸ THUẬT:
- Dùng HTML5 ngữ nghĩa, CSS3 hiện đại (Flexbox, CSS Pseudo-elements `::before`/`::after` đúng barem chấm điểm).
- JavaScript thuần: 
  + Đọc `id` từ URL query (`?id=...`).
  + Mock sẵn 4-5 đơn hàng đầy đủ dữ liệu phong phú để bấm test tab nào cũng có đơn.
  + Logic Countdown Timer chạy chuẩn theo từng giây.
- Viết code sạch sẽ, chia rõ từng file HTML, CSS và JS để dễ copy vào project.
````

---

## <a id="prompt-7"></a>Prompt 7: Thay thế prompt chọn tỉnh/thành bằng Dropdown Menu trên Topbar

- **Thời gian gửi:** `2026-10-20T15:07:26Z`

### Nội dung yêu cầu:

````markdown
Hãy sửa lại thanh Topbar và Header trong toàn bộ các file HTML, CSS và JavaScript:

### 1. THAY THẾ HÀM PROMPT BẰNG DROPDOWN MENU CHỌN TỈNH/THÀNH:
- BỎ HOÀN TOÀN việc dùng `prompt()` trong JavaScript khi click vào nút địa điểm.
- Khi người dùng bấm vào nút "Hà Nội" (có icon vị trí 📍 và mũi tên sổ xuống ▾):
  + Hiển thị một Custom Dropdown Menu đẹp mắt ngay bên dưới nút đó (hoặc dạng Bottom Sheet/Modal popup trên điện thoại).
  + Danh sách lựa chọn gồm các tỉnh/thành: [Hà Nội, TP. Hồ Chí Minh, Đà Nẵng, Cần Thơ, Hải Phòng, Đồng Nai].
  + Cho phép click vào bất kỳ tỉnh nào: Cập nhật ngay tên tỉnh/thành hiển thị trên nút bấm, lưu lựa chọn vào `localStorage.setItem('selectedLocation', ...)` và tự động đóng menu.
  + Click ra ngoài vùng menu sẽ tự động đóng lại (Click outside to close).

### 2. SỬA LỖI RESPONSIVE CHO MOBILE (KHÔNG BỊ TRÀN VIỀN):
- Thanh Topbar (Chứa vị trí, hotline, cam kết):
  + Trên Desktop: Hiển thị đầy đủ vị trí, cam kết chính hãng, hotline.
  + Trên Mobile (< 768px): Chỉ giữ lại nút Chọn vị trí (📍 Hà Nội ▾) và Hotline (hoặc ẩn các text phụ rườm rà như "Cam kết 100%...", không để text bị cắt đôi hay tràn màn hình).
- Header & Tiêu đề:
  + Header phải có `width: 100%; max-width: 100%; box-sizing: border-box; overflow-x: hidden;`.
  + Logo TechZone và thanh tiêu đề/nút bấm phải co giãn vừa vặn với màn hình điện thoại (iPhone, Android 375px - 440px), dùng `flex-wrap: wrap` hoặc giảm font-size phù hợp.

Hãy cung cấp đoạn mã HTML, CSS và JS cập nhật chi tiết để thay thế trực tiếp vào mã nguồn hiện tại.
````

---

## <a id="prompt-8"></a>Prompt 8: Sửa lỗi menu địa điểm bị mờ và không click được

- **Thời gian gửi:** `2026-10-20T15:21:32Z`

### Nội dung yêu cầu:

````markdown
Hãy sửa triệt để 2 lỗi giao diện sau trong file CSS và JS:

### 1. SỬA LỖI MENU ĐỊA ĐIỂM BỊ MỜ VÀ KHÔNG CLICK ĐƯỢC:
- Nguyên nhân: Lớp nền mờ (overlay/backdrop) đang đè lên trên menu chọn tỉnh/thành khiến chuột không tương tác được.
- Cách sửa:
  + Nếu có lớp phủ overlay, đặt z-index của overlay là 998, còn menu dropdown/popup chọn tỉnh/thành BẮT BUỘC có `z-index: 1000 !important; position: relative` (hoặc `fixed/absolute`).
  + Đảm bảo menu KHÔNG bị áp dụng `filter: blur()`, `pointer-events: none` hoặc bị thẻ cha có `overflow: hidden` che khuất.
  + Thêm trực tiếp sự kiện: khi click vào bất kỳ mục tỉnh/thành nào (Hà Nội, TP.HCM, Đà Nẵng, Đồng Nai...), gán lại tên trên thanh Topbar, đóng popup/overlay và cho phép trang web hoạt động bình thường ngay lập tức.

### 2. SỬA LỖI CARD SẢN PHẨM BỊ TRÀN VIỀN / CẮT MẤT NÚT TRÊN MOBILE (iPhone SE 375px):
- Thân trang và Container chính:
  Thêm vào thẻ body và container: `width: 100%; max-width: 100vw; overflow-x: hidden; box-sizing: border-box;`.
- Dải nút thương hiệu (Samsung, Xiaomi, ASUS...):
  Đặt `display: flex; flex-wrap: nowrap; overflow-x: auto; -webkit-overflow-scrolling: touch; gap: 8px; padding-bottom: 6px;` để vuốt trượt ngang mượt mà trên mobile, không bị vỡ layout.
- Lưới sản phẩm (Grid sản phẩm trên mobile):
  ```css
  @media (max-width: 640px) {
    .products-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important; /* 2 cột tự co giãn đều */
      gap: 8px !important;
      padding: 0 8px !important;
      width: 100% !important;
      box-sizing: border-box !important;
    }

    .product-card {
      width: 100% !important;
      min-width: 0 !important; /* Bắt buộc để không bị tràn chữ */
      padding: 8px !important;
      box-sizing: border-box !important;
    }

    .product-card .product-title {
      font-size: 12px !important;
      line-height: 1.3 !important;
      height: 32px !important;
    }

    .product-card .price-current {
      font-size: 13px !important;
    }

    /* Đưa 2 nút Thêm giỏ & Mua ngay thành 1 hàng hoặc xếp dọc vừa vặn */
    .product-card .card-actions {
      display: flex !important;
      flex-direction: column !important; /* Xếp dọc 2 nút trên màn hình nhỏ để không bị cắt chữ */
      gap: 4px !important;
      width: 100% !important;
      margin-top: auto !important;
    }

    .product-card .card-actions button {
      width: 100% !important;
      padding: 6px 0 !important;
      font-size: 11px !important;
      white-space: nowrap !important;
    }
  }
````

---

## <a id="prompt-9"></a>Prompt 9: Thêm nút Trang chủ, Menu Danh mục Mega Menu và Widget tra cứu mã đơn hàng

- **Thời gian gửi:** `2026-10-20T15:36:01Z`

### Nội dung yêu cầu:

````markdown
Hãy cập nhật lại giao diện và chức năng trên website với 3 yêu cầu cụ thể sau:

### 1. THÊM NÚT "TRANG CHỦ" TRÊN HEADER:
- Thêm một nút liên kết "Trang chủ" (có icon ngôi nhà 🏠) nằm ngay cạnh Logo hoặc cạnh nút "Danh mục" trên thanh Header.
- Khi người dùng ở bất kỳ trang nào (giỏ hàng, tra cứu vận chuyển, lịch sử), bấm nút này sẽ điều hướng quay về trang chủ (index.html).

### 2. XỬ LÝ SỰ KIỆN CLICK NÚT "DANH MỤC" ĐỂ SỔ RA MENU (DROPDOWN / MEGA MENU):
- Nút "Danh mục" (có icon 3 gạch ☰):
  + Khi click vào: Sổ xuống một Menu danh mục dạng Dropdown (hoặc Mega Menu đa cấp) mượt mà ngay bên dưới nút.
  + Danh sách gồm các ngành hàng:
    1. 📱 Điện thoại & Tablet
    2. 💻 Laptop & Màn hình máy tính
    3. 🎧 Thiết bị Âm thanh (Tai nghe, Loa)
    4. ⌚ Đồng hồ thông minh (Smartwatch)
    5. 🔌 Phụ kiện sạc cáp, pin dự phòng
    6. 🔄 Thu cũ đổi mới - Trợ giá cao
  + Khi click vào một ngành hàng: Cuộn mượt (smooth scroll) tới section tương ứng trên trang chủ hoặc dẫn sang trang products.html lọc theo danh mục đó, đồng thời tự động đóng menu lại.
  + Click lần 2 vào nút hoặc click ra ngoài vùng menu (click outside) sẽ tự động ẩn menu.
  + Đảm bảo menu có `z-index: 1000 !important;` để không bị các banner hoặc hình ảnh bên dưới che khuất.

### 3. TẠO SECTION "FLASH SALE GIỜ VÀNG" TRÊN TRANG CHỦ (index.html):
- Đặt ngay bên dưới Banner Hero hoặc sau thanh cam kết:
  + Header Flash Sale: Icon tia sét ⚡ hoặc lửa 🔥, tiêu đề "FLASH SALE GIỜ VÀNG", kèm đồng hồ đếm ngược (Countdown Timer: Giờ : Phút : Giây) chạy lùi từng giây theo thời gian thực bằng JavaScript.
  + Lưới sản phẩm Flash Sale (4 hoặc 5 sản phẩm dàn ngang):
    * Ảnh sản phẩm sắc nét, tag giảm sốc (-35%, -45%).
    * Tên sản phẩm, giá sale nổi bật (màu cam/đỏ), giá gốc gạch ngang.
    * Thanh tiến trình bán hàng đặc trưng Flash Sale: Một thanh progress bar hiển thị text "🔥 Đã bán [x]/[y]" (ví dụ: Đã bán 28/30 suất).
    * Nút "Mua ngay" hoặc "Săn sale".

Hãy cung cấp mã nguồn HTML, CSS và JavaScript bổ sung chi tiết để tôi thay thế vào dự án!
````

---

## <a id="prompt-10"></a>Prompt 10: Xử lý logic lọc sản phẩm theo danh mục khi click Menu Danh mục

- **Thời gian gửi:** `2026-10-20T15:58:07Z`

### Nội dung yêu cầu:

````markdown
Hãy sửa lại logic JavaScript và HTML cho Menu Danh mục: khi người dùng bấm vào một mục (ví dụ: "1. Điện thoại & Tablet", "2. Laptop...", "3. Phụ kiện..."), trang web PHẢI LỌC và CHỈ HIỂN THỊ sản phẩm thuộc đúng danh mục đó, không được hiển thị tất cả.

### YÊU CẦU SỬA CHI TIẾT:

1. Gắn thuộc tính data-category vào từng item trong Menu danh mục:
   - Mục 1 (Điện thoại & Tablet): data-category="phone"
   - Mục 2 (Laptop & Màn hình): data-category="laptop"
   - Mục 3 (Thiết bị Âm thanh): data-category="audio"
   - Mục 4 (Đồng hồ thông minh): data-category="watch"
   - Mục 5 (Phụ kiện sạc cáp): data-category="accessory"

2. Quy chuẩn dữ liệu mảng sản phẩm (Mock Data):
   - Mỗi object sản phẩm trong mảng products bắt buộc phải có trường category tương ứng (ví dụ: category: 'phone', category: 'laptop', category: 'accessory'...).

3. Logic JavaScript xử lý khi bấm vào từng mục:
   - Nếu đang ở trang chủ (index.html):
     + Cách 1: Tự động ẩn các section khác, chỉ cuộn xuống và hiển thị đúng khối danh mục được chọn, đồng thời gắn class active.
     + Cách 2 (Khuyên dùng): Chuyển hướng sang trang products.html?category=[tên_category].
   - Tại trang hiển thị danh sách sản phẩm (products.html hoặc lưới sản phẩm chính):
     + Đọc tham số category từ URL parameter (hoặc từ sự kiện click).
     + Nếu có category: Thực hiện lọc `const filtered = products.filter(item => item.category === selectedCategory);` và chỉ render các sản phẩm này ra giao diện.
     + Cập nhật lại tiêu đề khối (Ví dụ: "Danh mục: Điện thoại & Tablet (X sản phẩm)").
     + Thêm một nút "Xem tất cả sản phẩm" để người dùng có thể xóa bộ lọc quay về ban đầu khi cần.
   - Tự động đóng menu dropdown sau khi đã chọn.

Hãy cung cấp đoạn code HTML cho Menu danh mục và code JavaScript xử lý lọc hoàn chỉnh để tôi dán đè vào project!
````

---

## <a id="prompt-11"></a>Prompt 11: Thiết kế lại cụm huy hiệu Giảm giá & Trả góp 0% trên thẻ sản phẩm

- **Thời gian gửi:** `2026-10-20T16:13:50Z`

### Nội dung yêu cầu:

````markdown
Hãy thiết kế lại cụm hiển thị "Giảm giá" và "Trả góp 0%" trên thẻ sản phẩm (Product Card) để trông chuyên nghiệp, bắt mắt theo phong cách sàn thương mại điện tử lớn:

1. Tách riêng 2 huy hiệu (Badges) độc lập:
   - Badge Giảm giá (Discount Badge):
     + Nền màu đỏ nổi bật (Gradient đỏ tươi: linear-gradient(135deg, #ef4444, #dc2626)).
     + Chữ màu trắng in đậm, có icon tia sét ⚡ hoặc giảm giá (ví dụ: "⚡ Giảm 29%").
     + Bo góc mềm mại (rounded-md/pill), có đổ bóng nhẹ.
   - Badge Trả góp (Installment Badge):
     + Kiểu dáng tag viền mỏng tinh tế: nền xanh pastel nhẹ (#eff6ff), viền xanh dương (#3b82f6), chữ xanh đậm (#1d4ed8), font-weight: 600 (ví dụ: "Trả góp 0%").

2. Vị trí và bố cục trên Card:
   - Đặt hai badge nằm ngang song song ở góc trên cùng của card sản phẩm (hoặc dạng position: absolute đè nhẹ lên góc trên ảnh sản phẩm để tiết kiệm diện tích và tăng tính thẩm mỹ).
   - Đảm bảo co giãn tốt trên điện thoại (Mobile Responsive) không bị tràn hàng hay mất chữ.

Cung cấp lại đoạn mã HTML của phần badge trên Product Card và toàn bộ CSS tương ứng để tôi thay thế.
````

---

## <a id="prompt-12"></a>Prompt 12: Tối ưu CSS Header và Topbar chống vỡ layout khi Zoom trình duyệt (125% - 200%)

- **Thời gian gửi:** `2026-10-20T16:22:15Z`

### Nội dung yêu cầu:

````markdown
Hãy sửa lại toàn bộ CSS phần Header và Topbar để khi người dùng Zoom trình duyệt (125%, 150%, 200%) hoặc trên màn hình nhỏ thì KHÔNG BỊ TRÀN VIỀN, vỡ layout:

1. Xử lý Header Container:
   - Áp dụng `display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; width: 100%; box-sizing: border-box; overflow-x: hidden;`.
   - Đảm bảo thanh tìm kiếm không đặt width cố định quá lớn. Khi màn hình bị thu hẹp hoặc zoom to:
     + Dòng 1: Logo TechZone, nút "Trang chủ", nút "Danh mục", và các nút Giỏ hàng / Tra cứu / Lịch sử.
     + Dòng 2 (khi thiếu diện tích): Cho phép thanh Tìm kiếm tự động rớt xuống chiếm trọn 100% chiều ngang dòng dưới (`order: 3; width: 100%;`).

2. Xử lý thanh Topbar:
   - Cho phép `flex-wrap: wrap; gap: 8px;`.
   - Khi zoom lớn hoặc màn hình nhỏ: Ẩn các text quá dài hoặc cho xuống dòng tự nhiên, tuyệt đối không tạo thanh cuộn ngang (horizontal scrollbar).

3. Toàn trang:
   - Thêm `max-width: 100vw; overflow-x: hidden;` cho html, body để chống vỡ khung hoàn toàn.

Hãy cung cấp đoạn CSS cập nhật để dán vào file style.css.
````

---

## <a id="prompt-13"></a>Prompt 13: Bố cục Header chuẩn 2 hàng khi phóng to / Zoom mức cao (150% - 250%)

- **Thời gian gửi:** `2026-10-20T16:34:02Z`

### Nội dung yêu cầu:

````markdown
Hãy sửa lại CSS phần Topbar và Header để khi người dùng Zoom trình duyệt ở mức cao (150%, 175%, 200%, 250%) giao diện KHÔNG BỊ NHẢY LUNG TUNG:

### 1. NGUYÊN TẮC BỐ CỤC KHI PHÓNG TO / MÀN HÌNH NHỎ (<= 992px):
- Header chia làm 2 hàng rõ ràng (KHÔNG để các nút rớt lộn xộn nhiều dòng):
  + Hàng 1 (flex space-between):
    * Bên trái: Logo TechZone (kích thước gọn gàng).
    * Bên phải: Gom TOÀN BỘ nút (Trang chủ, Danh mục, Tra cứu, Lịch sử, Giỏ hàng) vào MỘT khối container duy nhất (.header-actions).
    * Khi zoom lớn (hoặc màn hình nhỏ): Tự động ẩn bớt chữ mô tả, CHỈ HIỂN THỊ ICON tròn gọn gàng cho các nút (Trang chủ 🏠, Danh mục ☰, Tra cứu 🚚, Lịch sử 🕒, Giỏ hàng 🛒) để tất cả luôn vừa khít trên đúng 1 dòng.
  + Hàng 2: Thanh tìm kiếm (Search bar) chiếm 100% chiều ngang, cách đều hai bên lề.

### 2. SỬA THANH TOPBAR:
- Nút chọn Tỉnh/Thành bên trái và Hotline bên phải: Giảm padding/font-size khi zoom to, thêm `overflow-x: hidden;` để không làm xuất hiện thanh cuộn ngang.

Hãy cung cấp đoạn CSS cập nhật để dán vào file style.css!
````

---

## <a id="prompt-14"></a>Prompt 14: Tối ưu Responsive Mobile cho Tin tức công nghệ, Widget lộ trình và Footer

- **Thời gian gửi:** `2026-10-20T16:42:33Z`

### Nội dung yêu cầu:

````markdown
Hãy cập nhật lại CSS responsive cho chế độ Mobile (@media max-width: 640px) để sửa triệt để 3 lỗi giao diện sau:

### 1. SỬA MỤC TIN TỨC CÔNG NGHỆ & ĐÁNH GIÁ:
- Hiện tại trên mobile đang bị ép 4 cột khiến chữ bị cắt cụn ("Đánh giá...", "Top 4 lapt...").
- Hãy sửa lại bố cục trên Mobile:
  + Chuyển thành dạng Danh sách (1 cột duy nhất): Mỗi tin tức là 1 hàng ngang với:
    * Ảnh thu nhỏ hình chữ nhật bo góc bên trái (width: 100px, height: 75px, object-fit: cover).
    * Nội dung bên phải (flex: 1): Thời gian đăng bài nhỏ gọn, Tiêu đề bài viết đầy đủ (cho phép hiển thị 2 dòng rõ ràng), mô tả ngắn 1 dòng.
  + Hoặc chuyển thành Slider vuốt ngang (horizontal scroll), nhưng phương án danh sách 1 cột dọc là tối ưu và đẹp mắt nhất cho tin tức trên di động.

### 2. SỬA KHUNG WIDGET "TRA CỨU LỘ TRÌNH VẬN CHUYỂN":
- Khung tìm kiếm trên mobile:
  + Cho phép ô input và nút "Kiểm tra tiến trình" co giãn vừa khít, không để nút bấm bị tràn mép hay bị đè lên viền container.
  + Nút "Kiểm tra tiến trình": Giảm padding, chữ "Tra cứu" ngắn gọn hoặc đổi thành icon gửi kèm chữ "Tra cứu", đặt nằm gọn gàng bên trong ô input (hoặc nếu màn hình quá nhỏ thì cho nút bấm xuống hàng riêng chiếm 100% width).
  + Cụm nút "Đơn mẫu": Đặt `display: flex; flex-wrap: wrap; gap: 6px;` để các mã tự động rớt dòng đều đặn, không tràn lề.

### 3. SỬA CARD FLASH SALE & SẢN PHẨM:
- Đồng bộ chiều cao thẻ sản phẩm (height: 100%, display: flex, flex-direction: column).
- Khung nút bấm ở chân card: Luôn hiển thị đầy đủ cả 2 nút ("Thêm giỏ" & "Săn sale/Mua ngay") bằng cách:
  + Giảm padding nút, font chữ 12px.
  + Đặt `margin-top: auto` để phần nút luôn bám sát đáy thẻ, không bị che mất nút "Săn sale".

Hãy cung cấp đoạn CSS cập nhật để dán vào file style.css!
````

---

## <a id="prompt-15"></a>Prompt 15: Tối ưu UX tra cứu và lịch sử đơn hàng theo mô hình Shopee (Không cần nhập mã)

- **Thời gian gửi:** `2026-10-20T16:57:37Z`

### Nội dung yêu cầu:

````markdown
Hãy tối ưu lại trải nghiệm người dùng (UX) cho phần Tra cứu đơn hàng và Lịch sử đơn hàng theo mô hình Shopee: Người dùng không cần nhớ hay nhập mã đơn hàng!

### 1. RÚT GỌN NÚT TRÊN THANH HEADER:
- Gộp 2 nút "Tra cứu Đơn hàng" và "Lịch sử Đơn mua" thành DUY NHẤT 1 NÚT: "Đơn mua" (hoặc "Lịch sử đơn hàng" có icon kiện hàng 📦 hoặc hóa đơn 🧾).
- Nút này dẫn trực tiếp tới trang history.html (Lịch sử đơn mua).

### 2. TỐI ƯU TRANG LỊCH SỬ ĐƠN HÀNG (history.html) - CLICK LÀ XEM NGAY TIẾN TRÌNH:
- Hiển thị danh sách các đơn hàng dạng thẻ (Shopee Order Cards) trực quan:
  + Có ảnh đại diện sản phẩm, tên máy, phân loại màu/dung lượng, giá tiền, ngày mua.
  + Có badge trạng thái rõ ràng: "🚚 Đang giao hàng", " Chờ xác nhận", " Giao thành công".
  + Dòng tóm tắt tiến trình mới nhất ngay trên thẻ (Ví dụ: "Shipper đang giao hàng tại Biên Hòa - Dự kiến nhận hôm nay").
- BẤM VÀO LÀ XEM:
  + Cho phép người dùng CLICK VÀO BẤT KỲ ĐÂU TRÊN THẺ SẢN PHẨM (hoặc bấm nút "Xem lộ trình vận chuyển" nổi bật) là lập tức mở chi tiết lộ trình vận chuyển mà KHÔNG CẦN NHẬP MÃ.
  + Kỹ thuật: Điều hướng sang `tracking-detail.html?id=[Mã_đơn_tương_ứng]` hoặc mở trực tiếp một Modal Popup Timeline vận chuyển ngay trên trang mà không cần chuyển trang.

### 3. XÓA BỎ HOẶC THAY THẾ KHUNG NHẬP MÃ TRÊN TRANG CHỦ:
- Xóa bỏ widget ô input gõ mã đơn hàng thủ công trên trang chủ (index.html) vì không thực tế.
- Thay thế bằng một Banner nhỏ/Widget thông báo thông minh:
  + Nếu có đơn hàng gần nhất đang giao: Hiển thị thanh trạng thái mini "Đơn hàng [Tên sản phẩm] đang trên đường giao - [Xem chi tiết]".
  + Nếu không có: Nút nhanh "Xem đơn mua của bạn" dẫn vào history.html.

### 4. TRANG CHI TIẾT VẬN CHUYỂN (tracking-detail.html):
- Khi được mở từ cú click đơn hàng, trang tự động hiển thị:
  + Sản phẩm trong đơn (ảnh, tên, giá).
  + Timeline tiến trình (CSS Pseudo-elements `::before`, `::after`).
  + Đồng hồ đếm ngược thời gian dự kiến giao.
  + Thông tin Shipper và trạm vận chuyển.
  + Nút "← Quay lại danh sách đơn mua" ở góc trên để quay về dễ dàng.

Hãy cung cấp lại đoạn HTML/CSS/JS cập nhật cho Header và trang history.html để áp dụng ngay!
````

---

## <a id="prompt-16"></a>Prompt 16: Thêm 3 banner phụ mini (Mini Promo Cards) lấp khoảng trống khu vực Hero Section

- **Thời gian gửi:** `2026-10-20T17:18:34Z`

### Nội dung yêu cầu:

````markdown
Tại khu vực Hero Section trên trang chủ (index.html), cột giữa hiện đang có một khoảng trống màu trắng bên dưới ảnh slider lớn. 

Hãy sửa lại bằng 1 trong 2 cách:
1. Thêm một dải 3 banner phụ mini (Mini Promo Cards) nằm ngang ngay bên dưới slider để lấp kín khoảng trống đó (mỗi card gồm: badge khuyến mãi, tên sản phẩm hot như iPhone 16/Galaxy AI, và quyền lợi trợ giá thu cũ/quà tặng, bo góc đều với khung slider).
2. Đồng thời căn chỉnh CSS của 3 cột (Danh mục trái - Slider giữa - 3 Banner phải) sử dụng `align-items: stretch; height: 100%;` để chiều cao của cả 3 cột luôn luôn bằng nhau tuyệt đối, không bao giờ bị hở khoảng trắng ở đáy.
````

---

## <a id="prompt-17"></a>Prompt 17: Thêm icon cho ô Hàng Chính Hãng 100% & Xóa mục Tra cứu đơn hàng trên Topbar

- **Thời gian gửi:** `2026-10-20T17:27:09Z`

### Nội dung yêu cầu:

````markdown
Hãy cập nhật lại 2 chi tiết sau trong mã nguồn HTML và CSS:

1. Thêm icon cho ô "Hàng Chính Hãng 100%":
- Ô đầu tiên trong thanh cam kết dịch vụ (Trust Badges Bar) hiện đang bị trống icon (chỉ có khung màu xanh nhạt).
- Hãy chèn icon huy hiệu/chứng nhận chính hãng (sử dụng icon SVG sắc nét màu xanh dương, hoặc emoji 🏅 / 🛡️) vào giữa khung tròn đó, căn giữa hoàn toàn (display: flex; align-items: center; justify-content: center;).

2. Xóa mục "Tra cứu đơn hàng" trên thanh Topbar:
- Trên thanh Topbar góc trên bên phải (cạnh số Hotline 1800.6868), hãy XÓA BỎ hoàn toàn liên kết "🚚 Tra cứu đơn hàng".
- Giữ lại số điện thoại Hotline và đường kẻ ngăn cách nếu có, đảm bảo thanh Topbar gọn gàng, không bị thừa khoảng trắng.

Hãy cung cấp đoạn mã HTML và CSS đã chỉnh sửa.
````

---

## <a id="prompt-18"></a>Prompt 18: Sửa lỗi menu chọn tỉnh/thành bị thanh Header chính che khuất

- **Thời gian gửi:** `2026-10-20T17:37:48Z`

### Nội dung yêu cầu:

````markdown
Hãy sửa lại CSS cho menu danh sách chọn tỉnh/thành (khu vực mua hàng):
1. Hiện tại khi click mở menu sổ xuống, phần dưới của menu đang bị thanh Header chính (khối TechZone màu đen) đè lên và che mất nội dung bên dưới.
2. Cách sửa:
   - Đặt `z-index: 99999 !important;` cho menu chọn tỉnh/thành (.location-menu / .location-dropdown).
   - Kiểm tra thanh Topbar hoặc thẻ cha bao quanh nút chọn vị trí: BỎ HOÀN TOÀN thuộc tính `overflow: hidden;` nếu có (đổi thành `overflow: visible;`) để menu có thể trôi tự do ra ngoài khung Topbar.
   - Đảm bảo khi mở danh sách, toàn bộ các mục (Hà Nội, TP. Hồ Chí Minh, Đà Nẵng, Cần Thơ...) nổi hoàn toàn lên trên thanh Header và click chọn mượt mà.
Cung cấp đoạn CSS sửa lỗi này.
````

---

## <a id="prompt-19"></a>Prompt 19: Sửa lỗi menu chọn khu vực không click chọn được (z-index & Event Delegation)

- **Thời gian gửi:** `2026-10-20T17:45:24Z`

### Nội dung yêu cầu:

````markdown
Menu chọn khu vực (tỉnh/thành: Hà Nội, TP.HCM, Cần Thơ, Đồng Nai...) đã hiển thị ra nhưng hiện tại hoàn toàn KHÔNG THỂ ẤN/CLICK ĐƯỢC vào bất kỳ mục nào. 

Hãy sửa triệt để lỗi này:
1. CSS:
   - Thêm `pointer-events: auto !important;` và `z-index: 9999999 !important;` cho toàn bộ menu và các thẻ con bên trong menu.
   - Nếu có lớp backdrop/overlay làm mờ xung quanh, hãy kiểm tra và đặt z-index của backdrop thấp hơn menu (z-index: 99990).
2. JavaScript:
   - Sử dụng Event Delegation gắn trực tiếp vào `document.addEventListener('click', ...)` để khi click vào bất kỳ item nào:
     + Lấy đúng tên tỉnh/thành vừa chọn.
     + Đổi text hiển thị của nút vị trí trên Topbar.
     + Lưu vào localStorage.
     + Tự động đóng menu lại ngay lập tức.
Cung cấp đoạn code CSS và JS sửa lỗi này!
````

---

## <a id="prompt-20"></a>Prompt 20: Tạo file prompt.md tổng hợp toàn bộ câu lệnh / prompt theo thứ tự

- **Thời gian gửi:** `2026-10-21T10:05:31Z`

### Nội dung yêu cầu:

````markdown
hãy tạo thêm 1 file "prompt.md" gom tất cả các câu lệnh, câu prompt tôi đã gửi bạn vào đó, theo thứ tự
````

---
