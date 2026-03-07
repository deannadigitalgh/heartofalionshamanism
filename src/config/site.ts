// ==========================================================================
// Heart Of A Lion Shamanism - Site Configuration
// Single source of truth for all shared data across the website
// ==========================================================================

/* -----------------------------
   SITE INFORMATION
   ----------------------------- */
export const site = {
  name: "Heart Of A Lion Shamanism",
  tagline: "Deanna Stennett, L.Ac., MA - Shamanic Practitioner & Teacher",
  phone: "410-961-9033",
  email: "spiritpoint4u@gmail.com",
  address: "Blue Ridge, GA"
};

/* -----------------------------
   FORMSPREE CONFIGURATION
   ----------------------------- */
export const formspree = {
  endpoint: "https://formspree.io/f/xdawonkq"
};

/* -----------------------------
   SERVICE AREAS (Northern Georgia)
   Used on homepage, testimonials page, and all service area SEO pages
   ----------------------------- */
export const primaryServiceAreas = [
  { name: "Blue Ridge", slug: "blue-ridge-ga" },
  { name: "Ellijay", slug: "ellijay-ga" },
  { name: "Jasper", slug: "jasper-ga" },
  { name: "Blairsville", slug: "blairsville-ga" }
];

export const nearbyTowns = [
  "Blue Ridge",
  "Ellijay",
  "Jasper",
  "Blairsville",
  "Talking Rock",
  "Morganton",
  "Helen",
  "Gainesville"
];

/* -----------------------------
   TESTIMONIALS DATA (Single Source)
   Used on homepage and testimonials page - prevents duplication
   ----------------------------- */
export const testimonials = [
  {
    text: "Deanna's shamanic work opened doors I didn't know existed. Her guidance helped me connect with my power animal and find clarity in a time of confusion.",
    author: "M.S.",
    location: "Ellijay, GA",
    service: "Individual Healing Session"
  },
  {
    text: "The Learn to Journey workshop was life-changing. Deanna creates such a safe, sacred space for transformation. I've been journeying regularly since then.",
    author: "K.M.",
    location: "Blue Ridge, GA",
    service: "Learn to Journey Workshop"
  },
  {
    text: "Working with Deanna on soul retrieval work helped me heal from trauma I thought was impossible to release. Her combination of shamanic and acupuncture knowledge is truly unique.",
    author: "J.R.",
    location: "Blairsville, GA",
    service: "Soul Retrieval Session"
  },
  {
    text: "The Wild Women series gave me a community of women who understand. Deanna's wisdom and gentle guidance helped me awaken parts of myself I'd forgotten existed.",
    author: "L.T.",
    location: "Jasper, GA",
    service: "Wild Women Series"
  },
  {
    text: "I was skeptical about shamanism at first, but Deanna's approach is so grounded and practical. The energy clearing session completely shifted my perspective on healing.",
    author: "P.W.",
    location: "Ellijay, GA",
    service: "Energy Clearing Session"
  },
  {
    text: "Deanna's solstice ceremony was one of the most powerful spiritual experiences I've ever had. 38 people gathered and felt such deep connection. She has a gift for creating sacred space.",
    author: "Anonymous",
    location: "Northern Georgia",
    service: "Solstice Celebration"
  },
  {
    text: "After years of feeling stuck, Deanna's power animal session helped me connect with my totem and understand my life purpose. I've never felt more aligned.",
    author: "S.H.",
    location: "Blue Ridge, GA",
    service: "Power Animal Connection"
  },
  {
    text: "The Messages from Nature workshop changed how I see the world forever. Now when I walk in the mountains around Ellijay, I feel like I'm having conversations with everything.",
    author: "D.K.",
    location: "Ellijay, GA",
    service: "Messages from Nature Workshop"
  }
];

/* -----------------------------
   FAQ DATA (Single Source)
   Organized by category for reuse across pages
   ----------------------------- */
