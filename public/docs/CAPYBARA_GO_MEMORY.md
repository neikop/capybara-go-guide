# Capybara Go — memory hướng dẫn toàn game

Ngày rà nguồn: **2026-09-16**. Phiên bản tài liệu: **1.0**.
Nguồn chính: [MeowDB / Capybara Go](https://meowdb.com/db/capybara-go/).

## 1. Phạm vi và hồ sơ người chơi

- Người dùng muốn tổng hợp **toàn bộ mục hướng dẫn Capybara Go trên MeowDB**, có tier ưu tiên cho người **nạp nhẹ**, dễ duy trì về sau.
- Chưa biết ngân sách/tháng, server, chapter, kho đồ, sao adventurer, pet build level hay ưu tiên PvE/PvP. Không mặc định người dùng đang chơi Whisperer hoặc đã chọn build.
- Đây là tài liệu tổng hợp và chỉ mục 51 trang đã rà; không phải bản sao nguyên văn, không đại diện mọi guide trên Internet.
- Đã đọc phần hướng dẫn văn bản của các trang; bảng dữ liệu dài được dùng làm nguồn tra cứu. Chưa duyệt từng bản ghi mở rộng/phân trang của Skills DB (1.133 mục), Gems DB (986 mục), mọi hàng mở rộng relic/collectible; chưa giải mã đầy đủ các tier list dạng ảnh, chạy calculator nhúng hoặc đọc spreadsheet pack comparison bên ngoài.
- Các nguồn mang snapshot khác nhau: relic v1.7, nhiều hệ thống v1.8.x, các build tháng 5–6/2026. Ngày đọc không có nghĩa mọi nội dung đều cập nhật đến ngày đó.
- Quy ước: **Theo nguồn** = nhận định của guide; **Tổng hợp** = đánh giá hiệu quả đầu tư cho nạp nhẹ; **Cần kiểm tra** = thiếu dữ liệu, phụ thuộc phiên bản hoặc nguồn mâu thuẫn.
- Tài liệu này là đầu mối toàn game. Note Whisperer/Elres tạo trước trong cùng task chỉ là tài liệu chuyên biệt, không phải toàn bộ game hay cam kết chọn build của người dùng.

## 2. Tier ưu tiên cho người nạp nhẹ

Đây là **tier đầu tư để tiến triển tài khoản**, không phải bảng sức mạnh tuyệt đối khi mọi món đều tối đa. Trong cùng tier, ưu tiên bộ đã có nhiều nguyên liệu và đúng các điều kiện kích hoạt hơn là đổi build tốn kém.

| Tier đầu tư | Build / hướng | Khi nên chọn | Điều kiện và giới hạn |
|---|---|---|---|
| S — ưu tiên đánh giá đầu tiên | Whisperer → Elres | Đẩy PvE, phát triển combo/crit/dagger và chuyển dần sang SS | Phải ổn định rage; không nâng Elres chỉ vì có thể nâng. Gagarin 2★ là mốc quan trọng |
| S — ưu tiên đánh giá đầu tiên | Skysplitter → Ailoren | Đẩy PvE theo Sword Chi, có lộ trình đầu tư dài hạn | Sát thương chủ lực Skill/Physical/Chi; không xây như Helos. Heaven's Mark và vòng rage rất quan trọng |
| A — tốt khi đủ nền | Reaper → Nashir | Đã theo lightning và đủ vật liệu đạt Mythic | Chỉ chuyển Nashir ở Mythic theo guide; Legendary có thể là bước lùi |
| A — mạnh nhưng cửa vào đắt | Blade of Justice → Helos | Đã có Raphael 5★ và nền Combo DMG/crit ring | Không khuyên tài khoản mới nạp nhẹ chạy theo từ đầu; mạnh đơn mục tiêu, yếu hơn khi cần AoE |
| B — hướng chuyên biệt | Star Staff | Đã có đồ burn/DoT phù hợp, muốn phát triển hướng này | Cần DoT crit và hệ hỗ trợ riêng; nguồn tháng 5/2026 chưa có SS weapon tương ứng |
| Đầu tư sau PvE | Angel Bow → St. Mung | Làm bộ PvP dagger sau khi Elres PvE ổn | Nhiều điều kiện về gear, brand, adventurer và gem; không phải nâng cấp PvE mặc định |
| Đầu tư sau PvE | Durian → Seles; Mushroom Hammer | Chủ đích PvP counter/attrition | Không dùng làm mục tiêu đẩy Story dài hạn. Bộ phòng thủ và Wukong tốn thời gian |
| Chưa đủ cơ sở xếp | Nomad Bow, Shadow Lance, Bishop Staff | Tận dụng đồ đang có hoặc thử nghiệm | Trang Other Weapons còn ghi chú thô/lý thuyết; không đủ để khuyến nghị đổi build lớn |

### Tier dùng tài nguyên

| Ưu tiên | Nên làm | Lý do / điều kiện |
|---|---|---|
| S | Hoàn thiện một bộ PvE; đạt các mốc kích hoạt thực sự của bộ đó | Mở nội dung và tăng nguồn thu có ích hơn chia nhỏ vật liệu cho nhiều bộ |
| S | Hoạt động hằng ngày, 2 vé Dungeon Dive/ngày, giữ quỹ gem cho event | Guide gợi ý giữ khoảng 32k–50k gem; điều chỉnh theo event thực tế và thu nhập tài khoản |
| S | Collectible tăng tài nguyên, set 3★ → 6★ → 10★ | Tạo lợi ích lâu dài; set tính theo món thấp sao nhất |
| A | Lifetime / bỏ quảng cáo nếu chơi lâu; monthly tùy giá và tần suất chơi | Nhóm đáng so sánh trước pack RNG; chưa kiểm giá hiện tại nên chưa khẳng định ROI cụ thể |
| A | Mount/artifact/brand đúng build, mốc thấp có tác dụng rõ | Một bản mở khóa hoặc mốc sao quan trọng thường đáng cân nhắc hơn max món đắt |
| B | Mining/travel/trade privilege theo nhu cầu | Mining phụ thuộc mục tiêu pet build; trade phụ thuộc hoạt động tàu; không phải ai cũng cần mua |
| Để sau | Build PvP thứ hai, SS brand nhiều sao, reroll đẹp tuyệt đối, nâng awakening đồng loạt | Đòi hỏi nhiều nguồn lực; ưu tiên sau khi bộ chính vận hành ổn |

Không có một tier chung đúng cho tất cả pet, brand, mount và artifact: **White Tiger quan trọng với Helos nhưng không đáng cố mua cho Whisperer**; Heaven's Mark quan trọng với Ailoren; Zhanxian A4 đặc biệt quan trọng với dagger.

## 3. Các build và điều kiện chuyển đổi

### Whisperer / Elres

- Combo và weapon crit tạo daggers/rage. Gagarin 2★ là mốc lớn; 5★ tăng giá trị PvP.
- Whisperer tạo +10 rage từ basic/combo/counter; Elres tạo +15 từ weapon crit, tối đa hai lần/turn theo guide. Chuyển SS có thể làm chậm vòng rage.
- Khi dùng Joker Legendary+, có Combo +1 nhưng **không có Rage Dagger và chưa có Sivira Mythic**: guide khuyên chưa đổi Elres. Khi đã giải quyết rage bằng gem/gear phù hợp mới đánh giá đổi.
- Giữ ít nhất một Judgment/Verdan dùng được, không ăn mất chiếc Judgment duy nhất; Sivira là SS gear đầu tiên theo lộ trình guide.
- Ghost cho tiến triển chung; Ranger cho hướng burst PvP muộn. Murloc dùng đến khi đạt 100% combo ở turn 3 không cần nó, hoặc 85% trước Combo Mastery +15%.
- S Vulture Legendary cho thêm combo; Joker Legendary → Mythic; SS brand thường Cleopatra → Wizard → Frankenstein → SS Vulture tùy mục tiêu. Không đem thứ tự này áp cho Helos.
- Unicorn/Slime King đầu game; Ice Queen giữa game; Freya khi weapon crit >85% không tính Crit Mastery; Piggy cần arcana/combo phù hợp.
- CapyGacha theo guide: Diego → Pan Gu → Sphinx → Catastrophe → Spear of Thor → Zhanxian. Diego active; **không ưu tiên awakening Diego**. Zhanxian A4 là mốc awakening trọng tâm.

### Skysplitter / Ailoren

- Combo tạo Sword Chi nhưng damage chủ yếu thuộc Skill/Physical/Chi; Combo DMG không tự động tăng mọi sát thương do combo kích hoạt.
- Ailoren thường là hướng nâng cấp, song cần sửa vòng rage chậm. Joker Legendary+, Zhanxian (ưu tiên A4), Rage Dagger và các skill dagger giúp vòng này.
- Gear gợi ý: Ailoren, Reinhardt; Judgment/Verdan + Skybreaker; Bloody Grail + Ice Soul. Guide có lý do giữ S Grail Mythic thay vì mặc định đổi SS Grail.
- Mốc: Skybreaker A0 → Judgment/Verdan A0 → Ailoren A5 → các mốc ring tiếp theo. Không hiểu A0 là 0★ adventurer.
- Ghost; Diego active; Heaven's Mark là artifact active quan trọng và có hướng lên 5★ sau nền mount/artifact ban đầu.
- Pirate Swordsman → Prince of Sanctuary: không trang bị cả hai. Vulture/Joker hữu ích; Wizard Mythic là mốc đáng chú ý, Wizard thấp rarity chỉ có ích theo nhu cầu crit.
- Leonardo/Dragon Girl ở sao thấp; Dragon Girl 5★ là spike. Michelangelo 10★ và các hybrid đắt là mục tiêu muộn.
- Wheel theo guide có DG 5★ → Bear 1★ → Gagarin 1★ → DG 8★; chỉ áp khi các lựa chọn còn đúng phiên bản và phù hợp kho hiện tại.
- Ưu tiên Spartan Shield đều đặn hơn chờ Marshmallow Cloud khoảng tám tháng. Tránh nâng mọi skill specialization: một số bản nâng Combo Spirit/Rage Proficiency/Rage Combo/Indestructible có thể làm giảm hiệu quả in-battle hoặc pha loãng pool.

### Blade of Justice / Helos

- **Raphael 5★ là điều kiện đầu vào theo guide**. Cần nền Combo DMG và Dragon Ball/Salama Mythic cho crit damage trước khi chuyển Helos.
- Khoảng 80–90% damage thuộc combo theo tác giả; không build như Skill/Rage. Basic DMG và Combo DMG không phải từ đồng nghĩa.
- Skeleton active, mở Ghost để lấy Ghost Princess. Diego active; Twin Blazing Blades active, một bản unlock đã có giá trị; không mặc định đẩy 5★ cho mọi tài khoản.
- Dragon Ball/Salama + Tyr's Smash; giữ crit ring Mythic. Tyr A10 quan trọng hơn việc đuổi Helos A5/A10 hiệu quả thấp.
- White Tiger là core ở đây. Vulture Mythic mạnh; Frankenstein cho PvP; Wizard cần đánh giá rarity và crit đã có.
- Ba hit Raphael không phải ba lần stack Combo Mastery; có thêm cơ hội control. Helos Soul không nhận mọi stun/proc/coefficient như đánh thường.
- Sphinx/Catastrophe cores thường ưu tiên hơn artifact awakening theo guide. Không bỏ qua khả năng AoE kém khi chọn làm bộ đẩy màn.

### Reaper / Nashir

- Chỉ chuyển ở **Nashir Mythic**; bản Legendary có thể kém Reaper đang hoàn chỉnh.
- Rage kích hoạt lightning, nhưng Nashir không gây rage damage thực tế. Rage coefficient/DMG và gem coefficient lightning thông thường không mặc định tăng thunder riêng của Nashir; Daji có tương tác coefficient riêng.
- Ezra là SS ring đầu tiên theo guide; giữ Judgment Mythic, Verdan sau. Forbidden Arcane Tome chủ lực; Calorie Trine khi chưa có nhiều lightning skill; Pan Gu là lựa chọn mở đầu.
- Leonardo ngay 0★ được đánh giá tốt cho PvE; Daji hướng PvP/đa dụng cao hơn nhưng buff chỉ khi biến hình, kết quả còn cần kiểm thử. Không giả định Daji đã có ở wheel hiện tại.
- Sphinx sớm trong CapyGacha; sau đó Diego/Pan Gu/Freya theo nhu cầu. Silly Sorcerer, Thousand-Change Demon Eye, Frankenstein PvP, Wizard; Vulture/Joker có vai trò PvE.

### Angel Bow / St. Mung

- Hướng PvP sau khi bộ Elres PvE ổn, không phải bước nâng PvE bắt buộc.
- Guide yêu cầu nền Mung/Sivira Mythic; Verdan/Joker/Wizard Legendary+; Gagarin 2★ (5★ tốt hơn); Zhanxian A4; Cleopatra/Frankenstein; Ranger ignore dodge và Rage Dagger.
- Nguồn mâu thuẫn về rarity gem tối thiểu: bảng ghi Mythic, đoạn yêu cầu chặt ghi Immortal. Trước khi đổi cần kiểm chứng đúng cấu hình thay vì chọn điều kiện dễ hơn.
- Nhiều daggers tăng Angel Dagger rồi finisher Ilar Angel; hồi phục/shield và damage thụ động giúp PvP. FDR/First Aid Device và Qiankun phù hợp hướng tank.
- Angel coefficient gem có thể kém giá trị do cộng cùng nhóm; không chọn chỉ vì tên trùng weapon.

### Star Staff

- Burn/DoT chuyên biệt; nguồn tháng 5/2026 chưa có SS weapon nâng trực tiếp, không suy ra tình trạng hiện tại của game.
- Xing Tian Axe quan trọng; Skyflame Legendary+ cho PvE; Judgment/Verdan; Ezra để tăng FDR PvP.
- Calorie Trine hợp khi Skill DMG cao, Fire DMG thấp; Xing Tian khi Fire cao và Skill vừa. Nguồn chưa thống nhất hoàn toàn về scaling DoT của Xing Tian.
- Dragon Girl thấp sao/PvE, Donatello PvP; Diego/Sphinx và Ghost có vai trò tùy bộ.
- DoT crit là chỉ số riêng, không thể dùng weapon crit thay thế. Cần tách burn tick với damage của artifact khi tính.

### Durian / Seles và Mushroom Hammer

- Seles là PvP attrition/thorn shield, yếu ở đẩy PvE; Durian là bước tạm. Wukong cao sao là mục tiêu muộn, không giả định đã có 10★.
- Knight; King of the End + Legendary Knight; Mecha Titan/Stone Guardian/Naga Siren/Frankenstein theo guide.
- Julian + Ezra; ưu tiên sống sót bằng FDR, Crit DR, HP, control immunity; Thorn scale counter/coefficient/final, không tự động scale basic/skill.
- Catastrophe active; King Kong/Sphinx/Sea Hero ở deploy. Capytti Veyron A7 là mục tiêu dài hạn có tính xác định hơn theo source, cần kiểm tra thời gian/availability.
- Nạp nhẹ ưu tiên Crit DR thực dụng hơn đua Ignore Crit đắt. Không tháo BDR/SDR/Combo DR khi chưa đủ FDR và net tenacity.
- Chống shield cần phân biệt Ezra/lightning shield-reduction gem với Muramasa/Qiankun; Demonic Eye cần thời gian khởi động.
- Mushroom Hammer cũng theo counter PvP, Wukong/Knight, Dracula, Julian + Ezra/Verdan, Ice Soul + Grande; Muramasa active. Mục relic của guide còn TBD.

### Các weapon khác

- Nomad Bow: hướng combo PvE với Skeleton, Diego/Twin Blades; mức ~600% Combo DMG trong ghi chú là mục tiêu theo cấu hình, không phải điều kiện phổ quát.
- Shadow Lance: hướng counter/light spear/shield, Wukong/Knight.
- Bishop Staff: skill proc/shield/Icy Bubble/Pan Gu/Divine Judgment, Ghost.
- Đây là ghi chú chưa hoàn chỉnh; chưa đủ bằng chứng để xếp ngang guide chi tiết hoặc hứa hiệu quả đổi build.

## 4. Cơ chế dùng chung

- Khung damage theo nguồn: ATK × coefficient × regular × crit × global × final × in-battle. Cộng trong cùng nhóm, nhân giữa các nhóm; kiểm tra tag của từng đòn, không chỉ nhìn animation.
- Regular damage cap được mô tả 1.000% gồm 100% base; crit 500% gồm 200% base, Wizard Mythic có thể lên 700%; supercrit có mức riêng. Đây là giới hạn theo đòn và điều kiện, không phải một chỉ số chung cho cả nhân vật.
- Bảng damage nói Global/Final/In-battle có cap 500/500/1.000%, trong khi prose nói chưa biết cap. **Chưa giải quyết mâu thuẫn này; không khẳng định vô hạn hoặc dùng số đó để tối ưu chắc chắn.**
- DR thông thường có trần hiệu lực ròng 75%, FDR 90% theo source. Chỉ số cần trên gear có thể cao hơn do damage bonus của địch; không dừng mọi loại DR ở 75% một cách máy móc.
- Các mốc tham khảo: Story đầu 75%, về sau cần tới 125%; Gulu tầng 1–8 75%, tầng 16+ 125%; Tower muộn có thể cần 275%. Dungeon còn phụ thuộc modifier.
- Hard Mode có mâu thuẫn mốc/diễn giải giữa trang riêng và trang DR: raw data chương 33 đã có DamageAdd 21%, nên cần khoảng 96% để đạt ròng 75%; chương 62 đạt 50% bonus, tương ứng 125%. Kiểm raw row khi tư vấn một chapter cụ thể.
- Freeze/stun ngăn hành động; paralysis ngăn counter; silence ngăn rage. Ignore control immunity ảnh hưởng proc; một số công thức nguồn còn giả thuyết.
- Poison/burn/bleed theo source lần lượt 20% ATK × tối đa 5 stack × 2 turn; 40% × 10 × 3; 50% × 10 × 3. Poison còn giảm healing. Cần kiểm trait/skill đặc biệt trước khi áp số nền.
- Trigger-rate decay tính theo số kích hoạt **trong round**, reset round; không có nghĩa mọi skill yếu dần chỉ vì trận kéo dài. Rage Dagger skill và gem hồi rage mỗi số daggers là hai thứ khác nhau.
- Shield và Skill Shield khác nhau. Giảm Shield Bonus không tự động khắc chế mọi Skill Shield; kiểm loại shield của mục tiêu.
- Tenacity/penetration chủ yếu PvP; công thức tham khảo Δ/(7.000+Δ): 3k ≈30%, 7k =50%. Source không thống nhất việc crit nằm trong pool, không dùng công thức cho mọi bracket chưa kiểm chứng.
- Aggro theo trọng số (mặc định 100, tối thiểu 1); AoE bỏ qua chọn một mục tiêu. Không suy rộng cơ chế đội sang mọi trận solo/pet.
- Berserk/stance và specialization có nhiều biến thể; kiểm tên và rarity skill trước khi áp mức mất HP, combo count hoặc damage của phiên bản khác.

## 5. Pet, brand, gem, relic và collectibles

### Pet

- Tách bốn khái niệm: summon level, level từng pet, pet build level và arcana. Nguồn có chỗ gọi nhầm summon level thành build level; slot pet mở theo summon level 4/9 trong guide.
- Tỷ lệ roll SS theo build level 6/7/8/9: 2%/5%/12%/25%; SSS ở 8/9: 0,5%/1%. Không đốt nhiều Everstone ở level thấp; thường chờ ít nhất 7, ưu tiên 8+ nếu nhắm SSS.
- Các roll đặc biệt slot 4/5: Brutal crit, Sturdy counter, Fierce combo, Giant pet damage, Mutation pet stats; defensive có Resilience/Agile/Unmovable. Chọn theo build, không có một bộ chung.
- Unlock pet event làm rộng pool trứng; chỉ mở khi cần nếu đang tập trung nâng pet chính.
- Passive và armament có thể cho stats cả khi không equip; đọc đúng mô tả trước khi bỏ qua pet phụ.
- Chiến lược armament chest khác mục tiêu: Helos guide ưu tiên chest 2/4 cho Immortal/gem; Seles guide ưu tiên chest 1, sáu lượt để đi milestone nhanh. Cần xác định mục tiêu trước khi so ROI.

### Gems và skill lựa chọn trong run

- Tra gem theo đúng weapon; Gem DB có commentary riêng Ailoren/Elres, không dùng thứ hạng đó cho Nashir/Helos.
- Rage generation, combo count, control và các modifier đúng loại đòn quan trọng hơn tăng CP thuần. Đạt vòng lặp ổn trước rồi mới tối ưu coefficient.
- Skill tier list của site chủ yếu phục vụ Story; cuối game DPS có thể quan trọng hơn thêm sustain do giới hạn turn.
- Không mở/pick tất cả prerequisite: thêm lựa chọn kém sẽ pha loãng pool Legendary/Mythic. Rage skill của Ailoren thay đổi thứ hạng theo kiểu rage build; Helos còn phụ thuộc sao adventurer.
- Tier list hình ảnh chưa được chép đầy đủ vào tài liệu này. Khi hỏi lựa chọn skill cụ thể, mở đúng hình và đối chiếu Skills DB cùng rarity/specialization hiện tại.

### Relic

- Điểm 0–5 trên site là **ưu tiên leveling chủ quan**, không phải hiệu quả gem đã chuẩn hóa; relic Mythic rất tốn shard.
- Mốc 10★ của bảng v1.7: Holy Grail, Sword of Goujian, Moai được chấm PvE/PvP 5/5; Mask of Tutankhamun, Bianzhong, Mona Lisa 4/4; Galileo 2/5. Chỉ chọn món đúng damage type và mục tiêu.
- Galileo có vai trò phòng thủ PvP; Goujian hợp Chi, Mask/dagger relic hợp dagger, Mona Lisa hợp combo, Bianzhong hợp counter. Không mua cả danh sách chỉ vì điểm cao.
- Relic mới v1.8.x có Spartan Shield, Statue of David, Tutankhamun's Dagger, v.v. Một số vẫn bị ghi “Unreleased” trên bảng v1.7: ưu tiên kiểm bản mới hơn và trong game.
- Không nhầm Holy Grail relic với Bloody Grail equipment hoặc Holy Grail collectible.

### Collectibles

- Set lên theo **món thấp sao nhất**; thường đi 3★ → 6★ → 10★, ưu tiên lợi ích tài nguyên và ATK trước HP/DEF khi đẩy tiến độ.
- Nhóm gold: Treasure Compass, Pot of Treasure, Lucky Four-Leaf Clover, Hungry Eye. Royal Roses cho hồi stamina; Sacred Anvil cho pickaxe; Golden Hourglass tăng capacity khác Horn of Plenty tăng yield.
- Nhiều chỉ số “at cap/conditional” trong DB không phải bonus nhận ngay khi unlock. Tên trùng giữa các hệ thống không có nghĩa cùng một món.
- Chưa dùng các con số kỳ lạ trong bảng (ví dụ Block hàng chục nghìn %, stat 1% hay Sapling 22% so với trang mới 27%) làm số chắc chắn khi lên kế hoạch mua.

## 6. Tiến trình, farm và calculator

- Story là đường mở nội dung: Pet từ chapter 2; mount 4; artifact 6; Gulu/gem khoảng chapter 31; Hard Mode/brands khoảng vượt 50, trang Story ghi 51; skip/Relic khoảng 61, relic thêm điều kiện server 28 ngày; inheritance khoảng 80 và đạt Hero talent.
- Các mốc inheritance II/III/IV/V liên quan mở Story 98/123/148/173 theo source. Kiểm điều kiện hiển thị khi tài khoản bị chặn.
- Story CP skip là điều kiện skip/3★ sau khi đã clear, **không phải CP bắt buộc để thắng bằng tay**.
- Hard Mode có book drop theo nấc; specialization “points” trong raw table là factor của công thức có modifier ẩn, không phải số nhận chính xác mỗi run.
- Stage kết thúc 0/5 có 5 wave nên thường farm nhanh; 4/9 có 8 wave là phương án khi boss quá khó. Yeti ở một số stage đuôi 4 khắc chế đội gây Freeze.
- Các mốc farm 125/135/145/150/155 là gợi ý phổ biến trong nguồn, không mặc định tốt nhất cho mọi tài khoản. Sau 150 HP tăng rất mạnh, cần xét thời gian clear và teammate.
- Gulu mở thêm tầng theo mỗi 10 Story chapter; tầng 25 có bước nhảy HP lớn, sau đó thường thiếu DPS dù đã sống được.
- Dùng calculator Inheritance/Adventurer/Chest/Combo–Crit–Counter–FDR khi có thông số người dùng. Chưa chạy mô phỏng tài khoản trong lần rà này.

## 7. Mount, artifact và các hệ thống muộn

- Phân biệt level upgrade nền, sao của món, awakening A0–A10, active/deploy và sacred slime; đừng gọi chung là “nâng sao”.
- Lộ trình theo guide build đáng tin cho quyết định đầu tư hơn lời khuyên chung “nâng mọi món tới A6” của trang database, vốn chưa chứng minh ROI. Không mặc định Core 30→60 là phần thưởng: cần kiểm ý nghĩa cột/cost trong game.
- Artifact upgrade nền đạt Ignore Dodge 50% ở tier 11 theo bảng; không hiểu đây là giới hạn tổng Ignore Dodge từ mọi nguồn.
- Sacred Slime reference có baseline v1.7.13, các delta tới v1.8.12 còn thiếu transcription. Một số cột base/specialization giảm số hoặc đảo nghĩa giảm damage dealt/taken: phải kiểm in-game trước khi awaken chỉ vì slime.
- Psychic: làm sau nền gear phù hợp; đừng reroll hoàn hảo sớm. FDR có giá trị nhưng pool/band nhiều chỗ chưa chép đủ.
- Polarization/specialization gear/brand là hệ muộn với pool riêng, khác Adventure skill specialization. Không coi stat pool/biên roll của một nhóm là chung cho mọi món.
- Cannon: có 20 tên trong reference, pool theo tên và rarity. Chưa có bảng số đầy đủ trong prose; chỉ nâng món đúng comp, tra bảng nguồn trước khi cam kết vật liệu.
- Homestead: theme có stats hữu ích, tránh đốt quá nhiều tài nguyên sửa affix nhỏ; cần kiểm điều kiện unlock/set trong game.

## 8. Guild, PvP, event và chi tiêu

- Server brackets trong source là snapshot v1.8.4; kiểm grouping live sau merge, không coi là lịch cố định hiện tại.
- Guild Hegemony có điều kiện hoạt động/league những tuần trước và giới hạn join/đổi guild giữa event. Kiểm trước khi chuyển guild để tránh mất quyền tham gia.
- Nguồn Hegemony chung ưu tiên Marshmallow/cosmetic nhưng Ailoren/Helos ưu tiên Spartan Shield có lợi ích đều hơn. Với nạp nhẹ dùng luận cứ của build đang chơi, không ghép hai thứ thành một thứ tự tuyệt đối.
- Trade Privilege theo nguồn thêm 2 tàu/ngày (4→6), thêm refresh và giảm thời gian; chỉ đáng xét nếu tận dụng đều. Reward guild grade/cabin còn thiếu bảng đầy đủ.
- Thu nhập gem ~4k/ngày F2P, ~5k với card trong guide là **ước tính có điều kiện hoạt động/progression**, không phải thu nhập bảo đảm.
- Giữ silver coins cho CapyGacha; tích vật liệu theo Growth event; chỉ mua Black Market khi giảm giá và đúng thứ cần. Đừng dồn tài nguyên cho nhiều hệ cùng lúc.
- Limited chest pity 180 có thể giữ qua banner theo guide. Angel Bow là khuyến nghị của trang tài nguyên chung, Ailoren là khuyến nghị của build riêng: chọn banner theo mục tiêu account.
- Raid Dragon/Phantom thất bại không mất ticket theo nguồn, có thể thử đẩy trước khi sweep; kiểm luật hiện tại khi event/mode thay đổi.
- Không xác nhận lịch event tháng 1–3 trong bài là lịch hiện tại. Không suy ra pack hiện còn bán hoặc reward y nguyên.
- Trang Chests có các offer mô tả “trả gem, nhận lại nhiều gem hơn”, dễ nhầm currency/điều kiện mua; chưa xác minh UI nên **không khuyên mua chỉ dựa bảng đó**.
- Pack comparison chỉ dẫn tới spreadsheet ngoài, chưa đọc dữ liệu. Top-up country có FX/giá biến động, widget giá chưa xác minh; chưa có kết luận quốc gia rẻ nhất hay pack ROI tốt nhất.

## 9. Những điểm phải kiểm chứng trước khi tư vấn mua/nâng

| Vấn đề | Cách xử lý |
|---|---|
| Build có điều kiện rarity/sao | Xem kho thực tế và toàn bộ vòng rage/crit/combo; không chỉ xem đã đủ craft hay chưa |
| “Cap” damage/DR | Xác định loại đòn, mode, bonus địch, patch; giữ riêng các nguồn mâu thuẫn |
| Helos / White Tiger vs Whisperer | Áp theo build; không tạo tier SS brand chung |
| Mung Rage Dagger Mythic vs Immortal | Nguồn không thống nhất, cần kiểm đúng cấu hình trước khi đổi |
| Relic v1.7 “unreleased” vs trang v1.8.x | Kiểm item đã phát hành trong game và star effect mới |
| Sapling 22% vs 27%, collectible Block %, các offer hoàn gem | Chưa dùng số để tính ROI cho đến khi có mô tả in-game đáng tin |
| Qiankun bị xếp ở mục relic nhưng mô tả artifact/awakening | Tra đúng hệ thống trong game, tránh dùng nhầm currency hoặc slot |
| Slime base/awaken khác nghĩa, bảng mount Core | Không suy ra nâng cấp luôn tốt hoặc “đi A6 tất cả” từ prose |
| Daji/Star Staff SS/brand mới và server grouping | Đây là availability theo snapshot, cần kiểm live |
| Other Weapons, Mushroom relic, cannon, psychic | Nhiều nội dung TBD/chưa transcription; không tự điền thông số |

## 10. Danh mục 51 nguồn

Chia thành 12 nhóm tra cứu trong tài liệu này. Mỗi link đã được mở trong lần rà 2026-09-16; mức bao phủ chi tiết tuân theo mục 1.

### A. Build vũ khí — 9

1. [Skysplitter / Ailoren](https://meowdb.com/db/capybara-go/skysplitter-ailoren-ultimate-build-guide)
2. [Whisperer / Elres](https://meowdb.com/db/capybara-go/whisperer-elres-ultimate-build-guide)
3. [Blade of Justice / Helos](https://meowdb.com/db/capybara-go/helos-blade-of-justice-ultimate-build-guide)
4. [Angel Bow / Mung](https://meowdb.com/db/capybara-go/mung-elven-bow-ultimate-build-guide)
5. [Reaper / Nashir](https://meowdb.com/db/capybara-go/reaper-nashir-ultimate-build-guide)
6. [Durian / Seles](https://meowdb.com/db/capybara-go/durian-seles-suffering-ultimate-build-guide)
7. [Star Staff](https://meowdb.com/db/capybara-go/star-staff-ultimate-build-guide)
8. [Mushroom Hammer](https://meowdb.com/db/capybara-go/mushroom-hammer-build-guide)
9. [Other Weapons](https://meowdb.com/db/capybara-go/other-weapons-builds)

### B. Skills — 2

10. [Skills Database](https://meowdb.com/db/capybara-go/capybara-go-skills-database)
11. [Skills Tier List](https://meowdb.com/db/capybara-go/skills-tier-list)

### C. Relic — 1

12. [Relics Tier List](https://meowdb.com/db/capybara-go/relics-tier-list)

### D. Calculator — 4

13. [Inheritance](https://meowdb.com/db/capybara-go/inheritance-calculator)
14. [Adventurer](https://meowdb.com/db/capybara-go/adventurer-calculator)
15. [Chest](https://meowdb.com/db/capybara-go/chest-calculator)
16. [Combo / Crit / Counter / FDR](https://meowdb.com/db/capybara-go/combo-crit-counter-rate-fdr-calculator)

### E. Pet và gem — 2

17. [Pets Leveling and Builds](https://meowdb.com/db/capybara-go/pets-leveling-and-builds-guide)
18. [Gem Tier List / Database](https://meowdb.com/db/capybara-go/capybara-go-gem-tier-list)

### F. PvE và tiến trình — 4

19. [Story Stats](https://meowdb.com/db/capybara-go/story-mode-stats)
20. [Hard Mode Drops / Stats](https://meowdb.com/db/capybara-go/hard-mode-drop-rates-enemy-stats)
21. [Gulu Mine](https://meowdb.com/db/capybara-go/gulu-mine-stats)
22. [CP Skip Requirements](https://meowdb.com/db/capybara-go/combat-power-needed-to-skip-story-and-hard-mode)

### G. Mount, artifact, vật phẩm mới — 5

23. [Mounts](https://meowdb.com/db/capybara-go/mounts-database)
24. [Artifacts](https://meowdb.com/db/capybara-go/artifacts-database)
25. [Sacred Slime](https://meowdb.com/db/capybara-go/sacred-slime-skills)
26. [New Items v1.8.x](https://meowdb.com/db/capybara-go/new-items-reference)
27. [Naval Cannon](https://meowdb.com/db/capybara-go/cannon-stats-reference)

### H. Cơ chế chiến đấu — 8

28. [Crowd Control / DoT](https://meowdb.com/db/capybara-go/crowd-control-damage-over-time-explained)
29. [Damage Attributes](https://meowdb.com/db/capybara-go/damage-attributes-explained)
30. [DR Caps](https://meowdb.com/db/capybara-go/capybara-go-damage-reduction-caps)
31. [Tenacity / Penetration](https://meowdb.com/db/capybara-go/tenacity-and-penetration-armor-break-explained)
32. [Aggro](https://meowdb.com/db/capybara-go/aggro-target-probability-explained)
33. [Stance / Berserk](https://meowdb.com/db/capybara-go/stance-berserk-explained)
34. [Trigger Rate Decay](https://meowdb.com/db/capybara-go/trigger-rate-decay-reference)
35. [Shield Mechanics](https://meowdb.com/db/capybara-go/shield-mechanics-explained)

### I. Collectibles — 2

36. [Collectibles Database](https://meowdb.com/db/capybara-go/collectibles-database)
37. [Collectibles Leveling](https://meowdb.com/db/capybara-go/collectibles-leveling-guide)

### J. Psychic / Polarization — 2

38. [Psychic System](https://meowdb.com/db/capybara-go/psychic-system-guide)
39. [Polarization / Specialization](https://meowdb.com/db/capybara-go/polarization-and-specialization)

### K. PvP, guild và hệ phụ — 7

40. [Server Ranges](https://meowdb.com/db/capybara-go/server-ranges-pvp-modes)
41. [Guild Hegemony](https://meowdb.com/db/capybara-go/guild-hegemony-guide)
42. [Trade Perks / Guild Trade](https://meowdb.com/db/capybara-go/trade-perks-and-guild-trade)
43. [Events Reference](https://meowdb.com/db/capybara-go/events-reference-guide)
44. [Homestead Themes](https://meowdb.com/db/capybara-go/homestead-themes-guide)
45. [Misc Systems](https://meowdb.com/db/capybara-go/misc-systems-reference)
46. [PvP Overview](https://meowdb.com/db/capybara-go/pvp-guide-overview)

### L. Kinh tế / mua sắm — 5

47. [Gem Farming / Spending](https://meowdb.com/db/capybara-go/gem-farming-spending-guide)
48. [Pack Comparisons](https://meowdb.com/db/capybara-go/pack-comparisons) — dữ liệu ở spreadsheet bên ngoài chưa đọc
49. [Chest / Selection Box Catalog](https://meowdb.com/db/capybara-go/chests-and-selection-boxes-catalog)
50. [Top-up Prices by Country](https://meowdb.com/db/capybara-go/capybara-go-top-up-prices-by-country)
51. [Gem Farming / Resource Hub](https://meowdb.com/db/capybara-go/gem-farming-and-resource-hub)

## 11. Quy trình duy trì

1. Khi có câu hỏi mới, đọc mục build/hệ thống tương ứng; dùng link nguồn để kiểm lại thông tin dễ đổi. Không cần đọc lại cả 51 trang cho một câu hỏi nhỏ.
2. Trước khi cá nhân hóa tier mua/nâng, thu thập ngân sách, PvE/PvP, chapter/server, gear rarity/awakening, adventurer sao, brand, pet build/arcana, gem và tài nguyên sẵn có. Không tự điền các mục chưa biết.
3. Khi cập nhật, ghi ngày kiểm, patch của nguồn, điều kiện áp dụng, điểm thay đổi và bằng chứng. Giữ riêng nhận định của guide với kết luận tổng hợp.
4. Nếu hai nguồn khác nhau, ưu tiên mô tả trong game/kiểm thử đúng patch rồi đến guide build mới; lưu mâu thuẫn nếu chưa giải quyết, không lặng lẽ chọn một con số.
5. Trước khi khuyên chi tiền, kiểm giá thật, currency, giới hạn mua, milestone và vật phẩm đã sở hữu; so hiệu quả tăng sức mạnh ở mốc gần nhất, không chỉ tổng phần thưởng lý thuyết.
6. Duy trì file này làm bản chính; memory hệ thống chỉ cần note ngắn trỏ tới đây. Chỉ ghi thêm memory hệ thống khi người dùng yêu cầu.

### Changelog

- **2026-09-16 / v1.0:** Mở rộng phạm vi từ Whisperer/Elres sang toàn mục Capybara Go; lập danh mục 51 trang, tier đầu tư cho nạp nhẹ, các build và cơ chế chính, các giới hạn kiểm chứng và quy trình cập nhật.
