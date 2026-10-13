import hero from "@/assets/hero.jpg";
import jess from "@/assets/jess.jpg";
import skin from "@/assets/skin.jpg";
import clinic from "@/assets/clinic.jpg";
import facial from "@/assets/facial.jpg";
import texture from "@/assets/texture.jpg";
import profile from "@/assets/profile.jpg";
import reception from "@/assets/reception.jpg";

export const img = { hero, jess, skin, clinic, facial, texture, profile, reception };

export const BOOK = "https://lumeaglow.as.me/";
export const MEMBERSHIP_URL = "https://square.link/u/K4MrpmHi";
export const PHONE = "0408 463 126";
export const PHONE_HREF = "tel:0408463126";
export const EMAIL = "info@lumeaglow.com.au";
export const INSTAGRAM = "https://www.instagram.com/lumeaglow.clinic/";
export const MAPS = "https://maps.google.com/?q=208+Victoria+Road+Gladesville+NSW+2111";
export const ADDRESS = "208 Victoria Road, Gladesville NSW 2111";

export type Slug =
  | "lines-wrinkles-volume"
  | "skin-rejuvenation-facials"
  | "lhala-peel"
  | "microneedling"
  | "the-glassifier"
  | "skin-boosters-rejuran";

export const navTreatments: { slug: Slug; label: string }[] = [
  { slug: "lines-wrinkles-volume", label: "Lines, Wrinkles & Volume" },
  { slug: "skin-rejuvenation-facials", label: "Skin Rejuvenation & Facials" },
  { slug: "lhala-peel", label: "LHALA Peel" },
  { slug: "microneedling", label: "Microneedling" },
  { slug: "the-glassifier", label: "The Glassifier" },
  { slug: "skin-boosters-rejuran", label: "Skin Boosters & Rejuran" },
];

export type Treatment = {
  slug: Slug;
  name: string;
  title: string;
  subline?: string;
  intro: string;
  body: string[];
  list?: { lead: string; items: string[] };
  columns?: { title: string; items: string[] }[];
  pull?: string;
  feature?: { text: string; to: Slug };
  button: { label: string; href: string };
  price?: string;
  facts?: { label: string; value: string }[];
  faqs: { q: string; a: string | string[]; twoCol?: boolean }[];
  related: { label: string; to: Slug };
  heroImg: string;
  sideImg: string;
  strip: { src: string; label: string }[];
};

const LINES_BOOK =
  "https://lumeaglow.as.me/schedule/1aaae92a/category/Cosmetic%2520Consultations%252FWrinkle%2520%2526%2520Volume%2520Treatments";