export const faqs = {
  general: [
    {
      question: "What is shamanic healing?",
      answer: "Shamanism is the oldest known spiritual healing system on the planet, dating back 40-100 thousand years. It's a non-religious practice based on traveling to invisible worlds to retrieve information and healing for change in any area of life."
    },
    {
      question: "Do I need prior experience?",
      answer: "No! All workshops are designed for beginners. Deanna has been teaching shamanism since 1995 and creates a welcoming, accessible environment for all levels."
    },
    {
      question: "How do I know if shamanic healing is right for me?",
      answer: "If you're seeking deeper spiritual connection, personal transformation, or healing from life challenges, shamanic work can be profoundly beneficial. Many clients report increased clarity, emotional release, and a stronger sense of purpose."
    },
    {
      question: "What should I expect during an individual healing session?",
      answer: "Your session begins with a conversation about your intentions and concerns. Then Deanna will guide you through shamanic journeying work, which may include soul retrieval, energy clearing, or power animal connection. You'll remain fully conscious throughout, and many clients experience deep relaxation, emotional release, or profound insights."
    },
    {
      question: "What is the difference between shamanic healing and acupuncture?",
      answer: "While both practices aim to restore balance and promote healing, they work on different levels. Acupuncture works primarily with the physical body's energy meridians, while shamanic healing addresses spiritual and energetic dimensions. Many clients benefit from both practices working together."
    },
    {
      question: "What should I bring to a workshop?",
      answer: "Wear comfortable clothing that allows movement. Bring an open heart and mind. Some workshops include outdoor time, so dress appropriately for weather. A water bottle and snacks are recommended. For creative workshops, bring art supplies if you have them."
    },
    {
      question: "What if I can't attend after registering?",
      answer: "For the Wild Women Series, participants must be fully committed. If you miss more than one meeting, you cannot continue. For single workshops, please contact Deanna as soon as possible if you need to cancel."
    },
    {
      question: "Are there dietary restrictions for shared meals?",
      answer: "Please let Deanna know of any dietary restrictions when registering. Workshops with shared meals aim to accommodate various needs."
    }
  ],

  blueRidge: [
    {
      question: "Do you offer shamanic healing in Blue Ridge, GA?",
      answer: "Yes! Deanna Stennett serves clients throughout Northern Georgia including Blue Ridge. She offers both in-person sessions at her Ellijay/Blairsville offices and can travel to clients by appointment for in-home sessions when needed."
    },
    {
      question: "What shamanic services are available near me?",
      answer: "Deanna offers individual healing sessions (soul retrieval, energy clearing, power animal connection), workshops (Learn to Journey, Wild Women Series), and special ceremonies throughout Northern Georgia."
    },
    {
      question: "How do I book a shamanic session in Blue Ridge area?",
      answer: `Call or text Deanna at ${site.phone} or email ${site.email}. She responds within 24 hours and can schedule sessions at her offices or arrange home visits.`
    }
  ],

  ellijay: [
    {
      question: "Do you offer shamanic healing in Ellijay, GA?",
      answer: "Yes! Deanna Stennett serves clients throughout Northern Georgia including Ellijay. She offers both in-person sessions at her offices and can travel to clients by appointment for in-home sessions when needed."
    },
    {
      question: "What shamanic services are available near me?",
      answer: "Deanna offers individual healing sessions (soul retrieval, energy clearing, power animal connection), workshops (Learn to Journey, Wild Women Series), and special ceremonies throughout Northern Georgia."
    }
  ],

  jasper: [
    {
      question: "Do you offer shamanic healing in Jasper, GA?",
      answer: "Yes! Deanna Stennett serves clients throughout Northern Georgia including Jasper. She offers both in-person sessions at her offices and can travel to clients by appointment for in-home sessions when needed."
    },
    {
      question: "What shamanic services are available near me?",
      answer: "Deanna offers individual healing sessions (soul retrieval, energy clearing, power animal connection), workshops (Learn to Journey, Wild Women Series), and special ceremonies throughout Northern Georgia."
    }
  ],

  blairsville: [
    {
      question: "Do you offer shamanic healing in Blairsville, GA?",
      answer: "Yes! Deanna Stennett serves clients throughout Northern Georgia including Blairsville. She offers both in-person sessions at her offices and can travel to clients by appointment for in-home sessions when needed."
    },
    {
      question: "What shamanic services are available near me?",
      answer: "Deanna offers individual healing sessions (soul retrieval, energy clearing, power animal connection), workshops (Learn to Journey, Wild Women Series), and special ceremonies throughout Northern Georgia."
    }
  ]
};

