# 🖥️ THÔNG TIN SERVER & HƯỚNG DẪN SETUP CHO THÀNH VIÊN MỚI

Tài liệu này giúp **bất kỳ ai** trong team có thể clone dự án, chỉnh sửa và deploy lên server mà không cần hỏi lại.

> 🔐 **Không lưu mật khẩu, token, thông tin đăng nhập cPanel trong repo này.** Xin quyền truy cập từ quản trị viên dự án.

---

## 1. Thông tin tổng quan

| Hạng mục | Giá trị |
| :--- | :--- |
| Website | https://wellosophy.danava.com.vn |
| Loại hosting | cPanel (Shared Hosting) |
| Thư mục web trên server | `~/wellosophy.danava.com.vn` |
| Nhánh deploy | `main` |
| Loại dự án | Static site (HTML/CSS/JS) — không cần build, không cần Node/PHP |
| Repo chính (tổ chức) | https://github.com/danava-org/LandingPage_Wellosophy.git |
| Repo phụ (cá nhân) | https://github.com/HungNguyen3205/LandingPage_Wellosophy.git |

Cấu hình máy chủ dạng file có trong [deploy/server.config.example](deploy/server.config.example).

---

## 2. Setup trên máy tính (lần đầu)

```bash
# Clone từ repo tổ chức
git clone https://github.com/danava-org/LandingPage_Wellosophy.git
cd LandingPage_Wellosophy

# (Tùy chọn - chỉ người có quyền cả 2 repo) cấu hình push 1 lần lên cả 2 git
git remote set-url --add --push origin https://github.com/danava-org/LandingPage_Wellosophy.git
git remote set-url --add --push origin https://github.com/HungNguyen3205/LandingPage_Wellosophy.git
git remote -v
```

Hoặc chạy script có sẵn (Git Bash / macOS / Linux):

```bash
bash deploy/setup-remotes.sh
```

Sau khi cấu hình, chỉ cần `git push` là code được đẩy lên **cả 2 repo**.

> Nếu bạn chỉ có quyền ghi vào repo `danava-org`, bỏ qua bước trên và dùng `git push` bình thường.

Xem trước trang web: mở trực tiếp `index.html` bằng trình duyệt (hoặc dùng extension Live Server trong VS Code).

---

## 3. Truy cập server cPanel

1. Đăng nhập cPanel (xin URL + tài khoản từ quản trị viên).
2. Kéo xuống mục **ADVANCED** → chọn **Terminal**.
3. Di chuyển vào thư mục web:
   ```bash
   cd ~/wellosophy.danava.com.vn
   ```

### Deploy lần đầu trên server (thư mục trống)
```bash
cd ~/wellosophy.danava.com.vn
rm -rf ./* ./.[!.]*          # ⚠️ Xóa sạch thư mục — chỉ làm khi deploy lần đầu
git clone https://github.com/danava-org/LandingPage_Wellosophy.git .
```

### Chuyển server đang chạy sang repo tổ chức (nếu server đang trỏ repo cá nhân)
```bash
cd ~/wellosophy.danava.com.vn
git remote -v
git remote set-url origin https://github.com/danava-org/LandingPage_Wellosophy.git
git pull origin main
```

> Nếu repo là **private**, cPanel cần xác thực: dùng Personal Access Token
> (`https://<token>@github.com/danava-org/LandingPage_Wellosophy.git`) hoặc
> thêm SSH Deploy Key của server vào GitHub repo (Settings → Deploy keys).
> **Không commit token vào repo.**

---

## 4. Quy trình cập nhật website

**Trên máy tính:**
```bash
git add .
git commit -m "Mô tả thay đổi"
git push
```

**Trên cPanel Terminal:**
```bash
bash ~/wellosophy.danava.com.vn/deploy/deploy.sh
```
Hoặc thủ công:
```bash
cd ~/wellosophy.danava.com.vn
git pull origin main
```

---

## 5. Xử lý sự cố

| Vấn đề | Cách xử lý |
| :--- | :--- |
| `git pull` báo conflict do sửa file trực tiếp trên cPanel | `git fetch --all && git reset --hard origin/main` |
| Web không cập nhật | Xóa cache trình duyệt (Ctrl+F5); kiểm tra `git log -1` trên server |
| Lỗi `Authentication failed` khi pull | Repo private → cấu hình token / deploy key (xem mục 3) |
| Không có HTTPS | cPanel → **Domains** → bật **Force HTTPS Redirect** |

Chi tiết thêm: [DEPLOY_CPANEL_GUIDE.md](DEPLOY_CPANEL_GUIDE.md).
