# Project memory — Capybara Go Guide

Cập nhật: **17/09/2026**. Đây là ghi nhớ trong repo cho người/agent bảo trì, không phải bảng dữ kiện game hiện hành.

## 1. Checkout và trạng thái bàn giao

### Cập nhật triển khai React/Vite — 17/09/2026

- Người dùng xác nhận dùng React/Vite và yêu cầu deploy lên Vercel. Các mục mô tả kiến trúc HTML bên dưới vẫn áp dụng cho guide offline, không phải toàn bộ ứng dụng hiện tại.
- App nằm ở `src/`, entry `src/main.tsx`; lúc bắt đầu `/` và `/components` là template. Phần chuyển guide sang React đang được sửa đồng thời, cần kiểm lại trạng thái cuối.
- `pnpm build` chạy TypeScript rồi Vite, xuất `dist/`; tài nguyên tĩnh dùng `public/` mặc định. Không đổi `publicDir` sang `outputs/` vì phần chuyển đổi đang bổ sung `public/docs/`. Cần kiểm đường dẫn HTML cũ khi source mới hoàn tất.
- `vercel.json`: framework Vite, install/build gọi qua `npx --yes pnpm@8.9.2`, install có `--frozen-lockfile`, build dùng script `build`, output `dist/`, rewrite route không có phần mở rộng về `index.html`. Vercel ưu tiên binary pnpm 8.15.9 trên PATH kể cả sau khi cài global; dùng npx để chạy đúng `engines.pnpm` 8.9.2.
- `.gitignore` bỏ qua `dist/`, `.vercel/` và `*.tsbuildinfo`. Người dùng đã bổ sung yêu cầu deploy qua GitHub để push tự triển khai; phạm vi bao gồm commit/push source ứng dụng và cấu hình cần thiết.
- Build toàn checkout lúc migration có lỗi thiếu `../types` trong `src/views/Guide/data/content.ts` và `skills.ts`. Người dùng yêu cầu triển khai ngay, không chờ migration; chỉ đưa source app đang được dùng và build được vào commit deploy.
- Project `neikops-projects/capybara-go-guide` kết nối GitHub `neikop/capybara-go-guide`, production branch `main`, framework Vite, Node 24.x. Push `6335d71` tự kích hoạt production deployment `dpl_HKG6JRRHg4a7gFmNzgoPXdxQ7ZNe`, trạng thái Ready; GitHub báo Vercel success.
- Website: https://capybara-go-guide.vercel.app. Đã kiểm HTTP 200 cho `/`, `/components`, các asset JS/CSS và `/docs/CAPYBARA_GO_MEMORY.md`; asset không tồn tại trả 404. Đây là bản template React hiện hành; chưa đưa migration guide vào website.
- Snapshot source để commit đã qua `pnpm build` (TypeScript + Vite), lint không có lỗi và contrast đạt 78 cặp. Các file `src/views/Guide/` đang migration, chưa được app import, được giữ local và không đưa vào commit khởi tạo deploy. Chưa browser QA (không có browser kết nối).
- Hook `.husky/` chưa tracked chạy toàn bộ `pnpm check` trên migration chưa hoàn chỉnh; các commit deploy dùng `HUSKY=0` sau khi kiểm build/lint/contrast trên snapshot chính xác được commit. Không sửa hoặc commit hook này.

- Thư mục làm việc chính: `/Users/neikop/Workings/Dev/capybara-go-guide`.
- Remote: `git@github.com:neikop/capybara-go-guide.git`; repository GitHub public.
- Nhánh ban đầu: `main`. Commit nền đã push và clone: `c7e878b` — `Add complete Capybara Go guide and build sources`.
- Website được tạo trước trong workspace `Documents/Codex/.../new-chat`, rồi đưa lên repo. Từ yêu cầu ngày 17/09, thực hiện công việc ở checkout `Workings/Dev` này; không tiếp tục sửa bản workspace cũ.
- Đường dẫn localhost đang dùng: `http://127.0.0.1:8766/CAPYBARA_GO_GUIDE.html`. Đây là server local, không phải bằng chứng đã triển khai GitHub Pages. Chưa thiết lập quy trình deploy trong repo.
- Trong lần bàn giao 17/09, server cổng 8766 đã chuyển sang document root tuyệt đối `/Users/neikop/Workings/Dev/capybara-go-guide/outputs`. Tiến trình có thể dừng sau khi kết thúc môi trường; kiểm lại khi bắt đầu phiên mới.

### Thay đổi đồng thời chưa rà soát

Ở cuối lượt thêm memory, xuất hiện các file untracked như `package.json`, `pnpm-lock.yaml`, `vite.config.ts`, `src/`, `scripts/`, các file TypeScript/config, `DESIGN.md`, `AGENTS 2.md` và `README 2.md`. Chúng không thuộc commit nền hoặc thay đổi tài liệu của lượt này; đã giữ nguyên, chưa xác minh kiến trúc hay chạy chúng. Sơ đồ static/build và bằng chứng bên dưới mô tả bản đã bàn giao. Trước khi sửa tiếp, đọc trạng thái và hướng dẫn mới để xác định có đang chuyển sang app Vite hay không; không tự xóa file, copy đè hoặc coi website static là nguồn duy nhất của mọi công việc mới.