/* -----------------------------
   SERVICE DATA (Single Source)
   Used on homepage and services page - prevents duplication
   ----------------------------- */
export const individualSessions = [
  {
    title: "Individual Shamanic Healing Session",
    duration: "60 minutes",
    price: "$150-200",
    description: "A personalized shamanic healing session tailored to your unique needs and intentions. This sacred space allows for deep transformation and healing.",
    includes: [
      "Soul retrieval work to restore wholeness",
      "Energy clearing and balancing",
      "Power animal connection and guidance",
      "Spirit guide communication",
      "Personalized healing recommendations"
    ],
    idealFor: ["Trauma healing", "Life transitions", "Spiritual awakening", "Emotional blockages", "Finding life purpose"]
  },
  {
    title: "Energy Clearing Session",
    duration: "60 minutes",
    price: "$150-200",
    description: "Remove stagnant or negative energy patterns that are blocking your healing, relationships, and personal growth.",
    includes: [
      "Energy field assessment",
      "Removal of energetic blockages",
      "Chakra balancing",
      "Protective energy work",
      "Follow-up recommendations"
    ],
    idealFor: ["Feeling drained or stuck", "Relationship challenges", "Recurring patterns", "Stress and anxiety"]
  },
  {
    title: "Power Animal Connection Session",
    duration: "60 minutes",
    price: "$150-200",
    description: "Meet your power/totem animal through shamanic journeying and establish an ongoing relationship for spiritual support.",
    includes: [
      "Shamanic journey to meet power animal",
      "Understanding power animal messages",
      "Creating ongoing connection practices",
      "Integration guidance",
      "Journey recording (if desired)"
    ],
    idealFor: ["Seeking guidance", "Spiritual protection", "Personal growth", "Connection to nature spirits"]
  }
];

export const workshops = [
  {
    title: "Learn to Journey Workshop",
    description: "Four-hour introductory workshop teaching the ancient art of shamanic journeying. Meet your power animal and discover the invisible worlds.",
    duration: "4 hours (12-4 pm)",
    price: "$50 in advance, $65 at door",
    location: "Various locations throughout Northern Georgia",
    includes: [
      "Overview of shamanism and its history",
      "Understanding the shamanic view of illness and healing",
      "Learn to do a shamanic journey",
      "Meet your power (or totem) animal",
      "Connection with nature spirits",
      "Post-workshop food and community gathering"
    ],
    nextDate: "Contact for upcoming dates",
    registration: "Pre-register at 410-961-9033 or spiritpoint4u@gmail.com to save $5"
  },
  {
    title: "Wild Women Series",
    description: "Six-part transformative series for women exploring wild archetypes through shamanic journeying, art, poetry, song, and dance. Based on Clarissa Pinkola Estes' work.",
    duration: "6 sessions (2nd Saturday of each month)",
    price: "$540 total ($90/session) or $100 per session",
    location: "Inner Awakenings, Blairsville, GA",
    includes: [
      "Shamanic journeys to explore wild archetypes",
      "Creative expression (art, song, dance)",
      "Poetry and storytelling",
      "Ceremony and ritual work",
      "Healing friendships and support building",
      "Outdoor fire ceremony at final meeting"
    ],
    idealFor: ["Women seeking to awaken their wildness", "Connecting with intuitive self", "Building community with other women"],
    note: "Participants must be fully committed. If you miss more than one meeting, you cannot continue."
  },
  {
    title: "Messages from Nature Workshop",
    description: "Explore the messages from the Creator through nature using shamanic journeying and intuition. Never look at a tree, flower, or bird the same way again.",
    duration: "Full day workshop",
    price: "$60 in advance, $65 at door",
    location: "Various natural settings in Northern Georgia",
    includes: [
      "Shamanic journeying techniques",
      "Intuition development exercises",
      "Nature spirit communication",
      "Outdoor ceremony",
      "Shared meal with other participants"
    ],
    idealFor: ["Nature lovers", "Seeking spiritual connection through nature", "Developing intuition"]
  }
];

