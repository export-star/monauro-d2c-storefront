import type { FaqItem } from "@/types/content";

export const homepageFaqs: FaqItem[] = [
  {
    question: "Which MONAURO device should I start with?",
    answer: "Start from your recovery problem first. Compare by body area, routine length, and preferred comfort feature.",
    status: "to_confirm"
  },
  {
    question: "How often should I use it?",
    answer: "For RecoveryAir Calf Pro, the manual states that a single session should not exceed 15 minutes, and the device automatically shuts off after 15 minutes. Users should avoid prolonged or excessive use.",
    status: "confirmed"
  },
  {
    question: "Who should avoid using compression or heat devices?",
    answer: "People with implanted medical electronic devices, acute pulmonary edema, acute phlebitis, acute congestive heart failure, acute infections, DVT, pulmonary embolism, wounds or tumors near the use area, fractures, pregnancy or recent childbirth, heart disease, sensitive skin, abnormal blood pressure, metal implants, or other physical abnormalities should not use the product or should use it only under medical guidance.",
    status: "confirmed"
  },
  {
    question: "What is the return policy?",
    answer: "MONAURO offers returns and exchanges within 30 days.",
    status: "confirmed"
  },
  {
    question: "How does Shopify checkout work?",
    answer: "Shopify checkout will handle payment after the real store and product handles are connected. Supported payment methods include Visa, Mastercard, American Express, PayPal, Diners Club, and Discover.",
    status: "to_confirm"
  }
];

export const productFaqsBySlug: Record<string, FaqItem[]> = {
  "recoveryair-calf-pro": [
    {
      question: "Does this replace medical treatment?",
      answer: "No. RecoveryAir Calf Pro is described as a home electronic wellness device, not a medical device. It is not intended for diagnosis or treatment and should not replace professional medical advice.",
      status: "confirmed"
    },
    {
      question: "How do I use RecoveryAir Calf Pro?",
      answer: "Place the massager on your calves, secure it with the Velcro straps, adjust to a comfortable tightness, then select the massage intensity and heat setting. Remove jewelry and accessories before use, and do not operate the product with wet hands.",
      status: "confirmed"
    },
    {
      question: "Can I use it while charging?",
      answer: "No. The manual states that the device cannot be powered on while charging.",
      status: "confirmed"
    },
    {
      question: "Is it waterproof?",
      answer: "No. The manual states that the product is not waterproof and should not be splashed with liquid or used on wet skin.",
      status: "confirmed"
    },
    {
      question: "What is included in the box?",
      answer: "RecoveryAir Calf Pro includes the main device, charging cable, user manual, warranty card, and Certificate of Conformity.",
      status: "confirmed"
    },
    {
      question: "What is the warranty policy?",
      answer: "RecoveryAir Calf Pro includes a 365-day warranty period.",
      status: "confirmed"
    }
  ],
  "recoveryair-leg-elite": [
    {
      question: "What area is RecoveryAir Leg Elite designed for?",
      answer: "RecoveryAir Leg Elite is positioned for leg recovery routines with EMS massage, heated comfort, and air-bag compression.",
      status: "confirmed"
    },
    {
      question: "What are the heat levels?",
      answer: "The heat levels are low 50℃ (122°F) and high 55℃ (131°F).",
      status: "confirmed"
    },
    {
      question: "How long can it run?",
      answer: "The maximum usage time is less than 60 minutes on the highest setting, with approximately 3 hours required for charging.",
      status: "confirmed"
    },
    {
      question: "Which colors are available?",
      answer: "The color options are Calm Purple and Electric Green.",
      status: "confirmed"
    },
    {
      question: "What is included in the box?",
      answer: "The package includes the main device, charging cable, user manual, and warranty card.",
      status: "confirmed"
    }
  ],
  "relaxiwave-eye-mask": [
    {
      question: "What is RelaxiWave Eye Mask used for?",
      answer: "RelaxiWave Eye Mask is positioned for eye-area relaxation routines, with vibration massage, heated comfort, and built-in white noise described in the product details.",
      status: "confirmed"
    },
    {
      question: "What massage modes are available?",
      answer: "The modes are soothing mode, vitality mode, and sleep mode.",
      status: "confirmed"
    },
    {
      question: "What are the heat levels?",
      answer: "The heat levels are low 38℃ ±2℃ and high 42℃ ±2℃.",
      status: "confirmed"
    },
    {
      question: "How long does it charge and run?",
      answer: "Charging time is approximately 2.5 hours, and maximum usage time is less than 75 minutes on the highest setting.",
      status: "confirmed"
    },
    {
      question: "What is included in the box?",
      answer: "The package includes the main device, charging cable, user manual, and warranty card.",
      status: "confirmed"
    }
  ],
  "back-massage-gun": [
    {
      question: "What makes Back Massage Gun different?",
      answer: "It is positioned as a full-body massage gun with a distinctive self-use back massage form, so users can massage the back without relying on another person.",
      status: "confirmed"
    },
    {
      question: "What speed levels are available?",
      answer: "The speed levels are level 1 2000R, level 2 2600R, level 3 3200R, and level 4 800R.",
      status: "confirmed"
    },
    {
      question: "Which massage heads are included?",
      answer: "The package includes five massage heads: ball, bullet, U-shaped, wedge, and flat.",
      status: "confirmed"
    },
    {
      question: "What are the motor and performance details?",
      answer: "Product details include a brushless motor, 6mm amplitude, 10kg stall force, 55dB noise level, and a 15-minute smart timer.",
      status: "confirmed"
    },
    {
      question: "What is included in the box?",
      answer: "The package includes the main device, user manual, charging cable, and warranty card.",
      status: "confirmed"
    }
  ]
};

export const productFaqs: FaqItem[] = productFaqsBySlug["recoveryair-calf-pro"];

export const supportFaqs: FaqItem[] = [
  {
    question: "Where does MONAURO currently ship?",
    answer: "Free shipping is available for Europe, the United States, and Southeast Asia.",
    status: "confirmed"
  },
  {
    question: "How long does delivery take?",
    answer: "Estimated delivery time is 3-10 days.",
    status: "confirmed"
  },
  {
    question: "Can I return or exchange a product?",
    answer: "Returns and exchanges are available within 30 days.",
    status: "confirmed"
  },
  {
    question: "How long is the warranty period?",
    answer: "The warranty period is 365 days. Keep your order information ready when contacting support about a warranty request.",
    status: "confirmed"
  },
  {
    question: "Who should ask a professional before using heat, compression, EMS, or massage devices?",
    answer: "Users with medical conditions, implanted medical electronic devices, pregnancy or recent childbirth, wounds near the application area, abnormal blood pressure, sensitive skin, or other physical abnormalities should consult a qualified professional before use.",
    status: "confirmed"
  },
  {
    question: "Is checkout already connected to Shopify?",
    answer: "Not yet. The demo keeps cart, order tracking, and policy paths visible, but real checkout requires Shopify product handles, variants, inventory, shipping profiles, and payment settings.",
    status: "to_confirm"
  }
];
