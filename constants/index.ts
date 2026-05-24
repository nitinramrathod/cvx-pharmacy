export const SITE_CONFIG = {
  name: "CVX Pharmacy",
  tagline: "Advanced Clinical Pharmacy & Patient Care",
  description: "CVX Pharmacy — Jalna's premier clinical pharmacy offering Medication Therapy Management, NCD Care, and evidence-based pharmaceutical care.",
  url: "https://cvxpharmacy.in",
  phone: "8002255800",
  phoneDisplay: "+91 80022 55800",
  email: "care@cvxpharmacy.in",
  address: "Choudhary Nagar, Jalna, Maharashtra 431203",
  whatsappUrl: "https://wa.me/918002255800",
  founded: 2025
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Medicines", href: "/medicines" },
  { label: "Health Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
];

export const STATS = [
  { value: 500, suffix: "+", label: "Patients Served", icon: "Users" },
  { value: 50, suffix: "+", label: "Clinical Services", icon: "Activity" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", icon: "Heart" },
  { value: 1000, suffix: "+", label: "Medicines Available", icon: "Package" }
];

export const SERVICES = [
  {
    id: "mtm",
    title: "Medication Therapy Management",
    shortTitle: "MTM",
    description: "Comprehensive review of all your medications to optimize therapeutic outcomes and minimize adverse effects.",
    icon: "Pill",
    color: "from-blue-500 to-blue-700",
    features: ["Complete Medication Review", "Drug Interaction Screening", "Personalized Medication Action Plan", "Follow-up Monitoring"]
  },
  {
    id: "ncd",
    title: "NCD Care Program",
    shortTitle: "NCD Care",
    description: "Specialized management for non-communicable diseases including diabetes, hypertension, and cardiovascular conditions.",
    icon: "Heart",
    color: "from-rose-500 to-pink-700",
    features: ["Diabetes Management", "Hypertension Control", "Lifestyle Modification", "Regular Monitoring"]
  },
  {
    id: "counseling",
    title: "Clinical Counseling",
    shortTitle: "Counseling",
    description: "One-on-one patient counseling sessions with our clinical pharmacists for better health outcomes.",
    icon: "MessageCircle",
    color: "from-cyan-500 to-teal-700",
    features: ["Medication Education", "Adherence Support", "Side Effect Management", "Lifestyle Guidance"]
  },
  {
    id: "rational",
    title: "Rational Medicine Use",
    shortTitle: "RMU",
    description: "Evidence-based approach ensuring you receive the most appropriate medicine at the right dose.",
    icon: "CheckSquare",
    color: "from-violet-500 to-purple-700",
    features: ["Evidence-Based Prescribing", "Dosage Optimization", "Generic Medicine Guidance", "Cost-Effective Therapy"]
  },
  {
    id: "wellness",
    title: "Wellness Support",
    shortTitle: "Wellness",
    description: "Holistic wellness programs combining pharmaceutical care with lifestyle and nutritional guidance.",
    icon: "Leaf",
    color: "from-emerald-500 to-green-700",
    features: ["Nutritional Guidance", "Supplement Counseling", "Preventive Health Screening", "Wellness Plans"]
  },
  {
    id: "adherence",
    title: "Patient Adherence Support",
    shortTitle: "Adherence",
    description: "Dedicated support systems to help patients stay consistent with their medication regimens.",
    icon: "Calendar",
    color: "from-amber-500 to-orange-700",
    features: ["Medication Reminders", "Pill Organizer Guidance", "Refill Management", "Progress Tracking"]
  },
  {
    id: "prescription",
    title: "Prescription Review",
    shortTitle: "Rx Review",
    description: "Expert pharmacist review of all prescriptions to catch errors, interactions, and optimize therapy.",
    icon: "FileText",
    color: "from-sky-500 to-blue-600",
    features: ["Rx Validation", "Duplicate Therapy Check", "Dosage Verification", "Prescriber Consultation"]
  },
  {
    id: "followup",
    title: "Follow-up Care",
    shortTitle: "Follow-up",
    description: "Structured follow-up programs to track your health progress and adjust therapies as needed.",
    icon: "RefreshCw",
    color: "from-indigo-500 to-blue-700",
    features: ["Regular Check-ins", "Lab Result Review", "Therapy Adjustments", "Progress Reports"]
  },
  {
    id: "diabetes",
    title: "Diabetes Care",
    shortTitle: "Diabetes",
    description: "Comprehensive diabetes management including blood glucose monitoring, insulin counseling, and lifestyle modifications.",
    icon: "Droplets",
    color: "from-teal-500 to-cyan-700",
    features: ["Blood Glucose Monitoring", "Insulin Counseling", "HbA1c Tracking", "Diet Planning"]
  }
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Patil",
    role: "Diabetes Patient",
    location: "Jalna",
    content: "CVX Pharmacy transformed how I manage my diabetes. Their clinical pharmacist helped me understand my medications and my HbA1c improved significantly within 3 months.",
    rating: 5,
    avatar: "RP"
  },
  {
    name: "Sunita Deshmukh",
    role: "Hypertension Patient",
    location: "Jalna",
    content: "Finally a pharmacy that cares about more than just selling medicines. They reviewed all my medications and found a dangerous interaction my doctor had missed!",
    rating: 5,
    avatar: "SD"
  },
  {
    name: "Anil Kulkarni",
    role: "Heart Patient",
    location: "Ambad",
    content: "The MTM program at CVX Pharmacy is exceptional. I now understand exactly why I take each medication and have reduced my pill burden by two unnecessary drugs.",
    rating: 5,
    avatar: "AK"
  },
  {
    name: "Priya Joshi",
    role: "Wellness Member",
    location: "Jalna",
    content: "Their wellness program and supplement counseling have made a real difference. Very professional and knowledgeable team. Highly recommend to everyone!",
    rating: 5,
    avatar: "PJ"
  },
  {
    name: "Mahesh Shinde",
    role: "Senior Patient",
    location: "Jalna",
    content: "As a senior on multiple medications, CVX Pharmacy has been a blessing. They simplified my medication schedule and I no longer miss doses.",
    rating: 5,
    avatar: "MS"
  }
];

export const FAQS = [
  {
    question: "What is Medication Therapy Management (MTM)?",
    answer: "MTM is a comprehensive clinical pharmacy service where our pharmacist reviews all your medications to ensure they are safe, effective, and optimized for your health conditions. It includes identifying drug interactions, eliminating unnecessary medications, and improving adherence."
  },
  {
    question: "Do I need a prescription for all medications?",
    answer: "Schedule H and H1 drugs require a valid prescription from a registered medical practitioner. OTC (Over-the-Counter) medications can be purchased without a prescription. Our pharmacists can guide you on what requires a prescription."
  },
  {
    question: "What NCDs does CVX Pharmacy specialize in managing?",
    answer: "We specialize in diabetes mellitus (Type 1 & 2), hypertension, cardiovascular diseases, dyslipidemia, COPD, asthma, thyroid disorders, and other chronic conditions that require long-term medication management."
  },
  {
    question: "How do I book a clinical counseling session?",
    answer: "You can book a session by calling us at +91 80022 55800, messaging us on WhatsApp, or visiting our pharmacy directly. Sessions are available 7 days a week during business hours."
  },
  {
    question: "Is clinical pharmacy service free?",
    answer: "Basic medication counseling is complimentary with every prescription. Comprehensive MTM assessments and specialized NCD care programs may have nominal charges. Please contact us for details."
  },
  {
    question: "What are your business hours?",
    answer: "We are open Monday to Saturday from 9:00 AM to 9:00 PM, and Sunday from 10:00 AM to 6:00 PM. Emergency consultations can be arranged via WhatsApp."
  },
  {
    question: "Can you deliver medicines to my home?",
    answer: "Yes, we offer home delivery within Jalna city limits. Contact us via WhatsApp or phone to place your order. Prescription medicines require a valid Rx upload."
  },
  {
    question: "What is evidence-based pharmacotherapy?",
    answer: "Evidence-based pharmacotherapy means all our medication recommendations are backed by the latest clinical research, guidelines (like WHO, ADA, JNC), and scientific evidence — ensuring you receive the most proven and effective treatments."
  }
];

export const MEDICINES = [
  { id: 1, name: "Metformin 500mg", category: "chronic", description: "First-line therapy for Type 2 Diabetes Mellitus", price: 45, mrp: 60, discount: 25, rxRequired: true, tag: "Best Seller", condition: "Diabetes" },
  { id: 2, name: "Amlodipine 5mg", category: "chronic", description: "Calcium channel blocker for hypertension management", price: 35, mrp: 50, discount: 30, rxRequired: true, tag: "Popular", condition: "Hypertension" },
  { id: 3, name: "Vitamin D3 60K IU", category: "vitamins", description: "Weekly Vitamin D supplementation for bone health", price: 180, mrp: 220, discount: 18, rxRequired: false, tag: "Best Value", condition: "Vitamin D Deficiency" },
  { id: 4, name: "Atorvastatin 10mg", category: "chronic", description: "HMG-CoA reductase inhibitor for cholesterol management", price: 55, mrp: 75, discount: 27, rxRequired: true, tag: "Cardio Care", condition: "Dyslipidemia" },
  { id: 5, name: "Omega-3 Fish Oil", category: "wellness", description: "Premium EPA+DHA supplement for heart and brain health", price: 350, mrp: 450, discount: 22, rxRequired: false, tag: "Wellness", condition: "Cardiovascular Health" },
  { id: 6, name: "Paracetamol 650mg", category: "otc", description: "Fast-acting fever and pain relief", price: 25, mrp: 30, discount: 17, rxRequired: false, tag: "OTC", condition: "Pain & Fever" },
  { id: 7, name: "Glucometer Kit", category: "diagnostics", description: "Accurate blood glucose monitoring device with 25 strips", price: 850, mrp: 1200, discount: 29, rxRequired: false, tag: "Diagnostic", condition: "Diabetes Monitoring" },
  { id: 8, name: "Multivitamin Complete", category: "vitamins", description: "Daily complete vitamin and mineral supplement", price: 280, mrp: 350, discount: 20, rxRequired: false, tag: "Daily Health", condition: "General Wellness" },
  { id: 9, name: "Cetirizine 10mg", category: "otc", description: "Second-generation antihistamine for allergy relief", price: 20, mrp: 28, discount: 29, rxRequired: false, tag: "OTC", condition: "Allergy" },
  { id: 10, name: "BP Monitor Digital", category: "diagnostics", description: "Automatic upper arm blood pressure monitor", price: 1200, mrp: 1800, discount: 33, rxRequired: false, tag: "Diagnostic", condition: "Hypertension Monitoring" },
  { id: 11, name: "Ashwagandha Extract", category: "wellness", description: "Standardized adaptogen for stress and vitality", price: 299, mrp: 399, discount: 25, rxRequired: false, tag: "Ayurvedic", condition: "Stress & Vitality" },
  { id: 12, name: "Salbutamol Inhaler", category: "chronic", description: "Short-acting bronchodilator for asthma relief", price: 120, mrp: 160, discount: 25, rxRequired: true, tag: "Respiratory", condition: "Asthma/COPD" }
];

export const MEDICINE_CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "chronic", label: "Chronic Care" },
  { id: "otc", label: "OTC Medicines" },
  { id: "wellness", label: "Wellness" },
  { id: "diagnostics", label: "Diagnostics" },
  { id: "vitamins", label: "Vitamins & Supplements" }
];

