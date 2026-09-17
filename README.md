# Capybara Go — Sổ tay nạp nhẹ

Website guide tiếng Việt tổng hợp từ MeowDB, lấy Whisperer làm hướng chính. Bao gồm 14 mục: lựa chọn build, hai cây cung PvE/PvP, trang bị và đồ thay thế, pet, mount/artifact, adventurer/Panda, lộ trình 7–14 ngày, checklist hằng ngày, skill tier list, gems/banner/event, chi tiêu và các hệ thống về sau.

- **376 descriptions tiếng Anh** giữ wording của nguồn; tìm kiếm toàn guide và lọc skill theo tier/nhóm.
- Checklist lưu theo ngày trên trình duyệt; công cụ tính quỹ gems.
- Giao diện desktop/mobile, hỗ trợ in và tải HTML dùng offline.
- Chỉ mục **51 nguồn MeowDB**, ghi ngày kiểm và các điều kiện áp dụng.

Tier là khuyến nghị có điều kiện cho build, không phải bảng sức mạnh tuyệt đối. Pool, giá, lịch sự kiện và tooltip trong game cần đối chiếu với phiên bản đang chơi. Nội dung cá nhân hóa ghi lại bối cảnh đã cung cấp, không tự cập nhật theo tài khoản.

## Chạy local

Không cần npm install hoặc dịch vụ backend. Dùng Python 3 để phục vụ các file tĩnh:

```sh
python3 -m http.server 8766 --bind 127.0.0.1 --directory outputs
```

Mở [website local](http://127.0.0.1:8766/CAPYBARA_GO_GUIDE.html). Có thể bookmark trực tiếp các mục như `#skills`, `#daily`, `#gems`.

Cũng có thể mở trực tiếp [outputs/CAPYBARA_GO_GUIDE.html](outputs/CAPYBARA_GO_GUIDE.html) bằng trình duyệt. CSS, JavaScript và dữ liệu skill đều được nhúng trong file. Các tài liệu tải kèm cần giữ trong thư mục `outputs`; link MeowDB cần Internet.

## Cập nhật và build

```sh
python3 work/capybara-guide/build_guide.py
node --check work/capybara-guide/guide.js
```

Python 3 dùng thư viện chuẩn. Node.js chỉ cần cho lệnh kiểm cú pháp JavaScript.

| File | Vai trò |
| --- | --- |
| `work/capybara-guide/guide-content.json` | Nội dung các mục, nguồn và metadata |
| `work/capybara-guide/guide-template.html` | Bố cục website |
| `work/capybara-guide/guide.css` | Giao diện responsive và bản in |
| `work/capybara-guide/guide.js` | Điều hướng, tìm kiếm, bộ lọc, checklist, tính quỹ |
| `work/capybara-guide/skills-source-2026-09-16.json` | Description tiếng Anh đã trích từ nguồn |
| `work/capybara-guide/build_skill_tiers.py` | Quy tắc tier và generator bảng skill |
| `work/capybara-guide/build_guide.py` | Build toàn bộ website và gọi generator skill |
| `outputs/` | HTML dùng ngay và tài liệu Markdown/JSON |

`CAPYBARA_GO_GUIDE.html` và `WHISPERER_SKILL_TIER_LIST.html` chứa cùng website để giữ đường dẫn cũ. `WHISPERER_SKILL_REFERENCE.html` là trang tra skill riêng. Commit cả nguồn và output sau khi build để bản tải sẵn luôn khớp nội dung.

Chi tiết: [Hướng dẫn maintain](outputs/GUIDE_MAINTENANCE.md).

## Nguồn

- [MeowDB Capybara Go](https://meowdb.com/db/capybara-go/)
- [Whisperer / Elres Build Guide](https://meowdb.com/db/capybara-go/whisperer-elres-ultimate-build-guide)
- [Skills Database](https://meowdb.com/db/capybara-go/capybara-go-skills-database)
- [Gem Farming & Spending](https://meowdb.com/db/capybara-go/gem-farming-spending-guide)

Ngày tổng hợp website: 17/09/2026. Đây là guide cộng đồng, không phải website chính thức của game hay MeowDB.
