#!/usr/bin/env bash
# Chạy trên cPanel Terminal để cập nhật website:
#   bash ~/wellosophy.danava.com.vn/deploy/deploy.sh
set -euo pipefail

DEPLOY_DIR="${DEPLOY_DIR:-$HOME/wellosophy.danava.com.vn}"
DEPLOY_BRANCH="${DEPLOY_BRANCH:-main}"

cd "$DEPLOY_DIR"
echo "==> Thư mục: $(pwd)"
echo "==> Remote:  $(git remote get-url origin)"

git fetch origin "$DEPLOY_BRANCH"

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "!! Có file bị sửa trực tiếp trên server:"
  git status --short
  echo "!! Chạy 'git reset --hard origin/$DEPLOY_BRANCH' nếu muốn ghi đè theo GitHub."
  exit 1
fi

git pull --ff-only origin "$DEPLOY_BRANCH"
echo "==> Đã deploy commit: $(git log -1 --oneline)"
