export const RESEARCH_HERO = {
  label: "// RESEARCH",
  title: "Advancing the science of AI.",
  description:
    "Our research spans efficient architectures, data systems, sustainability, and the societal impact of AI. Everything we build starts here.",
};

export const RESEARCH_AREAS = [
  {
    number: "01",
    title: "Efficient Architectures",
    description:
      "Sparse mixture-of-experts, routing strategies, and model designs that maximise capability per parameter. We build models that do more with less compute.",
    topics: [
      "Sparse MoE design",
      "Token routing",
      "Speculative decoding",
      "Quantization-aware training",
    ],
  },
  {
    number: "02",
    title: "Large-Scale Data",
    description:
      "Curation pipelines for high-quality multilingual corpora. From web crawls to synthetic generation, we build the datasets that train frontier models.",
    topics: [
      "Data filtering & dedup",
      "Synthetic data generation",
      "Indic language corpora",
      "Code & math datasets",
    ],
  },
  {
    number: "03",
    title: "Energy & Environment",
    description:
      "Sustainable AI research. We measure and minimise the carbon footprint of training runs, optimise power usage, and design for efficiency.",
    topics: [
      "Carbon-aware scheduling",
      "Power-efficient inference",
      "Cooling optimisation",
      "Green compute metrics",
    ],
  },
  {
    number: "04",
    title: "Future of Work",
    description:
      "How AI changes knowledge work. We study human-AI collaboration, skill augmentation, and the economic impact of automation in Indian contexts.",
    topics: [
      "Human-AI teaming",
      "Skill augmentation",
      "Labour market analysis",
      "Productivity measurement",
    ],
  },
  {
    number: "05",
    title: "AI Ethics",
    description:
      "Responsible AI from training to deployment. Bias detection, fairness constraints, privacy preservation, and governance frameworks for high-stakes use.",
    topics: [
      "Bias & fairness",
      "Privacy-preserving ML",
      "Explainability",
      "Governance frameworks",
    ],
  },
];

export const RESEARCH_PUBLICATIONS = [
  {
    title: "CoSHE-Eval",
    year: "2025",
    description: "A 30-hour Hindi–English code-switching ASR benchmark.",
    href: "/blogs/coshe_eval",
  },
  {
    title: "Dhrith",
    year: "2025",
    description: "Emotion-aware speech recognition for multilingual India.",
    href: "/blogs/dhrith",
  },
  {
    title: "Pragna-1B",
    year: "2024",
    description: "Open 1.25B multilingual model for Indian languages.",
    href: "/blogs/pragna_1b",
  },
];

export const RESEARCH_CTA = {
  title: "Join our research team",
  description: "We're hiring researchers across ML, systems, and applied AI.",
  primaryAction: {
    label: "Open roles",
    href: "/careers/jobs",
  },
  secondaryAction: {
    label: "Read our blog",
    href: "/blogs",
  },
};
