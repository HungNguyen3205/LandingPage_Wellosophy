# 🚀 HƯỚNG DẪN DEPLOY & QUẢN LÝ CODE TRÊN TERMINAL CPANEL

Tài liệu này lưu lại toàn bộ các câu lệnh Terminal trên cPanel để triển khai trang web **`wellosophy.danava.com.vn`**.

---

## 📌 PHẦN 1: TRIỂN KHAI LẦN ĐẦU TIÊN (FIRST DEPLOY)

Mở **Terminal** trong cPanel (kéo xuống mục **ADVANCED** -> chọn **Terminal**) và chạy lần lượt 3 lệnh sau:

### Lệnh 1: Di chuyển vào thư mục của tên miền
```bash
cd ~/wellosophy.danava.com.vn
```
> *(Dấu `~` là viết tắt của thư mục gốc tài khoản hosting của bạn, ví dụ `/home/username`)*

### Lệnh 2: Làm sạch các file rác/mặc định (nếu có)
```bash
rm -rf *
```
> *(Lệnh này xóa sạch các file tạm ban đầu để thư mục trống sẵn sàng kéo code về)*

### Lệnh 3: Kéo code từ GitHub về (Lưu ý dấu chấm ` .` ở cuối)
```bash
git clone https://github.com/HungNguyen3205/LandingPage_Wellosophy.git .
```
> ⚠️ **CỰC KỲ QUAN TRỌNG:** Dấu cách và dấu chấm ` .` ở cuối câu lệnh bắt buộc phải có để git xả thẳng file `index.html` và thư mục `assets` vào ngay thư mục web, không bị tạo thêm thư mục con lồng vào.

---

## 🔄 PHẦN 2: CẬP NHẬT CODE SAU NÀY (UPDATE CODE)

Mỗi khi bạn sửa code trên máy tính và muốn website cập nhật nội dung mới:

### Bước 2.1: Đẩy từ máy tính lên GitHub
Mở Terminal / PowerShell trên máy tính:
```bash
git add .
git commit -m "Cập nhật nội dung mới"
git push
```

### Bước 2.2: Kéo code mới về trên cPanel Terminal
Mở Terminal cPanel và chạy:
```bash
cd ~/wellosophy.danava.com.vn
git pull origin main
```
Website sẽ được cập nhật ngay lập tức!

---

## 🛠️ PHẦN 3: CÁC LỆNH XỬ LÝ SỰ CỐ THƯỜNG GẶP (TROUBLESHOOTING)

### 1. Kiểm tra bạn đang đứng ở thư mục nào
```bash
pwd
```

### 2. Xem danh sách các file trong thư mục
```bash
ls -la
```
*(Nếu thấy hiện file `index.html` và thư mục `assets/` là đã nằm đúng vị trí)*

### 3. Lỗi không `git pull` được do bị sửa file trên cPanel:
Nếu lỡ chỉnh sửa file gì đó trực tiếp trên cPanel khiến lệnh `git pull` báo lỗi xung đột (conflict), hãy chạy lệnh này để ép cPanel đồng bộ 100% giống hệt trên GitHub:
```bash
cd ~/wellosophy.danava.com.vn
git fetch --all
git reset --hard origin/main
```

---

## 🔒 PHẦN 4: BẬT HTTPS (SSL) TRÊN CPANEL
1. Trong cPanel, vào mục **Domains**.
2. Tìm dòng `wellosophy.danava.com.vn`.
3. Gạt nút tại cột **Force HTTPS Redirect** sang **ON**.
4. Truy cập kiểm tra: `https://wellosophy.danava.com.vn`