export const ceremonies = [
  {
    title: "New Moon Ceremonies",
    description: "Monthly ceremonies to set intentions, release what no longer serves you, and connect with the feminine divine.",
    frequency: "Monthly (New Moon)",
    price: "$40-60"
  },
  {
    title: "Full Moon Ceremonies",
    description: "Powerful gatherings for celebration, gratitude, and releasing. Connect with lunar energy for transformation.",
    frequency: "Monthly (Full Moon)",
    price: "$40-60"
  },
  {
    title: "Solstice Celebrations",
    description: "Seasonal ceremonies honoring the sun's journey. Recent Solstice Celebration had 38 people gathering to honor the return of the sun.",
    frequency: "Summer and Winter Solstices",
    price: "$50-75"
  },
  {
    title: "Rites of Passage Ceremonies",
    description: "Custom ceremonies for weddings, funerals, coming-of-age celebrations, graduations, and other significant life transitions.",
    frequency: "By appointment",
    price: "Varies by ceremony type"
  }
];

/* -----------------------------
   SERVICE TYPE OPTIONS FOR FORMS
   Used in contact form dropdowns across multiple pages
   ----------------------------- */
export const serviceTypeOptions = [
  { value: "Individual Healing Session", label: "Individual Healing Session" },
  { value: "Energy Clearing", label: "Energy Clearing Session" },
  { value: "Power Animal Connection", label: "Power Animal Connection" },
  { value: "Learn to Journey Workshop", label: "Learn to Journey Workshop" },
  { value: "Wild Women Series", label: "Wild Women Series" },
  { value: "Messages from Nature Workshop", label: "Messages from Nature Workshop" },
  { value: "Special Ceremony", label: "Special Ceremony" },
  { value: "Other", label: "Other" }
];

/* -----------------------------
   STATISTICS (Single Source)
   Used on testimonials page and homepage stats section
   ----------------------------- */
export const statistics = [
  {
    title: "Individual Healing Sessions",
    count: 45,
    description: "Soul retrieval, energy clearing, power animal connection"
  },
  {
    title: "Workshops & Training",
    count: 200,
    description: "Learn to Journey, Wild Women Series, special ceremonies"
  },
  {
    title: "Years of Practice",
    count: 31,
    description: "Teaching shamanism since 1995"
  }
];

/* -----------------------------
   UPCOMING WORKSHOPS (Single Source)
   Used on workshops page and homepage - keep updated regularly
   ----------------------------- */
export const upcomingWorkshops = [
  {
    title: "Learn to Journey Workshop",
    date: "April 18, 2026",
    time: "12-4 pm",
    location: "563 Gainesville Hwy., Blairsville, GA 30512",
    price: "$50 in advance, $65 at door ($2 credit card fee)",
    description: "Four-hour introductory workshop teaching the ancient art of shamanic journeying. Meet your power animal and discover the invisible worlds.",
    includes: [
      "Overview of shamanism and its history",
      "Understanding the shamanic view of illness and healing",
      "Learn to do a shamanic journey",
      "Meet your power (or totem) animal",
      "Connection with nature spirits",
      "Post-workshop food and community gathering"
    ],
    registration: "Pre-register at 410-961-9033 or spiritpoint4u@gmail.com to save $5 and ensure space",
    limit: "Limited to 20 participants for intimate experience"
  },
  {
    title: "Messages from Nature Workshop",
    date: "March 29, 2025",
    time: "12-5 pm",
    location: "Blue Ridge, GA",
    price: "$60 in advance, $65 at door ($2 credit card fee)",
    description: "Explore the messages from the Creator through nature using shamanic journeying and intuition. Never look at a tree or flower the same way again.",
    includes: [
      "Shamanic journeying techniques",
      "Intuition development exercises",
      "Nature spirit communication",
      "Outdoor ceremony (weather permitting)",
      "Shared meal with other participants"
    ],
    registration: "Contact 410-961-9033 or spiritpoint4u@gmail.com to register",
    limit: "Limited space available - pre-register to save $5"
  }
];

/* -----------------------------
   SERIES PROGRAMS (Single Source)
   Used on workshops page for multi-part programs like Wild Women Series
   ----------------------------- */
