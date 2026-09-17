# Capybara Go — duy trì ứng dụng React

Website dùng Vite + React + TypeScript + Chakra UI. Giao diện và logic thuộc `src/views/Guide`; quy tắc code nằm ở `AGENTS.md` và `DESIGN.md` trong repo.

## Sửa đúng nguồn

- `data/content.ts`: nội dung các mục, lý do, đồ tạm, ghi chú điều kiện, link nguồn và metadata.
- `data/skills.ts`: tên, English description, tier, note, scope, variant. Giữ nguyên wording theo snapshot nguồn.
- `data/sources.ts`: chỉ mục nguồn; không đọc Markdown để sinh danh sách nữa.
- `GuideSection.tsx` / `GuideTable.tsx`: render typed content bằng Chakra components.
- `SkillBrowser/`: URL filters; `GuideSearch/`: tìm kiếm; `DailyChecklist/`: localStorage; `GemBudget.tsx`: form ngân sách.
- `components/theme`: semantic tokens, text styles và recipes. Feature không hardcode màu.
- `docs/sources/`: snapshot dữ liệu gốc. Markdown khác trong thư mục này là tài liệu tham khảo có ngày riêng.

## Chạy và xác minh

Từ root repo, dùng Node.js ≥20.19 và pnpm 8.9.2:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
```

Dev URL: `http://127.0.0.1:8766/`. Build output là `dist/`, dùng `pnpm preview` sau khi dừng dev. Chạy `pnpm chakra-typegen` trước kiểm tra khi thay theme.

Không chỉnh `dist/` bằng tay. Không commit node_modules/dist. Hook pre-commit chạy cùng gate `pnpm check`.

## Nội dung và nguồn

Ghi ngày kiểm và link nguồn; tách snapshot cũ khỏi lịch event live. Tier có điều kiện build; skill/gem, active/deploy, rarity/spec khác nhau. Khi có patch mới, sửa cả dữ liệu chính, snapshot cần thiết, prose ghi số lượng và tests có liên quan. Không thay đổi description chỉ để đẹp câu.

## Runtime

- React Router giữ các mục `#skills`, `#daily`, `#gems`; bộ lọc skill đi trong URL.
- Checklist dùng `capy-guide-daily-v1`, theo ngày địa phương và tiếp tục dữ liệu bản cũ. Không đồng bộ account.
- Tính quỹ gems chỉ là phép trừ; không lưu/gửi số dư.
- `/print` hiển thị đủ guide và skills để lưu PDF. `/components` là thư viện UI của template.
- Host production cần SPA fallback về `index.html`; các URL HTML cũ được redirect trong router.
- App production cần HTML + assets; chưa có service worker/offline cache. Tài liệu Markdown có thể tải riêng.
