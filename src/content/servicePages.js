function page(ar, en) {
  return {
    lede: { ar: ar.lede, en: en.lede },
    overview: { ar: ar.overview, en: en.overview },
    scope: { ar: ar.scope, en: en.scope },
    outcomes: { ar: ar.outcomes, en: en.outcomes },
    signals: { ar: ar.signals, en: en.signals },
  };
}

export const CATEGORY_PROCESS = {
  consulting: [
    {
      title: { ar: "استكشاف", en: "Discover" },
      desc: {
        ar: "نقرأ الوضع الحالي، أصحاب القرار، والقيود التشغيلية قبل أي توصية.",
        en: "We read the current state, decision owners, and operating constraints before any recommendation.",
      },
    },
    {
      title: { ar: "تقييم", en: "Assess" },
      desc: {
        ar: "نحدد الفجوات والمخاطر والأولويات وفق أثرها على العمل لا وفق قائمة تقنية عامة.",
        en: "We rank gaps, risks, and priorities by business impact — not a generic tech checklist.",
      },
    },
    {
      title: { ar: "توصية", en: "Recommend" },
      desc: {
        ar: "خارطة تنفيذ مرحلية بمسؤوليات واضحة وما يُنفَّذ أولاً وما يُؤجَّل.",
        en: "A staged map with clear ownership: what to do first, and what can wait.",
      },
    },
    {
      title: { ar: "تمكين", en: "Enable" },
      desc: {
        ar: "نسلّم التوصية بشكل قابل للتنفيذ داخل فرقك، مع نقاط مراجعة بعد كل مرحلة.",
        en: "We hand over a plan your teams can run, with review points after each stage.",
      },
    },
  ],
  software: [
    {
      title: { ar: "استكشاف", en: "Discover" },
      desc: {
        ar: "نحدد المستخدم، العملية، ونقاط الاحتكاك قبل رسم الشاشات أو اختيار التقنية.",
        en: "We define the user, the process, and friction points before screens or stack choices.",
      },
    },
    {
      title: { ar: "تصميم", en: "Design" },
      desc: {
        ar: "معمارية وتجربة استخدام ونطاق تسليم واضح حتى لا يتوسع المشروع بلا قرار.",
        en: "Architecture, UX, and a defined delivery scope so the project does not expand without a decision.",
      },
    },
    {
      title: { ar: "بناء", en: "Build" },
      desc: {
        ar: "تطوير على مراحل مع مراجعة جودة وتكامل مستمر مع أنظمتك القائمة.",
        en: "Staged development with quality gates and ongoing integration into current systems.",
      },
    },
    {
      title: { ar: "إطلاق", en: "Launch" },
      desc: {
        ar: "تسليم آمن، تدريب المستخدم، ودعم بعد الإطلاق حتى يستقر التشغيل.",
        en: "A safe release, user enablement, and post-launch support until operations settle.",
      },
    },
  ],
  itsm: [
    {
      title: { ar: "تقييم التشغيل", en: "Assess operations" },
      desc: {
        ar: "نفهم كيف تصل الطلبات اليوم، وأين تضيع المسؤولية، وما يُقاس فعلاً.",
        en: "We see how requests arrive today, where ownership is lost, and what is actually measured.",
      },
    },
    {
      title: { ar: "تصميم النموذج", en: "Design the model" },
      desc: {
        ar: "نضع عمليات، أدواراً، ومستويات خدمة تناسب حجم مؤسستك لا نموذجاً مستورداً.",
        en: "Processes, roles, and service levels sized to your organization — not an imported template.",
      },
    },
    {
      title: { ar: "التنفيذ", en: "Implement" },
      desc: {
        ar: "إعداد الأدوات، تدفق العمل، والتكامل مع البنية حتى يعمل النموذج يومياً.",
        en: "Tools, workflows, and infrastructure integration so the model runs every day.",
      },
    },
    {
      title: { ar: "التشغيل", en: "Operate" },
      desc: {
        ar: "مؤشرات، تحسين مستمر، ومراجعة SLA حتى يبقى الدعم قابلاً للقياس.",
        en: "Indicators, continuous improvement, and SLA review so support stays measurable.",
      },
    },
  ],
  infrastructure: [
    {
      title: { ar: "مسح الوضع", en: "Survey" },
      desc: {
        ar: "جرد للشبكة والخوادم والتخزين ونقاط الفشل الحالية قبل أي توسعة.",
        en: "An inventory of network, servers, storage, and current failure points before any expansion.",
      },
    },
    {
      title: { ar: "تصميم البنية", en: "Design" },
      desc: {
        ar: "معمارية توازن الأداء والتوافر والتكلفة، مع مسار ترقية واضح.",
        en: "An architecture that balances performance, availability, and cost, with a clear upgrade path.",
      },
    },
    {
      title: { ar: "التنفيذ", en: "Deploy" },
      desc: {
        ar: "تركيب وتهيئة واختبار دون قطع الخدمة قدر الإمكان، وفق نافذة متفق عليها.",
        en: "Install, configure, and test with as little downtime as possible, inside an agreed window.",
      },
    },
    {
      title: { ar: "التشغيل", en: "Operate" },
      desc: {
        ar: "مراقبة، نسخ احتياطي، وإجراءات صيانة تبقي الأساس مستقراً بعد التسليم.",
        en: "Monitoring, backup, and maintenance so the foundation stays stable after handover.",
      },
    },
  ],
  cybersecurity: [
    {
      title: { ar: "تقييم المخاطر", en: "Assess risk" },
      desc: {
        ar: "نحدد الأصول الحرجة، مسارات الهجوم المحتملة، والفجوات في الرقابة الحالية.",
        en: "We identify critical assets, likely attack paths, and gaps in current controls.",
      },
    },
    {
      title: { ar: "الحماية", en: "Protect" },
      desc: {
        ar: "ضوابط هوية، صلاحيات، وشبكات تُطبَّق حسب أولوية الخطر لا دفعة واحدة عشوائية.",
        en: "Identity, access, and network controls applied by risk priority — not a random bulk rollout.",
      },
    },
    {
      title: { ar: "الرصد", en: "Detect" },
      desc: {
        ar: "مراقبة وكشف واستجابة حتى يظهر الحادث مبكراً ويُغلق بمسار واضح.",
        en: "Monitoring, detection, and response so incidents surface early and close on a clear path.",
      },
    },
    {
      title: { ar: "التحسين", en: "Improve" },
      desc: {
        ar: "مراجعة دورية للضوابط والسياسات بعد كل حادثة أو تغيير تشغيلي مهم.",
        en: "Periodic review of controls and policy after each incident or material operational change.",
      },
    },
  ],
  "cloud-ai": [
    {
      title: { ar: "فهم البيانات", en: "Understand the data" },
      desc: {
        ar: "مصادر البيانات، جودتها، ومن يملك القرار الذي يفترض أن تدعمه.",
        en: "Data sources, quality, and who owns the decision the solution is meant to support.",
      },
    },
    {
      title: { ar: "تصميم الحل", en: "Design" },
      desc: {
        ar: "نطاق سحابي أو تحليلي أو ذكاء اصطناعي مربوط بعملية حقيقية ومؤشر نجاح.",
        en: "A cloud, analytics, or AI scope tied to a real process and a success metric.",
      },
    },
    {
      title: { ar: "التنفيذ", en: "Implement" },
      desc: {
        ar: "بناء البيئة والنماذج ولوحات المتابعة مع ضبط تكلفة وأمان منذ البداية.",
        en: "Build the environment, models, and views with cost and security set from day one.",
      },
    },
    {
      title: { ar: "القياس", en: "Measure" },
      desc: {
        ar: "نتأكد أن المخرج يُستخدم في القرار، ثم نحسّن النموذج أو اللوحة وفق الاستخدام الفعلي.",
        en: "We confirm the output is used in decisions, then refine the model or dashboard from real use.",
      },
    },
  ],
  managed: [
    {
      title: { ar: "الاستلام", en: "Onboard" },
      desc: {
        ar: "نوثّق البيئة، المسؤوليات، ومستويات الدعم قبل أن نتحمّل التشغيل.",
        en: "We document the environment, ownership, and support levels before we take operations.",
      },
    },
    {
      title: { ar: "التشغيل", en: "Operate" },
      desc: {
        ar: "إجراءات يومية واضحة: من يراقب، من يصعّد، ومتى يُفتح بلاغ.",
        en: "Clear daily procedures: who watches, who escalates, and when a ticket is opened.",
      },
    },
    {
      title: { ar: "المراقبة", en: "Monitor" },
      desc: {
        ar: "إنذارات مبكرة للأداء والتوافر حتى يُعالج الخلل قبل المستخدم.",
        en: "Early signals on performance and availability so issues are handled before users feel them.",
      },
    },
    {
      title: { ar: "التحسين", en: "Improve" },
      desc: {
        ar: "مراجعة دورية للحوادث والصيانة حتى تقل المفاجآت مع الوقت.",
        en: "Periodic review of incidents and maintenance so surprises decline over time.",
      },
    },
  ],
  elv: [
    {
      title: { ar: "مسح الموقع", en: "Site survey" },
      desc: {
        ar: "نحدد نقاط التغطية، المداخل، ومسارات الكابلات وفق استخدام المبنى الفعلي.",
        en: "Coverage points, entrances, and cable paths based on how the building is actually used.",
      },
    },
    {
      title: { ar: "التصميم", en: "Design" },
      desc: {
        ar: "مخطط أنظمة متكاملة: كاميرات، دخول، صوت، وإنتركم كطبقة واحدة لا أجهزة منفصلة.",
        en: "An integrated plan: cameras, access, AV, and intercom as one layer — not isolated devices.",
      },
    },
    {
      title: { ar: "التركيب", en: "Install" },
      desc: {
        ar: "تنفيذ منظم مع اختبار كل نقطة قبل الإغلاق، وتقليل الإزعاج لشاغلي الموقع.",
        en: "Structured install with each point tested before close-out, and minimal disruption on site.",
      },
    },
    {
      title: { ar: "التسليم", en: "Handover" },
      desc: {
        ar: "تدريب المشغّل، وثائق النظام، وضمان أن الاسترجاع والمراجعة يعملان فعلاً.",
        en: "Operator training, system documentation, and proof that playback and review actually work.",
      },
    },
  ],
  training: [
    {
      title: { ar: "قياس الاحتياج", en: "Assess the need" },
      desc: {
        ar: "نحدد الأدوار، المستوى الحالي، وما يجب أن يستطيع الفريق عمله بعد البرنامج.",
        en: "Roles, current level, and what the team must be able to do after the program.",
      },
    },
    {
      title: { ar: "تصميم المسار", en: "Design the path" },
      desc: {
        ar: "محتوى عملي مربوط بأنظمتكم أو بسيناريوهات العمل اليومية لا بعرض نظري عام.",
        en: "Practical content tied to your systems or daily scenarios — not a generic lecture.",
      },
    },
    {
      title: { ar: "التنفيذ", en: "Deliver" },
      desc: {
        ar: "جلسات تطبيق، تمارين، وحالات حقيقية حتى يثبت المهارة لا المعلومة فقط.",
        en: "Applied sessions, exercises, and real cases so skill sticks — not just information.",
      },
    },
    {
      title: { ar: "القياس", en: "Measure" },
      desc: {
        ar: "تقييم بعد التدريب وتوصيات للمتابعة حتى لا يتوقف الأثر عند نهاية الدورة.",
        en: "Post-training assessment and follow-up recommendations so impact does not end with the course.",
      },
    },
  ],
};

