# Snapshot nguồn

- `skills-source-2026-09-16.json`: descriptions trích từ [MeowDB Skills Database](https://meowdb.com/db/capybara-go/capybara-go-skills-database) ngày 16/09/2026. Unit tests đối chiếu nguyên vẹn wording với dữ liệu TypeScript; không phải mọi dòng đều thuộc pool Story.
- `pack-summary.csv`: tab Summary tải qua [MeowDB Pack Comparisons](https://meowdb.com/db/capybara-go/pack-comparisons) và [spreadsheet nguồn](https://docs.google.com/spreadsheets/d/1NgwyON_QC9shBvFzNdvlchWr_mQlwgZnpxMcja3ML_s/edit?gid=1822881205#gid=1822881205). Giá/Gem Value/availability là snapshot tham khảo, không phải shop live hoặc gems thực nhận.

Runtime không đọc các file này. Nguồn để sửa nội dung hiện tại là `src/views/Guide/data/`. Khi cập nhật nguồn, ghi ngày/URL/phiên bản và đối chiếu thay đổi thay vì tự diễn đạt lại English description.
