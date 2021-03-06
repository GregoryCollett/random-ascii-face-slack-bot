var faces = {
  0: "( .-. )",
  1: "( .o.)",
  10: "(¬º-°)¬",
  100: "⊙﹏⊙",
  101: "┌( ಠ_ಠ)┘",
  102: "╚(ಠ_ಠ)=┐",
  103: "◉_◉",
  104: "◔ ⌣ ◔",
  105: "◔̯◔",
  106: "◕‿↼",
  107: "◕‿◕",
  108: "☉_☉",
  109: "☜(⌒▽⌒)☞",
  11: "(¬‿¬)",
  110: "☼.☼",
  111: "♥‿♥",
  112: "⚆ _ ⚆",
  113: "✌(-‿-)✌",
  114: "〆(・∀・＠)",
  115: "ノ( º _ ºノ)",
  116: "ノ( ゜-゜ノ)",
  117: "ヽ( ͝° ͜ʖ͡°)ﾉ",
  118: "ヽ(`Д´)ﾉ",
  119: "ヽ༼° ͟ل͜ ͡°༽ﾉ",
  12: "(°ロ°)☝",
  120: "ヽ༼ʘ̚ل͜ʘ̚༽ﾉ",
  121: "ヽ༼ຈل͜ຈ༽ง",
  122: "ヽ༼ຈل͜ຈ༽ﾉ",
  123: "ヽ༼Ὸل͜ຈ༽ﾉ",
  124: "ヾ(⌐■_■)ノ",
  125: "꒰･◡･๑꒱",
  126: "﴾͡๏̯͡๏﴿",
  127: "｡◕‿◕｡",
  128: "ʕノ◔ϖ◔ʔノ",
  129: "(ノಠ益ಠ)ノ彡┻━┻",
  13: "(´・ω・)っ",
  130: "(╯°□°）╯︵ ┻━┻",
  131: "꒰•̥̥̥̥̥̥̥ ﹏ •̥̥̥̥̥̥̥̥๑꒱",
  132: "ಠ_ರೃ",
  133: "(ू˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ ू)",
  134: "(ꈨຶꎁꈨຶ)۶”",
  135: "(ꐦ°᷄д°᷅)",
  136: "(۶ૈ ۜ ᵒ̌▱๋ᵒ̌ )۶ૈ=͟͟͞͞ ⌨",
  137: "₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛",
  138: "(*ﾟ⚙͠ ∀ ⚙͠)ﾉ❣",
  139: "٩꒰･ัε･ั ꒱۶",
  14: "(ó ì_í)",
  140: "ヘ（。□°）ヘ",
  141: "˓˓(ृ　 ु ॑꒳’)ु(ृ’꒳ ॑ ृ　)ु˒˒˒",
  142: "꒰✘Д✘◍꒱",
  143: "૮( ᵒ̌ૢཪᵒ̌ૢ )ა",
  144: "“ψ(｀∇´)ψ",
  145: "ಠﭛಠ",
  146: "(๑>ᴗ<๑)",
  147: "(۶ꈨຶꎁꈨຶ )۶ʸᵉᵃʰᵎ",
  148: "٩(•̤̀ᵕ•̤́๑)ᵒᵏᵎᵎᵎᵎ",
  149: "(oT-T)尸",
  15: "(ʘᗩʘ')",
  150: "(✌ﾟ∀ﾟ)☞",
  151: "ಥ‿ಥ",
  152: "ॱ॰⋆(˶ॢ‾᷄﹃‾᷅˵ॢ)",
  153: "┬┴┬┴┤  (ಠ├┬┴┬┴",
  154: "( ˘ ³˘)♥",
  155: "Σ (੭ु ຶਊ ຶ)੭ु⁾⁾",
  156: "(⑅ ॣ•͈ᴗ•͈ ॣ)",
  157: "ヾ(´￢｀)ﾉ",
  158: "(•̀o•́)ง",
  159: "(๑•॒̀ ູ॒•́๑)",
  16: "(ʘ‿ʘ)",
  160: "⚈้̤͡ ˌ̫̮ ⚈้̤͡",
  161: "=͟͟͞͞ =͟͟͞͞ ﾍ( ´Д`)ﾉ",
  162: "(((╹д╹;)))",
  163: "•̀.̫•́✧",
  164: "(ᵒ̤̑ ₀̑ ᵒ̤̑)",
  165: "\_(ʘ_ʘ)_/",
  166: "乙(ツ)乙",
  167: "乙(のっの)乙",
  168: "ヾ(¯∇￣๑)",
  169: "\_(ʘ_ʘ)_/",
  17: "(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄",
  170: "༼;´༎ຶ ۝ ༎ຶ༽",
  171: "(▀̿Ĺ̯▀̿ ̿)",
  172: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  173: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)",
  174: "┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴",
  175: "┬┴┬┴┤(･_├┬┴┬┴",
  176: "(͡ ͡° ͜ つ ͡͡°)",
  177: "( ͡°╭͜ʖ╮͡° )",
  178: "(• ε •)",
  179: "[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
  18: "(͡° ͜ʖ ͡°)",
  180: "| (• ◡•)| (❍ᴥ❍ʋ)",
  181: "(◕‿◕✿)",
  182: "(╯°□°)╯︵ ʞooqǝɔɐɟ",
  183: "(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)",
  184: "(づ￣ ³￣)づ",
  185: "(;´༎ຶД༎ຶ`)",
  186: "♪~ ᕕ(ᐛ)ᕗ",
  187: "༼ つ  ͡° ͜ʖ ͡° ༽つ",
  krang: "༼ つ ಥ_ಥ ༽つ",
  189: "ಥ_ಥ",
  19: "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
  190: "( ͡ᵔ ͜ʖ ͡ᵔ )",
  191: "ヾ(⌐■_■)ノ♪",
  192: "~(˘▾˘~)",
  193: "\ (•◡•) /",
  194: "(~˘▾˘)~",
  195: "(._.) ( l: ) ( .-. ) ( :l ) (._.)",
  196: "༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽",
  197: "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻",
  198: "ᕦ(ò_óˇ)ᕤ",
  199: "(•_•) ( •_•)>⌐■-■ (⌐■_■)",
  2: "( `·´ )",
  20: "(ಠ_ಠ)",
  200: "(☞ຈل͜ຈ)☞",
  201: "˙ ͜ʟ˙",
  202: "☜(˚▽˚)☞",
  203: "(｡◕‿◕｡)",
  204: "（╯°□°）╯︵( .o.)",
  205: "(っ˘ڡ˘ς)",
  206: "┬──┬ ノ( ゜-゜ノ)",
  207: "ಠ⌣ಠ",
  208: "( ಠ ͜ʖರೃ)",
  209: "ƪ(˘⌣˘)ʃ",
  21: "(ಠ‿ಠ)",
  210: "¯\(°_o)/¯",
  211: "ლ,ᔑ•ﺪ͟͠•ᔐ.ლ",
  212: "(´・ω・`)",
  213: "(´・ω・)っ由",
  214: "(° ͡ ͜ ͡ʖ ͡ °)",
  215: "Ƹ̵̡Ӝ̵̨̄Ʒ",
  216: "ಠ_ಥ",
  217: "ಠ‿↼",
  218: "(>ლ)",
  219: "(▰˘◡˘▰)",
  22: "(ಠ⌣ಠ)",
  220: "(✿´‿`)",
  221: "◔ ⌣ ◔",
  222: "｡゜(｀Д´)゜｡",
  223: "┬─┬ノ( º _ ºノ)",
  224: "(ó ì_í)=óò=(ì_í ò)",
  225: "(/) (°,,°) (/)",
  226: "┬─┬ ︵ /(.□. ）",
  227: "^̮^",
  228: "(>人<)",
  229: "(~_^)",
  23: "(ಥ_ಥ)",
  230: "(･.◤)",
  231: ">_>",
  232: "(^̮^)",
  233: "=U",
  234: "(｡╹ω╹｡)",
  235: "ლ(╹◡╹ლ)",
  236: "(●´⌓`●)",
  237: "（[∂]ω[∂]）",
  238: "U^ｴ^U",
  239: "(〒ó〒)",
  24: "(ಥ﹏ಥ)",
  240: "(T^T)",
  241: "(íoì)",
  242: "(#•v•#)",
  243: "(•^u^•)",
  244: "!(^3^)!",
  245: "\(°°\”)",
  246: "(°o°:)",
  247: "(° o°)!",
  248: "(oﾛo)!!",
  249: "(òロó)",
  25: "(ง ͠° ͟ل͜ ͡°)ง",
  250: "(ò皿ó)",
  251: "(￣･_______･￣)",
  252: "ヾ(๑╹◡╹)ﾉ'",
  253: "(ლ╹◡╹)ლ",
  254: "（◞‸◟）",
  255: "(✿◖◡◗)",
  256: "(　´･‿･｀)",
  257: "(*｀益´*)がう",
  258: "(ヾﾉ'д'o)ﾅｨﾅｨ",
  259: "❤(◕‿◕✿)",
  26: "(ง ͡ʘ ͜ʖ ͡ʘ)ง",
  260: "(◡‿◡*)❤",
  261: "(o'ω'o)",
  262: "(｡･ˇ_ˇ･｡)ﾑｩ…",
  263: "♬♩♫♪☻(●´∀｀●）☺♪♫♩♬",
  264: "(✿ฺ◕ฺ‿◕ฺ）ｳﾌｯ♥",
  265: "(つД⊂)ｴｰﾝ",
  266: "(つД・)ﾁﾗ",
  267: "(*´ω｀*)",
  268: "(✪‿✪)ノ",
  269: "╲(｡◕‿◕｡)╱",
  27: "(ง •̀_•́)ง",
  270: "ლ(^o^ლ)",
  271: "̿̿ ̿̿ ̿̿ ̿'̿'̵͇̿̿з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿",
  272: "““”̿ ̿ ̿ ̿ ̿’̿’̵͇̿̿з=(•̪●)=ε/̵͇̿̿/̿ ̿ ̿ ̿ ̿’““",
  273: "̿ ̿ ̿'̿'̵͇̿̿з=(•_•)=ε/̵͇̿̿/'̿'̿ ̿",
  274: "°‿‿°",
  275: "ლ(｀ー´ლ)",
  276: "( ﾟ∀ﾟ)ｱﾊﾊ八八ﾉヽﾉヽﾉヽﾉ ＼ / ＼/ ",
  277: "⊂(◉‿◉)つ",
  278: "（ ^_^）o自自o（^_^ ）",
  279: "ε=ε=ε=┌(;*´Д`)ﾉ",
  28: "(ง'̀-'́)ง",
  280: "ᕙ(｀皿´)╯",
  281: "凸(¬‿¬)凸",
  29: "(ง°ل͜°)ง",
  3: "( ° ͜ ʖ °)",
  30: "(ง⌐□ل͜□)ง",
  31: "(ღ˘⌣˘ღ)",
  32: "(ᵔᴥᵔ)",
  33: "(•ω•)",
  34: "(•◡•)/",
  35: "(⊙ω⊙)",
  36: "(⌐■_■)",
  37: "(─‿‿─)",
  38: "(╯°□°）╯",
  39: "(◕‿◕)",
  4: "( ͡° ͜ʖ ͡°)",
  40: "(☞ﾟ∀ﾟ)☞",
  41: "(❍ᴥ❍ʋ)",
  42: "(っ◕‿◕)っ",
  43: "(づ｡◕‿‿◕｡)づ",
  44: "(ノಠ益ಠ)ノ",
  45: "(ノ・∀・)ノ",
  46: "(；一_一)",
  47: "(｀◔ ω ◔´)",
  48: "(｡◕‿‿◕｡)",
  49: "(ﾉ◕ヮ◕)ﾉ",
  5: "( ⚆ _ ⚆ )",
  50: "*<{:¬{D}}}",
  51: "=^.^=",
  52: "t(-.-t)",
  53: "| (• ◡•)|",
  54: "~(˘▾˘~)",
  55: "¬_¬",
  56: "¯(°_o)/¯",
  57: "¯\_(ツ)_/¯",
  58: "°Д°",
  59: "ɳ༼ຈل͜ຈ༽ɲ",
  6: "( ︶︿︶)",
  60: "ʅʕ•ᴥ•ʔʃ",
  61: "ʕ´•ᴥ•`ʔ",
  62: "ʕ•ᴥ•ʔ",
  63: "ʕ◉.◉ʔ",
  64: "ʕㅇ호ㅇʔ",
  65: "ʕ；•`ᴥ•´ʔ",
  66: "ʘ‿ʘ",
  67: "͡° ͜ʖ ͡°",
  68: "ζ༼Ɵ͆ل͜Ɵ͆༽ᶘ",
  69: "Ѱζ༼ᴼل͜ᴼ༽ᶘѰ",
  7: "( ﾟヮﾟ)",
  70: "ب_ب",
  71: "٩◔̯◔۶",
  72: "ಠ_ಠ",
  73: "ಠoಠ",
  74: "ಠ~ಠ",
  75: "ಠ‿ಠ",
  76: "ಠ⌣ಠ",
  77: "ಠ╭╮ಠ",
  78: "ರ_ರ",
  79: "ง ͠° ل͜ °)ง",
  8: "(\/)(°,,,°)(\/)",
  80: "๏̯͡๏﴿",
  81: "༼ ºººººل͟ººººº ༽",
  82: "༼ ºل͟º ༽",
  83: "༼ ºل͟º༼",
  84: "༼ ºل͟º༽",
  85: "༼ ͡■ل͜ ͡■༽",
  86: "༼ つ ◕_◕ ༽つ",
  87: "༼ʘ̚ل͜ʘ̚༽",
  88: "ლ(´ڡ`ლ)",
  89: "ლ(́◉◞౪◟◉‵ლ)",
  9: "(¬_¬)",
  90: "ლ(ಠ益ಠლ)",
  91: "ᄽὁȍ ̪őὀᄿ",
  92: "ᔑ•ﺪ͟͠•ᔐ",
  93: "ᕕ( ᐛ )ᕗ",
  94: "ᕙ(⇀‸↼‶)ᕗ",
  95: "ᕙ༼ຈل͜ຈ༽ᕗ",
  96: "ᶘ ᵒᴥᵒᶅ",
  97: "(ﾉಥ益ಥ）ﾉ",
  98: "≧☉_☉≦",
  99: "⊙▃⊙"
};

module.exports = faces;
