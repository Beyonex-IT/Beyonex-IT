import { readFileSync, writeFileSync } from "fs";

const AUDIENCE = {
  "tech-consulting": [
    ["عندكم قرارات تقنية متفرقة بلا خريطة", "When tech decisions feel scattered", "نرتّب الأنظمة والاعتماديات حتى تعرفوا ماذا يُبقى أو يُوسَّع أو يُوقف — ولماذا.", "We map systems and dependencies so you know what to keep, scale, or stop — and why."],
    ["صعب تبرير ميزانية التقنية أمام الإدارة", "Hard to defend the IT budget", "نقدّم أولويات مبنية على أثر وتكلفة ومخاطر، بلغة يفهمها مجلس الإدارة.", "We rank priorities by impact, cost, and risk — in language leadership can use."],
    ["الاستشارات السابقة انتهت بتقارير بلا تنفيذ", "Past advisory sat unused", "كل توصية تخرج بمالك وجدول، جاهزة تتحول إلى مشروع لا إلى ملف على الرف.", "Every recommendation leaves with an owner and a timeline — ready to become a project."],
  ],
  "digital-transformation": [
    ["تحوّل معلن لكن التشغيل اليومي يتعطل", "Transformation stalls daily work", "نصمم مساراً مرحلياً يطلق الأنظمة الجديدة دون إيقاف العمل الجاري.", "We stage the path so new systems go live without stopping current operations."],
    ["المبادرات كثيرة والنتيجة غير واضحة", "Many initiatives, unclear results", "كل مرحلة لها معيار نجاح قبل الانتقال — حتى يظهر التقدم للإدارة بوضوح.", "Each stage has a success bar before the next — so progress is visible to leadership."],
    ["الفريق يقاوم النظام الجديد", "The team resists the new system", "نبني التبنّي وإدارة التغيير ضمن المسار، لا كملحق بعد الإطلاق.", "Adoption and change management are built into the path — not an add-on after launch."],
  ],
  grc: [
    ["المسؤوليات التقنية غير واضحة بين الإدارات", "Unclear tech ownership across teams", "نحدد من يملك القرار، ومن يعتمد، وكيف يُصعَّد — بلغة تشغيل يومية.", "We clarify who owns decisions, who approves, and how to escalate — in day-to-day language."],
    ["كل مراجعة امتثال تعيد نفس الملاحظات", "Audits keep repeating the same findings", "نربط السياسات بأدلة وضوابط جاهزة للمراجع، لا بجمع مستعجل قبل الزيارة.", "We tie policies to evidence and controls ready for the auditor — not a last-minute scramble."],
    ["المخاطر تظهر وقت الأزمة فقط", "Risk only appears in a crisis", "نبني سجل مخاطر يُراجع بانتظام حتى لا تُكتشف الفجوة تحت الضغط.", "We build a risk register that is reviewed regularly — not discovered under pressure."],
  ],
  "gap-analysis": [
    ["تعرفون أن هناك فجوة لكن غير مُقاسة", "You know there is a gap, but it is not measured", "نقارن الوضع القائم بالمستهدف بنداً بنداً، مع خطورة وأثر لكل فجوة.", "We compare current vs target item by item — with severity and impact for each gap."],
    ["الجهد مشتت بين مبادرات كثيرة", "Effort is scattered across initiatives", "نرتّب إغلاق الفجوات حسب الأولوية حتى لا يُصرف الوقت على الأسهل بدل الأهم.", "We rank gap closure by priority so time goes to what matters — not what is easiest."],
    ["طلب الميزانية يحتاج أساساً واضحاً", "The budget ask needs a clear basis", "خطة الإغلاق تتحول إلى مبرر موارد مبني على فجوات مثبتة لا قائمة رغبات.", "The close-out plan becomes a resource case built on proven gaps — not a wish list."],
  ],
  "bc-dr": [
    ["تخشون انقطاعاً دون خطة تعافٍ مجرّبة", "You fear outage without a tested recovery", "نحدد ماذا يبقى يعمل، ومتى يعود الباقي، ومن يقرر أثناء الحادث.", "We define what stays up, when the rest returns, and who decides during the incident."],
    ["خطة التعافي موجودة لكن لم تُختبر", "A recovery plan exists but was never tested", "ننفّذ تمرين استعادة موثّقاً حتى لا يبقى التعافي افتراضاً على الورق.", "We run a documented restore exercise so recovery is proven — not assumed on paper."],
    ["الإدارة تريد زمن تعافٍ واضحاً", "Leadership wants a clear recovery time", "نربط RTO/RPO بالخدمات الحرجة للعمل لا برقم تقني مجرد.", "We tie RTO/RPO to business-critical services — not an abstract technical number."],
  ],
  web: [
    ["تحتاجون منصة ويب تخدم العمل يومياً", "You need a web platform used every day", "نبني مسارات واضحة وسريعة وآمنة تتصل بأنظمتكم بدل موقع شكلي.", "We build clear, fast, secure flows connected to your systems — not a cosmetic site."],
    ["البيانات تُعاد إدخالها بين أنظمة متعددة", "Data is re-entered across systems", "نربط المنصة بمصادركم حتى تقل النسخ اليدوي والأخطاء.", "We connect the platform to your sources so manual copies and errors drop."],
    ["تريدون أساساً يتوسع لاحقاً", "You want a foundation that can grow", "المعمارية تُصمَّم لوحدات لاحقة دون إعادة بناء كاملة.", "Architecture is designed for later modules — without a full rebuild."],
  ],
  mobile: [
    ["فريقكم يعمل من الميدان ويحتاج تطبيقاً عملياً", "Your field team needs a practical app", "تطبيق بخطوات قصيرة يعمل حتى مع شبكة غير مستقرة.", "An app with short steps that still works on an unstable network."],
    ["عندكم تطبيق جميل لكنه يتعطّل في الاستخدام اليومي", "A polished app that fails in daily use", "نضبط التزامن والصلاحيات والأداء على سيناريوهات التشغيل الحقيقية.", "We tune sync, permissions, and performance on real operating scenarios."],
    ["الجوال والويب يجب أن يكونا نفس العملية", "Mobile and web must be one process", "قناة واحدة للحقيقة: نفس الطلب والحالة دون نسختين متعارضتين.", "One channel of truth: the same request and status — no conflicting copies."],
  ],
  "custom-software": [
    ["الأنظمة الجاهزة لا تغطي طريقتكم في العمل", "Off-the-shelf systems miss how you work", "نبني النظام حول عملياتكم الفعلية والاستثناءات الحقيقية لا القوالب العامة.", "We build around your real workflows and exceptions — not generic templates."],
    ["الفريق ما زال يعتمد على إكسل ومراسلات", "The team still lives in spreadsheets and chat", "نغلق الجزء الحرج داخل النظام حتى تتوقف الحلول الجانبية.", "We close the critical part inside the system so side workarounds stop."],
    ["تحتاجون التوسع لاحقاً دون إعادة كتابة", "You need to grow later without rewriting", "وحدات قابلة للإضافة فوق أساس ثابت بملكية واضحة.", "Modules you can add on a stable foundation with clear ownership."],
  ],
  "ux-ui": [
    ["النظام يعمل لكن الناس تتجنبه", "The system works but people avoid it", "نقودّر المسارات ونبسّط الشاشات حتى تُنجز المهمة بخطوات أقل.", "We shorten paths and simplify screens so the task finishes in fewer steps."],
    ["أخطاء الإدخال متكررة وتكلّف وقت التصحيح", "Input errors keep costing correction time", "حقول وتسميات أوضح تجعل المعنى مفهوماً قبل الإرسال.", "Clearer fields and labels make meaning obvious before submit."],
    ["التدريب على النظام طويل ومكلف", "System training is long and costly", "واجهة تفسّر نفسها تقلّل وقت التأهيل للموظفين الجدد.", "An interface that explains itself cuts onboarding time for new staff."],
  ],
  integration: [
    ["كل إدارة ترى رقماً مختلفاً لنفس الشيء", "Each department sees a different number", "نوحّد مصدر الحقيقة ونربط الأنظمة حتى يتوقف جدل الرقم.", "We unify the source of truth and connect systems so number debates stop."],
    ["التكامل الحالي ينكسر مع كل تحديث", "Current integration breaks on every update", "عقود بيانات ومعالجة أخطاء ومراقبة — لا سكربت هش.", "Data contracts, error handling, and monitoring — not a brittle script."],
    ["التسوية بين الأنظمة تستهلك أياماً كل شهر", "Reconciling systems eats days each month", "تدفق مستمر يغذي التقارير بدل تصدير أسبوعي يدوي.", "A continuous flow feeds reports instead of a manual weekly export."],
  ],
  automation: [
    ["نفس المهمة تُعاد يدوياً كل يوم", "The same task is repeated by hand daily", "نؤتمت التكرار الواضح ونبقي الإنسان على القرار الحرج فقط.", "We automate clear repetition and leave people on the critical decision only."],
    ["الموافقات والمتابعة تبطئ الإنجاز", "Approvals and chasing slow delivery", "تدفقات بقواعد واستثناءات تقلّل الانتظار والخطأ البشري.", "Flows with rules and exceptions that cut waiting and human error."],
    ["تريدون قياس أثر الأتمتة لا عرضاً تجريبياً", "You want measured automation impact", "تعرفون كم طلباً اكتمل وفي كم دقيقة بعد الإطلاق.", "You see how many requests finished and in how many minutes after go-live."],
  ],
  "service-desk": [
    ["الطلبات تضيع بين واتساب والبريد والمكالمات", "Requests vanish across WhatsApp, email, and calls", "نقطة تواصل واحدة من الاستلام حتى الإغلاق مع حالة واضحة لكل طلب.", "One intake from open to close — with a clear status on every request."],
    ["لا أحد يعرف ما المتأخر وما المفتوح", "No one knows what is overdue or open", "طوابير وأولويات ولوحات زمن رد تُرى للإدارة يومياً.", "Queues, priorities, and response-time views leadership can see daily."],
    ["الدعم يُقاس بالانطباع لا بالأرقام", "Support is judged by mood, not numbers", "وقت الرد ووقت الحل ورضا الطلب تصبح مؤشرات تشغيل.", "Response time, resolve time, and request satisfaction become operating measures."],
  ],
  itom: [
    ["تعرفون بالعطل بعد اتصال المستخدم", "You learn about outages from user calls", "مراقبة مربوطة بالخدمة تنذر قبل أن يشعر العميل أو الموظف.", "Service-linked monitoring alerts before the customer or employee feels it."],
    ["الإنذارات كثيرة والضوضاء تخفي المهم", "Alert noise hides what matters", "نضبط العتبات حتى يبقى الإنذار قليلاً وصحيحاً وقابلاً للتصرف.", "We tune thresholds so alerts stay few, correct, and actionable."],
    ["لا وضوح أي خادم يخدم أي عمل", "Unclear which server serves which work", "خريطة بنية↔خدمة تجعل الأثر مفهوماً عند أي خلل.", "An infrastructure↔service map makes impact clear when something fails."],
  ],
  incident: [
    ["عند الانقطاع الكل يتدخل والملكية تضيع", "During outage everyone piles in and ownership is lost", "درجات خطورة وغرفة قرار ومسار تواصل واضح أثناء الحادث.", "Severity grades, a decision room, and a clear comms path during the incident."],
    ["نفس العطل يتكرر أسبوعياً", "The same outage repeats weekly", "إغلاق مربوط بمراجعة سبب جذري لا بإطفاء الحريق فقط.", "Closure tied to root-cause review — not firefighting alone."],
    ["الإدارة تعرف الحالة من الشائعات", "Leadership learns status from rumours", "قوالب تواصل تُحدَّث أثناء الحادث بلغة واضحة للجميع.", "Communication templates updated during the incident in clear language."],
  ],
  change: [
    ["التحديثات تُنفَّذ بسرعة ثم يسقط ما كان يعمل", "Fast updates break what was working", "تقييم أثر وموافقة ونافذة وتراجع — قبل التنفيذ لا بعده.", "Impact review, approval, window, and rollback — before go-live, not after."],
    ["الخوف من التغيير جمّد كل التحديثات", "Fear of change froze every update", "مسار أسرع للتغيير الآمن وأشد للخطِر — إيقاع صحي بلا فوضى.", "A faster path for safe change and a tighter one for risky — healthy rhythm, no chaos."],
    ["لا سجل يوضح ماذا تغيّر ومتى ومن اعتمد", "No log of what changed, when, or who approved", "سجل تغيير قابل للمراجعة يحمي التشغيل والتدقيق معاً.", "An auditable change log that protects operations and audit together."],
  ],
  asset: [
    ["لا تعرفون بدقة ماذا لديكم من أجهزة وأنظمة", "You do not know exactly what assets you have", "سجل حي بالموقع والمالك والحالة طوال دورة حياة الأصل.", "A live register of location, owner, and status across the asset lifecycle."],
    ["المشتريات تتكرر وأجهزة تختفي عند خروج الموظفين", "Purchases repeat and devices vanish on exit", "ربط الشراء والدعم والإخراج حتى تُغلق الأصول مع حركة الشخص.", "Purchasing, support, and retirement linked so assets close with people movement."],
    ["تجديد العقود يتم بلا صورة تكلفة واضحة", "Renewals happen without a clear cost picture", "تقارير حيازة وتكلفة تساعد قرار التجديد أو الإخراج.", "Ownership and cost reports that support renew-or-retire decisions."],
  ],
  sla: [
    ["وُعد بوقت استجابة لكن لا يُقاس فعلياً", "Response time was promised but never measured", "أهداف زمن مربوطة بالنظام وتقارير شهرية تُعرض للإدارة والعميل.", "Time targets tied to the system with monthly reports for leadership and clients."],
    ["النقاش مع العميل يتحول لجدل انطباعات", "Client talks turn into opinion debates", "الاتفاقية توضح الحرجية والاستثناءات بلغة عقد تشغيلي حي.", "The agreement clarifies criticality and exceptions as a living operating contract."],
    ["لا تعرفون أين يُكسر الالتزام ولماذا", "You do not know where commitment breaks or why", "لوحات التزام تكشف الاختناق وتحوّل التحسين إلى بيانات.", "Adherence dashboards expose bottlenecks and turn improvement into data."],
  ],
  networks: [
    ["الفروع أو الأنظمة تنقطع أو تبطئ دون تفسير", "Branches or systems slow or drop without explanation", "تصميم شبكة بأداء وتجزئة وأمان واضح يربط مواقعكم بثبات.", "Network design with clear performance, segmentation, and security across your sites."],
    ["الصلاحيات مفتوحة والترقيع الميداني يزيد المخاطر", "Open access and field patches raise risk", "تجزئة وحماية مضمَّنة في المعمارية — لا إصلاحات بعد الحادث.", "Segmentation and protection built into the architecture — not fixes after incidents."],
    ["تريدون توسعة لاحقاً دون إعادة تمديد عشوائي", "You want later growth without ad-hoc cabling chaos", "مسارات وسعة محسوبة تدعم التوسع بقرار لا بترقيع.", "Planned routes and capacity that support growth by decision — not by patch."],
  ],
  servers: [
    ["تطبيقاتكم الحرجة على خوادم بلا صورة توافر", "Critical apps sit on servers with no availability picture", "تهيئة ومراقبة وسعة وخطة واضحة عند سقوط عقدة.", "Build, monitoring, capacity, and a clear plan when a node fails."],
    ["التحديثات متأخرة والسعة تظهر فجأة في الذروة", "Patches are late and capacity appears suddenly at peak", "نوافذ تحديث مخططة ومراقبة سعة قبل أن تُستنفد.", "Planned patch windows and capacity watch before resources run out."],
    ["الصيانة رد فعل بعد العطل لا قبله", "Maintenance is reactive after failure", "صيانة وقائية جزء من الخدمة حتى يقلّ المفاجئ.", "Preventive maintenance as part of the service so surprises drop."],
  ],
  storage: [
    ["البيانات تنمو والنظام الحرج يبطؤ", "Data grows and the critical system slows", "مستويات تخزين: الساخن سريع والبارد أقل تكلفة — بسياسة واضحة.", "Storage tiers: hot stays fast, cold costs less — with a clear policy."],
    ["ملفات بلا قيمة تملأ الوسط الأغلى", "Low-value files fill the most expensive tier", "تصنيف واحتفاظ يمنع دفع تكلفة ما لا تحتاجونه.", "Classification and retention so you stop paying for what you do not need."],
    ["النسخ على نفس الوسط الذي تخافون فشله", "Copies sit on the same medium you fear failing", "نسخ منفصلة ومراقبة نمو حتى لا تكون الحماية وهماً.", "Separated copies and growth monitoring so protection is real."],
  ],
  virtualization: [
    ["الآلات الافتراضية تتكاثر بلا حوكمة", "VMs proliferate with no governance", "قوالب وعمر وصلاحيات تمنع الهدر العشوائي للموارد والتراخيص.", "Templates, lifespan, and access that stop random waste of resources and licenses."],
    ["تريدون استغلال أفضل لنفس العتاد", "You want more from the same hardware", "عناقيد وسعة مضبوطة تعطي قدرة أعلى دون فوضى تشغيل.", "Tuned clusters and capacity that deliver more power without operating chaos."],
    ["نقل الخدمات بين العُقد صعب ومحفوف", "Moving services between nodes is hard and risky", "خطة انتقال مع تراجع تجعل الصيانة محسوبة لا مقامرة.", "A move plan with rollback so maintenance is calculated — not a gamble."],
  ],
  "data-center": [
    ["غرفة السيرفرات أصبحت ضيقة وغير آمنة تشغيلياً", "The server room is tight and operationally unsafe", "تصميم طاقة وتبريد ومسارات وأمن فيزيائي يناسب حرجية خدماتكم.", "Power, cooling, paths, and physical security sized to how critical your services are."],
    ["أي صيانة تهدد بإيقاف كل شيء", "Any maintenance threatens a full stop", "مسارات مزدوجة تسمح بالعمل على جزء دون إسقاط الكل.", "Dual paths that let you work on one part without dropping everything."],
    ["من يدخل القاعة غير مضبوط بسجل واضح", "Who enters the hall is not controlled with a clear log", "وصول فيزيائي منضبط وسجلات يمكن مراجعتها.", "Controlled physical access with logs you can review."],
  ],
  backup: [
    ["النسخ تعمل ليلاً لكن الاستعادة لم تُختبر", "Backups run at night but restore was never tested", "اختبار استعادة موثّق على بيانات حقيقية للخدمات الحرجة.", "A documented restore test on real data for critical services."],
    ["تخشون برمجية فدية أو تلف المصفوفة", "You fear ransomware or array failure", "نسخ منفصلة عن نطاق الإصابة مع احتفاظ يناسب المخاطر.", "Copies outside the blast radius with retention that matches your risk."],
    ["الإدارة تريد إثباتاً شهرياً أن النسخ ناجحة", "Leadership wants monthly proof backups work", "تقرير نجاح للنسخ وللاستعادة معاً — لا افتراض.", "A monthly report of backup success and restore success — not an assumption."],
  ],
  soc: [
    ["التنبيهات الأمنية متأخرة أو بلا سياق", "Security alerts are late or lack context", "مراقبة وحالات كشف مرتبطة بمسار استجابة قبل أن يتسع الأثر.", "Monitoring and detection use cases tied to a response path before impact spreads."],
    ["لا وردية قرار واضحة للأمن", "No clear security decision shift", "نموذج تشغيل SOC بأدوار وتقارير وردية وإدارة.", "A SOC operating model with roles plus shift and leadership reports."],
    ["القواعد الأمنية عامة لا تناسب بيئتكم", "Security rules are generic, not yours", "تحسين من حوادثكم الحقيقية لا من قالب بائع مستورد.", "Improvement from your real incidents — not an imported vendor template."],
  ],
  siem: [
    ["السجلات موزعة والتحقيق يأخذ أياماً", "Logs are scattered and investigation takes days", "حدث ومستخدم وجهاز في رؤية واحدة تختصر زمن التحقيق.", "Event, user, and device in one view that shortens investigation time."],
    ["تخزنون بيانات كثيرة بلا قيمة تحقيق", "You store lots of data with little investigation value", "مصادر ذات قيمة واحتفاظ مفيد — الجودة أهم من الحجم.", "High-value sources and useful retention — quality over volume."],
    ["تريدون أنماطاً لا تنبيهات معزولة", "You want patterns, not isolated alerts", "قواعد وتحقيقات تكشف التسلسل قبل أن يتحول إلى حادث كبير.", "Rules and investigations that reveal the sequence before it becomes a major incident."],
  ],
  pentest: [
    ["تحتاجون اختباراً حقيقياً لا تقريراً يخيف ويُنسى", "You need a real test — not a scary forgotten report", "سيناريوهات كهجوم حقيقي مع ترتيب إصلاح وإعادة اختبار للحرج.", "Attack-like scenarios with fix ranking and re-test of critical findings."],
    ["التدقيق يطلب إثبات فحص دفاعاتكم", "Audit asks for proof your defenses were tested", "نطاق وقواعد وتقرير تقني وتنفيذي جاهز للمراجع وللمُصلِح.", "Scope, rules, and technical plus executive reports ready for auditor and fixer."],
    ["الثغرات تُغلق عشوائياً بلا أولوية", "Findings are closed randomly without priority", "ما يُغلق هذا الأسبوع وما يُجدول — حسب الأثر على عملكم.", "What closes this week vs later — ranked by impact on your business."],
  ],
  iam: [
    ["الصلاحيات تتراكم مع تنقّل الموظفين", "Permissions pile up as people move roles", "من يحصل على ماذا مربوط بالدور، مع مراجعة دورية حية لا جدول سنوي شكلي.", "Who gets what is tied to the role — with live periodic review, not a paper annual exercise."],
    ["حسابات تبقى مفتوحة بعد خروج الموظف", "Accounts stay open after someone leaves", "دورة حياة هوية: الانضمام يمنح والخروج يسحب في وقت معروف.", "Identity lifecycle: join grants access, exit pulls it on a known clock."],
    ["صعب إثبات من وافق على صلاحية حساسة", "Hard to prove who approved sensitive access", "مسار طلب وسحب قابل للتدقيق دون البحث في البريد.", "A request-and-revoke path you can audit without searching mail."],
  ],
  pam: [
    ["حسابات المشرفين مشتركة أو دائمة", "Admin accounts are shared or always on", "وصول مرتفع عند الحاجة فقط، ثم يُسحب — مع سجل جلسة.", "Elevated access only when needed, then revoked — with a session record."],
    ["اختراق هوية واحدة قد يفتح البنية كلها", "One stolen identity could open the whole estate", "حماية الحسابات ذات الصلاحيات العالية تضيّق أثر أي اختراق.", "Protecting privileged accounts narrows the blast radius of any breach."],
    ["لا تعرفون ماذا فُعل بحساب المشرف ومتى", "You do not know what was done with admin accounts", "تسجيل جلسات حرجة قابل للمراجعة والتحقيق.", "Critical session logging you can review and investigate."],
  ],
  "cyber-grc": [
    ["كل تدقيق أمني يبدأ من الصفر", "Every security audit starts from zero", "خريطة متطلبات↔ضوابط وحزمة أدلة جاهزة قبل وصول المراجع.", "A requirements-to-controls map and evidence pack ready before the auditor arrives."],
    ["السياسات طويلة والعامل لا يطبّقها", "Policies are long and staff do not apply them", "نصوص قصيرة مربوطة بإجراء يومي يعرفه الفريق.", "Short texts tied to a daily procedure the team already understands."],
    ["الامتثال مطلوب تعاقدياً أو قطاعياً", "Compliance is required by contract or sector", "نربط متطلباتكم الفعلية بضوابط تشغيلية قابلة للإثبات.", "We map your real requirements to operating controls you can prove."],
  ],
  cloud: [
    ["فتحتم السحابة ثم تضخمت الفاتورة والصلاحيات", "You opened cloud then bill and permissions swelled", "أساس حسابات وشبكة وهوية مع ميزانيات مرئية من اليوم الأول.", "Accounts, network, and identity foundation with visible budgets from day one."],
    ["النقل السحابي نُفِّذ كرفع أجهزة بلا نموذج تشغيل", "Cloud move was lift-and-shift with no operating model", "مراحل بنجاح لكل حمل عمل — لا قص شريط ثم مفاجآت.", "Stages with a success bar per workload — not a ribbon cut then surprises."],
    ["التكلفة تظهر نهاية الشهر كمفاجأة", "Cost appears as a month-end surprise", "مراجعة تكلفة كمؤشر تشغيل مستمر لا كصدمة مالية.", "Cost review as an ongoing operating signal — not a finance shock."],
  ],
  "data-analytics": [
    ["كل إدارة تصدّر ملفها والتعريفات تختلف", "Each department exports its own file with different definitions", "رقم واحد متفق عليه للنقاش قبل أي لوحة ألوان.", "One agreed number to discuss — before any colorful dashboard."],
    ["البيانات تصل متأخرة عن وقت القرار", "Data arrives too late for the decision", "مسارات وجودة مربوطة بأسئلة تُسأل أسبوعياً فعلاً.", "Pipelines and quality tied to questions you actually ask every week."],
    ["لا ثقة في مصدر الرقم", "No trust in where the number comes from", "تعرفون المصدر ومن يجدّده — بثقة يمكن شرحها.", "You know the source and who refreshes it — with confidence you can explain."],
  ],
  bi: [
    ["اللوحات كثيرة والقادة توقفوا عن فتحها", "Dashboards multiplied and leaders stopped opening them", "مجموعة مؤشرات قصيرة لكل مستوى — كل لوحة تجيب سؤالاً واضحاً.", "A short indicator set per level — every dashboard answers a clear question."],
    ["المالية والتشغيل يختلفان على نفس المؤشر", "Finance and operations disagree on the same KPI", "تعريف موحّد ومصدر موثوق يقلّل تضارب الأرقام.", "One definition and a trusted source that cuts number conflict."],
    ["أرقام حساسة تُنشر لغير المعنيين", "Sensitive numbers reach the wrong people", "صلاحيات مشاهدة منضبطة حسب الدور.", "View access controlled by role."],
  ],
  ai: [
    ["تريدون ذكاءً اصطناعياً يخدم عملية حقيقية لا عرضاً", "You want AI that serves a real process — not a demo", "حالة استخدام مربوطة بعنق زجاجة (وقت/خطأ/حجم) وعائد يُقاس.", "A use case tied to a bottleneck (time/error/volume) with a measurable return."],
    ["تجارب سابقة بقيت في المختبر", "Past experiments stayed in the lab", "بيانات وحوكمة ومعيار نجاح قبل التوسع خارج التجربة.", "Data, governance, and a success bar before scaling beyond the pilot."],
    ["تخشون أن النموذج يقرر بلا مسؤولية بشرية", "You fear the model deciding with no human accountability", "الإنسان يبقى على القرار الحرج — النموذج يقترح أو يصنّف.", "People stay on the critical decision — the model suggests or classifies."],
  ],
  ml: [
    ["النموذج نجح في التجربة ثم ضعف في الإنتاج", "The model worked in the lab then weakened in production", "مراقبة انحراف وإعادة تدريب مخططة كجزء من التشغيل.", "Drift monitoring and planned retraining as part of operations."],
    ["تريدون توقعاً أو تصنيفاً يدخل الإجراء اليومي", "You want a forecast or class that enters daily procedure", "مخرج النموذج يُربط بخطوة عمل لا يبقى في دفتر ملاحظات.", "Model output ties into a work step — it does not stay in a notebook."],
    ["لا أحد يملك تشغيل النموذج بعد تسليم المشروع", "No one owns running the model after the project", "التسليم يشمل من يشغّله غداً ومعياراً تشغيلياً واضحاً.", "Delivery includes who runs it tomorrow and a clear operating metric."],
  ],
  "managed-it": [
    ["فريقكم غارق في الأعطال اليومية بلا وقت للتحسين", "Your team is buried in break-fix with no time to improve", "نشغّل البيئة بمستويات دعم متفق عليها ونُرجع وقت فريقكم للتحسين.", "We run the environment at agreed support levels and return your team's time to improvement."],
    ["المسؤولية تتوزع بين موردين بلا مالك يومي", "Ownership is split across vendors with no daily owner", "نطاق واضح: ماذا ندير نحن، ماذا يبقى لديكم، ومن يرد ومتى.", "Clear scope: what we run, what stays with you, who answers and when."],
    ["الإدارة تريد صورة شهرية للأداء لا مفاجآت", "Leadership wants a monthly performance picture — not surprises", "تقارير حوادث وسعة وأداء في إيقاع واحد مفهوم.", "Incident, capacity, and performance reports in one understandable cadence."],
  ],
  operations: [
    ["التشغيل يعتمد على شخص واحد إذا غاب توقفت التفاصيل", "Operations depend on one person — details stop when they are away", "أدلة إجراءات ووردية بديلة حتى لا تُحبس المعرفة في رأس واحد.", "Runbooks and backup shifts so knowledge is not locked in one head."],
    ["الإنذارات والخطوات غير مرتَّبة بين الورديات", "Alerts and steps are unordered across shifts", "ترتيب إنذار وتسليم وردية نظيف: ماذا فُتح وماذا أُغلق.", "Alert order and a clean shift handover: what opened and what closed."],
    ["الارتجال يزيد عند أي حالة غير معتادة", "Improvisation rises on any unusual case", "إجراءات حرجة مكتوبة ومختبرة بمعيار «تم بشكل صحيح».", "Critical procedures written and tested against a “done correctly” bar."],
  ],
  monitoring: [
    ["إما لا مراقبة أو سيل تنبيهات يُتجاهل", "Either no monitoring or an ignored alert flood", "مؤشرات خدمة وعتبات تعني تصرفاً — أحمر حقيقي لا ديكور.", "Service indicators and thresholds that mean action — real red, not decoration."],
    ["المستخدم يشتكي قبل أن يصل الإنذار", "Users complain before the alert arrives", "إنذار مبكر للتوافر والأداء قبل أن تُحسّ الخدمة.", "Early availability and performance signals before the service is felt."],
    ["التنبيه يصل لقائمة عامة بلا مالك", "Alerts hit a generic list with no owner", "توجيه لمسار عمل وصاحب خدمة محدد.", "Routing into a work path and a named service owner."],
  ],
  support: [
    ["كل بلاغ يُعامل بنفس السرعة فيتأخر الحرج", "Every ticket gets the same speed so critical waits", "مستويات دعم ووقت استجابة حسب حرجية الخدمة لا حسب الطابور العام.", "Support tiers and response times by service criticality — not a general queue."],
    ["المستخدم لا يعرف أين يتصل ومتى يُرد عليه", "Users do not know where to call or when they get a reply", "قنوات وتغطية واضحة مع التزام زمني يمكن قياسه.", "Clear channels and coverage with a measurable time commitment."],
    ["جودة الدعم تُقاس بعدد التذاكر لا بجودة الإغلاق", "Support quality is judged by ticket count, not close quality", "مراجعة عيّنات مغلقة بمعيار شهري.", "Monthly review of closed samples against a quality standard."],
  ],
  maintenance: [
    ["التحديث يُؤجَّل لأنه «يعمل» حتى يتعطل دفعة واحدة", "Updates are deferred because “it works” until everything fails together", "نوافذ تحديث مقيَّمة الأثر تقلّل مفاجأة الدين التقني.", "Impact-assessed update windows that cut technical-debt surprises."],
    ["الأعطال المفاجئة تقطع يوم العمل", "Sudden failures interrupt the working day", "صيانة وقائية للأجزاء الحرجة قبل أن تكسر التشغيل.", "Preventive maintenance on critical parts before they break operations."],
    ["عمر الأصول يقصر بسبب إهمال الصيانة", "Asset life shortens from neglected maintenance", "جدول صيانة يحمي الاستثمار ويؤخر الاستبدال المبكر.", "A maintenance calendar that protects investment and delays early replacement."],
  ],
  cctv: [
    ["الكاميرات موجودة لكن الاسترجاع صعب أو التغطية ناقصة", "Cameras exist but playback is hard or coverage has gaps", "تغطية للمداخل والمسارات الحرجة مع استرجاع وتصدير في وقت معقول.", "Coverage of entrances and critical paths with playback and export in reasonable time."],
    ["الجودة تسقط ليلاً ولا تكفي للتعرف", "Night quality drops below identification usefulness", "اختيار دقة وتسجيل يناسب الغرض: منع، تحقيق، أو تشغيل.", "Resolution and recording chosen for purpose: deterrence, investigation, or operations."],
    ["المشغّلون لا يعرفون استخدام النظام بعد التركيب", "Operators cannot use the system after install", "تدريب وصيانة جزء من التسليم لا نهاية التركيب.", "Training and maintenance are part of handover — not the end of installation."],
  ],
  "access-control": [
    ["بطاقات الدخول تبقى بعد خروج الموظف", "Access cards remain after someone leaves", "منح وسحب مربوط بحركة الموارد البشرية في وقت معروف.", "Grant and revoke tied to HR movement on a known clock."],
    ["أبواب حرجة تُفتح لمجموعة عامة بلا حاجة", "Critical doors open to a generic group without need", "مناطق ومستويات دخول تطابق السياسة على الباب نفسه.", "Zones and access levels that enforce policy at the door itself."],
    ["بعد الحادث يصعب معرفة من عبر ومتى", "After an incident it is hard to know who passed and when", "سجل حركة يمكن التحقيق فيه بجانب الكاميرات.", "An access log you can investigate alongside CCTV."],
  ],
  cabling: [
    ["التمديدات عشوائية وتصعّب العطل والتوسعة", "Ad-hoc cabling makes faults and growth harder", "بنية منظمة بمسارات وتصنيف واختبار اعتماد يدعم التوسع لاحقاً.", "Structured routes, labeling, and certification tests that support later growth."],
    ["الشبكة والأمن مختلطان بلا توثيق", "Network and security cabling are mixed with no docs", "مسارات مفهومة لكل نظام ونقطة لها هوية يمكن تتبعها بعد سنة.", "Understood paths per system — every point has an identity you can trace a year later."],
    ["أي توسعة تتطلب إعادة هدم شبه كاملة", "Any expansion needs near-total rework", "جهد احتياطي محسوب يقلّل إعادة التمديد المكلفة.", "Planned spare capacity that cuts costly re-pulls."],
  ],
  av: [
    ["الاجتماع يبدأ متأخراً بسبب مشاكل صوت أو عرض", "Meetings start late due to audio or display issues", "تشغيل بسيط (مسار قصير أو زر واحد) يجهّز القاعة في ثوانٍ.", "Simple operation (short path or one button) that readies the room in seconds."],
    ["القاعة تبدو جاهزة ثم تفشل أمام العميل", "The room looks ready then fails in front of a client", "سيناريوهات مختبرة بالكامل قبل التسليم مع تدريب المشغّل.", "Full scenarios tested before handover with operator training."],
    ["كل اجتماع روتيني يحتاج فنياً", "Every routine meeting needs a technician", "نظام يستطيعه فريقكم اليومي دون اعتماد دائم على دعم خارجي.", "A system your daily team can run without constant external support."],
  ],
  intercom: [
    ["الزائر يُترك عند الباب والحارس لا يصل للإدارة", "Visitors wait at the door while the guard cannot reach management", "اتصال داخلي سريع بين المدخل والنقاط الأمنية وصاحب القرار.", "Fast internal calls between entrance, security points, and decision makers."],
    ["الاتصال الداخلي يعتمد على الجوال الشخصي", "Internal calls depend on personal mobiles", "مسار استدعاء معروف لكل نقطة — من تستدعي ولماذا.", "A known call path per point — whom to call and why."],
    ["تريدون ربط الإنتركم بفتح الباب عند الحاجة", "You want intercom tied to door unlock when needed", "تكامل مع التحكم بالدخول كإجراء واحد حيث يلزم.", "Access-control integration as one procedure where required."],
  ],
  "training-it": [
    ["الدعم غارق في أسئلة متكررة على أدواتكم اليومية", "Support is flooded with repeating questions on daily tools", "تدريب عملي على الأنظمة التي يستخدمها الفريق فعلاً — لا منهج عام.", "Hands-on training on the systems the team actually uses — not a generic syllabus."],
    ["الموظفون الجدد يأخذون وقتاً طويلاً ليصبحوا منتجين", "New joiners take too long to become productive", "مسار تأهيل قصير بمادة مرجعية تبقى بعد الدورة.", "A short onboarding path with reference material that stays after the course."],
    ["كل وحدة تستخدم مصطلحات وإجراءات مختلفة", "Each unit uses different terms and procedures", "لغة مشتركة داخل الفريق تقلّل اللبس وطلبات الدعم.", "A shared language inside the team that cuts confusion and support tickets."],
  ],
  "training-cyber": [
    ["أخطر الثغرات تمر من الإنسان: رابط أو صلاحية مُرِّرت", "The biggest gaps pass through people: a link or a forwarded permission", "وعي حسب الدور مع تمارين محاكاة قصيرة — لا فيديو يُتخطى.", "Role-based awareness with short simulations — not a skipped video."],
    ["الفريق لا يعرف لمن يبلّغ خلال دقائق", "The team does not know whom to report to within minutes", "مسار تبليغ وتصعيد واضح يُدرَّب عليه لا يُعلَّق كملصق فقط.", "A report-and-escalate path that is practiced — not only posted as a sign."],
    ["السياسة الأمنية تُقرأ كتهديد لا كإجراء عمل", "Security policy reads as a threat, not a work procedure", "نربط القواعد بمهام يومية حتى تُفهم وتُطبَّق.", "We tie rules to daily tasks so they are understood and applied."],
  ],
  "training-cloud": [
    ["بعد النقل السحابي الفريق ما زال يفكر بأسلوب المركز القديم", "After cloud move the team still thinks like the old data center", "تدريب على حساباتكم: تشغيل، تكلفة، هوية، ومراقبة.", "Training on your accounts: operate, cost, identity, and monitor."],
    ["كل زر يحتاج مستشاراً خارجياً", "Every click needs an external consultant", "مهارات تشغيل يومي تجعل الفريق مستقلاً في المهام الروتينية.", "Day-to-day operating skills so the team handles routine work independently."],
    ["الفاتورة تتضخم لأن الوعي بالتكلفة ضعيف", "The bill swells because cost awareness is weak", "وحدات تكلفة وحماية ضمن المسار لا كمادة جانبية.", "Cost and protection modules inside the path — not a side topic."],
  ],
  "training-itsm": [
    ["المنصة موجودة لكن كل وردية تفسّر الحادث بطريقتها", "The platform exists but each shift interprets incidents differently", "تدريب مربوط بعملياتكم على المنصة حتى تتوحّد اللغة والإجراءات.", "Training tied to your processes on the platform so language and procedures align."],
    ["الحقول تُملأ لأنها إجبارية لا لأنها مفهومة", "Fields are filled because they are mandatory, not understood", "تمارين تصنيف وتصيعد وإغلاق تجعل المعنى واضحاً في العمل.", "Classify/escalate/close exercises that make meaning clear on the job."],
    ["أثر الدورة يختفي بعد أسبوع من العودة للعمل", "Course impact fades a week after return to work", "متابعة التزام بعد التدريب لا شهادة فقط.", "Adherence follow-up after training — not a certificate alone."],
  ],
  "corporate-training": [
    ["دورة واحدة للجميع فلا تناسب الخبير ولا المبتدئ", "One course for everyone fits neither expert nor beginner", "مسارات حسب الدور ومستوى الفريق مربوطة بهدف تشغيلي واضح.", "Paths by role and level tied to a clear operating goal."],
    ["التدريب يُشترى لأن الميزانية وُجدت لا لأن الحاجة قيست", "Training is bought because budget appeared, not because need was measured", "خطة قدرة: لماذا هذه الدورة الآن وماذا يتحسن بعدها.", "A capability plan: why this course now and what improves after."],
    ["النجاح يُقاس بالحضور لا بأثر في العمل", "Success is measured by attendance, not on-the-job effect", "مؤشر بسيط بعد 30 يوماً يثبت أن المهارة دخلت العمل.", "A simple 30-day indicator proving the skill entered the work."],
  ],
};

const path = new URL("../src/content/serviceOfferings.js", import.meta.url);
// Fix path for windows run from project root
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "../src/content/serviceOfferings.js");

let src = readFileSync(file, "utf8");

for (const [id, items] of Object.entries(AUDIENCE)) {
  const block = items
    .map(
      ([a, b, c, d]) =>
        `      [${JSON.stringify(a)}, ${JSON.stringify(b)}, ${JSON.stringify(c)}, ${JSON.stringify(d)}],`
    )
    .join("\n");

  const re = new RegExp(
    `("${id}": offering\\([\\s\\S]*?audience: \\[)[\\s\\S]*?(\\n    \\],\\n  \\}\\),)`,
    "m"
  );

  if (!re.test(src)) {
    console.error("miss", id);
    continue;
  }

  src = src.replace(re, `$1\n${block}\n    $2`);
  console.log("ok", id);
}

writeFileSync(file, src);
console.log("done");
