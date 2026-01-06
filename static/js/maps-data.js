const mapRegistry = {
    // Уровень 1: Страна
    "tajikistan": {
        name: "Таджикистан",
        image: "/static/images/maps/country/TajMainMap.avif",
        type: "country",
        children: ["sogd", "khatlon", "gbao", "rrp"]
    },

    // Уровень 2: Области
    "sogd": {
        name: "Согд",
        image: "/static/images/maps/regions/sughdmap.avif",
        type: "region",
        parent: "tajikistan",
        children: ["asht", "ayni", "gafurov", "ghonchi", "isfara", "istaravshan", "konibodom", "mastcho", "matchin", "panjikent", "rasulov", "shahriston", "spitamen", "zafarobod"]
    },

    "khatlon": {
        name: "Хатлон",
        image: "/static/images/maps/regions/KhatlonMap.avif",
        type: "region",
        parent: "tajikistan",
        children: ["baljuvon", "bokhtar", "danghara", "farhor", "hamadoni", "hovaling", "husrav", "jiliqul", "jomi", "kalkhozobod", "khuroson", "kulob", "muminobod", "norak", "panj", "qabodiyon", "qumsangir", "sarband", "shahrituz", "shurobod", "temurmalik", "vakhsh", "vose", "yovon"]
    },

    "rrp": {
        name: "РРП",
        image: "/static/images/maps/regions/rrp.avif",
        type: "region",
        parent: "tajikistan",
        children: ["dushanbe", "fayzobod", "hissor", "jirgatol", "nurobod", "rasht", "roghun", "rudaki", "shahrinav", "tavildara", "tojikobod", "tursunzoda", "vahdat", "varzob"]
    },

    "gbao": {
        name: "ГБАО",
        image: "/static/images/maps/regions/gbao.avif",
        type: "region",
        parent: "tajikistan",
        children: ["darvoz", "ishkoshim", "murghob", "roshtqala", "rushon", "shughnon", "vanj"]
    },


  // Уровень 3: Города

    "asht": {
      name: "Ашт",
      image: "/static/images/maps/cities/sughdasht.avif",
      type: "city",
      parent: "sogd",
      children: ["asht1", "asht2", "asht3", "asht4", "asht5", "asht6", "asht7", "asht8"] // пример районов
    },

    "ayni": {
      name: "Айни",
      image: "/static/images/maps/cities/sughdayni.avif",
      type: "city",
      parent: "sogd",
      children: ["ayni1", "ayni2", "ayni3", "ayni4", "ayni5", "ayni6", "ayni7"]
    },

    "gafurov": {
      name: "Гафуров",
      image: "/static/images/maps/cities/sughdgafurov.avif",
      type: "city",
      parent: "sogd",
      children: ["gafurov1", "gafurov2", "gafurov3", "gafurov4", "gafurov5", "gafurov6", "gafurov7", "gafurov8", "gafurov9", "gafurov10", "gafurov11", "gafurov12"]
    },

    "ghonchi": {
      name: "Гончи",
      image: "/static/images/maps/cities/sughdghonchi.avif",
      type: "city",
      parent: "sogd",
      children: ["ghonchi1", "ghonchi2", "ghonchi3", "ghonchi4", "ghonchi5", "ghonchi6", "ghonchi7", "ghonchi8"]
    },

    "isfara": {
      name: "Исфара",
      image: "/static/images/maps/cities/sughdisfara.avif",
      type: "city",
      parent: "sogd",
      children: ["isfara1", "isfara2", "isfara3", "isfara4", "isfara5", "isfara6", "isfara7", "isfara8", "isfara9"]
    },

    "istaravshan": {
      name: "Истаравшан",
      image: "/static/images/maps/cities/sughdistaravshan.avif",
      type: "city",
      parent: "sogd",
      children: ["istaravshan1", "istaravshan2", "istaravshan3", "istaravshan4", "istaravshan5", "istaravshan6", "istaravshan7", "istaravshan8", "istaravshan9", "istaravshan10"]
    },

    "konibodom": {
      name: "Канибадам",
      image: "/static/images/maps/cities/sughdkonibodom.avif",
      type: "city",
      parent: "sogd",
      children: ["konibodom1", "konibodom2", "konibodom3", "konibodom4", "konibodom5", "konibodom6"]
    },

    "mastcho": {
      name: "Мастчоҳ",
      image: "/static/images/maps/cities/sughdmastcho.avif",
      type: "city",
      parent: "sogd",
      children: ["mastcho1", "mastcho2"]
    },

    "matchin": {
      name: "Матча",
      image: "/static/images/maps/cities/sughdmatchin.avif",
      type: "city",
      parent: "sogd",
      children: ["matchin1", "matchin2", "matchin3", "matchin4"]
    },

    "panjikent": {
      name: "Пенджикент",
      image: "/static/images/maps/cities/sughdpanjikent.avif",
      type: "city",
      parent: "sogd",
      children: ["panjikent1", "panjikent2", "panjikent3", "panjikent4", "panjikent5", "panjikent6", "panjikent7", "panjikent8", "panjikent9", "panjikent10", "panjikent11", "panjikent12", "panjikent13", "panjikent14"]
    },

    "rasulov": {
      name: "Расулов",
      image: "/static/images/maps/cities/sughdrasulov.avif",
      type: "city",
      parent: "sogd",
      children: ["rasulov1", "rasulov2", "rasulov3", "rasulov4", "rasulov5"]
    },

    "shahriston": {
      name: "Шахристан",
      image: "/static/images/maps/cities/sughdshahriston.avif",
      type: "city",
      parent: "sogd",
      children: ["shahriston1", "shahriston2"]
    },

    "spitamen": {
      name: "Спитамен",
      image: "/static/images/maps/cities/sughdspitamen.avif",
      type: "city",
      parent: "sogd",
      children: ["spitamen1", "spitamen2", "spitamen3", "spitamen4", "spitamen5", "spitamen6"]
    },

    "zafarobod": {
      name: "Зафаробод",
      image: "/static/images/maps/cities/sughdzafarobod.avif",
      type: "city",
      parent: "sogd",
      children: ["zafarobod1", "zafarobod2"]
    },

    // Хатлонская область
    "baljuvon": {
      name: "Балҷувон",
      image: "/static/images/maps/cities/khatlonbaljuvon.avif",
      type: "city",
      parent: "khatlon",
      children: ["baljuvon1", "baljuvon2", "baljuvon3", "baljuvon4", "baljuvon5"]
    },

    "bokhtar": {
      name: "Бохтар",
      image: "/static/images/maps/cities/khatlonbokhtar.avif",
      type: "city",
      parent: "khatlon",
      children: ["bokhtar1", "bokhtar2", "bokhtar3", "bokhtar4", "bokhtar5"]
    },

    "danghara": {
      name: "Данғара",
      image: "/static/images/maps/cities/khatlondanghara.avif",
      type: "city",
      parent: "khatlon",
      children: ["danghara1", "danghara2", "danghara3", "danghara4", "danghara5", "danghara6", "danghara7", "danghara8"]
    },

    "farhor": {
      name: "Фархор",
      image: "/static/images/maps/cities/khatlonfarhor.avif",
      type: "city",
      parent: "khatlon",
      children: ["farhor1", "farhor2", "farhor3", "farhor4", "farhor5", "farhor6", "farhor7", "farhor8", "farhor9"]
    },

    "hamadoni": {
      name: "Ҳамадони",
      image: "/static/images/maps/cities/khatlonhamadoni.avif",
      type: "city",
      parent: "khatlon",
      children: ["hamadoni1", "hamadoni2", "hamadoni3", "hamadoni4", "hamadoni5", "hamadoni6", "hamadoni7"]
    },

    "hovaling": {
      name: "Ҳовалинг",
      image: "/static/images/maps/cities/khatlonhovaling.avif",
      type: "city",
      parent: "khatlon",
      children: ["hovaling1", "hovaling2", "hovaling3", "hovaling4", "hovaling5"]
    },

    "husrav": {
      name: "Ҳусрав",
      image: "/static/images/maps/cities/khatlonhusrav.avif",
      type: "city",
      parent: "khatlon",
      children: ["husrav1", "husrav2"]
    },

    "jiliqul": {
      name: "Ҷиликул",
      image: "/static/images/maps/cities/khatlonjiliqul.avif",
      type: "city",
      parent: "khatlon",
      children: ["jiliqul1", "jiliqul2", "jiliqul3", "jiliqul4", "jiliqul5"]
    },

    "jomi": {
      name: "Ҷомӣ",
      image: "/static/images/maps/cities/khatlonjomi.avif",
      type: "city",
      parent: "khatlon",
      children: ["jomi1", "jomi2", "jomi3", "jomi4", "jomi5", "jomi6"]
    },

    "kalkhozobod": {
      name: "Колхозобод",
      image: "/static/images/maps/cities/khatlonkalkhozobod.avif",
      type: "city",
      parent: "khatlon",
      children: ["kalkhozobod1", "kalkhozobod2", "kalkhozobod3", "kalkhozobod4", "kalkhozobod5", "kalkhozobod6"]
    },

    "khuroson": {
      name: "Хуросон",
      image: "/static/images/maps/cities/khatlonkhuroson.avif",
      type: "city",
      parent: "khatlon",
      children: ["khuroson1", "khuroson2", "khuroson3", "khuroson4", "khuroson5"]
    },

    "kulob": {
      name: "Кӯлоб",
      image: "/static/images/maps/cities/khatlonkulob.avif",
      type: "city",
      parent: "khatlon",
      children: ["kulob1", "kulob2", "kulob3", "kulob4"]
    },

    "muminobod": {
      name: "Мӯминобод",
      image: "/static/images/maps/cities/khatlonmuminobod.avif",
      type: "city",
      parent: "khatlon",
      children: ["muminobod1", "muminobod2", "muminobod3", "muminobod4", "muminobod5"]
    },

    "norak": {
      name: "Норак",
      image: "/static/images/maps/cities/khatlonnorak.avif",
      type: "city",
      parent: "khatlon",
      children: ["norak1", "norak2"]
    },

    "panj": {
      name: "Панҷ",
      image: "/static/images/maps/cities/khatlonpanj.avif",
      type: "city",
      parent: "khatlon",
      children: ["panj1", "panj2", "panj3", "panj4", "panj5"]
    },

    "qabodiyon": {
      name: "Қабодиён",
      image: "/static/images/maps/cities/khatlonqabodiyon.avif",
      type: "city",
      parent: "khatlon",
      children: ["qabodiyon1", "qabodiyon2", "qabodiyon3", "qabodiyon4", "qabodiyon5", "qabodiyon6", "qabodiyon7"]
    },

    "qumsangir": {
      name: "Қумсангир",
      image: "/static/images/maps/cities/khatlonqumsangir.avif",
      type: "city",
      parent: "khatlon",
      children: ["qumsangir1", "qumsangir2", "qumsangir3", "qumsangir4", "qumsangir5", "qumsangir6"]
    },

    "sarband": {
      name: "Сарбанд",
      image: "/static/images/maps/cities/khatlonsarband.avif",
      type: "city",
      parent: "khatlon",
      children: ["sarband1", "sarband2"]
    },

    "shahrituz": {
      name: "Шаҳритуз",
      image: "/static/images/maps/cities/khatlonshahrituz.avif",
      type: "city",
      parent: "khatlon",
      children: ["shahrituz1", "shahrituz2", "shahrituz3", "shahrituz4", "shahrituz5"]
    },

    "shurobod": {
      name: "Шӯробод",
      image: "/static/images/maps/cities/khatlonshurobod.avif",
      type: "city",
      parent: "khatlon",
      children: ["shurobod1", "shurobod2", "shurobod3", "shurobod4", "shurobod5", "shurobod6", "shurobod7"]
    },

    "temurmalik": {
      name: "Темурмалик",
      image: "/static/images/maps/cities/khatlontemurmalik.avif",
      type: "city",
      parent: "khatlon",
      children: ["temurmalik1", "temurmalik2", "temurmalik3", "temurmalik4", "temurmalik5", "temurmalik6"]
    },

    "vakhsh": {
      name: "Вахш",
      image: "/static/images/maps/cities/khatlonvakhsh.avif",
      type: "city",
      parent: "khatlon",
      children: ["vakhsh1", "vakhsh2", "vakhsh3", "vakhsh4", "vakhsh5"]
    },

    "vose": {
      name: "Восеъ",
      image: "/static/images/maps/cities/khatlonvose.avif",
      type: "city",
      parent: "khatlon",
      children: ["vose1", "vose2", "vose3", "vose4", "vose5", "vose6", "vose7"]
    },

    "yovon": {
      name: "Ёвон",
      image: "/static/images/maps/cities/khatlonyovon.avif",
      type: "city",
      parent: "khatlon",
      children: ["yovon1", "yovon2", "yovon3", "yovon4", "yovon5", "yovon6", "yovon7"]
    },

    // РРП
    "dushanbe": {
      name: "Душанбе",
      image: "/static/images/maps/cities/rrpdushanbe.avif",
      type: "city",
      parent: "rrp",
      children: ["dushanbe1", "dushanbe2", "dushanbe3", "dushanbe4"]
    },

    "fayzobod": {
      name: "Файзобод",
      image: "/static/images/maps/cities/rrpfayzobod.avif",
      type: "city",
      parent: "rrp",
      children: ["fayzobod1", "fayzobod2", "fayzobod3", "fayzobod4", "fayzobod5", "fayzobod6", "fayzobod7"]
    },

    "hissor": {
      name: "Ҳисор",
      image: "/static/images/maps/cities/rrphissor.avif",
      type: "city",
      parent: "rrp",
      children: ["hissor1", "hissor2", "hissor3", "hissor4", "hissor5", "hissor6", "hissor7", "hissor8", "hissor9"]
    },

    "jirgatol": {
      name: "Лахш",
      image: "/static/images/maps/cities/rrpjirgatol.avif",
      type: "city",
      parent: "rrp",
      children: ["jirgatol1", "jirgatol2", "jirgatol3", "jirgatol4", "jirgatol5", "jirgatol6", "jirgatol7", "jirgatol8"]
    },

    "nurobod": {
      name: "Нуробод",
      image: "/static/images/maps/cities/rrpnurobod.avif",
      type: "city",
      parent: "rrp",
      children: ["nurobod1", "nurobod2", "nurobod3", "nurobod4", "nurobod5", "nurobod6"]
    },

    "rasht": {
      name: "Рашт",
      image: "/static/images/maps/cities/rrprasht.avif",
      type: "city",
      parent: "rrp",
      children: ["rasht1", "rasht2", "rasht3", "rasht4", "rasht5", "rasht6", "rasht7", "rasht8", "rasht9", "rasht10", "rasht11"]
    },

    "roghun": {
      name: "Роғун",
      image: "/static/images/maps/cities/rrproghun.avif",
      type: "city",
      parent: "rrp",
      children: ["roghun1", "roghun2"]
    },

    "rudaki": {
      name: "Рӯдакӣ",
      image: "/static/images/maps/cities/rrprudaki.avif",
      type: "city",
      parent: "rrp",
      children: ["rudaki1", "rudaki2", "rudaki3", "rudaki4", "rudaki5", "rudaki6", "rudaki7", "rudaki8", "rudaki9", "rudaki10"]
    },

    "shahrinav": {
      name: "Шаҳринав",
      image: "/static/images/maps/cities/rrpshahrinav.avif",
      type: "city",
      parent: "rrp",
      children: ["shahrinav1", "shahrinav2", "shahrinav3", "shahrinav4", "shahrinav5", "shahrinav6", "shahrinav7"]
    },

    "tavildara": {
      name: "Тавилдара",
      image: "/static/images/maps/cities/rrptavildara.avif",
      type: "city",
      parent: "rrp",
      children: ["tavildara1", "tavildara2", "tavildara3"]
    },

    "tojikobod": {
      name: "Тоҷикобод",
      image: "/static/images/maps/cities/rrptojikobod.avif",
      type: "city",
      parent: "rrp",
      children: ["tojikobod1", "tojikobod2", "tojikobod3", "tojikobod4", "tojikobod5"]
    },

    "tursunzoda": {
      name: "Турсунзода",
      image: "/static/images/maps/cities/rrptursunzoda.avif",
      type: "city",
      parent: "rrp",
      children: ["tursunzoda1", "tursunzoda2", "tursunzoda3", "tursunzoda4", "tursunzoda5", "tursunzoda6", "tursunzoda7", "tursunzoda8"]
    },

    "vahdat": {
      name: "Ваҳдат",
      image: "/static/images/maps/cities/rrpvahdat.avif",
      type: "city",
      parent: "rrp",
      children: ["vahdat1", "vahdat2", "vahdat3", "vahdat4", "vahdat5", "vahdat6", "vahdat7", "vahdat8", "vahdat9", "vahdat10"]
    },

    "varzob": {
      name: "Варзоб",
      image: "/static/images/maps/cities/rrpvarzob.avif",
      type: "city",
      parent: "rrp",
      children: ["varzob1", "varzob2", "varzob3", "varzob4", "varzob5", "varzob6"]
    },

    // ГБАО
    "darvoz": {
      name: "Дарвоз",
      image: "/static/images/maps/cities/gbao-darvoz.avif",
      type: "city",
      parent: "gbao",
      children: ["darvoz1", "darvoz2", "darvoz3", "darvoz4"]
    },

    "ishkoshim": {
      name: "Ишкошим",
      image: "/static/images/maps/cities/gbaoishkoshim.avif",
      type: "city",
      parent: "gbao",
      children: ["ishkoshim1", "ishkoshim2", "ishkoshim3", "ishkoshim4", "ishkoshim5", "ishkoshim6"]
    },

    "murghob": {
      name: "Мурғоб",
      image: "/static/images/maps/cities/gbaomurghob.avif",
      type: "city",
      parent: "gbao",
      children: ["murghob1", "murghob2", "murghob3", "murghob4", "murghob5", "murghob6"]
    },

    "roshtqala": {
      name: "Роштқалъа",
      image: "/static/images/maps/cities/gbaoroshtqala.avif",
      type: "city",
      parent: "gbao",
      children: ["roshtqala1", "roshtqala2", "roshtqala3", "roshtqala4", "roshtqala5", "roshtqala6"]
    },

    "rushon": {
      name: "Рушон",
      image: "/static/images/maps/cities/gbaorushon.avif",
      type: "city",
      parent: "gbao",
      children: ["rushon1", "rushon2", "rushon3", "rushon4", "rushon5", "rushon6", "rushon7"]
    },

    "shughnon": {
      name: "Шуғнон",
      image: "/static/images/maps/cities/gbaoshughnon.avif",
      type: "city",
      parent: "gbao",
      children: ["shughnon1", "shughnon2", "shughnon3", "shughnon4", "shughnon5", "shughnon6", "shughnon7"]
    },

    "vanj": {
      name: "Ванҷ",
      image: "/static/images/maps/cities/gbaovanj.avif",
      type: "city",
      parent: "gbao",
      children: ["vanj1", "vanj2", "vanj3", "vanj4", "vanj5", "vanj6"]
    },



    // Уровень 4: Районы (джamoаты) - Полная структура

    // Согдийская область
    "asht1": { name: "ҷ. Понғоз", image: "/static/images/maps/districts/sughdasht1.avif", type: "district", parent: "asht" },
    "asht2": { name: "ҷ. Меҳробод", image: "/static/images/maps/districts/sughdasht2.avif", type: "district", parent: "asht" },
    "asht3": { name: "ҷ. Ошоба", image: "/static/images/maps/districts/sughdasht3.avif", type: "district", parent: "asht" },
    "asht4": { name: "ҷ. Ашт", image: "/static/images/maps/districts/sughdasht4.avif", type: "district", parent: "asht" },
    "asht5": { name: "ҷ. Пунук", image: "/static/images/maps/districts/sughdasht5.avif", type: "district", parent: "asht" },
    "asht6": { name: "ҷ. Шодоба", image: "/static/images/maps/districts/sughdasht6.avif", type: "district", parent: "asht" },
    "asht7": { name: "ҷ. Ориён", image: "/static/images/maps/districts/sughdasht7.avif", type: "district", parent: "asht" },
    "asht8": { name: "ҷ. Ифтихор", image: "/static/images/maps/districts/sughdasht8.avif", type: "district", parent: "asht" },

    "ayni1": { name: "ҷ. Урметан", image: "/static/images/maps/districts/sughdayni1.avif", type: "district", parent: "ayni" },
    "ayni2": { name: "ҷ. Дар-Дар", image: "/static/images/maps/districts/sughdayni2.avif", type: "district", parent: "ayni" },
    "ayni3": { name: "ҷ. Айни", image: "/static/images/maps/districts/sughdayni3.avif", type: "district", parent: "ayni" },
    "ayni4": { name: "ҷ. Рарз", image: "/static/images/maps/districts/sughdayni4.avif", type: "district", parent: "ayni" },
    "ayni5": { name: "ҷ. Рарз", image: "/static/images/maps/districts/sughdayni5.avif", type: "district", parent: "ayni" },
    "ayni6": { name: "ҷ. Фондарё", image: "/static/images/maps/districts/sughdayni6.avif", type: "district", parent: "ayni" },
    "ayni7": { name: "ҷ. Анзоб", image: "/static/images/maps/districts/sughdayni7.avif", type: "district", parent: "ayni" },

    "gafurov1": { name: "ҷ. Чашмасор", image: "/static/images/maps/districts/sughdgafurov1.avif", type: "district", parent: "gafurov" },
    "gafurov2": { name: "ҷ. Ёва", image: "/static/images/maps/districts/sughdgafurov2.avif", type: "district", parent: "gafurov" },
    "gafurov3": { name: "ҷ. Д.Холматов", image: "/static/images/maps/districts/sughdgafurov3.avif", type: "district", parent: "gafurov" },
    "gafurov4": { name: "ҷ. Исмоил", image: "/static/images/maps/districts/sughdgafurov4.avif", type: "district", parent: "gafurov" },
    "gafurov5": { name: "ҷ. Овчқалъа", image: "/static/images/maps/districts/sughdgafurov5.avif", type: "district", parent: "gafurov" },
    "gafurov6": { name: "ҷ. Гозиён", image: "/static/images/maps/districts/sughdgafurov6.avif", type: "district", parent: "gafurov" },
    "gafurov7": { name: "ҷ. Ҳ.Усмонов", image: "/static/images/maps/districts/sughdgafurov7.avif", type: "district", parent: "gafurov" },
    "gafurov8": { name: "ш. Хуҷанд", image: "/static/images/maps/districts/sughdgafurov8.avif", type: "district", parent: "gafurov" },
    "gafurov9": { name: "ҷ. Исфара", image: "/static/images/maps/districts/sughdgafurov9.avif", type: "district", parent: "gafurov" },
    "gafurov10": { name: "ҷ. Зарзамин", image: "/static/images/maps/districts/sughdgafurov10.avif", type: "district", parent: "gafurov" },
    "gafurov11": { name: "ш. Ғафуров", image: "/static/images/maps/districts/sughdgafurov11.avif", type: "district", parent: "gafurov" },
    "gafurov12": { name: "ҷ. Хистеварз", image: "/static/images/maps/districts/sughdgafurov12.avif", type: "district", parent: "gafurov" },

    "ghonchi1": { name: "ҷ. Яхтан", image: "/static/images/maps/districts/sughdghonchi1.avif", type: "district", parent: "ghonchi" },
    "ghonchi2": { name: "ҷ. Ғончӣ", image: "/static/images/maps/districts/sughdghonchi2.avif", type: "district", parent: "ghonchi" },
    "ghonchi3": { name: "ҷ. Муҷун", image: "/static/images/maps/districts/sughdghonchi3.avif", type: "district", parent: "ghonchi" },
    "ghonchi4": { name: "ҷ. Ғазантарак", image: "/static/images/maps/districts/sughdghonchi4.avif", type: "district", parent: "ghonchi" },
    "ghonchi5": { name: "ҷ. Далёни Боло", image: "/static/images/maps/districts/sughdghonchi5.avif", type: "district", parent: "ghonchi" },
    "ghonchi6": { name: "ҷ. Ваҳдат", image: "/static/images/maps/districts/sughdghonchi6.avif", type: "district", parent: "ghonchi" },
    "ghonchi7": { name: "ҷ. И.Сомонӣ", image: "/static/images/maps/districts/sughdghonchi7.avif", type: "district", parent: "ghonchi" },
    "ghonchi8": { name: "ҷ. Росровут", image: "/static/images/maps/districts/sughdghonchi8.avif", type: "district", parent: "ghonchi" },

    "isfara1": { name: "ҷ. Навгилем", image: "/static/images/maps/districts/sughdisfara1.avif", type: "district", parent: "isfara" },
    "isfara2": { name: "ҷ. Хонобод", image: "/static/images/maps/districts/sughdisfara2.avif", type: "district", parent: "isfara" },
    "isfara3": { name: "ҷ. Зумрад", image: "/static/images/maps/districts/sughdisfara3.avif", type: "district", parent: "isfara" },
    "isfara4": { name: "ҷ. Кӯлканд", image: "/static/images/maps/districts/sughdisfara4.avif", type: "district", parent: "isfara" },
    "isfara5": { name: "ҷ. Чилгазӣ", image: "/static/images/maps/districts/sughdisfara5.avif", type: "district", parent: "isfara" },
    "isfara6": { name: "ҷ. Лаккон", image: "/static/images/maps/districts/sughdisfara6.avif", type: "district", parent: "isfara" },
    "isfara7": { name: "ҷ. Сурх", image: "/static/images/maps/districts/sughdisfara7.avif", type: "district", parent: "isfara" },
    "isfara8": { name: "ҷ. Чоркӯҳ", image: "/static/images/maps/districts/sughdisfara8.avif", type: "district", parent: "isfara" },
    "isfara9": { name: "ҷ. Ворух", image: "/static/images/maps/districts/sughdisfara9.avif", type: "district", parent: "isfara" },

    "istaravshan1": { name: "ҷ. Ниҷонӣ", image: "/static/images/maps/districts/sughdistaravshan1.avif", type: "district", parent: "istaravshan" },
    "istaravshan2": { name: "ҷ. Сабристон", image: "/static/images/maps/districts/sughdistaravshan2.avif", type: "district", parent: "istaravshan" },
    "istaravshan3": { name: "ҷ. Ҷавқандақ", image: "/static/images/maps/districts/sughdistaravshan3.avif", type: "district", parent: "istaravshan" },
    "istaravshan4": { name: "ҷ. Гули Сурх", image: "/static/images/maps/districts/sughdistaravshan4.avif", type: "district", parent: "istaravshan" },
    "istaravshan5": { name: "ҷ. Пошкент", image: "/static/images/maps/districts/sughdistaravshan5.avif", type: "district", parent: "istaravshan" },
    "istaravshan6": { name: "ҷ. Нофароҷ", image: "/static/images/maps/districts/sughdistaravshan6.avif", type: "district", parent: "istaravshan" },
    "istaravshan7": { name: "ҷ. Зарҳалол", image: "/static/images/maps/districts/sughdistaravshan7.avif", type: "district", parent: "istaravshan" },
    "istaravshan8": { name: "ҷ. Қалъачаи Калон", image: "/static/images/maps/districts/sughdistaravshan8.avif", type: "district", parent: "istaravshan" },
    "istaravshan9": { name: "ҷ. Қалъаи Баланд", image: "/static/images/maps/districts/sughdistaravshan9.avif", type: "district", parent: "istaravshan" },
    "istaravshan10": { name: "ҷ. Чорбоғ", image: "/static/images/maps/districts/sughdistaravshan10.avif", type: "district", parent: "istaravshan" },

    "konibodom1": { name: "ҷ. Патар", image: "/static/images/maps/districts/sughdkonibodom1.avif", type: "district", parent: "konibodom" },
    "konibodom2": { name: "ҷ. Пӯлодон", image: "/static/images/maps/districts/sughdkonibodom2.avif", type: "district", parent: "konibodom" },
    "konibodom3": { name: "ҷ. Фирӯзоба", image: "/static/images/maps/districts/sughdkonibodom3.avif", type: "district", parent: "konibodom" },
    "konibodom4": { name: "ҷ. Р.Ҳамробоев", image: "/static/images/maps/districts/sughdkonibodom4.avif", type: "district", parent: "konibodom" },
    "konibodom5": { name: "ҷ. Куҳандиёр", image: "/static/images/maps/districts/sughdkonibodom5.avif", type: "district", parent: "konibodom" },
    "konibodom6": { name: "ҷ. Лоҳутӣ", image: "/static/images/maps/districts/sughdkonibodom6.avif", type: "district", parent: "konibodom" },

    "mastcho1": { name: "ҷ. Иван-Тоҷик", image: "/static/images/maps/districts/sughdmastcho1.avif", type: "district", parent: "mastcho" },
    "mastcho2": { name: "ҷ. Лангар", image: "/static/images/maps/districts/sughdmastcho2.avif", type: "district", parent: "mastcho" },

    "matchin1": { name: "ҷ. Навбаҳор", image: "/static/images/maps/districts/sughdmatchin1.avif", type: "district", parent: "matchin" },
    "matchin2": { name: "ҷ. Палдорак", image: "/static/images/maps/districts/sughdmatchin2.avif", type: "district", parent: "matchin" },
    "matchin3": { name: "ҷ. Оббурдон", image: "/static/images/maps/districts/sughdmatchin3.avif", type: "district", parent: "matchin" },
    "matchin4": { name: "ҷ. Мастчоҳ", image: "/static/images/maps/districts/sughdmatchin4.avif", type: "district", parent: "matchin" },

    "panjikent1": { name: "ҷ. Хурми", image: "/static/images/maps/districts/sughdpanjikent1.avif", type: "district", parent: "panjikent" },
    "panjikent2": { name: "ҷ. Чинор", image: "/static/images/maps/districts/sughdpanjikent2.avif", type: "district", parent: "panjikent" },
    "panjikent3": { name: "ҷ. Саразм", image: "/static/images/maps/districts/sughdpanjikent3.avif", type: "district", parent: "panjikent" },
    "panjikent4": { name: "ҷ. Ҳ.Ҳасан", image: "/static/images/maps/districts/sughdpanjikent4.avif", type: "district", parent: "panjikent" },
    "panjikent5": { name: "ҷ. Амондара", image: "/static/images/maps/districts/sughdpanjikent5.avif", type: "district", parent: "panjikent" },
    "panjikent6": { name: "ҷ. Ёри", image: "/static/images/maps/districts/sughdpanjikent6.avif", type: "district", parent: "panjikent" },
    "panjikent7": { name: "ҷ. Сучина", image: "/static/images/maps/districts/sughdpanjikent7.avif", type: "district", parent: "panjikent" },
    "panjikent8": { name: "ҷ. Косатарош", image: "/static/images/maps/districts/sughdpanjikent8.avif", type: "district", parent: "panjikent" },
    "panjikent9": { name: "ҷ. Л.Шерали", image: "/static/images/maps/districts/sughdpanjikent9.avif", type: "district", parent: "panjikent" },
    "panjikent10": { name: "ҷ. Рӯдакӣ", image: "/static/images/maps/districts/sughdpanjikent10.avif", type: "district", parent: "panjikent" },
    "panjikent11": { name: "ҷ. Фароб", image: "/static/images/maps/districts/sughdpanjikent11.avif", type: "district", parent: "panjikent" },
    "panjikent12": { name: "ҷ. Моғиён", image: "/static/images/maps/districts/sughdpanjikent12.avif", type: "district", parent: "panjikent" },
    "panjikent13": { name: "ҷ. Шинг", image: "/static/images/maps/districts/sughdpanjikent13.avif", type: "district", parent: "panjikent" },
    "panjikent14": { name: "ҷ. Вору", image: "/static/images/maps/districts/sughdpanjikent14.avif", type: "district", parent: "panjikent" },

    "rasulov1": { name: "ҷ. Ғӯлакандоз", image: "/static/images/maps/districts/sughdrasulov1.avif", type: "district", parent: "rasulov" },
    "rasulov2": { name: "ҷ. Деҳмой", image: "/static/images/maps/districts/sughdrasulov2.avif", type: "district", parent: "rasulov" },
    "rasulov3": { name: "ҷ. Гулхона", image: "/static/images/maps/districts/sughdrasulov3.avif", type: "district", parent: "rasulov" },
    "rasulov4": { name: "ҷ. Сомониён", image: "/static/images/maps/districts/sughdrasulov4.avif", type: "district", parent: "rasulov" },
    "rasulov5": { name: "ҷ. Ҳаёти Нав", image: "/static/images/maps/districts/sughdrasulov5.avif", type: "district", parent: "rasulov" },

    "shahriston1": { name: "ҷ. Бунҷикат", image: "/static/images/maps/districts/sughdshahriston1.avif", type: "district", parent: "shahriston" },
    "shahriston2": { name: "ҷ. Шаҳристон", image: "/static/images/maps/districts/sughdshahriston2.avif", type: "district", parent: "shahriston" },

    "spitamen1": { name: "ҷ. Хуррамзамин", image: "/static/images/maps/districts/sughdspitamen1.avif", type: "district", parent: "spitamen" },
    "spitamen2": { name: "ҷ. Куруш", image: "/static/images/maps/districts/sughdspitamen2.avif", type: "district", parent: "spitamen" },
    "spitamen3": { name: "ҷ. Навкат", image: "/static/images/maps/districts/sughdspitamen3.avif", type: "district", parent: "spitamen" },
    "spitamen4": { name: "ҷ. Истиқлол", image: "/static/images/maps/districts/sughdspitamen4.avif", type: "district", parent: "spitamen" },
    "spitamen5": { name: "ҷ. Тағояк", image: "/static/images/maps/districts/sughdspitamen5.avif", type: "district", parent: "spitamen" },
    "spitamen6": { name: "ҷ. Т.Ӯлҷабоев", image: "/static/images/maps/districts/sughdspitamen6.avif", type: "district", parent: "spitamen" },

    "zafarobod1": { name: "ҷ. Равшан", image: "/static/images/maps/districts/sughdzafarobod1.avif", type: "district", parent: "zafarobod" },
    "zafarobod2": { name: "ҷ. Ҷомӣ", image: "/static/images/maps/districts/sughdzafarobod2.avif", type: "district", parent: "zafarobod" },

    // Хатлонская область
    "baljuvon1": { name: "ҷ. Тоҷикистон", image: "/static/images/maps/districts/khatlonbaljuvon1.avif", type: "district", parent: "baljuvon" },
    "baljuvon2": { name: "ҷ. Балҷувон", image: "/static/images/maps/districts/khatlonbaljuvon2.avif", type: "district", parent: "baljuvon" },
    "baljuvon3": { name: "ҷ. Сайф Раҳим", image: "/static/images/maps/districts/khatlonbaljuvon3.avif", type: "district", parent: "baljuvon" },
    "baljuvon4": { name: "ҷ. С.Амиршоев", image: "/static/images/maps/districts/khatlonbaljuvon4.avif", type: "district", parent: "baljuvon" },
    "baljuvon5": { name: "ҷ. Сари Хосор", image: "/static/images/maps/districts/khatlonbaljuvon5.avif", type: "district", parent: "baljuvon" },

    "bokhtar1": { name: "ҷ. Бохтариён", image: "/static/images/maps/districts/khatlonbokhtar1.avif", type: "district", parent: "bokhtar" },
    "bokhtar2": { name: "ҷ. Сарвати Истиқлол", image: "/static/images/maps/districts/khatlonbokhtar2.avif", type: "district", parent: "bokhtar" },
    "bokhtar3": { name: "ҷ. Заргар", image: "/static/images/maps/districts/khatlonbokhtar3.avif", type: "district", parent: "bokhtar" },
    "bokhtar4": { name: "ҷ. Меҳнатобод", image: "/static/images/maps/districts/khatlonbokhtar4.avif", type: "district", parent: "bokhtar" },
    "bokhtar5": { name: "ҷ. Навбаҳор", image: "/static/images/maps/districts/khatlonbokhtar5.avif", type: "district", parent: "bokhtar" },

    "danghara1": { name: "ҷ. Себистон", image: "/static/images/maps/districts/khatlondanghara1.avif", type: "district", parent: "danghara" },
    "danghara2": { name: "ҷ. Пушинг", image: "/static/images/maps/districts/khatlondanghara2.avif", type: "district", parent: "danghara" },
    "danghara3": { name: "ҷ. Сангтӯда", image: "/static/images/maps/districts/khatlondanghara3.avif", type: "district", parent: "danghara" },
    "danghara4": { name: "ҷ. Лоҳур", image: "/static/images/maps/districts/khatlondanghara4.avif", type: "district", parent: "danghara" },
    "danghara5": { name: "ҷ. Сафобахш", image: "/static/images/maps/districts/khatlondanghara5.avif", type: "district", parent: "danghara" },
    "danghara6": { name: "ҷ. Лолазор", image: "/static/images/maps/districts/khatlondanghara6.avif", type: "district", parent: "danghara" },
    "danghara7": { name: "ҷ. И.Шарипов", image: "/static/images/maps/districts/khatlondanghara7.avif", type: "district", parent: "danghara" },
    "danghara8": { name: "ҷ. Корез", image: "/static/images/maps/districts/khatlondanghara8.avif", type: "district", parent: "danghara" },

    "farhor1": { name: "ҷ. Гулшан", image: "/static/images/maps/districts/khatlonfarhor1.avif", type: "district", parent: "farhor" },
    "farhor2": { name: "ҷ. Зафар", image: "/static/images/maps/districts/khatlonfarhor2.avif", type: "district", parent: "farhor" },
    "farhor3": { name: "ҷ. Деҳқонобод", image: "/static/images/maps/districts/khatlonfarhor3.avif", type: "district", parent: "farhor" },
    "farhor4": { name: "ҷ. Хуросон", image: "/static/images/maps/districts/khatlonfarhor4.avif", type: "district", parent: "farhor" },
    "farhor5": { name: "ҷ. Фархор", image: "/static/images/maps/districts/khatlonfarhor5.avif", type: "district", parent: "farhor" },
    "farhor6": { name: "ҷ. Дарқад", image: "/static/images/maps/districts/khatlonfarhor6.avif", type: "district", parent: "farhor" },
    "farhor7": { name: "ҷ. Ватан", image: "/static/images/maps/districts/khatlonfarhor7.avif", type: "district", parent: "farhor" },
    "farhor8": { name: "ҷ. Истиқлол", image: "/static/images/maps/districts/khatlonfarhor8.avif", type: "district", parent: "farhor" },
    "farhor9": { name: "ҷ. Хутан", image: "/static/images/maps/districts/khatlonfarhor9.avif", type: "district", parent: "farhor" },

    "hamadoni1": { name: "ҷ. Дашти Гулҳо", image: "/static/images/maps/districts/khatlonhamadoni1.avif", type: "district", parent: "hamadoni" },
    "hamadoni2": { name: "ҷ. Панҷрӯд", image: "/static/images/maps/districts/khatlonhamadoni2.avif", type: "district", parent: "hamadoni" },
    "hamadoni3": { name: "ҷ. Меҳнатобод", image: "/static/images/maps/districts/khatlonhamadoni3.avif", type: "district", parent: "hamadoni" },
    "hamadoni4": { name: "ҷ. Панҷоб", image: "/static/images/maps/districts/khatlonhamadoni4.avif", type: "district", parent: "hamadoni" },
    "hamadoni5": { name: "ҷ. Турдиев", image: "/static/images/maps/districts/khatlonhamadoni5.avif", type: "district", parent: "hamadoni" },
    "hamadoni6": { name: "ҷ. Қаҳрамон", image: "/static/images/maps/districts/khatlonhamadoni6.avif", type: "district", parent: "hamadoni" },
    "hamadoni7": { name: "ҷ. Чубек", image: "/static/images/maps/districts/khatlonhamadoni7.avif", type: "district", parent: "hamadoni" },

    "hovaling1": { name: "ҷ. Ғ.Мирзо", image: "/static/images/maps/districts/khatlonhovaling1.avif", type: "district", parent: "hovaling" },
    "hovaling2": { name: "ҷ. Ҷомбахш", image: "/static/images/maps/districts/khatlonhovaling2.avif", type: "district", parent: "hovaling" },
    "hovaling3": { name: "ҷ. Ховалинг", image: "/static/images/maps/districts/khatlonhovaling3.avif", type: "district", parent: "hovaling" },
    "hovaling4": { name: "ҷ. Лоҳутӣ", image: "/static/images/maps/districts/khatlonhovaling4.avif", type: "district", parent: "hovaling" },
    "hovaling5": { name: "ҷ. Шуғнон", image: "/static/images/maps/districts/khatlonhovaling5.avif", type: "district", parent: "hovaling" },

    "husrav1": { name: "ҷ. Фирӯза", image: "/static/images/maps/districts/khatlonhusrav1.avif", type: "district", parent: "husrav" },
    "husrav2": { name: "ҷ. Наврӯз", image: "/static/images/maps/districts/khatlonhusrav2.avif", type: "district", parent: "husrav" },

    "jiliqul1": { name: "ҷ. Навзамин", image: "/static/images/maps/districts/khatlonjiliqul1.avif", type: "district", parent: "jiliqul" },
    "jiliqul2": { name: "ҷ. Деҳқонобод", image: "/static/images/maps/districts/khatlonjiliqul2.avif", type: "district", parent: "jiliqul" },
    "jiliqul3": { name: "ҷ. Нури Вахш", image: "/static/images/maps/districts/khatlonjiliqul3.avif", type: "district", parent: "jiliqul" },
    "jiliqul4": { name: "ҷ. Ҷилликӯл", image: "/static/images/maps/districts/khatlonjiliqul4.avif", type: "district", parent: "jiliqul" },
    "jiliqul5": { name: "ҷ. Г.Гулмуродов", image: "/static/images/maps/districts/khatlonjiliqul5.avif", type: "district", parent: "jiliqul" },

    "jomi1": { name: "ҷ. Яккатут", image: "/static/images/maps/districts/khatlonjomi1.avif", type: "district", parent: "jomi" },
    "jomi2": { name: "ҷ. Калинин", image: "/static/images/maps/districts/khatlonjomi2.avif", type: "district", parent: "jomi" },
    "jomi3": { name: "ҷ. Иттифоқ", image: "/static/images/maps/districts/khatlonjomi3.avif", type: "district", parent: "jomi" },
    "jomi4": { name: "ҷ. К.Ғиёсов", image: "/static/images/maps/districts/khatlonjomi4.avif", type: "district", parent: "jomi" },
    "jomi5": { name: "ҷ. Ифтихор", image: "/static/images/maps/districts/khatlonjomi5.avif", type: "district", parent: "jomi" },
    "jomi6": { name: "ҷ. Дӯустӣ", image: "/static/images/maps/districts/khatlonjomi6.avif", type: "district", parent: "jomi" },

    "kalkhozobod1": { name: "ҷ. Навобод", image: "/static/images/maps/districts/khatlonkalkhozobod1.avif", type: "district", parent: "kalkhozobod" },
    "kalkhozobod2": { name: "ҷ. Золи Зар", image: "/static/images/maps/districts/khatlonkalkhozobod2.avif", type: "district", parent: "kalkhozobod" },
    "kalkhozobod3": { name: "ҷ. Навоӣ", image: "/static/images/maps/districts/khatlonkalkhozobod3.avif", type: "district", parent: "kalkhozobod" },
    "kalkhozobod4": { name: "ҷ. Маданият", image: "/static/images/maps/districts/khatlonkalkhozobod4.avif", type: "district", parent: "kalkhozobod" },
    "kalkhozobod5": { name: "ҷ. Калинин", image: "/static/images/maps/districts/khatlonkalkhozobod5.avif", type: "district", parent: "kalkhozobod" },
    "kalkhozobod6": { name: "ҷ. Ҳалевард", image: "/static/images/maps/districts/khatlonkalkhozobod6.avif", type: "district", parent: "kalkhozobod" },

    "khuroson1": { name: "ҷ. Фахробод", image: "/static/images/maps/districts/khatlonkhuroson1.avif", type: "district", parent: "khuroson" },
    "khuroson2": { name: "ҷ. Ҳилолӣ", image: "/static/images/maps/districts/khatlonkhuroson2.avif", type: "district", parent: "khuroson" },
    "khuroson3": { name: "ҷ. С.Айнӣ", image: "/static/images/maps/districts/khatlonkhuroson3.avif", type: "district", parent: "khuroson" },
    "khuroson4": { name: "ҷ. Қизилқалъа", image: "/static/images/maps/districts/khatlonkhuroson4.avif", type: "district", parent: "khuroson" },
    "khuroson5": { name: "ҷ. Ғаллаобод", image: "/static/images/maps/districts/khatlonkhuroson5.avif", type: "district", parent: "khuroson" },

    "kulob1": { name: "ҷ. Даҳана", image: "/static/images/maps/districts/khatlonkulob1.avif", type: "district", parent: "kulob" },
    "kulob2": { name: "ҷ. Зиракӣ", image: "/static/images/maps/districts/khatlonkulob2.avif", type: "district", parent: "kulob" },
    "kulob3": { name: "ҷ. Кӯлоб", image: "/static/images/maps/districts/khatlonkulob3.avif", type: "district", parent: "kulob" },
    "kulob4": { name: "ҷ. Зарбдор", image: "/static/images/maps/districts/khatlonkulob4.avif", type: "district", parent: "kulob" },

    "muminobod1": { name: "ҷ. Боғтаӣ", image: "/static/images/maps/districts/khatlonmuminobod1.avif", type: "district", parent: "muminobod" },
    "muminobod2": { name: "ҷ. Деҳибаланд", image: "/static/images/maps/districts/khatlonmuminobod2.avif", type: "district", parent: "muminobod" },
    "muminobod3": { name: "ҷ. Ш.Шоҳин", image: "/static/images/maps/districts/khatlonmuminobod3.avif", type: "district", parent: "muminobod" },
    "muminobod4": { name: "ҷ. Балхобӣ", image: "/static/images/maps/districts/khatlonmuminobod4.avif", type: "district", parent: "muminobod" },
    "muminobod5": { name: "ҷ. Нуралишо Назаров", image: "/static/images/maps/districts/khatlonmuminobod5.avif", type: "district", parent: "muminobod" },

    "norak1": { name: "ҷ. Дуконӣ", image: "/static/images/maps/districts/khatlonnorak1.avif", type: "district", parent: "norak" },
    "norak2": { name: "ҷ. Пули Сангин", image: "/static/images/maps/districts/khatlonnorak2.avif", type: "district", parent: "norak" },

    "panj1": { name: "ҷ. Намуна", image: "/static/images/maps/districts/khatlonpanj1.avif", type: "district", parent: "panj" },
    "panj2": { name: "ҷ. Меҳвар", image: "/static/images/maps/districts/khatlonpanj2.avif", type: "district", parent: "panj" },
    "panj3": { name: "ҷ. Озодагон", image: "/static/images/maps/districts/khatlonpanj3.avif", type: "district", parent: "panj" },
    "panj4": { name: "ҷ. К.Сайфутдинов", image: "/static/images/maps/districts/khatlonpanj4.avif", type: "district", parent: "panj" },
    "panj5": { name: "ҷ. Нури Ваҳдат", image: "/static/images/maps/districts/khatlonpanj5.avif", type: "district", parent: "panj" },

    "qabodiyon1": { name: "ҷ. Заркамар", image: "/static/images/maps/districts/khatlonqabodiyon1.avif", type: "district", parent: "qabodiyon" },
    "qabodiyon2": { name: "ҷ. Ӯ.Назаров", image: "/static/images/maps/districts/khatlonqabodiyon2.avif", type: "district", parent: "qabodiyon" },
    "qabodiyon3": { name: "ҷ. Э.Ниёзов", image: "/static/images/maps/districts/khatlonqabodiyon3.avif", type: "district", parent: "qabodiyon" },
    "qabodiyon4": { name: "ҷ. Н.Хусрав", image: "/static/images/maps/districts/khatlonqabodiyon4.avif", type: "district", parent: "qabodiyon" },
    "qabodiyon5": { name: "ҷ. Тахти Сангин", image: "/static/images/maps/districts/khatlonqabodiyon5.avif", type: "district", parent: "qabodiyon" },
    "qabodiyon6": { name: "ҷ. 20-с Истиқлол", image: "/static/images/maps/districts/khatlonqabodiyon6.avif", type: "district", parent: "qabodiyon" },
    "qabodiyon7": { name: "ҷ. Навобод", image: "/static/images/maps/districts/khatlonqabodiyon7.avif", type: "district", parent: "qabodiyon" },

    "qumsangir1": { name: "ҷ. Яккадин", image: "/static/images/maps/districts/khatlonqumsangir1.avif", type: "district", parent: "qumsangir" },
    "qumsangir2": { name: "ҷ. Ваҳдати Милли", image: "/static/images/maps/districts/khatlonqumsangir2.avif", type: "district", parent: "qumsangir" },
    "qumsangir3": { name: "ҷ. Истиқлол", image: "/static/images/maps/districts/khatlonqumsangir3.avif", type: "district", parent: "qumsangir" },
    "qumsangir4": { name: "ҷ. Қумсангир", image: "/static/images/maps/districts/khatlonqumsangir4.avif", type: "district", parent: "qumsangir" },
    "qumsangir5": { name: "ҷ. Панҷ", image: "/static/images/maps/districts/khatlonqumsangir5.avif", type: "district", parent: "qumsangir" },

    "sarband1": { name: "ҷ. Ваҳдат", image: "/static/images/maps/districts/khatlonsarband1.avif", type: "district", parent: "sarband" },
    "sarband2": { name: "ҷ. Гулистон", image: "/static/images/maps/districts/khatlonsarband2.avif", type: "district", parent: "sarband" },

    "shahrituz1": { name: "ҷ. Пахтаобод", image: "/static/images/maps/districts/khatlonshahrituz1.avif", type: "district", parent: "shahrituz" },
    "shahrituz2": { name: "ҷ. Т.Садриддинов", image: "/static/images/maps/districts/khatlonshahrituz2.avif", type: "district", parent: "shahrituz" },
    "shahrituz3": { name: "ҷ. Обшорон", image: "/static/images/maps/districts/khatlonshahrituz3.avif", type: "district", parent: "shahrituz" },
    "shahrituz4": { name: "ҷ. Х.Холматов", image: "/static/images/maps/districts/khatlonshahrituz4.avif", type: "district", parent: "shahrituz" },
    "shahrituz5": { name: "ҷ. Ҷ.Назаров", image: "/static/images/maps/districts/khatlonshahrituz5.avif", type: "district", parent: "shahrituz" },

    "shurobod1": { name: "ҷ. Лангардара", image: "/static/images/maps/districts/khatlonshurobod1.avif", type: "district", parent: "shurobod" },
    "shurobod2": { name: "ҷ. Доғистон", image: "/static/images/maps/districts/khatlonshurobod2.avif", type: "district", parent: "shurobod" },
    "shurobod3": { name: "ҷ. Дашти Ҷум", image: "/static/images/maps/districts/khatlonshurobod3.avif", type: "district", parent: "shurobod" },
    "shurobod4": { name: "ҷ. Чагам", image: "/static/images/maps/districts/khatlonshurobod4.avif", type: "district", parent: "shurobod" },
    "shurobod5": { name: "ҷ. Шӯробод", image: "/static/images/maps/districts/khatlonshurobod5.avif", type: "district", parent: "shurobod" },
    "shurobod6": { name: "ҷ. Сари Чашма", image: "/static/images/maps/districts/khatlonshurobod6.avif", type: "district", parent: "shurobod" },
    "shurobod7": { name: "ҷ. Н.Маҳмудов", image: "/static/images/maps/districts/khatlonshurobod7.avif", type: "district", parent: "shurobod" },

    "temurmalik1": { name: "ҷ. С.Раҳимов", image: "/static/images/maps/districts/khatlontemurmalik1.avif", type: "district", parent: "temurmalik" },
    "temurmalik2": { name: "ҷ. Танобчӣ", image: "/static/images/maps/districts/khatlontemurmalik2.avif", type: "district", parent: "temurmalik" },
    "temurmalik3": { name: "ҷ. Кушктеппа", image: "/static/images/maps/districts/khatlontemurmalik3.avif", type: "district", parent: "temurmalik" },
    "temurmalik4": { name: "ҷ. Чилчаҳ", image: "/static/images/maps/districts/khatlontemurmalik4.avif", type: "district", parent: "temurmalik" },
    "temurmalik5": { name: "ҷ. Ҳусайнобод", image: "/static/images/maps/districts/khatlontemurmalik5.avif", type: "district", parent: "temurmalik" },
    "temurmalik6": { name: "ҷ. Кангурт", image: "/static/images/maps/districts/khatlontemurmalik6.avif", type: "district", parent: "temurmalik" },

    "vakhsh1": { name: "ҷ. Тоҷикобод", image: "/static/images/maps/districts/khatlonvakhsh1.avif", type: "district", parent: "vakhsh" },
    "vakhsh2": { name: "ҷ. Рӯдакӣ", image: "/static/images/maps/districts/khatlonvakhsh2.avif", type: "district", parent: "vakhsh" },
    "vakhsh3": { name: "ҷ. Машъал", image: "/static/images/maps/districts/khatlonvakhsh3.avif", type: "district", parent: "vakhsh" },
    "vakhsh4": { name: "ҷ. Ваҳдат", image: "/static/images/maps/districts/khatlonvakhsh4.avif", type: "district", parent: "vakhsh" },
    "vakhsh5": { name: "ҷ. 20-с Истиқлолият", image: "/static/images/maps/districts/khatlonvakhsh5.avif", type: "district", parent: "vakhsh" },

    "vose1": { name: "ҷ. Гулистон", image: "/static/images/maps/districts/khatlonvose1.avif", type: "district", parent: "vose" },
    "vose2": { name: "ҷ. Абдӣ Авазов", image: "/static/images/maps/districts/khatlonvose2.avif", type: "district", parent: "vose" },
    "vose3": { name: "ҷ. Тугарак", image: "/static/images/maps/districts/khatlonvose3.avif", type: "district", parent: "vose" },
    "vose4": { name: "ҷ. М.Маҳмадалиев", image: "/static/images/maps/districts/khatlonvose4.avif", type: "district", parent: "vose" },
    "vose5": { name: "ҷ. А.Рӯдакӣ", image: "/static/images/maps/districts/khatlonvose5.avif", type: "district", parent: "vose" },
    "vose6": { name: "ҷ. М.Вайсов", image: "/static/images/maps/districts/khatlonvose6.avif", type: "district", parent: "vose" },
    "vose7": { name: "ҷ. Х.Раҷабов", image: "/static/images/maps/districts/khatlonvose7.avif", type: "district", parent: "vose" },

    "yovon1": { name: "ҷ. Даҳана", image: "/static/images/maps/districts/khatlonyovon1.avif", type: "district", parent: "yovon" },
    "yovon2": { name: "ҷ. Ҳ.Ҳусейнов", image: "/static/images/maps/districts/khatlonyovon2.avif", type: "district", parent: "yovon" },
    "yovon3": { name: "ҷ. Чоргул", image: "/static/images/maps/districts/khatlonyovon3.avif", type: "district", parent: "yovon" },
    "yovon4": { name: "ҷ. Г.Юсуфова", image: "/static/images/maps/districts/khatlonyovon4.avif", type: "district", parent: "yovon" },
    "yovon5": { name: "ҷ. Обшорон", image: "/static/images/maps/districts/khatlonyovon5.avif", type: "district", parent: "yovon" },
    "yovon6": { name: "ҷ. Норин", image: "/static/images/maps/districts/khatlonyovon6.avif", type: "district", parent: "yovon" },
    "yovon7": { name: "ҷ. Ситораи Сурх", image: "/static/images/maps/districts/khatlonyovon7.avif", type: "district", parent: "yovon" },

    // РРП
    "dushanbe1": { name: "н. Сино", image: "/static/images/maps/districts/rrpdushanbe1.avif", type: "district", parent: "dushanbe" },
    "dushanbe2": { name: "н. И.Сомонӣ", image: "/static/images/maps/districts/rrpdushanbe2.avif", type: "district", parent: "dushanbe" },
    "dushanbe3": { name: "н. Фирдавсӣ", image: "/static/images/maps/districts/rrpdushanbe3.avif", type: "district", parent: "dushanbe" },
    "dushanbe4": { name: "н. Шоҳмансур", image: "/static/images/maps/districts/rrpdushanbe4.avif", type: "district", parent: "dushanbe" },

    "fayzobod1": { name: "ҷ. Бӯстон", image: "/static/images/maps/districts/rrpfayzobod1.avif", type: "district", parent: "fayzobod" },
    "fayzobod2": { name: "ҷ. Меҳробод", image: "/static/images/maps/districts/rrpfayzobod2.avif", type: "district", parent: "fayzobod" },
    "fayzobod3": { name: "ҷ. Вашгирд", image: "/static/images/maps/districts/rrpfayzobod3.avif", type: "district", parent: "fayzobod" },
    "fayzobod4": { name: "ҷ. Ҷавонон", image: "/static/images/maps/districts/rrpfayzobod4.avif", type: "district", parent: "fayzobod" },
    "fayzobod5": { name: "ҷ. Дӯстмурод Алиев", image: "/static/images/maps/districts/rrpfayzobod5.avif", type: "district", parent: "fayzobod" },
    "fayzobod6": { name: "ҷ. Қалъаи Дашт", image: "/static/images/maps/districts/rrpfayzobod6.avif", type: "district", parent: "fayzobod" },
    "fayzobod7": { name: "ҷ. 30-солагии Истиқлолият", image: "/static/images/maps/districts/rrpfayzobod7.avif", type: "district", parent: "fayzobod" },

    "hissor1": { name: "ҷ. Хонақоҳи Боло", image: "/static/images/maps/districts/rrphissor1.avif", type: "district", parent: "hissor" },
    "hissor2": { name: "ҷ. Алмосӣ", image: "/static/images/maps/districts/rrphissor2.avif", type: "district", parent: "hissor" },
    "hissor3": { name: "ҷ. Сомон", image: "/static/images/maps/districts/rrphissor3.avif", type: "district", parent: "hissor" },
    "hissor4": { name: "ҷ. Навобод", image: "/static/images/maps/districts/rrphissor4.avif", type: "district", parent: "hissor" },
    "hissor5": { name: "ҷ. Дурбат", image: "/static/images/maps/districts/rrphissor5.avif", type: "district", parent: "hissor" },
    "hissor6": { name: "ҷ. Мирзо Ризо", image: "/static/images/maps/districts/rrphissor6.avif", type: "district", parent: "hissor" },
    "hissor7": { name: "ҷ. Деҳқонобод", image: "/static/images/maps/districts/rrphissor7.avif", type: "district", parent: "hissor" },
    "hissor8": { name: "ҷ. М.Турсунзода", image: "/static/images/maps/districts/rrphissor8.avif", type: "district", parent: "hissor" },
    "hissor9": { name: "ҷ. Шарора", image: "/static/images/maps/districts/rrphissor9.avif", type: "district", parent: "hissor" },

    "jirgatol1": { name: "ҷ. Пилдон", image: "/static/images/maps/districts/rrpjirgatol1.avif", type: "district", parent: "jirgatol" },
    "jirgatol2": { name: "ҷ. Наврӯз", image: "/static/images/maps/districts/rrpjirgatol2.avif", type: "district", parent: "jirgatol" },
    "jirgatol3": { name: "ҷ. Нурафшон", image: "/static/images/maps/districts/rrpjirgatol3.avif", type: "district", parent: "jirgatol" },
    "jirgatol4": { name: "ҷ. Истиқлол", image: "/static/images/maps/districts/rrpjirgatol4.avif", type: "district", parent: "jirgatol" },
    "jirgatol5": { name: "ҷ. Сайлиобод", image: "/static/images/maps/districts/rrpjirgatol5.avif", type: "district", parent: "jirgatol" },
    "jirgatol6": { name: "ҷ. Лахш", image: "/static/images/maps/districts/rrpjirgatol6.avif", type: "district", parent: "jirgatol" },
    "jirgatol7": { name: "ҷ. Сурхоб", image: "/static/images/maps/districts/rrpjirgatol7.avif", type: "district", parent: "jirgatol" },
    "jirgatol8": { name: "ҷ. Лахши Боло", image: "/static/images/maps/districts/rrpjirgatol8.avif", type: "district", parent: "jirgatol" },

    "nurobod1": { name: "ҷ. Ҳакимӣ", image: "/static/images/maps/districts/rrpnurobod1.avif", type: "district", parent: "nurobod" },
    "nurobod2": { name: "ҷ. Муҷиҳарф", image: "/static/images/maps/districts/rrpnurobod2.avif", type: "district", parent: "nurobod" },
    "nurobod3": { name: "ҷ. Меҳробод", image: "/static/images/maps/districts/rrpnurobod3.avif", type: "district", parent: "nurobod" },
    "nurobod4": { name: "ҷ. Сафедчашма", image: "/static/images/maps/districts/rrpnurobod4.avif", type: "district", parent: "nurobod" },
    "nurobod5": { name: "ҷ. Хумдон", image: "/static/images/maps/districts/rrpnurobod5.avif", type: "district", parent: "nurobod" },
    "nurobod6": { name: "ҷ. И.Ҳалимов", image: "/static/images/maps/districts/rrpnurobod6.avif", type: "district", parent: "nurobod" },

    "rasht1": { name: "ҷ. Б.Раҳимзода", image: "/static/images/maps/districts/rrprasht1.avif", type: "district", parent: "rasht" },
    "rasht2": { name: "ҷ. Ясмон", image: "/static/images/maps/districts/rrprasht2.avif", type: "district", parent: "rasht" },
    "rasht3": { name: "ҷ. Ҳоит", image: "/static/images/maps/districts/rrprasht3.avif", type: "district", parent: "rasht" },
    "rasht4": { name: "ҷ. Тагоба", image: "/static/images/maps/districts/rrprasht4.avif", type: "district", parent: "rasht" },
    "rasht5": { name: "ҷ. Навобод", image: "/static/images/maps/districts/rrprasht5.avif", type: "district", parent: "rasht" },
    "rasht6": { name: "ҷ. Н.Махсум", image: "/static/images/maps/districts/rrprasht6.avif", type: "district", parent: "rasht" },
    "rasht7": { name: "ҷ. Навдӣ", image: "/static/images/maps/districts/rrprasht7.avif", type: "district", parent: "rasht" },
    "rasht8": { name: "ҷ. Қалъанак", image: "/static/images/maps/districts/rrprasht8.avif", type: "district", parent: "rasht" },
    "rasht9": { name: "ҷ. Ҷафр", image: "/static/images/maps/districts/rrprasht9.avif", type: "district", parent: "rasht" },
    "rasht10": { name: "ҷ. Қалъаи Сурх", image: "/static/images/maps/districts/rrprasht10.avif", type: "district", parent: "rasht" },
    "rasht11": { name: "ҷ. Ҳиҷборак", image: "/static/images/maps/districts/rrprasht11.avif", type: "district", parent: "rasht" },

    "roghun1": { name: "ҷ. Қади Об", image: "/static/images/maps/districts/rrproghun1.avif", type: "district", parent: "roghun" },
    "roghun2": { name: "ҷ. Сичароғ", image: "/static/images/maps/districts/rrproghun2.avif", type: "district", parent: "roghun" },

    "rudaki1": { name: "ҷ. Сарикиштӣ", image: "/static/images/maps/districts/rrprudaki1.avif", type: "district", parent: "rudaki" },
    "rudaki2": { name: "ҷ. Чимтеппа", image: "/static/images/maps/districts/rrprudaki2.avif", type: "district", parent: "rudaki" },
    "rudaki3": { name: "ҷ. Зайнабобод", image: "/static/images/maps/districts/rrprudaki3.avif", type: "district", parent: "rudaki" },
    "rudaki4": { name: "ҷ. Гулистон", image: "/static/images/maps/districts/rrprudaki4.avif", type: "district", parent: "rudaki" },
    "rudaki5": { name: "ҷ. Роҳатӣ", image: "/static/images/maps/districts/rrprudaki5.avif", type: "district", parent: "rudaki" },
    "rudaki6": { name: "ҷ. Қиблаӣ", image: "/static/images/maps/districts/rrprudaki6.avif", type: "district", parent: "rudaki" },
    "rudaki7": { name: "ҷ. Лоҳур", image: "/static/images/maps/districts/rrprudaki7.avif", type: "district", parent: "rudaki" },
    "rudaki8": { name: "ҷ. Чоргултеппа", image: "/static/images/maps/districts/rrprudaki8.avif", type: "district", parent: "rudaki" },
    "rudaki9": { name: "ҷ. Султонобод", image: "/static/images/maps/districts/rrprudaki9.avif", type: "district", parent: "rudaki" },
    "rudaki10": { name: "ҷ. Эсанбой", image: "/static/images/maps/districts/rrprudaki10.avif", type: "district", parent: "rudaki" },

    "shahrinav1": { name: "ҷ. Сабо", image: "/static/images/maps/districts/rrpshahrinav1.avif", type: "district", parent: "shahrinav" },
    "shahrinav2": { name: "ҷ. Боғистон", image: "/static/images/maps/districts/rrpshahrinav2.avif", type: "district", parent: "shahrinav" },
    "shahrinav3": { name: "ҷ. Шаҳринав", image: "/static/images/maps/districts/rrpshahrinav3.avif", type: "district", parent: "shahrinav" },
    "shahrinav4": { name: "ҷ. М.Турсунзода", image: "/static/images/maps/districts/rrpshahrinav4.avif", type: "district", parent: "shahrinav" },
    "shahrinav5": { name: "ҷ. Чуст", image: "/static/images/maps/districts/rrpshahrinav5.avif", type: "district", parent: "shahrinav" },
    "shahrinav6": { name: "ҷ. Истиқлол", image: "/static/images/maps/districts/rrpshahrinav6.avif", type: "district", parent: "shahrinav" },
    "shahrinav7": { name: "ҷ. Ҳасанов", image: "/static/images/maps/districts/rrpshahrinav7.avif", type: "district", parent: "shahrinav" },

    "tavildara1": { name: "ҷ. Чилдара", image: "/static/images/maps/districts/rrptavildara1.avif", type: "district", parent: "tavildara" },
    "tavildara2": { name: "ҷ. Тавилдара", image: "/static/images/maps/districts/rrptavildara2.avif", type: "district", parent: "tavildara" },
    "tavildara3": { name: "ҷ. Заршӯён", image: "/static/images/maps/districts/rrptavildara3.avif", type: "district", parent: "tavildara" },

    "tojikobod1": { name: "ҷ. Лангари Шоҳ", image: "/static/images/maps/districts/rrptojikobod1.avif", type: "district", parent: "tojikobod" },
    "tojikobod2": { name: "ҷ. Қалъаи Лабиоб", image: "/static/images/maps/districts/rrptojikobod2.avif", type: "district", parent: "tojikobod" },
    "tojikobod3": { name: "ҷ. Зарафшон", image: "/static/images/maps/districts/rrptojikobod3.avif", type: "district", parent: "tojikobod" },
    "tojikobod4": { name: "ҷ. Нушор", image: "/static/images/maps/districts/rrptojikobod4.avif", type: "district", parent: "tojikobod" },


    "tursunzoda1": { name: "ҷ. Қаратоғ", image: "/static/images/maps/districts/rrptursunzoda1.avif", type: "district", parent: "tursunzoda" },
    "tursunzoda2": { name: "ҷ. Работ", image: "/static/images/maps/districts/rrptursunzoda2.avif", type: "district", parent: "tursunzoda" },
    "tursunzoda3": { name: "ҷ. Пахтаобод", image: "/static/images/maps/districts/rrptursunzoda3.avif", type: "district", parent: "tursunzoda" },
    "tursunzoda4": { name: "ҷ. Регар", image: "/static/images/maps/districts/rrptursunzoda4.avif", type: "district", parent: "tursunzoda" },
    "tursunzoda5": { name: "ҷ. Сешанбе", image: "/static/images/maps/districts/rrptursunzoda5.avif", type: "district", parent: "tursunzoda" },
    "tursunzoda6": { name: "ҷ. Т.Туйчиев", image: "/static/images/maps/districts/rrptursunzoda6.avif", type: "district", parent: "tursunzoda" },
    "tursunzoda7": { name: "ҷ. 10-с Истиқлолият", image: "/static/images/maps/districts/rrptursunzoda7.avif", type: "district", parent: "tursunzoda" },
    "tursunzoda8": { name: "ҷ. Навобод", image: "/static/images/maps/districts/rrptursunzoda8.avif", type: "district", parent: "tursunzoda" },

    "vahdat1": { name: "ҷ. Симиганҷ", image: "/static/images/maps/districts/rrpvahdat1.avif", type: "district", parent: "vahdat" },
    "vahdat2": { name: "ҷ. Ҷуянгарон", image: "/static/images/maps/districts/rrpvahdat2.avif", type: "district", parent: "vahdat" },
    "vahdat3": { name: "ҷ. Ромит", image: "/static/images/maps/districts/rrpvahdat3.avif", type: "district", parent: "vahdat" },
    "vahdat4": { name: "ҷ. Кофарниҳон", image: "/static/images/maps/districts/rrpvahdat4.avif", type: "district", parent: "vahdat" },
    "vahdat5": { name: "ҷ. К.Исмоилов", image: "/static/images/maps/districts/rrpvahdat5.avif", type: "district", parent: "vahdat" },
    "vahdat6": { name: "ҷ. Б.Бурунов", image: "/static/images/maps/districts/rrpvahdat6.avif", type: "district", parent: "vahdat" },
    "vahdat7": { name: "ш. Ваҳдат", image: "/static/images/maps/districts/rrpvahdat7.avif", type: "district", parent: "vahdat" },
    "vahdat8": { name: "ҷ. Баҳор", image: "/static/images/maps/districts/rrpvahdat8.avif", type: "district", parent: "vahdat" },
    "vahdat9": { name: "ҷ. Гулистон", image: "/static/images/maps/districts/rrpvahdat9.avif", type: "district", parent: "vahdat" },
    "vahdat10": { name: "ҷ. Чорсу", image: "/static/images/maps/districts/rrpvahdat10.avif", type: "district", parent: "vahdat" },

    "varzob1": { name: "ҷ. Зидеҳ", image: "/static/images/maps/districts/rrpvarzob1.avif", type: "district", parent: "varzob" },
    "varzob2": { name: "ҷ. Варзобқалъа", image: "/static/images/maps/districts/rrpvarzob2.avif", type: "district", parent: "varzob" },
    "varzob3": { name: "ҷ. Деҳмалик", image: "/static/images/maps/districts/rrpvarzob3.avif", type: "district", parent: "varzob" },
    "varzob4": { name: "ҷ. Лучоб", image: "/static/images/maps/districts/rrpvarzob4.avif", type: "district", parent: "varzob" },
    "varzob5": { name: "ҷ. Чорбоғ", image: "/static/images/maps/districts/rrpvarzob5.avif", type: "district", parent: "varzob" },
    "varzob6": { name: "ҷ. Айнӣ", image: "/static/images/maps/districts/rrpvarzob6.avif", type: "district", parent: "varzob" },

    // ГБАО
    "darvoz1": { name: "ҷ. Сагирдашт", image: "/static/images/maps/districts/gbaodarvoz1.avif", type: "district", parent: "darvoz" },
    "darvoz2": { name: "ҷ. Нулванд", image: "/static/images/maps/districts/gbaodarvoz2.avif", type: "district", parent: "darvoz" },
    "darvoz3": { name: "ҷ. Қалъаи Хумб", image: "/static/images/maps/districts/gbaodarvoz3.avif", type: "district", parent: "darvoz" },
    "darvoz4": { name: "ҷ. Вишхавр", image: "/static/images/maps/districts/gbaodarvoz4.avif", type: "district", parent: "darvoz" },

    "ishkoshim1": { name: "ҷ. А.Замиров", image: "/static/images/maps/districts/gbaoishkoshim1.avif", type: "district", parent: "ishkoshim" },
    "ishkoshim2": { name: "ҷ. Қозидеҳ", image: "/static/images/maps/districts/gbaoishkoshim2.avif", type: "district", parent: "ishkoshim" },
    "ishkoshim3": { name: "ҷ. Р.Юсуфбеков", image: "/static/images/maps/districts/gbaoishkoshim3.avif", type: "district", parent: "ishkoshim" },
    "ishkoshim4": { name: "ҷ. Вахон", image: "/static/images/maps/districts/gbaoishkoshim4.avif", type: "district", parent: "ishkoshim" },
    "ishkoshim5": { name: "ҷ. Вранг", image: "/static/images/maps/districts/gbaoishkoshim5.avif", type: "district", parent: "ishkoshim" },
    "ishkoshim6": { name: "ҷ. Зонг", image: "/static/images/maps/districts/gbaoishkoshim6.avif", type: "district", parent: "ishkoshim" },

    "murghob1": { name: "ҷ. Аличур", image: "/static/images/maps/districts/gbaomurghob1.avif", type: "district", parent: "murghob" },
    "murghob2": { name: "ҷ. Гожо Бердинов", image: "/static/images/maps/districts/gbaomurghob2.avif", type: "district", parent: "murghob" },
    "murghob3": { name: "ш. Мурғоб", image: "/static/images/maps/districts/gbaomurghob3.avif", type: "district", parent: "murghob" },
    "murghob4": { name: "ҷ. Қизилработ", image: "/static/images/maps/districts/gbaomurghob4.avif", type: "district", parent: "murghob" },
    "murghob5": { name: "ҷ. Рангкӯл", image: "/static/images/maps/districts/gbaomurghob5.avif", type: "district", parent: "murghob" },
    "murghob6": { name: "ҷ. Каракӯл", image: "/static/images/maps/districts/gbaomurghob6.avif", type: "district", parent: "murghob" },

    "roshtqala1": { name: "ҷ. Тавдем", image: "/static/images/maps/districts/gbaoroshtqala1.avif", type: "district", parent: "roshtqala" },
    "roshtqala2": { name: "ҷ. Тусён", image: "/static/images/maps/districts/gbaoroshtqala2.avif", type: "district", parent: "roshtqala" },
    "roshtqala3": { name: "ҷ. Роштқалъа", image: "/static/images/maps/districts/gbaoroshtqala3.avif", type: "district", parent: "roshtqala" },
    "roshtqala4": { name: "ҷ. Сижд", image: "/static/images/maps/districts/gbaoroshtqala4.avif", type: "district", parent: "roshtqala" },
    "roshtqala5": { name: "ҷ. Барвоз", image: "/static/images/maps/districts/gbaoroshtqala5.avif", type: "district", parent: "roshtqala" },
    "roshtqala6": { name: "ҷ. Мирсаид Миршакар", image: "/static/images/maps/districts/gbaoroshtqala6.avif", type: "district", parent: "roshtqala" },

    "rushon1": { name: "ҷ. Абдулвосиев", image: "/static/images/maps/districts/gbaorushon1.avif", type: "district", parent: "rushon" },
    "rushon2": { name: "ҷ. Додихудоев", image: "/static/images/maps/districts/gbaorushon2.avif", type: "district", parent: "rushon" },
    "rushon3": { name: "ҷ. Рӯшон", image: "/static/images/maps/districts/gbaorushon3.avif", type: "district", parent: "rushon" },
    "rushon4": { name: "ҷ. Пастхуф", image: "/static/images/maps/districts/gbaorushon4.avif", type: "district", parent: "rushon" },
    "rushon5": { name: "ҷ. Бартанг", image: "/static/images/maps/districts/gbaorushon5.avif", type: "district", parent: "rushon" },
    "rushon6": { name: "ҷ. Басид", image: "/static/images/maps/districts/gbaorushon6.avif", type: "district", parent: "rushon" },
    "rushon7": { name: "ҷ. Савноб", image: "/static/images/maps/districts/gbaorushon7.avif", type: "district", parent: "rushon" },

    "shughnon1": { name: "ҷ. Ширинҷонов", image: "/static/images/maps/districts/gbaoshughnon1.avif", type: "district", parent: "shughnon" },
    "shughnon2": { name: "ҷ. Поршинев", image: "/static/images/maps/districts/gbaoshughnon2.avif", type: "district", parent: "shughnon" },
    "shughnon3": { name: "ҷ. Шаҳбозов", image: "/static/images/maps/districts/gbaoshughnon3.avif", type: "district", parent: "shughnon" },
    "shughnon4": { name: "ҷ. Сучон", image: "/static/images/maps/districts/gbaoshughnon4.avif", type: "district", parent: "shughnon" },
    "shughnon5": { name: "ҷ. Навобод", image: "/static/images/maps/districts/gbaoshughnon5.avif", type: "district", parent: "shughnon" },
    "shughnon6": { name: "ҷ. Вер", image: "/static/images/maps/districts/gbaoshughnon6.avif", type: "district", parent: "shughnon" },
    "shughnon7": { name: "ҷ. Ванқалъа", image: "/static/images/maps/districts/gbaoshughnon7.avif", type: "district", parent: "shughnon" },

    "vanj1": { name: "ҷ. Вадхуд", image: "/static/images/maps/districts/gbaovanj1.avif", type: "district", parent: "vanj" },
    "vanj2": { name: "ҷ. Ванҷ", image: "/static/images/maps/districts/gbaovanj2.avif", type: "district", parent: "vanj" },
    "vanj3": { name: "ҷ. Ҷовид", image: "/static/images/maps/districts/gbaovanj3.avif", type: "district", parent: "vanj" },
    "vanj4": { name: "ҷ. Теҳрав", image: "/static/images/maps/districts/gbaovanj4.avif", type: "district", parent: "vanj" },
    "vanj5": { name: "ҷ. Рованд", image: "/static/images/maps/districts/gbaovanj5.avif", type: "district", parent: "vanj" },
    "vanj6": { name: "ҷ. Язғулом", image: "/static/images/maps/districts/gbaovanj6.avif", type: "district", parent: "vanj" }

    };