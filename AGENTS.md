# Hướng dẫn làm việc trong repo

## Bắt đầu

- Đọc [PROJECT_MEMORY.md](PROJECT_MEMORY.md) để nắm bối cảnh, quyết định đã chốt và các điểm dễ cập nhật sai. Đọc [outputs/GUIDE_MAINTENANCE.md](outputs/GUIDE_MAINTENANCE.md) khi sửa website/build.
- Checkout làm việc của người dùng: `/Users/neikop/Workings/Dev/capybara-go-guide`. Các bản trong `Documents/Codex/.../new-chat` là bản cũ; không sửa hoặc copy ngược từ đó. Khi repo được clone sang máy khác, dùng checkout hiện tại.
- Kiểm `git status --short --branch` trước khi sửa; giữ nguyên thay đổi có sẵn của người dùng. Chỉ commit/push khi yêu cầu hiện tại có phạm vi đó.

## Nội dung và nguồn

- Viết giải thích bằng tiếng Việt; giữ tên vật phẩm, skill và description tiếng Anh theo nguồn. Không tự diễn đạt lại description như thể đó là wording của game.
- Guide ưu tiên người nạp nhẹ, Whisperer PvE trước; có so sánh PvP và các build khác. Tier skill hiện tại dành cho Whisperer PvE theo điều kiện, không phải tier mọi vũ khí hay mọi mode.
- Khi khuyên chọn món: nêu lý do, điều kiện, giai đoạn và lựa chọn tạm nếu có cơ sở. Không suy pool từ màu hộp hoặc khuyên mua dựa trên CP/rarity đơn thuần.
- Ghi nguồn và ngày đối chiếu cho dữ kiện mới; phân biệt ngày đọc với patch/ngày cập nhật nguồn. Giữ rõ điểm chưa kiểm chứng hoặc mâu thuẫn; không tự điền giá, tỷ lệ, pity, lịch banner/event.
- Bối cảnh tài khoản trong tài liệu là lịch sử trao đổi, không phải số liệu tài khoản hiện tại. Không suy số dư còn lại hay tiến độ mới.

## Sửa đúng file

- Nội dung website: `work/capybara-guide/guide-content.json`.
- UI: `guide-template.html`, `guide.css`, `guide.js` trong cùng thư mục.
- Wording skill: snapshot `skills-source-2026-09-16.json`; tier/ghi chú: `build_skill_tiers.py`.
- Chạy `python3 work/capybara-guide/build_guide.py` để cập nhật outputs. Không sửa trực tiếp các HTML sinh tự động hoặc `WHISPERER_SKILL_TIER_LIST.{json,md}`.
- Không phải mọi file trong `outputs/` đều được sinh tự động: `CAPYBARA_GO_MEMORY.md`, `WHISPERER_14_NGAY_DAU.md`, `GUIDE_MAINTENANCE.md` là tài liệu biên tập. Riêng chỉ mục nguồn trong `CAPYBARA_GO_MEMORY.md` còn là đầu vào của build.
- Giữ trang HTML dùng offline, đường dẫn HTML cũ và hash mục lục; tránh thêm framework/backend chỉ để sửa nội dung.

## Kiểm tra và bàn giao

- Sửa nội dung/UI: build và kiểm `node --check work/capybara-guide/guide.js`; rà diff của nguồn lẫn outputs. Thay đổi chỉ ở tài liệu repo không cần build lại website.
- Sửa UI/hành vi: kiểm trình duyệt desktop/mobile và đúng tương tác bị ảnh hưởng. Tách kết quả build/static khỏi browser QA và dữ kiện game đã kiểm live.
- Trước khi xem localhost, xác minh server đang phục vụ `outputs/` của checkout này. URL cũ giống nhau không chứng minh đó là file mới.
- Khi quyết định hoặc cấu trúc thay đổi, cập nhật `PROJECT_MEMORY.md`; tránh chép lại toàn bộ kiến thức game vào đó. Chi tiết game để ở nội dung guide và tài liệu nguồn.