## 2. Mục tiêu và sở thích đã chốt

- Một website tổng hợp các vấn đề đã hỏi: tier đầu tư nạp nhẹ, Whisperer/Angel Bow ở PvE/PvP, trang bị và đồ tạm, pet, mount/xe/artifact, adventurer/Panda, 7–14 ngày, chọn skill trong ải, Basic Attack, gems/banner/event và tiền nạp.
- Hướng chính: **Whisperer**, PvE trước rồi PvP; hướng dẫn dùng theo điều kiện và tiến độ, không khóa toàn bộ tier vào ngày 3/chapter 16.
- Người dùng muốn **tên skill và description tiếng Anh giữ wording/term của game**, kèm lý do tiếng Việt để tự cân nhắc.
- Khuyến nghị cần giải thích vì sao đáng nâng và dùng gì tạm khi thiếu; không áp cấu hình endgame thành danh sách mua bắt buộc đầu game.
- Giữ website tĩnh, dùng offline, dễ tìm kiếm và cập nhật; không cần npm/framework/backend cho cấu trúc hiện tại.

### Bối cảnh tài khoản — chỉ là lịch sử

Người dùng từng cung cấp: ngày 3, chapter 16, full tím; đã nạp khoảng $100, mua các gói dạng tháng/lifetime/quyền lợi; còn vé chọn vũ khí và pet đỏ. Chưa xác minh tên mọi gói, danh sách trong hộp hoặc số dư. Không mặc định vẫn còn $40, vẫn ngày 3, hay hộp đỏ có đúng pet đang khuyên.

## 3. Nguồn nào là bản chính?

| Loại thông tin | Nơi sửa / tra |
| --- | --- |
| Nội dung website, link nguồn, metadata | `work/capybara-guide/guide-content.json` |
| Khung trang / style / hành vi | `work/capybara-guide/guide-template.html`, `guide.css`, `guide.js` |
| Skill description tiếng Anh | `work/capybara-guide/skills-source-2026-09-16.json` |
| Quy tắc tier, alias, ghi chú theo build | `work/capybara-guide/build_skill_tiers.py` |
| Ghép website | `work/capybara-guide/build_guide.py` |
| Kiến thức toàn game + chỉ mục 51 nguồn | `outputs/CAPYBARA_GO_MEMORY.md` — snapshot biên tập ngày 16/09 |
| Kế hoạch tài khoản đầu game | `outputs/WHISPERER_14_NGAY_DAU.md` — bối cảnh lịch sử |
| Runbook kỹ thuật | `outputs/GUIDE_MAINTENANCE.md` |
| Quyết định dự án / bàn giao | File này; quy tắc ngắn nằm ở `AGENTS.md` |

Website đã có bổ sung ngày 17/09 mà tài liệu Markdown nền ngày 16/09 chưa đồng bộ hoàn toàn. Ví dụ, phần hồ sơ trong memory toàn game được viết trước khi chốt Whisperer; các đoạn về độ bao phủ skill/spreadsheet cũng phản ánh thời điểm cũ. Không dùng những câu này để đảo ngược quyết định mới; khi sửa nội dung liên quan, cập nhật đúng nguồn và ghi ngày.

### Luồng build

```text
skills-source JSON + build_skill_tiers.py
  → WHISPERER_SKILL_TIER_LIST.json / .md
  → WHISPERER_SKILL_REFERENCE.html

guide-content JSON + template/CSS/JS + skill JSON
  + chỉ mục nguồn từ CAPYBARA_GO_MEMORY.md
  → CAPYBARA_GO_GUIDE.html
  → WHISPERER_SKILL_TIER_LIST.html (cùng nội dung, giữ URL cũ)
```

`build_guide.py` tự gọi generator skill. Hai HTML website nhúng CSS/JS/dữ liệu, không fetch JSON khi chạy. Commit nguồn và output tương ứng khi được yêu cầu commit một thay đổi website.

## 4. Các điều kiện cần giữ

- Ở bản 2.0 có 14 mục, 376 descriptions / 314 tên skill: 282 Story/nâng cấp, 10 mẫu Synergy Lv1, 84 hệ mở sau/nguồn khác. Không quảng bá là 376 skill đều có thể chọn trong Story.
- Tier là khuyến nghị biên tập Whisperer PvE có điều kiện, không phải sao chép nguyên tier endgame của MeowDB hoặc kết quả đo damage trên tài khoản.
- Cùng tên có thể nhiều descriptions khác nhau. Giữ từng bản; không tự gán rarity/spec nếu nguồn không nêu. Tier X thể hiện thiếu dữ kiện/pool chưa xác định.
- ATK khác Basic Attack DMG; Combo Dagger khác Enhanced Combo; Dagger Mastery khác Dagger Proficiency; Rage Dagger skill khác gem; sao khác awakening; active khác deploy.
- Panda không phải món bắt buộc mua sớm; Gagarin là hướng dài hạn Whisperer theo guide, giá trị phụ thuộc sao và bộ hỗ trợ.
- Quỹ gems 32k/50k là tham khảo từ nguồn, không phải số tiền phải nạp hoặc bảo đảm đủ mọi event. Tách Limited Secret Chest pity 180 khỏi Chest Growth/Mileage; kiểm pool và currency carryover trong game.
- Wording nguồn có snapshot v1.7/v1.8.x và các guide build ở thời điểm khác nhau. Ngày đọc 16–17/09/2026 không có nghĩa mọi dữ liệu là patch mới nhất.

