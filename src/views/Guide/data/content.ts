import type { GuideContent } from '../types'

export const guideContent: GuideContent = {
  meta: {
    title: 'Capybara Go — Sổ tay nạp nhẹ',
    updated: '17/09/2026',
    version: '3.0',
    focus: 'Whisperer · PvE trước, PvP sau',
  },
  sections: [
    {
      id: 'overview',
      title: 'Bắt đầu từ đây',
      kicker: 'SỔ TAY CAPYBARA GO',
      summary:
        'Một bộ PvE vận hành tốt trước, rồi mới mở rộng sang PvP. Guide dành cho người nạp nhẹ, lấy Whisperer làm hướng chính.',
      blocks: [
        {
          type: 'callout',
          title: 'Ưu tiên tiến độ, không chỉ Combat Power',
          text: 'Ổn định combo → weapon crit → dagger → rage. Chọn nâng cấp theo nguyên nhân thua: chết sớm, thiếu sát thương hay thiếu lượt nộ.',
        },
        {
          type: 'cards',
          items: [
            {
              title: '01 · Hoàn thiện nền',
              text: 'Whisperer + pet bù crit/combo + trang bị giúp sống đến boss. Dùng đồ tạm tốt đang có.',
              target: 'equipment',
            },
            {
              title: '02 · Chọn đúng trong ải',
              text: 'Tra 376 descriptions tiếng Anh, lọc tier và đọc điều kiện. Tier skill ở đây dành cho Whisperer PvE.',
              target: 'skills',
            },
            {
              title: '03 · Giữ tài nguyên',
              text: '2 vé Dungeon Dive/ngày khi mở; xây quỹ gems, chờ đúng banner và mốc thưởng event.',
              target: 'gems',
            },
          ],
        },
        {
          type: 'h',
          text: 'Bối cảnh tài khoản đã cung cấp',
        },
        {
          type: 'p',
          text: 'Lần cập nhật trước: ngày 3, chapter 16, full tím; đã nạp khoảng $100 và mua các gói dạng tháng/quyền lợi; có vé chọn vũ khí và pet đỏ. Đây là mốc lịch sử, không mặc định tài khoản hiện vẫn ở đó hoặc còn đúng $40.',
        },
        {
          type: 'h',
          text: 'Dùng guide như thế nào?',
        },
        {
          type: 'list',
          items: [
            'Mới chơi: đọc Trang bị → Pet → Mount & artifact → Adventurer → Lộ trình 14 ngày.',
            'Kẹt màn: mở Chọn skill, xác định điểm yếu rồi mới so tier.',
            'Chuẩn bị quay/mua: đọc Gems & sự kiện và Nạp tiền trước.',
            'Đã mở hệ mới: tra Hệ thống về sau; chưa mở thì chưa cần bỏ tiền chuẩn bị.',
          ],
        },
        {
          type: 'callout',
          title: 'Phạm vi & độ mới',
          text: 'Tổng hợp các vấn đề đã trao đổi và chỉ mục 51 nguồn MeowDB. Nội dung nền được rà 16/09/2026; gems và adventurer được bổ sung 17/09/2026. Ngày đọc không phải ngày cập nhật game. Giá, pool, mốc mở và lịch event cần đối chiếu trong game.',
        },
      ],
      sources: ['whisperer', 'gems', 'skills'],
    },
    {
      id: 'builds',
      title: 'Tier đầu tư & chọn build',
      kicker: 'ĐỊNH HƯỚNG',
      summary: 'Tier theo hiệu quả đầu tư cho người nạp nhẹ; không phải sức mạnh khi mọi món đều max.',
      blocks: [
        {
          type: 'table',
          headers: ['Ưu tiên', 'Build', 'Phù hợp khi nào / điều kiện'],
          rows: [
            [
              'S · đánh giá trước',
              'Whisperer → Elres',
              'PvE theo combo/crit/dagger. Chuyển Elres chỉ sau khi giải quyết vòng rage.',
            ],
            [
              'S · đánh giá trước',
              'Skysplitter → Ailoren',
              'PvE Sword Chi; cần đúng hỗ trợ Skill/Physical/Chi và vòng rage.',
            ],
            [
              'A · khi đủ nền',
              'Reaper → Nashir',
              'Theo lightning và đủ nền nâng Nashir Mythic; Legendary có thể là bước lùi.',
            ],
            [
              'A · cửa vào đắt',
              'Blade of Justice → Helos',
              'Guide yêu cầu Raphael 5★, nền Combo DMG và crit ring. Không khuyên mới chơi nạp nhẹ chạy theo ngay.',
            ],
            ['B · chuyên biệt', 'Star Staff', 'Đã có bộ Burn/DoT phù hợp; cần hệ hỗ trợ riêng.'],
            [
              'Đầu tư sau',
              'Angel Bow → St. Mung',
              'Bộ PvP dagger khi PvE đã ổn. Không phải hướng thay Whisperer mặc định để đẩy Story.',
            ],
            [
              'Đầu tư sau',
              'Durian → Seles / Mushroom Hammer',
              'PvP chịu đòn, counter; không chọn làm mục tiêu đẩy Story dài hạn.',
            ],
            [
              'Chưa xếp chắc',
              'Nomad Bow / Shadow Lance / Bishop Staff',
              'Tận dụng nếu đã có nền; tài liệu còn ghi chú chưa hoàn chỉnh.',
            ],
          ],
        },
        {
          type: 'callout',
          title: 'Đã chốt Whisperer thì không cần đổi theo bảng',
          text: 'Một bộ đúng các mốc hiệu ứng, có nhiều bản trùng và đủ nguồn rage thường đáng đầu tư hơn một bộ được xếp cao nhưng phải làm lại từ đầu.',
        },
        {
          type: 'h',
          text: 'Thứ tự dùng tài nguyên',
        },
        {
          type: 'list',
          items: [
            'S: một bộ PvE chính + hoạt động mở nguồn thu + quỹ event.',
            'A: mount/artifact/brand đúng build ở mốc có tác dụng rõ; collectible tăng tài nguyên.',
            'Để sau: bộ PvP thứ hai, SS nhiều sao, reroll hoàn hảo, awakening đồng loạt.',
          ],
        },
      ],
      sources: ['whisperer', 'ailoren', 'helos', 'nashir', 'mung'],
    },
    {
      id: 'bows',
      title: 'Hai cây cung · PvE / PvP',
      kicker: 'WHISPERER vs ANGEL BOW',
      summary: 'So cả mục đích sử dụng và chi phí hoàn thiện; không chỉ so tên vũ khí hoặc rarity.',
      blocks: [
        {
          type: 'table',
          headers: ['Tiêu chí', 'Whisperer → Elres', 'Angel Bow → St. Mung'],
          rows: [
            [
              'Hướng phát triển',
              'Combo, weapon crit, dagger và vòng rage; hướng PvE chính đã chọn.',
              'Hướng dagger PvP khi đủ các hệ hỗ trợ.',
            ],
            [
              'PvE đầu game',
              'Ưu tiên cho lộ trình này. Dùng crit/combo để làm bộ hoạt động đều.',
              'Có thể tận dụng nếu đang mạnh hơn, nhưng không cần mở thêm một nhánh đầu tư.',
            ],
            [
              'PvE lâu dài',
              'Đẩy Story, xây combo/dagger/rage; đổi Elres phải kiểm nguồn nộ.',
              'Guide Mung không coi đây là bước nâng PvE bắt buộc.',
            ],
            [
              'PvP sớm',
              'Tham gia lấy thưởng bằng bộ hiện có; hiệu quả phụ thuộc combo và khả năng sống sót.',
              'Không mặc định thắng Whisperer chỉ vì thiên hướng PvP; đồ, sao và đối thủ quyết định.',
            ],
            [
              'PvP về sau',
              'Có hướng combo hoặc burst; cần thích ứng Ignore Combo, dodge, control và FDR.',
              'Có giá trị khi đủ nền Mung/Sivira, Gagarin, brand và gem; chi phí đầu vào cao.',
            ],
            ['Khuyến nghị nạp nhẹ', 'Tiếp tục làm một bộ Whisperer tốt trước.', 'Đánh giá như bộ PvP thứ hai sau này.'],
          ],
        },
        {
          type: 'callout',
          title: 'Không bê điều kiện endgame vào ngày 7',
          text: 'Guide Mung nhắc Mung/Sivira Mythic, Gagarin 2★+, Zhanxian A4 và nhiều brand/gem. Nguồn còn mâu thuẫn rarity tối thiểu của Rage Dagger gem (Mythic/Immortal), nên cần kiểm cấu hình trước khi đổi.',
        },
        {
          type: 'h',
          text: 'PvP cần thay đổi điều gì?',
        },
        {
          type: 'list',
          items: [
            'Sống sót và control quan trọng hơn việc thêm damage không đúng loại.',
            'Nếu địch có Ignore Combo cao, ưu thế combo có thể giảm; mount active cần đổi theo trận.',
            'Tower/PvP không dùng bảng chọn skill Story như một danh sách kỹ năng có thể tự lấy.',
          ],
        },
      ],
      sources: ['whisperer', 'mung'],
    },
    {
      id: 'equipment',
      title: 'Trang bị & đồ thay thế',
      kicker: 'BUILD 7–14 NGÀY',
      summary: 'Mục tiêu là bộ hoạt động được. Chưa cần đủ mọi món S hoặc SS trong hai tuần.',
      blocks: [
        {
          type: 'table',
          headers: ['Ô đồ', 'Mục tiêu', 'Vì sao cần', 'Lựa chọn tạm / thứ hai'],
          rows: [
            [
              'Vũ khí',
              'Whisperer',
              'Nền cho hướng combo/crit/dagger/rage.',
              'Dùng vé chọn nếu pool có Whisperer. Trước đó giữ vũ khí đang giúp vượt ải; không nâng hai nhánh dài hạn.',
            ],
            [
              'Giáp',
              'Revival Cape',
              'Mục tiêu sống sót cho kế hoạch đầu game.',
              'Dragon Breath nếu đã có, hoặc giáp tím đang dùng; so hiệu ứng thực sự mở ở rarity hiện tại.',
            ],
            [
              'Nhẫn 1',
              'Judgment Ring',
              'Mảnh ghép được guide giữ trong lộ trình lâu dài.',
              'Nhẫn hiện có phù hợp damage/crit. Giữ chiếc Judgment đầu tiên, không ăn làm nguyên liệu.',
            ],
            [
              'Nhẫn 2',
              'Nhẫn bù crit / damage đang có',
              'Hoàn thiện chỉ số thiếu mà không phải cố quay full S.',
              'Judgment + non-S ring vẫn là phương án. Chưa biết kho nên không gán một tên tối ưu giả định.',
            ],
            [
              'Phụ kiện 1',
              'Bloody Grail',
              'Bổ sung Skill DMG hữu ích khi nền damage còn thấp.',
              'Món tăng damage đang có; chưa cần mua ngẫu nhiên để săn bằng mọi giá.',
            ],
            [
              'Phụ kiện 2',
              'Icy Bubble',
              'Control giúp giảm áp lực chịu đòn, qua ải ổn hơn.',
              'Phụ kiện sống sót đang có. Nếu đã dư sống và thiếu DPS, cân nhắc Bloody Grail thứ hai khi sở hữu.',
            ],
          ],
        },
        {
          type: 'h',
          text: 'Nâng thế nào?',
        },
        {
          type: 'list',
          items: [
            'Thiếu damage: ưu tiên vũ khí và mốc hiệu ứng tạo khác biệt. Chết sớm: bù giáp/phòng thủ và nguồn hồi.',
            'Đọc trait của đúng rarity; bản tím không có sẵn toàn bộ hiệu ứng của Mythic.',
            'Khóa S gear và món cần cho bộ. Kiểm công thức, nguyên liệu, kết quả trước khi ghép.',
            'Vé chọn có giá trị khi bù đúng mảnh thiếu hoặc bản trùng đủ mốc; màu hộp không nói lên toàn bộ pool.',
          ],
        },
        {
          type: 'callout',
          title: 'Đích về sau, không phải danh sách mua đầu game',
          text: "Lộ trình SS có Sivira's Dagger, Verdan Ring of Judgment và Reinhardt's Resolve. Guide ưu tiên Sivira sớm; riêng đổi Whisperer → Elres phải kiểm vòng rage, không chỉ đủ nguyên liệu.",
        },
      ],
      sources: ['whisperer'],
    },
    {
      id: 'pets',
      title: 'Pet, hộp đỏ & pet build',
      kicker: 'CRIT · COMBO · SỐNG SÓT',
      summary: 'Ưu tiên vai trò còn thiếu. Chỉ dùng số slot tài khoản đã mở.',
      blocks: [
        {
          type: 'table',
          headers: ['Pet', 'Vai trò / lý do', 'Khi ưu tiên', 'Phương án thứ hai'],
          rows: [
            [
              'Unicorn',
              'Bù crit để Whisperer kích hoạt ổn định.',
              'Weapon crit đang thiếu.',
              'Giữ pet hiện có; chưa đổi sang Freya chỉ vì tier cao.',
            ],
            [
              'Slime King',
              'Bù combo/counter cho bộ đánh nhiều lần.',
              'Combo chưa ổn, ít đòn tạo dagger/rage.',
              'Nếu combo đã đủ, dùng slot cho hồi phục hoặc damage khác.',
            ],
            [
              'Little Elephant',
              'Hỗ trợ sống sót.',
              'Chết trước boss hoặc thiếu hồi phục.',
              'Ice Wind Fox khi đã sống ổn và muốn thêm hỗ trợ tấn công.',
            ],
            [
              'Ice Wind Fox',
              'Lựa chọn luân phiên khi đã đủ sống.',
              'Đội có crit/combo nền tốt.',
              'Quay về Elephant nếu thay xong dễ chết hơn.',
            ],
            [
              'Ice Queen',
              'Hướng bổ sung giữa game theo guide.',
              'Đã có nền và mở được pet phù hợp.',
              'Không cần bỏ toàn bộ đội đầu game ngay.',
            ],
            [
              'Freya',
              'Lựa chọn về sau khi không còn lệ thuộc Unicorn.',
              'Guide dùng mốc weapon crit >85% không nhờ Crit Mastery để đánh giá thay.',
              'Tiếp tục Unicorn khi chưa đạt điều kiện.',
            ],
          ],
        },
        {
          type: 'callout',
          title: 'Hộp chọn pet đỏ: xem pool trước',
          text: 'Nếu hộp có Unicorn/Slime King thì bù con còn thiếu. Thiếu cả hai có thể ưu tiên Slime King khi đang thiếu combo, rồi Unicorn. Nếu pool là Ice Queen/Freya hoặc nhóm khác, cần xét lại; không suy từ màu đỏ ra tên pet.',
        },
        {
          type: 'h',
          text: 'Đừng nhầm bốn hệ',
        },
        {
          type: 'table',
          headers: ['Hệ', 'Ý nghĩa / cách dùng'],
          rows: [
            ['Summon level', 'Tiến độ triệu hồi; liên quan slot pet. Không phải level từng pet.'],
            ['Pet level', 'Nâng từng pet để mở hiệu ứng hữu ích; tránh dàn đều toàn bộ kho.'],
            [
              'Pet build',
              'Roll chỉ số bằng Spirit Stones. Chưa đốt Everstone trước build level 7; mục tiêu roll cao còn phụ thuộc level/pool.',
            ],
            [
              'Arcana / armament',
              'Hệ riêng. Đọc điều kiện và passive, kể cả pet không equip; không mua theo màu hiếm đơn thuần.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Pet chính cần đạt mốc hữu ích trước; về sau mới tối ưu passive của pet phụ và roll tốt hơn. Bảng này không phải tier sức mạnh của mọi pet ở mức tối đa.',
        },
      ],
      sources: ['whisperer', 'pets'],
    },
    {
      id: 'mounts',
      title: 'Mount, xe & artifact',
      kicker: 'ACTIVE KHÁC DEPLOY',
      summary: 'Mount đang dùng, slot deploy, sao và awakening là những quyết định khác nhau.',
      blocks: [
        {
          type: 'table',
          headers: ['Món / hệ', 'Dùng khi nào', 'Tại sao / đầu tư', 'Thứ hai hoặc tạm'],
          rows: [
            [
              'Diego · mount',
              'Story, Seal Battle, Guild Raid; PvP sớm nếu còn combo được.',
              'Active tăng combo limit và combo rate, hỗ trợ Combo Mastery và dagger. Không cần ưu tiên awakening Diego chỉ để dùng active.',
              'Mount đang sở hữu có hiệu ứng hữu ích; chưa mua mount khác chỉ để lấp ô.',
            ],
            [
              'Sphinx · mount',
              'Tower, Dungeon Dive, PvP burst.',
              'ATK hữu ích trong trận ngắn, nơi combo chưa kịp tích giá trị. Tower/PvP không cho chọn Combo Mastery như Story.',
              'Dùng mount đã có; Imperial Dragon là lựa chọn được guide nhắc, so sao hiện tại.',
            ],
            [
              'Pan Gu Axe · artifact',
              'Lựa chọn active mở đầu.',
              'Dễ dùng trước khi nền cho artifact chuyên biệt hoàn chỉnh.',
              'Nếu đã có Calorie Trine phù hợp thì có thể hoãn Pan Gu ban đầu.',
            ],
            [
              'Zhanxian Flying Knife · artifact',
              'Mục tiêu dài hạn cho hướng dagger.',
              'A4 là mốc awakening đáng chú ý theo guide; không phải yêu cầu tuần hai.',
              'Tiếp tục Pan Gu/Calorie Trine theo nguồn damage và đồ có sẵn.',
            ],
            [
              'Capytti Veyron · xe/mount',
              'Mục tiêu muộn theo build cụ thể, nổi bật trong guide Seles PvP.',
              'Không thuộc nhóm phải mua cho Whisperer 7–14 ngày đầu.',
              'Giữ tài nguyên cho core Whisperer thay vì mua xe vì CP/ngoại hình.',
            ],
          ],
        },
        {
          type: 'callout',
          title: 'CapyGacha: thứ tự tham khảo cho Whisperer',
          text: 'Diego → Pan Gu Axe → Sphinx → Catastrophe → Spear of Thor → Zhanxian Flying Knife. Có thể bỏ qua Pan Gu ban đầu nếu Calorie Trine đang đáp ứng tốt. Đây là lộ trình tích lũy, không phải danh sách phải lấy đủ trong 14 ngày.',
        },
        {
          type: 'h',
          text: 'Cách chọn active',
        },
        {
          type: 'list',
          items: [
            'Trận dài và combo tích lũy có giá trị: đánh giá Diego trước.',
            'Trận ngắn / cần burst: đánh giá Sphinx trước.',
            'Đọc passive/deploy của món đã có; mở khóa một món không đồng nghĩa phải awaken ngay.',
            'Chỉ dùng coins khi phần thưởng và mốc bảo đảm hợp mục tiêu; kiểm luật giữ lại currency giữa các kỳ.',
          ],
        },
      ],
      sources: ['whisperer', 'mounts', 'artifacts', 'seles'],
    },
    {
      id: 'adventurers',
      title: 'Adventurer & có nên mua Panda?',
      kicker: 'MỐC SAO QUAN TRỌNG HƠN TÊN',
      summary: 'Gagarin là hướng dài hạn cho Whisperer. Panda là lựa chọn bổ sung có điều kiện.',
      blocks: [
        {
          type: 'table',
          headers: ['Lựa chọn', 'Theo guide', 'Áp dụng cho nạp nhẹ'],
          rows: [
            [
              'Leonardo 0–1★',
              'Về pure damage: Leonardo > Gagarin > phần còn lại ở 0–1★.',
              'Nếu đang có và hiệu quả tốt thì dùng; không bắt buộc đổi ngay.',
            ],
            [
              'Gagarin 2★+',
              'Ưu tiên hàng đầu; đòn thường được tính là dagger cho một số tương tác.',
              'Mục tiêu dài hạn từ Big Adventure, không phải yêu cầu phải nạp đủ sao đầu game.',
            ],
            [
              'Gagarin / Leonardo trong PvP',
              'Có thể giữ Leonardo tới giai đoạn Gagarin 5★ nếu vẫn xây được combo; Gagarin có dodge/control immunity từ 5★ theo guide.',
              'So đúng sao và đối thủ, không bê tier pure damage vào mọi trận PvP.',
            ],
            [
              'Panda Hero',
              'Có Drunken Fist được guide đánh giá cao về sống sót/damage; shards dùng sau khi mua mở khóa.',
              'Mua có điều kiện, đứng sau hoàn thiện bộ chính và giữ ngân sách.',
            ],
            [
              'Raphael',
              'Hướng hybrid/Helos với nhiều điều kiện riêng.',
              'Không mua chỉ để gắn vào Whisperer mới chơi.',
            ],
          ],
        },
        {
          type: 'callout',
          title: 'Có nên mua Panda ngay?',
          text: 'Khuyến nghị biên tập: chưa cần mua nếu đang thiếu core gear/pet hoặc quỹ event. Cân nhắc khi giá nằm trong ngân sách riêng, bộ chính đã ổn và bạn xác nhận điều kiện mở synergy. Panda không phải adventurer chính tốt nhất cho Whisperer.',
        },
        {
          type: 'h',
          text: 'Nếu đã mua Panda',
        },
        {
          type: 'list',
          items: [
            'MeowDB nói không mở khóa Panda bằng shards: phải mua nhân vật trước rồi mới dùng shards nâng sao.',
            'Mục Magic Crystal Shop khuyên không đẩy quá 3★ trong hướng đầu tư được mô tả. Đây không phải lời khuyên mua đủ 3★ ngay.',
            'Không mặc định vừa mua là mở toàn bộ cấp Drunken Fist; đọc điều kiện synergy và specialization.',
          ],
        },
        {
          type: 'h',
          text: 'Synergy: không cứ mở thêm là tốt',
        },
        {
          type: 'p',
          text: 'Guide ưu tiên nâng Drunken Fist → Pig Smash → Resonance → War Maniac. Tuy nhiên, thêm synergy làm loãng pool Legendary và giảm cơ hội thấy Combo Mastery trong Story.',
        },
        {
          type: 'table',
          headers: ['Synergy', 'Điều kiện đáng chú ý'],
          rows: [
            ['Drunken Fist', 'Giá trị sống sót/damage cao theo guide khi đã mở.'],
            ['Pig Smash', 'Ưu tiên khi có specialization hoặc cần stun.'],
            ['Resonance', 'Có giá trị khi vòng rage ổn, tăng hướng Rage DMG.'],
            ['War Maniac', 'Guide yêu cầu Lv5 + specialization + Leonardo/Gagarin; không áp đánh giá này cho Lv1.'],
          ],
        },
      ],
      sources: ['whisperer', 'adventurer'],
    },
    {
      id: 'roadmap',
      title: 'Lộ trình 7–14 ngày',
      kicker: 'MỐC TIẾN ĐỘ, KHÔNG PHẢI CUỘC ĐUA CP',
      summary: 'Đi theo nội dung đã mở; không ép chapter, rarity hay số tiền phải tiêu vào một ngày cố định.',
      blocks: [
        {
          type: 'cards',
          items: [
            {
              title: 'Ngày 1–3 · Dựng nền',
              text: 'Chọn một vũ khí chính; tận dụng vé chọn đúng pool. Bù crit/combo bằng pet, đẩy Story/Tower và nhận quyền lợi thẻ.',
            },
            {
              title: 'Ngày 4–7 · Mở nguồn thu',
              text: 'Hoàn thiện các ô đồ còn yếu; dùng stamina đều, làm guild và Dungeon Dive khi mở. Chọn mốc newbie khả thi.',
            },
            {
              title: 'Ngày 8–14 · Tích đúng mục tiêu',
              text: 'Gom bản trùng core, giữ coins cho CapyGacha, chuẩn bị gems cho event. Đánh giá nút thắt và mốc trait gần nhất.',
            },
          ],
        },
        {
          type: 'h',
          text: 'Đến ngày 7: bộ tối thiểu có ích',
        },
        {
          type: 'list',
          items: [
            'Whisperer nếu vé/pool cho phép; chưa cần full S.',
            'Có nguồn crit hoặc combo đáng tin, hướng tới Unicorn + Slime King.',
            'Có giải pháp sống sót: giáp phù hợp, Icy Bubble hoặc hồi phục; không ép toàn damage.',
            'Làm các hoạt động đã mở và mốc newbie có thể lấy; claim trước hạn.',
            'Giữ vật liệu chưa cần dùng ngay cho Growth event, nhưng không tích sạch khiến chưa mở nổi nội dung.',
          ],
        },
        {
          type: 'h',
          text: 'Ngày 8–14: bước tiếp theo',
        },
        {
          type: 'list',
          items: [
            'Ưu tiên mốc trait tiếp theo của gear core; không nâng cả kho cùng lúc.',
            'Mở Gulu thì dùng lượt và đồng đội có sẵn; Rage Dagger/Combo +1 gem là mục tiêu tích lũy.',
            'Bắt đầu quỹ CapyGacha theo Diego → Pan Gu → Sphinx, tùy món thay thế đã có.',
            'Brand/inheritance chưa mở thì bỏ qua; không mua SS trước để chuẩn bị.',
            'Đo tiến bộ bằng nội dung mở thêm, tỷ lệ vượt ải và bộ hoạt động ổn; không đặt yêu cầu full đỏ hoặc Elres.',
          ],
        },
        {
          type: 'h',
          text: 'Khi kẹt chapter',
        },
        {
          type: 'table',
          headers: ['Triệu chứng', 'Thử trước khi mua pack'],
          rows: [
            ['Chết sớm / không tới boss', 'Thêm hồi phục/control/giảm damage; xem pet sống sót, giáp và Icy Bubble.'],
            ['Tới boss còn sống nhưng hết lượt', 'Giảm hồi thừa; tăng ATK, combo/dagger và đúng loại damage.'],
            ['Ít dagger, rage không đều', 'Kiểm crit, combo, nguồn nộ và các đánh đổi của skill.'],
            [
              'CP tăng nhưng vượt ải không tốt hơn',
              'Xem trait thực sự mở và damage type; CP không phản ánh mọi tương tác.',
            ],
          ],
        },
      ],
      sources: ['whisperer', 'story', 'gems'],
    },
    {
      id: 'daily',
      title: 'Checklist hằng ngày',
      kicker: 'THÓI QUEN TẠO TÀI NGUYÊN',
      summary: 'Chỉ làm mục đã mở. Dấu tick lưu trên trình duyệt này theo ngày, tự bắt đầu lại sang ngày mới.',
      blocks: [
        {
          type: 'checklist',
          items: [
            'Nhận quyền lợi thẻ tháng / lifetime / bỏ quảng cáo đã mua.',
            'Nhận AFK, daily / weekly và các lượt miễn phí có ích.',
            'Dùng stamina đều; đẩy Story / Tower khi đủ lực.',
            'Làm guild và các lượt mode đã mở.',
            'Mua 2 Dungeon Dive Challenge Vouchers khi đã mở mode và đi lượt.',
            'Tham gia PvP bằng bộ hiện có để lấy thưởng, tránh đuổi rank bằng mua lượt.',
            'Kiểm hạn nhiệm vụ newbie / event và nhận thưởng trước khi hết.',
            'Xem mốc event: giữ rương / coins / gems theo mục tiêu gần nhất.',
          ],
        },
        {
          type: 'callout',
          title: 'Không có nghĩa phải mua mọi lượt',
          text: '2 vé Dungeon Dive/ngày là ưu tiên được MeowDB nêu. Các lượt mua thêm khác cần so phần thưởng, giá và ngân sách; không áp một công thức cho mọi mode.',
        },
        {
          type: 'p',
          text: 'Checklist dùng ngày địa phương của thiết bị. Nếu trình duyệt chặn lưu trữ, dấu tick vẫn dùng được trong phiên hiện tại.',
        },
      ],
      sources: ['gems'],
    },
    {
      id: 'skills',
      title: 'Chọn skill & tier list',
      kicker: 'TÊN VÀ DESCRIPTION TIẾNG ANH',
      summary: '376 mô tả để tra cứu; tier biên tập cho Whisperer PvE, không giới hạn ngày chơi.',
      blocks: [
        {
          type: 'callout',
          title: 'Cách quyết định nhanh',
          text: 'Chết sớm → hồi phục / phòng thủ / control. Thiếu damage → ATK + combo/dagger. Thiếu rage → bổ sung nguồn nộ. Skill tier S vẫn cần đúng điều kiện của run.',
        },
        {
          type: 'h',
          text: 'Những tên dễ nhầm',
        },
        {
          type: 'table',
          headers: ['Nhóm', 'Nên hiểu thế nào'],
          rows: [
            [
              'ATK vs Basic Attack DMG',
              'ATK có thể tăng nhiều nguồn damage theo ATK; Basic Attack DMG chỉ tác động nhóm đòn tương ứng.',
            ],
            ['Heavy Attack / CRIT Mastery', 'Bù basic/weapon crit; có ích khi Whisperer chưa crit ổn.'],
            [
              'Enhanced Basic Attack / Enhanced Combo',
              'Tăng phần damage tương ứng, không tự tăng mọi dagger được đòn đánh kích hoạt.',
            ],
            [
              'Combo / Combo Spirit vs Combo X2 / X3',
              'Tỷ lệ / số lần combo khác hiệu ứng chỉ kích hoạt khi đạt đủ số combo.',
            ],
            ['Combo Dagger vs Enhanced Combo', 'Thêm dagger khác tăng Combo DMG.'],
            [
              'Dagger Mastery vs Dagger Proficiency',
              'Mastery có đánh đổi trong mô tả; Proficiency hưởng lợi khi có nhiều dagger.',
            ],
            [
              'Spell Master vs Wizard!',
              'Spell Master đổi Basic Attack DMG lấy Skill DMG; Wizard! làm giảm combo/counter.',
            ],
            [
              'Rage Dagger skill vs gem',
              'Hai nguồn khác nhau; không dùng rarity hoặc công thức của gem để mô tả skill.',
            ],
          ],
        },
        {
          type: 'skills',
        },
        {
          type: 'callout',
          title: 'Giới hạn bảng tra cứu',
          text: '282 mô tả Story/nâng cấp, 10 mẫu Synergy Lv1, 84 mô tả thuộc hệ mở sau/nguồn khác. Không phải 376 skill đều ở pool Story. Description giữ nguyên bảng nguồn v1.7; cùng tên có thể nhiều bản, không tự gán rarity/spec. X = chưa đủ dữ kiện hoặc chưa xác nhận pool. Mô tả in-game là căn cứ khi khác nguồn.',
        },
        {
          type: 'p',
          text: 'Bộ lõi thường đáng xem: Combo Mastery + Rage Dagger + Combo Dagger; thêm Healing Dagger/Lifesteal khi thiếu hồi, Dagger Proficiency khi nhiều dao. Fire Dagger/Bolt Dagger có tương tác với mọi dagger theo mô tả, nhưng không có nghĩa nên mở toàn bộ nhánh Fire/Bolt.',
        },
      ],
      sources: ['skills', 'skilltiers', 'whisperer'],
    },
    {
      id: 'gems',
      title: 'Gems, banner & sự kiện',
      kicker: 'TIÊU CÓ MỤC TIÊU',
      summary: 'Giữ quỹ để chạm phần thưởng bảo đảm; vẫn chi cho nguồn tài nguyên hằng ngày có ích.',
      blocks: [
        {
          type: 'table',
          headers: ['Ưu tiên', 'Khoản tiêu / tích', 'Cách áp dụng'],
          rows: [
            [
              'Cao',
              '2 Dungeon Dive Vouchers/ngày',
              'Khi đã mở mode; nguồn Lucky Silver Coins cho CapyGacha, vẫn hữu ích khi kẹt tầng.',
            ],
            ['Cao', 'Quỹ 32.000+ gems', 'Mục tiêu dự trữ theo MeowDB; xây dần, không phải yêu cầu nạp để đủ ngay.'],
            ['Về sau', 'Quỹ 50.000 gems', 'Guide nhắc khoảng 30M power. Không bảo đảm đủ mọi sự kiện.'],
            [
              'Có điều kiện',
              'Limited Secret Chest',
              'Ưu tiên hơn Legendary Treasure Chest cho chi gems kiếm gear; chỉ quay khi pool hợp món thiếu.',
            ],
            [
              'Có điều kiện',
              'Black Market thường',
              'Giảm ≥50% và vật liệu thật sự cần. Không mua trứng/horseshoes mãi chỉ vì sale.',
            ],
            [
              'Có điều kiện',
              'Guild donation',
              'Khi cần phần thưởng Guild Shop hoặc hỗ trợ tiến độ Pet Build Growth; không mua mọi mức một cách tự động.',
            ],
          ],
        },
        {
          type: 'h',
          text: 'Chờ banner nào cho Whisperer?',
        },
        {
          type: 'table',
          headers: ['Banner', 'Lý do quay', 'Điểm đánh đổi'],
          rows: [
            [
              'Angel Bow / Shadow Lance / Blade of Justice',
              'Guide ưu tiên pool phụ kiện như Dragon Breath, Judgment Ring, Bloody Grail.',
              'Không có Whisperer. Hướng nâng vũ khí khác rồi đổi ở Mythic cần Swap Ticket thật sự.',
            ],
            [
              'Whisperer',
              'Lấy trực tiếp bản trùng Whisperer và có Judgment Ring.',
              'Không có Bloody Grail trong pool được guide mô tả.',
            ],
          ],
        },
        {
          type: 'callout',
          title: 'Pity 180 có thể để chưa nhận',
          text: 'Theo guide, mốc chọn S của Limited Secret Chest có thể giữ; banner đổi thì lựa chọn đổi. Thời điểm quay và thời điểm nhận đồ là hai quyết định riêng. Kiểm thanh pity/luật trên tài khoản; không nhầm với Chest Mileage/Growth.',
        },
        {
          type: 'h',
          text: 'Tài nguyên nào để dành?',
        },
        {
          type: 'table',
          headers: ['Nội dung', 'Tài nguyên / hành động', 'Mục tiêu'],
          rows: [
            [
              'Chest Growth',
              'Giữ rương kho thuộc danh sách event tính điểm.',
              'Dùng Chest Calculator để tính cả rương thưởng nối tiếp; không tự coi mọi key/rương đều tính chung.',
            ],
            [
              'CapyGacha',
              'Lucky Silver Coins.',
              'Diego → Pan Gu → Sphinx theo nhu cầu Whisperer; tính mốc bảo đảm trước khi dùng.',
            ],
            [
              'Big Adventure',
              'Giữ gems cho kỳ có mục tiêu phù hợp.',
              'Gagarin là hướng Whisperer; không chọn Dragon Girl chỉ vì bài tiêu gems lấy làm ví dụ.',
            ],
            ['Mystic Sea', 'Gems / currency theo luật event.', 'Arcana đúng build và mốc thực sự đạt được.'],
            [
              'Growth / event khác',
              'Đọc nhiệm vụ tính nhận hay sử dụng tài nguyên.',
              'Không dùng hàng loạt trước khi biết cách tính điểm. Currency giới hạn cần kiểm hạn dùng/carryover.',
            ],
          ],
        },
        {
          type: 'budget',
        },
        {
          type: 'h',
          text: 'Quy tắc chốt chi cho event',
        },
        {
          type: 'list',
          items: [
            'Tính toàn bộ lượt miễn phí còn nhận tới cuối kỳ.',
            'Xác định phần thưởng bảo đảm gần nhất và số lượt thiếu; không dùng xác suất trung bình như pity.',
            'Chỉ bù gems/pack nếu phần thưởng đúng nhu cầu và nằm trong ngân sách.',
            'Bỏ qua mốc đắt hoặc đua rank; không rải ít gems vào mọi event rồi không hoàn thành mục tiêu nào.',
          ],
        },
        {
          type: 'callout',
          title: 'Không có lịch event live trong trang này',
          text: 'Nguồn sự kiện chứa snapshot phiên bản cũ. Hãy dùng lịch, shop, pool và điều khoản hiển thị trên server hiện tại. Thu nhập 4k–5k gems/ngày trong guide là ước tính khi nhiều mode đã mở, không phải bảo đảm cho tài khoản mới.',
        },
      ],
      sources: ['gems', 'events', 'chest', 'whisperer'],
    },
    {
      id: 'money',
      title: 'Nạp tiền sao cho đáng',
      kicker: 'BẢO ĐẢM MỐC HỮU ÍCH',
      summary: 'Sau khi đã mua các gói quyền lợi, không cần tiếp tục nạp chỉ vì đang kẹt một chapter.',
      blocks: [
        {
          type: 'table',
          headers: ['Ưu tiên', 'Khoản mua', 'Chỉ đáng cân nhắc khi'],
          rows: [
            [
              'Đã có: tận dụng',
              'Monthly / lifetime / ad-free',
              'Nhận và sử dụng quyền lợi đều. Không mua trùng/gia hạn chỉ vì tăng CP tức thời.',
            ],
            [
              'Đánh giá trước',
              'Pass / Fund theo tiến trình',
              'Đã hoặc sắp lấy phần lớn reward; đúng vật liệu cần, giá và thời hạn phù hợp.',
            ],
            [
              'Đánh giá trước',
              'Hộp chọn bảo đảm',
              'Pool có món core còn thiếu hoặc đủ bản trùng để qua một mốc hiệu ứng.',
            ],
            [
              'Có điều kiện',
              'Pack event bù mốc',
              'Tính cả lượt free còn lại; mua xong chắc chắn đạt mục tiêu hữu ích.',
            ],
            [
              'Có điều kiện',
              'Panda Hero',
              'Có ngân sách riêng, core ổn và hiểu điều kiện synergy; không phải nghĩa vụ đầu game.',
            ],
            [
              'Ưu tiên thấp',
              'Pack key/trứng ngẫu nhiên',
              'Không mua nối tiếp để đuổi một món; so chi phí đến mốc bảo đảm.',
            ],
            [
              'Hoãn',
              'Reroll hoàn hảo / SS cao / awakening / đua rank',
              'Chưa đáng đặt trước nguồn lực cho bộ chính và quỹ event.',
            ],
          ],
        },
        {
          type: 'callout',
          title: 'Ngân sách đã nói không đồng nghĩa số dư đã xác minh',
          text: 'Bạn đã cho biết nạp khoảng $100 và mua các gói quyền lợi, nhưng chưa xác nhận số dư cuối cùng. Nếu thực sự còn $40, một phương án thận trọng là giữ $25–30 và chỉ cân nhắc tối đa $10–15 cho mục tiêu rõ ràng. Đây là trần đề xuất, không phải kế hoạch phải tiêu.',
        },
        {
          type: 'h',
          text: 'Đọc bảng pack đúng cách',
        },
        {
          type: 'list',
          items: [
            'Gem Value là quy đổi chủ quan gồm vật liệu, không phải toàn bộ gems thật nhận.',
            'Giá trong spreadsheet không phải báo giá shop tài khoản: kiểm currency, thuế, giới hạn và thời hạn.',
            'ROI dài hạn của lifetime/ad-free không phải lợi ích nhận đủ trong 14 ngày.',
            'Pack có tổng value cao nhưng thưởng sai nhu cầu hoặc chưa thể claim vẫn có thể kém một hộp chọn nhỏ.',
          ],
        },
        {
          type: 'h',
          text: 'Trước khi bấm mua',
        },
        {
          type: 'p',
          text: 'Ghi rõ: món nhận chắc chắn → mốc hiệu ứng đạt được → tổng chi phí → tài nguyên còn lại sau mua. Nếu không nói được bốn ý đó, giữ tiền và dùng tài nguyên đang có trước.',
        },
      ],
      sources: ['packs', 'gems', 'whisperer'],
    },
    {
      id: 'progression',
      title: 'Hệ thống mở về sau',
      kicker: 'TRA CỨU KHI CẦN',
      summary: 'Giữ phần này làm định hướng, không biến mọi hệ thành danh sách phải mua trong hai tuần.',
      blocks: [
        {
          type: 'table',
          headers: ['Hệ', 'Hướng đi cho Whisperer / nạp nhẹ', 'Điều kiện & lưu ý'],
          rows: [
            [
              'Gulu / socket gems',
              'Ưu tiên nguồn rage, combo count và hiệu ứng sống sót đúng nhu cầu.',
              'Nguồn nhắc khoảng chapter 31; đối chiếu unlock trong game. Phân biệt gems gắn đồ và gems tiền tệ.',
            ],
            [
              'Heroes / brands',
              'Murloc bù combo; S Vulture Legendary; Joker Legendary → Mythic.',
              'Không bỏ Murloc khi chưa đủ combo. Theo guide cân nhắc bỏ khi đạt 100% ở turn 3 không cần nó, hoặc 85% trước Combo Mastery.',
            ],
            [
              'SS brands',
              'Cleopatra → Wizard → Frankenstein → SS Vulture là hướng tham khảo.',
              'Thứ tự thay đổi theo nhu cầu và rarity; không áp sang Helos.',
            ],
            [
              'Inheritance',
              'Ghost cho tiến triển chung; Ranger cho hướng PvP thích hợp về sau.',
              'Đạt mốc mở mới tính; không phân tán vật liệu vì tên lớp hấp dẫn.',
            ],
            [
              'Collectibles',
              'Ưu tiên tài nguyên và set 3★ → 6★ → 10★.',
              'Set theo món thấp sao nhất. Golden Hourglass capacity khác Horn of Plenty yield.',
            ],
            [
              'Relics',
              'Chọn đúng damage type; đọc riêng unlock / deploy / nâng sao.',
              'Holy Grail relic khác Bloody Grail gear. Bảng relic v1.7 có trạng thái cũ, không xem là availability hiện tại.',
            ],
            [
              'Psychic / polarization',
              'Làm sau nền gear, roll đủ tốt trước.',
              'Không reroll hoàn hảo sớm; pool khác theo hệ và món.',
            ],
            [
              'Guild / Hegemony / trade',
              'Làm lượt hữu ích, gia nhập guild hoạt động.',
              'Kiểm điều kiện tham gia trước khi đổi guild. Trade privilege chỉ có giá trị nếu tận dụng đều.',
            ],
            [
              'Cannon / Homestead / Sacred Slime',
              'Dùng tài nguyên và mô tả thật trong game.',
              'Một số nguồn còn thiếu bảng hoặc mâu thuẫn; chưa có tier đầu tư chắc cho mọi món.',
            ],
          ],
        },
        {
          type: 'h',
          text: 'Trước khi đổi Whisperer sang Elres',
        },
        {
          type: 'list',
          items: [
            'Whisperer và Elres tạo rage khác nhau; SS có thể làm vòng rage chậm hơn.',
            'Guide nêu Mythic Sivira hoặc Rage Dagger gem là các điều kiện hỗ trợ quan trọng; phải xét cả Joker, Combo +1 và cấu hình hiện tại.',
            'Không hiểu Rage Dagger skill nhặt trong run là đã có Rage Dagger gem dùng ổn định cho mọi mode.',
            'Giữ Judgment/Verdan dùng được và kiểm lại trận thực tế sau thay đổi.',
          ],
        },
        {
          type: 'h',
          text: 'Cơ chế cần nhớ',
        },
        {
          type: 'table',
          headers: ['Khái niệm', 'Ý nghĩa thực dụng'],
          rows: [
            ['Damage type', 'Đòn combo kích hoạt dagger không khiến toàn bộ dagger trở thành Combo DMG.'],
            ['Damage Reduction', 'Chỉ số hiệu lực còn chịu bonus địch; không dừng mọi DR tại một con số chung.'],
            ['Control', 'Freeze/stun, paralysis, silence khác nhau; có thể gặp immunity.'],
            [
              'Shield / Skill Shield',
              'Không phải cùng một nhóm; hiệu ứng khắc chế một loại chưa chắc khắc chế loại kia.',
            ],
            ['CP skip', 'Điều kiện bỏ qua sau clear khác CP tối thiểu để thắng bằng tay.'],
            [
              'Nguồn mâu thuẫn',
              'Ưu tiên tooltip/luật trong game và kiểm thử đúng phiên bản; không tự ghép hai số khác nhau thành kết luận chắc.',
            ],
          ],
        },
      ],
      sources: ['whisperer', 'pets', 'collectibles', 'damage', 'dr', 'story'],
    },
    {
      id: 'sources',
      title: 'Nguồn & cách cập nhật',
      kicker: 'TÀI LIỆU CÓ THỂ DUY TRÌ',
      summary: 'Giữ dữ kiện nguồn, khuyến nghị biên tập và điều kiện áp dụng tách biệt.',
      blocks: [
        {
          type: 'callout',
          title: 'Độ bao phủ',
          text: 'Trang tổng hợp các vấn đề đã hỏi, không phải cơ sở dữ liệu toàn bộ game hay tier tuyệt đối cho mọi build. Skill table giữ nguyên 376 descriptions đã trích; 51 trang nguồn được lập chỉ mục để tra sâu.',
        },
        {
          type: 'h',
          text: 'Lịch cập nhật',
        },
        {
          type: 'list',
          items: [
            '16/09/2026: tổng hợp toàn game, kế hoạch đầu game và dữ liệu skills.',
            '17/09/2026: thêm chiến lược gems/banner/event; đối chiếu lại adventurer, Panda, mount và hướng gear; gom thành website.',
          ],
        },
        {
          type: 'h',
          text: 'Khi có patch mới',
        },
        {
          type: 'list',
          items: [
            'Kiểm mục đang ảnh hưởng build: tooltip, rarity, sao, unlock, giá và pool.',
            'Cập nhật phần liên quan cùng ngày kiểm và link nguồn; giữ điểm chưa xác minh nếu còn mâu thuẫn.',
            'Tier là đề xuất có điều kiện, không phải kết quả đo damage trên tài khoản.',
            'Dữ liệu cá nhân ở phần đầu là lịch sử trao đổi; cập nhật khi tiến độ thay đổi.',
          ],
        },
        {
          type: 'downloads',
        },
        {
          type: 'sources',
        },
      ],
      sources: ['whisperer', 'gems'],
    },
  ],
  sources: {
    whisperer: {
      title: 'Whisperer / Elres',
      url: 'https://meowdb.com/db/capybara-go/whisperer-elres-ultimate-build-guide',
    },
    gems: {
      title: 'Gem Farming & Spending',
      url: 'https://meowdb.com/db/capybara-go/gem-farming-spending-guide',
    },
    skills: {
      title: 'Skills Database',
      url: 'https://meowdb.com/db/capybara-go/capybara-go-skills-database',
    },
    skilltiers: {
      title: 'Skills Tier List',
      url: 'https://meowdb.com/db/capybara-go/skills-tier-list',
    },
    ailoren: {
      title: 'Skysplitter / Ailoren',
      url: 'https://meowdb.com/db/capybara-go/skysplitter-ailoren-ultimate-build-guide',
    },
    helos: {
      title: 'Blade of Justice / Helos',
      url: 'https://meowdb.com/db/capybara-go/helos-blade-of-justice-ultimate-build-guide',
    },
    nashir: {
      title: 'Reaper / Nashir',
      url: 'https://meowdb.com/db/capybara-go/reaper-nashir-ultimate-build-guide',
    },
    mung: {
      title: 'Angel Bow / St. Mung',
      url: 'https://meowdb.com/db/capybara-go/mung-elven-bow-ultimate-build-guide',
    },
    seles: {
      title: 'Durian / Seles',
      url: 'https://meowdb.com/db/capybara-go/durian-seles-suffering-ultimate-build-guide',
    },
    pets: {
      title: 'Pets Leveling & Builds',
      url: 'https://meowdb.com/db/capybara-go/pets-leveling-and-builds-guide',
    },
    mounts: {
      title: 'Mounts Database',
      url: 'https://meowdb.com/db/capybara-go/mounts-database',
    },
    artifacts: {
      title: 'Artifacts Database',
      url: 'https://meowdb.com/db/capybara-go/artifacts-database',
    },
    adventurer: {
      title: 'Adventurer Calculator',
      url: 'https://meowdb.com/db/capybara-go/adventurer-calculator',
    },
    story: {
      title: 'Story Stats',
      url: 'https://meowdb.com/db/capybara-go/story-mode-stats',
    },
    events: {
      title: 'Events Reference',
      url: 'https://meowdb.com/db/capybara-go/events-reference-guide',
    },
    chest: {
      title: 'Chest Calculator',
      url: 'https://meowdb.com/db/capybara-go/chest-calculator',
    },
    packs: {
      title: 'Pack Comparisons',
      url: 'https://meowdb.com/db/capybara-go/pack-comparisons',
    },
    collectibles: {
      title: 'Collectibles Leveling',
      url: 'https://meowdb.com/db/capybara-go/collectibles-leveling-guide',
    },
    damage: {
      title: 'Damage Attributes',
      url: 'https://meowdb.com/db/capybara-go/damage-attributes-explained',
    },
    dr: {
      title: 'Damage Reduction',
      url: 'https://meowdb.com/db/capybara-go/capybara-go-damage-reduction-caps',
    },
  },
}