export const treatments: Record<Slug, Treatment> = {
  "lines-wrinkles-volume": {
    slug: "lines-wrinkles-volume",
    name: "Lines, Wrinkles & Volume",
    title: "Treating Lines, Wrinkles and Volume Enhancements.",
    intro: "Personalised plans with Registered Nurse Jess, prioritising a natural approach.",
    body: [
      "Whether you are seeking to address specific concerns, enhance your natural features, or treat signs of ageing, we will work with you to create a tailored treatment plan designed to deliver natural, radiant results. Suitable for treating lines and wrinkles, volume enhancements, conditions such as hyperhidrosis, and jaw clenching.",
    ],
    pull: "Proportion and harmony, always.",
    button: { label: "Book a consultation", href: LINES_BOOK },
    faqs: [
      {
        q: "New to cosmetic treatments, or new to Lumea Glow?",
        a: "Whether you are exploring cosmetic treatments for the first time, or looking for a new practitioner, we are here to guide you through the process with honest advice and personalised care. A consultation will always be required to discuss goals, suitability and treatment options. There is no obligation for treatment which is why we offer complimentary consultations.",
      },
      {
        q: "Facial areas or concerns we treat",
        twoCol: true,
        a: [
          "Fine lines caused by muscle movement",
          "Facial volume loss",
          "Hollow cheeks",
          "Loss of jawline definition",
          "Downturned mouth / smile",
          "Lip volume changes",
          "TMJ (masseter) pain",
          "Hyperhidrosis of the underarms",
          "Tired or sunken appearance",
          "Changes in facial structure due to weight loss",
        ],
      },
      {
        q: "What's involved in a consultation?",
        a: "This is where we discuss your concerns and goals, health and treatment history. A comprehensive facial assessment will allow us to assess your facial anatomy, expressions and movement, skin quality and areas of concern. We will discuss suitable treatment options, along with expected outcomes, potential risks, aftercare and any other questions you may have.",
      },
      {
        q: "What is the price?",
        a: "Due to restrictions set by the TGA, we are unable to disclose this information publicly and without a consultation, this is for patient safety. At Lumea Glow our consultations are complimentary, or if you wish to potentially have a treatment on the same day, please book the appropriate treatment to ensure enough time on the day. If you are unsuitable for the treatment, we will provide you with a full refund of the deposit.",
      },
    ],
    related: { label: "Considering Skin Boosters & Rejuran?", to: "skin-boosters-rejuran" },
    heroImg: profile,
    sideImg: jess,
    strip: [
      { src: profile, label: "Soft profile portrait" },
      { src: hero, label: "Natural expression" },
      { src: clinic, label: "Treatment room" },
      { src: skin, label: "Skin close-up" },
    ],
  },
  "skin-rejuvenation-facials": {
    slug: "skin-rejuvenation-facials",
    name: "Skin Rejuvenation & Facials",
    title: "Skin Rejuvenation & Targeted Facials.",
    intro: "Every appointment is intentional, tailored to your skin on the day.",
    body: [
      "Many skin concerns develop over months or years, which means meaningful improvements often come from a consistent, personalised approach rather than a single treatment.",
    ],
    list: {
      lead: "Depending on your concerns, your skin journey may include:",
      items: [
        "Professional skin treatments tailored to your skin's changing needs",
        "Recommendations for appropriate home skin care",
        "Guidance on treatment timing and maintenance",
        "Regular reassessment as your skin improves",
      ],
    },
    pull: "The goal isn't to recommend unnecessary treatments, it's to create a realistic plan that helps you invest in your skin with confidence.",
    feature: {
      text: "Getting ready for a special occasion? The LHALA Peel is a Korean inspired skin treatment designed to leave your skin looking smoother, brighter and give that glass-skin glow.",
      to: "lhala-peel",
    },
    button: {
      label: "Start your skin journey",
      href: "https://lumeaglow.as.me/schedule/1aaae92a/category/Facials/appointment/82227257/calendar/12593543",
    },
    price: "from $175",
    faqs: [
      { q: "What skin concerns can you treat?", a: "Acne/congestion and textured skin, redness/sensitivity, dehydration, anti-ageing, pigmentation, dark spots and uneven tone, dull or tired looking skin." },
      { q: "How many sessions will I need, and how far apart?", a: "This depends on your skin goals and concerns. Some clients enjoy occasional maintenance, while others benefit from a personalised treatment plan with appointments scheduled at regular intervals. We will discuss this at your initial appointment." },
      { q: "Can I combine facials with other treatments?", a: "In most cases, yes. Depending on your skin and treatment goals, your personalised plan may include a combination of professional skin treatments performed over time. We will discuss what is appropriate during your consultation." },
      { q: "Is there anything I need to do before my appointment?", a: "We will provide you with pre-treatment instructions that are included on the booking confirmation email." },
      { q: "Not sure where to start?", a: "Book a complimentary skin consultation or consultation and same day treatment and we will take care of the rest." },
    ],
    related: { label: "Preparing for an event? Discover the LHALA Peel", to: "lhala-peel" },
    heroImg: facial,
    sideImg: texture,
    strip: [
      { src: facial, label: "Facial in treatment" },
      { src: texture, label: "Serum texture" },
      { src: skin, label: "Hydrated skin" },
      { src: clinic, label: "Treatment room" },
    ],
  },
  "lhala-peel": {
    slug: "lhala-peel",
    name: "The LHALA Peel",
    title: "The LHALA Peel.",
    subline: "The pre-event facial for brighter, smoother, glass skin.",
    intro: "The pre-event facial for brighter, smoother, glass skin.",
    body: [
      "Getting ready for a special occasion? The LHALA Peel is a Korean inspired skin treatment designed to leave your complexion looking smoother, brighter, and give that glass-skin glow.",
      "A salicylic based treatment which will provide a gentle exfoliation, while helping to regulate excess oil and remove dead skin cells. The formula then delivers a boost of hydration and skin brightening actives leaving the complexion smoother, fresher and visibly more luminous.",
    ],
    pull: "Glass skin, considered.",
    button: { label: "I'm ready for glass skin", href: "https://lumeaglow.as.me/?appointmentType=97739101" },
    price: "from $200",
    faqs: [
      { q: "What will the LHALA Peel improve?", a: "Dull, tired looking skin, uneven texture and congested skin, the appearance of enlarged pores and skin tone, leaving your skin looking bright and radiant." },
      { q: "When should I have it before an event?", a: "If it's your first time, we recommend at least 3 days prior to ensure no unusual reactions. If you have done it before and your skin responds well, the day of an event is perfect." },
      { q: "Is there downtime?", a: "In most cases, no. You may experience some redness or sensitivity, but this is a rare response." },
      { q: "How often can I have the LHALA Peel?", a: "We will provide you with a treatment schedule based on your skin, as everyone is different." },
    ],
    related: { label: "Explore Skin Rejuvenation & Facials", to: "skin-rejuvenation-facials" },
    heroImg: skin,
    sideImg: facial,
    strip: [
      { src: skin, label: "Glass-skin glow" },
      { src: texture, label: "Peel texture" },
      { src: facial, label: "Facial application" },
      { src: hero, label: "Radiant portrait" },
    ],
  },
  microneedling: {
    slug: "microneedling",
    name: "Microneedling",
    title: "Microneedling.",
    intro: "Collagen induction for texture, scarring, pores and fine lines.",
    body: [
      "Microneedling is a highly effective, minimally invasive treatment that uses tiny medical-grade needles to create controlled micro-injuries in the skin. This process triggers the body's natural wound-healing response, stimulating the production of new collagen and elastin. As a result, skin becomes smoother, firmer, and more evenly toned.",
      "To further enhance your results, microneedling can be combined with Skin Boosters or Exosomes, advanced regenerative treatments that support skin repair and rejuvenation.",
    ],
    pull: "Smoother, firmer, more evenly toned skin, built over time.",
    button: {
      label: "Start your skin journey",
      href: "https://lumeaglow.as.me/schedule/1aaae92a/category/Microneedling/appointment/82227338/calendar/12593543",
    },
    price: "from $250",
    facts: [
      { label: "Treatment time", value: "45-60 minutes" },
      { label: "Downtime", value: "24-48 hours of redness" },
      { label: "Sessions", value: "3-6, 4-6 weeks apart" },
    ],
    faqs: [
      { q: "Who is it for?", a: "Those looking to improve skin texture, scarring, enlarged pores, fine lines, pigmentation, skin elasticity, or overall skin rejuvenation by producing new collagen. The neck can often be forgotten but can show signs of ageing rapidly; it can be added to your treatment." },
      { q: "Treatment time", a: "Approximately 45-60 minutes, including a consultation, the treatment and a hydrating, soothing cooling mask." },
      { q: "Is there any downtime?", a: "You can expect redness similar to a mild sunburn for 24-48 hours, with some dryness or light flaking over the following few days. Everyone's skin is unique so this is just a guide." },
      { q: "How many sessions are recommended?", a: "While you may notice improvements after one treatment, a series of 3-6 sessions, spaced approximately 4-6 weeks apart, is often recommended depending on your skin goals." },
      { q: "When will I see results?", a: "Many clients notice a brighter complexion within the first week, with continued improvements in texture and overall appearance over the next 2-3 weeks as collagen production is stimulated. Concerns such as scarring or pigmentation may take longer and require more sessions." },
    ],
    related: { label: "Considering The Glassifier?", to: "the-glassifier" },
    heroImg: texture,
    sideImg: skin,
    strip: [
      { src: skin, label: "Refined texture" },
      { src: facial, label: "Cooling mask" },
      { src: profile, label: "Neck & jaw" },
      { src: clinic, label: "Treatment room" },
    ],
  },
  "the-glassifier": {
    slug: "the-glassifier",
    name: "The Glassifier",
    title: "The Glassifier.",
    intro: "A new approach to texture, radiance and a refined, luminous complexion.",
    body: [
      "Discover a new approach to skin refinement with the Idenel Glassifier, an advanced treatment designed to elevate your complexion through innovative skin technology and targeted ingredients.",
      "Combining microscopic spicules with a sophisticated blend of peptides and glutathione, this treatment focuses on skin texture, visible radiance and a more refined looking complexion. The spicules create a distinctive skin stimulation experience, while the peptide complex supports the appearance of smoother, healthier looking skin.",
      "Glutathione, an antioxidant known for its role in protecting against oxidative stress, complements the formulation to support a brighter, more luminous looking complexion.",
    ],
    pull: "Texture, radiance and refinement in one considered treatment.",
    button: { label: "Book The Glassifier", href: BOOK },
    price: "from $375",
    facts: [
      { label: "Treatment time", value: "Approx. 45 minutes" },
      { label: "Downtime", value: "Minimal" },
      { label: "Sessions", value: "Optimum results after 5" },
    ],
    faqs: [
      { q: "What makes it different?", a: "The peptides have a molecular weight below 500 Daltons, which influences their ability to penetrate the skin. Following treatment, the ingredients remain active within the skin for approximately 3 days, supporting repair, regeneration and renewal." },
      { q: "Treatment time", a: "Approximately 45 minutes, including a consultation, the treatment and a hydrating, soothing mask." },
      { q: "Is there any downtime?", a: "Minimal. Slight redness may occur following treatment and subsides within 24 hours. Rarely, you may experience dryness in the following days." },
      { q: "How many sessions are recommended?", a: "There are visible results after one treatment, however optimum results are noticed after 5 treatments." },
    ],
    related: { label: "Considering microneedling instead?", to: "microneedling" },
    heroImg: hero,
    sideImg: texture,
    strip: [
      { src: hero, label: "Luminous portrait" },
      { src: texture, label: "Peptide texture" },
      { src: skin, label: "Refined skin" },
      { src: reception, label: "Clinic" },
    ],
  },
  "skin-boosters-rejuran": {
    slug: "skin-boosters-rejuran",
    name: "Skin Boosters & Rejuran",
    title: "Skin Boosters & Rejuran.",
    intro: "Improving overall skin quality from within.",
    body: [
      "Advanced injectable treatments are designed to improve overall skin quality from within. While each treatment works differently, they share a common goal of supporting healthier, smoother and more radiant skin. Skin boosters focus on restoring hydration and enhancing skin luminosity, while Rejuran is designed to support the skin's texture, elasticity and resilience over time.",
    ],
    columns: [
      {
        title: "Hyaluronic Acid Skin Boosters",
        items: [
          "Improve skin hydration and quality",
          "Support smoother, less textured skin",
          "Enhance skin radiance",
          "Improve crepey skin and fine lines",
          "Improve elasticity and plump the skin",
        ],
      },
      {
        title: "PDRN Regenerative Treatments (Rejuran)",
        items: [
          "Regeneration and repair",
          "Improve overall skin quality",
          "Improve texture, elasticity and appearance of lines",
          "Support a healthier, more resilient barrier",
          "Improve the appearance of skin affected by sun damage and acne scarring",
        ],
      },
    ],
    button: {
      label: "Make a booking",
      href: "https://app.acuityscheduling.com/schedule/1aaae92a/category/Skin%2520Boosters%2520%2526%2520Rejuran%2520",
    },
    price: "from $300",
    faqs: [
      { q: "What is the difference between the two?", a: "HA is a substance naturally found in the skin that helps attract and retain water. As we age, our levels decline, which can contribute to dehydrated skin and reduced elasticity. PDRN is a naturally derived DNA fragment from salmon, which supports the skin's natural repair processes by triggering cell regeneration." },
      { q: "Which booster is right for me?", a: "It depends on your skin concerns and we will discuss this in clinic. Book the 'not sure' option under the Skin Booster and Rejuran category and we'll personalise a plan together." },
      { q: "How many treatments will I need?", a: "This varies by product and your skin concerns. As a guide, Rejuran is in most cases a series of 3 treatments; HA boosters vary by product." },
      { q: "Is there any downtime?", a: "Most people return to normal activities shortly after treatment. Mild redness, swelling, tenderness or bruising at the injection sites may occur and usually settles within a few days." },
    ],
    related: { label: "Pair with Microneedling", to: "microneedling" },
    heroImg: skin,
    sideImg: profile,
    strip: [
      { src: skin, label: "Hydrated skin" },
      { src: profile, label: "Radiant profile" },
      { src: texture, label: "Booster texture" },
      { src: clinic, label: "Treatment room" },
    ],
  },
};

export const pricing = [
  { name: "Targeted Skin Peels / Facials", price: "from $175" },
  { name: "LHALA Glass Skin Facial", price: "from $200" },
  { name: "Microneedling", price: "from $250" },
  { name: "Skin Boosters & Rejuran", price: "from $300" },
  { name: "The Glassifier", price: "from $375" },
];

export const concerns = [
  { name: "Lines & Wrinkles", group: "lines-volume" },
  { name: "Masseter Muscle Concerns", group: "lines-volume" },
  { name: "Facial Volume & Definition", group: "lines-volume" },
  { name: "Skin Texture & Pores", group: "texture-radiance" },
  { name: "Dehydrated & Dull Skin", group: "texture-radiance" },
  { name: "Acne & Congestion", group: "clarity-tone" },
  { name: "Pigmentation & Uneven Tone", group: "clarity-tone" },
  { name: "Overall Skin Quality", group: "clarity-tone" },
];