## 5. Điểm dễ cập nhật sai trong code

- `build_skill_tiers.py` phân nhóm theo **vị trí 282 dòng đầu** của `source['descriptions']`. Thêm/đổi thứ tự snapshot cần rà logic phân nhóm và kiểm rule còn phủ hết, không chỉ sửa tổng số dòng.
- `build_guide.py` đọc link đánh số từ `outputs/CAPYBARA_GO_MEMORY.md` bằng regex và assert **51 nguồn**. Thêm nguồn phải cập nhật parser/assert và nội dung có ghi con số liên quan.
- Các tổng 14/376/51, ngày nguồn và ghi chú snapshot xuất hiện trong nhiều đoạn prose/README, không phải tất cả lấy từ metadata. Rà các chỗ liên quan khi đổi dữ liệu.
- Generator skill ghi HTML riêng vào `WHISPERER_SKILL_REFERENCE.html`, nhưng danh sách file trong thông báo cuối script hiện vẫn in tên HTML cũ. Kiểm file thực tế; đừng dùng log đó làm bằng chứng HTML tổng hợp đã build lại.
- Giữ ID mục lục như `#skills`, `#daily`, `#gems`, `#money`; người dùng có thể bookmark.
- Checklist dùng localStorage `capy-guide-daily-v1`, theo ngày địa phương, không đồng bộ tài khoản. Tính quỹ chỉ là phép trừ và không lưu số dư.
- Bản HTML đơn lẻ vẫn hoạt động offline; tải Markdown/JSON đi kèm cần các file ở cùng `outputs/`. MeowDB cần Internet.

## 6. Chạy và kiểm tra

Từ root của checkout:

```sh
git status --short --branch
python3 work/capybara-guide/build_guide.py
node --check work/capybara-guide/guide.js
git diff --check
python3 -m http.server 8766 --bind 127.0.0.1 --directory outputs
```

Không chạy thêm server nếu cổng đã có tiến trình. Kiểm PID/cwd/document root bằng `lsof` và `ps`; chỉ thay server của chính guide khi đã nhận diện. Cùng URL cũ có thể vẫn phục vụ workspace trước khi clone. Sau build phải reload vì server tĩnh không có hot reload.

Kiểm theo phạm vi thay đổi:

- Nội dung/dữ liệu: build thành công, descriptions không bị đổi wording ngoài phạm vi, link nội bộ có đích, hai HTML chính giống nhau; rà generated diff.
- UI: desktop/mobile, điều hướng/hash, tìm guide và skill, tier/nhóm/kết quả trống; test checklist hoặc quỹ gems nếu sửa chúng.
- Chỉ sửa tài liệu repo: đọc lại đường dẫn, link và diff; không cần build hoặc chạy lại toàn bộ UI.

### Bằng chứng đã có từ lần tạo website

- Build, JavaScript syntax, 14 mục, 376 descriptions, ID/link nội bộ và hai HTML chính đã kiểm.
- Browser đã kiểm desktop và viewport mobile 390px, tìm/lọc skill, kết quả trống, menu, checklist qua reload/reset, tính gems với đủ/thiếu quỹ và đầu vào sai.
- Nội dung nền/một số mục đã đối chiếu MeowDB; chưa kiểm shop, event hay damage trong tài khoản game.
- In/PDF có code hỗ trợ nhưng chưa có xác nhận render/QA bản in. Chưa thử rollover checklist qua nửa đêm hoặc đầy đủ mọi browser/offline scenario.

Đây là bằng chứng lịch sử, không phải cam kết các thay đổi tương lai đã qua kiểm tra tương tự.

## 7. Duy trì ghi nhớ này

Khi có thay đổi đáng kể, ghi ngắn: ngày, quyết định, file liên quan, nguồn và mức kiểm chứng. Không lưu credentials hoặc chép transcript dài. Kiến thức game chi tiết để ở guide/tài liệu nguồn; project memory chỉ giữ định hướng, luồng dữ liệu, bẫy bảo trì và việc chưa xác minh.

### Changelog

- **17/09/2026:** chuyển checkout làm việc sang `Workings/Dev/capybara-go-guide`; thêm `AGENTS.md` và project memory, liên kết từ README. Không tự commit/push thay đổi tài liệu này.