export const seriesPrograms = [
  {
    title: "Wild Women Series",
    description: "Six-part transformative series for women exploring wild archetypes through shamanic journeying, art, poetry, song, and dance. Based on Clarissa Pinkola Estes' work.",
    schedule: "The 2nd Saturday of each month from April through September",
    dates: ["April 8, 2023", "May 13, 2023", "June 10, 2023", "July 8, 2023", "August 12, 2023", "September 9, 2023"],
    time: "First 5 meetings: 10am-5pm (hour lunch break). 6th meeting: 1pm-9pm with potluck dinner.",
    location: "Inner Awakenings, 1650 Tate Rd., Blairsville, Georgia 30512",
    price: "$540 total ($90/session) if paid in full, or $100 per session",
    includes: [
      "Shamanic journeys to explore wild archetypes",
      "Creative expression (art, song, dance)",
      "Poetry and storytelling",
      "Ceremony and ritual work",
      "Healing friendships and support building",
      "Outdoor fire ceremony at final meeting"
    ],
    idealFor: ["Women seeking to awaken their wildness", "Connecting with intuitive self", "Building community with other women"],
    requirements: [
      "Participants must be fully committed to attending each meeting",
      "If you miss more than one meeting, you cannot continue",
      "Bring your own bag lunch for first 5 meetings",
      "Potluck dinner for final meeting"
    ],
    registration: `Call or text Deanna at ${site.phone}. Or register at Inner Awakenings with Karen Wilkins at 706-347-0528.`,
    limit: "Limited to 12 women, first come first serve"
  }
];

/* -----------------------------
   PAST WORKSHOPS (Single Source)
   Used on workshops page for historical reference
   ----------------------------- */
export const pastWorkshops = [
  {
    title: "Learn to Journey Course",
    date: "October 2021",
    location: "Mountain Light Unitarian Universalist Church (MLUUC), Ellijay",
    note: "First shamanic Learn to Journey course since moving to Northern Georgia. Well attended."
  },
  {
    title: "Solstice Celebration",
    date: "Summer Solstice 2021",
    location: "Mountain Light Unitarian Universalist Church (MLUUC), Ellijay",
    note: "Co-led with 38 people gathering to honor the return of the sun."
  }
];

/* -----------------------------
   CREDENTIALS & TRAINING DATA
   Used on about page for credentials section
   ----------------------------- */
export const credentials = [
  {
    title: "Licensed Acupuncturist",
    details: "Georgia Licensed Acupuncturist (L.Ac., MA), Nationally Certified with NCCAOM"
  },
  {
    title: "Foundation for Shamanic Studies",
    details: "Graduate of the three-year advanced program in Shamanic Studies"
  },
  {
    title: "Sandra Ingerman Training",
    details: "Completed Sandra Ingerman's two-year Shamanic Teachers' Training Program"
  },
  {
    title: "Tom Cowan Celtic Shamanism",
    details: "Graduate of Tom Cowan's two-year program in Celtic Shamanism"
  },
  {
    title: "Ordained Minister",
    details: "Ordained with Open Ministry, offering rites of passage ceremonies including weddings and funerals"
  },
  {
    title: "Author",
    details: "Written 'Poetry of the Body: Stories About Acupuncture Points' - available on Amazon in paperback and Kindle"
  }
];

/* -----------------------------
   JOURNEY TIMELINE DATA
   Used on about page for timeline section
   ----------------------------- */
export const journeyTimeline = [
  {
    year: "1995",
    title: "Began Shamanic Practice",
    description: "Started studying shamanism with the Foundation for Shamanic Studies after learning about it in acupuncture school from Eliot Cowan, author of Plant Spirit Medicine."
  },
  {
    year: "1997-2020",
    title: "Led Journey Group in Maryland",
    description: "Founded and led a shamanic journey/drumming group that met weekly in her office for over two decades, until the pandemic closed it."
  },
  {
    year: "1997-Present",
    title: "Taught Eight Two-Year Training Programs",
    description: "Has taught eight comprehensive two-year shamanism training programs throughout the Eastern US, training dozens of practitioners."
  },
  {
    year: "2021",
    title: "Moved to Northern Georgia",
    description: "Relocated to the southern Appalachian mountains of North Georgia, living in Morganton and continuing her healing work in Ellijay and Blairsville."
  },
  {
    year: "2021-Present",
    title: "Heart Of A Lion Shamanism",
    description: "Continues offering shamanic healing sessions, workshops, and training programs throughout Northern Georgia, including the original Wild Women Workshop based on Clarissa Pinkola Estes' work."
  }
];

