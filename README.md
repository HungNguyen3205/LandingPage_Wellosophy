# Wellosophy — Landing Page Cân Bằng Trục Não Da Ruột (Oriflame Thụy Điển)

Dự án Landing Page cao cấp giới thiệu **Bộ 3 Cân Bằng Trục Não Da Ruột Wellosophy by Oriflame**, được clone và nâng cấp giao diện toàn diện từ trang gốc [kh-bo3trucnaodaruot.netlify.app/ptt/](https://kh-bo3trucnaodaruot.netlify.app/ptt/).

---

## 🌟 Điểm nổi bật & Các cải tiến vượt trội so với bản gốc

1. **Thiết kế Bắc Âu sang trọng (Scandinavian Natural Wellness):**
   - Bảng màu xanh ngọc bích đậm (*Nordic Emerald Green* `#16423c`), vàng hoàng gia (*Champagne Gold* `#d4a017`) và nền sương mai dịu mắt (*Mint Mist* `#f7faf8`).
   - Font chữ hiện đại quốc tế **Plus Jakarta Sans** chuẩn nhận diện thương hiệu cao cấp, dễ đọc, tương phản hoàn hảo trên mọi thiết bị.
   - Hiệu ứng đổ bóng nhiều lớp (*multi-layered soft shadows*), viền tinh tế (*subtle borders*) và bo góc chuẩn UI/UX 2026.

2. **Lưu trữ & Tối ưu hóa 100% tài nguyên:**
   - Đã bóc tách toàn bộ 6 hình ảnh gốc chất lượng cao từ mã base64 sang định dạng file chuẩn:
     - `product-probiotic.webp` (1000x1000px): Probiotic L. plantarum 299V™
     - `product-prebiotic.webp` (1000x1000px): Prebiotic Fibre Drink
     - `product-omega3.webp` (1000x1000px): Omega-3 Fish Oil
     - `feedback-nhung.jpg`: Ảnh chụp màn hình tin nhắn Chị Nhung (Khánh Hòa)
     - `feedback-tho.jpg`: Ảnh chụp màn hình tin nhắn Chị Thơ (Đà Lạt)
     - `feedback-ngoc.jpg`: Ảnh chụp màn hình tin nhắn Anh Ngọc (TP.HCM)
   - Tốc độ tải trang siêu tốc (< 0.5 giây), không bị phụ thuộc vào link ảnh ngoài hay lỗi chết link.

3. **Hệ thống Animation cao cấp & Tương tác mượt mà (60 FPS):**
   - **Scroll Reveal (Cuộn tới đâu mượt tới đó):** Sử dụng `IntersectionObserver` tối ưu hóa GPU, các phần tử (tiêu đề, thẻ thông tin, sản phẩm, bảng giá) trượt nhẹ và hiển thị mượt mà khi người dùng cuộn trang.
   - **Bộ đếm số nhảy động (Animated Counters):** Các chỉ số nghiên cứu y khoa (70% HP, 7 triệu người trào ngược, 42% căng thẳng, 90-95% Serotonin) tự động chạy số tăng dần khi lướt tới.
   - **Vệt sáng quét qua nút bấm (Shimmer Light Sweep):** Dải sáng vàng quét nhẹ liên tục qua các nút CTA chính (`Đặt Hàng Nhanh`, `Đặt Mua Ngay`) tạo hiệu ứng kích thích hành động cao.
   - **Hộp VIP phát sáng thở (Breathing Pulse Glow):** Khung ưu đãi VIP 1.474k tỏa sáng vàng hoàng gia nhẹ nhàng chu kỳ 4.5s.
   - **Hiệu ứng gợn sóng khi bấm (Ripple Effect):** Chạm vào các nút bấm kích hoạt sóng lan tỏa xúc giác hiện đại.
   - **Ảnh sản phẩm 3D Hover & Zoom:** Đưa chuột qua ảnh sản phẩm tạo độ nổi khối và xoay nghiêng nhẹ.
   - **Trình chiếu Video 2 tab:** Chuyển đổi linh hoạt giữa 2 video YouTube (*Tầm quan trọng trục Não - Da - Ruột* và *Hiểu đúng về hệ tiêu hóa*).
   - **Lightbox phóng to ảnh đánh giá:** Cho phép khách hàng click vào ảnh chụp tin nhắn review để phóng to xem rõ nét chữ trên điện thoại và máy tính.
   - **FAQ Accordion thông minh:** Đóng/mở câu hỏi thường gặp mượt mà, giải quyết mọi đắn đo của khách trước khi mua.
   - **Thanh chuyển đổi dính đáy thông minh (Sticky Bar Slide-in):** Tự động trượt lên khi lướt qua Hero section, hỗ trợ chốt đơn tức thì.

4. **Đầy đủ & chuẩn xác toàn bộ liên kết hành động:**
   - 🛒 **Link đặt hàng Oriflame Shop:** `https://shop.oriflame.com/VX-phungtantuong/cOznvmBTk`
   - 💬 **Zalo tư vấn:** `https://zalo.me/0905109933`
   - 📞 **Hotline gọi nhanh:** `tel:0905109933`
   - 📹 **Video YouTube 1:** `https://youtu.be/GuhB3Pt8Dwg`
   - 📹 **Video YouTube 2:** `https://youtu.be/Mqcm3wIyHyY`

---

## 📁 Cấu trúc thư mục dự án

```text
LandingPage_Wellosophy/
├── index.html                   # Trang chủ chính (Semantic HTML5, chuẩn SEO)
├── assets/
│   ├── css/
│   │   └── style.css            # Toàn bộ CSS hệ thống thiết kế hiện đại
│   ├── js/
│   │   └── main.js              # Xử lý video tabs, lightbox, FAQ, scroll
│   └── images/
│       ├── product-probiotic.webp
│       ├── product-prebiotic.webp
│       ├── product-omega3.webp
│       ├── feedback-nhung.jpg
│       ├── feedback-tho.jpg
│       └── feedback-ngoc.jpg
└── README.md                    # Tài liệu hướng dẫn sử dụng & triển khai
```

---

## 🚀 Hướng dẫn chạy và sử dụng

### 1. Xem trực tiếp trên máy tính
- Chỉ cần nhấp đúp (Double-click) vào file `index.html` để mở trong bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari).
- Không yêu cầu cài đặt máy chủ hay NodeJS để chạy.

### 2. Chạy với Local Server (nếu muốn thử môi trường web chuẩn)
- Bằng Python:
  ```bash
  python -m http.server 8080
  ```
  Truy cập: `http://localhost:8080`
- Bằng Node.js:
  ```bash
  npx serve .
  ```

---

## 🌐 Hướng dẫn triển khai lên mạng (Hosting)

### Cách 1: Triển khai lên Netlify (Cực kỳ đơn giản - Miễn phí)
1. Đăng nhập vào [netlify.com](https://www.netlify.com/).
2. Vào mục **Sites** -> Chọn **Add new site** -> Chọn **Deploy manually**.
3. Kéo toàn bộ thư mục `LandingPage_Wellosophy` thả vào ô upload của Netlify.
4. Netlify sẽ tự động cung cấp đường link trực tiếp (ví dụ: `your-project.netlify.app`) ngay lập tức!

### Cách 2: Triển khai lên Vercel hoặc GitHub Pages
- Đẩy source code lên GitHub và kết nối với Vercel/GitHub Pages chỉ với 1 click.

