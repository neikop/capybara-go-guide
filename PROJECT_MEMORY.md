# Project memory — Capybara Go Guide

Cập nhật: **17/09/2026 · migration React/Vite**. Ghi nhớ bảo trì, không phải dữ liệu game live.

## Checkout và quyết định mới nhất

- Làm việc tại `/Users/neikop/Workings/Dev/capybara-go-guide`; remote `git@github.com:neikop/capybara-go-guide.git`, nhánh `main`.
- Commit nền đã push: `c7e878b`, chứa website tĩnh cũ. Sau đó người dùng copy template Vite/React và yêu cầu migrate toàn bộ sang components, bỏ pipeline cũ.
- Yêu cầu mới **thay thế** quyết định giữ HTML độc lập. App hiện dùng Vite 8, React 19, TypeScript 6, Chakra UI 3, React Router, React Hook Form; pnpm 8.9.2.
- `AGENTS 2.md` / `README 2.md` đã được đọc và hợp nhất vào `AGENTS.md` / `README.md`. `DESIGN.md` tiếp tục là coding contract.
- `outputs/`, `work/capybara-guide/`, các generator và server cũ đã được thay thế. Không copy ngược từ workspace Codex ban đầu. Không dùng tài liệu snapshot cũ để khôi phục pipeline đã bỏ.
- Chưa có yêu cầu commit/push migration. Giữ nguyên index; không tự triển khai. Trong lúc migration, một luồng khác đã bổ sung các commit Vercel (HEAD quan sát `76e6074`); giữ cấu hình và cập nhật rewrite tương thích, không reset lịch sử đó.
- Tài liệu deployment đã ghi project `neikops-projects/capybara-go-guide`, domain `https://capybara-go-guide.vercel.app`, Git Integration deploy khi push main. Đây là thông tin bàn giao từ repo; lượt migration chưa xác minh hoặc triển khai production mới. `vercel.json` vẫn pin pnpm 8.9.2, output dist; `.vercel/` không commit.

## Mục tiêu sản phẩm và bối cảnh

Guide tiếng Việt cho người nạp nhẹ, lấy Whisperer làm bộ PvE trước rồi PvP. Bao phủ các vấn đề đã hỏi: hai cung, trang bị/đồ tạm, pet, mount/xe/artifact, adventurer/Panda, lộ trình 14 ngày, skill/Basic Attack, gems/banner/event, chi tiêu và hệ thống mở về sau.

Tên và description skill phải giữ nguyên tiếng Anh từ nguồn; giải thích lý do/điều kiện bằng tiếng Việt. Tier theo build và nhu cầu, không khóa vào ngày chơi hoặc áp cho mọi vũ khí.

Bối cảnh tài khoản chỉ là lịch sử: từng ngày 3/chapter 16/full tím; đã nạp khoảng $100 và mua các gói quyền lợi; có vé chọn vũ khí và pet đỏ. Chưa xác minh toàn bộ pool hay số dư; không mặc định còn $40 hoặc hiện vẫn ở tiến độ đó.

## Nguồn chính sau migration

| Nội dung                                       | File                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------- |
| Sections, blocks, metadata, nguồn theo mục     | `src/views/Guide/data/content.ts`                                   |
| Skill name/description/tier/note/scope/variant | `src/views/Guide/data/skills.ts`                                    |
| Danh sách nguồn                                | `src/views/Guide/data/sources.ts`                                   |
| Domain types                                   | `src/views/Guide/types.ts`                                          |
| Tìm/lọc, tính gems, giải mã checklist          | `src/views/Guide/logic.ts`                                          |
| Layout/router composition                      | `src/App.tsx`, `src/views/Guide/Guide.tsx`                          |
| Render nội dung bằng components                | `src/views/Guide/GuideSection.tsx`, `GuideTable.tsx`                |
| State chuyên biệt                              | `SkillBrowser/`, `GuideSearch/`, `DailyChecklist/`, `GemBudget.tsx` |
| Wording gốc / giá pack snapshot                | `docs/sources/`                                                     |
| Markdown tham khảo có ngày riêng               | `public/docs/`                                                      |

Sửa TypeScript data trực tiếp; không còn bước regenerate tier. Snapshot JSON gốc dùng kiểm name/description; tier và note biên tập ở data hiện tại. Khi cập nhật patch thật, lưu snapshot mới có nguồn/ngày rồi cập nhật tests/metadata tương ứng.

## Những điều phải giữ

