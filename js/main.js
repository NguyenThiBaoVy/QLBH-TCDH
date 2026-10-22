/**
 * ==========================================================================
 * TECHZONE ECOSYSTEM - CORE JAVASCRIPT ENGINE (ES6)
 * Tech Catalog, Slider, Flash Sale Timer, LocalStorage, Cart & Tracking
 * ==========================================================================
 */

// --- 1. MOCK DATA: TECHZONE TECH CATALOG ---
const TECHZONE_PRODUCTS = [
  // FLASH SALE PRODUCTS
  {
    id: 'tz-fs-01',
    name: 'iPhone 16 Pro Max 256GB - Titanium Tự Nhiên',
    category: 'phone',
    brand: 'Apple',
    price: 34490000,
    oldPrice: 36990000,
    discountPercent: 7,
    soldCount: 88,
    totalStock: 100,
    isFlashSale: true,
    specs: ['6.9" Super Retina XDR', 'Chip A18 Pro', 'Camera Control 48MP', 'Titanium Grade 5'],
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80',
    description: 'Flagship đỉnh cao từ Apple với phím điều khiển Camera Control, chip A18 Pro và viền màn hình siêu mỏng.'
  },
  {
    id: 'tz-fs-02',
    name: 'Samsung Galaxy S24 Ultra 12GB 256GB - Quyền Năng Galaxy AI',
    category: 'phone',
    brand: 'Samsung',
    price: 27990000,
    oldPrice: 33990000,
    discountPercent: 18,
    soldCount: 92,
    totalStock: 100,
    isFlashSale: true,
    specs: ['Snapdragon 8 Gen 3', 'RAM 12GB', 'Bút S-Pen tích hợp', 'Camera Zoom 100x'],
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
    description: 'Trí tuệ nhân tạo Galaxy AI đột phá, khung viền Titanium sang trọng, màn hình Dynamic AMOLED 2X sắc nét.'
  },
  {
    id: 'tz-fs-03',
    name: 'Laptop Gaming ASUS ROG Strix G16 i9-14900HX RTX 4080',
    category: 'laptop',
    brand: 'Asus',
    price: 49990000,
    oldPrice: 56990000,
    discountPercent: 12,
    soldCount: 74,
    totalStock: 100,
    isFlashSale: true,
    specs: ['Core i9-14900HX', 'RTX 4080 12GB', 'RAM 32GB DDR5', 'Màn 2.5K 240Hz Nebula'],
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    description: 'Quái thú gaming cấu hình cực đại, tản nhiệt kim loại lỏng Tri-Fan êm mát sẵn sàng chinh phục mọi tác vụ nặng.'
  },
  {
    id: 'tz-fs-04',
    name: 'Tai nghe Bluetooth Apple AirPods Pro 2 2023 Type-C',
    category: 'audio',
    brand: 'Apple',
    price: 5390000,
    oldPrice: 6190000,
    discountPercent: 13,
    soldCount: 97,
    totalStock: 100,
    isFlashSale: true,
    specs: ['Chip Apple H2', 'Cổng sạc Type-C', 'Chống ồn ANC 2x', 'Âm thanh vòm Spatial'],
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&q=80',
    description: 'Khử ồn chủ động gấp đôi, chế độ xuyên âm thích ứng mượt mà và hộp sạc tích hợp loa tìm kiếm Find My.'
  },
  {
    id: 'tz-fs-05',
    name: 'Đồng hồ Apple Watch Ultra 2 GPS + Cellular 49mm Titan Dây Alpine',
    category: 'watch',
    brand: 'Apple',
    price: 19490000,
    oldPrice: 25990000,
    discountPercent: 25,
    soldCount: 28,
    totalStock: 30,
    isFlashSale: true,
    specs: ['Vỏ Titan 49mm', 'Màn hình 3000 nits', 'Chống nước 100m', 'Thời lượng pin 72h'],
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80',
    description: 'Đỉnh cao đồng hồ thể thao chuyên nghiệp với độ sáng 3000 nits, định vị GPS tần số kép và độ bền chuẩn quân sự.'
  },

  // BLOCK 1: ĐIỆN THOẠI NỔI BẬT (ĐỦ 8 SẢN PHẨM)
  {
    id: 'tz-phone-01',
    name: 'Xiaomi 14 Ultra 16GB 512GB Leica Summilux',
    category: 'phone',
    brand: 'Xiaomi',
    price: 29990000,
    oldPrice: 32990000,
    discountPercent: 9,
    specs: ['Cảm biến 1 inch LYT-900', 'Snapdragon 8 Gen 3', 'RAM 16GB', 'Sạc siêu nhanh 90W'],
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
    description: 'Nhiếp ảnh di động đỉnh cao với hệ thống 4 camera quang học Leica huyền thoại và màn hình WQHD+ AMOLED.'
  },
  {
    id: 'tz-phone-02',
    name: 'OPPO Find N3 Flip 12GB 256GB - Gập Mở Tinh Tế',
    category: 'phone',
    brand: 'OPPO',
    price: 18990000,
    oldPrice: 22990000,
    discountPercent: 17,
    specs: ['Màn hình ngoài dọc', 'Bản lề giọt nước tàng hình', 'Bộ 3 Camera Hasselblad'],
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&q=80',
    description: 'Điện thoại gập thời trang nhỏ gọn, màn hình ngoài thao tác ứng dụng trực tiếp không cần mở máy.'
  },
  {
    id: 'tz-phone-03',
    name: 'iPhone 15 128GB - Chính Hãng VN/A',
    category: 'phone',
    brand: 'Apple',
    price: 19490000,
    oldPrice: 22990000,
    discountPercent: 15,
    specs: ['Dynamic Island', 'Camera 48MP', 'Cổng kết nối USB-C', 'Mặt lưng nhám sang'],
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&q=80',
    description: 'Trang bị đảo thích ứng Dynamic Island, camera 48MP siêu nét và kính pha màu pastel phong cách.'
  },
  {
    id: 'tz-phone-04',
    name: 'Samsung Galaxy Z Fold6 5G 12GB 256GB',
    category: 'phone',
    brand: 'Samsung',
    price: 41990000,
    oldPrice: 43990000,
    discountPercent: 5,
    specs: ['Màn hình kép 120Hz', 'Khung viền Armor Aluminum', 'Galaxy AI hỗ trợ dịch thuật'],
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    description: 'Thiết kế vuông vắn mỏng nhẹ, tối ưu hóa không gian làm việc đa nhiệm và giải trí đỉnh cao.'
  },
  {
    id: 'tz-phone-05',
    name: 'iPhone 14 Pro Max 128GB - Deep Purple Chính Hãng',
    category: 'phone',
    brand: 'Apple',
    price: 25490000,
    oldPrice: 27990000,
    discountPercent: 9,
    specs: ['Màn hình 120Hz ProMotion', 'A16 Bionic', 'Camera 48MP', 'Always-On Display'],
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80',
    description: 'Thiết kế sang trọng với màu sắc Tím bóng bẩy, hiệu năng bền bỉ đáp ứng trọn vẹn mọi nhu cầu công việc.'
  },
  {
    id: 'tz-phone-06',
    name: 'Samsung Galaxy S23 FE 5G 8GB 128GB',
    category: 'phone',
    brand: 'Samsung',
    price: 12890000,
    oldPrice: 14890000,
    discountPercent: 13,
    specs: ['Dynamic AMOLED 2X', 'Exynos 2200', 'Camera đêm 50MP', 'Kháng nước IP68'],
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80',
    description: 'Phiên bản Fan Edition hội tụ các tính năng flagship được yêu thích nhất với mức giá dễ tiếp cận.'
  },
  {
    id: 'tz-phone-07',
    name: 'Xiaomi Redmi Note 13 Pro+ 5G 12GB 512GB',
    category: 'phone',
    brand: 'Xiaomi',
    price: 9990000,
    oldPrice: 10990000,
    discountPercent: 9,
    specs: ['Camera siêu nét 200MP OIS', 'Màn cong 1.5K 120Hz', 'Sạc siêu tốc 120W HyperCharge'],
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&q=80',
    description: 'Đột phá phân khúc tầm trung với camera 200MP, chuẩn kháng nước IP68 và sạc đầy pin chỉ trong 19 phút.'
  },
  {
    id: 'tz-phone-08',
    name: 'OPPO Reno11 5G 8GB 256GB Chân Dung Chuẩn Chuyên Gia',
    category: 'phone',
    brand: 'OPPO',
    price: 9490000,
    oldPrice: 10990000,
    discountPercent: 14,
    specs: ['Camera Chân Dung 32MP Tele', 'Thiết kế mặt lưng sóng lụa', 'Sạc nhanh SuperVOOC 67W'],
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
    description: 'Chuyên gia chụp ảnh chân dung với ống kính tele chuyên nghiệp và thiết kế thẩm mỹ công thái học.'
  },
  {
    id: 'tz-phone-09',
    name: 'iPhone 13 128GB - Chính Hãng VN/A Pin Bền Bỉ',
    category: 'phone',
    brand: 'Apple',
    price: 13990000,
    oldPrice: 15990000,
    discountPercent: 12,
    specs: ['Màn hình 6.1" OLED Super Retina', 'Chip Apple A15 Bionic', 'Camera kép 12MP Chống rung', 'Kháng nước IP68'],
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&q=80',
    description: 'Thiết kế sang trọng nhỏ gọn cầm vừa tay, thời lượng pin ấn tượng cả ngày dài và hỗ trợ sạc MagSafe tiện ích.'
  },
  {
    id: 'tz-phone-10',
    name: 'Samsung Galaxy A55 5G 8GB 128GB - Viền Kim Loại Cao Cấp',
    category: 'phone',
    brand: 'Samsung',
    price: 9690000,
    oldPrice: 10490000,
    discountPercent: 8,
    specs: ['Super AMOLED 120Hz', 'Khung viền kim loại sang trọng', 'Camera chống rung OIS 50MP', 'Bảo mật Knox Vault'],
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80',
    description: 'Mẫu smartphone tầm trung hoàn hảo với khung viền nhôm cao cấp, kháng nước bụi IP67 và camera chụp đêm sắc nét.'
  },

  // BLOCK 2: LAPTOP & MÁY TÍNH BẢNG (ĐỦ 8 SẢN PHẨM)
  {
    id: 'tz-laptop-01',
    name: 'Apple MacBook Pro 14 M3 Pro (18GB / 512GB SSD)',
    category: 'laptop',
    brand: 'Apple',
    price: 49490000,
    oldPrice: 52990000,
    discountPercent: 7,
    specs: ['Chip M3 Pro 11-core', 'RAM 18GB Unified', 'Liquid Retina XDR 120Hz', 'Pin 18 giờ'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    description: 'Cỗ máy đồ họa chuyên nghiệp màu Space Black lịch lãm, xử lý render 3D và dựng phim 4K siêu tốc.'
  },
  {
    id: 'tz-laptop-02',
    name: 'iPad Pro M4 11 inch Wi-Fi 256GB 2024',
    category: 'laptop',
    brand: 'Apple',
    price: 27990000,
    oldPrice: 29990000,
    discountPercent: 7,
    specs: ['Chip Apple M4', 'Ultra Retina Tandem OLED', 'Độ mỏng ấn tượng 5.3mm'],
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
    description: 'Chiếc iPad mỏng nhất từ trước tới nay với màn hình Tandem OLED 2 lớp độ sáng 1600 nits đỉnh cao.'
  },
  {
    id: 'tz-laptop-03',
    name: 'Laptop Dell XPS 14 9440 Ultra 7 155H RTX 4050',
    category: 'laptop',
    brand: 'Dell',
    price: 54990000,
    oldPrice: 59990000,
    discountPercent: 8,
    specs: ['Intel Core Ultra 7', 'RAM 32GB LPDDR5X', 'Màn OLED 3.2K Touch', 'Bàn phím tàng hình'],
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80',
    description: 'Đỉnh cao thiết kế laptop doanh nhân tương lai với bề mặt kính Gorilla Glass và phản hồi xúc giác rung haptic.'
  },
  {
    id: 'tz-laptop-04',
    name: 'Laptop Gaming Lenovo Legion 5 16IRX9 i7-14650HX RTX 4060',
    category: 'laptop',
    brand: 'Lenovo',
    price: 36990000,
    oldPrice: 40990000,
    discountPercent: 10,
    specs: ['Core i7-14650HX', 'RTX 4060 8GB', 'RAM 16GB', 'Màn 2.5K 165Hz 100% sRGB'],
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
    description: 'Bàn phím TrueStrike gõ êm, tản nhiệt Coldfront 5.0 quạt kép thông minh giữ xung nhịp ổn định.'
  },
  {
    id: 'tz-laptop-05',
    name: 'Laptop ASUS Zenbook 14 OLED UX3405 Intel Core Ultra 5',
    category: 'laptop',
    brand: 'Asus',
    price: 24990000,
    oldPrice: 26990000,
    discountPercent: 7,
    specs: ['Intel Core Ultra 5 125H', 'Màn Lumina OLED 3K 120Hz', 'RAM 16GB', 'Trọng lượng 1.2kg'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
    description: 'Chuẩn mực siêu di động mỏng nhẹ chuẩn Intel Evo, màn hình hiển thị sống động đạt chuẩn màu điện ảnh DCI-P3.'
  },
  {
    id: 'tz-laptop-06',
    name: 'Laptop Gaming Acer Predator Helios Neo 16 i7 RTX 4060',
    category: 'laptop',
    brand: 'Acer',
    price: 35990000,
    oldPrice: 38990000,
    discountPercent: 8,
    specs: ['Intel Core i7-14700HX', 'RTX 4060 8GB GDDR6', 'Màn 16" WQXGA 165Hz', 'Quạt AeroBlade 3D'],
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80',
    description: 'Chiến binh esport mạnh mẽ với tản nhiệt kim loại lỏng thế hệ 5 và khung vỏ khắc laser phong cách cyberpunk.'
  },
  {
    id: 'tz-laptop-07',
    name: 'iPad Air 6 M2 11 inch Wi-Fi 128GB Chính Hãng',
    category: 'laptop',
    brand: 'Apple',
    price: 16490000,
    oldPrice: 17990000,
    discountPercent: 8,
    specs: ['Chip Apple M2', 'Liquid Retina True Tone', 'Hỗ trợ Apple Pencil Pro', 'Camera ngang 12MP'],
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80',
    description: 'Sức mạnh vượt bậc với vi xử lý Apple M2, thiết kế nhôm tái chế nguyên khối bền bỉ và hiện đại.'
  },
  {
    id: 'tz-laptop-08',
    name: 'Apple MacBook Air 13 M3 8GB 256GB - Thiết Kế Mỏng Nhẹ',
    category: 'laptop',
    brand: 'Apple',
    price: 26990000,
    oldPrice: 28990000,
    discountPercent: 7,
    specs: ['Apple M3 8-core CPU', 'Màn Liquid Retina 13.6"', 'Pin trâu 18 tiếng', 'Không quạt êm ái'],
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80',
    description: 'Chiếc máy tính xách tay quốc dân được nâng cấp chip M3 hỗ trợ đồ họa Ray Tracing và kết nối 2 màn hình ngoài.'
  },
  {
    id: 'tz-laptop-09',
    name: 'Laptop HP Envy 16 OLED i9-13900H RTX 4060 Touch',
    category: 'laptop',
    brand: 'HP',
    price: 45990000,
    oldPrice: 49990000,
    discountPercent: 8,
    specs: ['Intel Core i9-13900H', 'RTX 4060 8GB', 'Màn OLED 2.8K 120Hz Cảm ứng', 'Âm thanh Bang & Olufsen'],
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80',
    description: 'Trạm sáng tạo di động đỉnh cao với màn hình cảm ứng OLED chuẩn màu 100% DCI-P3 và hệ thống tản nhiệt buồng hơi.'
  },
  {
    id: 'tz-laptop-10',
    name: 'Laptop Gaming ASUS TUF A15 Ryzen 7 7735HS RTX 4060',
    category: 'laptop',
    brand: 'Asus',
    price: 27990000,
    oldPrice: 30990000,
    discountPercent: 10,
    specs: ['AMD Ryzen 7 7735HS', 'RTX 4060 140W', 'RAM 16GB DDR5', 'Màn 144Hz G-Sync Chuẩn quân đội'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80',
    description: 'Độ bền chuẩn quân sự Mỹ MIL-STD-810H, hiệu năng đồ họa cực đại cân mượt mà mọi tựa game AAA.'
  },

  // BLOCK 3: PHỤ KIỆN GIÁ SỐC (ĐỦ 8 SẢN PHẨM)
  {
    id: 'tz-acc-01',
    name: 'Củ sạc nhanh Anker 511 Nano 3 30W Type-C GaN',
    category: 'accessory',
    brand: 'Anker',
    price: 320000,
    oldPrice: 450000,
    discountPercent: 29,
    specs: ['Công nghệ GaN III', 'Công suất 30W', 'Nhỏ hơn 70%', 'Bảo vệ ActiveShield 2.0'],
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80',
    description: 'Sạc đầy 50% pin iPhone chỉ trong 25 phút, thiết kế chân gập gọn gàng tiện lợi bỏ túi.'
  },
  {
    id: 'tz-acc-02',
    name: 'Pin sạc dự phòng Baseus Blade HD 100W 20.000mAh',
    category: 'accessory',
    brand: 'Baseus',
    price: 1190000,
    oldPrice: 1590000,
    discountPercent: 25,
    specs: ['Công suất 100W', 'Dung lượng 20.000mAh', 'Độ mỏng chỉ 18mm', 'Màn hình LED hiển thị'],
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80',
    description: 'Hỗ trợ sạc nhanh cho Laptop và MacBook công suất lớn, độ mỏng như cuốn sổ tay đút vừa vặn mọi ngăn balo.'
  },
  {
    id: 'tz-acc-03',
    name: 'Loa Bluetooth Marshall Emberton II Chính Hãng ASH',
    category: 'audio',
    brand: 'Marshall',
    price: 3890000,
    oldPrice: 4490000,
    discountPercent: 13,
    specs: ['Âm thanh True Stereophonic 360', 'Pin trâu 30 giờ', 'Kháng nước bụi IP67', 'Chế độ Stack Mode'],
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80',
    description: 'Âm thanh đa hướng sống động, thiết kế lưới kim loại vintage kinh điển và khả năng kết nối nhiều loa cùng lúc.'
  },
  {
    id: 'tz-acc-04',
    name: 'Tai nghe chụp tai Sony WH-1000XM5 Hi-Res Wireless',
    category: 'audio',
    brand: 'Sony',
    price: 7490000,
    oldPrice: 8990000,
    discountPercent: 17,
    specs: ['Bộ đôi chip xử lý V1 & QN1', '8 micro chống ồn', 'Pin 30 giờ', 'Chuẩn âm thanh LDAC'],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    description: 'Khử tiếng ồn đỉnh cao tự động tối ưu theo môi trường, đệm tai da mềm mại cách âm tuyệt đối.'
  },
  {
    id: 'tz-acc-05',
    name: 'Chuột không dây Logitech MX Master 3S Silent Switch',
    category: 'accessory',
    brand: 'Logitech',
    price: 2190000,
    oldPrice: 2490000,
    discountPercent: 12,
    specs: ['Cảm biến Darkfield 8000 DPI', 'Cuộn siêu tốc MagSpeed', 'Êm ái Quiet Clicks', 'Pin 70 ngày'],
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80',
    description: 'Chuột công thái học cao cấp dành cho lập trình viên và sáng tạo nội dung, chuyển đổi mượt 3 thiết bị.'
  },
  {
    id: 'tz-acc-06',
    name: 'Bàn phím cơ không dây Keychron K2 Pro QMK/VIA Nhôm',
    category: 'accessory',
    brand: 'Keychron',
    price: 2350000,
    oldPrice: 2690000,
    discountPercent: 13,
    specs: ['Hotswap RGB', 'Keycap OSA PBT', 'Switch Keychron K Pro', 'Tùy biến QMK/VIA'],
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
    description: 'Bàn phím cơ layout 75% không dây kết nối đa nền tảng Mac/Windows, gõ đầm tay với foam tiêu âm cao cấp.'
  },
  {
    id: 'tz-acc-07',
    name: 'Đồng hồ thông minh Apple Watch Series 9 GPS 41mm',
    category: 'watch',
    brand: 'Apple',
    price: 8990000,
    oldPrice: 10490000,
    discountPercent: 14,
    specs: ['Chip S9 SiP', 'Thao tác chạm 2 lần Double Tap', 'Độ sáng 2000 nits', 'Đo ECG & SpO2'],
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80',
    description: 'Trợ lý sức khỏe thông minh thế hệ mới nhất với thao tác cử chỉ một tay kỳ diệu Double Tap.'
  },
  {
    id: 'tz-acc-08',
    name: 'Cáp sạc nhanh Anker PowerLine III Flow C to C 100W 1.8m',
    category: 'accessory',
    brand: 'Anker',
    price: 280000,
    oldPrice: 380000,
    discountPercent: 26,
    specs: ['Chất liệu Silicone siêu mềm', 'Công suất 100W PD', 'Chịu lực 25.000 lần gập', 'Chống rối tuyệt đối'],
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&q=80',
    description: 'Dây cáp bọc silicone mịn như da em bé, không bao giờ bị rối gãy, hỗ trợ sạc nhanh tối đa cho cả MacBook Pro.'
  },
  {
    id: 'tz-acc-09',
    name: 'Tai nghe Bluetooth Bose QuietComfort Ultra Chống Ồn',
    category: 'audio',
    brand: 'Bose',
    price: 9490000,
    oldPrice: 10990000,
    discountPercent: 14,
    specs: ['Công nghệ Bose Immersive Audio', 'Chống ồn CustomTune đỉnh cao', 'Pin 24 giờ liên tục', 'Đệm tai da cao cấp'],
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80',
    description: 'Trải nghiệm âm thanh không gian đột phá, khử tạp âm vượt trội giúp bạn hoàn toàn đắm chìm trong thế giới âm nhạc.'
  },
  {
    id: 'tz-acc-10',
    name: 'Ổ cứng di động SSD Kingston XS1000 1TB USB 3.2 Gen 2',
    category: 'accessory',
    brand: 'Kingston',
    price: 1890000,
    oldPrice: 2290000,
    discountPercent: 17,
    specs: ['Tốc độ đọc 1.050MB/s', 'Dung lượng 1TB', 'Kích thước siêu nhỏ 29g', 'Cổng Type-C cắm là nhận'],
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80',
    description: 'Kích thước nhỏ gọn bỏ vừa ví tay, tốc độ truyền file video 4K siêu tốc tương thích trọn vẹn cả PC và MacBook.'
  },
  // THIẾT BỊ ÂM THANH & ĐỒNG HỒ THÔNG MINH BỔ SUNG
  {
    id: 'tz-audio-01',
    name: 'Loa Bluetooth JBL Charge 5 Âm Trầm Uy Lực Chống Nước IP67',
    category: 'audio',
    brand: 'JBL',
    price: 3690000,
    oldPrice: 3990000,
    discountPercent: 8,
    specs: ['Công suất 40W RMS', 'Pin trâu 20 giờ', 'Kháng nước bụi IP67', 'PartyBoost kết nối loa'],
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80',
    description: 'Âm bass mạnh mẽ đặc trưng JBL Original Pro Sound, tích hợp cổng sạc dự phòng cho điện thoại.'
  },
  {
    id: 'tz-audio-02',
    name: 'Tai nghe True Wireless Marshall Minor IV Âm Sắc Vintage',
    category: 'audio',
    brand: 'Marshall',
    price: 3490000,
    oldPrice: 3890000,
    discountPercent: 10,
    specs: ['Âm thanh Marshall Signature', 'Thời lượng pin 30h', 'Bluetooth LE Audio', 'Kháng nước IPX4'],
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
    description: 'Thiết kế bọc da sang trọng hoài cổ, cảm giác đeo êm ái cả ngày và khả năng tùy biến âm thanh qua App.'
  },
  {
    id: 'tz-watch-01',
    name: 'Samsung Galaxy Watch 6 Classic 43mm Bluetooth Viền Xoay',
    category: 'watch',
    brand: 'Samsung',
    price: 6490000,
    oldPrice: 7990000,
    discountPercent: 19,
    specs: ['Viền xoay bezel vật lý', 'Màn hình Sapphire', 'Theo dõi giấc ngủ sâu', 'Đo huyết áp & ECG'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    description: 'Sự trở lại của vòng xoay Bezel cơ học huyền thoại, màn hình lớn hơn 20% và phân tích thành phần cơ thể BIA.'
  },
  {
    id: 'tz-watch-02',
    name: 'Đồng hồ thông minh Garmin Forerunner 265 GPS Chạy Bộ',
    category: 'watch',
    brand: 'Garmin',
    price: 11490000,
    oldPrice: 12490000,
    discountPercent: 8,
    specs: ['Màn hình AMOLED rực rỡ', 'GPS đa băng tần', 'Thời lượng pin 13 ngày', 'Đo VO2 Max & Sẵn sàng tập'],
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80',
    description: 'Trợ lý thể thao chạy bộ chuyên nghiệp hàng đầu với màn hình cảm ứng AMOLED và chiến lược thi đấu Garmin Coach.'
  }
];

// INITIAL SAMPLE ORDERS WITH SHOPEE EXPRESS (SPX) BRANDING & FORMAT SPX-XXXXXX
const INITIAL_MOCK_ORDERS = [
  {
    id: 'SPX-892341',
    aliases: ['TZ-10823'],
    createdAt: '2026-10-20 10:15',
    status: 'Đang giao', // Options: 'Chờ xác nhận', 'Đang giao', 'Đã giao', 'Đã hủy'
    etaSeconds: 5400, // ~ 1 hour 30 mins
    etaText: '14:30 Hôm nay, 20-10-2026',
    shippingCourier: 'Shopee Express (SPX Speed)',
    shippingNotification: '🚚 [Hà Nội] Đơn hàng đang trên đường giao đến bạn bởi shipper Trần Hoàng Nam (0988.223.344)',
    shipper: {
      name: 'Trần Hoàng Nam',
      phone: '0988.223.344',
      plate: '29B1 - 892.45',
      rating: '4.98 ⭐ (1,840 chuyến hoàn thành)',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80'
    },
    customer: {
      name: 'Nguyễn Văn Minh',
      phone: '0912.889.900',
      address: 'Số 68 Phố Duy Tân, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội',
      note: 'Giao trong giờ hành chính, gọi trước 10 phút'
    },
    shippingMethod: 'Giao Hỏa Tốc SPX Speed 2H',
    paymentMethod: 'Thanh toán khi nhận hàng (COD)',
    items: [
      {
        id: 'tz-fs-01',
        name: 'iPhone 16 Pro Max 256GB - Titanium Tự Nhiên',
        variant: '256GB, Titan Tự Nhiên',
        price: 34490000,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&q=80'
      },
      {
        id: 'tz-acc-01',
        name: 'Củ sạc nhanh Anker 511 Nano 3 30W Type-C GaN',
        variant: 'Trắng GaN 30W',
        price: 320000,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&q=80'
      }
    ],
    subtotal: 34810000,
    shippingFee: 0,
    discountAmount: 50000,
    total: 34760000,
    checkpoints: [
      { time: '11:15 Hôm nay', text: 'Shipper Trần Hoàng Nam (0988.223.344) đang giao hàng đến bạn. Vui lòng chú ý điện thoại.' },
      { time: '10:50 Hôm nay', text: 'Đơn hàng đã rời kho phân loại trung chuyển SPX Cầu Giấy Hub.' },
      { time: '10:15 Hôm nay', text: 'Đơn hàng đã đến trung tâm khai thác phân loại Hà Nội SOC.' },
      { time: '09:30 Hôm nay', text: 'Đơn vị vận chuyển Shopee Express (SPX) đã lấy hàng từ Người gửi.' },
      { time: '08:45 Hôm nay', text: 'Người gửi đang chuẩn bị hàng và đóng gói niêm phong chống sốc.' },
      { time: '08:15 Hôm nay', text: 'Đơn hàng đã được đặt thành công trên hệ thống.' }
    ]
  },
  {
    id: 'SPX-102948',
    aliases: ['TZ-24910'],
    createdAt: '2026-10-20 15:30',
    status: 'Chờ xác nhận',
    etaSeconds: 10800, // ~ 3 hours
    etaText: '18:30 Ngày mai, 21-10-2026',
    shippingCourier: 'Shopee Express (SPX Hỏa Tốc)',
    shippingNotification: '📦 Người gửi đang chuẩn bị hàng tại kho tổng SPX Hub Sài Gòn',
    shipper: {
      name: 'Đỗ Văn Tuấn',
      phone: '0977.112.334',
      plate: '59K2 - 689.12',
      rating: '4.9 ⭐ (980 chuyến)',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80'
    },
    customer: {
      name: 'Trần Thị Thu Thảo',
      phone: '0903.445.667',
      address: 'Phòng 1802, Chung cư Landmark Plus, Vinhomes Central Park, Q. Bình Thạnh, TP. Hồ Chí Minh',
      note: 'Gửi lễ tân sảnh nếu vắng nhà'
    },
    shippingMethod: 'Giao Tiêu Chuẩn 24H SPX',
    paymentMethod: 'Ví ShopeePay (Đã thanh toán)',
    items: [
      {
        id: 'tz-laptop-01',
        name: 'Apple MacBook Pro 14 M3 Pro (18GB / 512GB SSD)',
        variant: '18GB / 512GB, Space Black',
        price: 49490000,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&q=80'
      }
    ],
    subtotal: 49490000,
    shippingFee: 0,
    discountAmount: 0,
    total: 49490000,
    checkpoints: [
      { time: '15:45 Hôm nay', text: 'Đơn hàng đã được xác nhận và in phiếu đóng kiện tại kho tổng SPX Sài Gòn.' },
      { time: '15:30 Hôm nay', text: 'Khách hàng hoàn tất thanh toán qua Ví ShopeePay. Hệ thống chuyển tiếp cho SPX.' }
    ]
  },
  {
    id: 'SPX-776219',
    aliases: ['TZ-38501'],
    createdAt: '2026-10-18 09:00',
    status: 'Đã giao',
    etaSeconds: 0,
    etaText: '11:15 18-10-2026 (Giao thành công)',
    shippingCourier: 'Shopee Express (SPX Tiêu Chuẩn)',
    shippingNotification: '✅ Giao hàng thành công - Người nhận: Hoàng Minh Đức đã ký nhận bưu kiện',
    shipper: {
      name: 'Nguyễn Quang Hải',
      phone: '0935.889.012',
      plate: '43D1 - 998.45',
      rating: '5.0 ⭐ (2,600 chuyến)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
    },
    customer: {
      name: 'Hoàng Minh Đức',
      phone: '0981.554.433',
      address: '254 Nguyễn Văn Linh, P. Thạc Gián, Q. Thanh Khê, Đà Nẵng',
      note: ''
    },
    shippingMethod: 'Giao Hỏa Tốc SPX 2H',
    paymentMethod: 'Ví MoMo (Đã thanh toán)',
    items: [
      {
        id: 'tz-fs-04',
        name: 'Tai nghe Bluetooth Apple AirPods Pro 2 2023 Type-C',
        variant: 'Hộp sạc Type-C MagSafe',
        price: 5390000,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&q=80'
      },
      {
        id: 'tz-acc-08',
        name: 'Cáp sạc nhanh Anker PowerLine III Flow C to C 100W 1.8m',
        variant: 'Tím Pastel 1.8m',
        price: 280000,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=300&q=80'
      }
    ],
    subtotal: 5670000,
    shippingFee: 0,
    discountAmount: 0,
    total: 5670000,
    checkpoints: [
      { time: '11:15 18/10/2026', text: 'Giao hàng thành công. Khách hàng đã kiểm tra và ký nhận bưu kiện.' },
      { time: '09:45 18/10/2026', text: 'Shipper Nguyễn Quang Hải đang giao hàng tại khu vực Thanh Khê, Đà Nẵng.' },
      { time: '08:00 18/10/2026', text: 'Đơn hàng đã đến kho giao hàng Đà Nẵng Hub.' },
      { time: '09:00 17/10/2026', text: 'Đơn hàng rời trung tâm khai thác SPX Miền Trung.' }
    ]
  },
  {
    id: 'SPX-661205',
    aliases: ['TZ-88214'],
    createdAt: '2026-10-16 11:20',
    status: 'Đã giao',
    etaSeconds: 0,
    etaText: '15:40 16-10-2026 (Giao thành công)',
    shippingCourier: 'Shopee Express (SPX Nhanh)',
    shippingNotification: '✅ Giao hàng thành công - Đơn hàng đã được hoàn tất và đánh giá 5 sao ⭐',
    shipper: {
      name: 'Lê Văn Hùng',
      phone: '0918.445.566',
      plate: '51A - 334.89',
      rating: '4.95 ⭐ (1,420 chuyến)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80'
    },
    customer: {
      name: 'Phạm Thúy Nga',
      phone: '0908.776.554',
      address: 'Số 12 Tôn Đức Thắng, P. Bến Nghé, Quận 1, TP. Hồ Chí Minh',
      note: 'Giao giờ hành chính lên tầng 8'
    },
    shippingMethod: 'Giao Tiêu Chuẩn SPX',
    paymentMethod: 'Thẻ tín dụng Visa/MasterCard',
    items: [
      {
        id: 'tz-fs-02',
        name: 'Samsung Galaxy S24 Ultra 12GB 256GB - Quyền Năng Galaxy AI',
        variant: '12GB/256GB, Xám Titan',
        price: 27990000,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&q=80'
      }
    ],
    subtotal: 27990000,
    shippingFee: 0,
    discountAmount: 100000,
    total: 27890000,
    checkpoints: [
      { time: '15:40 16/10/2026', text: 'Giao hàng thành công. Khách hàng đã kiểm tra và nhận hàng.' },
      { time: '13:10 16/10/2026', text: 'Shipper Lê Văn Hùng đang đi giao tại khu vực Bến Nghé, Quận 1.' },
      { time: '11:20 16/10/2026', text: 'Đơn hàng đã được xác nhận và bàn giao cho đơn vị SPX Nhanh.' }
    ]
  },
  {
    id: 'SPX-442190',
    aliases: ['TZ-49021'],
    createdAt: '2026-10-14 17:30',
    status: 'Đã hủy',
    etaSeconds: 0,
    etaText: 'Đã hủy lúc 18:10 14-10-2026',
    shippingCourier: 'Shopee Express (SPX Speed)',
    shippingNotification: '❌ Đơn hàng đã được hủy thành công bởi Người mua (Lý do: Thay đổi địa chỉ nhận hàng)',
    shipper: {
      name: 'Chưa điều phối',
      phone: '---',
      plate: '---',
      rating: '---',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80'
    },
    customer: {
      name: 'Võ Thanh Trúc',
      phone: '0943.221.100',
      address: 'Tòa nhà Landmark 81, 720A Điện Biên Phủ, P. 22, Q. Bình Thạnh, TP. Hồ Chí Minh',
      note: 'Khách hàng đổi ý mua màu khác'
    },
    shippingMethod: 'Giao Tiêu Chuẩn 24H',
    paymentMethod: 'Thanh toán COD',
    items: [
      {
        id: 'tz-acc-04',
        name: 'Tai nghe chụp tai Sony WH-1000XM5 Hi-Res Wireless',
        variant: 'Đen Carbon, Chống ồn',
        price: 7490000,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80'
      }
    ],
    subtotal: 7490000,
    shippingFee: 30000,
    discountAmount: 0,
    total: 7520000,
    checkpoints: [
      { time: '18:10 14/10/2026', text: 'Đơn hàng đã hủy bởi người mua - Lý do: Thay đổi địa chỉ nhận hàng.' },
      { time: '17:30 14/10/2026', text: 'Khởi tạo đơn hàng trên hệ thống.' }
    ]
  }
];


// --- CATEGORY METADATA & NORMALIZATION HELPERS ---
const CATEGORY_NAMES = {
  phone: {
    title: 'Điện thoại & Tablet',
    icon: 'fa-solid fa-mobile-screen-button',
    desc: 'Tuyển chọn smartphone, iPhone, máy tính bảng hàng đầu thị trường'
  },
  laptop: {
    title: 'Laptop & Màn hình máy tính',
    icon: 'fa-solid fa-laptop',
    desc: 'Laptop đồ họa, gaming, văn phòng mỏng nhẹ và màn hình máy tính sắc nét'
  },
  audio: {
    title: 'Thiết bị Âm thanh (Tai nghe, Loa)',
    icon: 'fa-solid fa-headphones',
    desc: 'Tai nghe chống ồn ANC, tai nghe true wireless, loa bluetooth chất âm đỉnh cao'
  },
  watch: {
    title: 'Đồng hồ thông minh (Smartwatch)',
    icon: 'fa-solid fa-stopwatch',
    desc: 'Smartwatch thể thao, theo dõi sức khỏe, định vị GPS tần số kép'
  },
  accessory: {
    title: 'Phụ kiện sạc cáp, pin dự phòng',
    icon: 'fa-solid fa-bolt',
    desc: 'Củ sạc GaN, pin dự phòng dung lượng cao, cáp sạc nhanh, chuột và bàn phím'
  }
};

function normalizeCategoryKey(raw) {
  if (!raw) return null;
  const lower = raw.trim().toLowerCase();
  if (['phone', 'dien-thoai', 'điện thoại', 'dienthoai', 'tablet'].includes(lower)) return 'phone';
  if (['laptop', 'may-tinh-bang', 'may-tinh', 'máy tính'].includes(lower)) return 'laptop';
  if (['audio', 'am-thanh', 'âm thanh', 'tai-nghe', 'loa'].includes(lower)) return 'audio';
  if (['watch', 'dong-ho', 'đồng hồ', 'smartwatch'].includes(lower)) return 'watch';
  if (['accessory', 'phu-kien', 'phụ kiện', 'sac-cap', 'pin'].includes(lower)) return 'accessory';
  return lower;
}

// --- 2. LOCALSTORAGE MANAGEMENT ---
const Storage = {
  getProducts() {
    return TECHZONE_PRODUCTS;
  },

  getOrders() {
    const raw = localStorage.getItem('techzone_orders');
    if (!raw) {
      localStorage.setItem('techzone_orders', JSON.stringify(INITIAL_MOCK_ORDERS));
      return INITIAL_MOCK_ORDERS;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return INITIAL_MOCK_ORDERS;
    }
  },

  saveOrders(orders) {
    localStorage.setItem('techzone_orders', JSON.stringify(orders));
  },

  findOrderById(id) {
    if (!id) return null;
    const orders = this.getOrders();
    const cleanId = id.trim().toUpperCase();
    return orders.find(o => 
      o.id.toUpperCase() === cleanId || 
      (o.aliases && o.aliases.some(a => a.toUpperCase() === cleanId))
    ) || null;
  },

  addOrder(order) {
    const orders = this.getOrders();
    orders.unshift(order);
    this.saveOrders(orders);
    return order;
  },

  resetDemoOrders() {
    localStorage.setItem('techzone_orders', JSON.stringify(INITIAL_MOCK_ORDERS));
    return INITIAL_MOCK_ORDERS;
  },

  // Cart
  getCart() {
    const raw = localStorage.getItem('techzone_cart');
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem('techzone_cart', JSON.stringify(cart));
    this.updateCartBadge();
  },

  addToCart(product, quantity = 1) {
    const cart = this.getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: quantity
      });
    }
    this.saveCart(cart);
  },

  removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
    return cart;
  },

  updateQuantity(productId, delta) {
    const cart = this.getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        return this.removeFromCart(productId);
      }
    }
    this.saveCart(cart);
    return cart;
  },

  clearCart() {
    localStorage.removeItem('techzone_cart');
    this.updateCartBadge();
  },

  updateCartBadge() {
    const cart = this.getCart();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.tz-cart-badge');
    badges.forEach(b => {
      b.textContent = totalCount;
    });
  }
};