export const SERVICE_PAGES = {
  "tech-consulting": page(
    {
      lede: "نقرأ بيئتك التقنية كما هي اليوم، ثم نضع توصيات معمارية واستثمارية يمكن تنفيذها داخل التشغيل — لا تقريراً يُحفظ في الأدراج.",
      overview: [
        "الاستشارة التقنية عندنا تبدأ من الواقع التشغيلي: الأنظمة الحالية، التكاملات الهشة، الديون التقنية، ومن يتخذ قرار الشراء. لا نأتي بقائمة منتجات جاهزة؛ نبني صورة واضحة لما يعمل، وما يكلّف المؤسسة وقتاً أو مخاطرة دون أن يظهر في الميزانية.",
        "المخرج توصية مرتبة حسب الأثر: ما يستحق الاستثمار الآن، وما يمكن تأجيله، وما يجب إيقافه. نربط كل بند بمسؤول داخل المؤسسة وبمعيار نجاح يمكن مراجعته بعد التنفيذ.",
      ],
      scope: [
        "تقييم المعمار الحالي للتطبيقات والبنية والتكامل",
        "تحديد أولويات الاستثمار التقني وفق أثر تشغيلي",
        "توصيات للانتقال أو التوحيد دون قطع الخدمة",
        "مواءمة التقنية مع أهداف الإدارة لا مع موضة السوق",
        "خارطة تنفيذ مرحلية بمسؤوليات ونقاط مراجعة",
      ],
      outcomes: [
        "رؤية واحدة للوضع التقني يفهمها التنفيذي والتشغيلي",
        "قرارات شراء أو ترقية مبنية على فجوة حقيقية",
        "تقليل الإنفاق المتكرر على حلول لا تتكامل",
        "مسار واضح للفريق الداخلي بعد انتهاء الاستشارة",
      ],
      signals: ["تقييم معماري", "أولويات استثمار", "خارطة تنفيذ"],
    },
    {
      lede: "We read your technology landscape as it actually runs today, then set architecture and investment advice your operations can execute — not a report that sits in a drawer.",
      overview: [
        "Technology consulting starts with operations: current systems, brittle integrations, technical debt, and who actually signs off on spend. We do not arrive with a product list. We build a clear picture of what works, and what costs time or risk without showing up in the budget.",
        "The deliverable is ranked advice: what deserves investment now, what can wait, and what should stop. Each item is tied to an owner inside the organization and a success measure you can review after delivery.",
      ],
      scope: [
        "Current architecture review for apps, infrastructure, and integration",
        "Investment priorities ranked by operational impact",
        "Migration or consolidation advice without cutting service",
        "Technology aligned to leadership goals, not market fashion",
        "A staged execution map with owners and review points",
      ],
      outcomes: [
        "One view of the tech landscape that executives and operators can share",
        "Buy or upgrade decisions tied to a real gap",
        "Less repeat spend on tools that never integrate",
        "A clear path for the internal team after the engagement ends",
      ],
      signals: ["Architecture review", "Investment priorities", "Execution map"],
    },
  ),

  "digital-transformation": page(
    {
      lede: "تحويل رقمي مرحلي يربط العمليات بالأنظمة الجديدة دون إيقاف العمل اليومي، وبمؤشرات تُظهر أن المرحلة أنجزت فعلاً.",
      overview: [
        "التحول الرقمي يفشل حين يُعامل كمشروع تقنية واحد. نحن نفكّه إلى مراحل: عملية، بيانات، نظام، وتبنٍ بشري. كل مرحلة لها نطاق مغلق ومعيار قبول حتى لا يبقى «التحول» شعاراً بلا تسليم.",
        "نبدأ بما يحرّك العمل يومياً — الطلبات، الموافقات، التقارير، خدمة العميل — ثم نبني المسار التقني حوله. النتيجة منصة أو مسار تشغيل جديد يعيش داخل الفرق، لا عرضاً تجريبياً ينتهي بعد الإطلاق.",
      ],
      scope: [
        "تحليل العمليات ذات الأثر الأعلى على الوقت والجودة",
        "تصميم مسار تحول مرحلي مع نوافذ تشغيل آمنة",
        "ربط الأنظمة الجديدة بالبيانات والصلاحيات الحالية",
        "إدارة التغيير داخل الفرق حتى يُستخدم الحل",
        "قياس أثر كل مرحلة قبل الانتقال إلى التالية",
      ],
      outcomes: [
        "تحول يمكن تشغيله بجانب العمل اليومي",
        "مراحل تسليم واضحة بدلاً من مشروع مفتوح بلا نهاية",
        "تبني أعلى لأن الفرق شاركت في تصميم المسار",
        "مؤشرات تثبت أن العملية تغيّرت لا أن النظام وُجد فقط",
      ],
      signals: ["مسار مرحلي", "دون توقف العمل", "قياس الأثر"],
    },
    {
      lede: "Staged digital transformation that connects operations to new systems without stopping daily work, with proof that each stage actually landed.",
      overview: [
        "Transformation fails when it is treated as one technology project. We break it into process, data, system, and adoption stages. Each stage has a closed scope and an acceptance bar, so “transformation” is not a slogan without delivery.",
        "We start with what moves work every day — requests, approvals, reporting, customer service — then build the technical path around it. The result is a platform or operating path that lives inside teams, not a pilot that fades after go-live.",
      ],
      scope: [
        "Process analysis on the work that costs the most time and quality",
        "A staged transformation path with safe operating windows",
        "New systems connected to current data and permissions",
        "Change management so the solution is actually used",
        "Impact measured before moving to the next stage",
      ],
      outcomes: [
        "Transformation that can run beside daily work",
        "Clear delivery stages instead of an open-ended program",
        "Higher adoption because teams helped shape the path",
        "Proof the process changed — not only that a system exists",
      ],
      signals: ["Staged path", "No work stoppage", "Measured impact"],
    },
  ),

  grc: page(
    {
      lede: "إطار حوكمة ومخاطر وامتثال يوضح من يملك القرار، وما يُراقَب، وكيف تُثبت المؤسسة التزامها دون تعطيل التشغيل.",
      overview: [
        "الحوكمة الضعيفة تظهر كصلاحيات مفتوحة، سياسات غير مطبّقة، ومراجعات تُجهَّز في اللحظة الأخيرة. نبني إطار GRC يربط السياسة بالعملية اليومية: من يعتمد التغيير، كيف تُسجَّل المخاطر، وأين يُثبت الامتثال.",
        "لا نكتب دليلاً منفصلاً عن العمل. نحدد الضوابط التي يمكن تشغيلها داخل ITSM والأمن والبنية، ثم نضع دورة مراجعة تناسب حجم المؤسسة ومتطلبات الجهات الرقابية ذات الصلة.",
      ],
      scope: [
        "تحديد الأدوار والمسؤوليات لقرارات التقنية والمخاطر",
        "سجل مخاطر مرتبط بالأصول والخدمات الحرجة",
        "سياسات وضوابط قابلة للتدقيق لا شعارات عامة",
        "مواءمة مع متطلبات الامتثال ذات الصلة بعملكم",
        "دورة مراجعة وتقارير للإدارة التنفيذية",
      ],
      outcomes: [
        "ملكية واضحة للقرار والمخاطر بدل الاجتهاد الفردي",
        "امتثال يمكن إثباته عند المراجعة لا عند الأزمة",
        "تقليل التعارض بين الأمن والتشغيل",
        "لوحة مخاطر تُحدَّث كجزء من العمل لا كمشروع سنوي",
      ],
      signals: ["أدوار واضحة", "سجل مخاطر", "ضوابط قابلة للتدقيق"],
    },
    {
      lede: "A GRC frame that shows who owns the decision, what is monitored, and how the organization proves commitment — without freezing operations.",
      overview: [
        "Weak governance shows up as open privileges, unused policy, and audits assembled at the last minute. We build a GRC frame that ties policy to daily work: who approves change, how risk is recorded, and where compliance is evidenced.",
        "We do not write a handbook detached from operations. We define controls that can run inside ITSM, security, and infrastructure, then set a review cycle sized to the organization and the regulators that actually apply.",
      ],
      scope: [
        "Roles and ownership for technology and risk decisions",
        "A risk register tied to critical assets and services",
        "Policies and controls that can be audited — not slogans",
        "Alignment with the compliance requirements that apply to you",
        "A review cycle and reporting path for leadership",
      ],
      outcomes: [
        "Clear ownership of decisions and risk instead of individual judgment",
        "Compliance you can prove at review — not only in a crisis",
        "Less conflict between security and operations",
        "A risk view updated as part of work, not a yearly project",
      ],
      signals: ["Clear roles", "Risk register", "Auditable controls"],
    },
  ),

  "gap-analysis": page(
    {
      lede: "مقارنة صريحة بين الوضع القائم والمستهدف، مع خطة إغلاق لكل فجوة: الأثر، المالك، والترتيب.",
      overview: [
        "تحليل الفجوات مفيد فقط إذا خرج بخطة عمل. نجمع الأدلة من الأنظمة، المقابلات، والسياسات المكتوبة، ثم نضع كل فجوة على مقياس واحد: أثر على الخدمة، احتمال الخطر، وجهد الإغلاق.",
        "النتيجة ليست قائمة نواقص طويلة. هي مسار إغلاق مرتب يمكن للإدارة تمويله وللتشغيل تنفيذه، مع تمييز ما هو حرج الآن وما يمكن جدولته في دورة لاحقة.",
      ],
      scope: [
        "توثيق الوضع الحالي مقابل المعيار أو الهدف المتفق عليه",
        "تصنيف الفجوات حسب الخطر والأثر التشغيلي",
        "خطة إغلاق بمسؤول ومدة ومعيار قبول",
        "كشف التعارض بين السياسات والممارسة الفعلية",
        "تقرير تنفيذي مختصر مع ملحق تفصيلي للفرق",
      ],
      outcomes: [
        "صورة مشتركة للفجوات بدل تقديرات متفرقة",
        "تمويل موجّه للفجوات الأعلى أثراً",
        "معيار واضح لانتهاء كل بند",
        "أساس لمشاريع التحول أو الامتثال اللاحقة",
      ],
      signals: ["وضع قائم", "فجوات مرتّبة", "خطة إغلاق"],
    },
    {
      lede: "An honest comparison of current and target state, with a close-out plan for every gap: impact, owner, and order.",
      overview: [
        "Gap analysis is useful only if it produces a work plan. We gather evidence from systems, interviews, and written policy, then place each gap on one scale: service impact, risk likelihood, and effort to close.",
        "The result is not a long defect list. It is a ranked close-out path leadership can fund and operations can run, with a clear split between what is critical now and what belongs in a later cycle.",
      ],
      scope: [
        "Document current state against the agreed standard or target",
        "Classify gaps by risk and operational impact",
        "A close-out plan with owner, timeline, and acceptance criteria",
        "Expose conflict between policy and actual practice",
        "A short executive brief plus a detailed annex for teams",
      ],
      outcomes: [
        "A shared picture of gaps instead of scattered estimates",
        "Funding aimed at the highest-impact gaps",
        "A clear bar for when each item is done",
        "A base for later transformation or compliance work",
      ],
      signals: ["Current state", "Ranked gaps", "Close-out plan"],
    },
  ),

  "bc-dr": page(
    {
      lede: "خطط استمرارية وتعافٍ تُختبَر، لا تُكتَب مرة واحدة. نحدد ما يجب أن يبقى يعمل، وبأي زمن يعود، ومن يحرّك الخطة عند الانقطاع.",
      overview: [
        "استمرارية الأعمال ليست نسخة احتياطية فقط. نحدد الخدمات الحرجة، زمن التعافي المقبول (RTO)، ونقطة الاستعادة (RPO)، ثم نبني إجراءات بشرية وتقنية تتوافق مع هذا الرقم — لا مع أمل عام بأن «النظام سيعود».",
        "نختبر الاستعادة في نافذة متفق عليها حتى تعرف الإدارة ماذا يحدث فعلاً عند الفشل. التسليم يشمل أدوار غرفة الأزمة، تسلسل التواصل، ومسار استعادة الأنظمة بالترتيب الصحيح.",
      ],
      scope: [
        "تحليل أثر الأعمال وتحديد الخدمات غير القابلة للتوقف",
        "تعريف RTO وRPO لكل خدمة حرجة",
        "تصميم موقع التعافي أو مسار الاستعادة السحابي",
        "إجراءات تواصل وتصعيد أثناء الانقطاع",
        "اختبار استعادة موثّق مع دروس مستفادة",
      ],
      outcomes: [
        "زمن تعافٍ متفق عليه يمكن قياسه",
        "ترتيب استعادة يمنع تشغيل نظام تابع قبل أصله",
        "فريق يعرف دوره وقت الأزمة دون ارتجال",
        "ثقة أعلى لدى الإدارة لأن الخطة اختُبرت",
      ],
      signals: ["RTO / RPO", "اختبار استعادة", "أدوار الأزمة"],
    },
    {
      lede: "Continuity and recovery plans that are tested, not written once. We define what must keep running, in what time it returns, and who moves the plan when service breaks.",
      overview: [
        "Business continuity is more than backup. We name critical services, acceptable recovery time (RTO), and restore point (RPO), then design people and technology procedures that match those numbers — not a hope that “the system will come back.”",
        "We test restore inside an agreed window so leadership knows what actually happens on failure. Delivery includes crisis roles, communication sequence, and the correct order for bringing systems back.",
      ],
      scope: [
        "Business impact analysis and services that cannot stop",
        "RTO and RPO defined for each critical service",
        "Recovery site or cloud restore path design",
        "Communication and escalation during an outage",
        "A documented restore test with lessons learned",
      ],
      outcomes: [
        "An agreed recovery time you can measure",
        "Restore order that does not start a dependent system before its source",
        "A team that knows its crisis role without improvising",
        "Higher leadership confidence because the plan was tested",
      ],
      signals: ["RTO / RPO", "Restore test", "Crisis roles"],
    },
  ),

  web: page(
    {
      lede: "منصات ويب سريعة وآمنة تُبنى حول العمل اليومي وتتكامل مع أنظمتك — لا واجهة جميلة تنفصل عن التشغيل.",
      overview: [
        "تطوير الويب عندنا يبدأ من المستخدم الداخلي أو الخارجي: ماذا ينجز في الجلسة، وأي بيانات يجب أن تظهر في لحظتها، وأين يحدث التأخير اليوم. نصمم المنصة لتلك الرحلة، مع أداء واضح على الشبكات الحقيقية لا في بيئة العرض فقط.",
        "نراعي الأمان، الصلاحيات، وإمكانية التوسع من اليوم الأول. التسليم يشمل بيئة تشغيل، توثيق للتكامل، ومسار إطلاق لا يقطع الخدمة القائمة إن كانت المنصة بديلاً لنظام قديم.",
      ],
      scope: [
        "تطبيقات ويب مؤسسية ولوحات تشغيل",
        "بوابات خدمة ذاتية للعملاء أو الموظفين",
        "تكامل مع أنظمة الهوية والبيانات الحالية",
        "أداء، حماية، وتجربة استخدام على المتصفح والجوال",
        "إطلاق مرحلي مع مراقبة بعد التسليم",
      ],
      outcomes: [
        "منصة يستخدمها الفريق فعلياً لا تُفتح في الاجتماعات فقط",
        "زمن استجابة مناسب لحجم البيانات الحقيقي",
        "صلاحيات متوافقة مع أدوار المؤسسة",
        "أساس يمكن توسيعه بوحدات لاحقة دون إعادة البناء",
      ],
      signals: ["أداء واضح", "تكامل تشغيلي", "إطلاق آمن"],
    },
    {
      lede: "Fast, secure web platforms built around daily work and connected to your systems — not a handsome interface that sits apart from operations.",
      overview: [
        "Web delivery starts with the internal or external user: what they finish in a session, which data must appear in the moment, and where delay lives today. We design the platform for that journey, with performance measured on real networks — not only in a demo environment.",
        "Security, permissions, and room to grow are set on day one. Delivery includes the runtime environment, integration notes, and a launch path that does not cut the current service if the platform replaces a legacy system.",
      ],
      scope: [
        "Enterprise web apps and operations consoles",
        "Self-service portals for customers or staff",
        "Integration with current identity and data systems",
        "Performance, protection, and UX on desktop and mobile browsers",
        "Staged launch with monitoring after handover",
      ],
      outcomes: [
        "A platform teams actually use — not one opened only in meetings",
        "Response times that match real data volume",
        "Permissions aligned to organizational roles",
        "A base you can extend with later modules without rebuilding",
      ],
      signals: ["Clear performance", "Operational integration", "Safe launch"],
    },
  ),

  mobile: page(
    {
      lede: "تطبيقات iOS وAndroid تُصمَّم لمهمة واضحة في اليد: أداء مستقر، تجربة قصيرة الخطوات، وارتباط حقيقي بالأنظمة الخلفية.",
      overview: [
        "تطبيق الجوال يفشل حين يُعامل كنسخة مصغّرة من الويب. نصمم التدفق للشاشة الصغيرة: أقل حقول، حالات انقطاع الشبكة، وإشعارات ذات معنى. نحدد إن كان الأصل أصلياً أو مشتركاً وفق احتياج الأداء والصيانة لا وفق تفضيل تقني مجرد.",
        "نربط التطبيق بواجهات آمنة، ونضع مساراً للتحديث والمتاجر، ونختبر على أجهزة حقيقية تمثل مستخدميكم. التسليم يشمل لوحة تشغيل للإصدارات ومراقبة الأعطال بعد الإطلاق.",
      ],
      scope: [
        "تطبيقات أصلية أو مشتركة لـ iOS وAndroid",
        "تدفقات ميدانية أو خدمة عملاء أو اعتماد داخلي",
        "تكامل آمن مع الأنظمة والهوية",
        "إدارة إصدارات ومتاجر وتحديثات",
        "اختبار أجهزة ومراقبة أعطال بعد الإطلاق",
      ],
      outcomes: [
        "تجربة مكتملة في اليد دون الحاجة لجهاز مكتبي",
        "استقرار أعلى في ظروف الشبكة الميدانية",
        "مسار تحديث لا يعتمد على اجتهاد المطوّر وقت الأزمة",
        "مؤشرات استخدام تُظهر إن كانت المهمة تُنجَز",
      ],
      signals: ["iOS وAndroid", "تدفق قصير", "خلفية آمنة"],
    },
    {
      lede: "iOS and Android apps designed for a clear job in the hand: stable performance, short paths, and a real link to back-end systems.",
      overview: [
        "Mobile fails when it is treated as a shrunk web app. We design for the small screen: fewer fields, offline moments, and notifications that mean something. Native or shared code is chosen by performance and maintenance need — not a purely technical preference.",
        "We connect the app through secure APIs, set a store and update path, and test on real devices that match your users. Delivery includes a release console and crash monitoring after launch.",
      ],
      scope: [
        "Native or shared apps for iOS and Android",
        "Field, customer-service, or internal-approval flows",
        "Secure integration with systems and identity",
        "Release, store, and update management",
        "Device testing and post-launch crash monitoring",
      ],
      outcomes: [
        "A complete job in the hand without needing a desktop",
        "Higher stability on field networks",
        "An update path that does not depend on a developer in a crisis",
        "Usage signals that show whether the job is actually finished",
      ],
      signals: ["iOS & Android", "Short flow", "Secure back end"],
    },
  ),

  "custom-software": page(
    {
      lede: "أنظمة تُصمَّم حول عملياتكم الفعلية — حين لا يكفي المنتج الجاهز، أو حين يكلّف تطويعه أكثر من بنائه بشكل صحيح.",
      overview: [
        "البرمجيات المخصصة ليست ترفاً. نلجأ إليها عندما تكون العملية ميزة تنافسية، أو عندما تتكدس الاستثناءات داخل أدوات عامة حتى تصبح أبطأ من العمل اليدوي. نوثّق القواعد كما يمارسها الفريق، ثم نبني نظاماً يفرضها بدل أن يلتف حولها.",
        "نحدد حدود المنتج منذ البداية: ما هو جوهر النظام، وما يبقى تكاملاً مع أدوات أخرى. هذا يمنع مشروعاً يحاول أن يكون كل شيء، ويبقي الصيانة ممكنة بعد التسليم.",
      ],
      scope: [
        "هندسة متطلبات من العملية لا من قائمة شاشات",
        "معمارية قابلة للتوسع والصيانة",
        "قواعد عمل، صلاحيات، ومسارات اعتماد",
        "تكامل انتقائي مع الأنظمة المحيطة",
        "توثيق وتشغيل ودعم بعد الإطلاق",
      ],
      outcomes: [
        "نظام يطابق طريقة عملكم لا العكس",
        "تقليل الحلول الجانبية والجداول المنفصلة",
        "ملكية أوضح للبيانات والقواعد",
        "تكلفة صيانة قابلة للتوقع",
      ],
      signals: ["حول عمليتك", "قواعد واضحة", "صيانة ممكنة"],
    },
    {
      lede: "Systems designed around your real workflows — when a packaged product is not enough, or when bending it costs more than building it properly.",
      overview: [
        "Custom software is not a luxury. We use it when the process is a competitive edge, or when exceptions pile up inside generic tools until they are slower than manual work. We document the rules as the team actually practices them, then build a system that enforces them instead of working around them.",
        "We set product boundaries on day one: what is the core system, and what stays an integration with other tools. That stops a project that tries to be everything, and keeps maintenance possible after handover.",
      ],
      scope: [
        "Requirements engineered from the process, not a screen list",
        "Architecture that can grow and be maintained",
        "Business rules, permissions, and approval paths",
        "Selective integration with surrounding systems",
        "Documentation, operations, and post-launch support",
      ],
      outcomes: [
        "A system that matches how you work — not the other way around",
        "Fewer side tools and disconnected spreadsheets",
        "Clearer ownership of data and rules",
        "Maintenance cost you can forecast",
      ],
      signals: ["Around your process", "Clear rules", "Maintainable"],
    },
  ),

  "ux-ui": page(
    {
      lede: "واجهات أوضح وخطوات أقصر حتى ينجز المستخدم المهمة دون شرح مطوّل أو أخطاء متكررة.",
      overview: [
        "تجربة الاستخدام تُقاس بالوقت حتى إتمام المهمة، لا بجمال الشاشة. نراقب أين يتردد المستخدم، وأي حقل يُملأ خطأ، وأين تتكدس النقرات. ثم نعيد ترتيب التدفق والصياغة البصرية لتخدم القرار لا الزخرفة.",
        "نعمل مع الأنظمة القائمة أو المنتجات الجديدة: إعادة تصميم شاشات حرجة، نظام تصميم موحّد، ونماذج أولية تُختبَر مع المستخدمين الحقيقيين قبل التطوير الكامل.",
      ],
      scope: [
        "بحث مستخدم ومراجعة تدفقات حرجة",
        "تصميم واجهات وتطبيق نظام بصري موحّد",
        "تقليل الخطوات والحقول غير الضرورية",
        "حالات فارغة، أخطاء، وتحميل تُصمَّم لا تُترك للمصادفة",
        "اختبار قابلية استخدام قبل الإطلاق",
      ],
      outcomes: [
        "وقت أقصر لإنجاز المهمة الشائعة",
        "أخطاء إدخال أقل ودعم أقل للأسئلة المتكررة",
        "اتساق بصري عبر الشاشات والأنظمة",
        "ثقة أعلى عند تسليم النظام للفرق غير التقنية",
      ],
      signals: ["خطوات أقصر", "اختبار مستخدم", "اتساق بصري"],
    },
    {
      lede: "Clearer interfaces and shorter paths so the user finishes the job without a long briefing or repeating the same mistakes.",
      overview: [
        "UX is measured by time-to-complete, not how pretty the screen looks. We watch where users hesitate, which fields are filled wrong, and where clicks pile up. Then we reorder the flow and visual language to serve the decision — not decoration.",
        "We work on current systems or new products: redesign of critical screens, a unified design system, and prototypes tested with real users before full build.",
      ],
      scope: [
        "User research and review of critical flows",
        "Interface design and a shared visual system",
        "Fewer steps and unnecessary fields",
        "Empty, error, and loading states designed on purpose",
        "Usability testing before launch",
      ],
      outcomes: [
        "Less time to finish the common job",
        "Fewer input errors and fewer repeat support questions",
        "Visual consistency across screens and systems",
        "More confidence when non-technical teams receive the system",
      ],
      signals: ["Shorter paths", "User testing", "Visual consistency"],
    },
  ),

  integration: page(
    {
      lede: "ربط الأنظمة في مسار بيانات واحد: طلب يُنشأ مرة، ويصل لكل جهة تحتاجه، دون نسخ يدوي بين الجزر المنفصلة.",
      overview: [
        "التكامل الرديء يُظهر نفسه كنسخ مزدوج، أرقام لا تتطابق، وموظف ينقل الملف من نظام إلى آخر. نصمم عقود بيانات واضحة: ماذا يُرسل، متى، ومن يملك المصدر، وكيف تُعالج الأخطاء دون أن تضيع المعاملة.",
        "نختار الأسلوب المناسب — واجهات برمجية، رسائل، أو مزامنة مجدولة — وفق زمن الحاجة إلى البيانات وحجمها. النتيجة مسار يمكن مراقبته، لا سكربت يعمل في الخفاء حتى ينكسر.",
      ],
      scope: [
        "رسم خريطة الأنظمة ومصادر الحقيقة",
        "تصميم واجهات وتدفقات أحداث أو مزامنة",
        "معالجة أخطاء وإعادة محاولة دون تكرار ضار",
        "أمن التكامل: هوية، صلاحيات، وتشفير",
        "مراقبة التكامل وتنبيهات عند انقطاع المسار",
      ],
      outcomes: [
        "بيانات متسقة عبر الأنظمة دون إدخال مكرر",
        "زمن أقصر لإتمام العملية العابرة للأنظمة",
        "أعطال تظهر في لوحة لا يكتشفها المستخدم أولاً",
        "إمكانية إضافة نظام جديد دون إعادة ربط كل شيء يدوياً",
      ],
      signals: ["مصدر حقيقة", "مسار واحد", "مراقبة الربط"],
    },
    {
      lede: "Connect systems into one data path: a request is created once and reaches every party that needs it — without manual copies between islands.",
      overview: [
        "Poor integration shows up as duplicate entry, numbers that do not match, and a staff member moving a file from one system to another. We design clear data contracts: what is sent, when, who owns the source, and how errors are handled without losing the transaction.",
        "API, messaging, or scheduled sync is chosen by how soon the data is needed and how large it is. The result is a path you can monitor — not a hidden script that works until it breaks.",
      ],
      scope: [
        "Map systems and sources of truth",
        "Design APIs, event flows, or synchronization",
        "Error handling and retries without harmful duplication",
        "Integration security: identity, permissions, encryption",
        "Integration monitoring and alerts when the path breaks",
      ],
      outcomes: [
        "Consistent data across systems without repeat entry",
        "Shorter time to finish cross-system work",
        "Failures that surface on a dashboard before the user finds them",
        "Room to add a new system without rewiring everything by hand",
      ],
      signals: ["Source of truth", "One path", "Watched links"],
    },
  ),

  automation: page(
    {
      lede: "أتمتة للمهام المتكررة التي تستهلك وقت الفريق وتُنتج أخطاء نسخ: قواعد واضحة، استثناءات معلومة، ومسار مراجعة حين يفشل التشغيل الآلي.",
      overview: [
        "لا نؤتمت الفوضى. أولاً نثبّت الخطوة اليدوية الناجحة، ثم نحولها إلى قاعدة. نبدأ من الإجراءات الأعلى تكراراً والأوضح معياراً — إنشاء تذكرة، نقل ملف، إشعار، مطابقة بيانات — ونترك الحالات الشاذة لمسار بشري واضح.",
        "كل أتمتة لها سجل تشغيل ومالك. إذا توقفت، يعرف الفريق أين ينظر. هذا أهم من عدد السكربتات؛ الأتمتة بلا رقابة تُصبح مصدر انقطاع صامت.",
      ],
      scope: [
        "حصر المهام المتكررة وقياس وقتها الحالي",
        "تصميم قواعد واستثناءات وموافقات",
        "ربط الأتمتة بالأنظمة عبر واجهات آمنة",
        "سجلات تشغيل وتنبيهات عند الفشل",
        "تحسين مستمر بعد مراقبة الأسابيع الأولى",
      ],
      outcomes: [
        "ساعات أقل في العمل التكراري",
        "أخطاء يدوية أقل في النقل والمطابقة",
        "زمن استجابة أقصر للإجراءات القياسية",
        "فريق يركز على الاستثناء لا على النسخ",
      ],
      signals: ["قواعد ثابتة", "استثناء بشري", "سجل تشغيل"],
    },
    {
      lede: "Automation for repeating work that burns team time and creates copy errors: clear rules, known exceptions, and a review path when the run fails.",
      overview: [
        "We do not automate chaos. First we lock the successful manual step, then turn it into a rule. We start with the highest-volume, clearest-criteria work — ticket creation, file movement, notification, data match — and leave odd cases on a clear human path.",
        "Every automation has a run log and an owner. If it stops, the team knows where to look. That matters more than the number of scripts; unwatched automation becomes a silent outage source.",
      ],
      scope: [
        "Inventory repeating tasks and measure current time",
        "Design rules, exceptions, and approvals",
        "Connect automation to systems through secure APIs",
        "Run logs and alerts on failure",
        "Refinement after watching the first weeks of live use",
      ],
      outcomes: [
        "Fewer hours spent on repeating work",
        "Fewer manual errors in copy and matching",
        "Faster cycle time on standard procedures",
        "A team that handles exceptions instead of copying data",
      ],
      signals: ["Fixed rules", "Human exception", "Run log"],
    },
  ),

  "service-desk": page(
    {
      lede: "مكتب خدمة واحد للطلبات والدعم: استلام واضح، تصنيف صحيح، ومسار من الفتح حتى الإغلاق يعرفه الموظف والمستخدم.",
      overview: [
        "مكتب الخدمة ليس صندوق بريد. نصمم قنوات الدخول، نماذج الطلب، وقواعد التوجيه حتى لا تُفتح تذكرة «عامة» تضيع بين الفرق. كل طلب له نوع، أولوية، ومالك من اللحظة الأولى.",
        "نربط المكتب بقاعدة معرفة وإدارة حوادث وأصول حتى يُغلق الطلب من سياق كامل لا من ذاكرة المهندس. نقيس زمن الاستجابة والحل، ونراجع الأسباب المتكررة لا الأرقام التجميلية فقط.",
      ],
      scope: [
        "تصميم قنوات الاستلام والتصنيف والتوجيه",
        "بوابة طلبات ونماذج حسب نوع الخدمة",
        "ربط بالمعرفة والحوادث والأصول",
        "مستويات دعم وتصعيد واضحة",
        "تقارير أداء للمكتب وجودة الإغلاق",
      ],
      outcomes: [
        "نقطة تواصل واحدة بدل رسائل متفرقة",
        "تذاكر أقل تُعاد لأنها صُنّفت خطأ",
        "زمن استجابة يمكن الالتزام به",
        "معرفة تتراكم بدل حلّ يعاد من الصفر",
      ],
      signals: ["قناة واحدة", "تصنيف صحيح", "إغلاق معلوم"],
    },
    {
      lede: "One service desk for requests and support: clear intake, correct classification, and a path from open to close that staff and users both understand.",
      overview: [
        "A service desk is not a mailbox. We design intake channels, request forms, and routing rules so a “general” ticket is not opened and lost between teams. Every request has a type, a priority, and an owner from the first moment.",
        "We connect the desk to knowledge, incident, and asset processes so tickets close from full context — not an engineer’s memory. We measure response and resolve time, and we review repeating causes, not vanity counts.",
      ],
      scope: [
        "Intake, classification, and routing design",
        "A request portal and forms by service type",
        "Links to knowledge, incidents, and assets",
        "Support tiers and clear escalation",
        "Desk performance and close-quality reporting",
      ],
      outcomes: [
        "One contact point instead of scattered messages",
        "Fewer tickets reopened because they were classed wrong",
        "Response time you can commit to",
        "Knowledge that accumulates instead of solving from scratch",
      ],
      signals: ["One channel", "Correct class", "Known close"],
    },
  ),

  itom: page(
    {
      lede: "إدارة عمليات تقنية ترى حالة البنية والخدمات قبل أن يتحول الخلل إلى انقطاع يكتشفه المستخدم.",
      overview: [
        "ITOM تربط المراقبة بالتشغيل: اكتشاف الأصول، صحة الخدمات، والعلاقات بينها. حين يسقط مكوّن، يظهر أثره على الخدمة لا كإنذار أصم في قائمة طويلة.",
        "نبني نموذجاً تشغيلياً يناسب حجم بيئتكم: ما يُراقَب، ما يُصعَّد تلقائياً، وما يبقى مؤشراً للمراجعة. الهدف تقليل الضجيج وزيادة الإشارة التي تدفع عملاً حقيقياً.",
      ],
      scope: [
        "اكتشاف ورسم تبعيات البنية والخدمات",
        "مؤشرات صحة وتوافر مرتبطة بالخدمة لا بالجهاز فقط",
        "قواعد إنذار تقلل الضجيج الكاذب",
        "ربط الأحداث بمكتب الخدمة وإدارة الحوادث",
        "تحسين مستمر لعتبات المراقبة",
      ],
      outcomes: [
        "رؤية مبكرة للخلل قبل بلاغ المستخدم",
        "إنذارات أقل لكنها ذات معنى",
        "فهم أوضح لأثر سقوط مكوّن على الخدمة",
        "تشغيل يومي أقل ارتعاشاً وأكثر قراراً",
      ],
      signals: ["صحة الخدمة", "أقل ضجيجاً", "أثر واضح"],
    },
    {
      lede: "IT operations management that sees infrastructure and service health before a fault becomes an outage the user discovers.",
      overview: [
        "ITOM connects monitoring to operations: asset discovery, service health, and the relationships between them. When a component fails, its effect on the service is visible — not a mute alarm in a long list.",
        "We build an operating model sized to your environment: what is watched, what escalates automatically, and what stays a review signal. The aim is less noise and more signal that drives real work.",
      ],
      scope: [
        "Discovery and mapping of infrastructure and service dependencies",
        "Health and availability indicators tied to the service, not only the device",
        "Alert rules that cut false noise",
        "Events linked to the service desk and incident process",
        "Ongoing tuning of monitoring thresholds",
      ],
      outcomes: [
        "Earlier sight of faults before a user ticket",
        "Fewer alerts, each with meaning",
        "A clearer view of how a component failure hits the service",
        "Daily operations with less jitter and more decision",
      ],
      signals: ["Service health", "Less noise", "Clear impact"],
    },
  ),

  incident: page(
    {
      lede: "استجابة حوادث منظمة: أولوية صحيحة، تواصل واضح، واستعادة خدمة وفق زمن متفق عليه — ثم مراجعة حتى لا يتكرر السبب.",
      overview: [
        "الحادث يُدار بالساعة لا بالانطباع. نضع تعريفاً للحدة، مساراً للتصعيد، وقالب تواصل للإدارة والمستخدمين. أثناء الانقطاع يعرف الجميع من يقود، ومن ينفّذ، ومن يحدّث الحالة.",
        "بعد الاستعادة نغلق الحادث بمراجعة سبب جذري وإجراء وقائي مرتبط بمالك. بدون هذه الحلقة يبقى الفريق بطلاً في الإطفاء وضعيفاً في المنع.",
      ],
      scope: [
        "تصنيف الحوادث ودرجات الخطورة",
        "غرفة عمليات وأدوار أثناء الانقطاع",
        "تواصل الحالة مع الإدارة والمستفيدين",
        "ربط بالمراقبة والأصول والتغييرات الأخيرة",
        "مراجعة ما بعد الحادث وإغلاق الأسباب",
      ],
      outcomes: [
        "زمن أقصر لاستعادة الخدمة",
        "ارتباك أقل أثناء الانقطاع",
        "تكرار أقل لنفس السبب",
        "ثقة أعلى لأن التواصل يحدث في وقته",
      ],
      signals: ["أولوية واضحة", "استعادة أسرع", "منع التكرار"],
    },
    {
      lede: "Structured incident response: the right priority, clear communication, and service restore against an agreed time — then a review so the cause does not repeat.",
      overview: [
        "Incidents are managed by the clock, not by impression. We define severity, an escalation path, and a communication template for leadership and users. During an outage everyone knows who leads, who executes, and who updates status.",
        "After restore we close the incident with a root-cause review and a preventive action tied to an owner. Without that loop the team stays heroic at firefighting and weak at prevention.",
      ],
      scope: [
        "Incident classification and severity grades",
        "An operations room and roles during outage",
        "Status communication to leadership and consumers",
        "Links to monitoring, assets, and recent changes",
        "Post-incident review and cause close-out",
      ],
      outcomes: [
        "Shorter time to restore service",
        "Less confusion during an outage",
        "Fewer repeats of the same cause",
        "Higher trust because communication happens on time",
      ],
      signals: ["Clear priority", "Faster restore", "Stop repeats"],
    },
  ),

  change: page(
    {
      lede: "تغييرات على الأنظمة بتقييم أثر وموافقة قبل التنفيذ — حتى لا يكون الإطلاق مفاجأة للتشغيل ولا باباً مفتوحاً للحوادث.",
      overview: [
        "معظم الانقطاعات تبدأ بتغيير غير محسوب. نبني عملية تغيير تناسب سرعتكم: مسار عادي، مسار عاجل، واستثناءات ضيقة موثّقة. كل تغيير يوضح ما سيتأثر، وكيف يُختبر، وكيف يُرجع إن فشل.",
        "نربط التغيير بالحوادث والأصول حتى تظهر الأنماط: نفس النظام، نفس النافذة، نفس المخاطر. الهدف ليس تعقيد الموافقة، بل منع التغيير الصامت الذي لا يملكه أحد.",
      ],
      scope: [
        "سياسات وأنواع التغيير ونوافذ التنفيذ",
        "تقييم أثر ومخاطر وموافقات حسب الدرجة",
        "خطط اختبار وتراجع",
        "سجل تغيير مرتبط بالبنية والخدمات",
        "مراجعة التغييرات الفاشلة وتحسين القواعد",
      ],
      outcomes: [
        "حوادث أقل بعد الإطلاق",
        "تنفيذ أوضح داخل نافذة متفق عليها",
        "قدرة على التراجع دون ارتجال",
        "أثر التغيير ظاهر للإدارة والتشغيل",
      ],
      signals: ["تقييم أثر", "موافقة مسبقة", "خطة تراجع"],
    },
    {
      lede: "System changes with impact review and approval before go-live — so a release is not a surprise to operations, and not an open door to incidents.",
      overview: [
        "Most outages start with an uncounted change. We build a change process sized to your speed: standard, emergency, and a narrow documented exception path. Every change states what will be hit, how it is tested, and how it is rolled back if it fails.",
        "We link change to incidents and assets so patterns show: same system, same window, same risk. The aim is not slower approval. It is to stop silent change that nobody owns.",
      ],
      scope: [
        "Change policy, types, and implementation windows",
        "Impact, risk, and approvals by grade",
        "Test and rollback plans",
        "A change record linked to infrastructure and services",
        "Review of failed changes and rule improvement",
      ],
      outcomes: [
        "Fewer incidents after go-live",
        "Clearer execution inside an agreed window",
        "Rollback without improvising",
        "Change impact visible to leadership and operations",
      ],
      signals: ["Impact review", "Prior approval", "Rollback plan"],
    },
  ),

  asset: page(
    {
      lede: "جرد وتتبع للأصول التقنية طوال دورة حياتها: من الشراء حتى الإخراج، مع مالك وحالة وموقع يمكن الرجوع إليه.",
      overview: [
        "بدون سجل أصول، تتحول الميزانية إلى تخمين والدعم إلى بحث. نبني نموذجاً للأجهزة والبرمجيات والعقود: ماذا يوجد، أين يعمل، ومن المسؤول، ومتى ينتهي الدعم.",
        "نربط الأصول بالحوادث والتغيير حتى يعرف المهندس السياق قبل أن يلمس الجهاز. ونضع قواعد إخراج آمنة حتى لا تبقى بيانات على أصل غادر المؤسسة.",
      ],
      scope: [
        "نموذج بيانات للأجهزة والبرمجيات والتراخيص",
        "اكتشاف ومطابقة مع الجرد اليدوي",
        "دورة حياة: إدخال، نقل، صيانة، إخراج",
        "ربط بالأفراد والعقود ومواقع العمل",
        "تقارير تكلفة ونهاية العمر الافتراضي",
      ],
      outcomes: [
        "صورة موثوقة لما تمتلكه المؤسسة",
        "دعم أسرع لأن الأصل معروف سلفاً",
        "ترخيص وشراء أقل عشوائية",
        "إخراج أصول دون تسريب بيانات",
      ],
      signals: ["جرد حي", "دورة حياة", "مالك لكل أصل"],
    },
    {
      lede: "Inventory and tracking for IT assets across their full lifecycle: from purchase to retirement, with an owner, status, and location you can trust.",
      overview: [
        "Without an asset record, budget becomes a guess and support becomes a search. We model hardware, software, and contracts: what exists, where it runs, who is responsible, and when support ends.",
        "We link assets to incidents and change so an engineer has context before touching a device. We set a safe retirement path so data does not leave on an asset that has already left the organization.",
      ],
      scope: [
        "A data model for hardware, software, and licenses",
        "Discovery matched against physical inventory",
        "Lifecycle: intake, move, maintain, retire",
        "Links to people, contracts, and sites",
        "Cost and end-of-life reporting",
      ],
      outcomes: [
        "A reliable picture of what the organization owns",
        "Faster support because the asset is already known",
        "Less random licensing and purchasing",
        "Asset retirement without data leakage",
      ],
      signals: ["Live inventory", "Full lifecycle", "An owner per asset"],
    },
  ),

  sla: page(
    {
      lede: "اتفاقيات مستوى خدمة يمكن قياسها: أزمنة استجابة وحل، استثناءات معلومة، ومراجعة مع الإدارة لا شعارات جودة عامة.",
      overview: [
        "SLA بلا قياس عقد اجتماعي هش. نعرّف الخدمات، ساعات التغطية، وأهداف الزمن حسب حرجية العمل. ثم نربطها بمكتب الخدمة والمراقبة حتى يُحسب الالتزام من النظام لا من الذاكرة.",
        "نضع تقارير شهرية تُظهر الالتزام والاستثناءات والأسباب. هذا يحوّل النقاش من اللوم إلى تحسين السعة أو إعادة تصنيف الخدمة.",
      ],
      scope: [
        "كتالوج خدمات مرتبط بأهداف زمنية",
        "تعريف ساعات التغطية وأولويات الأعمال",
        "قياس الالتزام من التذاكر والمراقبة",
        "إدارة الاستثناءات والاعتمادات",
        "مراجعة دورية مع الإدارة والعملاء الداخليين",
      ],
      outcomes: [
        "التزام معلن يمكن إثباته",
        "توقعات أوضح بين التقنية وخطوط الأعمال",
        "قرارات سعة مبنية على أرقام لا انطباع",
        "تحسين مستمر لمستوى الخدمة لا جدال متكرر",
      ],
      signals: ["أهداف زمنية", "قياس آلي", "مراجعة دورية"],
    },
    {
      lede: "Service-level agreements you can measure: response and resolve times, known exceptions, and a review with leadership — not generic quality slogans.",
      overview: [
        "An SLA without measurement is a fragile social contract. We define services, coverage hours, and time targets by business criticality. Then we bind them to the service desk and monitoring so commitment is calculated by the system, not by memory.",
        "Monthly reports show attainment, exceptions, and causes. That moves the conversation from blame to capacity or to reclassifying the service.",
      ],
      scope: [
        "A service catalog tied to time targets",
        "Coverage hours and business priorities",
        "Attainment measured from tickets and monitoring",
        "Exception and approval handling",
        "Periodic review with leadership and internal customers",
      ],
      outcomes: [
        "A stated commitment you can prove",
        "Clearer expectations between IT and the business",
        "Capacity decisions based on numbers, not impression",
        "Ongoing service-level improvement instead of repeating arguments",
      ],
      signals: ["Time targets", "System measurement", "Periodic review"],
    },
  ),

  networks: page(
    {
      lede: "شبكات مستقرة تربط الفروع والأنظمة بأداء وأمان واضح: تصميم، تجزئة، ومراقبة تمنع أن يكون الاتصال نقطة الفشل الصامتة.",
      overview: [
        "الشبكة الجيدة لا تُلاحظ. نبدأ بمسح الاستخدام الحقيقي: أين الازدحام، أين الشبكة اللاسلكية تضعف، وأين تُفتح مسارات أوسع مما يلزم. ثم نصمم تجزئة ومسارات بديلة تناسب نمو الفروع لا مخططاً يُرسم مرة واحدة.",
        "نضع أمان الحافة والوصول ضمن التصميم، لا كطبقة تُلصق لاحقاً. التسليم يشمل وثائق العنونة، إجراءات التغيير، ومؤشرات تُظهر التأخير وفقد الحزم قبل شكوى المستخدم.",
      ],
      scope: [
        "تصميم شبكات الفروع والمقر والربط الواسع",
        "تجزئة، لاسلكي، ووصول آمن للزوار والموظفين",
        "توافر ومسارات بديلة للنقاط الحرجة",
        "مراقبة الأداء والسعة",
        "توثيق وتشغيل بعد التركيب",
      ],
      outcomes: [
        "اتصال ثابت بين المواقع والأنظمة",
        "سطح هجوم أصغر عبر التجزئة",
        "سعة تُخطَّط قبل أن يظهر الاختناق",
        "تشغيل أوضح عند إضافة فرع أو خدمة",
      ],
      signals: ["تجزئة واضحة", "أداء مراقَب", "مسار بديل"],
    },
    {
      lede: "Stable networks that connect branches and systems with clear performance and security: design, segmentation, and monitoring so connectivity is not a silent failure point.",
      overview: [
        "A good network is unnoticed. We start with real use: where congestion sits, where wireless fades, and where paths are more open than they need to be. Then we design segmentation and failover that can grow with branches — not a drawing made once.",
        "Edge and access security sit inside the design, not as a layer glued on later. Delivery includes addressing docs, change procedures, and signals that show latency and loss before a user complains.",
      ],
      scope: [
        "Branch, HQ, and wide-area network design",
        "Segmentation, wireless, and secure guest/staff access",
        "Availability and failover on critical paths",
        "Performance and capacity monitoring",
        "Documentation and operations after install",
      ],
      outcomes: [
        "Steady connectivity between sites and systems",
        "A smaller attack surface through segmentation",
        "Capacity planned before congestion appears",
        "Clearer operations when a branch or service is added",
      ],
      signals: ["Clear segmentation", "Watched performance", "Failover path"],
    },
  ),

  servers: page(
    {
      lede: "خوادم تُدار لتطبيقاتكم الحرجة: سعة صحيحة، توافر محسوب، ومراقبة تجعل العطل إشارة مبكرة لا اكتشافاً متأخراً.",
      overview: [
        "الخادم ليس صندوقاً يُشغَّل ويُترك. نحدد أحمال العمل، نفصل البيئات، ونضع سياسة تحديث ونسخ تناسب حرجية كل تطبيق. التوافر يُصمَّم: تجميع، انتقال، أو استعادة — وفق ما يستحقه العمل لا وفق أقصى مواصفة دائماً.",
        "نسلّم مع إجراءات تشغيل يومية ومعايير سعة حتى تعرفون متى تضيفون مورداً قبل أن يختنق الأداء.",
      ],
      scope: [
        "تصميم ونشر خوادم فيزيائية أو افتراضية",
        "فصل بيئات الإنتاج والاختبار",
        "تحديثات مخططة وإدارة إعدادات",
        "مراقبة موارد وأحداث النظام",
        "توثيق التشغيل ونقل المعرفة للفريق",
      ],
      outcomes: [
        "استقرار أعلى للتطبيقات الحرجة",
        "نوافذ صيانة معلومة بدل ترقيعات مفاجئة",
        "سعة تُراجع بأرقام",
        "فريق داخلي قادر على المتابعة بعد التسليم",
      ],
      signals: ["توافر محسوب", "سعة واضحة", "تحديث مخطط"],
    },
    {
      lede: "Servers managed for your critical applications: the right capacity, designed availability, and monitoring that makes a fault an early signal — not a late discovery.",
      overview: [
        "A server is not a box you power on and leave. We size workloads, separate environments, and set patch and backup policy by how critical each application is. Availability is designed: clustering, failover, or restore — matched to the work, not always the maximum spec.",
        "We hand over daily operating procedures and capacity baselines so you know when to add resource before performance chokes.",
      ],
      scope: [
        "Design and deploy physical or virtual servers",
        "Separation of production and test environments",
        "Planned patching and configuration management",
        "Resource and system-event monitoring",
        "Run documentation and knowledge transfer",
      ],
      outcomes: [
        "Higher stability for critical applications",
        "Known maintenance windows instead of surprise patches",
        "Capacity reviewed with numbers",
        "An internal team able to follow on after handover",
      ],
      signals: ["Designed availability", "Clear capacity", "Planned patching"],
    },
  ),

  storage: page(
    {
      lede: "تخزين يتوسع مع البيانات ويبقي الوصول سريعاً ومنظماً: طبقات حسب الأهمية، حماية من الفقد، ومسار واضح للنمو.",
      overview: [
        "تخزين واحد لكل شيء إما يكلّف زيادة أو يقصّر مع البيانات الحرجة. نصمم طبقات: سريع للتشغيل، أوسع للأرشيف، ومحمي للنسخ. نحدد بروتوكولات الوصول وحصص الاستخدام حتى لا يملأ مشروع واحد المساحة بصمت.",
        "نربط التخزين بالنسخ الاحتياطي والأمان: من يصل، وما يُشفَّر، وكيف تُستعاد مجموعة بيانات دون استعادة البيئة كلها إن أمكن.",
      ],
      scope: [
        "تصميم سعة وطبقات أداء",
        "تخزين ملفات وكتل وكائنات حسب الاحتياج",
        "حماية بيانات وصلاحيات وصول",
        "مراقبة الامتلاء والأداء",
        "مسار توسعة دون انقطاع الخدمة",
      ],
      outcomes: [
        "أداء مناسب لأحمال العمل الحقيقية",
        "تكلفة أدنى عبر وضع البيانات في الطبقة الصحيحة",
        "فقد بيانات أقل بفضل الحماية المتفق عليها",
        "نمو يمكن التخطيط له قبل نفاد المساحة",
      ],
      signals: ["طبقات أداء", "نمو مخطط", "وصول محمي"],
    },
    {
      lede: "Storage that grows with your data and keeps access fast and organized: tiers by importance, protection against loss, and a clear growth path.",
      overview: [
        "One store for everything either overspends or under-serves critical data. We design tiers: fast for operations, wider for archive, protected for copies. Access protocols and quotas stop one project filling space in silence.",
        "Storage is bound to backup and security: who reaches it, what is encrypted, and how a dataset is restored without restoring the whole environment when that is possible.",
      ],
      scope: [
        "Capacity and performance-tier design",
        "File, block, and object storage as needed",
        "Data protection and access permissions",
        "Fill and performance monitoring",
        "An expansion path without cutting service",
      ],
      outcomes: [
        "Performance matched to real workloads",
        "Lower cost by placing data on the right tier",
        "Less data loss through agreed protection",
        "Growth you can plan before space runs out",
      ],
      signals: ["Performance tiers", "Planned growth", "Protected access"],
    },
  ),

  virtualization: page(
    {
      lede: "بيئات افتراضية تستغل الموارد أفضل وتسهّل النقل والتوسعة، مع عزل واضح بين الأحمال حتى لا يسقط كل شيء معاً.",
      overview: [
        "الافتراضية ليست تكديس أجهزة افتراضية على مضيف حتى يختنق. نصمم كثافة معقولة، شبكات تخزين وحركة، وسياسات نقل عند الصيانة. نفصل الأحمال الحرجة عن التجريبية، ونضع قوالب بناء تمنع الانتشار العشوائي.",
        "التسليم يشمل مراقبة المضيفين، سعة الذاكرة والمعالج، ومسار ترقية للمنصة دون مفاجأة للتطبيقات.",
      ],
      scope: [
        "تصميم منصة افتراضية وسعة مضيفين",
        "شبكات وتخزين للأحمال الافتراضية",
        "قوالب، عزل، وسياسات موارد",
        "نقل وصيانة دون توقف مطوّل",
        "مراقبة السعة وأداء المنصة",
      ],
      outcomes: [
        "استخدام أعلى للأجهزة مع استقرار محسوب",
        "توفير بيئة جديدة أسرع للقِطَع الجديدة",
        "صيانة أسهل عبر النقل الحي أو المخطط",
        "انضباط يمنع تضخم الأجهزة الافتراضية بلا مالك",
      ],
      signals: ["كثافة محسوبة", "عزل أحمال", "نقل مرن"],
    },
    {
      lede: "Virtual environments that use resources better and make move and scale simpler, with clear isolation so one workload does not take everything down.",
      overview: [
        "Virtualization is not packing guests onto a host until it chokes. We design sensible density, storage and movement networks, and live-move policy for maintenance. Critical loads are separated from experimental ones, and build templates stop random sprawl.",
        "Delivery includes host monitoring, memory and CPU headroom, and a platform upgrade path that does not surprise applications.",
      ],
      scope: [
        "Virtual platform and host-capacity design",
        "Networking and storage for virtual workloads",
        "Templates, isolation, and resource policy",
        "Moves and maintenance without long downtime",
        "Platform capacity and performance monitoring",
      ],
      outcomes: [
        "Higher hardware use with designed stability",
        "Faster provision of new environments",
        "Easier maintenance through live or planned move",
        "Discipline that stops ownerless VM sprawl",
      ],
      signals: ["Sensible density", "Workload isolation", "Flexible move"],
    },
  ),

  "data-center": page(
    {
      lede: "تجهيز وتشغيل مراكز بيانات بمعايير طاقة وتبريد وأمن فيزيائي — الغرفة تُعامل كمنظومة، لا كمجموعة أجهزة.",
      overview: [
        "مركز البيانات ينهار من مسار طاقة واحد أو تبريد غير محسوب قبل أن ينهار من الخادم. نبدأ بالموقع: الحمل، التكرار، التهوية، والتحكم في الدخول. ثم نرتب الركائز والممرات والكابلات لتبقى الصيانة ممكنة بعد التشغيل.",
        "نضع إجراءات زيارة، إخماد، ومراقبة بيئية. التسليم وثائق تشغيل يمكن لفريق الموقع اتباعها دون الاعتماد على من ركّب في الأسبوع الأول.",
      ],
      scope: [
        "تصميم المساحة والطاقة والتبريد",
        "أمن فيزيائي وتحكم في الدخول للغرفة",
        "ترتيب الركائز والكابلات والممرات",
        "مراقبة بيئية وإنذار مبكر",
        "إجراءات تشغيل وصيانة للموقع",
      ],
      outcomes: [
        "توافر أعلى لأن نقاط الفشل الأحادية قُلّصت",
        "صيانة آمنة دون إغلاق الغرفة كلها",
        "بيئة مستقرة للأجهزة الحرجة",
        "تشغيل موقعي موثّق بعد التسليم",
      ],
      signals: ["طاقة وتبريد", "أمن فيزيائي", "تشغيل موثّق"],
    },
    {
      lede: "Build and operate data centers to power, cooling, and physical-security standards — the room treated as a system, not a pile of equipment.",
      overview: [
        "A data center fails from a single power path or undersized cooling before it fails from a server. We start with the site: load, redundancy, airflow, and access control. Then we lay out racks, aisles, and cabling so maintenance stays possible after go-live.",
        "We set visit, suppression, and environmental-monitoring procedures. Delivery is run documentation a site team can follow without depending on whoever installed in week one.",
      ],
      scope: [
        "Space, power, and cooling design",
        "Physical security and room access control",
        "Rack, cabling, and aisle layout",
        "Environmental monitoring and early alarm",
        "Site operating and maintenance procedures",
      ],
      outcomes: [
        "Higher availability because single points of failure were reduced",
        "Safer maintenance without shutting the whole room",
        "A stable environment for critical equipment",
        "Documented site operations after handover",
      ],
      signals: ["Power & cooling", "Physical security", "Documented ops"],
    },
  ),

  backup: page(
    {
      lede: "نسخ منتظم واستعادة مختبرة حتى لا يبقى التعافي افتراضاً. نحدد ماذا يُنسخ، إلى أين، وفي أي زمن يُستعاد.",
      overview: [
        "النسخ الذي لا يُختبر هو أرشيف للأمل. نبني سياسة حسب حرجية البيانات: تكرار، احتفاظ، وعزل عن بيئة الإنتاج حتى لا يُشفَّر النسخ مع الأصل. ثم نجري استعادة لعينة حقيقية ونوثّق الزمن الفعلي.",
        "نربط النسخ بـ BC/DR عند الحاجة، ونحدد من يطلق الاستعادة. التقارير تُظهر نجاح المهام والفشل لا «اكتمال المهمة» الزائف.",
      ],
      scope: [
        "سياسة نسخ حسب نوع البيانات والحرجية",
        "عزل النسخ وحصانة ضد التشفير الجماعي",
        "جدولة ومراقبة نجاح المهام",
        "اختبارات استعادة دورية موثّقة",
        "توثيق إجراءات الاستعادة للفريق",
      ],
      outcomes: [
        "قدرة استعادة مُثبتة لا موعودة",
        "فقد بيانات ضمن حدود متفق عليها",
        "ثقة أعلى عند حادثة أو خطأ بشري",
        "تقارير تُظهر الفشل مبكراً",
      ],
      signals: ["سياسة واضحة", "استعادة مختبرة", "عزل النسخ"],
    },
    {
      lede: "Regular backups with tested restore, so recovery is proven — not assumed. We define what is copied, where it goes, and in what time it returns.",
      overview: [
        "Untested backup is an archive of hope. We set policy by data criticality: frequency, retention, and isolation from production so copies are not encrypted with the source. Then we restore a real sample and document actual time.",
        "We bind backup to BC/DR when needed, and we name who launches restore. Reports show job success and failure — not a false “completed” flag.",
      ],
      scope: [
        "Backup policy by data type and criticality",
        "Copy isolation and resilience against mass encryption",
        "Scheduling and success monitoring",
        "Documented periodic restore tests",
        "Restore procedures for the team",
      ],
      outcomes: [
        "Restore capability that is proven, not promised",
        "Data loss inside agreed limits",
        "Higher confidence after an incident or human error",
        "Reports that surface failure early",
      ],
      signals: ["Clear policy", "Tested restore", "Isolated copies"],
    },
  ),

  soc: page(
    {
      lede: "مركز عمليات أمنية يراقب التهديدات باستمرار: تحليل، تصنيف، واستجابة قبل أن يتسع الأثر داخل الشبكة.",
      overview: [
        "SOC ليس شاشة ممتلئة بالإنذارات. نصمم تغطية المصادر، قواعد الكشف، ونوبات الاستجابة وفق حجم بيئتكم. كل تنبيه له مسار: إغلاق كضوضاء، أو تحقيق، أو حادث أمني بقيادة واضحة.",
        "نربط المركز بـ SIEM والهوية والبنية حتى يرى المحلل سياقاً لا سجلاً أصم. نقيس زمن الكشف والاستجابة، ونحسّن القواعد من الحوادث الحقيقية لا من قوالب عامة فقط.",
      ],
      scope: [
        "نموذج تشغيل ونوبات تغطية",
        "مصادر أحداث وقواعد كشف",
        "تحقيق واستجابة وتصعيد",
        "تكامل مع SIEM والهوية والحوادث",
        "تحسين مستمر لمحتوى الكشف",
      ],
      outcomes: [
        "كشف أبكر للنشاط المشبوه",
        "استجابة بمنهج لا باجتهاد فردي",
        "ضجيج أقل على طاولة المحلل",
        "دروس تُعاد إلى الضوابط بعد كل حادثة",
      ],
      signals: ["تغطية مستمرة", "مسار استجابة", "أقل ضجيجاً"],
    },
    {
      lede: "A security operations center that watches threats continuously: analysis, classification, and response before impact spreads on the network.",
      overview: [
        "A SOC is not a screen full of alarms. We design source coverage, detection content, and response shifts sized to your environment. Every alert has a path: close as noise, investigate, or open a security incident with a named lead.",
        "We connect the center to SIEM, identity, and infrastructure so an analyst sees context, not a mute log. We measure time to detect and respond, and we tune rules from real incidents — not only generic packs.",
      ],
      scope: [
        "Operating model and coverage shifts",
        "Event sources and detection content",
        "Investigation, response, and escalation",
        "Integration with SIEM, identity, and incidents",
        "Continuous improvement of detection content",
      ],
      outcomes: [
        "Earlier detection of suspicious activity",
        "Response by method, not individual heroics",
        "Less noise on the analyst desk",
        "Lessons fed back into controls after each incident",
      ],
      signals: ["Continuous coverage", "Response path", "Less noise"],
    },
  ),

  siem: page(
    {
      lede: "تجميع الأحداث الأمنية في رؤية واحدة لكشف الأنماط مبكراً: مصادر صحيحة، قواعد ذات معنى، وتخزين يناسب التحقيق.",
      overview: [
        "SIEM بلا مصادر جيدة يضاعف الضجيج. نحدد ما يُرسل، وكيف يُطبَّع، وأي قواعد تستحق التشغيل في بيئتكم. نربط الهوية والشبكات والخوادم والتطبيقات الحرجة حتى يظهر مسار المهاجم لا إنذار منفصل من كل جهة.",
        "نضبط الاحتفاظ والوصول للسجلات بما يناسب التحقيق والامتثال. المنصة أداة للمحلل والـ SOC؛ ليست لوحة تُعرض في الاجتماع ثم تُترك.",
      ],
      scope: [
        "اختيار المصادر وتطبيع الأحداث",
        "قواعد ارتباط وكشف مخصصة للبيئة",
        "لوحات وتحقيقات للمحلل",
        "احتفاظ وأمن سجلات",
        "تكامل مع الاستجابة والحوادث",
      ],
      outcomes: [
        "رؤية موحّدة بدل سجلات متفرقة",
        "كشف أنماط لا تظهر في نظام واحد",
        "تحقيق أسرع بسياق كامل",
        "أساس امتثال لمراجعة السجلات",
      ],
      signals: ["مصادر صحيحة", "ارتباط الأحداث", "تحقيق أسرع"],
    },
    {
      lede: "Collect security events into one view to spot patterns earlier: the right sources, rules that mean something, and retention that supports investigation.",
      overview: [
        "A SIEM without good sources multiplies noise. We define what is sent, how it is normalized, and which rules deserve to run in your environment. Identity, networks, servers, and critical apps are joined so an attacker path appears — not a separate alarm from each silo.",
        "Retention and log access are set for investigation and compliance. The platform is a tool for the analyst and the SOC — not a slide in a meeting that is then ignored.",
      ],
      scope: [
        "Source selection and event normalization",
        "Correlation and detection content fitted to the environment",
        "Analyst dashboards and investigations",
        "Log retention and log security",
        "Integration with response and incidents",
      ],
      outcomes: [
        "One view instead of scattered logs",
        "Pattern detection that a single system cannot show",
        "Faster investigation with full context",
        "A compliance base for log review",
      ],
      signals: ["Right sources", "Event correlation", "Faster investigation"],
    },
  ),

  pentest: page(
    {
      lede: "اختبار دفاعاتكم كما يراها المهاجم: نطاق متفق عليه، إثبات عملي للثغرات، وأولويات إصلاح يفهمها التطوير والتشغيل.",
      overview: [
        "اختبار الاختراق ليس مسحاً آلياً يُرسل كملف PDF. نتفق على النطاق والقواعد، ثم نحاكي مسارات هجوم واقعية على التطبيقات والشبكات والهوية حسب الاتفاق. كل نتيجة تُرفق بخطورة وأثر إثبات وإرشاد إغلاق.",
        "نعيد الاختبار على البنود الحرجة بعد الإصلاح إن طُلب، حتى لا تُغلق الثغرة شكلياً. التقرير يفصل التنفيذي عن التقني حتى تُموَّل الإصلاحات بالترتيب الصحيح.",
      ],
      scope: [
        "اختبار تطبيقات وشبكات وبنية حسب النطاق",
        "قواعد اشتباك ونوافذ آمنة",
        "تقرير تنفيذي وتقني مع إثبات",
        "أولويات إصلاح مرتبطة بالأثر",
        "إعادة اختبار انتقائي بعد المعالجة",
      ],
      outcomes: [
        "معرفة عملية بما يمكن استغلاله اليوم",
        "ترتيب إصلاح يخدم الخطر لا طول القائمة",
        "تحسين وعي الفرق بكيفية وصول المهاجم",
        "دليل للمراجعات الأمنية والامتثال",
      ],
      signals: ["محاكاة هجوم", "إثبات عملي", "أولوية إصلاح"],
    },
    {
      lede: "Test your defenses the way an attacker would: an agreed scope, practical proof of findings, and fix priorities that development and operations can both use.",
      overview: [
        "A pentest is not an automated scan emailed as a PDF. We agree scope and rules of engagement, then simulate realistic attack paths on applications, networks, and identity as contracted. Each finding carries severity, proof of impact, and close-out guidance.",
        "We retest critical items after remediation when asked, so a finding is not closed on paper only. The report splits executive and technical views so fixes are funded in the right order.",
      ],
      scope: [
        "Application, network, and infrastructure tests within scope",
        "Rules of engagement and safe windows",
        "Executive and technical reports with proof",
        "Fix priorities tied to impact",
        "Selective retest after remediation",
      ],
      outcomes: [
        "Practical knowledge of what can be exploited today",
        "A fix order driven by risk, not list length",
        "Better team awareness of how an attacker arrives",
        "Evidence for security reviews and compliance",
      ],
      signals: ["Attack simulation", "Practical proof", "Fix priority"],
    },
  ),

  iam: page(
    {
      lede: "من يحصل على ماذا، وبأي صلاحية، ومتى تُسحب: دورة حياة هوية واضحة تقلّل الحسابات اليتيمة والصلاحيات الزائدة.",
      overview: [
        "الهوية هي محيط الأمن الحقيقي. نصمم انضمام الموظف، تغيير الدور، والمغادرة بحيث تُمنح الصلاحية وتُسحب من الأنظمة دون اعتماد على تذكرة متأخرة. نوحّد الدخول حيث يناسب، ونفصل الصلاحيات الحساسة عن الحساب اليومي.",
        "نراجع الحسابات الدورية ونغلق ما لا يُستخدم. التكامل مع الموارد البشرية والتطبيقات يجعل الهوية مصدراً للحقيقة لا جدولاً يُحدَّث يدوياً.",
      ],
      scope: [
        "دورة حياة الهوية من الانضمام حتى المغادرة",
        "تسجيل دخول موحّد ومصادقة متعددة العوامل",
        "صلاحيات قائمة على الدور مع استثناءات مضبوطة",
        "مراجعة وصول دورية",
        "تكامل مع الدليل والتطبيقات الحرجة",
      ],
      outcomes: [
        "حسابات يتيمة أقل بعد مغادرة الموظفين",
        "صلاحيات أقرب لمبدأ الحد الأدنى",
        "دخول أوضح للمستخدم دون تعدد كلمات المرور حيث أمكن",
        "أثر أمني قابل للإثبات عند المراجعة",
      ],
      signals: ["دورة حياة", "حد أدنى", "مراجعة وصول"],
    },
    {
      lede: "Who gets what, with which permission, and when it is removed: a clear identity lifecycle that cuts orphan accounts and standing privilege.",
      overview: [
        "Identity is the real security perimeter. We design joiners, movers, and leavers so access is granted and removed across systems without waiting on a late ticket. We unify sign-in where it fits, and we keep sensitive privilege off the daily account.",
        "We review access on a cycle and close what is unused. HR and application integration makes identity a source of truth — not a spreadsheet updated by hand.",
      ],
      scope: [
        "Identity lifecycle from join to leave",
        "Single sign-on and multi-factor authentication",
        "Role-based access with controlled exceptions",
        "Periodic access review",
        "Integration with directory and critical applications",
      ],
      outcomes: [
        "Fewer orphan accounts after people leave",
        "Permissions closer to least privilege",
        "Clearer sign-in for users, with fewer passwords where possible",
        "Security impact you can prove at review",
      ],
      signals: ["Lifecycle", "Least privilege", "Access review"],
    },
  ),

  pam: page(
    {
      lede: "حماية الحسابات ذات الصلاحيات العالية: لا كلمات مرور مشتركة، جلسة تُسجَّل عند الحاجة، ووصول يُمنَح للمدة اللازمة فقط.",
      overview: [
        "الحسابات الإدارية المفتوحة هي أقصر طريق للضرر الواسع. نضع خزناً للصلاحيات، ارتقاءً مؤقتاً للمهمة، وتسجيلاً للجلسات الحرجة. يُفصل حساب الإدارة عن حساب البريد اليومي.",
        "نراجع من يملك صلاحية دائمة ونحوّلها إلى طلب عند الحاجة. التكامل مع الهوية والتغيير يجعل الاستخدام الاستثنائي مرئياً لا عرفاً صامتاً بين المهندسين.",
      ],
      scope: [
        "خزن وإدارة كلمات مرور الحسابات المميزة",
        "ارتقاء صلاحية مؤقت عند الحاجة",
        "تسجيل جلسات إدارية حرجة",
        "فصل الحسابات ومنع المشاركة",
        "مراجعة دورية للصلاحيات الدائمة",
      ],
      outcomes: [
        "سطح هجوم أصغر على الحسابات الحساسة",
        "مساءلة أوضح عند تنفيذ أمر إداري",
        "كلمات مرور مشتركة تختفي من التشغيل",
        "امتثال أقوى لمتطلبات حماية الصلاحيات",
      ],
      signals: ["خزن صلاحيات", "وصول مؤقت", "جلسة مسجّلة"],
    },
    {
      lede: "Protect privileged accounts: no shared passwords, sessions recorded when needed, and access granted only for the time required.",
      overview: [
        "Standing admin accounts are the shortest path to wide damage. We vault privileges, elevate just-in-time for the task, and record critical sessions. The admin identity is separated from the daily mailbox account.",
        "We review who holds standing privilege and convert it to request-based access. Integration with identity and change makes exceptional use visible — not a silent habit among engineers.",
      ],
      scope: [
        "Vaulting and management of privileged passwords",
        "Just-in-time elevation when needed",
        "Recording of critical admin sessions",
        "Account separation and no sharing",
        "Periodic review of standing privilege",
      ],
      outcomes: [
        "A smaller attack surface on sensitive accounts",
        "Clearer accountability when an admin action runs",
        "Shared passwords disappear from operations",
        "Stronger alignment with privileged-access requirements",
      ],
      signals: ["Privilege vault", "Just-in-time", "Recorded session"],
    },
  ),

  "cyber-grc": page(
    {
      lede: "سياسات وضوابط أمنية قابلة للمراجعة ومتوافقة مع التزاماتكم: الحوكمة الأمنية كجزء من التشغيل، لا ملفاً يُحدَّث قبل التدقيق.",
      overview: [
        "الحوكمة الأمنية تربط الخطر بالضابط بالمسؤول. نبني سياسات يمكن تطبيقها داخل الهوية، التغيير، والموردين، ثم نضع أدلة تشغيل تُثبت الالتزام. نوائم الإطار مع المعايير ذات الصلة بعملكم دون نسخ إطار كامل لا يناسب الحجم.",
        "المخرجات تشمل سجل مخاطر أمنية، خطة معالجة، وتقارير للإدارة. المراجعة دورية ومرتبطة بالحوادث والتغييرات الجوهرية.",
      ],
      scope: [
        "سياسات أمنية قابلة للتنفيذ",
        "ضوابط مرتبطة بمخاطر حقيقية",
        "مواءمة امتثال ومعايير مختارة",
        "إدارة مخاطر الموردين والتقنيات",
        "تقارير ومراجعات للإدارة",
      ],
      outcomes: [
        "سياسات يعيشها الفريق لا يوقعها مرة واحدة",
        "تدقيق أقل إرباكاً لأن الأدلة جاهزة",
        "أولوية أوضح لمعالجة المخاطر الأمنية",
        "لغة مشتركة بين الأمن والإدارة",
      ],
      signals: ["سياسات حية", "ضوابط مربوطة", "أدلة مراجعة"],
    },
    {
      lede: "Security policies and controls that can be audited and aligned with your obligations: security governance as part of operations, not a file refreshed before audit.",
      overview: [
        "Security GRC ties risk to control to owner. We write policies that can run inside identity, change, and suppliers, then set operating evidence that proves commitment. We align to the standards that apply to you — without copying a full framework that does not fit your size.",
        "Outputs include a security risk register, a treatment plan, and leadership reporting. Review is periodic and bound to incidents and material change.",
      ],
      scope: [
        "Security policies that can be executed",
        "Controls tied to real risks",
        "Selected compliance and standard alignment",
        "Supplier and technology risk handling",
        "Leadership reporting and reviews",
      ],
      outcomes: [
        "Policies the team lives, not signs once",
        "Less chaotic audits because evidence is ready",
        "Clearer priority for treating security risk",
        "A shared language between security and leadership",
      ],
      signals: ["Living policy", "Bound controls", "Audit evidence"],
    },
  ),

  cloud: page(
    {
      lede: "بناء وتشغيل بيئات سحابية مرنة مع ضبط تكلفة وأمان منذ اليوم الأول — السحابة قرار تشغيلي، لا مجرد نقل أجهزة.",
      overview: [
        "الانتقال السحابي يفشل حين يُنسخ المركز كما هو إلى حساب سحابي. نصمم الحسابات والشبكات والهوية السحابية وفق أحمال العمل: ما يبقى قريباً من المستخدم، وما يُدار كخدمة، وكيف تُحمى البيانات أثناء الحركة والراحة.",
        "نضع حواجز تكلفة وصلاحيات حتى لا تتحول المرونة إلى إنفاق مفتوح. التشغيل يشمل مراقبة، نسخ، ومسار هبوط آمن للتطبيقات.",
      ],
      scope: [
        "تصميم حسابات وشبكات وهوية سحابية",
        "ترحيل أحمال أو بناء سحابي أصلي",
        "أمن وتشفير وإدارة مفاتيح",
        "ضبط تكلفة وميزانية وتنبيه",
        "تشغيل يومي ونسخ واستعادة",
      ],
      outcomes: [
        "بيئة يمكن توسيعها دون إعادة التصميم في كل مرة",
        "تكلفة مرئية ومضبوطة",
        "سطح أمني أوضح من مركز غير محكوم",
        "فريق يعرف حدود الحساب والصلاحية",
      ],
      signals: ["هوية سحابية", "تكلفة مضبوطة", "هبوط آمن"],
    },
    {
      lede: "Build and run flexible cloud environments with cost and security set from day one — cloud as an operating decision, not a lift of boxes.",
      overview: [
        "Cloud moves fail when the data center is copied as-is into an account. We design accounts, networks, and cloud identity around workloads: what stays close to the user, what runs as a service, and how data is protected in motion and at rest.",
        "Cost guards and permissions are set so flexibility does not become open spend. Operations include monitoring, backup, and a safe landing path for applications.",
      ],
      scope: [
        "Cloud account, network, and identity design",
        "Workload migration or cloud-native build",
        "Security, encryption, and key management",
        "Cost control, budgets, and alerts",
        "Day-to-day operations, backup, and restore",
      ],
      outcomes: [
        "An environment you can grow without redesigning every time",
        "Visible, controlled cost",
        "A clearer security surface than an ungoverned center",
        "A team that knows account and permission boundaries",
      ],
      signals: ["Cloud identity", "Controlled cost", "Safe landing"],
    },
  ),

  "data-analytics": page(
    {
      lede: "تحويل البيانات المتفرقة إلى مؤشرات تُستخدم في القرار: مصادر موثوقة، تعريفات موحّدة، ومسار من الخام إلى الرقم الذي تثق به الإدارة.",
      overview: [
        "التحليل يفشل عندما يختلف تعريف «المبيعات» بين فريقين. نبدأ بنموذج بيانات وملكية لكل مؤشر، ثم نبني الأنابيب: جمع، تنظيف، وحوكمة وصول. اللوحة تأتي بعد أن يستقر المعنى.",
        "نختار التقنية حسب حجم البيانات وزمن التحديث المطلوب. المخرجات تُربط بعملية: اجتماع أسبوعي، تنبيه تشغيلي، أو إدخال لنموذج لاحق — لا تقريراً يُفتح للفضول فقط.",
      ],
      scope: [
        "جرد المصادر وتعريف المؤشرات",
        "أنابيب جمع وتنظيف وجدولة",
        "جودة بيانات واختبارات انحراف",
        "صلاحيات وصول حسب الدور",
        "تسليم مؤشرات للاستخدام التشغيلي",
      ],
      outcomes: [
        "رقم واحد للمؤشر بدل نقاش التعريف في كل اجتماع",
        "تحديث بوتيرة تناسب القرار",
        "ثقة أعلى في البيانات المستخدمة للإدارة",
        "أساس لذكاء الأعمال أو النماذج لاحقاً",
      ],
      signals: ["تعريف موحّد", "جودة بيانات", "رقم يُوثق"],
    },
    {
      lede: "Turn scattered data into indicators used in decisions: trusted sources, shared definitions, and a path from raw to a number leadership can trust.",
      overview: [
        "Analytics fails when two teams disagree on what “sales” means. We start with a data model and an owner for each indicator, then build the pipes: collect, clean, and govern access. The dashboard comes after meaning is stable.",
        "Technology is chosen by data volume and how fresh the number must be. Outputs bind to a process: a weekly meeting, an operational alert, or input to a later model — not a report opened from curiosity alone.",
      ],
      scope: [
        "Source inventory and indicator definitions",
        "Collection, cleaning, and scheduling pipelines",
        "Data quality and drift checks",
        "Role-based access",
        "Indicators delivered for operational use",
      ],
      outcomes: [
        "One number for an indicator instead of a definition debate every meeting",
        "Refresh cadence that matches the decision",
        "Higher trust in the data leadership uses",
        "A base for BI or models later",
      ],
      signals: ["Shared definition", "Data quality", "A trusted number"],
    },
  ),

  bi: page(
    {
      lede: "لوحات ذكاء أعمال تربط الأرقام اليومية بأهداف الإدارة: مؤشرات قليلة، واضحة الملكية، وتُفتح في وقت القرار لا بعد فواته.",
      overview: [
        "ذكاء الأعمال ليس كثرة الرسوم. نصمم مجموعة مؤشرات لكل دور: تنفيذي يرى الاتجاه، وتشغيلي يرى الانحراف اليوم. نزيل التكرار ونثبت المرشحات حتى لا تُصنع نسخة خاصة لكل مدير.",
        "نربط اللوحات بجودة البيانات وجدولة التحديث. التدريب جزء من التسليم حتى لا تبقى اللوحة عند من صمّمها.",
      ],
      scope: [
        "تصميم مؤشرات ولوحات حسب الدور",
        "نماذج بيانات للتقارير المتكررة",
        "صلاحيات رؤية حسب الحساسية",
        "أتمتة التحديث والتنبيه عند الانحراف",
        "تمكين المستخدمين من القراءة الذاتية",
      ],
      outcomes: [
        "اجتماعات أقصر لأن الرقم جاهز ومتفق عليه",
        "انحراف يظهر في وقته",
        "اعتماد أقل على استخراج يدوي من جداول",
        "لغة أداء مشتركة عبر الإدارات",
      ],
      signals: ["لوحات بالدور", "مؤشرات قليلة", "تحديث في وقته"],
    },
    {
      lede: "Business-intelligence views that connect daily numbers to leadership goals: few indicators, clear ownership, opened at decision time — not after the moment has passed.",
      overview: [
        "BI is not more charts. We design a small set of indicators per role: executives see direction, operators see the daily deviation. We remove duplicates and lock filters so every manager does not invent a private version.",
        "Dashboards are bound to data quality and refresh schedule. Enablement is part of delivery so the view does not stay with whoever designed it.",
      ],
      scope: [
        "Indicators and dashboards by role",
        "Data models for repeating reports",
        "View permissions by sensitivity",
        "Automated refresh and alerts on deviation",
        "User enablement for self-serve reading",
      ],
      outcomes: [
        "Shorter meetings because the number is ready and agreed",
        "Deviation visible in time",
        "Less dependence on manual extracts",
        "A shared performance language across departments",
      ],
      signals: ["Role-based views", "Few indicators", "On-time refresh"],
    },
  ),

  ai: page(
    {
      lede: "ذكاء اصطناعي مربوط بعملية حقيقية ومؤشر نجاح — لا تجربة استعراضية تُغلق بعد العرض.",
      overview: [
        "نبدأ من القرار أو المهمة: تصنيف طلب، تلخيص ملف، توجيه خدمة، كشف شذوذ. نحدد البيانات المتاحة، مخاطر الخصوصية، ومن يستخدم المخرج في عمله. إن لم يوجد مالك للمخرج، لا نبني النموذج.",
        "التصميم يشمل ضوابط: ما يُسمح للنموذج برؤيته، وكيف يُراجع الإنسان الحالات الحساسة، وكيف يُقاس الخطأ. الإطلاق محدود أولاً، ثم يُوسَّع بعد ثبات الأثر.",
      ],
      scope: [
        "اختيار حالات استخدام ذات أثر تشغيلي",
        "تجهيز البيانات وحوكمة الوصول",
        "بناء أو تكييف نماذج مع ضوابط",
        "إشراف بشري على المخرجات الحساسة",
        "قياس الأثر والتوسع التدريجي",
      ],
      outcomes: [
        "وقت أقل في مهام يمكن للنموذج دعمها بثبات",
        "جودة قرار أعلى حيث البيانات تسمح",
        "مخاطر خصوصية معلومة ومضبوطة",
        "مسار توسع مبني على قياس لا على حماس الإطلاق",
      ],
      signals: ["حالة استخدام", "ضوابط واضحة", "قياس أثر"],
    },
    {
      lede: "AI tied to a real process and a success metric — not a showcase that closes after the demo.",
      overview: [
        "We start from the decision or task: classify a request, summarize a file, route service, detect anomaly. We map available data, privacy risk, and who uses the output in their job. If the output has no owner, we do not build the model.",
        "Design includes controls: what the model may see, how a human reviews sensitive cases, and how error is measured. Launch is limited first, then expanded after impact holds.",
      ],
      scope: [
        "Use cases with operational impact",
        "Data preparation and access governance",
        "Build or adapt models with controls",
        "Human oversight on sensitive outputs",
        "Impact measurement and staged scale",
      ],
      outcomes: [
        "Less time on tasks the model can support reliably",
        "Better decisions where the data allows it",
        "Known, controlled privacy risk",
        "A scale path based on measurement, not launch excitement",
      ],
      signals: ["A real use case", "Clear controls", "Measured impact"],
    },
  ),

  ml: page(
    {
      lede: "نماذج تتعلم من بياناتكم لتحسين التوقع أو التصنيف أو الأتمتة — مع دورة حياة: تدريب، تقييم، ومراقبة بعد التشغيل.",
      overview: [
        "تعلم الآلة ليس نموذجاً يُسلَّم مرة. نصمم خط بيانات، سمات، ومعيار تقييم يتفق عليه صاحب العملية قبل التدريب. نمنع تسرّب المستقبل إلى التدريب، ونوثّق حدود النموذج: أين ينجح وأين يجب ألا يُستخدم.",
        "بعد الإطلاق نراقب انحراف البيانات والأداء. إعادة التدريب قرار مجدول أو مشروط بانخفاض الجودة، لا عادة غامضة.",
      ],
      scope: [
        "تعريف المشكلة ومقياس النجاح",
        "هندسة بيانات وسمات وتدريب",
        "تقييم عادل ومنع التسرب",
        "نشر النموذج في مسار التشغيل",
        "مراقبة الانحراف وإعادة التدريب",
      ],
      outcomes: [
        "توقع أو تصنيف أفضل من القاعدة اليدوية حيث تثبت الأرقام",
        "شفافية حول حدود النموذج",
        "تشغيل مستقر بعد الإطلاق",
        "تحسين مستمر مربوط بجودة البيانات",
      ],
      signals: ["مقياس نجاح", "تقييم عادل", "مراقبة انحراف"],
    },
    {
      lede: "Models that learn from your data to improve forecasting, classification, or automation — with a lifecycle: train, evaluate, and monitor after go-live.",
      overview: [
        "Machine learning is not a model handed over once. We design a data line, features, and an evaluation bar the process owner agrees before training. We keep future leakage out of training, and we document limits: where the model works and where it must not be used.",
        "After launch we watch data and performance drift. Retraining is scheduled or triggered by quality drop — not a vague habit.",
      ],
      scope: [
        "Problem definition and success metric",
        "Data, feature, and training engineering",
        "Fair evaluation and leakage control",
        "Model deployment into the operating path",
        "Drift monitoring and retraining",
      ],
      outcomes: [
        "Forecast or classification better than the manual baseline where numbers prove it",
        "Transparency about model limits",
        "Stable operations after go-live",
        "Ongoing improvement tied to data quality",
      ],
      signals: ["Success metric", "Fair evaluation", "Drift watch"],
    },
  ),

  "managed-it": page(
    {
      lede: "تشغيل بيئتكم التقنية كخدمة مستمرة: مسؤوليات مكتوبة، مستويات دعم متفق عليها، وتقارير تُظهر ما حدث وما سيُحسَّن.",
      overview: [
        "الخدمة المدارة تبدأ باستلام موثّق: الأصول، الصلاحيات، وأدوات المراقبة. بعدها نعمل وفق كتالوج: ماذا نغطي، ماذا يبقى لديكم، وكيف يُصعَّد خارج النطاق. الشفافية أهم من وعد «نتحمل عنك كل شيء».",
        "نراجع الأداء شهرياً: حوادث، سعة، صيانة. التعديل على النطاق قرار مشترك لا تمدد صامت.",
      ],
      scope: [
        "استلام بيئة وتوثيق مسؤوليات",
        "تشغيل يومي وفق كتالوج خدمة",
        "دعم متعدد المستويات",
        "مراقبة وصيانة مخططة",
        "تقارير ومراجعات تحسين",
      ],
      outcomes: [
        "تشغيل لا يعتمد على شخص واحد داخلي",
        "وضوح عند حدوث خلل: من يفعل ماذا",
        "صيانة تتم في وقتها",
        "تكلفة تشغيل قابلة للتوقع",
      ],
      signals: ["كتالوج خدمة", "ملكية مكتوبة", "مراجعة شهرية"],
    },
    {
      lede: "Run your IT environment as an ongoing service: written ownership, agreed support levels, and reports that show what happened and what will improve.",
      overview: [
        "Managed IT starts with a documented intake: assets, permissions, and monitoring tools. Then we operate from a catalog: what we cover, what stays with you, and how out-of-scope work escalates. Transparency matters more than a promise to “take everything.”",
        "We review monthly: incidents, capacity, maintenance. Scope change is a joint decision — not silent creep.",
      ],
      scope: [
        "Environment intake and ownership documentation",
        "Day-to-day operations from a service catalog",
        "Multi-tier support",
        "Monitoring and planned maintenance",
        "Reporting and improvement reviews",
      ],
      outcomes: [
        "Operations that do not depend on one internal person",
        "Clarity when something breaks: who does what",
        "Maintenance that happens on time",
        "Operating cost you can forecast",
      ],
      signals: ["Service catalog", "Written ownership", "Monthly review"],
    },
  ),

  operations: page(
    {
      lede: "إجراءات تشغيل يومية تبقي الأنظمة مستقرة: من يراقب، ماذا يُنفَّذ كل صباح، وكيف تُسجَّل الاستثناءات قبل أن تتحول إلى عادة سيئة.",
      overview: [
        "التشغيل الناضج مكتوب. نضع دفاتر تشغيل للمهام المتكررة، نوافذ تغيير، وقائمة تحقق للصحة اليومية. ندرّب المناوبين على التصعيد لا على البطولة الفردية.",
        "نربط التشغيل بالمراقبة والحوادث حتى يصبح اليوم العادي قابلاً للتسليم بين الأشخاص دون فقدان السياق.",
      ],
      scope: [
        "دفاتر تشغيل وقوائم تحقق يومية",
        "توزيع نوبات ومسؤوليات",
        "إدارة استثناءات وتوثيق انحراف",
        "تنسيق مع التغيير والصيانة",
        "تحسين الإجراءات من الحوادث المتكررة",
      ],
      outcomes: [
        "استقرار أعلى في الأيام العادية لا في الأزمات فقط",
        "تسليم نوبات أوضح",
        "اعتماد أقل على المعرفة المحبوسة في الرؤوس",
        "انحراف يظهر ويُغلق بدل أن يُطبَّع",
      ],
      signals: ["دفتر تشغيل", "نوبة واضحة", "استثناء موثّق"],
    },
    {
      lede: "Daily operating procedures that keep systems stable: who watches, what runs each morning, and how exceptions are recorded before they become a bad habit.",
      overview: [
        "Mature operations are written down. We set runbooks for repeating work, change windows, and a daily health checklist. Shift staff are trained to escalate — not to be individual heroes.",
        "Operations bind to monitoring and incidents so a normal day can be handed between people without losing context.",
      ],
      scope: [
        "Runbooks and daily checklists",
        "Shift and ownership design",
        "Exception handling and deviation records",
        "Coordination with change and maintenance",
        "Procedure improvement from repeating incidents",
      ],
      outcomes: [
        "Higher stability on ordinary days, not only in crises",
        "Clearer shift handover",
        "Less dependence on knowledge trapped in heads",
        "Deviation that is seen and closed instead of normalized",
      ],
      signals: ["Runbook", "Clear shift", "Recorded exception"],
    },
  ),

  monitoring: page(
    {
      lede: "إنذار مبكر للأداء والتوافر: ما يكفي من الإشارة لتصرف، بلا طوفان تنبيهات يُغلقه الفريق مع الوقت.",
      overview: [
        "المراقبة تُصمَّم حول الخدمة: ماذا يعني «سليم» للمستخدم، وأي مورد إذا ضغط أنذر مبكراً. نضبط العتبات من خط أساس حقيقي، ونحذف الإنذار الذي لا يدفع عملاً.",
        "نربط التنبيه بتذكرة أو تصعيد وفق الدرجة. اللوحات تخدم المناوب لا العرض. بعد الأسابيع الأولى نعيد الضبط حتى تهدأ الضوضاء.",
      ],
      scope: [
        "مؤشرات توافر وأداء وسعة",
        "عتبات مبنية على خط أساس",
        "توجيه تنبيهات حسب الخطورة",
        "لوحات للمناوبة والخدمة",
        "مراجعة دورية للضجيج الكاذب",
      ],
      outcomes: [
        "اكتشاف قبل بلاغ المستخدم في الحالات القابلة للكشف",
        "مناوبة أقل إرهاقاً",
        "قرارات سعة مبنية على اتجاه لا على ذعر لحظة",
        "ربط أوضح بين الإنذار والعمل",
      ],
      signals: ["خط أساس", "تنبيه مفيد", "لوحة مناوبة"],
    },
    {
      lede: "Early signals on performance and availability: enough signal to act, without an alert flood the team eventually mutes.",
      overview: [
        "Monitoring is designed around the service: what “healthy” means for the user, and which resource should warn early when it strains. Thresholds come from a real baseline, and alerts that drive no work are removed.",
        "Alerts open a ticket or escalate by grade. Dashboards serve the on-call, not a presentation. After the first weeks we retune until noise falls.",
      ],
      scope: [
        "Availability, performance, and capacity indicators",
        "Thresholds from a baseline",
        "Alert routing by severity",
        "On-call and service dashboards",
        "Periodic review of false noise",
      ],
      outcomes: [
        "Detection before a user ticket where the fault is detectable",
        "A less exhausting on-call",
        "Capacity decisions from trend, not a moment of panic",
        "A clearer link between alert and action",
      ],
      signals: ["A baseline", "Useful alert", "On-call view"],
    },
  ),

  support: page(
    {
      lede: "دعم فني بمستويات واضحة ووقت استجابة يناسب حرجية الخدمة: من السؤال البسيط حتى التصعيد المتخصص.",
      overview: [
        "الدعم الجيد يُقاس بزمن وبنتيجة إغلاق صحيحة. نصمم المستويات، ساعات التغطية، وقنوات الوصول. ندرّب المستوى الأول على الإغلاق من المعرفة، ونحدد متى يُصعَّد دون تأخير مصطنع.",
        "نراجع التذاكر المتكررة ونحوّلها إلى تحسين أو مقال معرفة. رضا المستخدم مهم، لكن إغلاق السبب أهم حتى لا يعود الغد بنفس السؤال.",
      ],
      scope: [
        "نموذج مستويات وساعات تغطية",
        "قنوات دعم واتفاق استجابة",
        "قاعدة معرفة للمستوى الأول",
        "تصعيد للمتخصصين وفق حرجية الخدمة",
        "قياس جودة الإغلاق والأسباب المتكررة",
      ],
      outcomes: [
        "استجابة يمكن توقعها",
        "إغلاق من المرة الأولى بنسبة أعلى",
        "ضغط أقل على المتخصصين في الأسئلة المتكررة",
        "تحسين مستمر من نمط التذاكر",
      ],
      signals: ["مستويات دعم", "زمن استجابة", "معرفة حية"],
    },
    {
      lede: "Technical support with clear tiers and response times that match service criticality: from a simple question to specialist escalation.",
      overview: [
        "Good support is measured in time and in a correct close. We design tiers, coverage hours, and access channels. First line is trained to close from knowledge, and we define when to escalate without artificial delay.",
        "Repeating tickets become an improvement or a knowledge article. User satisfaction matters, but closing the cause matters more so tomorrow does not bring the same question.",
      ],
      scope: [
        "Tier model and coverage hours",
        "Support channels and response commitments",
        "A knowledge base for first line",
        "Escalation to specialists by service criticality",
        "Close-quality measurement and repeating-cause review",
      ],
      outcomes: [
        "Response you can expect",
        "A higher first-time close rate",
        "Less load on specialists from repeating questions",
        "Ongoing improvement from ticket patterns",
      ],
      signals: ["Support tiers", "Response time", "Living knowledge"],
    },
  ),

  maintenance: page(
    {
      lede: "صيانة وقائية وتحديثات مخططة تقلّل المفاجآت وتطيل عمر الأنظمة: نافذة معلومة، اختبار، وتراجع إن لزم.",
      overview: [
        "الصيانة المؤجلة تتحول إلى انقطاع في أسوأ وقت. نضع جدولاً للتحديثات والنسخ والفحص وفق حرجية كل نظام. نجمع التغييرات في نوافذ بدل ترقيعات يومية تكسر الاستقرار.",
        "كل نافذة لها خطة اختبار وتواصل. نوثّق ما طُبّق وما أُجّل ولماذا، حتى تبقى الإدارة على علم بالمخاطر المفتوحة.",
      ],
      scope: [
        "جدول صيانة وقائية حسب الأصل",
        "تحديثات أنظمة وتطبيقات مخططة",
        "فحص صحة بعد النافذة",
        "توثيق الاستثناءات والتأجيل",
        "ربط الصيانة بالنسخ وإدارة التغيير",
      ],
      outcomes: [
        "حوادث أقل بسبب إهمال التحديث",
        "عمر أطول للأصول الحرجة",
        "تشغيل أكثر هدوءاً بين النوافذ",
        "مخاطر مفتوحة ظاهرة لا مخفية",
      ],
      signals: ["نافذة مخططة", "وقاية", "اختبار بعد التحديث"],
    },
    {
      lede: "Preventive maintenance and planned updates that cut surprises and extend system life: a known window, a test, and rollback if needed.",
      overview: [
        "Deferred maintenance becomes an outage at the worst time. We schedule updates, backups, and checks by how critical each system is. Changes are batched into windows instead of daily patches that break stability.",
        "Every window has a test and communication plan. We record what was applied, what was deferred, and why, so leadership can see open risk.",
      ],
      scope: [
        "Preventive maintenance schedule by asset",
        "Planned system and application updates",
        "Health checks after the window",
        "Documentation of exceptions and deferrals",
        "Maintenance bound to backup and change",
      ],
      outcomes: [
        "Fewer incidents caused by skipped updates",
        "Longer life for critical assets",
        "Calmer operations between windows",
        "Open risk that is visible, not hidden",
      ],
      signals: ["Planned window", "Prevention", "Post-update test"],
    },
  ),

  cctv: page(
    {
      lede: "تغطية مراقبة واضحة مع تسجيل واسترجاع يمكن استخدامه عند الحاجة: الزاوية الصحيحة، الاحتفاظ المناسب، وتشغيل بسيط للمراجع.",
      overview: [
        "الكاميرا التي لا تُراجع عند الحادثة لا قيمة تشغيلية لها. نمسح الموقع ونضع النقاط حسب المداخل والممرات والأصول لا حسب عدد الأجهزة. نضبط الإضاءة والدقة ومسار الشبكة حتى يبقى التسجيل ثابتاً.",
        "التسليم يشمل صلاحيات المشاهدة، مدة الاحتفاظ، وتدريب على الاسترجاع. نختبر مشاهدة حادثة وهمية قبل الإغلاق.",
      ],
      scope: [
        "مسح تغطية وتصميم نقاط الكاميرا",
        "تسجيل واحتفاظ واسترجاع",
        "شبكات وتخزين لنظام المراقبة",
        "صلاحيات غرفة المراقبة",
        "اختبار تسليم وتشغيل",
      ],
      outcomes: [
        "صور يمكن الاعتماد عليها عند المراجعة",
        "ثغرات تغطية أقل في النقاط الحرجة",
        "استرجاع في وقت معقول لا بحثاً عشوائياً",
        "تشغيل يومي واضح لفريق الأمن",
      ],
      signals: ["تغطية مدروسة", "تسجيل ثابت", "استرجاع سهل"],
    },
    {
      lede: "Clear camera coverage with recording and playback you can actually use when needed: the right angle, the right retention, and simple operation for the reviewer.",
      overview: [
        "A camera that cannot be reviewed after an incident has no operational value. We survey the site and place points by entrances, corridors, and assets — not by device count. Lighting, resolution, and network path are set so recording stays stable.",
        "Delivery includes view permissions, retention, and playback training. We test a simulated incident review before close-out.",
      ],
      scope: [
        "Coverage survey and camera-point design",
        "Recording, retention, and playback",
        "Network and storage for the CCTV system",
        "Control-room permissions",
        "Handover testing and operations",
      ],
      outcomes: [
        "Images you can rely on in a review",
        "Fewer coverage gaps at critical points",
        "Playback in a reasonable time — not a random search",
        "Clear daily operation for the security team",
      ],
      signals: ["Deliberate coverage", "Stable recording", "Easy playback"],
    },
  ),

  "access-control": page(
    {
      lede: "تحديد من يدخل وأين ومتى، مع سجل حركة يمكن مراجعته وربطه بسياسة الأمن في المبنى.",
      overview: [
        "التحكم في الدخول يفشل عند الأبواب المستثناة والصلاحيات الجماعية. نصمم المناطق، الجداول، ودورة منح وسحب الصلاحية عند التعيين والمغادرة. نربط النظام بالهوية أو بالموارد البشرية حيث يناسب.",
        "نختبر حالات الطوارئ: فتح مسار الإخلاء دون إبقاء المبنى مفتوحاً بلا ضابط بعد الحدث. السجلات جزء من التسليم لا ميزة اختيارية.",
      ],
      scope: [
        "تصميم مناطق وجداول صلاحية",
        "قارئات وأقفال ووحدات تحكم",
        "دورة حياة صلاحية الدخول",
        "سجلات حركة وتقارير استثناء",
        "تكامل مع الإنتركم أو الهوية حسب المشروع",
      ],
      outcomes: [
        "دخول أقرب للسياسة المكتوبة",
        "صلاحيات تُسحب عند المغادرة",
        "أثر حركة يمكن التحقيق فيه",
        "تشغيل أبسط لفريق الأمن والاستقبال",
      ],
      signals: ["مناطق واضحة", "جدول صلاحية", "سجل حركة"],
    },
    {
      lede: "Control who enters, where, and when, with an access log you can review and bind to building security policy.",
      overview: [
        "Access control fails on excepted doors and group privileges. We design zones, schedules, and a grant/revoke cycle for joiners and leavers. We bind the system to identity or HR where it fits.",
        "We test emergency cases: an evacuation path that opens without leaving the building uncontrolled after the event. Logs are part of delivery — not an optional extra.",
      ],
      scope: [
        "Zone and schedule design",
        "Readers, locks, and controllers",
        "Access-privilege lifecycle",
        "Movement logs and exception reports",
        "Intercom or identity integration by project",
      ],
      outcomes: [
        "Entry closer to written policy",
        "Privileges revoked when people leave",
        "Movement evidence you can investigate",
        "Simpler operations for security and reception",
      ],
      signals: ["Clear zones", "Access schedule", "Movement log"],
    },
  ),

  cabling: page(
    {
      lede: "بنية كابلات منظمة للشبكات والأنظمة الأمنية تدعم التوسعة لاحقاً: مسارات واضحة، تسمية، واختبار لكل نقطة.",
      overview: [
        "الكابل الفوضوي يكلّف في كل عطل لاحق. نصمم المسارات والخزائن والمرونة حسب المعايير المتفق عليها، ونفصل التيار الخفيف عن مصادر التشويش. كل منفذ له هوية في السجل.",
        "نختبر الشهادات قبل الإغلاق ونسلّم مخططات كما نُفّذ لا كما رُسم في البداية فقط. هذا ما يجعل إضافة كاميرا أو نقطة شبكة عملاً محسوباً لا حفراً جديداً في كل مرة.",
      ],
      scope: [
        "تصميم مسارات وخزائن ونقاط",
        "تنفيذ نحاسي وألياف حسب المواصفة",
        "تسمية وتوثيق كما نُفّذ",
        "اختبار واعتماد النقاط",
        "جاهزية للتوسعة والصيانة",
      ],
      outcomes: [
        "أعطال شبكة أسهل في التتبع",
        "توسعة أرخص لاحقاً",
        "شكل تشغيلي نظيف في الخزائن",
        "أساس موثوق للكاميرات والدخول والبيانات",
      ],
      signals: ["مسارات منظمة", "اختبار نقاط", "توثيق كما نُفّذ"],
    },
    {
      lede: "Structured cabling for networks and security systems that can grow later: clear paths, labeling, and a test on every point.",
      overview: [
        "Messy cabling is paid for on every later fault. We design paths, cabinets, and spare capacity to the agreed standard, and we keep ELV away from interference sources. Every port has an identity in the record.",
        "We certify before close-out and hand over as-built drawings — not only the original sketch. That makes adding a camera or a network point a calculated job, not a new cut every time.",
      ],
      scope: [
        "Path, cabinet, and outlet design",
        "Copper and fiber install to specification",
        "Labeling and as-built documentation",
        "Testing and certification of points",
        "Readiness for expansion and maintenance",
      ],
      outcomes: [
        "Network faults that are easier to trace",
        "Cheaper expansion later",
        "A clean operational look in the cabinets",
        "A reliable base for cameras, access, and data",
      ],
      signals: ["Ordered paths", "Point testing", "As-built docs"],
    },
  ),

  av: page(
    {
      lede: "قاعات واجتماعات بأنظمة صوت وصورة واضحة وسهلة التشغيل: الاجتماع يبدأ دون مهندس في كل مرة.",
      overview: [
        "نظام AV المعقّد يُترك بعد أسبوع. نصمم للقاعة كما تُستخدم: عرض، اتصال مرئي، صوت يغطي المقاعد دون صدى مزعج. لوحة التحكم تبقى بسيطة: مشاهد جاهزة لا قائمة إعدادات.",
        "نختبر من مقاعد مختلفة ومع مكالمة حقيقية. التدريب للمشغّل والاستقبال جزء من التسليم، مع دعم بعد التشغيل للضبط الدقيق.",
      ],
      scope: [
        "تصميم صوتي ومرئي حسب حجم القاعة",
        "عرض واتصال واجتماعات هجينة",
        "تحكم مبسّط ومشاهد جاهزة",
        "تكامل مع الشبكات والحجز إن لزم",
        "تدريب وتشغيل بعد التركيب",
      ],
      outcomes: [
        "اجتماعات أوضح للمشاركين في القاعة وعن بُعد",
        "وقت أقل في إعداد الجهاز قبل كل لقاء",
        "اعتماد أقل على فني لكل تشغيل",
        "قاعات يمكن تكرار تصميمها في فروع أخرى",
      ],
      signals: ["تشغيل بسيط", "صوت واضح", "اجتماع هجين"],
    },
    {
      lede: "Rooms and meetings with clear audio-visual systems that are simple to run: the meeting starts without an engineer every time.",
      overview: [
        "A complex AV system is abandoned after a week. We design for how the room is used: display, video call, and audio that covers seats without harsh echo. The control surface stays simple: ready scenes, not a settings list.",
        "We test from different seats and on a real call. Operator and reception training is part of delivery, with post-go-live tuning support.",
      ],
      scope: [
        "Audio and visual design by room size",
        "Display, calling, and hybrid meetings",
        "Simplified control and ready scenes",
        "Network and booking integration when needed",
        "Training and operations after install",
      ],
      outcomes: [
        "Clearer meetings for people in the room and remote",
        "Less setup time before each session",
        "Less dependence on a technician for every run",
        "Room designs you can repeat in other branches",
      ],
      signals: ["Simple operation", "Clear audio", "Hybrid meeting"],
    },
  ),

  intercom: page(
    {
      lede: "اتصال داخلي سريع بين المداخل والنقاط الأمنية والإدارة — رد في ثوانٍ، مع إمكانية الربط بالدخول والمراقبة.",
      overview: [
        "الإنتركم يُقاس بسرعة الرد ووضوح الصوت عند الباب. نصمم النقاط حسب تدفق الزوار والحراسة، ونربط فك القفل بصلاحية واضحة حتى لا يتحول الزر إلى فتح دائم بلا تدقيق.",
        "نختبر الضوضاء المحيطة في الموقع الحقيقي. التسجيل أو السجل إن طُلب يكون جزءاً من سياسة الأمن لا ميزة تُنسى بعد التركيب.",
      ],
      scope: [
        "نقاط اتصال عند المداخل والمكاتب الأمنية",
        "صوت واضح في ظروف الموقع",
        "ربط اختياري بالدخول والكاميرات",
        "صلاحيات الرد وفك القفل",
        "تشغيل وصيانة بعد التسليم",
      ],
      outcomes: [
        "استقبال أسرع عند الباب",
        "تنسيق أوضح بين الحراسة والإدارة",
        "فتح مضبوط بدل استثناءات شفهية",
        "طبقة اتصال تعمل مع باقي أنظمة ELV",
      ],
      signals: ["رد سريع", "صوت باب واضح", "ربط بالدخول"],
    },
    {
      lede: "Fast internal communication between entrances, security points, and management — a reply in seconds, with optional links to access and CCTV.",
      overview: [
        "Intercom is measured by reply speed and door-side clarity. We place points by visitor flow and guard posts, and we bind unlock to a clear privilege so the button does not become a permanent open without a check.",
        "We test against real site noise. Recording or logging, if required, sits inside security policy — not a feature forgotten after install.",
      ],
      scope: [
        "Call points at entrances and security desks",
        "Clear audio in real site conditions",
        "Optional links to access and cameras",
        "Reply and unlock permissions",
        "Operations and maintenance after handover",
      ],
      outcomes: [
        "Faster reception at the door",
        "Clearer coordination between guards and management",
        "Controlled unlock instead of verbal exceptions",
        "A communication layer that works with the rest of ELV",
      ],
      signals: ["Fast reply", "Clear door audio", "Access link"],
    },
  ),

  "training-it": page(
    {
      lede: "تدريب عملي على أنظمة وأساسيات تقنية المعلومات التي يستخدمها الفريق يومياً — المهارة تُقاس بما يستطيع المتدرب عمله بعد الجلسة.",
      overview: [
        "تدريب تقنية المعلومات عندنا ليس عرض شرائح. نبني التمارين على الأدوات والمهام الحقيقية: حسابات، شبكات مبسطة، تذاكر، أمن أساسي. نقسم المجموعات حسب الدور حتى لا يُدرَّب الجميع على المستوى نفسه.",
        "بعد البرنامج نسلّم تقييماً وتوصية للمتابعة. الهدف فريق أقل اعتماداً على التصعيد في المهام القياسية.",
      ],
      scope: [
        "قياس مستوى الفريق وتصميم المسار",
        "محتوى عملي على الأنظمة اليومية",
        "تمارين وحالات من بيئة العمل",
        "تقييم مهارة بعد التدريب",
        "توصيات متابعة للمدير المباشر",
      ],
      outcomes: [
        "أخطاء تشغيل أقل في المهام المتكررة",
        "تصعيد أقل للمستوى الأعلى",
        "لغة مشتركة داخل الفريق التقني",
        "ثقة أعلى في التعامل مع الأنظمة المعتمدة",
      ],
      signals: ["تمرين عملي", "حسب الدور", "تقييم بعد الجلسة"],
    },
    {
      lede: "Practical training on the IT systems and fundamentals your team uses every day — skill measured by what the learner can do after the session.",
      overview: [
        "IT training is not a slide deck. We build exercises on real tools and tasks: accounts, simplified networking, tickets, basic security. Groups are split by role so not everyone is trained at the same level.",
        "After the program we hand over an assessment and a follow-up recommendation. The aim is a team less dependent on escalation for standard work.",
      ],
      scope: [
        "Team-level assessment and path design",
        "Practical content on daily systems",
        "Exercises and cases from the workplace",
        "Skill assessment after training",
        "Follow-up recommendations for the line manager",
      ],
      outcomes: [
        "Fewer operating errors on repeating tasks",
        "Less escalation to the next tier",
        "A shared language inside the IT team",
        "More confidence on the systems you actually run",
      ],
      signals: ["Hands-on practice", "By role", "Post-session assessment"],
    },
  ),

  "training-cyber": page(
    {
      lede: "رفع وعي الفريق وقدرته على التعامل مع التهديدات والسياسات الأمنية — من التصيّد اليومي حتى سلوك الصلاحيات في العمل.",
      overview: [
        "التدريب الأمني الذي يخيف دون أن يدرّب يُنسى. نستخدم سيناريوهات قريبة من بريدكم وأدواتكم: رابط مشبوه، طلب صلاحية، جهاز متروك. نوضح لماذا السياسة موجودة وماذا يفعل الموظف في الدقيقة الأولى.",
        "للأدوار التقنية نعمق في التعامل مع الحوادث والحسابات المميزة حسب الاتفاق. نقيس التغيّر بتمارين لا بحضور الجلسة فقط.",
      ],
      scope: [
        "وعي أمني لجميع الموظفين",
        "مسارات أعمق للفرق التقنية",
        "محاكاة تصيّد أو سيناريوهات متفق عليها",
        "ربط التدريب بالسياسات المعتمدة",
        "قياس واستحقاق متابعة",
      ],
      outcomes: [
        "تبليغ أسرع عن الرسائل المشبوهة",
        "سلوك أقرب للسياسة في الصلاحيات والأجهزة",
        "لغة مشتركة بين الأمن وبقية المؤسسة",
        "أساس يمكن إعادة قياسه بعد أشهر",
      ],
      signals: ["سيناريو واقعي", "سلوك يومي", "قياس الوعي"],
    },
    {
      lede: "Raise the team’s awareness and ability to handle threats and security policy — from everyday phishing to how privilege is used at work.",
      overview: [
        "Security training that only frightens is forgotten. We use scenarios close to your mail and tools: a suspicious link, an access request, a left-behind device. We explain why the policy exists and what the employee does in the first minute.",
        "For technical roles we go deeper on incidents and privileged accounts as agreed. We measure change with exercises — not attendance alone.",
      ],
      scope: [
        "Security awareness for all staff",
        "Deeper paths for technical teams",
        "Phishing simulation or agreed scenarios",
        "Training bound to approved policy",
        "Measurement and follow-up",
      ],
      outcomes: [
        "Faster reporting of suspicious messages",
        "Behavior closer to policy on privilege and devices",
        "A shared language between security and the rest of the organization",
        "A baseline you can measure again months later",
      ],
      signals: ["Real scenario", "Daily behavior", "Awareness measure"],
    },
  ),

  "training-cloud": page(
    {
      lede: "تأهيل الفريق لتشغيل الخدمات السحابية بفهم للتكلفة والحماية والصلاحيات — حتى لا تبقى السحابة عند مورد أو شخص واحد.",
      overview: [
        "التدريب السحابي يربط المفاهيم بالحساب الحقيقي أو بمختبر يحاكيه: هوية، شبكات، تخزين، فوترة. ندرّب على الأخطاء الشائعة: صلاحية مفتوحة، مورد بلا وسم، نسخة بلا سياسة.",
        "المسار يناسب من يشغّل يومياً لا من يحفظ شهادات فقط. يمكن مواءمته مع مزودكم المعتمد في المشروع.",
      ],
      scope: [
        "أساسيات التشغيل السحابي للفريق",
        "هوية وصلاحيات وتجزئة",
        "تكلفة ووسوم وميزانية",
        "نسخ وأمان للموارد السحابية",
        "تمارين عملية وتقييم",
      ],
      outcomes: [
        "فريق قادر على المهام اليومية دون انتظار خبير خارجي لكل خطوة",
        "أخطاء تكوين أقل تكلفة وخطراً",
        "وعي أوضح بالفاتورة قبل تفاقمها",
        "أساس لشهادات لاحقة إن رغبت المؤسسة",
      ],
      signals: ["حساب عملي", "تكلفة وحماية", "صلاحيات سحابية"],
    },
    {
      lede: "Prepare the team to run cloud services with a grasp of cost, protection, and permissions — so cloud does not live with one vendor or one person.",
      overview: [
        "Cloud training binds concepts to the real account or a lab that mirrors it: identity, networks, storage, billing. We train the common mistakes: open privilege, an untagged resource, a copy with no policy.",
        "The path fits people who operate daily — not people who only collect certificates. It can be aligned to the provider you run in the project.",
      ],
      scope: [
        "Cloud operations fundamentals for the team",
        "Identity, permissions, and segmentation",
        "Cost, tags, and budget",
        "Backup and security for cloud resources",
        "Hands-on exercises and assessment",
      ],
      outcomes: [
        "A team able to do daily tasks without waiting on an external expert for every step",
        "Fewer costly and risky configuration errors",
        "Clearer awareness of the bill before it grows",
        "A base for later certification if the organization wants it",
      ],
      signals: ["A working account", "Cost & protection", "Cloud permissions"],
    },
  ),

  "training-itsm": page(
    {
      lede: "تدريب على نماذج ITSM حتى يصبح الدعم والتشغيل بلغة وإجراءات موحّدة: تذكرة، حادثة، تغيير، وخدمة تُقاس.",
      overview: [
        "ITSM لا يُدرَّس كتعريفات مجردة. نمرّن الفريق على دورة التذكرة كما ستعمل عندكم: تصنيف، أولوية، إغلاق، وتصعيد. نوضح الفرق بين طلب وخلل وتغيير حتى تقل التذاكر «العامة».",
        "للمشرفين نضيف قراءة المؤشرات ومراجعة SLA. النتيجة مكتب يتكلم لغة واحدة حتى مع تبدّل الأشخاص.",
      ],
      scope: [
        "مفاهيم ITSM مربوطة بأدواتكم إن وُجدت",
        "تمارين مكتب خدمة وحوادث وتغيير",
        "أدوار ومسؤوليات داخل العملية",
        "قراءة تقارير ومستويات خدمة",
        "تقييم قدرة بعد البرنامج",
      ],
      outcomes: [
        "تصنيف أدق للتذاكر",
        "تصعيد أقل بسبب سوء الفهم",
        "مشرفون يقرأون الأداء لا العدد فقط",
        "اعتماد أسرع لنموذج التشغيل الجديد",
      ],
      signals: ["لغة موحّدة", "دورة تذكرة", "قراءة SLA"],
    },
    {
      lede: "ITSM training so support and operations share one language and one set of procedures: ticket, incident, change, and a service that is measured.",
      overview: [
        "ITSM is not taught as abstract definitions. We drill the ticket cycle as it will run for you: classify, prioritize, close, escalate. We make the difference between a request, a fault, and a change obvious so “general” tickets decline.",
        "For supervisors we add indicator reading and SLA review. The result is a desk that speaks one language even as people rotate.",
      ],
      scope: [
        "ITSM concepts bound to your tools when they exist",
        "Service-desk, incident, and change exercises",
        "Roles and ownership inside the process",
        "Reading reports and service levels",
        "Capability assessment after the program",
      ],
      outcomes: [
        "More accurate ticket classification",
        "Less escalation caused by misunderstanding",
        "Supervisors who read performance, not only volume",
        "Faster adoption of the new operating model",
      ],
      signals: ["Shared language", "Ticket cycle", "SLA literacy"],
    },
  ),

  "corporate-training": page(
    {
      lede: "مسارات تدريب مخصصة لمؤسستكم حسب الأدوار ومستوى الفريق — برنامج واحد لا يناسب الجميع، لذلك لا نقدّمه كذلك.",
      overview: [
        "التدريب المؤسسي يبدأ بتحليل احتياج: أي أدوار، أي فجوات، وأي أثر تريد الإدارة رؤيته بعد ربع سنة. نصمم مسارات متوازية للمستويات، ونربط المحتوى بمشاريعكم أو أنظمتكم حين يتاح ذلك.",
        "يمكن أن يجمع المسار تقنية معلومات، أمناً، سحابة، وITSM في خطة واحدة بتسلسل منطقي. نحدد عدد الجلسات، أسلوب التقديم، ومعيار الاجتياز معكم قبل الإطلاق.",
      ],
      scope: [
        "تحليل احتياج وتصميم مسارات بالدور",
        "محتوى مخصص من خدمات Beyonex ذات الصلة",
        "جدولة تناسب التشغيل لا تعطّله",
        "تقييم ومتابعة مع الموارد البشرية أو التقنية",
        "مواد مرجعية بعد انتهاء البرنامج",
      ],
      outcomes: [
        "تدريب مرتبط بأهداف المؤسسة لا بكتالوج عام",
        "أثر يمكن مناقشته مع الإدارة بعد التنفيذ",
        "مسارات عادلة للمستويات المختلفة",
        "استمرار تعلم بعد انتهاء المدرب",
      ],
      signals: ["مسار بالدور", "محتوى مخصص", "أثر قابل للنقاش"],
    },
    {
      lede: "Custom learning paths for your organization, by role and team level — one program does not fit everyone, so we do not offer it that way.",
      overview: [
        "Corporate training starts with a needs analysis: which roles, which gaps, and which impact leadership wants to see after a quarter. We design parallel paths by level, and we bind content to your projects or systems when that is possible.",
        "A path can combine IT, security, cloud, and ITSM in one plan with a logical sequence. Session count, delivery style, and a pass bar are agreed with you before launch.",
      ],
      scope: [
        "Needs analysis and role-based path design",
        "Custom content from relevant Beyonex services",
        "Scheduling that fits operations instead of blocking them",
        "Assessment and follow-up with HR or IT",
        "Reference material after the program ends",
      ],
      outcomes: [
        "Training tied to organizational goals, not a generic catalog",
        "Impact leadership can discuss after delivery",
        "Fair paths across different levels",
        "Learning that continues after the trainer leaves",
      ],
      signals: ["Path by role", "Custom content", "Discussable impact"],
    },
  ),
};

export function getServicePage(id) {
  return SERVICE_PAGES[id] ?? null;
}
