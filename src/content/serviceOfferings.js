const L = (ar, en) => ({ ar, en });

function offering({ lede, problem, approach, outcomes, deliverables, audience }) {
  return {
    lede: L(lede[0], lede[1]),
    problem: L(problem[0], problem[1]),
    approach: L(approach[0], approach[1]),
    outcomes: outcomes.map(([arTitle, enTitle, arText, enText]) => ({
      title: L(arTitle, enTitle),
      text: L(arText, enText),
    })),
    deliverables: deliverables.map(([ar, en]) => L(ar, en)),
    audience: audience.map(([ar, en]) => L(ar, en)),
  };
}

function steps(items) {
  return items.map(([arTitle, enTitle, arText, enText], index) => ({
    num: String(index + 1).padStart(2, "0"),
    title: L(arTitle, enTitle),
    text: L(arText, enText),
  }));
}

export const CATEGORY_PROCESS = {
  consulting: steps([
    ["اكتشاف", "Discover", "نفهم أهدافك، البيئة الحالية، والقيود التشغيلية قبل أي توصية.", "We clarify goals, the current environment, and operating constraints before any recommendation."],
    ["تصميم", "Design", "نضع المعمارية والحوكمة والمسار المرحلي بما يناسب مؤسستك.", "We shape architecture, governance, and a staged path that fits your organization."],
    ["مواءمة", "Align", "نوحّد القرار بين التقنية والإدارة حتى تصبح الأولويات قابلة للتنفيذ.", "We align technology and leadership so priorities become executable."],
    ["تمكين", "Enable", "نسلّم خطة واضحة وملكية لكل بند، مع بداية تنفيذ يمكن متابعتها.", "We hand over a clear plan with owners for each item, and a start that can be tracked."],
  ]),
  software: steps([
    ["اكتشاف", "Discover", "نحدد المستخدم، العملية، ونطاق المنتج حتى لا يتضخم البناء.", "We define the user, the process, and product scope so the build does not sprawl."],
    ["تصميم", "Design", "واجهات ومعمارية وتكامل تُرسم قبل كتابة السطر الأول الحرج.", "Interfaces, architecture, and integration are mapped before the critical first line."],
    ["بناء", "Build", "تطوير منظم بجودة قابلة للمراجعة وإصدارات واضحة.", "Structured development with reviewable quality and clear releases."],
    ["إطلاق", "Launch", "تسليم آمن، نقل معرفة، ودعم أول فترة تشغيل.", "A safe release, knowledge transfer, and support through the first operating period."],
  ]),
  itsm: steps([
    ["تقييم", "Assess", "نقرأ كيف يعمل الدعم اليوم: القنوات، الأوقات، ونقاط الاختناق.", "We read how support works today: channels, times, and bottlenecks."],
    ["نموذج التشغيل", "Design the model", "نصمم مكتب الخدمة والعمليات ومؤشرات القياس على احتياجك.", "We design the service desk, processes, and measures around your need."],
    ["تطبيق", "Implement", "تهيئة المنصة، التدفقات، والأدوار حتى يبدأ الفريق بالعمل الفعلي.", "We configure the platform, flows, and roles so the team can work for real."],
    ["تشغيل", "Operate", "متابعة الالتزام والتحسين بعد الإطلاق، لا تسليم ثم اختفاء.", "We track adherence and improve after go-live — not a handoff that disappears."],
  ]),
  infrastructure: steps([
    ["تقييم", "Assess", "نفحص الشبكات والخوادم والتخزين والتوافر كما هي اليوم.", "We inspect networks, servers, storage, and availability as they stand today."],
    ["معمارية", "Architect", "نصمم أساساً يتوسع بأمان ويتحمّل الحمل الحرج.", "We design a foundation that scales safely and carries critical load."],
    ["نشر", "Deploy", "تنفيذ مضبوط مع نوافذ صيانة واختبارات قبل الاعتماد.", "Controlled delivery with maintenance windows and tests before sign-off."],
    ["تشغيل", "Operate", "مراقبة وصيانة ونسخ احتياطي تبقى جزءاً من الخدمة لا لاحقاً.", "Monitoring, maintenance, and backup stay part of the service — not an afterthought."],
  ]),
  cybersecurity: steps([
    ["تقييم", "Assess", "نحدد سطح الهجوم والفجوات مقابل المخاطر الحقيقية لمؤسستك.", "We map the attack surface and gaps against the risks that actually matter to you."],
    ["تحصين", "Harden", "نغلق الثغرات الحرجة ونضبط الهويات والصلاحيات والضوابط.", "We close critical gaps and set identity, access, and controls."],
    ["مراقبة", "Monitor", "كشف واستجابة مستمران حتى لا يبقى الأمن مشروعاً لمرة واحدة.", "Continuous detection and response so security is not a one-off project."],
    ["تحسين", "Improve", "مراجعة دورية للدفاعات والسياسات مع تغيّر التهديد والعمل.", "Regular review of defenses and policy as threats and operations change."],
  ]),
  "cloud-ai": steps([
    ["تقييم البيانات", "Assess the data", "نوضّح مصادر البيانات وجودتها وحالات الاستخدام ذات العائد.", "We clarify data sources, quality, and use cases with a real return."],
    ["تصميم", "Design", "معمارية سحابية وتحليلات أو نماذج مرتبطة بعملية قابلة للقياس.", "Cloud, analytics, or model architecture tied to a measurable process."],
    ["بناء", "Build", "تنفيذ المنصات والنماذج مع ضبط تكلفة وأمان منذ البداية.", "We build platforms and models with cost and security set from day one."],
    ["قياس", "Measure", "مؤشرات تثبت أن التحليل أو النموذج يغيّر القرار لا العرض فقط.", "Measures that prove the analysis or model changes decisions — not just the demo."],
  ]),
  managed: steps([
    ["تهيئة", "Onboard", "نجرد البيئة، نحدد المسؤوليات، ونضع مستويات الدعم المتفق عليها.", "We inventory the environment, set ownership, and agree support levels."],
    ["تشغيل", "Operate", "إجراءات يومية ومراقبة حتى يبقى الاستقرار عادة لا رد فعل.", "Daily procedures and monitoring so stability is a habit, not a reaction."],
    ["مراجعة", "Review", "تقارير أداء وحالات ووقت استجابة تُعرض بوضوح للإدارة.", "Performance, incidents, and response times reported clearly to leadership."],
    ["تحسين", "Improve", "ضبط السعة والصيانة والدعم وفق ما يظهر في التشغيل الفعلي.", "We tune capacity, maintenance, and support from what operations actually show."],
  ]),
  elv: steps([
    ["مسح الموقع", "Survey", "نزور الموقع ونحدد التغطية، المسارات، ونقاط التحكم الفعلية.", "We survey the site and define coverage, routes, and real control points."],
    ["تصميم", "Design", "مخطط أنظمة وكابلات وتكامل يعمل كطبقة واحدة لا أجهزة متفرقة.", "A systems, cabling, and integration plan that works as one layer — not scattered devices."],
    ["تركيب", "Install", "تنفيذ منظم مع اختبار كل نقطة قبل التسليم.", "Structured installation with every point tested before handover."],
    ["تسليم", "Handover", "تشغيل، تدريب المشغّلين، ووثائق صيانة يمكن الرجوع إليها.", "Go-live, operator training, and maintenance documents you can actually use."],
  ]),
  training: steps([
    ["تشخيص", "Diagnose", "نحدد فجوة المهارة حسب الدور لا حسب منهج عام.", "We pinpoint the skill gap by role — not a generic syllabus."],
    ["مسار", "Design the path", "برنامج عملي بتمارين على الأنظمة التي يستخدمها الفريق.", "A practical program with exercises on the systems the team actually uses."],
    ["تنفيذ", "Deliver", "جلسات مركّزة، حالات واقعية، وقياس استيعاب أثناء التدريب.", "Focused sessions, real cases, and comprehension checks during delivery."],
    ["ترسيخ", "Embed", "مواد مرجعية ومتابعة قصيرة حتى لا يتبخر أثر الدورة بعد أسبوع.", "Reference material and a short follow-up so the course does not fade after a week."],
  ]),
};