// --- 3. UI UTILITIES & TOAST NOTIFICATION ---
function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function showToast(message, type = 'info', title = null) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  // Chống kích hoạt lặp lại cùng một thông báo khi đang hiển thị
  const activeToasts = container.querySelectorAll('.toast');
  for (const item of activeToasts) {
    const msgEl = item.querySelector('.toast-msg');
    if (msgEl && (msgEl.innerHTML === message || msgEl.textContent === message)) {
      return;
    }
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-solid fa-circle-info';
  let defaultTitle = 'Thông báo';
  if (type === 'success') {
    icon = 'fa-solid fa-circle-check';
    defaultTitle = 'Thành công!';
  } else if (type === 'error') {
    icon = 'fa-solid fa-circle-exclamation';
    defaultTitle = 'Có lỗi xảy ra!';
  } else if (type === 'warning') {
    icon = 'fa-solid fa-triangle-exclamation';
    defaultTitle = 'Lưu ý!';
  }

  const displayTitle = title || defaultTitle;

  toast.innerHTML = `
    <div class="toast-icon">
      <i class="${icon}"></i>
    </div>
    <div class="toast-body">
      <div class="toast-title">${displayTitle}</div>
      <div class="toast-msg">${message}</div>
    </div>
    <button type="button" class="toast-close-btn" title="Đóng">&times;</button>
  `;

  const closeBtn = toast.querySelector('.toast-close-btn');
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(110%)';
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 250);
  });

  container.appendChild(toast);

  // Tự động ẩn và xóa sau 4 giây
  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(110%)';
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, 350);
    }
  }, 4000);
}

