#!/usr/bin/env bash
# Cấu hình máy local để `git push` đẩy lên cả 2 repo GitHub.
# Chạy tại thư mục gốc dự án: bash deploy/setup-remotes.sh
set -euo pipefail

PRIMARY="https://github.com/danava-org/LandingPage_Wellosophy.git"
MIRROR="https://github.com/HungNguyen3205/LandingPage_Wellosophy.git"

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$PRIMARY"
else
  git remote add origin "$PRIMARY"
fi

# Xóa các push URL cũ rồi thêm lại cả 2
git config --unset-all remote.origin.pushurl 2>/dev/null || true
git remote set-url --add --push origin "$PRIMARY"
git remote set-url --add --push origin "$MIRROR"

git remote -v
echo "==> Xong. 'git push' sẽ đẩy lên cả 2 repo."
