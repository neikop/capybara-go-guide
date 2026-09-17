# Capybara Go — Sổ tay nạp nhẹ

Ứng dụng **Vite + React + TypeScript + Chakra UI** tổng hợp guide Capybara Go bằng tiếng Việt, lấy Whisperer làm hướng chính. Nội dung được render bằng React components; state, điều hướng và các công cụ nằm trong feature `src/views/Guide`.

## Chạy dự án

Yêu cầu Node.js ≥20.19 và pnpm 8.9.2.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Mở [guide local](http://127.0.0.1:8766). Vite dùng cổng 8766 và báo lỗi nếu cổng bị chiếm. `postinstall` sinh Chakra typings; Husky được cài bởi `prepare`.

```sh
pnpm check           # Format, lint, contrast, unit tests, TypeScript, production build
pnpm build           # Build production vào dist/
pnpm preview         # Phục vụ dist/ tại 127.0.0.1:8766; dừng dev trước khi chạy
pnpm chakra-typegen  # Sau khi thay theme/recipe/token
```

`pnpm format` / `pnpm lint:fix` áp dụng định dạng và safe fixes. Pre-commit chạy `pnpm check`. Không commit `dist/` hoặc `node_modules/`.

## Các tính năng

- 14 mục: build/tier đầu tư, hai cung PvE/PvP, gear và đồ tạm, pet, mount/xe/artifact, adventurer/Panda, lộ trình 7–14 ngày, daily checklist, skill, gems/banner/event, chi tiêu, hệ thống muộn và nguồn.
- 376 descriptions tiếng Anh / 314 tên skill; tier theo điều kiện Whisperer PvE.
- Tìm kiếm toàn guide và skill; bộ lọc qua URL, hỗ trợ bookmark/reload/back-forward.
- Checklist theo ngày địa phương, lưu bằng localStorage; dùng tiếp dữ liệu từ bản cũ.
- Công cụ tính quỹ gems dùng React Hook Form; không gửi số dư ra ngoài.
- Responsive, light/dark mode; bảng thành thẻ trên điện thoại.
- `/print` render toàn bộ mục và toàn bộ skill để in/lưu PDF; `/components` là tài liệu UI của template.
- 51 link MeowDB và các snapshot Markdown/JSON để tra nguồn.

## Cấu trúc và nơi chỉnh sửa

```text
src/
├── App.tsx                          # React Router: guide, print, component docs, legacy URLs
├── components/
│   ├── app/                         # Chakra, theme mode, alert/toast providers
│   ├── theme/                       # Semantic tokens, typography, recipes
│   ├── select/                      # Shared select adapters
│   └── ui/                          # Shared components domain-neutral
└── views/
    ├── Guide/
    │   ├── data/content.ts          # Nội dung 14 mục + nguồn theo mục + metadata
    │   ├── data/skills.ts           # Name, English description, tier, note, scope, variant
    │   ├── data/sources.ts          # Chỉ mục nguồn
    │   ├── types.ts                 # Discriminated content blocks và domain types
    │   ├── logic.ts                 # Search/filter, daily storage parsing, gem budget
    │   ├── Guide.tsx                # Layout và section navigation
    │   ├── GuideSection.tsx         # React composition của nội dung guide
    │   ├── SkillBrowser/            # Bộ lọc URL và bảng skill
    │   ├── DailyChecklist/          # Checkbox và lifecycle lưu theo ngày
    │   ├── GuideSearch/             # Dialog tìm kiếm, shortcut /
    │   └── PrintGuide.tsx           # Bản in đầy đủ
    └── Component/                   # Tài liệu UI của template
public/docs/                        # Markdown tra cứu tải trực tiếp
scripts/guide.test.mjs               # Regression tests cho dữ liệu và logic
scripts/check-theme-contrast.mjs     # Contrast gate của template
docs/sources/                       # Snapshot nguồn để đối chiếu
```

Sửa trực tiếp dữ liệu TypeScript rồi Vite cập nhật giao diện. Tier/notes được biên tập ngay trong `data/skills.ts`; không còn generator trung gian. `docs/sources/skills-source-2026-09-16.json` lưu wording gốc dùng để kiểm sự toàn vẹn dữ liệu.

## URL và deployment

- Mục guide: `/#skills`, `/#daily`, `/#gems`, v.v.
- Ví dụ filter: `/?q=Basic+Attack&tier=A&scope=#skills`.
- Các URL cũ `/CAPYBARA_GO_GUIDE.html`, `/WHISPERER_SKILL_TIER_LIST.html`, `/WHISPERER_SKILL_REFERENCE.html` chuyển về app và giữ hash/query.
- Deploy thư mục `dist/` trên static host có **SPA fallback về `index.html`**, để `/print`, `/components` và URL cũ hoạt động khi truy cập trực tiếp. `vercel.json` đã cấu hình Vite, pnpm 8.9.2 và rewrite tương ứng.
- Production cần các asset trong `dist/`; không mở `index.html` trực tiếp bằng `file://`. Không có API game hoặc CDN bắt buộc khi app chạy. Chưa có service worker/offline cache; có thể lưu bản đọc qua In/PDF.

## Vercel

Giữ cấu hình Vercel đã được bổ sung song song: project `neikops-projects/capybara-go-guide`, domain [capybara-go-guide.vercel.app](https://capybara-go-guide.vercel.app). Theo ghi nhận bàn giao deployment trong repo, GitHub Integration tự build production khi push `main`, nhánh khác/PR dùng preview. Migration local chỉ lên production sau khi được commit/push.

`vercel.json` dùng `npx --yes pnpm@8.9.2` cho install/build và phục vụ `dist/`. Ba URL HTML cũ có rewrite riêng vì chúng không còn là file tĩnh. Liên kết CLI `.vercel/` không commit.

## Nguồn và duy trì

Theo [MeowDB](https://meowdb.com/db/capybara-go/), đặc biệt [Whisperer / Elres](https://meowdb.com/db/capybara-go/whisperer-elres-ultimate-build-guide), [Skills DB](https://meowdb.com/db/capybara-go/capybara-go-skills-database), [Gem Farming & Spending](https://meowdb.com/db/capybara-go/gem-farming-spending-guide).

Dữ kiện game có snapshot/ngày riêng. Tier có điều kiện, mô tả trong game có quyền ưu tiên; không mặc định giá, pool hay lịch sự kiện là hiện tại. Bối cảnh tài khoản là lịch sử trao đổi, không tự cập nhật.

Đọc [AGENTS.md](AGENTS.md), [DESIGN.md](DESIGN.md), [PROJECT_MEMORY.md](PROJECT_MEMORY.md) và [runbook](public/docs/GUIDE_MAINTENANCE.md) trước khi sửa. Quy tắc của `AGENTS 2.md` / `README 2.md` từ template đã được hợp nhất vào tài liệu hiện tại.