// --- 4. RENDER TECHZONE PRODUCT CARD ---
function renderTechZoneProductCard(prod, isFlashSale = false) {
  const discountBadge = (prod.discountPercent && prod.discountPercent > 0) ? `<span class="tz-badge-discount"><i class="fa-solid fa-bolt"></i> Giảm ${prod.discountPercent}%</span>` : '';
  const installmentBadge = `<span class="tz-badge-installment">Trả góp 0%</span>`;

  const specPills = (prod.specs || []).slice(0, 3).map(s => `<span class="tz-spec-item">${s}</span>`).join('');

  let progressHtml = '';
  let buyBtnHtml = `<button class="btn-card-buy" data-id="${prod.id}">Mua ngay</button>`;

  if (isFlashSale) {
    const sold = prod.soldCount || 28;
    const total = prod.totalStock || 30;
    const pct = Math.min(100, Math.round((sold / total) * 100));
    progressHtml = `
      <div class="tz-sold-bar">
        <div class="fill" style="width: ${pct}%;"></div>
        <div class="label">
          <i class="fa-solid fa-fire"></i> Đã bán ${sold}/${total} suất
        </div>
      </div>
    `;
    buyBtnHtml = `<button class="btn-card-buy btn-flashsale-buy" data-id="${prod.id}"><i class="fa-solid fa-bolt"></i> Săn sale</button>`;
  }

  return `
    <div class="product-card tz-product-card ${isFlashSale ? 'tz-flashsale-item' : ''}" data-id="${prod.id}">
      <div class="tz-card-badges">
        ${discountBadge}
        ${installmentBadge}
      </div>

      <div class="product-img tz-card-thumb">
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
      </div>

      <h4 class="product-title tz-product-title" title="${prod.name}">${prod.name}</h4>

      <div class="tz-spec-pills">
        ${specPills}
      </div>

      <div class="tz-price-row">
        <span class="price-current tz-price-current ${isFlashSale ? 'flash-price' : ''}">${formatVND(prod.price)}</span>
        ${prod.oldPrice ? `<span class="price-old tz-price-old">${formatVND(prod.oldPrice)}</span>` : ''}
      </div>

      ${progressHtml}

      <div class="card-actions card-action-btns tz-card-actions">
        <button class="btn-card-add" data-id="${prod.id}">
          <i class="fa-solid fa-cart-plus"></i> Thêm giỏ
        </button>
        ${buyBtnHtml}
      </div>
    </div>
  `;
}

function bindProductActions(container) {
  const addBtns = container.querySelectorAll('.btn-card-add');
  const buyBtns = container.querySelectorAll('.btn-card-buy');

  addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.dataset.id;
      const prod = Storage.getProducts().find(p => p.id === pId);
      if (prod) {
        Storage.addToCart(prod, 1);
        showToast(`Đã thêm <strong>${prod.name}</strong> vào giỏ hàng TechZone!`, 'success');
      }
    });
  });

  buyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.dataset.id;
      const prod = Storage.getProducts().find(p => p.id === pId);
      if (prod) {
        Storage.addToCart(prod, 1);
        window.location.href = 'checkout.html';
      }
    });
  });
}

// --- 5. PAGE LOGIC: HOMEPAGE (index.html) ---
function initHomePage() {
  // 1. Hero Main Slider
  initMainSlider();

  // 2. Flash Sale Countdown Timer (08:45:12)
  initFlashSaleCountdown();

  // 3. Render Flash Sale Grid
  const flashSaleContainer = document.getElementById('flashsale-cards-container');
  if (flashSaleContainer) {
    const flashProducts = Storage.getProducts().filter(p => p.isFlashSale);
    flashSaleContainer.innerHTML = flashProducts.map(p => renderTechZoneProductCard(p, true)).join('');
    bindProductActions(flashSaleContainer);
  }

  // 4. Render Block 1: Điện Thoại Nổi Bật (Full-width 10 sản phẩm chuẩn 2 hàng x 5 cột)
  const phoneGrid = document.getElementById('phones-grid-container');
  if (phoneGrid) {
    const phones = Storage.getProducts().filter(p => p.category === 'phone' && !p.isFlashSale).slice(0, 10);
    phoneGrid.innerHTML = phones.map(p => renderTechZoneProductCard(p, false)).join('');
    bindProductActions(phoneGrid);
  }

  // 5. Render Block 2: Laptop & Máy Tính Bảng (Full-width 10 sản phẩm chuẩn 2 hàng x 5 cột)
  const laptopGrid = document.getElementById('laptops-grid-container');
  if (laptopGrid) {
    const laptops = Storage.getProducts().filter(p => p.category === 'laptop' && !p.isFlashSale).slice(0, 10);
    laptopGrid.innerHTML = laptops.map(p => renderTechZoneProductCard(p, false)).join('');
    bindProductActions(laptopGrid);
  }

  // 6. Render Block 3: Phụ Kiện Giá Sốc (Full-width 10 sản phẩm chuẩn 2 hàng x 5 cột)
  const accGrid = document.getElementById('accessories-grid-container');
  if (accGrid) {
    const accs = Storage.getProducts().filter(p => ['accessory', 'audio', 'watch'].includes(p.category) && !p.isFlashSale).slice(0, 10);
    accGrid.innerHTML = accs.map(p => renderTechZoneProductCard(p, false)).join('');
    bindProductActions(accGrid);
  }

  // 7. Brand Tabs inside sections
  initBrandTabsFiltering();

  // 8. Order Tracking Widget & Header Search
  initSmartOrderBanner();
}

