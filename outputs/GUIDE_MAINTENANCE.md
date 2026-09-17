# Capybara Go — duy trì website

Website: `CAPYBARA_GO_GUIDE.html`. Đường dẫn cũ `WHISPERER_SKILL_TIER_LIST.html` chứa cùng website để bookmark tiếp tục hoạt động. Cả hai là HTML độc lập, CSS/JavaScript/dữ liệu được nhúng, không cần cài thư viện hay gọi API bên ngoài.

## Nguồn để sửa

- `work/capybara-guide/guide-content.json`: nội dung 14 mục, lý do, đồ tạm, ghi chú điều kiện, link nguồn và lịch cập nhật.
- `work/capybara-guide/guide-template.html`: bố cục trang.
- `work/capybara-guide/guide.css`: giao diện desktop/mobile/print.
- `work/capybara-guide/guide.js`: điều hướng, tìm kiếm, lọc skill, checklist và phép tính quỹ gems.
- `work/capybara-guide/skills-source-2026-09-16.json`: description tiếng Anh đã trích từ nguồn; không tự sửa wording chỉ để đẹp câu.
- `work/capybara-guide/build_skill_tiers.py`: quy tắc tier biên tập. Tạo JSON/Markdown và bản HTML tra skill riêng `WHISPERER_SKILL_REFERENCE.html`.
- `outputs/CAPYBARA_GO_MEMORY.md`: chỉ mục 51 nguồn được website sử dụng. Các ghi chú cũ có ngày riêng; không coi mọi đoạn là phiên bản mới nhất.

## Build

Chạy từ thư mục dự án:

```sh
python3 work/capybara-guide/build_guide.py
node --check work/capybara-guide/guide.js
```

Lệnh build gọi generator skill trước, rồi nhúng nội dung và dữ liệu vào hai file HTML. Không chỉnh HTML output bằng tay vì sẽ bị ghi đè khi build.

Mở trực tiếp HTML hoặc chạy server local:

```sh
python3 -m http.server 8766 --bind 127.0.0.1 --directory outputs
```

Sau đó mở `http://127.0.0.1:8766/CAPYBARA_GO_GUIDE.html`. Bookmark mục riêng bằng `#pets`, `#skills`, `#gems`, v.v.

## Quy tắc biên tập

1. Ghi ngày kiểm và link nguồn khi cập nhật thông tin game; phân biệt ngày đọc với phiên bản nguồn.
2. Giữ tier theo điều kiện build. Không biến một mốc endgame thành yêu cầu ngày 7/14.
3. Phân biệt bản mô tả cùng tên, skill/gem, active/deploy, level/sao/awakening.
4. Không gán giá pack, pool hộp hay lịch event live khi chưa kiểm trong game.
5. Kiểm trang desktop và mobile, điều hướng hash, tìm kiếm, bộ lọc skill, kết quả trống, checklist và quỹ gems sau khi thay giao diện.

## Lưu dữ liệu & offline

- Checklist lưu tại trình duyệt bằng key `capy-guide-daily-v1`, gắn ngày địa phương; tự bắt đầu lại sang ngày mới. Nút bỏ chọn chỉ xóa lựa chọn hôm nay. Không đồng bộ thiết bị.
- Quỹ gems chỉ tính trong trang; không lưu hoặc gửi thông tin đi đâu.
- HTML tải riêng vẫn có nội dung và 376 mô tả skill. Tài liệu Markdown/JSON đi kèm cần giữ cùng thư mục hoặc tải riêng. Link MeowDB cần Internet.
- In/PDF hiển thị toàn bộ 14 mục và toàn bộ skill, bất kể bộ lọc hiện tại.

## Changelog

- 2026-09-17 / 2.0: chuyển trang tier list thành guide 14 mục; giữ 376 descriptions; thêm đồ/pet/mount/adventurer, Panda, PvE/PvP, 14 ngày, daily checklist, gems/event/banner, chi tiêu và hệ thống muộn. Thêm tìm kiếm toàn trang, lọc skill, tính quỹ, giao diện responsive và bản in.
