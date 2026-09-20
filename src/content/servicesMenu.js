export const SERVICES_MENU = [
  {
    id: "consulting",
    icon: "lightbulb",
    title: {
      ar: "الاستشارات والتحول الرقمي",
      en: "Consulting & Digital Transformation",
    },
    shortTitle: {
      ar: "الاستشارات والتحول الرقمي",
      en: "Consulting & Transformation",
    },
    teaser: {
      ar: "مسار واضح للتحول من الاستشارة حتى الحوكمة واستمرارية الأعمال.",
      en: "A clear path from consulting to GRC and business continuity.",
    },
    description: {
      ar: "مسار واضح للتحول: استشارات تقنية، حوكمة، وتحليل فجوات حتى استمرارية الأعمال.",
      en: "A clear transformation path: technology consulting, GRC, gap analysis, and business continuity.",
    },
    offeringsTitle: {
      ar: "من الاستشارة إلى الاستمرارية",
      en: "From advisory to continuity",
    },
    offeringsLede: {
      ar: "نضع خارطة تحول تناسب مؤسستك: استشارة تقنية، حوكمة ومخاطر، وتحليل فجوات حتى خطط التعافي.",
      en: "We map a transformation that fits your organization: technology advisory, GRC, gap analysis, and recovery plans.",
    },
    items: [
      {
        id: "tech-consulting",
        title: { ar: "الاستشارات التقنية", en: "Technology Consulting" },
        description: {
          ar: "تقييم الوضع الحالي ووضع توصيات عملية للمعمارية، الأنظمة، وأولويات الاستثمار التقني.",
          en: "Assess the current landscape and set practical recommendations for architecture, systems, and tech investment.",
        },
      },
      {
        id: "digital-transformation",
        title: { ar: "التحول الرقمي", en: "Digital Transformation" },
        description: {
          ar: "مسار تنفيذ مرحلي يربط العمليات بالأنظمة الجديدة دون إيقاف العمل اليومي.",
          en: "A staged execution path that connects operations to new systems without stopping daily work.",
        },
      },
      {
        id: "grc",
        title: { ar: "الحوكمة والمخاطر والامتثال (GRC)", en: "GRC" },
        description: {
          ar: "إطار حوكمة يوضح المسؤوليات، المخاطر، ومتطلبات الامتثال داخل التشغيل التقني.",
          en: "A governance frame that clarifies ownership, risk, and compliance inside technical operations.",
        },
      },
      {
        id: "gap-analysis",
        title: { ar: "تحليل الفجوات", en: "Gap Analysis" },
        description: {
          ar: "مقارنة بين الوضع القائم والمستهدف مع خطة إغلاق واضحة لكل فجوة.",
          en: "Compare current and target states, then close each gap with a clear action plan.",
        },
      },
      {
        id: "bc-dr",
        title: { ar: "استمرارية الأعمال والتعافي (BC/DR)", en: "BC/DR" },
        description: {
          ar: "خطط استمرارية وتعافٍ تقلّل أثر الانقطاع وتعيد الأنظمة للعمل بسرعة.",
          en: "Continuity and recovery plans that reduce downtime and restore systems quickly.",
        },
      },
    ],
  },
  {
    id: "software",
    icon: "laptopCode",
    title: {
      ar: "البرمجيات والتطبيقات المؤسسية",
      en: "Enterprise Software & Applications",
    },
    shortTitle: {
      ar: "البرمجيات والتطبيقات",
      en: "Software & Applications",
    },
    teaser: {
      ar: "ويب، جوال، وبرمجيات مخصصة مع تجربة استخدام وتكامل وأتمتة.",
      en: "Web, mobile, and custom software with UX, integration, and automation.",
    },
    description: {
      ar: "تطبيقات ويب وجوال وبرمجيات مخصصة مع تجربة استخدام وتكامل وأتمتة.",
      en: "Web, mobile, and custom software with UX/UI, integration, and automation.",
    },
    offeringsTitle: {
      ar: "برمجيات تُبنى لاحتياجك",
      en: "Software built around your need",
    },
    offeringsLede: {
      ar: "تطبيقات ويب وجوال وأنظمة مخصصة، مع تجربة استخدام وتكامل وأتمتة تربط عملياتك ببعضها.",
      en: "Web, mobile, and custom systems, with UX, integration, and automation that connect your operations.",
    },
    items: [
      {
        id: "web",
        title: { ar: "تطوير الويب", en: "Web" },
        description: {
          ar: "منصات ويب سريعة وآمنة تناسب العمل اليومي وتتكامل مع أنظمتك الحالية.",
          en: "Fast, secure web platforms that fit daily work and connect to your current systems.",
        },
      },
      {
        id: "mobile",
        title: { ar: "تطبيقات الجوال", en: "Mobile" },
        description: {
          ar: "تطبيقات جوال واضحة الأداء، مصممة لتجربة استخدام سلسة على iOS وAndroid.",
          en: "Mobile apps built for smooth iOS and Android use, with clear performance.",
        },
      },
      {
        id: "custom-software",
        title: { ar: "البرمجيات المخصصة", en: "Custom Software" },
        description: {
          ar: "أنظمة تُصمَّم حول عملياتك الفعلية بدل القوالب الجاهزة التي لا تناسبك.",
          en: "Systems designed around your real workflows, not generic templates.",
        },
      },
      {
        id: "ux-ui",
        title: { ar: "تجربة وواجهة المستخدم (UX/UI)", en: "UX/UI" },
        description: {
          ar: "واجهات أوضح وخطوات أقصر حتى يستخدم الفريق النظام بدون تعقيد.",
          en: "Clearer interfaces and shorter paths so teams can use the system without friction.",
        },
      },
      {
        id: "integration",
        title: { ar: "التكامل", en: "Integration" },
        description: {
          ar: "ربط الأنظمة والخدمات في مسار بيانات واحد بدل الجزر المنفصلة.",
          en: "Connect systems and services into one data path instead of isolated islands.",
        },
      },
      {
        id: "automation",
        title: { ar: "الأتمتة", en: "Automation" },
        description: {
          ar: "أتمتة المهام المتكررة لتقليل الخطأ اليدوي وتسريع الإجراءات.",
          en: "Automate repeating work to cut manual error and speed up procedures.",
        },
      },
    ],
  },
  {
    id: "itsm",
    icon: "kanbanFill",
    title: {
      ar: "إدارة خدمات تقنية المعلومات (ITSM)",
      en: "IT Service Management (ITSM)",
    },
    shortTitle: {
      ar: "إدارة خدمات ITSM",
      en: "IT Service Management",
    },
    teaser: {
      ar: "تشغيل خدمات تقنية المعلومات من مكتب الخدمة حتى اتفاقيات SLA.",
      en: "IT service operations from service desk through SLAs.",
    },
    description: {
      ar: "تشغيل خدمات تقنية المعلومات وفق معايير واضحة من مكتب الخدمة حتى اتفاقيات SLA.",
      en: "IT service operations with a clear model from service desk through SLAs.",
    },
    offeringsTitle: {
      ar: "تشغيل خدمات بوضوح",
      en: "Service operations with clarity",
    },
    offeringsLede: {
      ar: "مكتب خدمة، حوادث، تغيير، أصول، واتفاقيات SLA — نموذج تشغيل يجعل الدعم قابلاً للقياس.",
      en: "Service desk, incidents, change, assets, and SLAs — an operating model that makes support measurable.",
    },
    items: [
      {
        id: "service-desk",
        title: { ar: "مكتب الخدمة", en: "Service Desk" },
        description: {
          ar: "نقطة تواصل واحدة للطلبات والدعم مع مسار واضح من الاستلام حتى الإغلاق.",
          en: "A single point of contact for requests and support, from intake to close.",
        },
      },
      {
        id: "itom",
        title: { ar: "إدارة العمليات التقنية (ITOM)", en: "ITOM" },
        description: {
          ar: "متابعة البنية والخدمات لمعرفة حالة التشغيل قبل أن تتحول إلى انقطاع.",
          en: "Watch infrastructure and services so operations issues are seen before they become outages.",
        },
      },
      {
        id: "incident",
        title: { ar: "إدارة الحوادث", en: "Incident" },
        description: {
          ar: "استجابة منظمة للحوادث تقلّل وقت التعطل وتعيد الخدمة وفق أولوية واضحة.",
          en: "Structured incident response that cuts downtime and restores service by priority.",
        },
      },
      {
        id: "change",
        title: { ar: "إدارة التغيير", en: "Change" },
        description: {
          ar: "تغييرات محسوبة على الأنظمة مع تقييم أثر وموافقة قبل التنفيذ.",
          en: "Controlled system changes with impact review and approval before go-live.",
        },
      },
      {
        id: "asset",
        title: { ar: "إدارة الأصول", en: "Asset" },
        description: {
          ar: "جرد وتتبع للأصول التقنية طوال دورة حياتها من الشراء حتى الإخراج.",
          en: "Inventory and tracking for IT assets across their full lifecycle.",
        },
      },
      {
        id: "sla",
        title: { ar: "اتفاقيات مستوى الخدمة (SLA)", en: "SLA" },
        description: {
          ar: "التزامات زمنية وجودة خدمة يمكن قياسها ومراجعتها مع الإدارة والعملاء.",
          en: "Time and quality commitments that can be measured and reviewed with leadership and clients.",
        },
      },
    ],
  },
  {
    id: "infrastructure",
    icon: "server",
    title: {
      ar: "البنية التحتية ومراكز البيانات",
      en: "Infrastructure & Data Centers",
    },
    shortTitle: {
      ar: "مراكز البيانات",
      en: "Data Centers",
    },
    teaser: {
      ar: "شبكات وخوادم وتخزين وافتراضية مع نسخ احتياطي موثوق.",
      en: "Networks, servers, storage, and virtualization with reliable backup.",
    },
    description: {
      ar: "شبكات وخوادم وتخزين وافتراضية ومراكز بيانات مع نسخ احتياطي موثوق.",
      en: "Networks, servers, storage, virtualization, and data centers with reliable backup.",
    },
    offeringsTitle: {
      ar: "أساس تقني يعتمد عليه",
      en: "Infrastructure you can rely on",
    },
    offeringsLede: {
      ar: "شبكات، خوادم، تخزين، افتراضية، ومراكز بيانات مع نسخ احتياطي يحمي التشغيل اليومي.",
      en: "Networks, servers, storage, virtualization, and data centers with backup that protects daily operations.",
    },
    items: [
      {
        id: "networks",
        title: { ar: "الشبكات", en: "Networks" },
        description: {
          ar: "تصميم وتشغيل شبكات مستقرة تربط الفروع والأنظمة بأداء وأمان واضح.",
          en: "Design and operate stable networks that connect branches and systems with clear performance and security.",
        },
      },
      {
        id: "servers",
        title: { ar: "الخوادم", en: "Servers" },
        description: {
          ar: "خوادم مُدارة بكفاءة لتطبيقاتك الحرجة مع مراقبة وتوافر مستمر.",
          en: "Efficiently managed servers for critical apps, with monitoring and steady availability.",
        },
      },
      {
        id: "storage",
        title: { ar: "التخزين", en: "Storage" },
        description: {
          ar: "حلول تخزين تتوسع مع البيانات وتبقي الوصول سريعاً ومنظماً.",
          en: "Storage that grows with your data and keeps access fast and organized.",
        },
      },
      {
        id: "virtualization",
        title: { ar: "الافتراضية", en: "Virtualization" },
        description: {
          ar: "بيئات افتراضية تستغل الموارد أفضل وتسهّل النقل والتوسعة.",
          en: "Virtual environments that use resources better and make move and scale simpler.",
        },
      },
      {
        id: "data-center",
        title: { ar: "مراكز البيانات", en: "Data Center" },
        description: {
          ar: "تجهيز وتشغيل مراكز بيانات بمعايير تبريد، طاقة، وأمن فيزيائي.",
          en: "Build and operate data centers with cooling, power, and physical security standards.",
        },
      },
      {
        id: "backup",
        title: { ar: "النسخ الاحتياطي", en: "Backup" },
        description: {
          ar: "نسخ منتظم واستعادة مختبرة حتى لا يبقى التعافي مجرد افتراض.",
          en: "Regular backups with tested restore, so recovery is proven — not assumed.",
        },
      },
    ],
  },
  {
    id: "cybersecurity",
    icon: "shieldAlt",
    title: {
      ar: "الأمن السيبراني",
      en: "Cybersecurity",
    },
    shortTitle: {
      ar: "الأمن السيبراني",
      en: "Cybersecurity",
    },
    teaser: {
      ar: "حماية متكاملة بالمراقبة والكشف واختبار الاختراق وإدارة الهويات.",
      en: "Protection with monitoring, detection, pentesting, and identity control.",
    },
    description: {
      ar: "حماية متكاملة للعمليات الرقمية: مراقبة، كشف، اختبار اختراق، وإدارة الهويات.",
      en: "End-to-end digital protection: monitoring, detection, pentesting, and identity control.",
    },
    offeringsTitle: {
      ar: "حماية متصلة بالتشغيل",
      en: "Security connected to operations",
    },
    offeringsLede: {
      ar: "مراقبة وكشف واختبار اختراق، مع إدارة هويات وصلاحيات وحوكمة أمنية واضحة.",
      en: "Monitoring, detection, and pentesting, with identity, privileged access, and clear security governance.",
    },
    items: [
      {
        id: "soc",
        title: { ar: "مركز العمليات الأمنية (SOC)", en: "SOC" },
        description: {
          ar: "مراقبة مستمرة للتهديدات مع تحليل واستجابة قبل أن يتسع الأثر.",
          en: "Continuous threat monitoring with analysis and response before impact spreads.",
        },
      },
      {
        id: "siem",
        title: { ar: "إدارة معلومات الأحداث الأمنية (SIEM)", en: "SIEM" },
        description: {
          ar: "تجميع الأحداث الأمنية في لوحة واحدة لكشف الأنماط والحوادث مبكراً.",
          en: "Collect security events in one view to spot patterns and incidents earlier.",
        },
      },
      {
        id: "pentest",
        title: { ar: "اختبار الاختراق", en: "Pentest" },
        description: {
          ar: "اختبار دفاعاتك كما يراها المهاجم، مع تقرير ثغرات وأولويات إصلاح.",
          en: "Test your defenses the way an attacker would, with findings and fix priorities.",
        },
      },
      {
        id: "iam",
        title: { ar: "إدارة الهويات والصلاحيات (IAM)", en: "IAM" },
        description: {
          ar: "من يحصل على ماذا، وبأي صلاحية، مع دورة حياة هوية واضحة.",
          en: "Who gets what, with which permission, and a clear identity lifecycle.",
        },
      },
      {
        id: "pam",
        title: { ar: "إدارة الحسابات ذات الصلاحيات (PAM)", en: "PAM" },
        description: {
          ar: "حماية الحسابات الحساسة وتسجيل استخدامها بدل الصلاحيات المفتوحة.",
          en: "Protect privileged accounts and log their use instead of leaving access wide open.",
        },
      },
      {
        id: "cyber-grc",
        title: { ar: "الحوكمة الأمنية (GRC)", en: "GRC" },
        description: {
          ar: "سياسات وضوابط أمنية قابلة للمراجعة ومتوافقة مع متطلبات الامتثال.",
          en: "Security policies and controls that can be audited and aligned with compliance needs.",
        },
      },
    ],
  },
  {
    id: "cloud-ai",
    icon: "cloud",
    title: {
      ar: "الحوسبة السحابية والبيانات والذكاء الاصطناعي",
      en: "Cloud, Data & Artificial Intelligence",
    },
    shortTitle: {
      ar: "البيانات والذكاء الاصطناعي",
      en: "Data & Artificial Intelligence",
    },
    teaser: {
      ar: "سحابة، تحليل بيانات، وذكاء اصطناعي يحوّل المعلومات إلى قرار.",
      en: "Cloud, analytics, and AI that turn data into decisions.",
    },
    description: {
      ar: "سحابة، تحليل بيانات، ذكاء أعمال، وحلول ذكاء اصطناعي قابلة للقياس.",
      en: "Cloud, data analytics, business intelligence, and measurable AI solutions.",
    },
    offeringsTitle: {
      ar: "بيانات تتحوّل إلى قرار",
      en: "Data that becomes a decision",
    },
    offeringsLede: {
      ar: "سحابة، تحليلات، ذكاء أعمال، وحلول ذكاء اصطناعي وتعلم آلة يمكن قياس أثرها.",
      en: "Cloud, analytics, business intelligence, and AI/ML solutions with measurable impact.",
    },
    items: [
      {
        id: "cloud",
        title: { ar: "الحوسبة السحابية", en: "Cloud" },
        description: {
          ar: "بناء وتشغيل بيئات سحابية مرنة مع ضبط تكلفة وأمان منذ البداية.",
          en: "Build and run flexible cloud environments with cost and security set from day one.",
        },
      },
      {
        id: "data-analytics",
        title: { ar: "تحليل البيانات", en: "Data Analytics" },
        description: {
          ar: "تحويل البيانات المتفرقة إلى مؤشرات تساعدك تتخذ قراراً أسرع.",
          en: "Turn scattered data into indicators that help you decide faster.",
        },
      },
      {
        id: "bi",
        title: { ar: "ذكاء الأعمال (BI)", en: "BI" },
        description: {
          ar: "لوحات ومتابعة أداء تربط الأرقام اليومية بأهداف الإدارة.",
          en: "Dashboards and performance views that connect daily numbers to leadership goals.",
        },
      },
      {
        id: "ai",
        title: { ar: "الذكاء الاصطناعي", en: "AI" },
        description: {
          ar: "حالات استخدام ذكاء اصطناعي مرتبطة بعملية حقيقية لا بتجربة استعراضية.",
          en: "AI use cases tied to a real process, not a demo for its own sake.",
        },
      },
      {
        id: "ml",
        title: { ar: "تعلم الآلة", en: "ML" },
        description: {
          ar: "نماذج تتعلم من بياناتك لتحسين التوقع، التصنيف، أو الأتمتة.",
          en: "Models that learn from your data to improve forecasting, classification, or automation.",
        },
      },
    ],
  },
  {
    id: "managed",
    icon: "cogs",
    title: {
      ar: "الخدمات المدارة والتشغيل والصيانة",
      en: "Managed Services, Operations & Maintenance",
    },
    shortTitle: {
      ar: "الخدمات المدارة",
      en: "Managed Services",
    },
    teaser: {
      ar: "تشغيل ودعم ومراقبة وصيانة بمسؤوليات واضحة على مدار الساعة.",
      en: "Operations, monitoring, support, and maintenance with clear ownership.",
    },
    description: {
      ar: "تشغيل ودعم ومراقبة وصيانة تقنية معلومات مُدارة بمسؤوليات واضحة.",
      en: "Managed IT operations, monitoring, support, and maintenance with clear ownership.",
    },
    offeringsTitle: {
      ar: "تشغيل يومي بملكية واضحة",
      en: "Day-to-day operations with clear ownership",
    },
    offeringsLede: {
      ar: "خدمات مدارة، مراقبة، دعم، وصيانة حتى يبقى النظام تحت السيطرة دون أن تتحمل التفاصيل وحدك.",
      en: "Managed services, monitoring, support, and maintenance so the system stays in control without you carrying every detail.",
    },
    items: [
      {
        id: "managed-it",
        title: { ar: "تقنية معلومات مدارة", en: "Managed IT" },
        description: {
          ar: "تشغيل بيئتك التقنية كخدمة مستمرة بمسؤوليات ومستويات دعم متفق عليها.",
          en: "Run your IT environment as an ongoing service, with agreed ownership and support levels.",
        },
      },
      {
        id: "operations",
        title: { ar: "التشغيل", en: "Operations" },
        description: {
          ar: "إجراءات تشغيل يومية تبقي الأنظمة مستقرة وواضحة لمن يتابعها.",
          en: "Daily operating procedures that keep systems stable and clear for whoever is watching them.",
        },
      },
      {
        id: "monitoring",
        title: { ar: "المراقبة", en: "Monitoring" },
        description: {
          ar: "إنذار مبكر للأداء والتوافر حتى يُعالج الخلل قبل المستخدم.",
          en: "Early signals on performance and availability so issues are handled before users feel them.",
        },
      },
      {
        id: "support",
        title: { ar: "الدعم", en: "Support" },
        description: {
          ar: "دعم فني بمستويات واضحة ووقت استجابة يناسب حرجية الخدمة.",
          en: "Technical support with clear tiers and response times that match service criticality.",
        },
      },
      {
        id: "maintenance",
        title: { ar: "الصيانة", en: "Maintenance" },
        description: {
          ar: "صيانة وقائية وتحديثات مخططة تقلّل المفاجآت وتطيل عمر الأنظمة.",
          en: "Preventive maintenance and planned updates that cut surprises and extend system life.",
        },
      },
    ],
  },
  {
    id: "elv",
    icon: "camera",
    title: {
      ar: "الأنظمة الأمنية والتيار الخفيف (ELV)",
      en: "Security Systems & ELV",
    },
    shortTitle: {
      ar: "الأنظمة الأمنية ELV",
      en: "Security Systems & ELV",
    },
    teaser: {
      ar: "كاميرات، تحكم بالدخول، كابلات، وأنظمة صوت وصورة متكاملة.",
      en: "CCTV, access control, cabling, and integrated AV systems.",
    },
    description: {
      ar: "كاميرات، تحكم في الدخول، كابلات، أنظمة صوتية ومرئية، وإنتركم.",
      en: "CCTV, access control, cabling, AV systems, and intercom.",
    },
    offeringsTitle: {
      ar: "أنظمة أمنية في منظومة واحدة",
      en: "Security systems in one setup",
    },
    offeringsLede: {
      ar: "كاميرات، تحكم بالدخول، كابلات، صوت وصورة، وإنتركم — تركيب وتكامل يعمل كطبقة واحدة.",
      en: "CCTV, access control, cabling, AV, and intercom — installed and integrated as one layer.",
    },
    items: [
      {
        id: "cctv",
        title: { ar: "كاميرات المراقبة", en: "CCTV" },
        description: {
          ar: "تغطية مراقبة واضحة مع تسجيل واسترجاع يسهل الرجوع إليه عند الحاجة.",
          en: "Clear camera coverage with recording and playback you can actually use when needed.",
        },
      },
      {
        id: "access-control",
        title: { ar: "التحكم في الدخول", en: "Access Control" },
        description: {
          ar: "تحديد من يدخل وأين ومتى، مع سجل حركة يمكن مراجعته.",
          en: "Control who enters, where, and when, with an access log you can review.",
        },
      },
      {
        id: "cabling",
        title: { ar: "الكابلات", en: "Cabling" },
        description: {
          ar: "بنية كابلات منظمة للشبكات والأنظمة الأمنية تدعم التوسعة لاحقاً.",
          en: "Structured cabling for networks and security systems that can grow later.",
        },
      },
      {
        id: "av",
        title: { ar: "الأنظمة الصوتية والمرئية", en: "AV" },
        description: {
          ar: "قاعات واجتماعات بأنظمة صوت وصورة واضحة وسهلة التشغيل.",
          en: "Rooms and meetings with clear audio-visual systems that are simple to run.",
        },
      },
      {
        id: "intercom",
        title: { ar: "الإنتركم", en: "Intercom" },
        description: {
          ar: "اتصال داخلي سريع بين المداخل والنقاط الأمنية والإدارة.",
          en: "Fast internal communication between entrances, security points, and management.",
        },
      },
    ],
  },
  {
    id: "training",
    icon: "graduationCap",
    title: {
      ar: "التدريب والتطوير",
      en: "Training & Development",
    },
    shortTitle: {
      ar: "التدريب والتطوير",
      en: "Training & Development",
    },
    teaser: {
      ar: "برامج تدريب تقنية ترفع كفاءة الفرق في الأمن والسحابة وITSM.",
      en: "Technical programs that lift teams in security, cloud, and ITSM.",
    },
    description: {
      ar: "برامج تدريب تقنية متخصصة للفرق والمؤسسات في أبرز المجالات.",
      en: "Specialized technical training programs for teams and organizations.",
    },
    offeringsTitle: {
      ar: "فرق أقدر على التقنية",
      en: "Teams more capable with technology",
    },
    offeringsLede: {
      ar: "برامج تدريب في تقنية المعلومات، الأمن، السحابة، وITSM مصممة لفرق العمل لا للعرض النظري فقط.",
      en: "Training in IT, security, cloud, and ITSM designed for working teams — not theory alone.",
    },
    items: [
      {
        id: "training-it",
        title: { ar: "تقنية المعلومات", en: "IT" },
        description: {
          ar: "تدريب عملي على أساسيات وأنظمة تقنية المعلومات التي يستخدمها الفريق يومياً.",
          en: "Practical training on the IT systems and fundamentals your team uses every day.",
        },
      },
      {
        id: "training-cyber",
        title: { ar: "الأمن السيبراني", en: "Cybersecurity" },
        description: {
          ar: "رفع وعي الفريق وقدرته على التعامل مع التهديدات والسياسات الأمنية.",
          en: "Raise the team’s awareness and ability to handle threats and security policy.",
        },
      },
      {
        id: "training-cloud",
        title: { ar: "الحوسبة السحابية", en: "Cloud" },
        description: {
          ar: "تأهيل الفريق لتشغيل الخدمات السحابية وفهم التكلفة والحماية.",
          en: "Prepare the team to run cloud services and understand cost and protection.",
        },
      },
      {
        id: "training-itsm",
        title: { ar: "إدارة خدمات تقنية المعلومات", en: "ITSM" },
        description: {
          ar: "تدريب على نماذج ITSM ليصبح الدعم والتشغيل بلغة وإجراءات موحّدة.",
          en: "ITSM training so support and operations share one language and one set of procedures.",
        },
      },
      {
        id: "corporate-training",
        title: { ar: "التدريب المؤسسي", en: "Corporate Training" },
        description: {
          ar: "مسارات تدريب مخصصة لمؤسستك حسب الأدوار ومستوى الفريق.",
          en: "Custom learning paths for your organization, by role and team level.",
        },
      },
    ],
  },
];

export function getServiceCategory(id) {
  return SERVICES_MENU.find((service) => service.id === id) || null;
}

export function getServiceItem(id) {
  for (const category of SERVICES_MENU) {
    const item = category.items.find((entry) => entry.id === id);
    if (item) {
      return { category, item };
    }
  }

  return null;
}