// Main Interactive Slider
function initMainSlider() {
  const slides = document.querySelectorAll('.tz-slide');
  const tabs = document.querySelectorAll('.tz-slide-tab');
  const prevBtn = document.querySelector('.tz-slider-btn.prev');
  const nextBtn = document.querySelector('.tz-slider-btn.next');

  if (slides.length === 0) return;

  let currentSlide = 0;
  let timer = null;

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    if (tabs[currentSlide]) tabs[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    if (tabs[currentSlide]) tabs[currentSlide].classList.add('active');
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 4500);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
      startAutoplay();
    });
  }

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      showSlide(idx);
      startAutoplay();
    });
  });

  startAutoplay();
}

// Flash Sale Countdown Timer
function initFlashSaleCountdown() {
  const hoursElem = document.getElementById('timer-hours');
  const minsElem = document.getElementById('timer-mins');
  const secsElem = document.getElementById('timer-secs');

  if (!hoursElem || !minsElem || !secsElem) return;

  let remaining = 8 * 3600 + 45 * 60 + 12;

  function update() {
    if (remaining <= 0) remaining = 12 * 3600;

    const h = Math.floor(remaining / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = remaining % 60;

    const pad = n => String(n).padStart(2, '0');
    hoursElem.textContent = pad(h);
    minsElem.textContent = pad(m);
    secsElem.textContent = pad(s);

    remaining--;
  }

  update();
  setInterval(update, 1000);
}

// Brand Tabs filtering (Luôn duy trì 10 sản phẩm 2 hàng x 5 cột không bị hổng lưới)
function initBrandTabsFiltering() {
  const tabPills = document.querySelectorAll('.tz-tab-pill');
  tabPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const parentSection = pill.closest('.tz-category-section');
      if (!parentSection) return;

      const group = parentSection.querySelectorAll('.tz-tab-pill');
      group.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const brand = pill.dataset.brand;
      const category = pill.dataset.category;
      const grid = parentSection.querySelector('.section-products-grid') || parentSection.querySelector('.products-grid');

      if (!grid) return;

      let allCategoryItems = Storage.getProducts().filter(p => {
        if (category === 'Laptop' || category === 'laptop') return p.category === 'laptop' && !p.isFlashSale;
        if (category === 'Điện thoại' || category === 'phone') return p.category === 'phone' && !p.isFlashSale;
        if (category === 'Phụ kiện' || category === 'accessory') return ['accessory', 'audio', 'watch'].includes(p.category) && !p.isFlashSale;
        return (p.category === category || p.category === normalizeCategoryKey(category)) && !p.isFlashSale;
      });

      let displayItems = [];
      if (brand && brand !== 'all') {
        const brandMatches = allCategoryItems.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
        const otherItems = allCategoryItems.filter(p => p.brand.toLowerCase() !== brand.toLowerCase());
        displayItems = [...brandMatches, ...otherItems].slice(0, 10);
      } else {
        displayItems = allCategoryItems.slice(0, 10);
      }

      grid.innerHTML = displayItems.map(p => renderTechZoneProductCard(p, false)).join('');
      bindProductActions(grid);
    });
  });
}

// 8. Smart Order Tracking Banner on Homepage (Shopee Model: Không cần nhập mã)
function initSmartOrderBanner() {
  const container = document.getElementById('home-smart-order-banner');
  if (!container) return;

  const orders = Storage.getOrders();
  // Ưu tiên đơn đang giao hoặc chờ xác nhận
  const activeOrder = orders.find(o => o.status === 'Đang giao') || orders.find(o => o.status === 'Chờ xác nhận');

  if (activeOrder) {
    const firstItem = activeOrder.items && activeOrder.items.length > 0 ? activeOrder.items[0] : null;
    const itemName = firstItem ? firstItem.name : 'Sản phẩm công nghệ TechZone';
    const itemImg = firstItem ? firstItem.image : 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&q=80';
    const otherCount = activeOrder.items ? activeOrder.items.length - 1 : 0;
    const latestCp = activeOrder.checkpoints && activeOrder.checkpoints.length > 0 ? activeOrder.checkpoints[0].text : activeOrder.shippingNotification;

    container.innerHTML = `
      <div class="tz-smart-banner-card active-delivery" onclick="window.location.href='tracking-detail.html?id=${activeOrder.id}'" title="Nhấp vào để xem lộ trình giao nhận thời gian thực">
        <div class="smart-banner-left">
          <div class="smart-banner-thumb-wrap">
            <img src="${itemImg}" alt="${itemName}" class="smart-banner-thumb">
            <span class="smart-banner-pulse-badge"><i class="fa-solid fa-bolt"></i> SPX</span>
          </div>
          <div class="smart-banner-info">
            <div class="smart-banner-status-tag">
              <span class="live-pulse-dot"></span>
              <strong>${activeOrder.status === 'Đang giao' ? 'ĐƠN HÀNG ĐANG GIAO HỎA TỐC' : 'ĐƠN HÀNG ĐANG ĐƯỢC CHUẨN BỊ'}</strong>
              <span class="smart-code-chip">#${activeOrder.id}</span>
            </div>
            <h4 class="smart-banner-title">
              ${itemName} ${otherCount > 0 ? `<span class="smart-other-count">+${otherCount} sản phẩm khác</span>` : ''}
            </h4>
            <p class="smart-banner-desc">
              <i class="fa-solid fa-location-dot" style="color: #ef4444;"></i> ${latestCp}
            </p>
          </div>
        </div>
        <div class="smart-banner-right" onclick="event.stopPropagation()">
          <a href="tracking-detail.html?id=${activeOrder.id}" class="btn-smart-track-main">
            <i class="fa-solid fa-route"></i> Xem lộ trình giao nhận <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href="history.html" class="btn-smart-history-link">
            <i class="fa-solid fa-receipt"></i> Tất cả đơn mua (${orders.length})
          </a>
        </div>
      </div>
    `;
  } else {
    // Nếu không có đơn nào đang giao
    container.innerHTML = `
      <div class="tz-smart-banner-card idle-state" onclick="window.location.href='history.html'" title="Nhấp để xem đơn mua của bạn">
        <div class="smart-banner-left">
          <div class="smart-banner-icon-box">
            <i class="fa-solid fa-box-archive"></i>
          </div>
          <div class="smart-banner-info">
            <div class="smart-banner-status-tag" style="background: rgba(2, 132, 199, 0.12); color: #0284c7;">
              <i class="fa-solid fa-shield-check"></i> TECHZONE EXPRESS CARE
            </div>
            <h4 class="smart-banner-title">
              Xem tiến trình & Quản lý đơn mua hàng của bạn
            </h4>
            <p class="smart-banner-desc">
              Theo dõi lịch sử đơn hàng, phiếu bảo hành điện tử chính hãng và lộ trình giao nhận SPX mà không cần nhập mã.
            </p>
          </div>
        </div>
        <div class="smart-banner-right" onclick="event.stopPropagation()">
          <a href="history.html" class="btn-smart-track-main">
            <i class="fa-solid fa-receipt"></i> Xem đơn mua của bạn <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
  }
}

function handleTrackingSearch(orderCode) {
  if (!orderCode || !orderCode.trim()) {
    showToast('Vui lòng nhập mã đơn hàng để kiểm tra tiến trình!', 'warning');
    return;
  }
  const clean = orderCode.trim().toUpperCase();
  const order = Storage.findOrderById(clean);
  if (order) {
    showToast(`Đã tìm thấy đơn hàng ${order.id}! Đang mở lộ trình giao nhận Shopee Express...`, 'success');
    setTimeout(() => {
      window.location.href = `tracking-detail.html?id=${encodeURIComponent(order.id)}`;
    }, 500);
  } else {
    showToast(`Không tìm thấy mã "${orderCode}". Chuyển tiếp tới danh sách đơn mua...`, 'info');
    setTimeout(() => {
      window.location.href = 'history.html';
    }, 600);
  }
}

// --- 6. PAGE LOGIC: PRODUCTS CATALOG (products.html) ---
function initProductsPage() {
  const grid = document.getElementById('catalog-products-grid');
  const searchInput = document.getElementById('catalog-search-field');
  const sortSelect = document.getElementById('catalog-sort-dropdown');
  const brandButtons = document.querySelectorAll('.tz-filter-chip');
  const catalogTitle = document.getElementById('catalog-title');
  const catalogDesc = document.getElementById('catalog-desc');
  const breadcrumbCurrent = document.getElementById('breadcrumb-current');
  const filterIndicator = document.getElementById('catalog-filter-indicator');
  const activeCategoryTag = document.getElementById('active-category-tag');
  const btnResetFilter = document.getElementById('btn-reset-catalog-filter');

  if (!grid) return;

  // 1. Đọc tham số URL: category & q (search query)
  const urlParams = new URLSearchParams(window.location.search);
  const rawCatParam = urlParams.get('category');
  let currentCategory = rawCatParam ? (normalizeCategoryKey(rawCatParam) || 'all') : 'all';
  let currentBrand = 'all';
  let currentSearch = urlParams.get('q') || '';
  let currentSort = 'default';

  if (searchInput && currentSearch) {
    searchInput.value = currentSearch;
  }

  function filterAndDisplay() {
    const products = Storage.getProducts();
    let items = [...products];

    // 2. Lọc sản phẩm theo Category (BẮT BUỘC chỉ hiển thị sản phẩm thuộc đúng danh mục đó)
    if (currentCategory && currentCategory !== 'all') {
      const selectedCategory = currentCategory;
      items = products.filter(item => item.category === selectedCategory);
    }

    // Lọc theo Brand chip nếu người dùng chọn
    if (currentBrand && currentBrand !== 'all') {
      items = items.filter(p => (p.brand || '').toLowerCase() === currentBrand.toLowerCase());
    }

    // Lọc theo Search keyword nếu có
    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase().trim();
      items = items.filter(p =>
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.brand && p.brand.toLowerCase().includes(q)) ||
        (p.specs && p.specs.some(s => s.toLowerCase().includes(q))) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // Sắp xếp
    if (currentSort === 'price-asc') {
      items.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      items.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'discount-desc') {
      items.sort((a, b) => (b.discountPercent || 0) - (a.discountPercent || 0));
    }

    // Cập nhật tiêu đề danh mục: "Danh mục: [Tên danh mục] (X sản phẩm)"
    updateCatalogHeaders(items.length);

    // Render CHỈ danh sách sản phẩm đã lọc ra giao diện
    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3.5rem 1rem; background: white; border-radius: 14px; border: 1px solid var(--border); box-shadow: var(--shadow-sm);">
          <i class="fa-solid fa-box-open" style="font-size: 3.5rem; color: #cbd5e1; margin-bottom: 1rem;"></i>
          <h4 style="color: #64748b; font-weight: 800; font-size: 1.15rem;">Không tìm thấy thiết bị nào phù hợp</h4>
          <p style="color: #94a3b8; font-size: 0.85rem; margin: 0.4rem auto 1.25rem; max-width: 420px;">
            Không có sản phẩm nào thuộc tiêu chí hiện tại. Bạn có thể chọn danh mục khác hoặc bấm xem tất cả sản phẩm.
          </p>
          <button type="button" class="btn-tz-primary" id="btn-empty-reset" style="padding: 0.55rem 1.35rem; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.5rem; margin: 0 auto; cursor: pointer;">
            <i class="fa-solid fa-rotate-left"></i> Xem tất cả sản phẩm
          </button>
        </div>
      `;
      const emptyReset = document.getElementById('btn-empty-reset');
      if (emptyReset) {
        emptyReset.addEventListener('click', () => {
          window.applyCategoryFilter('all', true);
        });
      }
      return;
    }

    grid.innerHTML = items.map(p => renderTechZoneProductCard(p, false)).join('');
    bindProductActions(grid);
  }

  function updateCatalogHeaders(count) {
    const info = CATEGORY_NAMES[currentCategory];
    if (currentCategory && currentCategory !== 'all' && info) {
      if (catalogTitle) {
        catalogTitle.textContent = `Danh mục: ${info.title} (${count} sản phẩm)`;
      }
      if (catalogDesc) {
        catalogDesc.textContent = info.desc;
      }
      if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = info.title;
      }
      if (filterIndicator) {
        filterIndicator.style.display = 'flex';
      }
      if (activeCategoryTag) {
        activeCategoryTag.innerHTML = `<i class="${info.icon}"></i> ${info.title} (${count})`;
      }
      document.title = `${info.title} (${count} sản phẩm) - TechZone`;
    } else {
      if (catalogTitle) {
        catalogTitle.textContent = 'TẤT CẢ THIẾT BỊ CÔNG NGHỆ TECHZONE';
      }
      if (catalogDesc) {
        catalogDesc.textContent = `Hàng chính hãng phân phối ủy quyền, hiển thị ${count} sản phẩm bảo hành đổi mới 30 ngày kèm giao hỏa tốc 2 giờ`;
      }
      if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = 'Danh mục thiết bị công nghệ';
      }
      if (filterIndicator) {
        filterIndicator.style.display = 'none';
      }
      document.title = 'Danh mục thiết bị công nghệ - TechZone';
    }
  }

  // Hàm lọc danh mục toàn cục dùng cho Menu Danh mục & Nút Bỏ lọc
  window.applyCategoryFilter = function(categoryKey, updateUrl = true) {
    const normalized = normalizeCategoryKey(categoryKey) || 'all';
    currentCategory = normalized;
    currentBrand = 'all'; // Reset chip thương hiệu khi đổi danh mục
    brandButtons.forEach(b => {
      if (b.dataset.filter === 'all') b.classList.add('active');
      else b.classList.remove('active');
    });

    if (updateUrl) {
      const newUrl = normalized === 'all' ? 'products.html' : `products.html?category=${encodeURIComponent(normalized)}`;
      window.history.pushState({ category: normalized }, '', newUrl);
    }

    filterAndDisplay();

    // Cuộn mượt lên đầu danh sách sản phẩm
    const mainSection = document.querySelector('.main-content');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (normalized !== 'all' && CATEGORY_NAMES[normalized]) {
      showToast(`Đang hiển thị danh mục: <strong>${CATEGORY_NAMES[normalized].title}</strong>`, 'info');
    }
  };

  // Nút "Xem tất cả sản phẩm" để bỏ lọc
  if (btnResetFilter) {
    btnResetFilter.addEventListener('click', () => {
      window.applyCategoryFilter('all', true);
    });
  }

  // Brand Chips
  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      brandButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentBrand = btn.dataset.filter || 'all';
      filterAndDisplay();
    });
  });

  // Tìm kiếm theo từ khóa
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filterAndDisplay();
    });
  }

  // Sắp xếp giá / % giảm giá
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndDisplay();
    });
  }

  // Hỗ trợ nút Back / Forward trên trình duyệt (Popstate)
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    window.applyCategoryFilter(cat || 'all', false);
  });

  // Thực thi hiển thị lần đầu
  filterAndDisplay();
}

