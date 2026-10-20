/* ==========================================================================
   Jinan Sardia International Supply Chain — Bilingual Layer (EN / AR)
   --------------------------------------------------------------------------
   HOW THIS WORKS
   --------------------------------------------------------------------------
   English copy is written directly into the HTML, so search engines index it
   and the page still reads fine with JavaScript disabled.

   On page load we snapshot every translatable node. Switching to Arabic
   overwrites those nodes from the AR dictionary below. Switching back to
   English restores the snapshot. English therefore lives in exactly ONE place
   (the HTML) and the two languages cannot drift apart.

   To translate a new page: wrap the text in the HTML with data-i18n="key",
   then add the Arabic string under that matching key below.

   Supported hooks:  data-i18n | data-i18n-html | data-i18n-ph
                     data-i18n-aria | data-i18n-title
   ========================================================================== */

window.SARDIA_I18N = (function () {
  'use strict';

  /* --- Arabic dictionary ------------------------------------------------- */
  var AR = {
    /* ---------------- Navigation ---------------- */
    'nav.home': 'الرئيسية',
    'nav.sectors': 'الأقسام',
    'nav.trucks': 'الشاحنات',
    'nav.construction': 'المعدات الإنشائية',
    'nav.agriculture': 'المعدات الزراعية',
    'nav.medical': 'المستلزمات الطبية',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.getQuote': 'اطلب عرض سعر',
    'nav.openMenu': 'فتح القائمة',
    'nav.closeMenu': 'إغلاق القائمة',

    /* ---------------- Common ---------------- */
    'common.learnMore': 'اعرف المزيد',
    'common.getQuote': 'اطلب عرض سعر',
    'common.requestQuote': 'طلب عرض سعر',
    'common.viewSector': 'عرض القسم كاملاً',
    'common.backHome': 'العودة إلى الرئيسية',
    'common.sendInquiry': 'إرسال الاستفسار',
    'common.submit': 'إرسال الطلب',
    'common.submitting': 'جارٍ الإرسال',

    /* ---------------- Home: Hero ---------------- */
    'home.heroEyebrow': 'استيراد وتوريد من المصانع · شاندونغ، الصين',
    'home.heroTitle1': 'مصدرك المباشر لـ',
    'home.heroTitleAccent': 'المعدات الثقيلة',
    'home.heroTitle2': 'من الصين',
    'home.heroLead': 'نربط المستوردين والمقاولين والموزعين مع مصانع صينية معتمدة: شاحنات ومعدات إنشائية وآلات زراعية ومستلزمات طبية. أسعار مباشرة من المصنع، وفحص جودة موثّق، وشحن إلى جميع أنحاء العالم.',
    'home.heroCta1': 'اطلب عرض سعر',
    'home.heroCta2': 'استعرض أقسامنا',
    'home.stat1Num': '12',
    'home.stat1Label': 'عاماً من الخبرة في التوريد',
    'home.stat2Num': '40',
    'home.stat2Label': 'دولة نخدمها',
    'home.stat3Num': '300',
    'home.stat3Label': 'مصنع معتمد',
    'hero.cardAudit': 'زيارة ميدانية للمصنع',
    'hero.cardMachine': 'حفار 40 طناً',
    'hero.cardReady': 'جاهز للشحن',

    /* ---------------- Home: Trust bar ---------------- */
    'trust.label': 'شريك توريد موثوق',
    'trust.i1': 'مصانع معتمدة',
    'trust.i2': 'أسعار مباشرة من المصنع',
    'trust.i3': 'فحص قبل الشحن',
    'trust.i4': 'شحن عالمي',
    'trust.i5': 'مستندات تصدير كاملة',

    /* ---------------- Home: Intro ---------------- */
    'intro.eyebrow': 'من نحن',
    'intro.title': 'جسر تجاري موثوق بين المشترين حول العالم ومصانع الصين',
    'intro.p1': 'نحن وكالة توريد تجارية تأسست في جيان، عاصمة مقاطعة شاندونغ الصينية. نعمل كطبقة واحدة تربط المشترين الدوليين بشبكة من المصانع الصينية المعتمدة.',
    'intro.p2': 'عمودنا الفقري هو أربعة قطاعات نعرفها بعمق: الشاحنات، والمعدات الإنشائية، والآلات الزراعية، والمستلزمات الطبية. في كل قطاع نبني شبكة موردين خاصة بنا، ونتحقق من المصانع بأنفسنا بدلاً من الاعتماد على الوسطاء.',
    'intro.p3': 'أنت تتعامل مع فريق واحد مسؤول يعرف الصينية ويجيد الإنجليزية، ويتولى ملفك من الاستفسار الأول حتى وصول الحاوية إلى ميناء الوصول.',
    'intro.link': 'اقرأ عن الشركة',
    'intro.auditPoint': 'نزر المصانع ونفحصها قبل إضافتها إلى شبكتنا، فترى ملاحظات التدقيق لا مجرد شعار.',
    'intro.currencyPoint': 'عرض سعر بعملتك، مع المواصفات ومدة التسليم مكتوبة عليه.',
    'intro.managerPoint': 'مدير إنتاج يتحدث الصينية مخصص لطلبك طوال فترة التصنيع.',

    /* ---------------- Home: Sectors ---------------- */
    'sectors.eyebrow': 'أقسامنا الأربعة',
    'sectors.title': 'تخصص عميق في أربعة قطاعات',
    'sectors.lead': 'نحن لا نبيع كل شيء. نتخصص في الصناعات التي نعرف مصانعها وشهاداتها وأسعارها، ونعرف أين توجد الفرص الحقيقية.',

    'sectors.trucksDesc': 'شاحنات ثقيلة ونقل، وهياكل، وشاحنات تعمل بالديزل والكهرباء، وقطع غيار من مصانع معتمدة في شاندونغ وهبي.',
    'sectors.constructionDesc': 'حفارات ورافعات ومعدات تحميل ومعدات هدم ومضخات خرسانة، بشهادات CE وISO سارية المفعول.',
    'sectors.agricultureDesc': 'جراحات وحصادات ومحاثر ورشاشات وآلات زراعية متخصصة، بمقامات وأنواع محركات متعددة.',
    'sectors.medicalDesc': 'أجهزة ومستلزمات طبية وفق متطلبات رقابية مختلفة، مع شهادات ISO 13485 وCE وFDA حيثما تنطبق.',

    /* ---------------- Home: Process ---------------- */
    'process.eyebrow': 'كيف نعمل',
    'process.title': 'من طلبك إلى باب المصنع بخمس خطوات واضحة',
    'process.lead': 'عملية منظّمة ومُوثّقة. تعرف من يتعامل مع ملفك، وفي أي مرحلة هو، وما هو الخطوة التالية.',

    'process.s1Title': 'أرسل طلبك',
    'process.s1Desc': 'أرسل قائمتك أو صور المنتج أو وصف المعدات المطلوبة عبر النموذج أو واتساب أو البريد. نرد خلال 24 ساعة عمل.',
    'process.s2Title': 'المطابقة والتسعير',
    'process.s2Desc': 'نطابق طلبك مع مصانع معتمدة في شبكة موردينا، ونجمع ثلاثة عروض أسعار تنافسية تشمل السعر والحد الأدنى للطلب.',
    'process.s3Title': 'العينة والتحقق',
    'process.s3Desc': 'في المنتجات التي تتطلب ذلك، نرتب عينة أو نطلب صوراً وقياسات من المصنع قبل الالتزام، ونتأكد من شهادات الجودة.',
    'process.s4Title': 'التفاوض والعقد',
    'process.s4Desc': 'نتفاوض على السعر وشروط الدفع ومدة التسليم، ونصدر عقداً تجارياً واضحاً باللغتين يحمي طرفيه.',
    'process.s5Title': 'الإنتاج والجودة',
    'process.s5Desc': 'نتابع مراحل الإنتاج، وننفذ فحص جودة قبل الشحن داخل المصنع، ونرفق تقرير فحص مصوراً.',
    'process.s6Title': 'الشحن والتسليم',
    'process.s6Desc': 'ننسق مع وكيل الشحن، ونجهز مستندات التصدير والتأمين والفاتورة، ونواصل معك حتى وصول الشحنة إلى ميناء الوصول.',

    /* ---------------- Home: Why us ---------------- */
    'why.eyebrow': 'لماذا ساردية',
    'why.title': 'لماذا يختار المشترون ساردية',
    'why.lead': 'سوق التوريد مليء بالوسطاء والوعود غير الموثقة. نحن نبني طريقة عملنا لإزالة هذا الالتباس.',

    'why.c1Title': 'مصانع مختبرة وليست أسماء',
    'why.c1Desc': 'كل مصنع في شبكتا زرناه أو تحققنا منه بأنفسنا. نضع ملاحظات تدقيق المصنع وشهاداته في ملف المشروع قبل أن تدفع.',
    'why.c2Title': 'تسعير مباشر من المصنع',
    'why.c2Desc': 'نتعامل مع المصنع مباشرة دون وسطاء في كل طبقة. تحصل على سعر الجملة الحقيقي وتتجنب فرق الوسيط الذي يمتص من فاتورتك.',
    'why.c3Title': 'فحص جودة قبل الشحن',
    'why.c3Desc': 'يمكن إرسال فحص قبل الشحن أو تكليف طرف ثالث مستقل. نرفق تقرير فحص موثقاً بالصور مع كل طلب.',
    'why.c4Title': 'فريق يتحدث لغتين',
    'why.c4Desc': 'نتواصل مع المصنع بالصينية ومعك بالإنجليزية أو العربية. لا رسائل ضائعة في المنتصف ولا سوء فهم حول المواصفات.',
    'why.c5Title': 'شحن وتسليم متكامل',
    'why.c5Desc': 'ننسق مع وكلاء الشحن ونقدم جميع المستندات، ونتابع الشحن من باب المصنع حتى الميناء.',
    'why.c6Title': 'دعم ما بعد البيع',
    'why.c6Desc': 'الشحن ليس نهاية العمل. نتابع قطع الغيار، ويرسل المصنع أدلة الصيانة مترجمة، ويساعد فريقنا في مطالبات الضمان.',

    /* ---------------- Home: Stats band ---------------- */
    'stats.num1': '2,000',
    'stats.lab1': 'طلب توريد منجز',
    'stats.num2': '98',
    'stats.lab2': 'نسبة رضا العملاء',
    'stats.num3': '18',
    'stats.lab3': 'متوسط مدة التنفيذ بالأشهر',
    'stats.num4': '40',
    'stats.lab4': 'دولة نصدّر إليها',

    /* ---------------- Home: Testimonials ---------------- */
    'testi.eyebrow': 'آراء العملاء',
    'testi.title': 'ما يقوله المشترون عن تجربتهم معنا',
    'testi.q1': 'كنا نخشى التعامل مع مصنع في الصين دون وسيط، وخشية الوقوع في حيلة. فريق ساردية زر المصنع وأرسل لنا صور الماكينة قبل الدفع، واستلمنا عينة أولاً. صار الشراء واضحاً تماماً.',
    'testi.n1': 'خالد المنصوري',
    'testi.r1': 'مدير مشتريات — شركة مقاولات، الإمارات',
    'testi.q2': 'أفضل ما في العمل معهم هو سرعة الاستجابة. أرسلنا قائمة معدات وردّوا خلال ساعات. الحاوية جاهزة ووصلت في موعدها بالضبط.',
    'testi.n2': 'أحمد بونورة',
    'testi.r2': 'مستورد معدات — الجزائر',
    'testi.q3': 'نستورد المستلزمات الطبية ولدينا معايير صارمة. زودونا بكل الشهادات وتقرير فحص مفصلاً قبل الشحن، وهذا وفّر علينا نقاشاً طويلاً مع المورد.',
    'testi.n3': 'د. سارة الحربي',
    'testi.r3': 'مديرة المشتريات — مجموعة طبية، السعودية',

    /* ---------------- Home: FAQ ---------------- */
    'faq.eyebrow': 'أسئلة شائعة',
    'faq.title': 'أسئلة يطرحها المشترون علينا',
    'faq.q1': 'هل أتعامل مع المصنع مباشرة أم مع وسيط؟',
    'faq.a1': 'أنت تتعامل معنا كوكالة توريد، وهذا منصوص عليه في العقد ومتفق عليه مع المصنع. نحن لا نعيد بيع بضاعة تجارية بصفتها سلعة خاصة بنا، بل نعمل كوسيلة تك تا تعاقد مع المصنع مباشرة، ونأخذ عمولتنا من المصنع مقابل البحث والتوثيق وفحص الجودة. لهذا يكون السعر الذي تحصل عليه هو سعر الجملة الحقيقي، وتكون المسؤولية واضحة في العقد.',
    'faq.q2': 'ما هو الحد الأدنى للطلب؟',
    'faq.a2': 'يختلف حسب المنتج. معظم الآلات الثقيلة تكون الكمية المنطقية وحدة واحدة أو أكثر، بينما قد تتطلب بعض القطع الاستهلاكية كميات أكبر. نحدد ذلك مبكراً في عرض السعر، ونقترح دائماً خطة بديلة مختلطة تجمع أصنافاً مختلفة للوصول إلى قيمة طلب مفيدة.',
    'faq.q3': 'كم يستغرق التصنيع والشحن؟',
    'faq.a3': 'عادة من 25 إلى 35 يوماً للتصنيع بعد تأكيد الطلب وتحصيل الدفعة الأولى، ثم من 15 إلى 35 يوماً للشحن البحري أو من 5 إلى 12 يوماً جواً حسب الوجهة. تختلف المدد للمشاريع الكبيرة التي تحتاج شحناً خاصاً. نرسل لك جدولاً زمنياً واضحاً عند إصدار عرض السعر.',
    'faq.q4': 'كيف تتعاملون مع فحص الجودة؟',
    'faq.a4': 'ثلاثة مستويات. أولاً، التحقق من المصنع وسجل الشهادات قبل التعاقد. ثانياً، فحص تجميعي قبل الشحن مع قائمة تحقق من المواصفات وتقرير مصور. ثالثاً، فحص طرف ثالث مستقل إن طلبت ذلك. أي ملاحظة جوهرية نوقف الشحن ونعالجها قبل الإرسال.',
    'faq.q5': 'ما طرق الدفع التي تقبلونها؟',
    'faq.a5': 'عادة 30% حوالة مقدمة و70% مقابل نسخة بوليصة الشحن، أو خطاب اعتماد للطلبات الكبيرة. طرق أخرى ممكنة حسب حجم الطلب وبلد الشراء. نرسل لك بيانات البنك فور تأكيد الطلب.',
    'faq.q6': 'هل تساعدون في التخليص الجمركي والاستيراد؟',
    'faq.a6': 'نقدم قائمة تجهيز المستندات الكاملة: الفاتورة التجارية، وبوليصة الشحن، وشهادة المنشأ، وقائمة التعبئة، وشهادات المطابقة. ونساعد في ترجمة المستندات ومطابقتها مع متطلبات الاستيراد في بلدك. التخليص الجمركي يخضع لولايتك ولا نستطيع التحدث نيابة عنك، لكن فريقنا متاح للإجابة عن استفسارات الوكيل أثناء التصفية.',

    /* ---------------- Home: CTA ---------------- */
    'cta.title': 'جاهز للحصول على عرض سعر من مصنع صيني؟',
    'cta.body': 'أرسل قائمتك أو وصف مشروعك. سنعود إليك بعروض أسعار موثوقة خلال 24 ساعة عمل.',

    /* ---------------- Footer ---------------- */
    'footer.about': 'وكالة توريد تجارية مقرها جيان، شاندونغ. نربط المشترين الدوليين بالمصانع الصينية المعتمدة في أربعة قطاعات رئيسية.',
    'footer.sectorsTitle': 'الأقسام',
    'footer.companyTitle': 'الشركة',
    'footer.contactTitle': 'تواصل معنا',
    'footer.address': 'جيان، مقاطعة شاندونغ، الصين',
    'footer.hours': 'السبت إلى الخميس، 9:00 صباحاً حتى 6:00 مساءً بتوقيت الصين',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',

    /* ---------------- Sector: Trucks ---------------- */
    'trucks.nav': 'الشاحنات',
    'trucks.title': 'شاحنات النقل الثقيلة من مصانع الصين',
    'trucks.lead': 'شاحنات ثقيلة ومكبّسة وحافلات ونقل أسمنت وشاحنات كهربائية، من مصانع متحقَّق منها في شاندونغ وهبي وتشونغتشينغ. نفحص ونفاوض مع المصنع مباشرة، بلا وسطاء.',
    'trucks.f1': 'من 5 إلى 60 طناً',
    'trucks.f2': 'ديزل وكهرباء وهجين',
    'trucks.f3': 'شهادات CE وISO 9001',
    'trucks.ovEyebrow': 'نظرة عامة',
    'trucks.ovTitle': 'مصدر واحد لكل أنواع النقل الثقيل',
    'trucks.ovP1': 'شاحنات النقل الثقيل هي الطلب الأول في أي مشروع بنية تحتية أو مناولة أو لوجستيات. لهذا نبني شبكة موردين مركّزة على مصانع شاندونغ وهبي، المعروفة بجودة هياكلها وثبات معاملاتها وملاءمتها للتصدير.',
    'trucks.ovP2': 'نفحص تجهيزات كل مركبة، ونتأكد من مطابقة المحرك والهيكل لمتطلبات الانبعاثات في بلد الوجهة قبل أي التزام.',
    'trucks.prodEyebrow': 'المعدات',
    'trucks.prodTitle': 'نطاق منتجاتنا في الشاحنات',
    'trucks.p1': 'الشاحنات الثقيلة',
    'trucks.p1d': 'شاحنات نقل ثقيلة بمحركات توربو ديزل، بتكوينات 6×4 و8×4 و10×6، وحمولات متنوعة، وخيارات ناقل حركة متعددة.',
    'trucks.p2': 'الشاحنات المكبّسة',
    'trucks.p2d': 'شاحنات مكبّسة هيدروليكية بذراع رفع، بسعات من 3 إلى 10 أطنان، مناسبة لأعمال المناولة والتسوية.',
    'trucks.p3': 'حافلات المدن',
    'trucks.p3d': 'حافلات نقل الركاب وهواء مكيف، بطبقات عزل صوتي ومحركات مطابقة وهيكل معدني مقوّى.',
    'trucks.p4': 'شاحنات خلط الخرسانة',
    'trucks.p4d': 'خلاطات خرسانة بأسطوانة مائلة أو حلزونية، بسعات 3 إلى 12 متراً مكعباً، مع选择在 خلط متدرج.',
    'trucks.p5': 'شاحنات الصهاريج',
    'trucks.p5d': 'صهاريج نقل الوقود والزيوت والمياه، بهيكل ألمنيوم مقاوم للصدأ مع مضخة تحميل وتفريغ اختيارية.',
    'trucks.p6': 'الشاحنات الكهربائية',
    'trucks.p6d': 'شاحنات نقل كهربائية للمدن والموانئ، بمدى بطارية يصل إلى 300 كم وحزم بطاريات قابلة للاستبدال.',

    /* ---------------- Sector: Construction ---------------- */
    'con.nav': 'المعدات الإنشائية',
    'con.title': 'معدات إنشائية وآليات ثقيلة لمشاريعكم حول العالم',
    'con.lead': 'حفارات ورافعات ومعدات تحميل ومداحل ومعدات هدم ومضخات خرسانة من مصانع موثوقة تحمل شهادات CE وISO، مع تشكيلة قطع غيار وفريق دعم يبقى معكم بعد البيع.',
    'con.f1': 'من 1.5 إلى 80 طناً',
    'con.f2': 'شهادات CE وISO 9001',
    'con.f3': 'قطع غيار متوفرة دائماً',
    'con.ovEyebrow': 'نظرة عامة',
    'con.ovTitle': 'الآلة التي تحرّك مشروعكم',
    'con.ovP1': 'المعدات الإنشائية إحدى أقوى سلاسل التوريد في الصين، ويتركّز النضج الصناعي فيها في شاندونغ وجيانغسو وهونان. لكن السوق يعج بالمصدرين الذين لا يقدرون على الضمان، لذلك نختار عدداً محدوداً من المصانع ونتحقق من سجلاتها.',
    'con.ovP2': 'إلى جانب الآلة نفسها، نركز على ما يحدد تكلفتها الحقيقية على مدى سنوات: توافر قطع الغيار، وسهولة الصيانة، وتوفر الدعم الفني من المصنع.',
    'con.prodEyebrow': 'المعدات',
    'con.prodTitle': 'نطاق منتجاتنا في الإنشاءات',
    'con.p1': 'الحفارات',
    'con.p1d': 'حفارات هيدروليكية بوزن تشغيلي من 1.5 حتى 80 طناً، بمحركات ديزل وأذرع متعددة الاستخدامات وكابينة مريحة.',
    'con.p2': 'الرافعات',
    'con.p2d': 'رافعات برجية وعائمة ومتحركة بسعات من 8 حتى 250 طناً، بمكونات كهربائية وهياكل معتمدة.',
    'con.p3': 'معدات صب الخرسانة',
    'con.p3d': 'جلّادات ومضخات طرد وخلاطات، لمختلف أنواع الخرسانة وسرعات الضخ المطلوبة في موقع المشروع.',
    'con.p4': 'المداحل',
    'con.p4d': 'مداحل مطاطية وقاسية ومطارات بعجلات، بأوزان متعددة تغطي مختلف أنواع التربة وظروف العمل.',
    'con.p5': 'معدات الهدم وإعادة التدوير',
    'con.p5d': 'كسّارات الفك والمخالب الهيدروليكية وآلات الفرز، لتجهيز خطوط إعادة تدوير مواد الهدم والناتج.',
    'con.p6': 'قطع الغيار الثقيلة',
    'con.p6d': 'مسارات مطاطية وفرامل ومحركات ومضخات هيدروليكية، مع قاعدة تزويد طويلة الأجل لقطع الغيار.',

    /* ---------------- Sector: Agriculture ---------------- */
    'agri.nav': 'المعدات الزراعية',
    'agri.title': 'آلات زراعية من مصانع الصين',
    'agri.lead': 'جراحات وحصادات ومحاثر ورشاشات وآلات زراعية متخصصة، بمقامات محركات من 20 حصاناً حتى 400 حصان، مصممة للعمل في الحرارة العالية والرطوبة.',
    'agri.f1': 'من 20 إلى 400 حصان',
    'agri.f2': 'مصممة للحرارة والرطوبة',
    'agri.f3': 'قطع غيار متوفرة دائماً',
    'agri.ovEyebrow': 'نظرة عامة',
    'agri.ovTitle': 'آلة تعمل كما ينبغي في الحقل',
    'agri.ovP1': 'الزراعة سوق يكمن فيه الفرق بين آلة تعمل في موعدها الموعود وأخرى تقف في منتصف الحقل. لذلك نركز في التقييم على متانة الهيكل، وتوافر قطع الغيار محلياً في بلدك، وسهولة الصيانة الميدانية، وليس على السعر وحده.',
    'agri.ovP2': 'نرسل لك أدلة الصيانة مترجمة مع كل طلب، ونسق مع موزع محلي إذا رغبت لتغطية الضمان.',
    'agri.prodEyebrow': 'المعدات',
    'agri.prodTitle': 'نطاق منتجاتنا الزراعي',
    'agri.p1': 'الجرارات',
    'agri.p1d': 'جرارات بعجلات وبمسارات من 20 حتى 400 حصان، بمحركات ديزل رباعية الأسطوانات ونظام نقل حركة متقدم.',
    'agri.p2': 'الحصادات',
    'agri.p2d': 'حصادات القمح والأرز والذرة، بعرض حصاد من 4 حتى 12 متراً، بمحركات عالية الكفاءة وأنظمة تنظيف الحبوب متقدمة.',
    'agri.p3': 'المحاثر',
    'agri.p3d': 'محاثر الأقراص والمخالب وأنابيب التخميد والضخ، وتطبيقات التسميد بالضغط الهوائي للمحاصيل الصف والحبوب.',
    'agri.p4': 'الرشاشات',
    'agri.p4d': 'رشاشات معلقة ومحمولة وعالية الضغط، بخزانات من 200 حتى 3000 لتر، ومضخات ضغط عالٍ وأنظمة رش ذكية.',
    'agri.p5': 'المعدات المتخصصة',
    'agri.p5d': 'آلات زراعة الخضر، وقلع البطاطس، وحصاد العنب، وآلات تجهيز الأرض للمحاصيل عالية القيمة.',
    'agri.p6': 'آلات البذور والتغطية',
    'agri.p6d': 'بذّارات دقيقة وآلات تغطية تربة ومنظّمات، لضمان بداية ناجحة لموسم الزرع.',

    /* ---------------- Sector: Medical ---------------- */
    'med.nav': 'المستلزمات الطبية',
    'med.title': 'المستلزمات والأجهزة الطبية المطابقة للمعايير الدولية',
    'med.lead': 'أجهزة ومستلزمات طبية مطابقة لمتطلبات رقابية مختلفة، من ISO 13485 وCE إلى تسجيل FDA، مع وثائق مطابقة جاهزة للتخليص الجمركي.',
    'med.f1': 'ISO 13485 وCE وFDA',
    'med.f2': 'مستلزمات قابلة لإعادة الطلب',
    'med.f3': 'وثائق مطابقة كاملة',
    'med.ovEyebrow': 'نظرة عامة',
    'med.ovTitle': 'الجودة حيث تهم أكثر من غيرها',
    'med.ovP1': 'المستلزمات الطبية ليست سلعة تجارية عادية، فالخطأ فيها يضر بالمريض. لذلك هذا هو القطاع الوحيد الذي نتعامل فيه بطريقة أكثر صرامة: نتحقق من الشهادات وسجل المصنع، ونطلب اختبارات الثبات عند الحاجة، ونرفق تقرير مطابقة مع كل شحنة.',
    'med.ovP2': 'نعمل مع مصانع تحمل ISO 13485 وتنتج لعملاء في شبكة موردين موثوقة، ويمكننا توفير وثائق التسجيل للطلب التجريبي الأول.',
    'med.prodEyebrow': 'الأقسام',
    'med.prodTitle': 'نطاق منتجاتنا الطبية',
    'med.p1': 'أجهزة التنفس',
    'med.p1d': 'أجهزة أكسجين ومستنشقيات وأجهزة تنفس محمولة ووصلات، بشهادات ISO وCE وبحجم منخفض مناسب للاستخدام الميداني.',
    'med.p2': 'أجهزة القياس',
    'med.p2d': 'مقاييس حرارة رقمية، وأجهزة قياس ضغط أوتوماتيكية، وأجهزة سكر، وأجهزة تحاليل مخبرية أساسية.',
    'med.p3': 'مستلزمات الاستهلاك',
    'med.p3d': 'قفازات وكمامات وأطقم جرح ومحاقن وقطرات، بتغليف معقم وتواريخ صلاحية واضحة لكل دفعة.',
    'med.p4': 'أجهزة التعقيم',
    'med.p4d': 'أوتوكلافات وأجهزة تعقيم بالأشعة فوق البنفسجية ووحدات توزيع معتمدة من علامات تجارية موثوقة.',
    'med.p5': 'أجهزة العيادات',
    'med.p5d': 'أسرة قابلة للتعديل، وكراسي عيادات، وأثاث طبي، وأجهزة فحص مخبر أساسية بتصميم مريح.',
    'med.p6': 'معدات المختبرات',
    'med.p6d': 'أجهزة طرد مركزي وحاضنات وخزانات سوائل طبية وأجهزة قياس دقيقة متوافقة مع شروط المعايرة.',

    /* ---------------- About ---------------- */
    'about.nav': 'من نحن',
    'about.title': 'عن جيان ساردية الدولية لإدارة سلاسل التوريد',
    'about.lead': 'نحن فريق صيني متواضع الحجم نؤمن بأن التوريد الجيد عملية منظّمة، وبأن الوضوح هو المنتج الحقيقي الذي نبيعه.',
    'about.f1': 'تأسست في جيان، شاندونغ',
    'about.f2': 'فريق يتعامل بالعربية والإنجليزية والصينية',
    'about.f3': 'أربعة قطاعات متخصصة',
    'about.storyEyebrow': 'قصتنا',
    'about.storyTitle': 'من شركة تجارية إلى شريك توريد',
    'about.storyP1': 'بدأنا عام 2012 كشركة تجارية صغيرة تخدم مشاريع إنشائية محلية، كانت تشتري الحفارات والشاحنات للمقاولين في مقاطعة شاندونغ. ومع الوقت، بدأ العملاء يسألون عن المنتجات نفسها لأصدقائهم في الخارج.',
    'about.storyP2': 'في عام 2016 تأسست جيان ساردية الدولية لإدارة سلاسل التوريد رسمياً، باسم واضح ومباشر: نربط المشترين في العالم بالمصانع الصينية المعتمدة. اليوم نعمل مع أكثر من 300 مصنع معتمد، ونخدم عملاء في 40 دولة، من مقاولين في الخليج إلى مستوردين في شمال أفريقيا وآسيا وأوروبا.',
    'about.storyP3': 'ما لم يتغيّر: ما زلنا نعمل مع عدد محدود من الموردين المختارين، وما زلنا نُنهي أي ملف بأنفسنا قبل أن نعد.',
    'about.valEyebrow': 'قيمنا',
    'about.valTitle': 'أربع قواعد لا نتنازل عنها',
    'about.v1Title': 'الصدق في التكلفة',
    'about.v1Desc': 'نقول لك السعر الحقيقي ونشرح أين تذهب القيمة. لا رسوم خفية تظهر في النهاية.',
    'about.v2Title': 'الوضوح في المواصفات',
    'about.v2Desc': 'ما في العينة هو ما سيصلك. نتحقق من المواصفات ونرسل صوراً قبل أي التزام.',
    'about.v3Title': 'الالتزام بالمدة',
    'about.v3Desc': 'نقدم موعداً واقعياً ولا نعد بما لا نقدر. أي تأخير يُذكر مسبقاً مع بديل.',
    'about.v4Title': 'الاحترام في العمل',
    'about.v4Desc': 'نتواصل باحترام معك ومع المصنع. الثقة تجارة تمتد سنوات، ولا تُستنزف في نقاش واحد.',

    /* ---------------- Contact ---------------- */
    'contact.nav': 'اتصل بنا',
    'contact.title': 'تواصل معنا',
    'contact.lead': 'أرسل قائمتك أو وصف مشروعك، وسنعود إليك بعروض أسعار من مصانع معتمدة خلال 24 ساعة عمل.',
    'contact.formTitle': 'اطلب عرض سعر',
    'contact.formLead': 'كلما زادت التفاصيل، كانت عروضنا أفضل. املأ ما تعرفه واترك الباقي لنا.',
    'contact.whyEyebrow': 'ماذا يحدث بعد الإرسال',
    'contact.whyLead': 'ثلاث خطوات، وخلال يوم عمل واحد. إليك من يتولى طلبك ومتى ستصلك الرسالة بالضبط.',
    'contact.tab1': 'الهاتف وواتساب',
    'contact.tab2': 'البريد الإلكتروني',
    'contact.tab3': 'المقر',
    'contact.fName': 'الاسم الكامل',
    'contact.fNamePh': 'مثال: محمد أحمد',
    'contact.fCompany': 'اسم الشركة',
    'contact.fCompanyPh': 'اسم شركتك أو مشروعك',
    'contact.fEmail': 'البريد الإلكتروني',
    'contact.fEmailPh': 'name@company.com',
    'contact.fPhone': 'رقم الهاتف أو واتساب',
    'contact.fPhonePh': '+971 50 000 0000',
    'contact.fCountry': 'دولة الشحن',
    'contact.fCountryPh': 'اختر دولتك',
    'contact.fSector': 'القسم المطلوب',
    'contact.fSectorPh': 'اختر القسم',
    'contact.s1': 'الشاحنات',
    'contact.s2': 'المعدات الإنشائية',
    'contact.s3': 'المعدات الزراعية',
    'contact.s4': 'المستلزمات الطبية',
    'contact.s5': 'أخرى أو عدة أقسام',
    'contact.fQty': 'الكمية التقريبية',
    'contact.fQtyPh': 'مثال: 2 وحدة أو 500 قطعة',
    'contact.fMsg': 'تفاصيل الطلب',
    'contact.fMsgPh': 'اذكر نوع المنتج أو المواصفات أو أي متطلبات خاصة: الحد الأدنى للطلب، الشهادات، موعد التسليم.',
    'contact.fConsent': 'أوافق على تواصل معي بخصوص طلبي، وأعلم أن بياناتي ستُستخدم للرد على الاستفسار فقط.',
    'contact.sentTitle': 'تم إرسال طلبك',
    'contact.sentBody': 'شكراً لك. سيراجع فريقنا طلبك ويرد عليك خلال 24 ساعة عمل. احتفظ بالرقم المرجعي أدناه.',
    'contact.sentAgain': 'إرسال طلب آخر',
    'contact.whyTitle': 'ماذا يحدث بعد الإرسال',
    'contact.why1': 'مراجعة الطلب',
    'contact.why1d': 'نقرأ طلبك ونحدد القسم المسؤول ونتحقق من توافر المنتج لدى الموردين.',
    'contact.why2': 'جمع العروض',
    'contact.why2d': 'نجمع عروض أسعار من ثلاثة مصانع على الأقل مع المواصفات وشروط الدفع.',
    'contact.why3': 'الرد عليك',
    'contact.why3d': 'نرسل لك عرض سعر موحداً وواضحاً خلال 24 ساعة عمل، ونسعد بشرح أي بند فيه.',

    /* ---------------- Breadcrumbs ---------------- */
    'crumb.home': 'الرئيسية',
    'crumb.sectors': 'الأقسام',

    /* ---------------- Shared chrome ---------------- */
    'a11y.skip': 'تخطَّ إلى المحتوى',
    'topbar.verified': 'توريد من مصانع موثقة',
    'brand.name': 'جيان ساردية',
    'brand.top': 'جيان',
    'brand.bottom': 'ساردية',
    'brand.sub': 'إدارة سلاسل التوريد الدولية',
    'footer.verifiedBadge': 'مورد موثّق',
    'footer.companyName': 'شركة جيان ساردية الدولية لإدارة سلاسل التوريد المحدودة',

    /* Nav dropdown blurbs */
    'drop.trucks': 'شاحنات نقل ثقيلة ومكبّسة وكهربائية وصهريج',
    'drop.con': 'حفارات ورافعات ومعدات تحميل وهدم',
    'drop.agri': 'جرارات وحصادات ورشاشات',
    'drop.med': 'توثيق ISO 13485 وCE وFDA',

    /* Sector spec tags */
    'tag.truck.range': '5&ndash;60 طن',
    'tag.dieselElectric': 'ديزل وكهربائي',
    'tag.range80': '1.5&ndash;80 طن',
    'tag.range60': '18&ndash;60 طن',
    'tag.range10': '3&ndash;10 طن',
    'tag.range18m': '8&ndash;18 متر',
    'tag.range12m3': '3&ndash;12 م&sup3;',
    'tag.range30kl': '5&ndash;30 ألف لتر',
    'tag.range300km': '300 كم',
    'tag.range250t': '8&ndash;250 طن',
    'tag.range25t': '1.5&ndash;25 طن',
    'tag.range12m': '4&ndash;12 متر',
    'tag.range3000l': '200&ndash;3000 لتر',
    'tag.hydraulic': 'هيدروليكي',
    'tag.hp': '20&ndash;400 حصان',
    'tag.wheeled': 'بعجلات وبمسارات',
    'tag.exportReady': 'جاهز للتصدير',

    'tag.primeMover': 'مقطور ثقيل',
    'tag.tipper': 'مكبّسة',
    'tag.passenger': 'ركاب',
    'tag.mixer': 'خلاطة',
    'tag.tanker': 'صهريج',
    'tag.electric': 'كهربائية',

    'tag.lifting': 'رفع',
    'tag.concrete': 'خرسانة',
    'tag.boomPump': 'مضخة بوم',
    'tag.compaction': 'دك',
    'tag.recycling': 'إعادة تدوير',
    'tag.crusher': 'كسّارة',
    'tag.parts': 'قطع غيار',
    'tag.oem': 'مواصفة المصنع',

    'tag.tractor': 'جرّار',
    'tag.harvester': 'حصّادة',
    'tag.soilPrep': 'تجهيز تربة',
    'tag.mouldboard': 'قرص / لوح',
    'tag.sprayer': 'رشّاش',
    'tag.specialist': 'متخصص',
    'tag.custom': 'حسب الطلب',
    'tag.seeding': 'بذور',
    'tag.precision': 'دقيق',

    'tag.respiratory': 'تنفس',
    'tag.monitoring': 'قياس',
    'tag.consumable': 'استهلاك',
    'tag.sterile': 'معقم',
    'tag.sterilisation': 'تعقيم',
    'tag.furniture': 'أثاث',
    'tag.durable': 'متين',
    'tag.lab': 'مختبر',
    'tag.calibrated': 'معاير',

    /* Stats suffix */
    'stats.monthsSuffix': ' شهراً',

    /* Contact */
    'contact.hoursLabel': 'ساعات العمل',
    'contact.altTitle': 'تفضل البريد أو الاتصال؟',
    'contact.altBody1a': 'راسلنا على',
    'contact.altBody1b': 'أو اتصل على',
    'contact.altBody1c': 'خلال ساعات العمل.',
    'contact.altBody2': 'نعمل بالعربية والإنجليزية والصينية، فيمكنك الكتابة بأي لغة تريحك.',

    /* Country list */
    'c.other': 'دولة أخرى',

    /* ---------------- 404 ---------------- */
    'err404.title': 'الصفحة غير موجودة',
    'err404.body': 'الرابط الذي فتحته غير صحيح أو تم نقل الصفحة. استخدم القائمة للوصول إلى الأقسام، أو ارجع إلى الصفحة الرئيسية.',
    'err404.home': 'العودة إلى الرئيسية',
    'err404.contact': 'تواصل معنا'
  };

  /* --- Runtime state ----------------------------------------------------- */
  var STORAGE_KEY = 'sardia_lang';
  // Pre-rebrand visitors saved their choice under the old key. Reading it as a
  // fallback keeps their language preference across the rename.
  var LEGACY_STORAGE_KEY = 'sarida_lang';
  var DEFAULT_LANG = 'en';

  // Original (English) text for each key, captured from the HTML on first run.
  // Keyed by "attrName|key" so text and attributes never collide.
  var originals = null;

  // Which attribute each hook writes to. null = innerHTML.
  var ATTR_MAP = { ph: 'placeholder', aria: 'aria-label', title: 'title' };

  /** Every hook currently in the document, read live from the DOM. */
  function collectNodes() {
    var nodes = [];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      nodes.push({ el: el, attr: null, key: el.getAttribute('data-i18n') });
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      nodes.push({ el: el, attr: null, key: el.getAttribute('data-i18n-html') });
    });

    Object.keys(ATTR_MAP).forEach(function (short) {
      document.querySelectorAll('[data-i18n-' + short + ']').forEach(function (el) {
        nodes.push({
          el: el,
          attr: ATTR_MAP[short],
          key: el.getAttribute('data-i18n-' + short)
        });
      });
    });

    return nodes;
  }

  function storeKey(node) { return (node.attr || 'html') + '|' + node.key; }

  function read(node) {
    return node.attr ? node.el.getAttribute(node.attr) : node.el.innerHTML;
  }

  function write(node, value) {
    if (node.attr) node.el.setAttribute(node.attr, value);
    else node.el.innerHTML = value;
  }

  /* Suffix hooks ----------------------------------------------------------
     Values produced at runtime (stat counters, generated IDs) cannot live in
     the HTML, so they carry their own dictionary key:

         <span data-count="18" data-suffix=" mo" data-i18n-suffix="stats.x">18 mo</span>

     The attribute is appended after the original suffix so "18 mo" becomes
     "18 شهراً" in Arabic and reverts cleanly on the way back to English. */
  var SUFFIX_ATTR = 'data-i18n-suffix';

  function applySuffixes(lang) {
    document.querySelectorAll('[' + SUFFIX_ATTR + ']').forEach(function (el) {
      var base = el.getAttribute('data-suffix-base');
      if (base === null) {
        base = el.getAttribute('data-suffix') || '';
        el.setAttribute('data-suffix-base', base);
      }
      var translated = lang === 'ar' ? AR[el.getAttribute(SUFFIX_ATTR)] : null;
      el.setAttribute('data-suffix', translated != null ? translated : base);

      // Counter text is generated, so it cannot be restored from the HTML.
      // Recompute it from data-count; the observer skips finished nodes.
      if (el.hasAttribute('data-count')) {
        var raw = el.getAttribute('data-count');
        var target = parseFloat(raw);
        var decimals = (raw.split('.')[1] || '').length;
        el.textContent = target.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        }) + el.getAttribute('data-suffix');
      }
    });
  }

  /** Records the English text the first time we see each key. */
  function captureOriginals(nodes) {
    if (originals) return;
    originals = {};
    nodes.forEach(function (node) {
      var k = storeKey(node);
      if (!(k in originals)) originals[k] = read(node);
    });
  }

  /* Artwork swap -------------------------------------------------------------
     Labels baked into an .svg cannot be translated by the dictionary, so any
     image that carries its own lettering declares both variants:

         <img data-art-en="a.svg" data-art-ar="a.ar.svg">

     Non-existent Arabic variants are ignored, leaving the English artwork. */
  function swapArtwork(lang) {
    document.querySelectorAll('img[data-art-en]').forEach(function (img) {
      var wanted = lang === 'ar'
        ? img.getAttribute('data-art-ar')
        : img.getAttribute('data-art-en');
      if (wanted && img.getAttribute('src') !== wanted) {
        img.setAttribute('src', wanted);
      }
    });
  }

  /** Switches every translatable node to the given language. */
  function apply(lang) {
    var dict = lang === 'ar' ? AR : null;
    var nodes = collectNodes();

    captureOriginals(nodes);

    nodes.forEach(function (node) {
      if (!node.key) return;

      if (dict) {
        var translated = dict[node.key];
        // Untranslated key: fall back to English rather than blanking the node.
        write(node, translated != null ? translated : originals[storeKey(node)]);
      } else {
        write(node, originals[storeKey(node)]);
      }
    });

    var html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.classList.toggle('is-ar', lang === 'ar');

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    swapArtwork(lang);
    applySuffixes(lang);

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private browsing */ }
  }

  /** Reads the visitor's saved preference (falls back to English). */
  function getSaved() {
    try {
      return localStorage.getItem(STORAGE_KEY) ||
             localStorage.getItem(LEGACY_STORAGE_KEY) ||
             DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  return {
    apply: apply,
    getSaved: getSaved,
    get current() { return document.documentElement.getAttribute('lang') || DEFAULT_LANG; }
  };
})();

/* --- Boot: apply the saved preference as early as possible ---------------- */
(function () {
  var saved = window.SARDIA_I18N.getSaved();
  if (saved !== 'ar') return;

  var run = function () { window.SARDIA_I18N.apply('ar'); };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();