export const BLOG_POSTS = [
  {
    id: "streptokinase-vs-alteplase",
    title: "Streptokinase vs Alteplase — Thrombolytic Therapy Insights",
    excerpt: "A comprehensive clinical comparison of thrombolytic agents used in acute myocardial infarction and ischemic stroke — weighing efficacy, safety, and cost considerations.",
    category: "Clinical Pharmacology",
    readTime: "8 min read",
    date: "Jan 15, 2025",
    author: "Clinical Team, CVX Pharmacy",
    featured: true,
    tags: ["Cardiology", "Thrombolytics", "AMI", "Stroke", "Clinical Pharmacy"]
  },
  {
    id: "diabetes-medication-adherence",
    title: "Why Medication Adherence Is the Cornerstone of Diabetes Control",
    excerpt: "Understanding the science behind medication adherence in Type 2 Diabetes and practical strategies to maintain HbA1c targets.",
    category: "Diabetes Care",
    readTime: "6 min read",
    date: "Jan 10, 2025",
    author: "CVX Pharmacy",
    featured: false,
    tags: ["Diabetes", "Adherence", "HbA1c", "NCD Care"]
  },
  {
    id: "rational-medicine-use",
    title: "The Principle of Rational Medicine Use — A Patient's Guide",
    excerpt: "What it means to use medicines rationally, why it matters, and how clinical pharmacists at CVX Pharmacy ensure you get the right medicine at the right dose.",
    category: "Patient Education",
    readTime: "5 min read",
    date: "Jan 5, 2025",
    author: "CVX Pharmacy",
    featured: false,
    tags: ["Rational Use", "Patient Safety", "Clinical Pharmacy"]
  },
  {
    id: "hypertension-silent-killer",
    title: "Hypertension: The Silent Killer You Can Control",
    excerpt: "Evidence-based strategies for blood pressure management, including the latest JNC guidelines, lifestyle modifications, and pharmacological options.",
    category: "NCD Care",
    readTime: "7 min read",
    date: "Dec 28, 2024",
    author: "CVX Pharmacy",
    featured: false,
    tags: ["Hypertension", "Blood Pressure", "NCD", "Lifestyle"]
  }
];