// --- 7. PAGE LOGIC: CHECKOUT & CART (checkout.html) ---
function initCheckoutPage() {
  const cartListWrap = document.getElementById('checkout-items-list');
  const subtotalElem = document.getElementById('checkout-subtotal-val');
  const discountElem = document.getElementById('checkout-discount-val');
  const shippingElem = document.getElementById('checkout-shipping-val');
  const totalElem = document.getElementById('checkout-final-val');
  const emptyState = document.getElementById('checkout-empty-state');
  const checkoutForm = document.getElementById('tz-checkout-form');
  const voucherForm = document.getElementById('voucher-form');
  const voucherInput = document.getElementById('voucher-code');

  if (!cartListWrap) return;

  let currentDiscount = 0;

  function renderCartList() {
    const cart = Storage.getCart();

    if (cart.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      const mainCols = document.querySelector('.tz-checkout-layout');
      if (mainCols) mainCols.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    const mainCols = document.querySelector('.tz-checkout-layout');
    if (mainCols) mainCols.style.display = 'grid';

    cartListWrap.innerHTML = cart.map(item => `
      <div class="tz-cart-row" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}">
        <div class="tz-cart-meta">
          <div class="tz-cart-title" title="${item.name}">${item.name}</div>
          <div class="tz-cart-price">${formatVND(item.price)}</div>
        </div>
        <div class="tz-qty-controls">
          <button type="button" class="tz-qty-btn btn-minus" data-id="${item.id}">-</button>
          <span class="tz-qty-num">${item.quantity}</span>
          <button type="button" class="tz-qty-btn btn-plus" data-id="${item.id}">+</button>
        </div>
        <button type="button" class="tz-cart-remove-btn" data-id="${item.id}" title="Xóa món">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    calculateTotals(cart);
    bindCartEvents();
  }

  function calculateTotals(cart) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const shippingRadio = document.querySelector('input[name="shipping_service"]:checked');
    const isExpress = shippingRadio ? shippingRadio.value === 'express' : true;

    let shippingFee = isExpress ? 35000 : 25000;
    if (subtotal >= 2000000) {
      shippingFee = 0; // Free ship for orders >= 2M
    }

    const finalTotal = Math.max(0, subtotal + shippingFee - currentDiscount);

    if (subtotalElem) subtotalElem.textContent = formatVND(subtotal);
    if (shippingElem) {
      shippingElem.textContent = shippingFee === 0 ? 'Miễn phí (Đơn > 2tr)' : formatVND(shippingFee);
      shippingElem.style.color = shippingFee === 0 ? '#10b981' : '';
    }
    if (discountElem) {
      discountElem.textContent = currentDiscount > 0 ? `-${formatVND(currentDiscount)}` : '0 đ';
      discountElem.style.color = currentDiscount > 0 ? '#0284c7' : '';
    }
    if (totalElem) totalElem.textContent = formatVND(finalTotal);

    return { subtotal, shippingFee, discount: currentDiscount, finalTotal };
  }

  function bindCartEvents() {
    const minusBtns = cartListWrap.querySelectorAll('.btn-minus');
    const plusBtns = cartListWrap.querySelectorAll('.btn-plus');
    const removeBtns = cartListWrap.querySelectorAll('.tz-cart-remove-btn');

    minusBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        Storage.updateQuantity(btn.dataset.id, -1);
        renderCartList();
      });
    });

    plusBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        Storage.updateQuantity(btn.dataset.id, 1);
        renderCartList();
      });
    });

    removeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        Storage.removeFromCart(btn.dataset.id);
        showToast('Đã xóa thiết bị khỏi giỏ hàng', 'info');
        renderCartList();
      });
    });
  }

  // Voucher apply
  if (voucherForm && voucherInput) {
    voucherForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = voucherInput.value.trim().toUpperCase();
      if (code === 'TECHZONE50' || code === 'TZ50K') {
        currentDiscount = 50000;
        showToast('Áp dụng thành công mã giảm giá 50.000đ từ TechZone!', 'success');
      } else if (code === 'FREESHIP') {
        currentDiscount = 35000;
        showToast('Áp dụng mã miễn phí giao hàng hỏa tốc thành công!', 'success');
      } else {
        showToast('Mã voucher không hợp lệ. Vui lòng thử mã: TECHZONE50', 'error');
      }
      renderCartList();
    });
  }

  const shippingRadios = document.querySelectorAll('input[name="shipping_service"]');
  shippingRadios.forEach(r => {
    r.addEventListener('change', () => {
      renderCartList();
    });
  });

  // Handle Checkout Form Submission
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cart = Storage.getCart();
      if (cart.length === 0) {
        showToast('Giỏ hàng trống! Vui lòng chọn sản phẩm.', 'warning');
        return;
      }

      const fullname = document.getElementById('cust-name').value.trim();
      const phone = document.getElementById('cust-phone').value.trim();
      const city = document.getElementById('cust-city').value;
      const address = document.getElementById('cust-address').value.trim();
      const note = document.getElementById('cust-note') ? document.getElementById('cust-note').value.trim() : '';

      if (!fullname || !phone || !address) {
        showToast('Vui lòng điền đầy đủ các thông tin giao hàng bắt buộc!', 'warning');
        return;
      }

      const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      if (!phoneRegex.test(phone)) {
        showToast('Số điện thoại không hợp lệ! Vui lòng kiểm tra lại.', 'error');
        return;
      }

      const { subtotal, shippingFee, discount, finalTotal } = calculateTotals(cart);

      // Order ID Shopee Express: SPX-XXXXXX
      const spxNum = Math.floor(100000 + Math.random() * 900000);
      const randomId = 'SPX-' + spxNum;
      const legacyId = 'TZ-' + (spxNum % 90000 + 10000);

      const couriers = [
        { name: 'Shopee Express (SPX Speed Hỏa Tốc)', shipper: 'Trần Hoàng Nam', phone: '0988.223.344', plate: '29B1 - 892.45', rating: '4.98 ⭐' },
        { name: 'Shopee Express (SPX Nhanh)', shipper: 'Đỗ Văn Tuấn', phone: '0977.112.334', plate: '59K2 - 689.12', rating: '4.9 ⭐' },
        { name: 'Shopee Express (SPX Hỏa Tốc)', shipper: 'Nguyễn Quang Hải', phone: '0935.889.012', plate: '43D1 - 998.45', rating: '5.0 ⭐' }
      ];
      const assigned = couriers[Math.floor(Math.random() * couriers.length)];

      const paymentRadio = document.querySelector('input[name="payment_choice"]:checked');
      const paymentName = paymentRadio ? paymentRadio.dataset.name || paymentRadio.value : 'Thanh toán COD';

      const shippingRadio = document.querySelector('input[name="shipping_service"]:checked');
      const shippingMethodName = shippingRadio ? shippingRadio.dataset.name : 'Giao Hỏa Tốc SPX 2H';

      const newOrder = {
        id: randomId,
        aliases: [legacyId],
        createdAt: new Date().toLocaleString('vi-VN', { hour12: false }),
        status: 'Chờ xác nhận',
        etaSeconds: 7200, // 2 hours countdown
        etaText: 'Dự kiến giao trong 2 giờ tới',
        shippingCourier: assigned.name,
        shippingNotification: '📦 Người gửi đang chuẩn bị đơn hàng và in phiếu gửi SPX',
        shipper: {
          name: assigned.shipper,
          phone: assigned.phone,
          plate: assigned.plate,
          rating: assigned.rating,
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80'
        },
        customer: {
          name: fullname,
          phone: phone,
          address: `${address}, ${city}`,
          note: note
        },
        shippingMethod: shippingMethodName,
        paymentMethod: paymentName,
        items: [...cart],
        subtotal: subtotal,
        shippingFee: shippingFee,
        discountAmount: discount,
        total: finalTotal,
        checkpoints: [
          { time: 'Vừa xong', text: 'Đơn hàng đã được khởi tạo thành công trên hệ thống TechZone Official Store.' },
          { time: 'Chờ xác nhận', text: 'Người bán TechZone đang chuẩn bị bưu kiện và in mã vận đơn Shopee Express.' }
        ]
      };

      Storage.addOrder(newOrder);
      Storage.clearCart();

      showToast(`Tạo đơn hàng <strong>${randomId}</strong> thành công! Đang chuyển hướng sang tra cứu...`, 'success');

      const submitBtn = checkoutForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang khởi tạo lộ trình giao hàng...';
      }

      setTimeout(() => {
        window.location.href = `tracking-detail.html?id=${encodeURIComponent(randomId)}`;
      }, 1100);
    });
  }

  renderCartList();
}

// --- 8. PAGE LOGIC: ORDER TRACKING DETAIL (tracking-detail.html) - CHUẨN SHOPEE EXPRESS (SPX) ---
let trackingTimerInterval = null;

function initTrackingDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  let orderId = urlParams.get('id');

  let order = null;
  const orders = Storage.getOrders();

  if (orderId) {
    order = Storage.findOrderById(orderId);
  }

  // Fallback to first order if not found
  if (!order) {
    if (orders.length > 0) {
      order = orders[0];
      if (orderId) {
        showToast(`Không tìm thấy mã "${orderId}". Đang hiển thị đơn hàng mẫu: ${order.id}`, 'warning');
      }
    } else {
      order = INITIAL_MOCK_ORDERS[0];
    }
  }

  renderTrackingView(order);

  // Quick Switcher Chips
  const switcher = document.getElementById('tracking-sample-pills');
  if (switcher) {
    switcher.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
        <span style="font-size: 0.8rem; font-weight: 700; color: #64748b;">Xem nhanh đơn mẫu:</span>
        ${orders.slice(0, 5).map(o => `
          <a href="tracking-detail.html?id=${o.id}" class="tz-sample-chip" style="${o.id === order.id ? 'background-color: #ee4d2d; color: white; border-color: #ee4d2d;' : ''}">
            ${o.id} (${o.status})
          </a>
        `).join('')}
      </div>
    `;
  }
}

function renderTrackingView(order) {
  // 1. Order Code & Courier Badge
  const codeElem = document.getElementById('tracking-code-val');
  const badgeElem = document.getElementById('tracking-badge-val');
  const courierElem = document.getElementById('tracking-courier-val');

  if (codeElem) codeElem.textContent = '#' + order.id;
  if (courierElem) courierElem.textContent = order.shippingCourier || 'Shopee Express (SPX Speed)';

  if (badgeElem) {
    badgeElem.innerHTML = getStatusBadgeHtml(order.status);
  }

  // 2. Shipper Header Quick Bar
  const shipperBox = document.getElementById('spx-shipper-header-box');
  if (shipperBox) {
    const shipper = order.shipper || {
      name: 'Trần Hoàng Nam',
      phone: '0988.223.344',
      plate: '29B1 - 892.45',
      rating: '4.98 ⭐',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80'
    };

    if (order.status === 'Đã hủy') {
      shipperBox.innerHTML = `
        <div style="font-size: 0.88rem; color: #dc2626; font-weight: 600; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-triangle-exclamation"></i> Đơn hàng đã hủy, không phát sinh lộ trình bưu tá giao nhận.
        </div>
      `;
    } else {
      shipperBox.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${shipper.avatar}" alt="${shipper.name}" style="width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 2px solid #ee4d2d;">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: #1e293b;">
                Tài xế giao hàng: ${shipper.name} <span style="font-size: 0.76rem; color: #f59e0b; margin-left: 6px;">${shipper.rating}</span>
              </div>
              <div style="font-size: 0.82rem; color: #64748b; margin-top: 2px;">
                <i class="fa-solid fa-motorcycle" style="color: #ee4d2d;"></i> Biển số: <strong>${shipper.plate}</strong> | Hotline tài xế: <strong>${shipper.phone}</strong>
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <a href="tel:${shipper.phone}" class="btn-shopee-primary" style="padding: 7px 14px; font-size: 0.82rem;">
              <i class="fa-solid fa-phone"></i> Gọi Shipper
            </a>
            <button type="button" class="btn-shopee-secondary" style="padding: 7px 14px; font-size: 0.82rem;" onclick="showToast('Đang kết nối trung tâm chat SPX với shipper ${shipper.name}...', 'info')">
              <i class="fa-regular fa-comment-dots"></i> Nhắn tin
            </button>
          </div>
        </div>
      `;
    }
  }

  // 3. Countdown Timer JavaScript
  renderCountdownClock(order);

  // 4. Horizontal Timeline 4 bước via CSS Pseudo-elements (::before & ::after)
  renderPseudoTimeline(order);

  // 5. Vertical Timeline chi tiết via CSS ::before
  renderVerticalTimeline(order);

  // 6. Shipper Destination & Package Items List
  renderPackageDestinationBlock(order);
}

function getStatusBadgeHtml(status) {
  let statusClass = 'shipping';
  let dotIcon = 'fa-solid fa-truck-fast';

  if (status === 'Chờ xác nhận' || status === 'Đã xác nhận') {
    statusClass = 'confirmed';
    dotIcon = 'fa-solid fa-box-open';
  } else if (status === 'Đang giao') {
    statusClass = 'shipping';
    dotIcon = 'fa-solid fa-truck-fast';
  } else if (status === 'Đã giao' || status === 'Giao thành công') {
    statusClass = 'delivered';
    dotIcon = 'fa-solid fa-circle-check';
  } else if (status === 'Đã hủy') {
    statusClass = 'cancelled';
    dotIcon = 'fa-solid fa-ban';
  }

  return `<span class="shopee-order-status-badge ${statusClass}"><i class="${dotIcon}"></i> ${status}</span>`;
}

/**
 * MANDATORY CSS PSEUDO-ELEMENTS TIMELINE (HORIZONTAL)
 * - .order-timeline::before  -> Grey background connector line
 * - .order-timeline::after   -> Active Shopee orange dynamic progress fill line
 */
function renderPseudoTimeline(order) {
  const timeline = document.querySelector('.order-timeline');
  if (!timeline) return;

  const steps = [
    { key: 'ordered', name: '1. Đơn Đã Đặt', icon: 'fa-solid fa-file-invoice', time: order.createdAt },
    { key: 'confirmed', name: '2. Đã Xác Nhận', icon: 'fa-solid fa-box-open', time: (order.status !== 'Đã đặt' && order.status !== 'Đã hủy') ? 'Đã đóng hộp SPX' : 'Chờ xác nhận' },
    { key: 'shipping', name: '3. Đang Vận Chuyển', icon: 'fa-solid fa-truck-fast', time: (order.status === 'Đang giao' || order.status === 'Đã giao' || order.status === 'Giao thành công') ? 'Đang giao hỏa tốc' : 'Chờ xuất kho' },
    { key: 'delivered', name: '4. Giao Hàng Thành Công', icon: 'fa-solid fa-circle-check', time: (order.status === 'Đã giao' || order.status === 'Giao thành công') ? 'Đã ký nhận' : 'Dự kiến hôm nay' }
  ];

  let activeIdx = 0;
  if (order.status === 'Chờ xác nhận' || order.status === 'Đã xác nhận') activeIdx = 1;
  else if (order.status === 'Đang giao') activeIdx = 2;
  else if (order.status === 'Đã giao' || order.status === 'Giao thành công') activeIdx = 3;
  else if (order.status === 'Đã hủy') activeIdx = -1;

  let progressPct = 0;
  if (activeIdx === 1) progressPct = 33.33;
  if (activeIdx === 2) progressPct = 66.66;
  if (activeIdx === 3) progressPct = 100;

  timeline.style.setProperty('--progress-width', `${progressPct}%`);

  if (order.status === 'Đã hủy') {
    timeline.innerHTML = `
      <div style="text-align: center; width: 100%; padding: 1.6rem; background-color: #fef2f2; border: 1.5px dashed #ef4444; border-radius: 8px;">
        <i class="fa-solid fa-ban" style="font-size: 2.3rem; color: #ef4444; margin-bottom: 0.5rem;"></i>
        <h4 style="color: #b91c1c; font-weight: 800;">Đơn hàng này đã được hủy bỏ</h4>
        <p style="color: #991b1b; font-size: 0.85rem; margin-top: 4px;">Đơn hàng không phát sinh phí vận chuyển. Quý khách vui lòng liên hệ CSKH Shopee TechZone nếu cần hỗ trợ thêm.</p>
      </div>
    `;
    return;
  }

  timeline.innerHTML = steps.map((step, idx) => {
    let stateClass = '';
    let nodeIcon = `<i class="${step.icon}"></i>`;

    if (idx < activeIdx) {
      stateClass = 'completed';
      nodeIcon = `<i class="fa-solid fa-check"></i>`;
    } else if (idx === activeIdx) {
      stateClass = 'active';
    }

    return `
      <div class="timeline-step ${stateClass}">
        <div class="timeline-node">
          ${nodeIcon}
        </div>
        <div class="timeline-step-name">${step.name}</div>
        <div class="timeline-step-time">${step.time}</div>
      </div>
    `;
  }).join('');
}

// Live Countdown Timer (Shopee Express Box)
function renderCountdownClock(order) {
  if (trackingTimerInterval) clearInterval(trackingTimerInterval);

  const container = document.getElementById('tracking-countdown-container');
  if (!container) return;

  if (order.status === 'Đã giao' || order.status === 'Giao thành công') {
    container.innerHTML = `
      <div class="spx-eta-info" style="color: #15803d;">
        <i class="fa-solid fa-circle-check" style="font-size: 1.35rem; color: #16a34a;"></i>
        <div>
          <div>Đơn hàng đã được <strong>Giao hàng thành công</strong> vào ${order.etaText || '11:15 18-10-2026'}!</div>
          <div style="font-size: 0.78rem; color: #166534; font-weight: normal;">Cảm ơn bạn đã tin tưởng mua sắm tại TechZone Official Store.</div>
        </div>
      </div>
      <div class="shopee-btn-group">
        <a href="products.html" class="btn-shopee-primary" style="padding: 7px 16px; font-size: 0.82rem;">
          <i class="fa-solid fa-rotate-right"></i> Mua lại sản phẩm
        </a>
      </div>
    `;
    return;
  }

  if (order.status === 'Đã hủy') {
    container.innerHTML = `
      <div class="spx-eta-info" style="color: #b91c1c;">
        <i class="fa-solid fa-circle-xmark" style="font-size: 1.35rem; color: #ef4444;"></i>
        <div>
          <div>Trạng thái: <strong>Đã hủy đơn hàng</strong></div>
          <div style="font-size: 0.78rem; color: #991b1b; font-weight: normal;">${order.etaText || 'Đã hủy theo yêu cầu người mua'}</div>
        </div>
      </div>
      <div class="shopee-btn-group">
        <a href="products.html" class="btn-shopee-primary" style="padding: 7px 16px; font-size: 0.82rem;">
          <i class="fa-solid fa-bag-shopping"></i> Mua sản phẩm khác
        </a>
      </div>
    `;
    return;
  }

  let remaining = order.etaSeconds !== undefined ? order.etaSeconds : 5400;
  if (remaining <= 0) remaining = 3600;

  function tick() {
    if (remaining <= 0) {
      clearInterval(trackingTimerInterval);
      container.innerHTML = `
        <div class="spx-eta-info" style="color: #b45309;">
          <i class="fa-solid fa-bell" style="font-size: 1.35rem; color: #f59e0b;"></i>
          <div>
            <div>Thông báo vận chuyển: <strong>Kiện hàng đang tới điểm giao của bạn!</strong></div>
            <div style="font-size: 0.78rem; color: #78350f; font-weight: normal;">Shipper đang di chuyển đến địa chỉ, vui lòng chú ý điện thoại.</div>
          </div>
        </div>
      `;
      return;
    }

    const h = Math.floor(remaining / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = remaining % 60;

    const pad = n => String(n).padStart(2, '0');

    container.innerHTML = `
      <div class="spx-eta-info">
        <i class="fa-solid fa-truck-clock" style="font-size: 1.35rem; color: #b45309;"></i>
        <div>
          <div>Dự kiến giao hàng vào: <strong>${order.etaText || '14:30 Hôm nay, 20-10-2026'}</strong></div>
          <div style="font-size: 0.78rem; color: #78350f; font-weight: normal;">Đang giao bởi ${order.shippingCourier || 'Shopee Express (SPX Speed)'}</div>
        </div>
      </div>
      <div class="spx-countdown-wrap">
        <span class="spx-time-label"><i class="fa-solid fa-stopwatch"></i> Thời gian còn lại:</span>
        <div class="spx-countdown-digits">
          <span class="spx-time-unit">${pad(h)}</span> <span style="font-weight: 900; color: #78350f;">:</span>
          <span class="spx-time-unit">${pad(m)}</span> <span style="font-weight: 900; color: #78350f;">:</span>
          <span class="spx-time-unit">${pad(s)}</span>
        </div>
      </div>
    `;

    remaining--;
  }

  tick();
  trackingTimerInterval = setInterval(tick, 1000);
}

// Vertical Timeline chi tiết bằng CSS ::before
function renderVerticalTimeline(order) {
  const container = document.getElementById('spx-vertical-timeline-container');
  if (!container) return;

  const checkpoints = order.checkpoints || [
    { time: '11:15 Hôm nay', text: 'Shipper đang trên đường giao hàng đến bạn.' },
    { time: '10:50 Hôm nay', text: 'Đơn hàng đã xuất kho trung chuyển SPX Hub.' }
  ];

  container.innerHTML = checkpoints.map((cp, idx) => `
    <div class="spx-v-checkpoint ${idx === 0 ? 'latest' : ''}">
      <div class="spx-v-time">
        <span>${cp.time}</span>
        ${idx === 0 && order.status !== 'Đã hủy' ? '<span class="spx-v-tag">Mới nhất</span>' : ''}
      </div>
      <div class="spx-v-desc">${cp.text}</div>
    </div>
  `).join('');
}

// Khối Địa chỉ nhận hàng & Khối Chi tiết thanh toán chuẩn Shopee
function renderPackageDestinationBlock(order) {
  const addressBox = document.getElementById('tracking-shipper-content');
  const packageBox = document.getElementById('tracking-package-content');

  const customer = order.customer || {
    name: 'Nguyễn Văn Minh',
    phone: '0912.889.900',
    address: 'Số 68 Phố Duy Tân, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội',
    note: 'Giao trong giờ hành chính'
  };

  if (addressBox) {
    addressBox.innerHTML = `
      <div style="font-size: 1rem; font-weight: 800; color: #1e293b; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-location-dot" style="color: #ee4d2d;"></i> Địa Chỉ Nhận Hàng
      </div>

      <div style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">
        ${customer.name} <span style="font-weight: 600; color: #64748b; font-size: 0.88rem; margin-left: 8px;">(+84) ${customer.phone}</span>
      </div>

      <div style="font-size: 0.88rem; color: #475569; line-height: 1.5; margin-bottom: 8px;">
        ${customer.address}
      </div>

      ${customer.note ? `
        <div style="font-size: 0.82rem; background: #fff7ed; color: #c2410c; padding: 6px 10px; border-radius: 4px; border-left: 3px solid #f97316; margin-bottom: 12px;">
          <strong>Ghi chú người mua:</strong> ${customer.note}
        </div>
      ` : ''}

      <div style="padding-top: 12px; border-top: 1px dashed #e2e8f0; font-size: 0.82rem; color: #64748b; display: flex; align-items: center; gap: 6px;">
        <i class="fa-solid fa-shield-halved" style="color: #10b981;"></i> Thông tin người nhận được bảo mật bởi Shopee TechZone
      </div>
    `;
  }

  if (packageBox) {
    packageBox.innerHTML = `
      <div style="font-size: 1rem; font-weight: 800; color: #1e293b; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
        <span><i class="fa-solid fa-boxes-stacked" style="color: #0284c7; margin-right: 6px;"></i> Kiện Hàng (${order.items.length} món)</span>
        <span style="font-size: 0.8rem; font-weight: 600; color: #64748b;"><i class="fa-solid fa-credit-card"></i> ${order.paymentMethod}</span>
      </div>

      <!-- Item list -->
      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px;">
        ${order.items.map(it => `
          <div style="display: flex; align-items: center; gap: 12px; padding-bottom: 10px; border-bottom: 1px solid #f8fafc;">
            <img src="${it.image}" alt="${it.name}" style="width: 56px; height: 56px; object-fit: contain; border-radius: 6px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 2px;">
            <div style="flex: 1; min-width: 0;">
              <div style="font-size: 0.88rem; font-weight: 700; color: #1e293b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${it.name}</div>
              <div style="font-size: 0.78rem; color: #64748b; margin-top: 2px;">${it.variant ? 'Phân loại: ' + it.variant : 'Chính Hãng VN/A'}</div>
              <div style="font-size: 0.8rem; color: #334155; margin-top: 2px;">Số lượng: <strong>x${it.quantity}</strong></div>
            </div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #ee4d2d;">${formatVND(it.price * it.quantity)}</div>
          </div>
        `).join('')}
      </div>

      <!-- Financial breakdown -->
      <div style="background-color: #f8fafc; border-radius: 6px; padding: 12px 16px;">
        <div class="tz-summary-row" style="display: flex; justify-content: space-between; font-size: 0.86rem; color: #64748b; margin-bottom: 6px;">
          <span>Tổng tiền hàng:</span>
          <span style="font-weight: 700; color: #1e293b;">${formatVND(order.subtotal || order.total)}</span>
        </div>
        <div class="tz-summary-row" style="display: flex; justify-content: space-between; font-size: 0.86rem; color: #64748b; margin-bottom: 6px;">
          <span>Phí vận chuyển:</span>
          <span style="font-weight: 700; color: #16a34a;">${order.shippingFee === 0 ? 'Miễn phí (Freeship SPX)' : formatVND(order.shippingFee || 0)}</span>
        </div>
        ${order.discountAmount ? `
          <div class="tz-summary-row" style="display: flex; justify-content: space-between; font-size: 0.86rem; color: #0284c7; margin-bottom: 6px;">
            <span>Voucher Shopee Mall:</span>
            <span style="font-weight: 700;">-${formatVND(order.discountAmount)}</span>
          </div>
        ` : ''}
        <div class="tz-summary-row total" style="display: flex; justify-content: space-between; align-items: baseline; padding-top: 8px; border-top: 1px dashed #cbd5e1; margin-top: 4px;">
          <span style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Tổng thanh toán:</span>
          <span style="font-size: 1.35rem; font-weight: 900; color: #ee4d2d;">${formatVND(order.total)}</span>
        </div>
      </div>
    `;
  }
}

// --- 9. PAGE LOGIC: ORDER HISTORY (history.html) - CHUẨN GIAO DIỆN SHOPEE ---
function initHistoryPage() {
  const container = document.getElementById('history-cards-container');
  const tabs = document.querySelectorAll('.shopee-tab-item');
  const searchInput = document.getElementById('shopee-search-input');
  const resetBtn = document.getElementById('btn-reset-demo-orders');

  if (!container) return;

  let currentFilter = 'all';
  let searchQuery = '';

  function renderHistory() {
    const orders = Storage.getOrders();
    let filtered = orders;

    // Filter by Tab Status
    if (currentFilter !== 'all') {
      if (currentFilter === 'Chờ xác nhận') {
        filtered = orders.filter(o => o.status === 'Chờ xác nhận' || o.status === 'Đã xác nhận');
      } else if (currentFilter === 'Đang giao') {
        filtered = orders.filter(o => o.status === 'Đang giao');
      } else if (currentFilter === 'Đã giao') {
        filtered = orders.filter(o => o.status === 'Đã giao' || o.status === 'Giao thành công');
      } else if (currentFilter === 'Đã hủy') {
        filtered = orders.filter(o => o.status === 'Đã hủy');
      } else {
        filtered = orders.filter(o => o.status === currentFilter);
      }
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(o => {
        const idMatch = o.id.toLowerCase().includes(q) || (o.aliases && o.aliases.some(a => a.toLowerCase().includes(q)));
        const itemsMatch = o.items && o.items.some(it => it.name.toLowerCase().includes(q));
        const customerMatch = o.customer && o.customer.name.toLowerCase().includes(q);
        return idMatch || itemsMatch || customerMatch;
      });
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4.5rem 1rem; background: white; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
          <i class="fa-solid fa-receipt" style="font-size: 3.5rem; color: #cbd5e1; margin-bottom: 1rem;"></i>
          <h4 style="color: #64748b; font-weight: 800; font-size: 1.15rem;">Chưa có đơn hàng nào</h4>
          <p style="color: #94a3b8; font-size: 0.88rem; margin-top: 0.35rem;">Không tìm thấy đơn hàng phù hợp với trạng thái hoặc từ khóa tìm kiếm.</p>
          <a href="products.html" class="btn-shopee-primary" style="margin-top: 1.35rem; font-size: 0.88rem; padding: 0.65rem 1.6rem;">
            <i class="fa-solid fa-bag-shopping"></i> Khám phá sản phẩm TechZone
          </a>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(o => {
      let statusClass = 'shipping';
      let statusIcon = 'fa-solid fa-truck-fast';
      let statusLabel = o.status;

      if (o.status === 'Chờ xác nhận' || o.status === 'Đã xác nhận') {
        statusClass = 'confirmed';
        statusIcon = 'fa-solid fa-box-open';
        statusLabel = 'Chờ xác nhận';
      } else if (o.status === 'Đang giao') {
        statusClass = 'shipping';
        statusIcon = 'fa-solid fa-truck-fast';
        statusLabel = 'Đang vận chuyển';
      } else if (o.status === 'Đã giao' || o.status === 'Giao thành công') {
        statusClass = 'delivered';
        statusIcon = 'fa-solid fa-circle-check';
        statusLabel = 'Giao hàng thành công';
      } else if (o.status === 'Đã hủy') {
        statusClass = 'cancelled';
        statusIcon = 'fa-solid fa-ban';
        statusLabel = 'Đã hủy';
      }

      const totalItemsCount = o.items.reduce((sum, it) => sum + (it.quantity || 1), 0);

      const itemsHtml = o.items.map(it => `
        <div class="shopee-item-row" data-order-id="${o.id}">
          <img src="${it.image}" alt="${it.name}" class="shopee-thumb">
          <div class="shopee-item-details">
            <h4 class="shopee-item-title" title="${it.name}">${it.name}</h4>
            <div class="shopee-item-variant"><i class="fa-solid fa-tags" style="color: #94a3b8; font-size: 0.72rem;"></i> Phân loại: ${it.variant || 'Chính hãng VN/A'}</div>
            <div class="shopee-item-qty">Số lượng: x${it.quantity || 1}</div>
          </div>
          <div class="shopee-item-price">
            ${formatVND(it.price * (it.quantity || 1))}
          </div>
        </div>
      `).join('');

      // Dòng tóm tắt tiến trình mới nhất
      const latestCheckpoint = (o.checkpoints && o.checkpoints.length > 0) ? o.checkpoints[0] : null;
      let notificationText = o.shippingNotification;
      if (!notificationText) {
        if (o.status === 'Đang giao') {
          notificationText = '🚚 Đơn hàng đang trên đường giao đến bạn bởi Shopee Express';
        } else if (o.status === 'Đã giao' || o.status === 'Giao thành công') {
          notificationText = '✅ Đơn hàng đã được giao thành công';
        } else if (o.status === 'Đã hủy') {
          notificationText = '❌ Đơn hàng đã được hủy bỏ';
        } else {
          notificationText = '📦 Người gửi đang chuẩn bị đơn hàng tại kho tổng SPX';
        }
      }

      return `
        <div class="shopee-order-card" data-order-id="${o.id}">
          <!-- Header: Shop & Code & Status -->
          <div class="shopee-card-header">
            <div class="shopee-shop-info">
              <span class="shopee-badge-mall">Shopee Mall</span>
              <span class="shopee-shop-name"><i class="fa-solid fa-store" style="color: #ee4d2d; margin-right: 4px;"></i> TechZone Official Store</span>
              <button type="button" class="shopee-btn-chat" onclick="event.stopPropagation(); showToast('Đang kết nối trung tâm Chat Shopee với người bán TechZone...', 'info')">
                <i class="fa-regular fa-comment-dots"></i> Chat
              </button>
              <a href="products.html" class="shopee-btn-viewshop" onclick="event.stopPropagation()">
                <i class="fa-solid fa-shop"></i> Xem Shop
              </a>
              <span class="shopee-order-meta">
                Mã ĐH: <strong>#${o.id}</strong> <span style="font-size: 0.78rem; color: #94a3b8;">(${o.createdAt})</span>
              </span>
            </div>
            <div class="shopee-order-status-badge ${statusClass}">
              <i class="${statusIcon}"></i> ${statusLabel}
            </div>
          </div>

          <!-- Body: Items List (CLICK ĐỂ XEM TIẾN TRÌNH) -->
          <div class="shopee-order-body" data-order-id="${o.id}" title="Nhấp vào để xem ngay chi tiết lộ trình vận chuyển">
            ${itemsHtml}
          </div>

          <!-- Dòng tóm tắt tiến trình mới nhất ngay trên thẻ (CLICK ĐỂ XEM TIẾN TRÌNH) -->
          <div class="shopee-shipping-strip ${statusClass}" data-order-id="${o.id}" title="Nhấp để xem lộ trình chi tiết">
            <i class="fa-solid fa-truck-fast"></i>
            <div class="strip-text-box">
              <div class="strip-main-text">${notificationText}</div>
              ${latestCheckpoint ? `<div class="strip-sub-text"><i class="fa-solid fa-clock-rotate-left"></i> ${latestCheckpoint.time}: ${latestCheckpoint.text}</div>` : ''}
            </div>
            <div class="strip-view-link">
              <span>Xem tiến trình</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>

          <!-- Footer: Total & Action Buttons -->
          <div class="shopee-card-footer">
            <div class="shopee-footer-action-row">
              <div class="shopee-total-wrap">
                <i class="fa-solid fa-shield-halved" style="color: #10b981; margin-right: 4px;"></i>
                <span>Thành tiền (${totalItemsCount} sản phẩm):</span>
                <span class="shopee-total-price">${formatVND(o.total)}</span>
              </div>

              <div class="shopee-btn-group">
                <button type="button" class="btn-shopee-secondary btn-quick-timeline" data-id="${o.id}" title="Xem popup tiến trình ngay tại trang này">
                  <i class="fa-solid fa-eye"></i> Xem nhanh
                </button>
                <a href="tracking-detail.html?id=${o.id}" class="btn-shopee-primary btn-track-prominent" title="Mở trang chi tiết lộ trình vận chuyển">
                  <i class="fa-solid fa-route"></i> Xem lộ trình vận chuyển
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Bind Click-to-view events (BẤM VÀO BẤT KỲ ĐÂU TRÊN THẺ SẢN PHẨM HOẶC DẢI VẬN CHUYỂN ĐỂ XEM)
    container.querySelectorAll('.shopee-order-body, .shopee-shipping-strip').forEach(el => {
      el.addEventListener('click', (e) => {
        const orderId = el.dataset.orderId || el.closest('.shopee-order-card')?.dataset.orderId;
        if (orderId) {
          window.location.href = `tracking-detail.html?id=${encodeURIComponent(orderId)}`;
        }
      });
    });

    // Bind Quick Timeline Modal buttons
    container.querySelectorAll('.btn-quick-timeline').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const orderId = btn.dataset.id;
        openHistoryTimelineModal(orderId);
      });
    });
  }

  // Bind Shopee Tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.status || 'all';
      renderHistory();
    });
  });

  // Bind Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderHistory();
    });
  }

  // Bind Reset Demo Orders
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Khôi phục danh sách 5 đơn hàng mẫu Shopee Express (SPX-892341, SPX-102948, SPX-776219...) để kiểm thử?')) {
        Storage.resetDemoOrders();
        showToast('Đã khôi phục 5 đơn hàng mẫu chuẩn Shopee Express thành công!', 'success');
        renderHistory();
      }
    });
  }

  renderHistory();
}