/* -----------------------------
   TEACHERS & LINEAGE DATA
   Used on about page for teachers section
   ----------------------------- */
export const shamanicTeachers = [
  {
    name: "Michael Harner",
    organization: "Foundation for Shamanic Studies",
    description: "Learned core shamanism from Michael Harner, who studied with Tungus shamans who escaped persecution during the Soviet Union era."
  },
  {
    name: "Sandra Ingerman",
    books: ["Soul Retrieval", "Medicine for the Earth"],
    description: "Studied since 1995 with Sandra Ingerman, renowned shamanic practitioner and author of many influential books on soul retrieval and shamanic healing."
  },
  {
    name: "Tom Cowan",
    focus: "Celtic Shamanism",
    description: "Completed two-year program in Celtic Shamanism with Tom Cowan, exploring the shamanic traditions of Celtic cultures."
  },
  {
    name: "2 Moons (Laquita)",
    tribe: "Cherokee",
    description: "Trained weekly one-on-one for five years. During final years, performed healing work on her own teacher to have abilities assessed post-graduation."
  }
];

/* -----------------------------
   PERSONAL STORIES DATA
   Used on about page for personal stories section
   ----------------------------- */
export const personalStories = [
  {
    title: "Early Connection",
    story: "Dee originally met her power animal when he came to her in a dream when she was sleeping in the crib. She's been connected to the spirit world since she was at least 2 years old."
  },
  {
    title: "JFK Encounter",
    story: "She talked to the spirit of JFK when she was 5 years old. Without knowing it, she recognized his New England accent."
  },
  {
    title: "Teacher Validation",
    story: "One of her teachers, 2 Moons (Laquita, Cherokee), vouches for her shamanic abilities, stating she should have been trained much sooner due to her natural gifts."
  }
];

/* -----------------------------
   SPECIALIZATIONS DATA
   Used on about page and services pages
   ----------------------------- */
export const specializations = [
  {
    title: "Soul Retrieval",
    description: "Helping clients retrieve lost soul parts caused by trauma, illness, or life challenges to restore wholeness and vitality."
  },
  {
    title: "Power Animal Connection",
    description: "Guiding individuals to meet their power/totem animal through shamanic journeying for ongoing spiritual support and guidance."
  },
  {
    title: "Energy Clearing",
    description: "Removing stagnant or negative energy patterns that block healing, relationships, and personal growth."
  },
  {
    title: "Spirit Guidance",
    description: "Facilitating communication with spirit guides, ancestors, and nature spirits for wisdom and direction in life decisions."
  },
  {
    title: "Rites of Passage Ceremonies",
    description: "Creating sacred ceremonies for weddings, funerals, coming-of-age celebrations, and other significant life transitions."
  }
];

/* -----------------------------
   BOOK INFORMATION DATA
   Used on about page for book promotion section
   ----------------------------- */
export const bookInfo = {
  title: "Poetry of the Body: Stories About Acupuncture Points",
  subtitle: "Stories about acupuncture points",
  description: "Deanna's book contains shamanism and acupuncture, featuring personal stories and patient stories relating to acupuncture points, seasons, and nature. Written for the layperson.",
  availableOn: ["Amazon Paperback", "Amazon Kindle"]
};

/* -----------------------------
   EXPORT ALL FOR EASY IMPORTING
   ----------------------------- */
export default {
  site,
  formspree,
  primaryServiceAreas,
  nearbyTowns,
  testimonials,
  faqs,
  individualSessions,
  workshops,
  ceremonies,
  serviceTypeOptions,
  statistics,
  upcomingWorkshops,
  seriesPrograms,
  pastWorkshops,
  credentials,
  journeyTimeline,
  shamanicTeachers,
  personalStories,
  specializations,
  bookInfo
};