- 14 mục, 51 nguồn, 376 descriptions / 314 tên: 282 Story, 10 Synergy Lv1, 84 nguồn khác. Chúng không phải 376 lựa chọn đều có trong Story.
- Cùng tên có thể nhiều descriptions; không tự suy rarity/spec. Tier X giữ trường hợp thiếu dữ kiện/pool chưa rõ.
- Các số lượng hiện được kiểm bằng unit tests; đổi có chủ đích thì cập nhật dữ liệu, snapshot, lời giới thiệu và kiểm tra cùng nhau.
- ATK khác Basic Attack DMG; Combo Dagger khác Enhanced Combo; Rage Dagger skill khác gem. Không gộp level/sao/awakening hoặc active/deploy.
- Panda có điều kiện, không bắt buộc mua đầu game; Gagarin là hướng dài hạn Whisperer theo guide.
- Quỹ gems 32k/50k chỉ tham khảo. Pity 180 Limited Secret Chest khác Chest Growth/Mileage; kiểm pool và currency carryover trong game.
- Nguồn có snapshot v1.7/v1.8.x và các guide build thời điểm khác nhau. Ngày đọc 16–17/09/2026 không khẳng định patch mới nhất.
- Markdown nền ngày 16/09 chứa nhận định trước khi chốt Whisperer; runtime data có bổ sung sau đó. Những tài liệu này là lịch sử, không phải chỉ dẫn kỹ thuật/kiến trúc hiện tại.

## URL, state và runtime

- `pnpm dev`: Vite tại `http://127.0.0.1:8766/`; `pnpm build`: bundle `dist/`; `pnpm preview`: production preview cùng cổng, cần dừng dev trước.
- Hash `#skills`, `#daily`, `#gems`, `#money` giữ nguyên. Skill query dùng `q`, `tier`, `scope`; `scope=` là tất cả nhóm. Thay filter phải giữ hash, tránh quay về tổng quan.
- Ba URL HTML cũ được React Router chuyển về app, giữ query/hash; server deploy cần SPA fallback.
- Checklist giữ key `capy-guide-daily-v1` và ID số dạng chuỗi để tiếp tục dấu tick cũ; reset theo ngày địa phương, xử lý storage lỗi và đồng bộ giữa tab.
- Quỹ gems là form cục bộ, không lưu hoặc truyền số dư. Không có API game, sample health/auth/density của template đã bỏ.
- Theme primary chuyển sang green qua semantic palette; light/dark theo template. `/components` giữ làm trang kiểm UI dùng chung.
- `/print` render đủ 14 mục + 376 descriptions, không bị bộ lọc ảnh hưởng. Browser print/PDF cần kiểm riêng, không suy từ unit test.
- Vite production gồm HTML và assets, cần HTTP server/SPA host; không còn cam kết tải một HTML standalone chạy `file://`. Chưa có service worker/offline cache.

## Kiểm tra

```sh
pnpm install --frozen-lockfile
pnpm chakra-typegen
pnpm check
```

`check` gồm format, lint, contrast, unit test, TypeScript, build. Test chạy logic TypeScript thật qua TypeScript transpiler của devDependencies, không tạo output guide. Test giữ wording, scopes, nguồn/links, search, budget, parsing checklist và chuyển ngày.

Browser QA cần kiểm React runtime, không dùng bằng chứng HTML cũ thay thế: navigation, old URL, URL-filter reload, tìm kiếm dialog, checklist reload/reset, budget, desktop/mobile/light/dark và print view. Chưa có kiểm chứng shop/event/damage trong tài khoản game.

### Migration verification — 17/09/2026

- `pnpm check` đạt: formatting, ESLint, contrast, 5 regression tests, TypeScript và production build.
- Đã kiểm trên Vite tại cổng 8766: chuyển mục, kết hợp query/tier và giữ sau reload, scope toàn bộ 376 mô tả, trạng thái không có kết quả, tìm Panda và mở Drunken Fist từ dialog.
- Checklist giữ dấu tick sau reload; đã hoàn tác dấu tick dùng kiểm tra. Budget 50.000 − 10.000 = 40.000 và 50.000 − 25.000 = 25.000, dưới quỹ 32.000 đúng 7.000.
- Đã xem desktop light, mobile 390px light/dark, menu mobile và bảng chuyển thành thẻ; không thấy tràn ngang ở màn đã kiểm. Console không có warning/error ở các luồng đã kiểm.
- URL HTML guide cũ giữ `#money`; `/print` render đủ 14 mục và 376 mô tả, `/components` tải được. Chưa xuất hoặc kiểm phân trang PDF thực tế.
- Migration chưa commit/push/deploy; bằng chứng browser trên đây là localhost, không phải production Vercel.

## Changelog

- 17/09: clone repo vào Workings/Dev, tạo tài liệu bảo trì.
- 17/09: người dùng bổ sung template Vite và yêu cầu migration; chuyển nguồn nội dung sang TypeScript, UI sang React/Chakra, dọn pipeline cũ và template demo, cập nhật tài liệu cùng regression tests.
