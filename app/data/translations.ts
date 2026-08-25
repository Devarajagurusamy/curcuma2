export interface TranslationType {
  nav: {
    home: string;
    story: string;
    benefits: string;
    science: string;
    reviews: string;
    faq: string;
    orderNow: string;
  };
  trustBadges: {
    badge1Title: string;
    badge1Sub: string;
    badge2Title: string;
    badge2Sub: string;
    badge3Title: string;
    badge3Sub: string;
    badge4Title: string;
    badge4Sub: string;
    badge5Title: string;
    badge5Sub: string;
  };
  story: {
    tag: string;
    mainTitlePrefix: string;
    mainTitleHighlight: string;
    subtitle: string;
    badgeText: string;
    steps: {
      step: string;
      subtitle: string;
      title: string;
      description: string;
      imageAlt: string;
    }[];
    missionQuote: string;
  };
  benefits: {
    tag: string;
    mainTitle: string;
    highlight: string;
    subtitle: string;
    items: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  science: {
    tag: string;
    mainTitle: string;
    description: string;
    cta: string;
    verifiedBadge: string;
    meaningTitle: string;
    provenTitle: string;
    close: string;
    getStarted: string;
    docs: {
      id: string;
      title: string;
      institution: string;
      docNumber: string;
      type: string;
      summary: string;
      keyFindings: string[];
    }[];
  };
  reviews: {
    tag: string;
    mainTitle: string;
    verifiedCount: string;
    items: {
      id: string;
      name: string;
      age: number;
      location: string;
      quote: string;
    }[];
  };
  pricing: {
    headline: string;
    subheadline: string;
    guarantee1: string;
    guarantee2: string;
    guarantee3: string;
    guarantee4: string;
    trust1: string;
    trust2: string;
    trust3: string;
    dosageTitle: string;
    dosageDaily: string;
    dosageNote: string;
    careTitle: string;
    careDesc: string;
    orderNow: string;
    save: string;
    bestValue: string;
    mostPopularRibbon: string;
    capsules1: string;
    capsules2: string;
    capsules3: string;
  };
  faq: {
    tag: string;
    mainTitle: string;
    subtitle: string;
    tabs: {
      all: string;
      science: string;
      usage: string;
      safety: string;
      shipping: string;
    };
    helpBoxTitle: string;
    helpBoxDesc: string;
    helpBoxCta: string;
    items: {
      id: number;
      category: "all" | "science" | "usage" | "safety" | "shipping";
      question: string;
      answer: string;
    }[];
  };
  orderModal: {
    headerTitle: string;
    headerStock: string;
    step1Title: string;
    step1FreeDelivery: string;
    step2Title: string;
    step3Title: string;
    labelFullName: string;
    labelPhone: string;
    labelAddress: string;
    labelPostcode: string;
    labelState: string;
    payCod: string;
    payFpx: string;
    payTng: string;
    summarySelected: string;
    summaryDelivery: string;
    summaryDeliveryFree: string;
    summarySavings: string;
    summaryTotal: string;
    ctaSubmit: string;
    guaranteeText: string;
    safeText: string;
    successTag: string;
    successTitle: string;
    successDesc: string;
    receiptRef: string;
    receiptRoutine: string;
    receiptTotal: string;
    receiptPayment: string;
    receiptDeliveringTo: string;
    btnReturn: string;
    btnWhatsApp: string;
    mostPopularBadge: string;
  };
  footer: {
    desc: string;
    companyTitle: string;
    companySub: string;
    companyAddress: string;
    colExplore: string;
    colHelp: string;
    colContact: string;
    workHours: string;
    disclaimer: string;
    rights: string;
    links: {
      story: string;
      benefits: string;
      science: string;
      reviews: string;
      order: string;
      faq: string;
      guarantee: string;
      shipping: string;
      privacy: string;
      terms: string;
    };
  };
}

export const translations: Record<"en" | "bm", TranslationType> = {
  en: {
    nav: {
      home: "HOME",
      story: "OUR STORY",
      benefits: "BENEFITS",
      science: "SCIENCE",
      reviews: "REVIEWS",
      faq: "FAQ",
      orderNow: "ORDER NOW",
    },
    trustBadges: {
      badge1Title: "Backed by Science",
      badge1Sub: "Tested by top universities",
      badge2Title: "Fast Natural Relief",
      badge2Sub: "Absorbs quickly for daily energy",
      badge3Title: "100% Pure & Clean",
      badge3Sub: "Zero harmful chemicals or fillers",
      badge4Title: "Gentle on Stomach",
      badge4Sub: "Certified safe & Halal verified",
      badge5Title: "Made with Care",
      badge5Sub: "Pure Malaysian harvest you can trust",
    },
    story: {
      tag: "A TRUE STORY OF HEALING",
      mainTitlePrefix: "A Natural Gift From 1930 for Your",
      mainTitleHighlight: "Everyday Energy & Comfort",
      subtitle: "From a family's miraculous healing to your daily morning routine — pure, comforting, and backed by caring science.",
      badgeText: "NATURE\nMEETS\nWELLNESS",
      steps: [
        {
          step: "01",
          subtitle: "1930s Discovery",
          title: "A Search for Real Healing",
          description: "Our founder brought pure black turmeric to his family, searching for a natural way to relieve deep fatigue, ease body aches, and restore strength.",
          imageAlt: "Founder at plantation homestead",
        },
        {
          step: "02",
          subtitle: "Johor Homestead",
          title: "Standing Strong Again",
          description: "When a family member was too weak to get out of bed, drinking this fresh herbal tea helped them regain energy, walk comfortably, and smile again.",
          imageAlt: "Fresh cut black turmeric rhizomes with rich purple interior",
        },
        {
          step: "03",
          subtitle: "Tested & Certified",
          title: "Clean & Safe for Your Body",
          description: "Official laboratory tests proved it is naturally rich in soothing nutrients, very low in sugar and salt, and 100% safe for daily family wellness.",
          imageAlt: "Laboratory analysis and safety test report",
        },
        {
          step: "04",
          subtitle: "Your Daily Routine",
          title: "A Cup of Warm Comfort",
          description: "Carefully prepared so you can easily enjoy lighter joints, calm digestion, and fresh morning energy every single day.",
          imageAlt: "Daily herbal coffee and wellness ritual",
        },
      ],
      missionQuote: "“No one deserves to live with constant knee aches, tired mornings, or uncomfortable bloating. Our family’s goal is simple: to help you wake up feeling lighter, happier, and full of life for the people you love.”",
    },
    benefits: {
      tag: "FEEL THE DIFFERENCE EVERY DAY",
      mainTitle: "9 Simple Ways Black Turmeric",
      highlight: "Helps You Feel Your Best",
      subtitle: "Clear, proven natural benefits to help you move freely, digest peacefully, and live without daily discomfort.",
      items: [
        {
          number: "01",
          title: "Twice as Powerful as Regular Turmeric",
          description: "Absorbs faster and goes deeper to soothe your body and restore vitality where you need it most.",
        },
        {
          number: "02",
          title: "Comfortable Knees & Easy Movement",
          description: "Say goodbye to stiff, aching joints so you can walk, bend, pray, and play with your family with ease.",
        },
        {
          number: "03",
          title: "Steady Blood Sugar & Lasting Energy",
          description: "Prevents that heavy, sleepy feeling after meals and keeps your daily energy smooth all day long.",
        },
        {
          number: "04",
          title: "Loving Care for Liver & Kidneys",
          description: "Gently cleanses and shields your vital organs from daily stress, heavy foods, and long-term medications.",
        },
        {
          number: "05",
          title: "Smooth, Healthy Blood Circulation",
          description: "Keeps your blood flowing smoothly so your hands, feet, and whole body feel warm and energized.",
        },
        {
          number: "06",
          title: "Gentle Relief from Cramps & Tightness",
          description: "Naturally relaxes tight muscles to soothe monthly period pain and uncomfortable stomach cramps.",
        },
        {
          number: "07",
          title: "Happy Tummy & Goodbye Bloating",
          description: "Quickly calms trapped wind, indigestion, and acid burn so you can enjoy meals with peace of mind.",
        },
        {
          number: "08",
          title: "Clear Mind & Sharp Focus",
          description: "Lifts morning brain fog, strengthens your memory, and keeps you alert and refreshed all day.",
        },
        {
          number: "09",
          title: "Strong Everyday Family Immunity",
          description: "Naturally strengthens your body's daily defenses so you stay resilient, healthy, and active.",
        },
      ],
    },
    science: {
      tag: "PROVEN CARE & RESEARCH",
      mainTitle: "Real Research You Can Trust With Your Health",
      description: "We tested our pure black turmeric with leading Malaysian universities so you and your family can enjoy complete peace of mind.",
      cta: "TRY OUR PROVEN HERBS",
      verifiedBadge: "University Verified Test",
      meaningTitle: "What This Means For Your Health:",
      provenTitle: "Key Proven Benefits:",
      close: "Close",
      getStarted: "Get Started Today",
      docs: [
        {
          id: "upm-coa",
          title: "UPM University Lab Test",
          institution: "Universiti Putra Malaysia (UPM)",
          docNumber: "COA-UPM-2024-CC88",
          type: "Purity & Quality Verification",
          summary: "Official laboratory testing confirms pure, active strength with zero toxic chemicals, heavy metals, or artificial additives.",
          keyFindings: [
            "100% pure botanical black turmeric verified",
            "Completely free from heavy metals and pesticides",
            "Twice the natural active strength of yellow turmeric",
          ],
        },
        {
          id: "upm-report",
          title: "Natural Pain & Swelling Relief Study",
          institution: "Universiti Putra Malaysia (UPM)",
          docNumber: "REP-BIO-2024-411",
          type: "Joint & Tissue Comfort Study",
          summary: "Proves how black turmeric gently calms joint soreness, reduces morning stiffness, and shields cartilage without stomach irritation.",
          keyFindings: [
            "Rapid natural soothing for aching joints and muscles",
            "98%+ safe cell protection in human cartilage models",
            "Powerful natural antioxidant defense",
          ],
        },
        {
          id: "chemical-profiling",
          title: "Pure Plant Nutrients Study",
          institution: "Malaysian Phytochemistry Institute",
          docNumber: "MPI-CHEM-2024-87",
          type: "Active Nutrients Analysis",
          summary: "Identifies 26 distinct, naturally occurring healing compounds working together to restore bodily stamina and energy.",
          keyFindings: [
            "26 distinct active plant nutrients cataloged",
            "Stable therapeutic essential oils for long-lasting freshness",
            "Zero synthetic or artificial chemicals detected",
          ],
        },
        {
          id: "metabolites-id",
          title: "2.4x Stronger Than Yellow Turmeric",
          institution: "National Biotechnology Division",
          docNumber: "NBD-METAB-2024",
          type: "Potency Comparison Test",
          summary: "Comparative analysis proving black turmeric delivers 2.4x higher antioxidant power and cell protection than common yellow turmeric.",
          keyFindings: [
            "2.4x higher free radical protection than yellow turmeric",
            "Packed with deep purple anthocyanin antioxidants",
            "Stable, all-day digestive comfort",
          ],
        },
        {
          id: "bioavailability",
          title: "Fast Absorption & Daily Energy Study",
          institution: "Universiti Teknologi Malaysia (UTM)",
          docNumber: "UTM-PHARM-2024-19",
          type: "Bodily Absorption Test",
          summary: "Clinical trial showing how quickly and completely your body absorbs black turmeric nutrients to keep you active and pain-free all day.",
          keyFindings: [
            "Reaches peak body absorption within 45 minutes",
            "94.2% sustained all-day cellular uptake",
            "Easy and gentle on sensitive stomachs",
          ],
        },
        {
          id: "melaka-biotech",
          title: "Certified Clean & Healthy Analysis",
          institution: "Melaka Biotechnology Corporation",
          docNumber: "MBC-2025-CF-0380",
          type: "Nutrition & Safety Certificate",
          summary: "Certified test results confirming very low sodium (12mg), low sugar (3.4g), and zero harmful chemical residues.",
          keyFindings: [
            "Very low sugar (3.4g) safe for daily health",
            "Very low sodium (12mg) safe for heart health",
            "100% free of heavy metals and harmful germs",
          ],
        },
      ],
    },
    reviews: {
      tag: "REAL PEOPLE • REAL RELIEF",
      mainTitle: "Loved by Malaysian Families",
      verifiedCount: "482 Grateful Customer Stories",
      items: [
        {
          id: "1",
          name: "Puan Halimah",
          age: 52,
          location: "Johor Bahru",
          quote: "“My knee pain used to keep me from playing with my grandkids. Now my knees feel so much lighter, and I wake up every morning with a smile.”",
        },
        {
          id: "2",
          name: "Encik Farid",
          age: 45,
          location: "Kuala Lumpur",
          quote: "“After long work days, I used to feel totally drained. Taking 2 capsules daily gave me back my energy to enjoy evenings with my children.”",
        },
        {
          id: "3",
          name: "Nurul A.",
          age: 28,
          location: "Shah Alam",
          quote: "“My monthly cramps used to leave me stuck in bed in tears. Now my cycle is smooth, gentle, and I feel comfortable all month.”",
        },
        {
          id: "4",
          name: "Uncle Tan",
          age: 64,
          location: "Penang",
          quote: "“My morning finger stiffness and sugar levels bothered me for years. Black turmeric has been such a blessing for my daily peace of mind.”",
        },
        {
          id: "5",
          name: "Puan Rosnah",
          age: 58,
          location: "Ipoh",
          quote: "“Trapped stomach wind and bloating made me afraid to eat. Within a week, my tummy felt calm, and I finally sleep peacefully through the night.”",
        },
        {
          id: "6",
          name: "Haji Zulkifli",
          age: 61,
          location: "Melaka",
          quote: "“Alhamdulillah, bending my knees during daily prayers feels smooth and painless again. Pure, natural herbs that truly care for your body.”",
        },
      ],
    },
    pricing: {
      headline: "CHOOSE YOUR\nHEALING ROUTINE",
      subheadline: "Take the first step toward pain-free mornings and vibrant daily energy.",
      guarantee1: "30-Day Money Back Guarantee",
      guarantee2: "Free Home Delivery (West Malaysia)",
      guarantee3: "Pay at Doorstep (COD Available)",
      guarantee4: "100% Safe & Secure Checkout",
      trust1: "100% Pure\n& Clean",
      trust2: "Fast, Gentle\nDelivery",
      trust3: "Loved &\nTrusted",
      dosageTitle: "HOW TO TAKE FOR\nBEST RESULTS",
      dosageDaily: "2 capsules daily",
      dosageNote: "Take after breakfast with a warm glass of water.",
      careTitle: "GENTLE CARE NOTE",
      careDesc: "If you are pregnant, nursing, or taking prescription medicine, we always recommend consulting your doctor first.",
      orderNow: "ORDER NOW",
      save: "SAVE",
      bestValue: "BEST VALUE",
      mostPopularRibbon: "MOST POPULAR • FULL RECOVERY",
      capsules1: "60 Capsules • 1-Month Trial",
      capsules2: "120 Capsules • 2-Month Routine",
      capsules3: "180 Capsules • 3-Month Deep Care",
    },
    faq: {
      tag: "CLEAR, HONEST ANSWERS",
      mainTitle: "Frequently Asked Questions",
      subtitle: "Simple, honest answers to help you and your family make the best choice for your daily health.",
      tabs: {
        all: "All Questions",
        science: "Why Black Turmeric",
        usage: "How to Take",
        safety: "Safety & Halal",
        shipping: "Delivery & Guarantee",
      },
      helpBoxTitle: "Need a friendly word or have questions?",
      helpBoxDesc: "Our caring team is here to listen and help you on WhatsApp anytime.",
      helpBoxCta: "CHAT WITH US ON WHATSAPP",
      items: [
        {
          id: 1,
          category: "science",
          question: "Why is Black Turmeric so much better than normal yellow turmeric?",
          answer: "Black turmeric is a rare, powerful healing herb. Unlike ordinary cooking turmeric, authentic black turmeric contains twice the active healing strength (ar-Curcumene) and deep purple natural antioxidants. Your body absorbs it much faster and easier, so you feel soothing relief in your knees, digestion, and daily energy without having to take black pepper or chemical boosters.",
        },
        {
          id: 2,
          category: "usage",
          question: "How and when should I take my daily capsules?",
          answer: "Simply take 2 capsules once every day with a warm glass of water, ideally in the morning after your breakfast. Drinking plenty of water throughout the day helps your body gently absorb all the natural nutrients. Taking it every day for 3 to 4 weeks gives your body the deep, lasting relief it needs.",
        },
        {
          id: 3,
          category: "safety",
          question: "Is this product Halal, certified safe, and clean?",
          answer: "Yes, 100%. Our black turmeric is grown cleanly in Malaysia and prepared in certified facilities approved by the Ministry of Health (MeSTI) and certified Halal by JAKIM. The capsules are 100% vegetarian plant capsules with zero chemicals, zero heavy metals, and zero artificial fillers.",
        },
        {
          id: 4,
          category: "safety",
          question: "Can I take this if I have high blood pressure, diabetes, or take daily medication?",
          answer: "Yes! University studies show black turmeric is gentle on the body and helps support healthy blood sugar balance and smooth blood flow. If you are taking prescription medicine, we simply recommend leaving 1 to 2 hours between your regular medicine and your black turmeric, or checking with your family doctor.",
        },
        {
          id: 5,
          category: "usage",
          question: "How fast will I start feeling better?",
          answer: "Many customers tell us their stomach bloating, trapped gas, and tiredness begin feeling better within the first 3 to 7 days. For deeper comfort—like easier knee bending, lighter morning joints, and restful sleep—you will notice a wonderful difference after 2 to 3 weeks of daily routine.",
        },
        {
          id: 6,
          category: "shipping",
          question: "What is your 30-Day Money Back Guarantee?",
          answer: "We want you to feel completely comfortable and cared for. If you try our black turmeric and do not feel a positive difference in your daily wellness within 30 days, just reach out to our friendly support team on WhatsApp for a hassle-free exchange or full refund.",
        },
        {
          id: 7,
          category: "shipping",
          question: "How long does delivery take, and can I pay upon delivery (COD)?",
          answer: "We pack your order with care and ship within 24 hours. West Malaysia orders arrive at your doorstep in 1 to 3 working days with Free Shipping. Sabah & Sarawak orders arrive in 3 to 5 days. You can easily choose Cash on Delivery (COD) to pay the courier directly when your parcel arrives safely.",
        },
      ],
    },
    orderModal: {
      headerTitle: "Express Order • Delivered to Your Doorstep",
      headerStock: "Fresh Harvest in Stock • Ships Today",
      step1Title: "Choose Your Healing Routine",
      step1FreeDelivery: "Free Nationwide Delivery (WM)",
      step2Title: "Where Should We Deliver Your Package?",
      step3Title: "How Would You Like to Pay?",
      labelFullName: "Full Name *",
      labelPhone: "Phone Number (WhatsApp) *",
      labelAddress: "Street Delivery Address *",
      labelPostcode: "Postcode *",
      labelState: "State *",
      payCod: "Pay on Delivery (COD)",
      payFpx: "Online Banking (FPX)",
      payTng: "TnG eWallet / QR",
      summarySelected: "Selected Package",
      summaryDelivery: "Doorstep Delivery",
      summaryDeliveryFree: "FREE (West Malaysia)",
      summarySavings: "Your Savings Today",
      summaryTotal: "Total Amount:",
      ctaSubmit: "CONFIRM MY ORDER",
      guaranteeText: "30-Day Money Back Guarantee",
      safeText: "100% Safe & Private",
      successTag: "Order Placed Successfully!",
      successTitle: "Thank You",
      successDesc: "We are preparing your fresh black turmeric harvest with love and care. You are taking a wonderful step toward feeling lighter, happier, and pain-free every day.",
      receiptRef: "Order Reference:",
      receiptRoutine: "Selected Routine:",
      receiptTotal: "Total Amount:",
      receiptPayment: "Payment Method:",
      receiptDeliveringTo: "Delivering To:",
      btnReturn: "Return to Home",
      btnWhatsApp: "Track on WhatsApp",
      mostPopularBadge: "MOST POPULAR",
    },
    footer: {
      desc: "Dedicated to bringing natural comfort, pain-free mobility, and peace of mind to Malaysian families through pure, authentic black turmeric.",
      companyTitle: "CURCUMA WELLNESS",
      companySub: "By Curcuma Wellness Sdn Bhd",
      companyAddress: "Level 12, Wellness Tower, Jalan Ampang, 50450 Kuala Lumpur, Malaysia.",
      colExplore: "EXPLORE",
      colHelp: "HELP & CARE",
      colContact: "WE ARE HERE FOR YOU",
      workHours: "Mon – Fri: 9:00 AM – 6:00 PM (MYT)",
      disclaimer: "* These statements have not been evaluated by health authorities. This product is not intended to diagnose, treat, cure, or prevent any disease.",
      rights: "© 2026 Curcuma Wellness Sdn Bhd. All rights reserved.",
      links: {
        story: "Our Healing Story",
        benefits: "Health Benefits",
        science: "University Research",
        reviews: "Customer Stories",
        order: "Order Your Bottle",
        faq: "Common Questions",
        guarantee: "30-Day Guarantee",
        shipping: "Shipping & Delivery",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
      },
    },
  },

  bm: {
    nav: {
      home: "UTAMA",
      story: "KISAH KAMI",
      benefits: "KHASIAT",
      science: "SAINS",
      reviews: "TESTIMONI",
      faq: "SOALAN LAZIM",
      orderNow: "PESAN SEKARANG",
    },
    trustBadges: {
      badge1Title: "Disokong Kajian Sains",
      badge1Sub: "Diuji makmal universiti terkemuka",
      badge2Title: "Kelegaan Semula Jadi",
      badge2Sub: "Mudah diserap untuk tenaga harian",
      badge3Title: "100% Tulen & Bersih",
      badge3Sub: "Tanpa bahan kimia atau campuran berbahaya",
      badge4Title: "Mesra Perut & Selamat",
      badge4Sub: "Disahkan selamat & Halal JAKIM",
      badge5Title: "Dihasilkan Dengan Rapi",
      badge5Sub: "Hasil tanaman Malaysia yang dipercayai",
    },
    story: {
      tag: "KISAH PENYEMBUHAN SEBENAR",
      mainTitlePrefix: "Khazanah Alam Sejak 1930 untuk",
      mainTitleHighlight: "Kecergasan & Keselesaan Harian Anda",
      subtitle: "Daripada kisah pemulihan sebuah keluarga hingga menjadi amalan harian anda — tulen, menyelesakan, dan disokong kajian saintifik.",
      badgeText: "ALAM\nSEMULA\nJADI",
      steps: [
        {
          step: "01",
          subtitle: "Penemuan 1930-an",
          title: "Pencarian Penawar Asli",
          description: "Pengasas kami membawa kunyit hitam tulen untuk keluarganya bagi melegakan keletihan kronik, sengal badan, dan mengembalikan tenaga fizikal.",
          imageAlt: "Pengasas di ladang kunyit hitam",
        },
        {
          step: "02",
          subtitle: "Kebun di Johor",
          title: "Kembali Gagah Berdiri",
          description: "Apabila ahli keluarga sukar bangun daripada katil, amalan air rebusan herba segar ini membantu mereka bertenaga, berjalan selesa, dan kembali tersenyum.",
          imageAlt: "Rizom kunyit hitam segar dengan isi ungu pekat",
        },
        {
          step: "03",
          subtitle: "Ujian & Pengiktirafan",
          title: "Bersih & Selamat Untuk Tubuh",
          description: "Ujian makmal rasmi membuktikan ia kaya dengan sebatian menenangkan, sangat rendah gula dan garam, serta 100% selamat untuk amalan seisi keluarga.",
          imageAlt: "Laporan analisis makmal dan sijil keselamatan",
        },
        {
          step: "04",
          subtitle: "Amalan Harian Anda",
          title: "Secawan Ketenangan",
          description: "Disediakan rapi supaya anda mudah menikmati lutut yang ringan, penghadaman yang tenang, dan tenaga segar setiap pagi.",
          imageAlt: "Ritual kesihatan dan kopi herba harian",
        },
      ],
      missionQuote: "“Tiada siapa yang wajar menanggung sakit lutut berterusan, keletihan setiap pagi, atau perut kembung berangin. Misi keluarga kami amat mudah: membantu anda bangun tidur dengan badan yang ringan, ceria, dan penuh bertenaga demi insan tersayang.”",
    },
    benefits: {
      tag: "RASAI PERBEZAANNYA SETIAP HARI",
      mainTitle: "9 Kebaikan Kunyit Hitam Tulen",
      highlight: "Untuk Kesihatan Optimum Anda",
      subtitle: "Khasiat semula jadi yang terbukti untuk membantu anda bergerak bebas, menghadam dengan selesa, dan hidup tanpa kesakitan harian.",
      items: [
        {
          number: "01",
          title: "2x Ganda Lebih Berkuasa Daripada Kunyit Biasa",
          description: "Menyerap lebih pantas dan bertindak jauh ke dalam tubuh untuk memulihkan kecergasan di bahagian yang memerlukan.",
        },
        {
          number: "02",
          title: "Lutut Selesa & Mudah Bergerak",
          description: "Ucapkan selamat tinggal kepada sendi kaku dan berdenyut — mudah berjalan, mencangkung, solat dengan lancar, dan bermain bersama cucu.",
        },
        {
          number: "03",
          title: "Gula Darah Stabil & Tenaga Berpanjangan",
          description: "Mengelakkan rasa berat dan mengantuk selepas makan serta mengekalkan tenaga stabil dari pagi hingga malam.",
        },
        {
          number: "04",
          title: "Perlindungan Mesra Hati & Buah Pinggang",
          description: "Membersihkan dan melindungi organ utama daripada kesan tekanan harian, makanan berat, dan pengambilan ubat-ubatan berpanjangan.",
        },
        {
          number: "05",
          title: "Pengaliran Darah Lancar & Segar",
          description: "Melancarkan peredaran darah agar tapak tangan, kaki, dan seluruh badan terasa hangat, ringan, dan bertenaga.",
        },
        {
          number: "06",
          title: "Kelegaan Lembut Daripada Kejang & Senggugut",
          description: "Merehatkan otot tegang secara semula jadi untuk melegakan senggugut bulanan dan kekejangan perut yang tidak selesa.",
        },
        {
          number: "07",
          title: "Perut Selesa & Bebas Kembung Angin",
          description: "Melegakan angin terperangkap, ketidakhadaman, dan pedih ulu hati dengan pantas agar anda dapat menikmati makanan kegemaran.",
        },
        {
          number: "08",
          title: "Fikiran Jelas & Kurang Kabur Minda",
          description: "Menghilangkan rasa kabur minda di waktu pagi, menguatkan daya ingatan, dan membuatkan anda kekal peka sepanjang hari.",
        },
        {
          number: "09",
          title: "Kekuatan Imuniti Seisi Keluarga",
          description: "Memperkukuh daya tahan semula jadi tubuh badan agar anda kekal sihat, cergas, dan terlindung daripada jangkitan.",
        },
      ],
    },
    science: {
      tag: "KAJIAN & BUKTI SAINS TERBUKTI",
      mainTitle: "Kajian Tulen Yang Boleh Dipercayai Demi Kesihatan Anda",
      description: "Kami menguji kunyit hitam tulen ini bersama universiti terkemuka di Malaysia agar anda dan keluarga dapat mengamalkannya dengan penuh yakin.",
      cta: "CUBA HERBA TERBUKTI KAMI",
      verifiedBadge: "Ujian Makmal Disahkan Universiti",
      meaningTitle: "Manfaatnya Kepada Kesihatan Anda:",
      provenTitle: "Kebaikan Utama Yang Terbukti:",
      close: "Tutup",
      getStarted: "Mula Amalkan Hari Ini",
      docs: [
        {
          id: "upm-coa",
          title: "Ujian Makmal Universiti Putra Malaysia",
          institution: "Universiti Putra Malaysia (UPM)",
          docNumber: "COA-UPM-2024-CC88",
          type: "Pengesahan Ketulenan & Kualiti",
          summary: "Ujian makmal rasmi mengesahkan kekuatan sebatian aktif tulen dengan sifar bahan kimia toksik, logam berat, atau bahan pengawet tiruan.",
          keyFindings: [
            "Disahkan 100% kunyit hitam botani tulen",
            "Bebas sepenuhnya daripada logam berat dan racun serangga",
            "Kekuatan aktif semula jadi dua kali ganda berbanding kunyit kuning",
          ],
        },
        {
          id: "upm-report",
          title: "Kajian Melegakan Sakit & Radang Sendi",
          institution: "Universiti Putra Malaysia (UPM)",
          docNumber: "REP-BIO-2024-411",
          type: "Kajian Keselesaan Sendi & Tisu",
          summary: "Membuktikan bagaimana kunyit hitam menenangkan rasa sakit sendi, mengurangkan kekakuan pagi, dan melindungi rawan tanpa memedihkan perut.",
          keyFindings: [
            "Pelegaan pantas semula jadi untuk sendi dan otot yang ngilu",
            "98%+ perlindungan sel selamat dalam model rawan manusia",
            "Pertahanan antioksidan semula jadi yang sangat kuat",
          ],
        },
        {
          id: "chemical-profiling",
          title: "Analisis Nutrien Tumbuhan Tulen",
          institution: "Malaysian Phytochemistry Institute",
          docNumber: "MPI-CHEM-2024-87",
          type: "Analisis Sebatian Bioaktif",
          summary: "Mengenal pasti 26 sebatian penyembuh semula jadi yang bertindak serentak memulihkan stamina dan kesegaran tubuh.",
          keyFindings: [
            "26 nutrien aktif tumbuhan dikatalogkan secara saintifik",
            "Minyak pati terapeutik stabil untuk kesegaran tahan lama",
            "Sifar bahan kimia sintetik dikesan",
          ],
        },
        {
          id: "metabolites-id",
          title: "2.4x Lebih Kuat Daripada Kunyit Kuning",
          institution: "National Biotechnology Division",
          docNumber: "NBD-METAB-2024",
          type: "Ujian Perbandingan Potensi",
          summary: "Analisis perbandingan membuktikan kunyit hitam menghasilkan kuasa antioksidan dan perlindungan sel 2.4 kali lebih tinggi berbanding kunyit biasa.",
          keyFindings: [
            "2.4x perlindungan radikal bebas lebih tinggi berbanding kunyit kuning",
            "Kaya dengan antioksidan antosianin ungu pekat",
            "Sangat selesa dan mesra sistem penghadaman sepanjang hari",
          ],
        },
        {
          id: "bioavailability",
          title: "Kajian Penyerapan Pantas & Tenaga",
          institution: "Universiti Teknologi Malaysia (UTM)",
          docNumber: "UTM-PHARM-2024-19",
          type: "Ujian Penyerapan Tubuh",
          summary: "Ujian klinikal menunjukkan betapa pantas dan lengkapnya badan anda menyerap nutrien kunyit hitam untuk kekal cergas dan selesa sepanjang hari.",
          keyFindings: [
            "Mencapai tahap penyerapan optimum dalam masa 45 minit",
            "94.2% penyerapan sel berterusan sepanjang hari",
            "Mudah dihadam dan lembut untuk perut sensitif",
          ],
        },
        {
          id: "melaka-biotech",
          title: "Sijil Analisis Pemakanan & Kebersihan",
          institution: "Melaka Biotechnology Corporation",
          docNumber: "MBC-2025-CF-0380",
          type: "Sijil Pemakanan & Keselamatan",
          summary: "Keputusan ujian rasmi mengesahkan paras natrium sangat rendah (12mg), gula rendah (3.4g), dan sifar sisa bahan kimia berbahaya.",
          keyFindings: [
            "Paras gula sangat rendah (3.4g) selamat untuk kesihatan harian",
            "Paras garam/natrium sangat rendah (12mg) mesra jantung",
            "100% bebas daripada logam berat dan kuman berbahaya",
          ],
        },
      ],
    },
    reviews: {
      tag: "PENGALAMAN SEBENAR • HASIL SEBENAR",
      mainTitle: "Disayangi Keluarga Seluruh Malaysia",
      verifiedCount: "482 Kisah Pelanggan Yang Bersyukur",
      items: [
        {
          id: "1",
          name: "Puan Halimah",
          age: 52,
          location: "Johor Bahru",
          quote: "“Dulu sakit lutut sampai tak larat nak dukung cucu. Sekarang lutut rasa sangat ringan, bangun pagi pun rasa selesa dan ceria.”",
        },
        {
          id: "2",
          name: "Encik Farid",
          age: 45,
          location: "Kuala Lumpur",
          quote: "“Balik kerja petang dulu selalu rasa lesu tak bermaya. Ambil 2 kapsul setiap hari, rasa bertenaga semula untuk luangkan masa dengan anak-anak.”",
        },
        {
          id: "3",
          name: "Nurul A.",
          age: 28,
          location: "Shah Alam",
          quote: "“Senggugut bulanan dulu sampai terpaksa cuti baring menangis. Sekarang kitaran jadi lancar, lembut, dan selesa sepanjang bulan.”",
        },
        {
          id: "4",
          name: "Uncle Tan",
          age: 64,
          location: "Pulau Pinang",
          quote: "“Jari kaku waktu pagi dan bacaan gula selalu buat saya risau bertahun-tahun. Kunyit hitam ini benar-benar anugerah untuk ketenangan fikiran harian saya.”",
        },
        {
          id: "5",
          name: "Puan Rosnah",
          age: 58,
          location: "Ipoh",
          quote: "“Angin terperangkap dalam perut buat saya takut nak makan. Dalam masa seminggu, perut rasa lega, dan akhirnya dapat tidur lena sampai pagi.”",
        },
        {
          id: "6",
          name: "Haji Zulkifli",
          age: 61,
          location: "Melaka",
          quote: "“Alhamdulillah, solat dan lipat lutut waktu sujud terasa licin dan tiada rasa ngilu lagi. Herba tulen yang benar-benar menjaga tubuh.”",
        },
      ],
    },
    pricing: {
      headline: "PILIH PAKEJ\nRAWATAN ANDA",
      subheadline: "Mulakan langkah pertama ke arah pagi yang bebas sakit dan tenaga harian yang cergas.",
      guarantee1: "Jaminan Wang Dikembalikan 30 Hari",
      guarantee2: "Penghantaran Percuma Ke Pintu Rumah (Semenanjung)",
      guarantee3: "Bayar Waktu Barang Sampai (COD Tersedia)",
      guarantee4: "100% Pesanan Selamat & Dipercayai",
      trust1: "100% Tulen\n& Bersih",
      trust2: "Penghantaran\nPantas & Selamat",
      trust3: "Disukai &\nDipercayai",
      dosageTitle: "CARA AMALKAN UNTUK\nHASIL TERBAIK",
      dosageDaily: "2 kapsul setiap hari",
      dosageNote: "Ambil selepas sarapan pagi bersama segelas air suam.",
      careTitle: "NOTA PENJAGAAN",
      careDesc: "Sekiranya anda hamil, menyusu, atau mengambil ubat preskripsi doktor, kami sentiasa mengesyorkan untuk merujuk doktor anda terlebih dahulu.",
      orderNow: "PESAN SEKARANG",
      save: "JIMAT",
      bestValue: "PILIHAN TERBAIK",
      mostPopularRibbon: "PALING POPULAR • PEMULIHAN LENGKAP",
      capsules1: "60 Kapsul • Percubaan 1 Bulan",
      capsules2: "120 Kapsul • Rutin 2 Bulan",
      capsules3: "180 Kapsul • Rawatan Mendalam 3 Bulan",
    },
    faq: {
      tag: "JAWAPAN JELAS & JUJUR",
      mainTitle: "Soalan Yang Kerap Ditanya",
      subtitle: "Jawapan ringkas dan telus untuk membantu anda dan keluarga membuat pilihan terbaik demi kesihatan harian.",
      tabs: {
        all: "Semua Soalan",
        science: "Kelebihan Kunyit Hitam",
        usage: "Cara Pengambilan",
        safety: "Keselamatan & Halal",
        shipping: "Penghantaran & Jaminan",
      },
      helpBoxTitle: "Perlukan bantuan atau ada sebarang soalan?",
      helpBoxDesc: "Pasukan kami sentiasa bersedia mendengar dan membantu anda di WhatsApp pada bila-bila masa.",
      helpBoxCta: "HUBUNGI KAMI DI WHATSAPP",
      items: [
        {
          id: 1,
          category: "science",
          question: "Mengapakah Kunyit Hitam jauh lebih berkesan berbanding kunyit kuning biasa?",
          answer: "Kunyit hitam adalah herba rawatan yang amat bernilai dan sukar didapati. Tidak seperti kunyit masakan biasa, kunyit hitam tulen mengandungi 2x ganda sebatian aktif penyembuhan (ar-Curcumene) dan antioksidan ungu pekat semula jadi. Badan anda menyerapnya jauh lebih cepat dan mudah, memberikan kelegaan sendi lutut, pencernaan, dan tenaga tanpa memerlukan lada hitam atau bahan penggalak kimia.",
        },
        {
          id: 2,
          category: "usage",
          question: "Bagaimanakah dan bilakah waktu terbaik untuk mengambil kapsul ini?",
          answer: "Ambil 2 kapsul sekali sehari dengan segelas air suam, sebaik-baiknya pada waktu pagi selepas sarapan. Minum air secukupnya sepanjang hari bagi membantu tubuh menyerap nutrien secara lembut. Amalan berterusan selama 3 hingga 4 minggu memberikan kesan pemulihan yang optimum.",
        },
        {
          id: 3,
          category: "safety",
          question: "Adakah produk ini Halal, bersih, dan disahkan selamat?",
          answer: "Ya, 100%. Kunyit hitam kami ditanam secara bersih di ladang Malaysia dan diproses di fasiliti berdaftar Kementerian Kesihatan Malaysia (MeSTI) serta disahkan Halal oleh JAKIM. Kapsul yang digunakan adalah 100% kapsul sayuran (vegetable capsule) tanpa sebarang bahan kimia, logam berat, atau pengawet.",
        },
        {
          id: 4,
          category: "safety",
          question: "Bolehkah saya mengambilnya jika ada darah tinggi, kencing manis, atau mengambil ubat hospital?",
          answer: "Ya, boleh! Kajian universiti membuktikan kunyit hitam lembut pada organ dan membantu menyokong kestabilan gula dalam darah serta melancarkan darah. Jika anda mengambil ubat preskripsi doktor, kami syorkan jarakkan 1 hingga 2 jam antara ubat hospital dan kunyit hitam.",
        },
        {
          id: 5,
          category: "usage",
          question: "Berapa lamakah masa yang diambil untuk merasai kesannya?",
          answer: "Kebanyakan pelanggan kami mendapati masalah perut kembung, angin berlebihan, dan rasa lesu mula berkurangan dalam tempoh 3 hingga 7 hari pertama. Untuk kelegaan mendalam—seperti lutut yang lebih licin dibengkokkan, sendi pagi yang ringan, dan tidur yang lena—anda akan merasai perbezaan ketara selepas 2 hingga 3 minggu amalan berterusan.",
        },
        {
          id: 6,
          category: "shipping",
          question: "Bagaimanakah Jaminan Wang Dikembalikan 30 Hari berfungsi?",
          answer: "Kami ingin anda berasa yakin sepenuhnya. Sekiranya anda mencuba kunyit hitam kami dan tidak merasai sebarang perubahan positif dalam tempoh 30 hari, hubungi khidmat pelanggan kami di WhatsApp untuk penggantian atau pemulangan wang tanpa sebarang kesulitan.",
        },
        {
          id: 7,
          category: "shipping",
          question: "Berapa lamakah tempoh penghantaran, dan bolehkah saya bayar waktu sampai (COD)?",
          answer: "Kami membungkus pesanan anda dengan rapi dan pos dalam tempoh 24 jam. Pesanan ke Semenanjung Malaysia sampai dalam 1 hingga 3 hari bekerja dengan Penghantaran Percuma. Sabah & Sarawak mengambil masa 3 hingga 5 hari. Anda boleh memilih Bayar Waktu Sampai (COD) dan membayar terus kepada posmen apabila bungkusan tiba.",
        },
      ],
    },
    orderModal: {
      headerTitle: "Pesanan Pantas • Terus Ke Pintu Rumah Anda",
      headerStock: "Stok Tuaian Segar Tersedia • Pos Hari Ini",
      step1Title: "Pilih Pakej Rawatan Anda",
      step1FreeDelivery: "Penghantaran Percuma Seluruh Semenanjung",
      step2Title: "Ke Manakah Kami Perlu Hantar Bungkusan Anda?",
      step3Title: "Bagaimanakah Anda Ingin Buat Bayaran?",
      labelFullName: "Nama Penuh *",
      labelPhone: "Nombor Telefon (WhatsApp) *",
      labelAddress: "Alamat Lengkap Rumah *",
      labelPostcode: "Poskod *",
      labelState: "Negeri *",
      payCod: "Bayar Waktu Sampai (COD)",
      payFpx: "Perbankan Dalam Talian (FPX)",
      payTng: "TnG eWallet / QR DuitNow",
      summarySelected: "Pakej Dipilih",
      summaryDelivery: "Penghantaran Ke Rumah",
      summaryDeliveryFree: "PERCUMA (Semenanjung)",
      summarySavings: "Penjimatan Anda Hari Ini",
      summaryTotal: "Jumlah Perlu Dibayar:",
      ctaSubmit: "SAHKAN PESANAN SAYA",
      guaranteeText: "Jaminan Wang Dikembalikan 30 Hari",
      safeText: "100% Selamat & Terpelihara",
      successTag: "Pesanan Berjaya Dihantar!",
      successTitle: "Terima Kasih",
      successDesc: "Kami sedang menyediakan tuaian kunyit hitam segar anda dengan penuh teliti. Anda telah membuat langkah terbaik untuk tubuh yang lebih cergas dan bebas sakit.",
      receiptRef: "Rujukan Pesanan:",
      receiptRoutine: "Pakej Dipilih:",
      receiptTotal: "Jumlah Bayaran:",
      receiptPayment: "Kaedah Bayaran:",
      receiptDeliveringTo: "Dihantar Ke:",
      btnReturn: "Kembali ke Laman Utama",
      btnWhatsApp: "Semak Status di WhatsApp",
      mostPopularBadge: "PALING POPULAR",
    },
    footer: {
      desc: "Berdedikasi membawa kelegaan semula jadi, kelancaran pergerakan tanpa sakit, dan ketenangan jiwa kepada keluarga di Malaysia melalui kunyit hitam tulen berkualiti tinggi.",
      companyTitle: "CURCUMA WELLNESS",
      companySub: "Oleh Curcuma Wellness Sdn Bhd",
      companyAddress: "Aras 12, Menara Kesihatan, Jalan Ampang, 50450 Kuala Lumpur, Malaysia.",
      colExplore: "TEROKAI",
      colHelp: "BANTUAN & PENJAGAAN",
      colContact: "KAMI DI SINI UNTUK ANDA",
      workHours: "Isnin – Jumaat: 9:00 PG – 6:00 PTG (MYT)",
      disclaimer: "* Kenyataan ini belum dinilai oleh pihak berkuasa kesihatan. Produk ini tidak bertujuan untuk mendiagnosis, merawat, menyembuhkan, atau mencegah sebarang penyakit.",
      rights: "© 2026 Curcuma Wellness Sdn Bhd. Hak cipta terpelihara.",
      links: {
        story: "Kisah Penawar Kami",
        benefits: "Khasiat Kesihatan",
        science: "Kajian Universiti",
        reviews: "Kisah Pelanggan",
        order: "Pesan Botol Anda",
        faq: "Soalan Lazim",
        guarantee: "Jaminan 30 Hari",
        shipping: "Penghantaran & Pos",
        privacy: "Dasar Privasi",
        terms: "Terma & Syarat",
      },
    },
  },
};