const COPY = {
  "tech-consulting": offering({
    lede: [
      "نحوّل الصورة المتفرقة لأنظمتك إلى قرارات استثمار واضحة: ماذا يُبقى، ماذا يُوسَّع، وماذا يُوقف. الاستشارة هنا خارطة تنفيذ لا عرض شرائح.",
      "We turn a scattered systems picture into clear investment decisions: what to keep, scale, or stop. This advisory is an execution map — not a slide deck.",
    ],
    problem: [
      "تتراكم المنصات والقرارات التقنية دون خريطة مشتركة، فيصعب تبرير الميزانية أو ترتيب ما يُنفَّذ أولاً.",
      "Platforms and tech decisions pile up without a shared map, so budget and sequencing become hard to defend.",
    ],
    approach: [
      "نبدأ بمسح للوضع الحالي، نربط الاحتياج التشغيلي بالمعمارية، ثم نقدّم توصيات بمالك وجدول لكل بند. الورشة مع الإدارة جزء من التسليم لا ملحق بعده.",
      "We start with a current-state scan, connect operational need to architecture, then deliver recommendations with an owner and a timeline for each item. The leadership workshop is part of delivery — not an add-on.",
    ],
    outcomes: [
      ["خريطة تقنية موحّدة", "A unified technology map", "صورة واحدة للأنظمة والاعتماديات والفجوات التي تؤثر على العمل.", "One view of systems, dependencies, and the gaps that affect operations."],
      ["أولويات استثمار", "Investment priorities", "ترتيب لما يُنفَّذ أولاً وفق الأثر والتكلفة والمخاطر لا وفق أحدث عرض.", "A ranked plan of what to do first by impact, cost, and risk — not the latest pitch."],
      ["قرار قابل للمتابعة", "A decision you can track", "توصيات تتحوّل إلى بنود مشروع بمالك، لا تبقى حبيسة تقرير.", "Recommendations that become project items with owners — not a report that sits unused."],
    ],
    deliverables: [
      ["تقرير تقييم الوضع الحالي", "Current-state assessment"],
      ["توصيات معمارية وتشغيلية", "Architecture and operating recommendations"],
      ["خارطة طريق مرحلية", "A staged roadmap"],
      ["ورشة مواءمة مع الإدارة", "Leadership alignment workshop"],
    ],
    audience: [
      ["مدير تقنية المعلومات", "CIO / IT director"],
      ["الإدارة التنفيذية", "Executive leadership"],
      ["مسؤولو التحول الرقمي", "Digital transformation owners"],
    ],
  }),
  "digital-transformation": offering({
    lede: [
      "نصمم مساراً مرحلياً يربط العمليات بالأنظمة الجديدة دون إيقاف العمل اليومي. التحول عندنا جدول تنفيذ بمالكين، لا شعار على مستوى المؤسسة.",
      "We design a staged path that connects operations to new systems without stopping daily work. Transformation here is an owned execution plan — not a company slogan.",
    ],
    problem: [
      "تُعلن مبادرات التحول ثم تتصادم مع التشغيل القائم، فيتأخر الإطلاق ويتآكل ثقة الفريق.",
      "Transformation programs collide with current operations, so launches slip and team trust erodes.",
    ],
    approach: [
      "نقسّم الرحلة إلى مراحل قابلة للتسليم: عملية، نظام، تبنٍّ. كل مرحلة لها معيار نجاح قبل الانتقال للتالية، مع إدارة تغيير لا تُترك للصدفة.",
      "We split the journey into shippable stages: process, system, adoption. Each stage has a success bar before the next one starts, with change management that is not left to chance.",
    ],
    outcomes: [
      ["مسار مرحلي واضح", "A staged path", "كل مرحلة تُغلق بمعيار، لا بانتقال مفتوح بلا نهاية.", "Each stage closes against a measure — not an open-ended move."],
      ["تشغيل لا يتوقف", "Operations that keep running", "الإطلاق يتم بجانب العمل اليومي لا على حسابه.", "Go-live happens alongside daily work, not at its expense."],
      ["تبنٍّ حقيقي", "Real adoption", "الفريق يستخدم النظام الجديد لأن المسار بُني حول عمله لا حوله.", "The team uses the new system because the path was built around their work."],
    ],
    deliverables: [
      ["خارطة تحول مرتبطة بالعمليات", "A process-linked transformation map"],
      ["خطة مراحل ومعايير نجاح", "Stage plan with success criteria"],
      ["خطة تبنٍّ وإدارة تغيير", "Adoption and change plan"],
      ["مكتب متابعة للتنفيذ", "An execution follow-up cadence"],
    ],
    audience: [
      ["رعاة التحول الرقمي", "Transformation sponsors"],
      ["مدراء العمليات", "Operations leaders"],
      ["تقنية المعلومات", "IT leadership"],
    ],
  }),
  grc: offering({
    lede: [
      "نضع إطار حوكمة يوضح من يملك القرار، وكيف تُدار المخاطر، وما الذي يجب إثباته للامتثال. GRC هنا تشغيل يومي منضبط، لا مجلد سياسات على الرف.",
      "We set a governance frame that shows who owns the decision, how risk is managed, and what must be proven for compliance. GRC here is disciplined daily operation — not a policy binder on a shelf.",
    ],
    problem: [
      "تتوزع المسؤوليات بين التقنية والإدارة والامتثال دون لغة مشتركة، فتتكرر الملاحظات في كل مراجعة.",
      "Ownership is split across IT, leadership, and compliance with no shared language, so the same findings return in every review.",
    ],
    approach: [
      "نبني السياسات والضوابط ومسارات التصعيد على واقع تشغيلك، ثم نربطها بأدلة يمكن تقديمها للمراجع. الإطار يُصمَّم ليُستخدم لا ليُعرض.",
      "We build policies, controls, and escalation paths on how you actually operate, then tie them to evidence an auditor can use. The frame is designed to be lived in — not presented.",
    ],
    outcomes: [
      ["ملكية واضحة", "Clear ownership", "كل قرار تقني حرج له مالك ومسار اعتماد.", "Every critical tech decision has an owner and an approval path."],
      ["مخاطر مرئية", "Visible risk", "سجل مخاطر يُراجع بدل أن يُكتشف وقت الأزمة.", "A risk register that is reviewed — not discovered in a crisis."],
      ["امتثال قابل للإثبات", "Provable compliance", "أدلة وضوابط جاهزة للمراجعة دون جمع مستعجل.", "Controls and evidence ready for review without a last-minute scramble."],
    ],
    deliverables: [
      ["إطار سياسات وضوابط", "Policy and control framework"],
      ["سجل مخاطر وصلاحيات", "Risk register and RACI"],
      ["مسارات اعتماد وتصعيد", "Approval and escalation paths"],
      ["حزمة أدلة للمراجعة", "An audit evidence pack"],
    ],
    audience: [
      ["الامتثال والحوكمة", "Compliance and governance"],
      ["إدارة المخاطر", "Risk management"],
      ["تقنية المعلومات", "IT leadership"],
    ],
  }),
  "gap-analysis": offering({
    lede: [
      "نقارن الوضع القائم بالمستهدف بنداً بنداً، ثم نغلق كل فجوة بخطة مالك ووقت وأثر. التحليل عندنا بداية تنفيذ لا قائمة ملاحظات طويلة.",
      "We compare current and target state item by item, then close each gap with an owner, a time, and an impact. Analysis here starts execution — it is not a long findings list.",
    ],
    problem: [
      "تعرف المؤسسة أن هناك فرقاً بين ما هو قائم وما هو مطلوب، لكن الفرق غير مُقاس وغير مرتَّب، فيتشتت الجهد.",
      "The organization knows there is a gap between current and required, but it is unmeasured and unranked, so effort scatters.",
    ],
    approach: [
      "نحدد المعيار المستهدف (تشغيل، أمن، امتثال، أو معمارية)، نقيس الفجوة، ثم نقدّم خطة إغلاق حسب الخطورة والجهد. النتيجة جدول عمل لا مجرد تقرير أحمر/أخضر.",
      "We define the target standard (operations, security, compliance, or architecture), measure the gap, then deliver a close-out plan by severity and effort. The result is a work plan — not a red/green report.",
    ],
    outcomes: [
      ["فجوات مُقاسة", "Measured gaps", "كل فجوة لها أثر وخطورة لا انطباع عام.", "Each gap has impact and severity — not a vague impression."],
      ["خطة إغلاق", "A close-out plan", "ترتيب واضح لما يُغلق أولاً ومن يملكه.", "A clear order of what closes first and who owns it."],
      ["أساس للميزانية", "A budget basis", "طلب موارد مبني على فجوات مثبتة لا على قائمة رغبات.", "A resource ask built on proven gaps — not a wish list."],
    ],
    deliverables: [
      ["مصفوفة الوضع الحالي والمستهدف", "Current vs target matrix"],
      ["تصنيف الفجوات حسب الخطورة", "Gaps ranked by severity"],
      ["خطة إغلاق بمالكين", "Close-out plan with owners"],
      ["عرض تنفيذي للنتائج", "Executive readout of findings"],
    ],
    audience: [
      ["مدراء التقنية", "IT managers"],
      ["الجودة والامتثال", "Quality and compliance"],
      ["رعاة المشاريع", "Project sponsors"],
    ],
  }),
  "bc-dr": offering({
    lede: [
      "نصمّم استمرارية الأعمال والتعافي بحيث يُعرف ماذا يبقى يعمل، ومتى يعود الباقي، ومن يقرر أثناء الانقطاع. الخطة تُختبر، لا تُحفظ في درج.",
      "We design continuity and recovery so you know what stays running, when the rest returns, and who decides during an outage. The plan is tested — not filed in a drawer.",
    ],
    problem: [
      "تُكتب خطط التعافي ثم لا تُختبر، فتكتشف المؤسسة وقت الانقطاع أن الافتراضات لا تصمد.",
      "Recovery plans are written and never tested, so the organization learns in an outage that the assumptions do not hold.",
    ],
    approach: [
      "نحدد الخدمات الحرجة وزمن التعافي المقبول، نبني إجراءات وأدواراً، ثم نختبر الاستعادة على سيناريوهات واقعية. التسليم يشمل جدولاً لإعادة الاختبار لا وثيقة لمرة واحدة.",
      "We define critical services and acceptable recovery time, build procedures and roles, then test restore against realistic scenarios. Delivery includes a re-test cadence — not a one-time document.",
    ],
    outcomes: [
      ["أولوية خدمة واضحة", "Clear service priority", "تعرف ماذا يُعاد أولاً ولماذا، لا ارتجال أثناء الحادث.", "You know what comes back first and why — no improvising in the incident."],
      ["زمن تعافٍ متفق عليه", "Agreed recovery time", "RTO/RPO مربوطان بالعمل لا برقم تقني مجرد.", "RTO/RPO tied to the business — not an abstract technical number."],
      ["استعادة مختبرة", "Tested restore", "سيناريو نُفِّذ مرة على الأقل قبل أن تحتاجه فعلاً.", "A scenario run at least once before you actually need it."],
    ],
    deliverables: [
      ["تحليل أثر الأعمال للخدمات الحرجة", "BIA for critical services"],
      ["خطة استمرارية وتعافٍ", "BC/DR plan"],
      ["أدوار غرفة القرار أثناء الانقطاع", "Decision-room roles during outage"],
      ["تمرين استعادة موثّق", "A documented restore exercise"],
    ],
    audience: [
      ["استمرارية الأعمال", "Business continuity owners"],
      ["تشغيل التقنية", "IT operations"],
      ["الإدارة التنفيذية", "Executive leadership"],
    ],
  }),
  web: offering({
    lede: [
      "نبني منصات ويب سريعة وآمنة تخدم العمل اليومي وتتكامل مع أنظمتك الحالية. المنتج يُقاس بالاستخدام والاستقرار، لا بعدد الصفحات.",
      "We build fast, secure web platforms that serve daily work and connect to your current systems. The product is judged by use and stability — not page count.",
    ],
    problem: [
      "المواقع والمنصات الداخلية تُبنى كواجهات معزولة، فتتكرر البيانات ويبطؤ العمل بين الفرق.",
      "Sites and internal platforms are built as isolated fronts, so data is duplicated and work slows between teams.",
    ],
    approach: [
      "نبدأ من رحلة المستخدم والعملية، ثم نختار المعمارية والتكامل بما يناسب الحمل والأمان. الإطلاق يتم بمراحل ومراقبة أداء لا دفعة واحدة بلا قياس.",
      "We start from the user journey and the process, then choose architecture and integration for load and security. Launch happens in stages with performance watch — not one unmeasured drop.",
    ],
    outcomes: [
      ["منصة تُستخدم يومياً", "A platform used daily", "مسارات أوضح تقلّل الوقت بين الطلب والإنجاز.", "Clearer paths that cut time from request to done."],
      ["تكامل لا إعادة إدخال", "Integration, not re-entry", "البيانات تنتقل من أنظمتك بدل النسخ اليدوي.", "Data moves from your systems instead of being typed twice."],
      ["أساس قابل للتوسعة", "A foundation that can grow", "معمارية تستوعب وحدات لاحقة دون إعادة بناء كاملة.", "Architecture that can take later modules without a full rebuild."],
    ],
    deliverables: [
      ["منصة ويب جاهزة للإنتاج", "A production-ready web platform"],
      ["تكامل مع الأنظمة القائمة", "Integration with current systems"],
      ["لوحة إدارة وصلاحيات", "Admin console and access roles"],
      ["توثيق تسليم ومراقبة إطلاق", "Handover docs and launch monitoring"],
    ],
    audience: [
      ["أصحاب المنتجات الرقمية", "Digital product owners"],
      ["التسويق والعمليات", "Marketing and operations"],
      ["تقنية المعلومات", "IT teams"],
    ],
  }),
  mobile: offering({
    lede: [
      "نصمّم تطبيقات iOS وAndroid بتجربة سلسة وأداء واضح، مربوطة بالعمليات الخلفية لا كغلاف تجميلي. التطبيق أداة عمل في الجيب.",
      "We design iOS and Android apps with a smooth experience and clear performance, tied to back-office processes — not a cosmetic shell. The app is a work tool in the pocket.",
    ],
    problem: [
      "تطبيقات الجوال تُطلق بواجهة جميلة ثم تتعثر في التزامن والصلاحيات وتجربة الحقول اليومية.",
      "Mobile apps launch with a polished interface, then stumble on sync, permissions, and everyday field use.",
    ],
    approach: [
      "نبني من حالات الاستخدام الحقيقية (ميدان، موافقة، متابعة)، ثم نضبط الأداء والعمل دون اتصال حيث يلزم. الاختبار يتم على أجهزة وسيناريوهات التشغيل لا على المحاكي وحده.",
      "We build from real use cases (field work, approval, follow-up), then tune performance and offline where it is needed. Testing runs on devices and operating scenarios — not the simulator alone.",
    ],
    outcomes: [
      ["تجربة ميدانية عملية", "A practical field experience", "خطوات قصيرة تعمل حتى مع شبكة غير مستقرة.", "Short steps that still work on an unstable network."],
      ["أداء يمكن الوثوق به", "Performance you can trust", "استجابة واضحة في المهام المتكررة لا في العرض فقط.", "Clear response on repeating tasks — not only in the demo."],
      ["قناة واحدة للعمل", "One channel for the work", "الجوال والويب يخدمان العملية نفسها دون نسختين من الحقيقة.", "Mobile and web serve the same process without two versions of the truth."],
    ],
    deliverables: [
      ["تطبيق iOS و/أو Android", "An iOS and/or Android app"],
      ["تكامل مع الخدمات الخلفية", "Back-end service integration"],
      ["تجربة استخدام مختبرة ميدانياً", "A field-tested user experience"],
      ["نشر ومتابعة ما بعد الإطلاق", "Store release and post-launch follow-up"],
    ],
    audience: [
      ["الفرق الميدانية", "Field teams"],
      ["أصحاب الخدمة", "Service owners"],
      ["المنتج الرقمي", "Digital product leads"],
    ],
  }),
  "custom-software": offering({
    lede: [
      "نبني أنظمة حول عملياتك الفعلية بدل قوالب جاهزة تفرض عليك طريقة عمل لا تناسبك. البرمجيات المخصصة هنا منتج تشغيلي بملكية واضحة.",
      "We build systems around your real workflows instead of templates that force a way of working that does not fit. Custom software here is an operating product with clear ownership.",
    ],
    problem: [
      "الأنظمة الجاهزة تغطي 70٪ وتكسر الـ30٪ الحرجة، فتعود الفرق إلى الإكسل والمراسلات.",
      "Off-the-shelf systems cover 70% and break the critical 30%, so teams fall back to spreadsheets and chat.",
    ],
    approach: [
      "نوثّق العملية كما تحدث، نصمم النموذج والواجهات حول الاستثناءات الحقيقية، ثم نبني بوحدات يمكن تشغيلها تدريجياً. كل إصدار يغلق جزءاً من العمل لا معلماً تقنياً فقط.",
      "We document the process as it happens, design the model and interfaces around real exceptions, then build in modules that can go live in stages. Each release closes a piece of work — not only a technical milestone.",
    ],
    outcomes: [
      ["نظام يطابق العملية", "A system that matches the process", "الاستثناءات تُعالَج داخل النظام لا خارجه.", "Exceptions are handled inside the system — not around it."],
      ["توقف عن الحلول الجانبية", "Side systems stop", "يقل الاعتماد على ملفات متفرقة ونسخ متعارضة.", "Less reliance on scattered files and conflicting copies."],
      ["توسع بوحدات", "Grow by modules", "تضيف قدرة لاحقاً دون إعادة كتابة الأساس.", "You add capability later without rewriting the foundation."],
    ],
    deliverables: [
      ["نظام مخصص جاهز للتشغيل", "A custom system ready to operate"],
      ["نموذج بيانات وصلاحيات", "Data model and permissions"],
      ["وحدات قابلة للتوسع", "Extensible modules"],
      ["نقل معرفة لفريقك", "Knowledge transfer to your team"],
    ],
    audience: [
      ["أصحاب العمليات الخاصة", "Owners of distinctive processes"],
      ["الإدارة الوسطى", "Middle management"],
      ["تقنية المعلومات", "IT"],
    ],
  }),
  "ux-ui": offering({
    lede: [
      "نصمم واجهات أوضح وخطوات أقصر حتى يستخدم الفريق النظام دون شرح في كل شاشة. تجربة الاستخدام هنا تقليل احتكاك، لا تجميل ألوان.",
      "We design clearer interfaces and shorter paths so the team can use the system without a walkthrough on every screen. UX here is less friction — not a color refresh.",
    ],
    problem: [
      "النظام يعمل تقنياً لكن الناس تتجنبه لأن المسار طويل والحقول غير مفهومة، فتعود الأخطاء اليدوية.",
      "The system works technically, but people avoid it because the path is long and the fields are unclear, so manual errors return.",
    ],
    approach: [
      "نرصد رحلة المستخدم الحقيقية، نعيد ترتيب المعلومات والإجراءات، ونختبر النماذج مع من سيستخدمها يومياً. التسليم يشمل نظام مكونات يمكن للفريق البناء عليه.",
      "We map the real user journey, reorder information and actions, and test prototypes with the people who will use them daily. Delivery includes a component system your team can keep building on.",
    ],
    outcomes: [
      ["مسارات أقصر", "Shorter paths", "عدد خطوات أقل لإتمام المهمة نفسها.", "Fewer steps to complete the same task."],
      ["أخطاء إدخال أقل", "Fewer input errors", "حقول وتسميات تجعل المعنى واضحاً قبل الإرسال.", "Fields and labels that make meaning clear before submit."],
      ["تبنٍّ أسرع", "Faster adoption", "تدريب أقصر لأن الواجهة تفسّر نفسها.", "Shorter training because the interface explains itself."],
    ],
    deliverables: [
      ["بحث مستخدم ورحلات", "User research and journeys"],
      ["نماذج تفاعلية مختبرة", "Tested interactive prototypes"],
      ["نظام واجهات ومكونات", "UI system and components"],
      ["دليل استخدام للفريق", "A team usage guide"],
    ],
    audience: [
      ["أصحاب المنتجات", "Product owners"],
      ["فرق التشغيل اليومية", "Day-to-day operations teams"],
      ["التسويق والتجربة", "Marketing and experience leads"],
    ],
  }),
  integration: offering({
    lede: [
      "نربط الأنظمة والخدمات في مسار بيانات واحد بدل الجزر المنفصلة والنسخ اليدوي. التكامل هنا عقد تشغيلي موثوق، لا سكربت يُكسر عند أول تحديث.",
      "We connect systems and services into one data path instead of isolated islands and manual copies. Integration here is a reliable operating contract — not a script that breaks on the first update.",
    ],
    problem: [
      "كل نظام صحيح وحده، لكن الحقيقة موزعة، فيختلف الرقم بين المالية والتشغيل والدعم.",
      "Each system is correct on its own, but the truth is split, so finance, operations, and support show different numbers.",
    ],
    approach: [
      "نحدد مصدر الحقيقة لكل كيان، نصمم العقود والأخطاء وإعادة المحاولة، ثم نراقب التدفق بعد الإطلاق. الفشل يُرى ويُعالج، لا يختفي في صمت.",
      "We define the source of truth for each entity, design contracts, errors, and retries, then watch the flow after go-live. Failure is visible and handled — it does not vanish in silence.",
    ],
    outcomes: [
      ["حقيقة واحدة للبيانات", "One data truth", "الكيان نفسه لا يُعاد إدخاله في ثلاثة أماكن.", "The same entity is not re-entered in three places."],
      ["تشغيل أقل هشاشة", "Less brittle operations", "التحديث في نظام لا يكسر الباقي دون إنذار.", "A change in one system does not break the rest without warning."],
      ["وقت أقل للتسوية", "Less time spent reconciling", "التقارير تُبنى على تدفق لا على تصدير أسبوعي.", "Reports are built on a flow — not a weekly export."],
    ],
    deliverables: [
      ["خريطة تكامل ومصادر حقيقة", "Integration map and sources of truth"],
      ["واجهات وعقود بيانات", "APIs and data contracts"],
      ["معالجة أخطاء ومراقبة", "Error handling and monitoring"],
      ["تشغيل تجريبي قبل الاعتماد", "A staged cutover before sign-off"],
    ],
    audience: [
      ["هندسة الأنظمة", "Systems engineering"],
      ["المالية والعمليات", "Finance and operations"],
      ["تقنية المعلومات", "IT"],
    ],
  }),
  automation: offering({
    lede: [
      "نؤتمت المهام المتكررة لتقليل الخطأ اليدوي وتسريع الإجراءات التي يعرفها الفريق عن ظهر قلب. الأتمتة هنا توفير وقت موثوق، لا روبوت يُعرض مرة.",
      "We automate repeating work to cut manual error and speed up procedures the team already knows by heart. Automation here is reliable time back — not a robot shown once.",
    ],
    problem: [
      "العمل اليومي يستهلك في النسخ والموافقات والمتابعة، بينما القيمة الحقيقية تنتظر في نهاية الطابور.",
      "Daily work is consumed by copying, approvals, and chasing, while the real value waits at the end of the queue.",
    ],
    approach: [
      "نختار الإجراءات ذات الحجم والتكرار الواضح، نصمم القواعد والاستثناءات، ثم نطلق على نطاق ضيق قبل التعميم. الإنسان يبقى في القرار الحرج، والآلة في التكرار.",
      "We pick procedures with clear volume and repetition, design rules and exceptions, then launch narrow before we scale. People stay on the critical decision; the machine handles the repeat.",
    ],
    outcomes: [
      ["وقت يعود للفريق", "Time returned to the team", "ساعات أسبوعية تُسحب من النسخ والمتابعة.", "Weekly hours pulled out of copying and chasing."],
      ["خطأ بشري أقل", "Fewer human errors", "القواعد تُطبَّق في كل مرة بالطريقة نفسها.", "Rules apply the same way every time."],
      ["إجراء قابل للقياس", "A measurable procedure", "تعرف كم طلباً اكتمل وفي كم دقيقة.", "You know how many requests finished and in how many minutes."],
    ],
    deliverables: [
      ["حصر العمليات القابلة للأتمتة", "An inventory of automatable processes"],
      ["تدفقات مؤتمتة مع استثناءات", "Automated flows with exceptions"],
      ["لوحة متابعة للتنفيذ", "An execution dashboard"],
      ["توثيق وتشغيل للفريق", "Runbooks for the team"],
    ],
    audience: [
      ["العمليات والجودة", "Operations and quality"],
      ["الدعم والموارد البشرية", "Support and HR"],
      ["تقنية المعلومات", "IT"],
    ],
  }),
  "service-desk": offering({
    lede: [
      "نبني نقطة تواصل واحدة للطلبات والدعم، بمسار واضح من الاستلام حتى الإغلاق. مكتب الخدمة هنا تجربة موظف منضبطة، لا صندوق بريد مشترك.",
      "We build a single point of contact for requests and support, with a clear path from intake to close. The service desk here is a disciplined employee experience — not a shared inbox.",
    ],
    problem: [
      "الطلبات تضيع بين واتساب والبريد والمكالمات، ولا أحد يعرف ما المفتوح وما المتأخر.",
      "Requests vanish between WhatsApp, email, and calls, and no one knows what is open or overdue.",
    ],
    approach: [
      "نصمم القنوات، التصنيف، والأولوية، ثم نهيئ المنصة والأدوار ولوحات الانتظار. القياس يبدأ من يوم التشغيل: وقت الرد، وقت الحل، ورضا الطلب.",
      "We design channels, classification, and priority, then configure the platform, roles, and queues. Measurement starts on day one of operations: response time, resolve time, and request satisfaction.",
    ],
    outcomes: [
      ["مدخل واحد للطلب", "One intake", "الموظف يعرف أين يرفع الطلب ويتابع حالته.", "The employee knows where to raise a request and how to track it."],
      ["طوابير مرتَّبة", "Ordered queues", "العمل يُوزَّع حسب الأولوية والمهارة لا حسب من يصرخ أولاً.", "Work is assigned by priority and skill — not by who shouts first."],
      ["دعم يمكن قياسه", "Support you can measure", "الإدارة ترى الالتزام لا الانطباعات.", "Leadership sees adherence — not impressions."],
    ],
    deliverables: [
      ["نموذج مكتب خدمة وتصنيف", "Service desk model and catalog"],
      ["تهيئة المنصة والقنوات", "Platform and channel setup"],
      ["أدوار ومستويات دعم", "Roles and support tiers"],
      ["لوحات زمن الرد والإغلاق", "Response and close-time dashboards"],
    ],
    audience: [
      ["مدير الدعم", "Support manager"],
      ["تشغيل IT", "IT operations"],
      ["تجربة الموظف", "Employee experience owners"],
    ],
  }),
  itom: offering({
    lede: [
      "نربط مراقبة البنية والخدمات بحالة التشغيل اليومية حتى تُرى المشكلة قبل أن تتحول إلى انقطاع. ITOM هنا وعي مبكر، لا لوحة مليئة بالإنذارات.",
      "We connect infrastructure and service monitoring to daily operations so issues are seen before they become outages. ITOM here is early awareness — not a dashboard full of noise.",
    ],
    problem: [
      "الفرق تعرف أن الخادم سقط بعد أن يتصل المستخدم، لأن المراقبة غير مربوطة بالخدمة ولا بالأولوية.",
      "Teams learn a server is down after a user calls, because monitoring is not tied to the service or to priority.",
    ],
    approach: [
      "نحدد الخدمات الحرجة ومؤشراتها، نضبط الاكتشاف والإنذار، ثم نربط التنبيه بمسار حادث. الهدف إنذار قليل وصحيح، لا سيل تنبيهات.",
      "We define critical services and their signals, tune discovery and alerting, then route the alert into an incident path. The aim is few correct alerts — not a flood.",
    ],
    outcomes: [
      ["رؤية قبل المستخدم", "Seen before the user", "الإنذار يصل والخدمة ما زالت داخل الحد المقبول.", "The alert arrives while the service is still inside the acceptable limit."],
      ["ربط البنية بالخدمة", "Infrastructure tied to service", "تعرف أي خادم يخدم أي عمل، لا جرداً أصم.", "You know which server serves which work — not a mute inventory."],
      ["ضجيج أقل", "Less noise", "الإنذارات تُصفّى حتى يتصرف الفريق في المهم.", "Alerts are filtered so the team acts on what matters."],
    ],
    deliverables: [
      ["خريطة خدمات وبنية", "Service and infrastructure map"],
      ["مراقبة واكتشاف مضبوط", "Tuned monitoring and discovery"],
      ["قواعد إنذار مرتبطة بالأولوية", "Priority-linked alert rules"],
      ["تشغيل تجريبي لغرفة العمليات", "An operations-room trial run"],
    ],
    audience: [
      ["تشغيل البنية", "Infrastructure operations"],
      ["NOC / عمليات IT", "NOC / IT operations"],
      ["أصحاب الخدمات الحرجة", "Critical service owners"],
    ],
  }),
  incident: offering({
    lede: [
      "نضع استجابة منظمة للحوادث تقلّل وقت التعطل وتعيد الخدمة وفق أولوية واضحة. الحادث يُدار كعملية، لا كمجموعة رسائل متسارعة.",
      "We put structured incident response in place that cuts downtime and restores service by priority. An incident is run as a process — not a burst of chat messages.",
    ],
    problem: [
      "عند الانقطاع يتداخل الجميع، تضيع الملكية، ويُغلق البلاغ قبل فهم السبب فيتكرر غداً.",
      "During an outage everyone piles in, ownership is lost, and the ticket is closed before the cause is understood — so it returns tomorrow.",
    ],
    approach: [
      "نعرف درجات الخطورة، غرفة القرار، ومسار التواصل، ثم نربط الإغلاق بمراجعة سبب جذري للحالات المتكررة. السرعة لا تلغي التوثيق.",
      "We define severity grades, the decision room, and the comms path, then tie closure to a root-cause review for repeating cases. Speed does not cancel documentation.",
    ],
    outcomes: [
      ["وقت تعطّل أقصر", "Shorter downtime", "مسار معروف يعيد الخدمة حسب الأولوية لا حسب الصدفة.", "A known path restores service by priority — not by chance."],
      ["تواصل منضبط", "Disciplined communication", "الإدارة والمستخدم يعرفان الحالة دون شائعات.", "Leadership and users know the status without rumours."],
      ["تكرار أقل", "Less repeat", "الأسباب الجذرية تُغلق بدل إطفاء الحريق كل أسبوع.", "Root causes are closed instead of putting out the same fire every week."],
    ],
    deliverables: [
      ["سياسة تصنيف الحوادث", "Incident severity policy"],
      ["إجراءات استجابة وتصعيد", "Response and escalation procedures"],
      ["قوالب تواصل أثناء الحادث", "Incident communication templates"],
      ["مراجعة ما بعد الحادث", "Post-incident review cadence"],
    ],
    audience: [
      ["عمليات IT", "IT operations"],
      ["أصحاب الخدمات", "Service owners"],
      ["إدارة المخاطر", "Risk management"],
    ],
  }),
  change: offering({
    lede: [
      "نجعل تغيير الأنظمة محسوباً: أثر، موافقة، نافذة، وتراجع إن لزم. التغيير هنا حماية للتشغيل، لا بيروقراطية تمنع الإطلاق.",
      "We make system change calculated: impact, approval, window, and rollback if needed. Change here protects operations — it is not bureaucracy that blocks release.",
    ],
    problem: [
      "تُنفَّذ التحديثات بسرعة في أوقات غير مناسبة، فيسقط ما كان يعمل، أو تتجمد التغييرات خوفاً فيتراكم الدين التقني.",
      "Updates go out fast at the wrong time and break what worked — or change freezes in fear and technical debt piles up.",
    ],
    approach: [
      "نصنف التغيير (قياسي، عادي، طارئ)، نقيّم الأثر والاعتماديات، ونربط التنفيذ بفحص وتراجع. المسار يكون أسرع للآمن، وأشد للخطِر.",
      "We classify change (standard, normal, emergency), assess impact and dependencies, and tie execution to checks and rollback. The path is faster for the safe, tighter for the risky.",
    ],
    outcomes: [
      ["إطلاق أقل مفاجأة", "Fewer surprise releases", "تعرف ماذا يتغير ومتى ومن يعتمد.", "You know what changes, when, and who approves."],
      ["تراجع ممكن", "Rollback is possible", "خطة عودة جزء من التغيير لا أمنية بعد السقوط.", "A return plan is part of the change — not a wish after a fall."],
      ["إيقاع تغيير صحي", "A healthy change rhythm", "التحديثات تتم بانتظام دون تجميد طويل أو فوضى.", "Updates happen regularly — without a long freeze or chaos."],
    ],
    deliverables: [
      ["سياسة وأنواع التغيير", "Change policy and types"],
      ["تقييم أثر واعتماديات", "Impact and dependency assessment"],
      ["نوافذ تنفيذ وتراجع", "Implementation windows and rollback"],
      ["سجل تغيير قابل للمراجعة", "An auditable change log"],
    ],
    audience: [
      ["إدارة التغيير", "Change managers"],
      ["التطوير والتشغيل", "Dev and operations"],
      ["أمن المعلومات", "Information security"],
    ],
  }),
  asset: offering({
    lede: [
      "نجعل الأصول التقنية مرئية طوال دورة حياتها: من الشراء حتى الإخراج. الجرد هنا قرار مالي وتشغيلي، لا جدول يُحدَّث مرة في السنة.",
      "We make IT assets visible across their lifecycle: from purchase to retirement. Inventory here is a financial and operating decision — not a spreadsheet updated once a year.",
    ],
    problem: [
      "لا أحد يعرف بدقة ماذا لديك، أين هو، ومن يستخدمه، فتتكرر المشتريات وتضيع الأجهزة عند خروج الموظفين.",
      "No one knows exactly what you have, where it is, or who uses it, so purchases repeat and devices vanish when people leave.",
    ],
    approach: [
      "نبني سجلاً مرتبطاً بالموقع والمالك والحالة، ونربطه بالشراء والدعم والإخراج. التحديث يصبح جزءاً من العملية لا مهمة لاحقة.",
      "We build a register tied to location, owner, and status, and connect it to purchasing, support, and retirement. Updates become part of the process — not a later chore.",
    ],
    outcomes: [
      ["جرد يمكن الوثوق به", "An inventory you can trust", "رقم الأصول يطابق الواقع لا آخر ملف إكسل.", "The asset count matches reality — not the last spreadsheet."],
      ["تكلفة أوضح", "Clearer cost", "تعرف ماذا يُجدَّد وماذا يُخرج قبل طلب الميزانية.", "You know what to renew or retire before the budget ask."],
      ["أمان عند الخروج", "Safer offboarding", "الصلاحيات والأجهزة تُغلق مع حركة الموظف.", "Access and devices close when the person moves."],
    ],
    deliverables: [
      ["سجل أصول ودورة حياة", "Asset register and lifecycle"],
      ["ربط بالمشتريات والدعم", "Link to purchasing and support"],
      ["إجراءات إدخال وإخراج", "Onboarding and retirement procedures"],
      ["تقارير حيازة وتكلفة", "Ownership and cost reports"],
    ],
    audience: [
      ["إدارة الأصول", "Asset managers"],
      ["المالية والمشتريات", "Finance and procurement"],
      ["الدعم التقني", "Technical support"],
    ],
  }),
  sla: offering({
    lede: [
      "نحوّل التزامات الزمن والجودة إلى أرقام تُراجع مع الإدارة والعملاء. اتفاقية مستوى الخدمة هنا عقد تشغيلي حيّ، لا فقرة في عرض تجاري.",
      "We turn time and quality commitments into numbers that can be reviewed with leadership and clients. An SLA here is a living operating contract — not a clause in a proposal.",
    ],
    problem: [
      "يُوعد بوقت استجابة ثم لا يُقاس، أو يُقاس بمعيار لا يطابق حرجية الخدمة، فينشأ جدل بدل تحسين.",
      "A response time is promised then never measured — or measured against a bar that does not match service criticality — so argument replaces improvement.",
    ],
    approach: [
      "نحدد الخدمات ومستويات الحرجية، نصمم أهداف الزمن والاستثناءات، ثم نربطها بلوحات وتقارير شهرية. الاتفاقية تُراجع عندما يتغيّر العمل لا عندما تحدث أزمة فقط.",
      "We define services and criticality, design time targets and exceptions, then tie them to dashboards and monthly reports. The agreement is reviewed when the work changes — not only when a crisis hits.",
    ],
    outcomes: [
      ["التزام يمكن إثباته", "A commitment you can prove", "الرقم يُعرض من النظام لا من الذاكرة.", "The number comes from the system — not from memory."],
      ["حوار أوضح مع العميل", "A clearer client conversation", "النقاش على الاستثناء والحرجية لا على الانطباع.", "The discussion is about exceptions and criticality — not mood."],
      ["تحسين مبني على بيانات", "Improvement based on data", "تعرف أين يُكسر الالتزام ولماذا.", "You know where the commitment breaks and why."],
    ],
    deliverables: [
      ["كتالوج خدمات ومستويات", "Service catalog and tiers"],
      ["أهداف زمن واستثناءات", "Time targets and exceptions"],
      ["لوحات التزام شهرية", "Monthly adherence dashboards"],
      ["مراجعة اتفاقية دورية", "A periodic SLA review"],
    ],
    audience: [
      ["مدير الخدمة", "Service managers"],
      ["المبيعات ونجاح العملاء", "Sales and customer success"],
      ["الإدارة التنفيذية", "Executive leadership"],
    ],
  }),
  networks: offering({
    lede: [
      "نصمم ونشغّل شبكات مستقرة تربط الفروع والأنظمة بأداء وأمان واضح. الشبكة هنا أساس العمل، لا كابلات تُمدّ ثم تُنسى.",
      "We design and operate stable networks that connect branches and systems with clear performance and security. The network here is the foundation of work — not cabling that is pulled and forgotten.",
    ],
    problem: [
      "الانقطاعات البطيئة والتغطية غير المتكافئة والصلاحيات المفتوحة تُعطّل الفروع بصمت حتى تنفجر في يوم حرج.",
      "Slow outages, uneven coverage, and open access quietly stall branches until they explode on a critical day.",
    ],
    approach: [
      "نمسح الموقع والحمل ومسارات الربط، نصمم التجزئة والحماية والتوافر، ثم نضبط المراقبة قبل الاعتماد. كل تغيير لاحق يمر من المعمارية لا من ترقيع ميداني.",
      "We survey the site, the load, and the links, design segmentation, protection, and availability, then set monitoring before sign-off. Later change goes through the architecture — not field patches.",
    ],
    outcomes: [
      ["ربط يمكن الاعتماد عليه", "A link you can rely on", "الفروع والتطبيقات تبقى في مسار معروف.", "Branches and applications stay on a known path."],
      ["أمان مضمَّن", "Security built in", "التجزئة والصلاحيات جزء من التصميم لا إضافة لاحقة.", "Segmentation and access are part of the design — not a later add-on."],
      ["أداء مفهوم", "Performance you can explain", "تعرف أين الاختناق قبل أن يشتكي المستخدم.", "You know where the bottleneck is before the user complains."],
    ],
    deliverables: [
      ["تصميم شبكة وتجزئة", "Network design and segmentation"],
      ["تنفيذ وضبط أجهزة الربط", "Implementation and device configuration"],
      ["حماية محيط ووصول", "Perimeter and access protection"],
      ["مراقبة وتوثيق تشغيلي", "Monitoring and operational documentation"],
    ],
    audience: [
      ["هندسة الشبكات", "Network engineering"],
      ["الفروع والعمليات", "Branches and operations"],
      ["أمن المعلومات", "Information security"],
    ],
  }),
  servers: offering({
    lede: [
      "ندير الخوادم التي تشغّل تطبيقاتك الحرجة بتوافر ومراقبة مستمرين. الخادم هنا مورد مضبوط، لا صندوق يُشغَّل ويُترك.",
      "We manage the servers that run your critical applications with steady availability and monitoring. A server here is a controlled resource — not a box that is powered on and left.",
    ],
    problem: [
      "الخوادم تتراكم بتحديثات متأخرة وسعة غير مرئية، فيظهر الضغط فجأة في يوم الذروة.",
      "Servers accumulate with late patches and invisible capacity, so pressure appears suddenly on peak day.",
    ],
    approach: [
      "نحدد أحمال العمل، نضبط التوافر والتحديث والنسخ، ونراقب السعة قبل أن تُستنفد. الصيانة الوقائية جزء من الخدمة.",
      "We define workloads, set availability, patching, and backup, and watch capacity before it is exhausted. Preventive maintenance is part of the service.",
    ],
    outcomes: [
      ["توافر للتطبيق الحرج", "Availability for the critical app", "خطة واضحة لما يحدث عند سقوط عقدة.", "A clear plan for when a node fails."],
      ["تحديث منضبط", "Controlled patching", "النوافذ معروفة والأثر مُقيَّم.", "Windows are known and impact is assessed."],
      ["سعة مرئية", "Visible capacity", "التوسع قرار مبكر لا حالة طوارئ.", "Scale-out is an early decision — not an emergency."],
    ],
    deliverables: [
      ["تقييم أحمال وتوافر", "Workload and availability assessment"],
      ["تهيئة وتشغيل خوادم", "Server build and operations"],
      ["سياسة تحديث ونسخ", "Patching and backup policy"],
      ["مراقبة سعة وأداء", "Capacity and performance monitoring"],
    ],
    audience: [
      ["تشغيل الأنظمة", "Systems operations"],
      ["أصحاب التطبيقات", "Application owners"],
      ["البنية التحتية", "Infrastructure teams"],
    ],
  }),
  storage: offering({
    lede: [
      "نبني تخزيناً يتوسع مع بياناتك ويبقي الوصول سريعاً ومنظماً. التخزين هنا طبقة خدمة بمستويات، لا قرص يُملأ حتى يمتلئ.",
      "We build storage that grows with your data and keeps access fast and organized. Storage here is a service tier — not a disk filled until it is full.",
    ],
    problem: [
      "البيانات تنمو بلا سياسة احتفاظ أو أداء، فيبطؤ النظام الحرج بينما تُحفظ ملفات لا أحد يحتاجها على الوسط الأغلى.",
      "Data grows with no retention or performance policy, so the critical system slows while unused files sit on the most expensive tier.",
    ],
    approach: [
      "نصنف البيانات حسب الحرجية وزمن الوصول، نصمم المستويات والنسخ، ونضع سياسات نمو. التكلفة والأداء يُراجعان معاً لا كلٌ على حدة.",
      "We classify data by criticality and access time, design tiers and copies, and set growth policies. Cost and performance are reviewed together — not apart.",
    ],
    outcomes: [
      ["وصول يناسب الحرجية", "Access that matches criticality", "البيانات الساخنة سريعة، والباردة أقل تكلفة.", "Hot data is fast; cold data costs less."],
      ["نمو بدون مفاجأة", "Growth without surprise", "تعرف متى تتوسع قبل أن تمتلئ المصفوفة.", "You know when to expand before the array is full."],
      ["حماية للنسخ", "Protected copies", "النسخ ليست على الوسط نفسه الذي نحمي منه.", "Copies are not on the same medium you are protecting against."],
    ],
    deliverables: [
      ["تصنيف بيانات ومستويات تخزين", "Data classification and storage tiers"],
      ["تصميم سعة وأداء", "Capacity and performance design"],
      ["سياسة احتفاظ ونسخ", "Retention and copy policy"],
      ["مراقبة نمو وتكلفة", "Growth and cost monitoring"],
    ],
    audience: [
      ["إدارة البيانات", "Data management"],
      ["البنية التحتية", "Infrastructure"],
      ["المالية التقنية", "IT finance"],
    ],
  }),
  virtualization: offering({
    lede: [
      "نبني بيئات افتراضية تستغل الموارد أفضل وتسهّل النقل والتوسعة. الافتراضية هنا كفاءة تشغيل، لا تكديس آلات افتراضية بلا حوكمة.",
      "We build virtual environments that use resources better and make move and scale simpler. Virtualization here is operating efficiency — not a pile of VMs with no governance.",
    ],
    problem: [
      "الآلات الافتراضية تتكاثر، تُستهلك التراخيص والذاكرة، ولا أحد يعرف ما الحيّ وما المهجور.",
      "Virtual machines proliferate, licenses and memory are consumed, and no one knows what is live versus abandoned.",
    ],
    approach: [
      "نصمم العناقيد والسعة والسياسات، نضبط القوالب والصلاحيات، ونراجع الهدر دورياً. الانتقال من فيزيائي إلى افتراضي يتم بخطة تراجع.",
      "We design clusters, capacity, and policy, set templates and access, and review waste on a cadence. Physical-to-virtual moves include a rollback plan.",
    ],
    outcomes: [
      ["استخدام أعلى للموارد", "Higher resource use", "قدرة أكثر من العتاد نفسه دون فوضى.", "More capacity from the same hardware — without chaos."],
      ["نقل أبسط", "Simpler movement", "خدمات تنتقل بين العُقد بصيانة محسوبة.", "Services move between nodes with calculated maintenance."],
      ["حوكمة للآلات", "VM governance", "قوالب وعمر وصلاحيات تمنع التكاثر العشوائي.", "Templates, lifespan, and access that stop random sprawl."],
    ],
    deliverables: [
      ["تصميم عناقيد وسعة", "Cluster and capacity design"],
      ["قوالب وسياسات إنشاء", "Templates and provisioning policy"],
      ["خطة انتقال وتراجع", "Migration and rollback plan"],
      ["مراجعة هدر دورية", "A periodic waste review"],
    ],
    audience: [
      ["هندسة الأنظمة", "Systems engineering"],
      ["تشغيل مراكز البيانات", "Data center operations"],
      ["أصحاب التطبيقات", "Application owners"],
    ],
  }),
  "data-center": offering({
    lede: [
      "نجهّز ونشغّل مراكز بيانات بمعايير تبريد وطاقة وأمن فيزيائي تناسب حرجية خدماتك. المركز هنا بيئة محسوبة، لا غرفة سيرفرات مزدحمة.",
      "We build and operate data centers with cooling, power, and physical security standards that match how critical your services are. The facility here is a calculated environment — not a crowded server room.",
    ],
    problem: [
      "التبريد والطاقة والمسار الفيزيائي يُعالجون كترميمات متفرقة، فيظهر الخطر عند أول ارتفاع حمل أو صيانة.",
      "Cooling, power, and physical path are treated as scattered fixes, so risk appears at the first load spike or maintenance window.",
    ],
    approach: [
      "نصمم المسارات المزدوجة، السعة، والوصول الفيزيائي، ثم نضبط التشغيل والمراقبة. التسليم يشمل إجراءات صيانة يمكن تنفيذها دون إيقاف كل شيء.",
      "We design dual paths, capacity, and physical access, then set operations and monitoring. Delivery includes maintenance procedures that can run without stopping everything.",
    ],
    outcomes: [
      ["طاقة وتبريد مفهومان", "Power and cooling you can explain", "تعرف الهامش قبل أن تصل إلى الحد.", "You know the headroom before you hit the limit."],
      ["وصول فيزيائي منضبط", "Controlled physical access", "من يدخل القاعة ومتى، بسجل يمكن مراجعته.", "Who enters the hall and when, with a log you can review."],
      ["صيانة دون انقطاع شامل", "Maintenance without a total outage", "مسارات تسمح بالعمل على جزء دون إسقاط الكل.", "Paths that let you work on one part without dropping all."],
    ],
    deliverables: [
      ["تصميم سعة طاقة وتبريد", "Power and cooling capacity design"],
      ["مخطط قاعة ومسارات", "Hall layout and paths"],
      ["أمن فيزيائي ووصول", "Physical security and access"],
      ["إجراءات تشغيل وصيانة", "Operating and maintenance procedures"],
    ],
    audience: [
      ["مرافق التقنية", "IT facilities"],
      ["البنية التحتية", "Infrastructure"],
      ["الأمن والسلامة", "Security and safety"],
    ],
  }),
  backup: offering({
    lede: [
      "نجعل النسخ الاحتياطي منتظماً والاستعادة مختبرة حتى لا يبقى التعافي مجرد افتراض. النسخة التي لا تُستعاد ليست نسخة.",
      "We make backup regular and restore tested so recovery is proven — not assumed. A copy that cannot be restored is not a backup.",
    ],
    problem: [
      "النسخ تعمل ليلاً من دون أن يتحقق أحد أن الاستعادة ممكنة، أو تُحفظ على الوسط نفسه الذي سيفشل.",
      "Backups run at night and no one checks that restore is possible — or they sit on the same medium that will fail.",
    ],
    approach: [
      "نحدد ما يُنسخ، وكم يُحتفظ به، وأين، ثم نجدول اختبار استعادة للخدمات الحرجة. التقرير الشهري يعرض نجاح النسخ ونجاح الاستعادة معاً.",
      "We define what is copied, how long it is kept, and where, then schedule restore tests for critical services. The monthly report shows backup success and restore success together.",
    ],
    outcomes: [
      ["استعادة مثبتة", "Proven restore", "سيناريو نُفِّذ على بيانات حقيقية لا على ملف تجريبي فقط.", "A scenario run on real data — not only a sample file."],
      ["احتفاظ يناسب المخاطر", "Retention that matches risk", "لا تُحذف النسخة التي ما زلت تحتاجها، ولا تُدفع تكلفة ما لا تحتاجه.", "You do not delete a copy you still need, and you do not pay for what you do not."],
      ["فصل عن الخطر", "Separation from the risk", "نسخة خارج نطاق الإصابة ببرمجية الفدية أو تلف المصفوفة.", "A copy outside ransomware reach or array failure."],
    ],
    deliverables: [
      ["سياسة نسخ واحتفاظ", "Backup and retention policy"],
      ["تنفيذ وجدولة مضبوطة", "Implementation and tuned schedules"],
      ["اختبار استعادة موثّق", "A documented restore test"],
      ["تقرير نجاح شهري", "A monthly success report"],
    ],
    audience: [
      ["تشغيل الأنظمة", "Systems operations"],
      ["استمرارية الأعمال", "Business continuity"],
      ["أمن المعلومات", "Information security"],
    ],
  }),
  soc: offering({
    lede: [
      "نبني مراقبة مستمرة للتهديدات مع تحليل واستجابة قبل أن يتسع الأثر. مركز العمليات الأمنية هنا وردية قرار، لا شاشة تُترك ليلاً.",
      "We build continuous threat monitoring with analysis and response before impact spreads. The SOC here is a decision shift — not a screen left on overnight.",
    ],
    problem: [
      "التنبيهات الأمنية تصل متأخرة أو كثيرة بلا سياق، فيُتجاهل المهم ويُطارَد الضجيج.",
      "Security alerts arrive late or in bulk without context, so what matters is ignored and noise is chased.",
    ],
    approach: [
      "نحدد حالات المراقبة الحرجة، نضبط المصادر وقواعد الكشف، ونبني مسارات تصعيد بوقت استجابة. التحسين يتم من الحوادث الحقيقية لا من قواعد عامة مستوردة.",
      "We define critical monitoring cases, tune sources and detection rules, and build escalation paths with response times. Improvement comes from real incidents — not imported generic rules.",
    ],
    outcomes: [
      ["كشف أبكر", "Earlier detection", "الحادث يُرى وهو صغير لا بعد تسريب أسبوع.", "The incident is seen while it is small — not after a week of leakage."],
      ["استجابة بمالك", "Response with an owner", "كل تنبيه حرج له مسار وشخص لا مجموعة عامة.", "Every critical alert has a path and a person — not a generic group."],
      ["تحسين من الواقع", "Improvement from reality", "القواعد تُضبط مما حدث لديكم لا من قالب بائع.", "Rules are tuned from what happened in your environment — not a vendor template."],
    ],
    deliverables: [
      ["نموذج تشغيل SOC", "A SOC operating model"],
      ["حالات كشف ومصادر أحداث", "Detection use cases and event sources"],
      ["مسارات استجابة وتصعيد", "Response and escalation paths"],
      ["تقارير وردية وإدارة", "Shift and leadership reports"],
    ],
    audience: [
      ["أمن المعلومات", "Information security"],
      ["عمليات الأمن", "Security operations"],
      ["إدارة المخاطر", "Risk management"],
    ],
  }),
  siem: offering({
    lede: [
      "نجمع الأحداث الأمنية في رؤية واحدة لكشف الأنماط والحوادث مبكراً. SIEM هنا سياق وتحقيق، لا أرشيف سجلات يُفتح بعد فوات الأوان.",
      "We collect security events into one view to spot patterns and incidents earlier. SIEM here is context and investigation — not a log archive opened too late.",
    ],
    problem: [
      "السجلات موزعة على الأنظمة، والتحقيق يأخذ أياماً لأن لا أحد يربط الحدث بالمستخدم والجهاز في لحظة واحدة.",
      "Logs are scattered across systems, and investigation takes days because no one can join the event, the user, and the device in one moment.",
    ],
    approach: [
      "نحدد المصادر ذات القيمة، نضبط التجميع والاحتفاظ، ونبني قواعد وتحقيقات تناسب بيئتكم. النجاح يُقاس بزمن التحقيق وجودة التنبيه لا بحجم البيانات المخزّنة.",
      "We pick high-value sources, tune collection and retention, and build rules and investigations that fit your environment. Success is investigation time and alert quality — not stored volume.",
    ],
    outcomes: [
      ["تحقيق أسرع", "Faster investigation", "الحدث والمستخدم والجهاز في مسار واحد.", "Event, user, and device on one path."],
      ["أنماط لا نقاط منفردة", "Patterns, not lone dots", "ترى التسلسل لا التنبيه المعزول.", "You see the sequence — not the isolated alert."],
      ["احتفاظ مفيد", "Useful retention", "ما يُحفظ يكفي للمراجعة دون تكلفة عمياء.", "What you keep is enough for review — without blind cost."],
    ],
    deliverables: [
      ["تصميم مصادر وتجميع", "Source and collection design"],
      ["قواعد كشف وحالات تحقيق", "Detection rules and investigation cases"],
      ["سياسة احتفاظ وأرشفة", "Retention and archive policy"],
      ["لوحات عمليات أمنية", "Security operations dashboards"],
    ],
    audience: [
      ["مركز العمليات الأمنية", "SOC teams"],
      ["هندسة الأمن", "Security engineering"],
      ["الامتثال", "Compliance"],
    ],
  }),
  pentest: offering({
    lede: [
      "نختبر دفاعاتك كما يراها المهاجم، ثم نرتّب الثغرات بما يستحق الإصلاح أولاً. الاختبار هنا تحسين دفاع، لا تقرير يخيف الإدارة ويُنسى.",
      "We test your defenses the way an attacker would, then rank findings by what is worth fixing first. Testing here improves defense — it is not a report that scares leadership and is forgotten.",
    ],
    problem: [
      "تُجرى اختبارات لاختبار المربع في التدقيق، فتُغلق ثغرات سهلة وتُترك المسارات التي تُستخدم فعلاً للدخول.",
      "Tests are run to tick an audit box, so easy findings are closed and the paths that are actually used to get in are left open.",
    ],
    approach: [
      "نتفق على النطاق والقواعد، ننفذ الاختبار بسيناريوهات واقعية، ثم نعيد التحقق بعد الإصلاح للثغرات الحرجة. التقرير يُكتب لصاحب الإصلاح وللإدارة بلغتين مناسبتين.",
      "We agree scope and rules of engagement, run realistic scenarios, then re-test critical findings after the fix. The report is written for the fixer and for leadership — in the language each needs.",
    ],
    outcomes: [
      ["ثغرات مرتَّبة بالأثر", "Findings ranked by impact", "تعرف ماذا يُغلق هذا الأسبوع وماذا يُجدول.", "You know what closes this week and what is scheduled."],
      ["إثبات بعد الإصلاح", "Proof after the fix", "الحرج يُعاد اختباره لا يُفترض أنه أُغلق.", "The critical item is re-tested — not assumed closed."],
      ["دفاع أوضح", "Clearer defense", "الفريق يرى كيف يُفكر المهاجم على أنظمتكم لا على مثال عام.", "The team sees how an attacker thinks on your systems — not a generic example."],
    ],
    deliverables: [
      ["نطاق وقواعد اختبار", "Scope and rules of engagement"],
      ["تنفيذ سيناريوهات هجوم", "Attack scenario execution"],
      ["تقرير تقني وتنفيذي", "Technical and executive reports"],
      ["إعادة اختبار للحرج", "Re-test of critical findings"],
    ],
    audience: [
      ["أمن التطبيقات والبنية", "App and infra security"],
      ["التطوير", "Development"],
      ["الامتثال والتدقيق", "Compliance and audit"],
    ],
  }),
  iam: offering({
    lede: [
      "نضبط من يحصل على ماذا، وبأي صلاحية، مع دورة حياة هوية واضحة من الانضمام حتى الخروج. الهوية هنا مفتاح التشغيل الآمن.",
      "We set who gets what, with which permission, and a clear identity lifecycle from join to leave. Identity here is the key to safe operations.",
    ],
    problem: [
      "الصلاحيات تتراكم مع تنقّل الموظفين، وحسابات تبقى بعد الخروج، والمراجعات سنوية الشكل لا المضمون.",
      "Permissions pile up as people move, accounts remain after exit, and reviews are annual in form — not in substance.",
    ],
    approach: [
      "نصمم المصدر الرسمي للهوية، الربط بالتطبيقات، ومسار طلب الصلاحية وسحبها. المراجعة الدورية تُبنى على تقارير حية لا على جداول يدوية.",
      "We design the system of record for identity, the link to applications, and the path to request and revoke access. Periodic review is built on live reports — not manual sheets.",
    ],
    outcomes: [
      ["صلاحية بقدر الدور", "Access to the role", "الزيادة والاستثناء يظهران ولا يُمرَّران صامتين.", "Additions and exceptions are visible — they are not passed in silence."],
      ["خروج يُغلق الحساب", "Exit closes the account", "انتهاء العلاقة يسحب الوصول في وقت معروف.", "The end of the relationship pulls access on a known clock."],
      ["مراجعة قابلة للتدقيق", "An auditable review", "تثبت من وافق وعلى ماذا دون البحث في البريد.", "You can prove who approved what without searching mail."],
    ],
    deliverables: [
      ["نموذج هوية وصلاحيات", "Identity and access model"],
      ["تكامل مع التطبيقات الحرجة", "Integration with critical apps"],
      ["مسارات طلب وسحب صلاحية", "Request and revoke paths"],
      ["مراجعات وصول دورية", "Periodic access reviews"],
    ],
    audience: [
      ["أمن الهويات", "Identity security"],
      ["الموارد البشرية", "HR"],
      ["تقنية المعلومات", "IT"],
    ],
  }),
  pam: offering({
    lede: [
      "نحمي الحسابات ذات الصلاحيات العالية ونسجل استخدامها بدل كلمات المرور المشتركة والصلاحيات المفتوحة. PAM هنا تقليل أثر الاختراق لا تعقيد يوم عمل المشغّل.",
      "We protect privileged accounts and log their use instead of shared passwords and wide-open access. PAM here reduces breach impact — it does not complicate the operator’s day.",
    ],
    problem: [
      "حسابات المشرفين مشتركة أو دائمة، فإذا سُرقت هوية واحدة اتسع الوصول إلى كل شيء.",
      "Admin accounts are shared or standing, so one stolen identity expands access to everything.",
    ],
    approach: [
      "نجرد الحسابات الحساسة، نفرض الوصول عند الحاجة، ونسجّل الجلسات الحرجة. الاستثناءات تُراجع لأن الصلاحية الدائمة هي الاستثناء لا الأصل.",
      "We inventory sensitive accounts, enforce just-in-time access, and record critical sessions. Exceptions are reviewed because standing privilege is the exception — not the default.",
    ],
    outcomes: [
      ["صلاحية وقت الحاجة", "Privilege when needed", "الوصول المرتفع يُمنح لمهمة ثم يُسحب.", "Elevated access is granted for a task, then pulled."],
      ["أثر اختراق أضيق", "Narrower breach impact", "حساب واحد لا يفتح البنية كلها.", "One account does not open the whole estate."],
      ["سجل جلسة للمراجعة", "A session record for review", "تعرف ماذا فُعل بحساب المشرف ومتى.", "You know what was done with the admin account and when."],
    ],
    deliverables: [
      ["جرد حسابات ذات صلاحيات", "Privileged account inventory"],
      ["خزينة وصول وجلسات", "Access vault and sessions"],
      ["سياسات منح وسحب فوري", "Just-in-time grant and revoke"],
      ["مراجعة استخدام دورية", "Periodic use review"],
    ],
    audience: [
      ["أمن البنية", "Infrastructure security"],
      ["تشغيل الأنظمة", "Systems operations"],
      ["الامتثال", "Compliance"],
    ],
  }),
  "cyber-grc": offering({
    lede: [
      "نضع سياسات وضوابط أمنية قابلة للمراجعة ومتوافقة مع متطلبات الامتثال التي تهمّكم. الحوكمة الأمنية هنا لغة مشتركة بين الأمن والإدارة والمدقق.",
      "We set security policies and controls that can be audited and aligned with the compliance needs that actually apply to you. Security GRC here is a shared language between security, leadership, and the auditor.",
    ],
    problem: [
      "السياسات مكتوبة بأسلوب عام، والضوابط غير مربوطة بأدلة، فكل تدقيق يبدأ من الصفر.",
      "Policies are written in generic language and controls are not tied to evidence, so every audit starts from zero.",
    ],
    approach: [
      "نربط المتطلبات (محلية أو قطاعية أو تعاقدية) بضوابط تشغيلية وأدلة، ثم نضع جدولاً للمراجعة الداخلية قبل الزيارة الخارجية. الإطار يُحدَّث مع تغيّر الأنظمة لا مرة في السنة.",
      "We map requirements (local, sector, or contractual) to operating controls and evidence, then set an internal review cadence before the external visit. The frame updates as systems change — not once a year.",
    ],
    outcomes: [
      ["ضوابط يمكن إثباتها", "Controls you can prove", "كل متطلب مربوط بدليل ومالك.", "Each requirement is tied to evidence and an owner."],
      ["تدقيق أقل إرباكاً", "A less chaotic audit", "الحزمة جاهزة قبل وصول المراجع.", "The pack is ready before the auditor arrives."],
      ["سياسة تُستخدم", "Policy that is used", "النصوص قصيرة ومرتبطة بإجراء يعرفه الفريق.", "The text is short and tied to a procedure the team knows."],
    ],
    deliverables: [
      ["خريطة متطلبات وضوابط", "Requirements-to-controls map"],
      ["سياسات أمنية تشغيلية", "Operating security policies"],
      ["حزمة أدلة للمراجعة", "An audit evidence pack"],
      ["جدول مراجعة داخلية", "An internal review calendar"],
    ],
    audience: [
      ["الحوكمة الأمنية", "Security governance"],
      ["الامتثال", "Compliance"],
      ["الإدارة التنفيذية", "Executive leadership"],
    ],
  }),
  cloud: offering({
    lede: [
      "نبني ونشغّل بيئات سحابية مرنة مع ضبط تكلفة وأمان منذ اليوم الأول. السحابة هنا نموذج تشغيل، لا نقل أجهزة إلى مكان آخر.",
      "We build and run flexible cloud environments with cost and security set from day one. Cloud here is an operating model — not lifting boxes to another place.",
    ],
    problem: [
      "تُفتح حسابات سحابية بسرعة ثم تتضخم الفاتورة والصلاحيات، وتبقى المعمارية نسخة من المركز القديم.",
      "Cloud accounts open quickly, then the bill and permissions swell, and the architecture stays a copy of the old data center.",
    ],
    approach: [
      "نصمم الحسابات والشبكات والهوية، نضبط الميزانية والحماية، وننقل أحمال العمل على مراحل مع معيار نجاح لكل مرحلة. التكلفة تُراجع كمؤشر تشغيل لا كمفاجأة مالية.",
      "We design accounts, networks, and identity, set budget and protection, and move workloads in stages with a success bar for each. Cost is reviewed as an operating signal — not a finance surprise.",
    ],
    outcomes: [
      ["أساس سحابي منضبط", "A disciplined cloud foundation", "حسابات وشبكات وهوية بملكية واضحة.", "Accounts, networks, and identity with clear ownership."],
      ["تكلفة مرئية", "Visible cost", "تعرف ماذا يستهلك الميزانية قبل نهاية الشهر.", "You know what consumes budget before month-end."],
      ["نقل مرحلي آمن", "A safe staged move", "كل حمل عمل يُعتمد بعد اختبار لا بعد قصّ الشريط.", "Each workload is signed off after a test — not after a ribbon cut."],
    ],
    deliverables: [
      ["تصميم أساس سحابي", "Cloud landing-zone design"],
      ["ضبط هوية وشبكة وحماية", "Identity, network, and protection setup"],
      ["سياسة تكلفة وميزانيات", "Cost policy and budgets"],
      ["خطة نقل أحمال مرحلية", "A staged workload move plan"],
    ],
    audience: [
      ["هندسة السحابة", "Cloud engineering"],
      ["تقنية المعلومات", "IT"],
      ["المالية التقنية", "IT finance"],
    ],
  }),
  "data-analytics": offering({
    lede: [
      "نحوّل البيانات المتفرقة إلى مؤشرات تساعدك تتخذ قراراً أسرع. التحليل هنا إجابة لسؤال تشغيلي، لا مستودع يُملأ ثم يُهجر.",
      "We turn scattered data into indicators that help you decide faster. Analytics here answers an operating question — it is not a warehouse filled and then abandoned.",
    ],
    problem: [
      "كل إدارة تصدّر ملفها، والتعريفات تختلف، فيضيع الاجتماع في جدل الرقم بدل القرار.",
      "Each department exports its file, definitions differ, and the meeting is spent arguing the number instead of deciding.",
    ],
    approach: [
      "نبدأ من القرارات التي تُتخذ أسبوعياً، نوحّد التعريفات والمصادر، ثم نبني النماذج والمؤشرات بثقة يمكن شرحها. الجودة جزء من المسار لا مرحلة تجميل في النهاية.",
      "We start from decisions made weekly, unify definitions and sources, then build models and indicators with a confidence you can explain. Quality is part of the path — not a polish stage at the end.",
    ],
    outcomes: [
      ["رقم واحد للنقاش", "One number to discuss", "تعريف متفق عليه للمؤشر قبل لوحة الألوان.", "An agreed definition of the indicator before the colorful dashboard."],
      ["قرار أسرع", "A faster decision", "البيانات تصل في وقت استخدامها لا بعد أسبوع.", "Data arrives when it is used — not a week later."],
      ["ثقة في المصدر", "Trust in the source", "تعرف من أين جاء الرقم ومن يجدّده.", "You know where the number came from and who refreshes it."],
    ],
    deliverables: [
      ["أسئلة قرار وتعريفات", "Decision questions and definitions"],
      ["مسارات بيانات وجودة", "Data pipelines and quality"],
      ["نماذج مؤشرات", "Indicator models"],
      ["تشغيل وتحديث دوري", "Run and refresh operations"],
    ],
    audience: [
      ["الإدارة التنفيذية", "Executive leadership"],
      ["التحليل والتخطيط", "Analytics and planning"],
      ["العمليات", "Operations"],
    ],
  }),
  bi: offering({
    lede: [
      "نبني لوحات ومتابعة أداء تربط الأرقام اليومية بأهداف الإدارة. ذكاء الأعمال هنا إيقاع قرار، لا معرض رسوم.",
      "We build dashboards and performance views that connect daily numbers to leadership goals. BI here is a decision rhythm — not a gallery of charts.",
    ],
    problem: [
      "اللوحات كثيرة والمؤشرات متناقضة، فيتوقف القادة عن فتحها لأن لا أحد يثق بما يظهر.",
      "Dashboards multiply and indicators conflict, so leaders stop opening them because no one trusts what is shown.",
    ],
    approach: [
      "نختار مجموعة مؤشرات قصيرة لكل مستوى إداري، نربطها بمصدر موثوق، ونضبط صلاحية المشاهدة. كل لوحة لها مالك وسؤال تجيب عنه.",
      "We pick a short set of indicators for each management level, tie them to a trusted source, and set view access. Every dashboard has an owner and a question it answers.",
    ],
    outcomes: [
      ["متابعة يُعتمد عليها", "A watch people rely on", "القادة يفتحون اللوحة لأنها تجيب سؤال الأسبوع.", "Leaders open the dashboard because it answers this week’s question."],
      ["أقل تضارب", "Less conflict", "المالية والتشغيل ينظران إلى التعريف نفسه.", "Finance and operations look at the same definition."],
      ["صلاحية مشاهدة منضبطة", "Controlled viewing", "الرقم الحساس لا يُنشر على نطاق أوسع مما يلزم.", "Sensitive numbers are not published wider than needed."],
    ],
    deliverables: [
      ["مجموعة مؤشرات حسب المستوى", "Indicator sets by management level"],
      ["لوحات تشغيلية وتنفيذية", "Operating and executive dashboards"],
      ["صلاحيات مشاهدة", "View access controls"],
      ["دليل قراءة واتخاذ قرار", "A readout and decision guide"],
    ],
    audience: [
      ["الإدارة التنفيذية", "Executive leadership"],
      ["مدراء الوحدات", "Unit managers"],
      ["مكاتب الأداء", "Performance offices"],
    ],
  }),
  ai: offering({
    lede: [
      "نختار حالات استخدام ذكاء اصطناعي مربوطة بعملية حقيقية وعائد يمكن قياسه. الذكاء الاصطناعي هنا أداة داخل التشغيل، لا تجربة استعراضية.",
      "We pick AI use cases tied to a real process and a return you can measure. Artificial intelligence here is a tool inside operations — not a showcase experiment.",
    ],
    problem: [
      "تُطلق تجارب نماذج دون بيانات جاهزة أو مالك عملية، فتبقى في المختبر ولا تدخل اليوم التشغيلي.",
      "Model experiments launch without ready data or a process owner, so they stay in the lab and never enter the operating day.",
    ],
    approach: [
      "نبدأ من عنق زجاجة واضح (وقت، خطأ، حجم)، نثبت جودة البيانات والحوكمة، ثم نبني حلاً بشرياً-آلياً بمعيار نجاح قبل التوسع. المخاطر والخصوصية جزء من التصميم.",
      "We start from a clear bottleneck (time, error, volume), prove data quality and governance, then build a human-plus-machine solution with a success bar before scale. Risk and privacy are part of the design.",
    ],
    outcomes: [
      ["حالة استخدام بعائد", "A use case with return", "تعرف ماذا تحسّن: زمن، تكلفة، أو جودة.", "You know what improves: time, cost, or quality."],
      ["حوكمة قبل التوسع", "Governance before scale", "البيانات والصلاحية والمراجعة جاهزة قبل أن يكبر الحل.", "Data, access, and review are ready before the solution grows."],
      ["إنسان في القرار الحرج", "A human on the critical decision", "النموذج يقترح أو يصنّف، والمسؤولية تبقى واضحة.", "The model suggests or classifies; accountability stays clear."],
    ],
    deliverables: [
      ["اختيار حالات استخدام مبررة", "Justified use-case selection"],
      ["تقييم بيانات ومخاطر", "Data and risk assessment"],
      ["حل تجريبي بمعيار نجاح", "A pilot with a success bar"],
      ["خطة توسع وحوكمة", "A scale and governance plan"],
    ],
    audience: [
      ["رعاة الابتكار", "Innovation sponsors"],
      ["أصحاب العمليات", "Process owners"],
      ["البيانات والتقنية", "Data and technology leads"],
    ],
  }),
  ml: offering({
    lede: [
      "نبني نماذج تتعلم من بياناتك لتحسين التوقع أو التصنيف أو الأتمتة داخل عملية محددة. تعلم الآلة هنا منتج يُصان، لا ملف تجربة على جهاز باحث.",
      "We build models that learn from your data to improve forecasting, classification, or automation inside a defined process. Machine learning here is a product that is maintained — not an experiment file on a researcher’s machine.",
    ],
    problem: [
      "النموذج يعمل في التجربة ثم ينهار في الإنتاج لأن البيانات تغيّرت ولا أحد يراقب الانحراف.",
      "The model works in the experiment then collapses in production because the data shifted and no one watches drift.",
    ],
    approach: [
      "نجهز البيانات والتسميات، نختار النموذج بمعيار عمل لا بمعيار مسابقة، ثم نضع مراقبة أداء وإعادة تدريب. التسليم يشمل من يشغّله غداً لا من بناه اليوم فقط.",
      "We prepare data and labels, choose the model by an operating measure — not a contest score — then set performance watch and retraining. Delivery includes who will run it tomorrow, not only who built it today.",
    ],
    outcomes: [
      ["توقع أو تصنيف يُستخدم", "A forecast or class that is used", "المخرج يدخل الإجراء لا يبقى في دفتر ملاحظات.", "The output enters the procedure — it does not stay in a notebook."],
      ["مراقبة انحراف", "Drift is watched", "تعرف متى ضعف النموذج قبل أن يضر القرار.", "You know when the model weakened before it harms the decision."],
      ["إعادة تدريب مخططة", "Planned retraining", "الصيانة جزء من التشغيل لا مشروع جديد كل مرة.", "Maintenance is part of operations — not a new project every time."],
    ],
    deliverables: [
      ["تجهيز بيانات وتسميات", "Data and label preparation"],
      ["نموذج بمعيار تشغيلي", "A model with an operating metric"],
      ["نشر ومراقبة أداء", "Deployment and performance monitoring"],
      ["خطة إعادة تدريب", "A retraining plan"],
    ],
    audience: [
      ["علوم البيانات", "Data science"],
      ["أصحاب التوقع والتصنيف", "Forecast and classification owners"],
      ["هندسة البيانات", "Data engineering"],
    ],
  }),
  "managed-it": offering({
    lede: [
      "نشغّل بيئتك التقنية كخدمة مستمرة بمسؤوليات ومستويات دعم متفق عليها. تقنية المعلومات المدارة هنا شريك تشغيل، لا تذكرة تُفتح عند العطل فقط.",
      "We run your IT environment as an ongoing service, with agreed ownership and support levels. Managed IT here is an operating partner — not a ticket opened only when something breaks.",
    ],
    problem: [
      "الفريق الداخلي غارق في الأعطال اليومية، فلا يتبقى وقت للمعمارية والتحسين، والمسؤولية تُلقى بين الموردين.",
      "The internal team is buried in daily break-fix, so architecture and improvement never get time, and ownership is tossed between vendors.",
    ],
    approach: [
      "نجرد البيئة، نحدد ماذا ندير نحن وماذا يبقى لديكم، ونضع مستويات استجابة وتقارير شهرية. التحسين يُدرَج في التشغيل لا يُنتظر مشروعاً منفصلاً.",
      "We inventory the environment, define what we run and what stays with you, and set response levels and monthly reports. Improvement is scheduled into operations — it is not left waiting for a separate project.",
    ],
    outcomes: [
      ["ملكية يومية واضحة", "Clear daily ownership", "تعرف من يرد على ماذا وفي أي وقت.", "You know who answers what, and by when."],
      ["وقت يعود لفريقك", "Time returned to your team", "الأعطال المتكررة تُدار لتفرغ للتحسين.", "Repeating break-fix is handled so you can improve."],
      ["صورة شهرية للإدارة", "A monthly picture for leadership", "الأداء والحوادث والسعة في تقرير واحد.", "Performance, incidents, and capacity in one report."],
    ],
    deliverables: [
      ["نطاق إدارة ومستويات دعم", "Managed scope and support levels"],
      ["تهيئة وتشغيل مستمر", "Onboarding and ongoing operations"],
      ["تقارير شهرية للإدارة", "Monthly leadership reports"],
      ["خطة تحسين تشغيلية", "An operational improvement plan"],
    ],
    audience: [
      ["مدير تقنية المعلومات", "IT director"],
      ["الإدارة التنفيذية", "Executive leadership"],
      ["المؤسسات متوسطة الحجم", "Mid-size organizations"],
    ],
  }),
  operations: offering({
    lede: [
      "نضع إجراءات تشغيل يومية تبقي الأنظمة مستقرة وواضحة لمن يتابعها في أي وردية. التشغيل هنا عادة موثّقة، لا معرفة حبيسة في رأس شخص واحد.",
      "We put daily operating procedures in place that keep systems stable and clear for whoever is watching them on any shift. Operations here is a documented habit — not knowledge locked in one person’s head.",
    ],
    problem: [
      "إذا غاب المشغّل الخبير توقفت التفاصيل، لأن الخطوات غير مكتوبة والإنذارات غير مرتَّبة.",
      "When the expert operator is away, the details stop, because steps are unwritten and alerts are unordered.",
    ],
    approach: [
      "نوثّق الإجراءات الحرجة، نرتّب الوردية والإنذار، وندرّب البديل. كل إجراء له معيار «تم بشكل صحيح» يمكن مراجعته.",
      "We document critical procedures, order the shift and the alert, and train the backup. Every procedure has a “done correctly” bar that can be reviewed.",
    ],
    outcomes: [
      ["تشغيل لا يعتمد على شخص", "Operations that do not depend on one person", "الوردية التالية تعرف ماذا تفعل.", "The next shift knows what to do."],
      ["أقل ارتجال", "Less improvisation", "الخطوات الحرجة مكتوبة ومُختبرة.", "Critical steps are written and tested."],
      ["تسليم وردية نظيف", "A clean shift handover", "ماذا فُتح وماذا أُغلق ينتقل بوضوح.", "What opened and what closed is handed over clearly."],
    ],
    deliverables: [
      ["أدلة تشغيل للإجراءات الحرجة", "Runbooks for critical procedures"],
      ["ترتيب وردية وإنذار", "Shift and alert order"],
      ["تدريب بديل", "Backup operator training"],
      ["مراجعة تشغيل دورية", "A periodic operations review"],
    ],
    audience: [
      ["غرفة العمليات", "Operations rooms"],
      ["تشغيل IT", "IT operations"],
      ["الخدمات المدارة", "Managed service leads"],
    ],
  }),
  monitoring: offering({
    lede: [
      "نضبط إنذاراً مبكراً للأداء والتوافر حتى يُعالج الخلل قبل أن يشعر به المستخدم. المراقبة هنا إشارة صحيحة، لا لوحة مليئة بالأحمر.",
      "We set early signals on performance and availability so issues are handled before users feel them. Monitoring here is the right signal — not a dashboard full of red.",
    ],
    problem: [
      "إما لا توجد مراقبة، أو توجد كثافة تنبيهات فيُطفأ الصوت، والنتيجتان سواء: المفاجأة عند المستخدم.",
      "Either there is no monitoring, or there is alert density and the sound is muted — both end the same way: surprise at the user.",
    ],
    approach: [
      "نحدد مؤشرات الخدمة لا مؤشرات الجهاز وحده، نضبط العتبات، ونربط التنبيه بمسار عمل. نراجع الضجيج أسبوعياً حتى تبقى الإشارة صادقة.",
      "We define service indicators — not device metrics alone — tune thresholds, and route the alert into a work path. We review noise weekly so the signal stays honest.",
    ],
    outcomes: [
      ["إنذار قبل الشكوى", "An alert before the complaint", "الفريق يتحرك والخدمة ما زالت داخل الحد.", "The team moves while the service is still inside the limit."],
      ["عتبات ذات معنى", "Thresholds that mean something", "الأحمر يعني تصرفاً لا ديكوراً.", "Red means act — not decoration."],
      ["ربط بالمسؤولية", "Tied to ownership", "التنبيه يصل لصاحب الخدمة لا لقائمة عامة.", "The alert reaches the service owner — not a generic list."],
    ],
    deliverables: [
      ["مؤشرات خدمة وعتبات", "Service indicators and thresholds"],
      ["لوحات توافر وأداء", "Availability and performance dashboards"],
      ["توجيه تنبيهات لمسارات عمل", "Alert routing into work paths"],
      ["مراجعة ضجيج أسبوعية", "A weekly noise review"],
    ],
    audience: [
      ["عمليات IT", "IT operations"],
      ["أصحاب التطبيقات", "Application owners"],
      ["NOC", "NOC teams"],
    ],
  }),
  support: offering({
    lede: [
      "نقدّم دعماً فنياً بمستويات واضحة ووقت استجابة يناسب حرجية الخدمة. الدعم هنا التزام يمكن قياسه، لا وعد عام بالوقوف إلى جانبك.",
      "We provide technical support with clear tiers and response times that match service criticality. Support here is a measurable commitment — not a vague promise to stand by you.",
    ],
    problem: [
      "كل بلاغ يُعامل بالسرعة نفسها، فيتأخر الحرج ويُستهلك الوقت في البسيط، ويغضب الجميع.",
      "Every ticket is treated at the same speed, so the critical waits, time is spent on the simple, and everyone is frustrated.",
    ],
    approach: [
      "نصمم المستويات والقنوات وساعات التغطية، ونربط التصعيد بحرجية الخدمة. الجودة تُراجع من عيّنات مغلقة لا من شعور نهاية الشهر.",
      "We design tiers, channels, and coverage hours, and tie escalation to service criticality. Quality is reviewed from closed samples — not from month-end mood.",
    ],
    outcomes: [
      ["وقت يناسب الحرج", "Time that matches criticality", "الحادث الحرج لا يقف في طابور عام.", "The critical incident does not wait in a general queue."],
      ["قناة معروفة", "A known channel", "المستخدم يعرف أين يتصل ومتى يُرد عليه.", "The user knows where to call and when a reply comes."],
      ["جودة تُراجع", "Quality that is reviewed", "عيّنات تُغلق بمعيار، لا بعدد التذاكر فقط.", "Samples close against a standard — not ticket count alone."],
    ],
    deliverables: [
      ["مستويات دعم وتغطية", "Support tiers and coverage"],
      ["قنوات وتصعيد", "Channels and escalation"],
      ["اتفاقيات زمن استجابة", "Response-time agreements"],
      ["مراجعة جودة شهرية", "A monthly quality review"],
    ],
    audience: [
      ["مستخدمو المؤسسة", "Enterprise users"],
      ["مدير الدعم", "Support managers"],
      ["أصحاب الخدمات", "Service owners"],
    ],
  }),
  maintenance: offering({
    lede: [
      "نضع صيانة وقائية وتحديثات مخططة تقلّل المفاجآت وتطيل عمر الأنظمة. الصيانة هنا جدول يحمي التشغيل، لا انتظار حتى يتعطل الجهاز.",
      "We put preventive maintenance and planned updates in place that cut surprises and extend system life. Maintenance here is a schedule that protects operations — not waiting until the device fails.",
    ],
    problem: [
      "التحديث يُؤجَّل لأنه «يعمل»، حتى يأتي يوم لا يعمل فيه دفعة واحدة مع باقي الدين المؤجل.",
      "The update is postponed because “it works,” until the day it fails together with the rest of the deferred debt.",
    ],
    approach: [
      "نجدول النوافذ، نقيّم الأثر، وننفذ التحديثات والصيانة الفيزيائية والمنطقية بسجل. الوقائي يُقاس بما لم يحدث، لا بما أُصلح بعد العطل.",
      "We schedule windows, assess impact, and run updates plus physical and logical maintenance with a log. Prevention is measured by what did not happen — not by what was fixed after failure.",
    ],
    outcomes: [
      ["أقل أعطال مفاجئة", "Fewer sudden failures", "الأجزاء الحرجة تُراجع قبل أن تكسر اليوم التشغيلي.", "Critical parts are reviewed before they break the operating day."],
      ["تحديث بدون فوضى", "Updates without chaos", "النوافذ معروفة والأثر مُعلن.", "Windows are known and impact is announced."],
      ["عمر أطول للأصول", "Longer asset life", "الصيانة تحمي الاستثمار لا تستبدله مبكراً.", "Maintenance protects the investment — it does not force early replacement."],
    ],
    deliverables: [
      ["جدول صيانة وقائية", "A preventive maintenance calendar"],
      ["نوافذ تحديث مقيَّمة", "Impact-assessed update windows"],
      ["سجل أعمال منفَّذة", "A log of work performed"],
      ["تقرير صحة أصول دوري", "A periodic asset-health report"],
    ],
    audience: [
      ["تشغيل البنية", "Infrastructure operations"],
      ["إدارة الأصول", "Asset management"],
      ["الخدمات المدارة", "Managed services"],
    ],
  }),
  cctv: offering({
    lede: [
      "نصمم تغطية مراقبة واضحة مع تسجيل واسترجاع يمكن الرجوع إليه عند الحاجة. الكاميرا هنا دليل وتشغيل، لا عدسة تُركَّب للشكل.",
      "We design clear camera coverage with recording and playback you can actually use when needed. The camera here is evidence and operations — not a lens installed for show.",
    ],
    problem: [
      "الزوايا ناقصة، والجودة تسقط ليلاً، والاسترجاع يأخذ ساعات لأن التسجيل غير منظّم.",
      "Angles are incomplete, quality drops at night, and playback takes hours because recording is not organized.",
    ],
    approach: [
      "نمسح الموقع ومسارات الحركة، نختار الدقة والتخزين حسب الغرض (منع، تحقيق، تشغيل)، ثم نختبر الاسترجاع قبل التسليم. الصيانة والوصول للتسجيل جزء من النظام.",
      "We survey the site and movement paths, choose resolution and storage by purpose (deterrence, investigation, operations), then test playback before handover. Maintenance and access to recordings are part of the system.",
    ],
    outcomes: [
      ["تغطية بدون ثغرات واضحة", "Coverage without obvious gaps", "المداخل والمسارات الحرجة في الإطار.", "Entrances and critical paths sit in frame."],
      ["استرجاع في وقت معقول", "Playback in reasonable time", "تعرف أين التسجيل وكيف تخرج المقطع.", "You know where the recording is and how to export the clip."],
      ["جودة تناسب الغرض", "Quality that matches purpose", "ليلاً ونهاراً بما يكفي للتعرف لا للتخمين.", "Day and night enough to identify — not to guess."],
    ],
    deliverables: [
      ["مسح تغطية ومخطط كاميرات", "Coverage survey and camera plan"],
      ["تركيب وتسجيل مضبوط", "Installation and tuned recording"],
      ["اختبار استرجاع وتصدير", "Playback and export test"],
      ["تدريب المشغّلين وصيانة", "Operator training and maintenance"],
    ],
    audience: [
      ["الأمن والسلامة", "Security and safety"],
      ["إدارة المرافق", "Facilities"],
      ["التحقيق الداخلي", "Internal investigation"],
    ],
  }),
  "access-control": offering({
    lede: [
      "نحدد من يدخل وأين ومتى، مع سجل حركة يمكن مراجعته. التحكم في الدخول هنا سياسة تُنفَّذ على الباب، لا بطاقات تُوزَّع بلا سحب.",
      "We control who enters, where, and when, with an access log you can review. Access control here is policy enforced at the door — not cards handed out and never pulled back.",
    ],
    problem: [
      "البطاقات تبقى بعد خروج الموظف، والأبواب الحرجة تُفتح بمجموعة عامة، والسجل لا يُراجع إلا بعد حادث.",
      "Cards remain after someone leaves, critical doors open to a generic group, and the log is reviewed only after an incident.",
    ],
    approach: [
      "نصمم المناطق والمستويات، نربط الهوية بالباب، ونضع سحب صلاحية مع حركة الموارد البشرية. السجلات جزء من التشغيل الأمني لا أرشيف صامت.",
      "We design zones and levels, bind identity to the door, and pull access with HR movement. Logs are part of security operations — not a silent archive.",
    ],
    outcomes: [
      ["باب يطابق السياسة", "A door that matches policy", "المنطقة الحرجة لا تُفتح لمن لا يخصه الدور.", "The critical zone does not open to a role that does not belong."],
      ["سحب مع الخروج", "Revoke on exit", "انتهاء العلاقة يغلق الباب في وقت معروف.", "The end of the relationship closes the door on a known clock."],
      ["سجل يمكن التحقيق فيه", "A log you can investigate", "تعرف من عبر ومتى دون تخمين الكاميرا وحدها.", "You know who passed and when — without guessing from CCTV alone."],
    ],
    deliverables: [
      ["تصميم مناطق ومستويات دخول", "Zone and access-level design"],
      ["تركيب وربط بالهوية", "Installation and identity binding"],
      ["إجراءات منح وسحب", "Grant and revoke procedures"],
      ["مراجعة سجلات دورية", "Periodic log review"],
    ],
    audience: [
      ["الأمن", "Security"],
      ["الموارد البشرية", "HR"],
      ["المرافق", "Facilities"],
    ],
  }),
  cabling: offering({
    lede: [
      "نبني بنية كابلات منظمة للشبكات والأنظمة الأمنية تدعم التوسعة لاحقاً. الكابل هنا أساس صامت إن أُحسن، وتكلفة مضاعفة إن أُهمل.",
      "We build structured cabling for networks and security systems that can grow later. Cabling here is a quiet foundation when done well — and a multiplied cost when it is not.",
    ],
    problem: [
      "التمديدات العشوائية تمنع التوسعة، وتصعّب العطل، وتخلط الأنظمة في مسار واحد بلا توثيق.",
      "Ad-hoc pulls block growth, make faults harder, and mix systems on one path with no documentation.",
    ],
    approach: [
      "نصمم المسارات والرفوف والتصنيف، ننفذ بمعايير، ونسلّم مخططات اختبار. كل نقطة لها هوية يمكن تتبعها بعد سنة.",
      "We design routes, racks, and labeling, install to standard, and hand over test plots. Every point has an identity you can trace a year later.",
    ],
    outcomes: [
      ["توسعة بدون إعادة هدم", "Growth without tearing out", "مسارات وجهد احتياطي محسوب.", "Routes and spare capacity that were planned."],
      ["عطل أسهل للتتبع", "Faults easier to trace", "التصنيف يختصر ساعات البحث.", "Labeling cuts hours of searching."],
      ["أنظمة لا تختلط", "Systems that do not mix", "الشبكة والأمن والتيار الخفيف في مسارات مفهومة.", "Network, security, and ELV on understood paths."],
    ],
    deliverables: [
      ["مخطط مسارات ونقاط", "Route and outlet plans"],
      ["تنفيذ واختبار اعتماد", "Installation and certification tests"],
      ["تصنيف وتوثيق", "Labeling and documentation"],
      ["رفوف وإدارة كابلات", "Racks and cable management"],
    ],
    audience: [
      ["المشاريع والمرافق", "Projects and facilities"],
      ["الشبكات", "Networks"],
      ["الأنظمة الأمنية", "Security systems"],
    ],
  }),
  av: offering({
    lede: [
      "نجهّز القاعات والاجتماعات بأنظمة صوت وصورة واضحة وسهلة التشغيل. AV هنا اجتماع يبدأ في موعده، لا عشر دقائق ضائعة في الكابل.",
      "We equip rooms and meetings with clear audio-visual systems that are simple to run. AV here is a meeting that starts on time — not ten minutes lost on a cable.",
    ],
    problem: [
      "القاعة تبدو جاهزة ثم يفشل الصوت أو العرض أمام العميل، لأن التشغيل معقّد والصيانة غير موجودة.",
      "The room looks ready, then audio or display fails in front of a client, because operation is complex and maintenance is missing.",
    ],
    approach: [
      "نصمم حسب حجم القاعة ونوع الاستخدام (اجتماع، تدريب، عرض)، نبسط لوحة التحكم، ونختبر السيناريو كاملاً قبل التسليم. تدريب المشغّل جزء أساسي.",
      "We design for room size and use (meeting, training, presentation), simplify the control surface, and test the full scenario before handover. Operator training is core — not optional.",
    ],
    outcomes: [
      ["اجتماع بلا ارتباك تقني", "A meeting without technical scramble", "زر واحد أو مسار قصير يبدأ الجلسة.", "One button or a short path starts the session."],
      ["صوت وصورة واضحان", "Clear sound and picture", "الحضور في آخر الصف يسمع ويرى.", "The back row hears and sees."],
      ["تشغيل يستطيعه الفريق", "Operation the team can handle", "لا حاجة لفني في كل اجتماع روتيني.", "No technician required for every routine meeting."],
    ],
    deliverables: [
      ["تصميم قاعة حسب الاستخدام", "Room design by use"],
      ["تركيب صوت وصورة وتحكم", "Audio, video, and control install"],
      ["سيناريوهات تشغيل مختبرة", "Tested operating scenarios"],
      ["تدريب ودعم صيانة", "Training and maintenance support"],
    ],
    audience: [
      ["قاعات الاجتماعات", "Meeting rooms"],
      ["التدريب والعروض", "Training and presentation"],
      ["المرافق", "Facilities"],
    ],
  }),
  intercom: offering({
    lede: [
      "نربط المداخل والنقاط الأمنية والإدارة باتصال داخلي سريع وواضح. الإنتركم هنا إجراء أمني وتشغيلي، لا سماعة تُنسى على الجدار.",
      "We connect entrances, security points, and management with fast, clear internal communication. Intercom here is a security and operating procedure — not a handset forgotten on the wall.",
    ],
    problem: [
      "الزائر يُترك عند الباب، والحارس لا يصل للإدارة، والمكالمة الداخلية تعتمد على الجوال الشخصي.",
      "The visitor is left at the door, the guard cannot reach management, and internal calls depend on personal mobiles.",
    ],
    approach: [
      "نحدد نقاط الاتصال ومسارات التحويل، ندمج مع التحكم بالدخول حيث يلزم، ونختبر الاستدعاء في الضجيج الفعلي للموقع. الصيانة وقطع الغيار جزء من التسليم.",
      "We define call points and transfer paths, integrate with access control where needed, and test call-out in the site’s real noise. Maintenance and spares are part of handover.",
    ],
    outcomes: [
      ["استجابة أسرع عند المدخل", "Faster response at the entrance", "الحارس يصل للقرار دون مطاردة أرقام.", "The guard reaches the decision without chasing numbers."],
      ["مسار اتصال معروف", "A known call path", "كل نقطة تعرف من تستدعي ولماذا.", "Every point knows whom to call and why."],
      ["تكامل مع الباب", "Tied to the door", "الاتصال والفتح يعملان كإجراء واحد حيث يلزم.", "Call and unlock work as one procedure where needed."],
    ],
    deliverables: [
      ["مخطط نقاط وتحويل", "Point and transfer plan"],
      ["تركيب واختبار في الموقع", "On-site install and test"],
      ["دمج مع الدخول عند الحاجة", "Access integration where needed"],
      ["تدريب الحراسة والصيانة", "Guard training and maintenance"],
    ],
    audience: [
      ["الأمن عند المداخل", "Entrance security"],
      ["إدارة المباني", "Building management"],
      ["الاستقبال", "Reception"],
    ],
  }),
  "training-it": offering({
    lede: [
      "نقدّم تدريباً عملياً على أنظمة تقنية المعلومات التي يستخدمها الفريق يومياً. البرنامج هنا رفع قدرة على العمل، لا شهادة تُعلَّق ثم تُنسى.",
      "We deliver practical training on the IT systems and fundamentals your team uses every day. The program here raises ability to do the work — not a certificate hung and forgotten.",
    ],
    problem: [
      "الدعم يستهلك في أسئلة متكررة لأن الفريق لم يُدرَّب على الأدوات التي فُرضت عليه بعد المشروع.",
      "Support is consumed by repeating questions because the team was never trained on the tools imposed after the project.",
    ],
    approach: [
      "نشخّص مستوى الدور، نبني تمارين على بيئتكم حيث يمكن، ونقيس الاستيعاب أثناء الجلسة لا في استبيان رضا فقط. مادة مرجعية قصيرة تبقى بعد الدورة.",
      "We diagnose the role level, build exercises on your environment where possible, and check comprehension during the session — not only in a satisfaction survey. A short reference stays after the course.",
    ],
    outcomes: [
      ["أسئلة دعم أقل تكراراً", "Fewer repeating support questions", "المهام اليومية تُنفَّذ دون انتظار فني.", "Daily tasks run without waiting for a technician."],
      ["ثقة أعلى في الأداة", "More confidence in the tool", "الفريق يستخدم النظام بدل تجنّبه.", "The team uses the system instead of avoiding it."],
      ["لغة مشتركة", "A shared language", "المصطلحات والإجراءات تتوحّد داخل الوحدة.", "Terms and procedures align inside the unit."],
    ],
    deliverables: [
      ["تشخيص مستوى حسب الدور", "Role-level diagnosis"],
      ["جلسات عملية على الأنظمة المستخدمة", "Hands-on sessions on systems in use"],
      ["قياس استيعاب أثناء التدريب", "Comprehension checks during training"],
      ["مادة مرجعية قصيرة", "A short reference pack"],
    ],
    audience: [
      ["المستخدمون الداخليون", "Internal users"],
      ["الدعم والمشغّلون", "Support and operators"],
      ["المنضمون الجدد", "New joiners"],
    ],
  }),
  "training-cyber": offering({
    lede: [
      "نرفع وعي الفريق وقدرته على التعامل مع التهديدات والسياسات الأمنية بما يخص عمله لا بعبارات عامة. الأمن هنا سلوك يومي، لا محاضرة سنوية.",
      "We raise the team’s awareness and ability to handle threats and security policy in ways that match their work — not generic slogans. Security here is daily behavior — not an annual lecture.",
    ],
    problem: [
      "أخطر الثغرات تمر من الإنسان: رابط، USB، صلاحية مُرِّرت، بينما التدريب السابق كان فيديو يُتخطى.",
      "The most dangerous gaps pass through people: a link, a USB, a permission forwarded, while prior training was a skipped video.",
    ],
    approach: [
      "نصمم السيناريوهات على أدواركم (مالية، دعم، إدارة)، ندرّب على التعرف والتصعيد، ونقيس بتمارين محاكاة قصيرة. السياسة تُشرح كإجراء لا كتهديد قانوني فقط.",
      "We design scenarios around your roles (finance, support, leadership), train recognition and escalation, and measure with short simulations. Policy is taught as a procedure — not only as legal threat.",
    ],
    outcomes: [
      ["تعرف أسرع على الخطر", "Faster recognition of risk", "الرابط المشبوه يُبلَّغ لا يُفتح «للاختبار».", "The suspicious link is reported — not opened “to check”."],
      ["تصعيد معروف", "A known escalation", "الفريق يعرف لمن يذهب خلال دقائق.", "The team knows whom to go to within minutes."],
      ["سياسة أقرب للعمل", "Policy closer to the work", "القواعد تُفهم لأنها رُبطت بمهمة يومية.", "The rules are understood because they were tied to a daily task."],
    ],
    deliverables: [
      ["برنامج وعي حسب الدور", "Role-based awareness program"],
      ["تمارين محاكاة قصيرة", "Short simulation exercises"],
      ["مسار تبليغ وتصعيد", "A report and escalate path"],
      ["قياس أثر بعد التدريب", "A post-training impact measure"],
    ],
    audience: [
      ["كل الموظفين", "All staff"],
      ["المالية والإدارة", "Finance and leadership"],
      ["الدعم والتقنية", "Support and IT"],
    ],
  }),
  "training-cloud": offering({
    lede: [
      "نؤهّل الفريق لتشغيل الخدمات السحابية وفهم التكلفة والحماية لا الاكتفاء بفتح وحدة. السحابة هنا مهارة تشغيل يومي.",
      "We prepare the team to run cloud services and understand cost and protection — not merely to open a console. Cloud here is a daily operating skill.",
    ],
    problem: [
      "بعد النقل السحابي يبقى الفريق يفكر بأسلوب المركز القديم، فتُفتح موارد بلا ضابط تكلفة أو هوية.",
      "After the cloud move the team still thinks like the old data center, so resources open with no cost or identity control.",
    ],
    approach: [
      "ندرّب على الحسابات التي تستخدمونها، التكلفة، الهوية، والمراقبة، بتمارين على سيناريوهات حقيقية (إنشاء، ضبط، إيقاف هدر). كل مسار يناسب دور المشغّل لا المهندس المعماري وحده.",
      "We train on the accounts you use, cost, identity, and monitoring, with exercises on real scenarios (create, tune, stop waste). Each path fits the operator role — not only the architect.",
    ],
    outcomes: [
      ["تشغيل واثق للحساب", "Confident account operations", "المهام اليومية تتم دون انتظار مستشار خارجي لكل زر.", "Daily tasks run without waiting for an external consultant on every click."],
      ["وعي بالتكلفة", "Cost awareness", "الفريق يرى أثر المورد قبل أن تتضخم الفاتورة.", "The team sees the resource impact before the bill swells."],
      ["حماية أساسية مضمَّنة", "Basic protection included", "الهوية والشبكة لا تُتركان كـ«لاحقاً».", "Identity and network are not left as “later”."],
    ],
    deliverables: [
      ["مسار تدريب حسب الدور السحابي", "A training path by cloud role"],
      ["تمارين على الحساب الفعلي أو المماثل", "Exercises on the real or matching account"],
      ["وحدات تكلفة وحماية", "Cost and protection modules"],
      ["مادة تشغيل مرجعية", "An operating reference pack"],
    ],
    audience: [
      ["مشغّلو السحابة", "Cloud operators"],
      ["تقنية المعلومات", "IT"],
      ["المالية التقنية", "IT finance"],
    ],
  }),
  "training-itsm": offering({
    lede: [
      "ندرّب الفرق على نماذج ITSM حتى يصبح الدعم والتشغيل بلغة وإجراءات موحّدة. التدريب هنا توحيد ممارسة، لا حفظ تعريفات ITIL للامتحان فقط.",
      "We train teams on ITSM models so support and operations share one language and one set of procedures. Training here unifies practice — it is not memorizing ITIL definitions for an exam.",
    ],
    problem: [
      "كل وردية تفسّر الحادث والتغيير بطريقتها، والمنصة موجودة لكن الممارسة غير متفق عليها.",
      "Each shift interprets incident and change its own way, and the platform exists but the practice is not agreed.",
    ],
    approach: [
      "نربط المفاهيم بعملياتكم الفعلية على المنصة، نتمرّن على تصنيف وتصيعد وإغلاق، ونقيس الالتزام بعد العودة للعمل. الشهادة إن طُلبت تأتي فوق الممارسة لا بدلها.",
      "We bind concepts to your actual processes on the platform, practice classify/escalate/close, and measure adherence after return to work. Certification, if required, sits on top of practice — not instead of it.",
    ],
    outcomes: [
      ["لغة تشغيل واحدة", "One operating language", "الحادث والتغيير والطلب تعني الشيء نفسه لكل وردية.", "Incident, change, and request mean the same thing on every shift."],
      ["استخدام أفضل للمنصة", "Better use of the platform", "الحقول تُملأ لأنها مفهومة لا لأنها إجبارية.", "Fields are filled because they are understood — not only because they are mandatory."],
      ["التزام أوضح بعد الدورة", "Clearer adherence after the course", "الممارسة تُراجع في العمل لا في قاعة التدريب فقط.", "Practice is reviewed on the job — not only in the training room."],
    ],
    deliverables: [
      ["برنامج ITSM مربوط بعملياتكم", "An ITSM program tied to your processes"],
      ["تمارين على المنصة", "Platform exercises"],
      ["سيناريوهات حادث وتغيير", "Incident and change scenarios"],
      ["متابعة التزام بعد التدريب", "Adherence follow-up after training"],
    ],
    audience: [
      ["مكتب الخدمة", "Service desk"],
      ["تشغيل IT", "IT operations"],
      ["مديرو العمليات", "Operations managers"],
    ],
  }),
  "corporate-training": offering({
    lede: [
      "نصمم مسارات تدريب مخصصة لمؤسستك حسب الأدوار ومستوى الفريق. البرنامج المؤسسي هنا خطة قدرة، لا دورة جاهزة تُشترى بالجملة.",
      "We design custom learning paths for your organization, by role and team level. Corporate training here is a capability plan — not an off-the-shelf course bought in bulk.",
    ],
    problem: [
      "التدريب يُقدَّم للجميع بالمحتوى نفسه، فيملّ الخبير ويضيع المبتدئ، ولا يرتبط بأي هدف تشغيلي.",
      "Training is given to everyone with the same content, so the expert is bored, the beginner is lost, and nothing ties to an operating goal.",
    ],
    approach: [
      "نحدد أهداف القدرة، نقسم المسارات حسب الدور، ونربط كل مسار بمهمة في العمل. القياس يتم بتحسن الأداء لا بعدد الحضور.",
      "We define capability goals, split paths by role, and bind each path to a job task. Measurement is performance improvement — not headcount in the room.",
    ],
    outcomes: [
      ["مسار يناسب الدور", "A path that fits the role", "كل مجموعة تتدرب على ما ستنفّذه فعلاً.", "Each group trains on what they will actually perform."],
      ["ارتباط بهدف تشغيلي", "Tied to an operating goal", "تعرف لماذا هذه الدورة الآن لا «لأن الميزانية وُجدت».", "You know why this course is now — not “because budget appeared”."],
      ["أثر يمكن متابعته", "An effect you can follow", "مؤشر بسيط بعد 30 يوماً لا شهادة فقط.", "A simple indicator after 30 days — not a certificate alone."],
    ],
    deliverables: [
      ["خطة قدرة حسب الأدوار", "A capability plan by role"],
      ["مسارات ومحتوى مخصص", "Custom paths and content"],
      ["جدول تنفيذ وقياس", "A delivery and measurement calendar"],
      ["تقرير أثر بعد التنفيذ", "An impact report after delivery"],
    ],
    audience: [
      ["الموارد البشرية والتعلم", "HR and learning"],
      ["مدراء الوحدات", "Unit managers"],
      ["رعاة التحول", "Transformation sponsors"],
    ],
  }),
};

export function getCategoryProcess(categoryId) {
  return CATEGORY_PROCESS[categoryId] || CATEGORY_PROCESS.consulting;
}

export function getServiceOfferingCopy(id) {
  return COPY[id] || null;
}