// Quick Timeline Modal logic on history.html
function openHistoryTimelineModal(orderId) {
  const modalContainer = document.getElementById('history-timeline-modal-container');
  if (!modalContainer) {
    window.location.href = `tracking-detail.html?id=${encodeURIComponent(orderId)}`;
    return;
  }

  const order = Storage.findOrderById(orderId) || Storage.getOrders()[0];
  if (!order) return;

  const steps = [
    { name: 'Đơn Đã Đặt', time: order.createdAt },
    { name: 'Đã Xác Nhận', time: order.status !== 'Đã đặt' ? 'Đã đóng hộp SPX' : 'Chờ xác nhận' },
    { name: 'Đang Vận Chuyển', time: (order.status === 'Đang giao' || order.status === 'Đã giao' || order.status === 'Giao thành công') ? 'Đang giao hỏa tốc' : 'Chờ xuất kho' },
    { name: 'Giao Thành Công', time: (order.status === 'Đã giao' || order.status === 'Giao thành công') ? 'Đã ký nhận' : 'Dự kiến hôm nay' }
  ];

  let activeIdx = 0;
  if (order.status === 'Chờ xác nhận' || order.status === 'Đã xác nhận') activeIdx = 1;
  else if (order.status === 'Đang giao') activeIdx = 2;
  else if (order.status === 'Đã giao' || order.status === 'Giao thành công') activeIdx = 3;
  else if (order.status === 'Đã hủy') activeIdx = -1;

  let progressPct = 0;
  if (activeIdx === 1) progressPct = 33.33;
  if (activeIdx === 2) progressPct = 66.66;
  if (activeIdx === 3) progressPct = 100;

  const firstItem = order.items && order.items.length > 0 ? order.items[0] : null;

  modalContainer.innerHTML = `
    <div class="tz-timeline-modal-backdrop" id="timeline-modal-backdrop">
      <div class="tz-timeline-modal-card" onclick="event.stopPropagation()">
        <div class="tz-modal-header">
          <h3>
            <i class="fa-solid fa-bolt" style="color: #ee4d2d;"></i>
            Tiến Trình Đơn Hàng #${order.id}
          </h3>
          <button type="button" class="tz-modal-close-btn" id="btn-close-timeline-modal" title="Đóng popup">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div class="tz-modal-body">
          <!-- Mini Product Overview -->
          ${firstItem ? `
            <div style="display: flex; align-items: center; gap: 12px; padding: 10px; background: #f8fafc; border-radius: 8px; margin-bottom: 1.25rem; border: 1px solid #e2e8f0;">
              <img src="${firstItem.image}" alt="${firstItem.name}" style="width: 52px; height: 52px; border-radius: 6px; object-fit: contain; background: white; padding: 2px;">
              <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 700; font-size: 0.9rem; color: #1e293b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${firstItem.name}</div>
                <div style="font-size: 0.78rem; color: #64748b;">${firstItem.variant || 'Chính hãng'} | Tổng tiền: <strong style="color: #ee4d2d;">${formatVND(order.total)}</strong></div>
              </div>
            </div>
          ` : ''}

          <!-- 4-step Timeline -->
          <div class="order-timeline modal-mode" style="--progress-width: ${progressPct}%;">
            ${steps.map((st, idx) => {
              const isPast = activeIdx >= idx;
              const isCurrent = activeIdx === idx;
              return `
                <div class="timeline-step ${isPast ? 'active' : ''} ${isCurrent ? 'current' : ''}">
                  <div class="timeline-dot">
                    <i class="fa-solid ${isPast ? 'fa-check' : 'fa-circle'}"></i>
                  </div>
                  <div class="timeline-step-name">${st.name}</div>
                  <div class="timeline-step-time">${st.time}</div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Shipper info if shipping -->
          ${order.shipper && order.status !== 'Đã hủy' ? `
            <div style="margin-top: 1.5rem; padding: 12px 14px; background: #fffbf8; border: 1px solid #fed7aa; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="${order.shipper.avatar}" alt="${order.shipper.name}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #ee4d2d;">
                <div>
                  <div style="font-weight: 700; font-size: 0.88rem; color: #1e293b;">Bưu tá: ${order.shipper.name} (${order.shipper.rating})</div>
                  <div style="font-size: 0.78rem; color: #64748b;">Biển số: <strong>${order.shipper.plate}</strong> | ĐT: <strong>${order.shipper.phone}</strong></div>
                </div>
              </div>
              <a href="tel:${order.shipper.phone}" class="btn-shopee-primary" style="padding: 5px 12px; font-size: 0.78rem;">
                <i class="fa-solid fa-phone"></i> Gọi ngay
              </a>
            </div>
          ` : ''}

          <!-- Checkpoints log -->
          <div style="margin-top: 1.25rem;">
            <div style="font-size: 0.82rem; font-weight: 700; color: #475569; margin-bottom: 8px; text-transform: uppercase;">
              <i class="fa-solid fa-list-check" style="color: #ee4d2d;"></i> Nhật ký di chuyển gần nhất:
            </div>
            <div class="spx-vertical-timeline modal-vert">
              ${(order.checkpoints || []).slice(0, 3).map((cp, idx) => `
                <div class="spx-vert-step ${idx === 0 ? 'current' : ''}">
                  <div class="spx-vert-dot"></div>
                  <div class="spx-vert-content">
                    <div class="spx-vert-time">${cp.time}</div>
                    <div class="spx-vert-desc">${cp.text}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="tz-modal-footer">
          <button type="button" class="btn-shopee-secondary" id="btn-modal-dismiss" style="padding: 7px 16px;">Đóng</button>
          <a href="tracking-detail.html?id=${order.id}" class="btn-shopee-primary" style="padding: 7px 18px;">
            <i class="fa-solid fa-up-right-from-square"></i> Mở toàn trang tracking chi tiết
          </a>
        </div>
      </div>
    </div>
  `;

  const backdrop = document.getElementById('timeline-modal-backdrop');
  const closeBtn = document.getElementById('btn-close-timeline-modal');
  const dismissBtn = document.getElementById('btn-modal-dismiss');

  function closeModal() {
    if (modalContainer) modalContainer.innerHTML = '';
  }

  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  });
}