export const FEATURED_ARTICLE_CONTENT = {
  title: "Streptokinase vs Alteplase — Thrombolytic Therapy Insights",
  subtitle: "A comprehensive clinical pharmacology comparison",
  introduction: "Thrombolytic therapy represents one of the most time-critical interventions in modern medicine. When a coronary artery or cerebral vessel is occluded by a thrombus, the race against time begins. Two agents dominate clinical practice globally: Streptokinase (SK) and Alteplase (rt-PA). Understanding their differences is critical for optimal patient outcomes.",
  sections: [
    {
      heading: "Mechanism of Action",
      content: "Streptokinase is an indirect thrombolytic — it combines with plasminogen to form an activator complex that converts other plasminogen molecules to plasmin, causing systemic fibrinogenolysis. Alteplase (recombinant tissue plasminogen activator, rt-PA) is fibrin-selective — it preferentially binds to fibrin within a clot and activates clot-bound plasminogen, resulting in localized clot dissolution with minimal systemic effects."
    },
    {
      heading: "Clinical Efficacy in STEMI",
      content: "The landmark GUSTO trial demonstrated that alteplase with accelerated dosing achieves superior TIMI-3 flow rates (54%) compared to streptokinase (~32%). This translates to a 14% relative reduction in 30-day mortality with alteplase. Streptokinase remains clinically relevant — GISSI and ISIS-2 trials established its mortality benefit in STEMI, and in low-resource settings where alteplase cost is prohibitive, streptokinase remains a valuable, life-saving option."
    },
    {
      heading: "Safety Profile",
      content: "The most feared complication is intracranial hemorrhage (ICH). Alteplase carries a slightly higher ICH risk (~0.7%) compared to streptokinase (~0.4%). Streptokinase uniquely carries a risk of allergic reactions and anaphylaxis (~1.7%) due to its Streptococcal origin. Critically, repeat use of streptokinase within 5 years is contraindicated due to neutralizing antibody formation. Both agents share contraindications including recent surgery, active bleeding, uncontrolled hypertension, and prior hemorrhagic stroke."
    },
    {
      heading: "Use in Acute Ischemic Stroke",
      content: "In acute ischemic stroke, alteplase is the evidence-based standard of care (within 4.5 hours of onset, per NINDS and ECASS-3 trials). Streptokinase is NOT indicated for ischemic stroke — clinical trials showed unacceptable hemorrhagic transformation rates. The newer agent tenecteplase (TNK) is emerging as a convenient single-bolus alternative to alteplase in both STEMI and ischemic stroke."
    },
    {
      heading: "Pharmacoeconomic Considerations",
      content: "Cost is a significant differentiating factor. Streptokinase costs ~₹1,500–3,000 per dose in India compared to alteplase at ~₹25,000–40,000. This 10–15× cost differential influences treatment decisions in resource-limited settings. Given this economic reality, streptokinase remains on the WHO Essential Medicines List and India's NLEM as the preferred thrombolytic for STEMI in government hospitals."
    },
    {
      heading: "Clinical Pharmacist's Role",
      content: "Clinical pharmacists play a vital role in thrombolytic therapy management: ensuring appropriate patient selection (checking contraindications), verifying dosing and preparation protocols, monitoring for hemorrhagic complications, and educating patients on post-thrombolysis anticoagulation. At CVX Pharmacy, we emphasize comprehensive medication review as part of our MTM program, ensuring optimal evidence-based secondary prevention therapy."
    }
  ],
  keyComparison: [
    { feature: "Mechanism", streptokinase: "Indirect (complex formation)", alteplase: "Direct (fibrin-specific)" },
    { feature: "Fibrin Selectivity", streptokinase: "Non-selective", alteplase: "Fibrin-selective" },
    { feature: "TIMI-3 Flow (STEMI)", streptokinase: "~32%", alteplase: "~54%" },
    { feature: "ICH Risk", streptokinase: "~0.4%", alteplase: "~0.7%" },
    { feature: "Allergic Reactions", streptokinase: "Yes (~1.7%)", alteplase: "Rare" },
    { feature: "Repeat Dosing", streptokinase: "Contraindicated <5 yrs", alteplase: "No restriction" },
    { feature: "Use in Stroke", streptokinase: "Not recommended", alteplase: "Standard of care" },
    { feature: "Cost (India)", streptokinase: "₹1,500–3,000", alteplase: "₹25,000–40,000" },
    { feature: "WHO NLEM Listed", streptokinase: "Yes", alteplase: "Yes" }
  ],
  conclusion: "Both streptokinase and alteplase remain important therapeutic tools in the management of thromboembolic emergencies. The choice involves weighing clinical efficacy, safety profile, patient history, and healthcare resource availability. The evolving landscape of thrombolytic therapy continues to improve outcomes for patients with life-threatening thrombotic events."
};