// --- 10. LOCATION SELECTOR (CUSTOM DROPDOWN - NO PROMPT) ---
function initLocationSelector() {
  const CITIES = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng', 'Đồng Nai'];
  const STORAGE_KEY = 'selectedLocation';

  // Read saved location or default to 'Hà Nội'
  let savedCity = localStorage.getItem(STORAGE_KEY);
  if (!savedCity || !CITIES.includes(savedCity)) {
    savedCity = 'Hà Nội';
    localStorage.setItem(STORAGE_KEY, savedCity);
  }

  function updateLocationDisplay(city) {
    document.querySelectorAll('.tz-location-name').forEach(el => {
      el.textContent = city;
    });

    document.querySelectorAll('.tz-location-item').forEach(item => {
      const itemCity = item.getAttribute('data-city') || item.dataset.city || item.textContent.trim();
      if (itemCity === city || itemCity.includes(city) || city.includes(itemCity)) {
        item.classList.add('active');
        item.setAttribute('aria-selected', 'true');
      } else {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      }
    });
  }

  // Khởi tạo hiển thị lần đầu theo localStorage
  updateLocationDisplay(savedCity);

  function closeAllLocationDropdowns() {
    document.querySelectorAll('.tz-location-dropdown, .location-dropdown, .location-menu').forEach(dd => {
      dd.classList.remove('show');
    });
    document.querySelectorAll('.tz-location-badge').forEach(btn => {
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
    const backdrop = document.getElementById('tz-location-backdrop');
    if (backdrop) {
      backdrop.classList.remove('active');
      backdrop.style.display = 'none';
    }
  }

  function showMobileBackdrop() {
    // Chỉ kích hoạt backdrop trên màn hình nhỏ (<= 540px) dạng bottom sheet
    if (window.innerWidth <= 540) {
      let backdrop = document.getElementById('tz-location-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'tz-location-backdrop';
        backdrop.className = 'tz-location-backdrop';
        document.body.appendChild(backdrop);
        backdrop.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          closeAllLocationDropdowns();
        });
      }
      backdrop.style.display = 'block';
      backdrop.classList.add('active');
    }
  }

  // Event Delegation gắn trực tiếp vào document.addEventListener('click', ...)
  document.addEventListener('click', function(e) {
    // 1. CLICK CHỌN ITEM TỈNH/THÀNH:
    const item = e.target.closest('.tz-location-item');
    if (item) {
      e.preventDefault();
      e.stopPropagation();

      // + Lấy đúng tên tỉnh/thành vừa chọn
      let city = item.getAttribute('data-city') || item.dataset.city;
      if (!city) {
        const text = (item.innerText || item.textContent || '').trim();
        for (const c of CITIES) {
          if (text.includes(c)) {
            city = c;
            break;
          }
        }
      }

      if (city) {
        // + Lưu vào localStorage
        localStorage.setItem(STORAGE_KEY, city);
        savedCity = city;

        // + Đổi text hiển thị của nút vị trí trên Topbar
        updateLocationDisplay(city);

        // + Tự động đóng menu lại ngay lập tức
        closeAllLocationDropdowns();

        // Hiển thị thông báo Toast nếu có
        if (typeof showToast === 'function') {
          showToast(`Đã chuyển khu vực mua sắm sang: <strong>${city}</strong>`, 'success');
        }
      }
      return;
    }

    // 2. CLICK NÚT MỞ/ĐÓNG MENU VỊ TRÍ TRÊN TOPBAR:
    const badgeBtn = e.target.closest('.tz-location-badge, #btn-select-location');
    if (badgeBtn) {
      e.preventDefault();
      e.stopPropagation();

      const wrapper = badgeBtn.closest('.tz-location-wrapper') || badgeBtn.parentElement;
      const dropdown = wrapper ? wrapper.querySelector('.tz-location-dropdown, .location-dropdown, .location-menu') : document.querySelector('.tz-location-dropdown');
      if (!dropdown) return;

      const isOpen = dropdown.classList.contains('show');
      closeAllLocationDropdowns();

      if (!isOpen) {
        dropdown.classList.add('show');
        badgeBtn.classList.add('open');
        badgeBtn.setAttribute('aria-expanded', 'true');
        showMobileBackdrop();
      }
      return;
    }

    // 3. CLICK RA NGOÀI KHUNG THÌ TỰ ĐỘNG ĐÓNG MENU
    if (!e.target.closest('.tz-location-wrapper') && !e.target.closest('.tz-location-dropdown') && !e.target.closest('.location-menu') && !e.target.closest('.location-dropdown')) {
      closeAllLocationDropdowns();
    }
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllLocationDropdowns();
    }
  });
}

// --- 11. CATEGORY DROPDOWN (MEGA MENU) LOGIC ---
function initCategoryDropdown() {
  const toggleBtn = document.getElementById('header-category-toggle');
  const dropdown = document.getElementById('header-category-dropdown');

  if (!toggleBtn || !dropdown) return;

  function closeMenu() {
    dropdown.classList.remove('show');
    toggleBtn.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    dropdown.classList.add('show');
    toggleBtn.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropdown.classList.contains('show')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Click vào item trong Menu danh mục
  const categoryItems = dropdown.querySelectorAll('.tz-category-menu-item');
  categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const categoryKey = item.dataset.category;
      if (!categoryKey) return;

      const isProductsPage = window.location.pathname.toLowerCase().includes('products') || !!document.getElementById('catalog-products-grid');

      if (isProductsPage) {
        // Nếu người dùng đang ở trang products.html và click tiếp vào Menu Danh mục: lọc động ngay lập tức mà không cần reload trang
        e.preventDefault();
        closeMenu();
        if (typeof window.applyCategoryFilter === 'function') {
          window.applyCategoryFilter(categoryKey, true);
        }
      } else {
        // Khi ở trang chủ (index.html): Click vào danh mục sẽ chuyển hướng sang products.html?category=[tên_category] và đóng menu
        closeMenu();
        // Thẻ <a> mặc định điều hướng tới products.html?category=...
      }
    });
  });

  // Footer "Xem toàn bộ sản phẩm" trong dropdown
  const footerLink = dropdown.querySelector('.tz-category-dropdown-footer a');
  if (footerLink) {
    footerLink.addEventListener('click', (e) => {
      const isProductsPage = window.location.pathname.toLowerCase().includes('products') || !!document.getElementById('catalog-products-grid');
      if (isProductsPage) {
        e.preventDefault();
        closeMenu();
        if (typeof window.applyCategoryFilter === 'function') {
          window.applyCategoryFilter('all', true);
        }
      } else {
        closeMenu();
      }
    });
  }

  // Click ra ngoài vùng menu sẽ tự động đóng lại (Click outside to close)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.tz-category-wrapper')) {
      closeMenu();
    }
  });

  // Phím ESC để đóng menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}

// --- 12. STICKY HEADER SCROLL OBSERVER ---
function initStickyHeader() {
  const header = document.querySelector('.tz-header');
  if (!header) return;

  let ticking = false;
  const updateSticky = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 10) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateSticky);
      ticking = true;
    }
  }, { passive: true });

  updateSticky();
}

// --- 13. USER AUTHENTICATION & ACCOUNT LOGIC ---
const Auth = {
  getUser() {
    try {
      const user = localStorage.getItem('techzone_current_user');
      return user ? JSON.parse(user) : null;
    } catch (e) {
      return null;
    }
  },
  setUser(userData) {
    localStorage.setItem('techzone_current_user', JSON.stringify(userData));
    // Also save simple name if string provided
    if (typeof userData === 'string') {
      localStorage.setItem('userName', userData);
    } else if (userData && userData.name) {
      localStorage.setItem('userName', userData.name);
    }
  },
  logout() {
    localStorage.removeItem('techzone_current_user');
    localStorage.removeItem('userName');
    window.location.reload();
  }
};

function initUserAccount() {
  const userBtn = document.getElementById('tz-user-btn');
  const userDropdown = document.getElementById('tz-user-dropdown');
  const nameDisplay = document.getElementById('tz-user-name-display');
  const greetingDisplay = document.getElementById('tz-dropdown-greeting');
  const logoutBtn = document.getElementById('tz-btn-logout');
  const profileBtn = document.getElementById('tz-btn-profile-info');

  const currentUser = Auth.getUser() || (localStorage.getItem('userName') ? { name: localStorage.getItem('userName') } : null);

  if (currentUser && currentUser.name) {
    if (nameDisplay) {
      nameDisplay.textContent = currentUser.name;
      nameDisplay.style.color = '#38bdf8';
      nameDisplay.style.fontWeight = '700';
    }
    if (greetingDisplay) {
      greetingDisplay.textContent = `Xin chào, ${currentUser.name}!`;
    }

    if (userBtn) {
      userBtn.setAttribute('href', '#');
      userBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (userDropdown) {
          userDropdown.classList.toggle('show');
        }
      });
    }

    // Click outside closes dropdown
    document.addEventListener('click', (e) => {
      if (userDropdown && !e.target.closest('#tz-user-wrapper')) {
        userDropdown.classList.remove('show');
      }
    });

    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Bạn có chắc chắn muốn đăng xuất tài khoản?')) {
          Auth.logout();
        }
      });
    }

    if (profileBtn) {
      profileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`THÔNG TIN TÀI KHOẢN TECHZONE\n\n• Họ tên: ${currentUser.name}\n• Email/SĐT: ${currentUser.account || 'vy@techzone.vn'}\n• Hạng thành viên: TechZone Smember VIP`);
      });
    }
  } else {
    if (nameDisplay) {
      nameDisplay.textContent = 'Đăng nhập';
    }
    if (userBtn) {
      userBtn.setAttribute('href', 'login.html');
    }
  }
}

// --- 14. LOGIN & REGISTER PAGES CONTROLLER ---
function initLoginPage() {
  const form = document.getElementById('tz-login-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const accountInput = document.getElementById('login-account');
    const passInput = document.getElementById('login-password');

    const account = accountInput ? accountInput.value.trim() : '';
    const password = passInput ? passInput.value.trim() : '';

    if (!account || !password) {
      showToast('Vui lòng điền đầy đủ Email/SĐT và Mật khẩu!', 'warning', 'Chưa đủ thông tin');
      return;
    }

    // Default username extract (e.g. from email or name)
    let displayName = 'Vy';
    if (account.includes('@')) {
      const prefix = account.split('@')[0];
      displayName = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    } else if (account.length > 0) {
      displayName = account;
    }

    // Check if user previously registered
    try {
      const registeredUsers = JSON.parse(localStorage.getItem('techzone_registered_users') || '[]');
      const found = registeredUsers.find(u => u.account === account && u.password === password);
      if (found && found.name) {
        displayName = found.name;
      }
    } catch (err) {}

    // Save to localStorage
    Auth.setUser({
      name: displayName,
      account: account,
      loginAt: new Date().toISOString()
    });

    // Lưu thông báo flash để hiển thị toast ở góc dưới bên phải trang chủ index.html
    sessionStorage.setItem('techzone_toast_flash', JSON.stringify({
      title: 'Thành công!',
      message: `Đăng nhập thành công! Chào mừng <strong>${displayName}</strong> quay trở lại TechZone.`,
      type: 'success'
    }));

    window.location.href = 'index.html';
  });

  // Social Login Buttons Handler
  initSocialAuthHandlers('Đăng nhập');
}

function initRegisterPage() {
  const form = document.getElementById('tz-register-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('reg-fullname');
    const accountInput = document.getElementById('reg-account');
    const passInput = document.getElementById('reg-password');
    const confirmInput = document.getElementById('reg-confirm-password');

    const name = nameInput ? nameInput.value.trim() : '';
    const account = accountInput ? accountInput.value.trim() : '';
    const password = passInput ? passInput.value.trim() : '';
    const confirmPass = confirmInput ? confirmInput.value.trim() : '';

    if (!name || !account || !password || !confirmPass) {
      showToast('Vui lòng điền đầy đủ tất cả các trường thông tin!', 'warning', 'Chưa đủ thông tin');
      return;
    }

    if (password !== confirmPass) {
      showToast('Mật khẩu xác nhận không khớp! Vui lòng kiểm tra lại.', 'error', 'Mật khẩu không khớp');
      return;
    }

    if (password.length < 6) {
      showToast('Mật khẩu phải có độ dài tối thiểu 6 ký tự!', 'warning', 'Mật khẩu quá ngắn');
      return;
    }

    // Save registered user
    try {
      const registeredUsers = JSON.parse(localStorage.getItem('techzone_registered_users') || '[]');
      registeredUsers.push({
        name,
        account,
        password,
        registeredAt: new Date().toISOString()
      });
      localStorage.setItem('techzone_registered_users', JSON.stringify(registeredUsers));
    } catch (err) {}

    // Automatically log user in
    Auth.setUser({
      name: name,
      account: account,
      loginAt: new Date().toISOString()
    });

    // Lưu thông báo flash để hiển thị toast ở góc dưới bên phải trang chủ index.html
    sessionStorage.setItem('techzone_toast_flash', JSON.stringify({
      title: 'Thành công!',
      message: `Đăng ký tài khoản thành công! Xin chào mừng <strong>${name}</strong> đến với TechZone.`,
      type: 'success'
    }));

    window.location.href = 'index.html';
  });

  // Social Register Buttons Handler
  initSocialAuthHandlers('Đăng ký');
}

// Handler chung cho 4 nút Mạng xã hội: Google, Facebook, Zalo, Apple
function initSocialAuthHandlers(actionType) {
  const socialButtons = document.querySelectorAll('.tz-btn-social-item, .tz-btn-social');
  if (!socialButtons.length) return;

  const oauthEndpoints = {
    Google: 'https://accounts.google.com/signin/v2/identifier',
    Facebook: 'https://www.facebook.com/login.php',
    Zalo: 'https://id.zalo.me/account',
    Apple: 'https://appleid.apple.com/auth/authorize'
  };

  socialButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Nếu nút đang trong tiến trình mở xác thực thì bỏ qua
      if (btn.classList.contains('is-authenticating')) return;

      const provider = btn.getAttribute('data-provider') || 'Mạng xã hội';

      let socialUserName = 'Nguyễn Văn A';
      if (provider === 'Google') socialUserName = 'Nguyễn Văn A (Google)';
      else if (provider === 'Facebook') socialUserName = 'Nguyễn Văn A (Facebook)';
      else if (provider === 'Zalo') socialUserName = 'Vy Zalo';
      else if (provider === 'Apple') socialUserName = 'Vy Apple ID';

      // 1. Mở cửa sổ popup đến trang ủy quyền chính thức của nền tảng tương ứng
      const authUrl = oauthEndpoints[provider] || 'https://accounts.google.com';
      const popupWidth = 520;
      const popupHeight = 640;
      const left = Math.max(0, (window.screen.width - popupWidth) / 2);
      const top = Math.max(0, (window.screen.height - popupHeight) / 2);

      let popup = null;
      try {
        popup = window.open(
          authUrl,
          `oauth_${provider}_${Date.now()}`,
          `width=${popupWidth},height=${popupHeight},top=${top},left=${left},scrollbars=yes,resizable=yes`
        );
      } catch (err) {
        popup = null;
      }

      // Kiểm tra nếu popup bị chặn
      if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        showToast('Trình duyệt đã chặn cửa sổ Popup. Vui lòng cho phép popup để tiếp tục đăng nhập!', 'warning', 'Chưa mở được cửa sổ');
        return;
      }

      // QUAN TRỌNG: KHÔNG LƯU localStorage, KHÔNG KÍCH HOẠT THÔNG BÁO VÀ KHÔNG CHUYỂN TRANG KHI POPUP VỪA MỞ RA
      const textSpan = btn.querySelector('.social-text');
      const originalText = textSpan ? textSpan.innerHTML : '';
      btn.classList.add('is-authenticating');
      btn.style.opacity = '0.9';
      if (textSpan) {
        textSpan.innerHTML = `<i class="fa-solid fa-spinner fa-spin" style="margin-right: 6px;"></i> Đang chờ xác thực ${provider}...`;
      }

      // Tạm khóa tương tác các nút MXH khác
      socialButtons.forEach(otherBtn => {
        if (otherBtn !== btn) otherBtn.style.pointerEvents = 'none';
      });

      const openTime = Date.now();
      let isCompleted = false;

      // Hàm reset giao diện các nút
      const resetButtons = () => {
        btn.classList.remove('is-authenticating');
        btn.style.opacity = '';
        if (textSpan) textSpan.innerHTML = originalText;
        socialButtons.forEach(otherBtn => {
          otherBtn.style.pointerEvents = '';
        });
      };

      // Hàm hoàn tất đăng nhập thực sự sau khi xác thực xong
      const completeLogin = () => {
        if (isCompleted) return;
        isCompleted = true;
        clearInterval(pollTimer);
        window.removeEventListener('message', onPostMessage);

        // 1. Lưu thông tin người dùng vào localStorage
        Auth.setUser({
          name: socialUserName,
          account: `${provider.toLowerCase()}_user@techzone.vn`,
          provider: provider,
          loginAt: new Date().toISOString()
        });

        // 2. Lưu Toast Flash vào sessionStorage để index.html hiển thị 1 lần duy nhất sau khi chuyển trang
        sessionStorage.setItem('techzone_toast_flash', JSON.stringify({
          title: 'Thành công!',
          message: `${actionType} thành công với ${provider}! Chào mừng bạn quay trở lại TechZone.`,
          type: 'success'
        }));

        // 3. Chuyển hướng về trang chủ index.html
        window.location.href = 'index.html';
      };

      // Lắng nghe postMessage nếu cửa sổ popup gửi tín hiệu
      const onPostMessage = (event) => {
        if (event.data && (event.data.type === 'TECHZONE_AUTH_SUCCESS' || event.data.provider === provider)) {
          try {
            if (popup && !popup.closed) popup.close();
          } catch (e) {}
          completeLogin();
        }
      };
      window.addEventListener('message', onPostMessage);

      // Option A: Theo dõi trạng thái đóng của popup (popup.closed)
      const pollTimer = setInterval(() => {
        try {
          if (!popup || popup.closed) {
            clearInterval(pollTimer);
            window.removeEventListener('message', onPostMessage);

            const elapsed = Date.now() - openTime;

            // Nếu popup bị đóng quá nhanh (< 1000ms), coi như người dùng đã hủy
            if (elapsed < 1000) {
              resetButtons();
              showToast(`Bạn đã đóng cửa sổ xác thực ${provider}. Quá trình ${actionType.toLowerCase()} đã được hủy.`, 'info', 'Đã hủy');
              return;
            }

            // Popup đóng lại sau khi đã thao tác xong -> hoàn tất đăng nhập
            completeLogin();
          }
        } catch (err) {
          // Bỏ qua lỗi cross-origin
        }
      }, 400);
    });
  });
}


// --- 15. GLOBAL DISPATCHER (DOM CONTENT LOADED) ---
document.addEventListener('DOMContentLoaded', () => {
  Storage.updateCartBadge();
  initStickyHeader();
  initUserAccount();
  initLocationSelector();
  initCategoryDropdown();

  // Tự động kích hoạt hiển thị Toast chào mừng nếu vừa chuyển hướng từ Đăng nhập / Đăng ký
  try {
    const flashRaw = sessionStorage.getItem('techzone_toast_flash');
    if (flashRaw && !window._techzone_flash_shown) {
      window._techzone_flash_shown = true;
      sessionStorage.removeItem('techzone_toast_flash');
      const flash = JSON.parse(flashRaw);
      setTimeout(() => {
        showToast(flash.message, flash.type || 'success', flash.title || 'Thành công!');
      }, 350);
    }
  } catch (err) {}

  // Header Global Search input Enter key
  const globalSearchInput = document.getElementById('header-global-search');
  if (globalSearchInput) {
    globalSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = globalSearchInput.value.trim();
        if (q) window.location.href = `products.html?q=${encodeURIComponent(q)}`;
      }
    });
  }

  // Dual-check: Detect current page via pathname or specific DOM markers
  const pathname = window.location.pathname.toLowerCase();

  if (pathname.includes('login') || document.getElementById('tz-login-form')) {
    initLoginPage();
  } else if (pathname.includes('register') || document.getElementById('tz-register-form')) {
    initRegisterPage();
  } else if (pathname.includes('products') || document.getElementById('catalog-products-grid')) {
    initProductsPage();
  } else if (pathname.includes('checkout') || document.getElementById('tz-checkout-form')) {
    initCheckoutPage();
  } else if (pathname.includes('tracking') || document.querySelector('.order-timeline')) {
    initTrackingDetailPage();
  } else if (pathname.includes('history') || document.getElementById('history-cards-container')) {
    initHistoryPage();
  } else {
    initHomePage();
  }
});
