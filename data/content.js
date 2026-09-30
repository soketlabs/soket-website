// Centralized content for the Soket.ai home page
// Edit copy here for easy updates

export const homeContent = {
  meta: {
    title: "Soket AI — Frontier AI for mission-critical work",
    description:
      "Soket AI builds math, code and reasoning models and agents, plus the full stack to run them on your infrastructure. Trusted, auditable, safe and efficient. Selected by the IndiaAI Mission.",
  },

  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Research", href: "/research" },
      {
        label: "Products",
        href: "#",
        dropdown: [
          { label: "Project EKA", href: "/project-eka" },
          { label: "Loop", href: "/loop" },
          { label: "Inference", href: "/inference" },
        ],
      },
      { label: "Solutions", href: "/contact" },
      { label: "Blog", href: "/blogs" },
      { label: "Careers", href: "/careers/jobs" },
    ],
    cta: { label: "Talk to us", href: "/contact" },
    banner: {
      text: "We're hiring researchers and engineers.",
      cta: "See open roles",
      href: "/careers/jobs",
    },
  },

  hero: {
    eyebrow: "// FRONTIER RESEARCH · MATH · CODE · REASONING",
    headline: "Frontier AI for work where a wrong answer has a cost.",
    subline:
      "We research and build models and agents that are trusted, auditable, safe, ethical and efficient. Then we give you the whole stack to run them under your control.",
    cta1: { label: "Explore our research", href: "/project-eka" },
    cta2: { label: "Talk to us", href: "/contact" },
    proofStrip: [
      { label: "SELECTED LAB", value: "INDIAAI MISSION" },
      { label: null, value: "1,536 × H100" },
      { label: null, value: "25T TOKENS CURATED" },
      { label: null, value: "120B+ PARAMS · IN TRAINING" },
    ],
  },

  derivationTrace: {
    examples: [
      {
        domain: "Finance",
        problem: "Verify: Q3 revenue variance exceeds 5% threshold",
        steps: [
          { text: "Load Q3 actuals: ₹124 Cr", verified: true },
          { text: "Load Q3 forecast: ₹118 Cr", verified: true },
          { text: "Compute variance: (124 - 118) / 118", verified: true },
          { text: "Result: 5.08%", verified: true },
          { text: "Compare: 5.08% > 5% threshold", verified: true },
          { text: "Flag: MATERIAL_VARIANCE", verified: true },
          { text: "Cite: Ind AS 108, internal policy §4.2", verified: true },
        ],
        summary: { steps: 7, sources: 3 },
      },
      {
        domain: "Cybersecurity",
        problem: "Trace: CVE-2024-3094 exposure in supply chain",
        steps: [
          { text: "Parse dependency tree: 847 packages", verified: true },
          { text: "Match CVE signature: xz-utils 5.6.0-5.6.1", verified: true },
          { text: "Locate: build-deps/compression/xz@5.6.1", verified: true },
          {
            text: "Check call path: sshd → liblzma → backdoor",
            verified: true,
          },
          { text: "Assess: RCE via SSH auth bypass", verified: true },
          { text: "Priority: CRITICAL, CVSS 10.0", verified: true },
          { text: "Cite: NIST NVD, vendor advisory", verified: true },
        ],
        summary: { steps: 7, sources: 3 },
      },
      {
        domain: "Legal",
        problem: "Review: Force majeure clause applicability",
        steps: [
          { text: "Extract clause §14.2 from MSA", verified: true },
          {
            text: "Parse triggering events: pandemic, war, embargo",
            verified: true,
          },
          { text: "Match current event: supply disruption", verified: true },
          { text: "Check notice requirement: 48hr written", verified: true },
          { text: "Verify notice sent: 2024-03-15 09:41 UTC", verified: true },
          { text: "Assess: clause APPLICABLE", verified: true },
          { text: "Cite: MSA §14.2, UCC §2-615, email record", verified: true },
        ],
        summary: { steps: 7, sources: 3 },
      },
    ],
  },

  mission: {
    label: "// OUR RESEARCH OBJECTIVE",
    headline: "Agents that derive, not guess.",
    intro:
      "Our research goal is MCR Agents: models that reason in math, code and logic, show every step, and can be checked before anyone acts on them. Everything we ship moves toward that goal.",
    pillars: [
      {
        number: "01",
        title: "Math",
        description: "Rigorous, step-by-step quantitative reasoning.",
      },
      {
        number: "02",
        title: "Code",
        description:
          "Writing, reading and verifying programs as a tool for thought.",
      },
      {
        number: "03",
        title: "Reasoning",
        description: "Long-horizon logic that holds up under scrutiny.",
      },
    ],
    flow: ["Problem", "Formalise", "Derive", "Verify", "Act"],
    link: { label: "Read our research directions", href: "/project-eka" },
  },

  products: {
    label: "// PRODUCTS",
    headline: "A frontier stack you own.",
    subline:
      "Models, serving and orchestration. Every layer is built by us and runs on your infrastructure.",
    items: [
      {
        number: "01",
        name: "Project EKA",
        subtitle: "foundation models",
        tag: "IN TRAINING",
        description:
          "Sovereign models for math, code and reasoning, fluent in 60+ Indian, Global South and programming languages.",
        spec: "120B+ PARAMS · 24B CODE & REASONING (COMING SOON)",
        link: { label: "Explore Project EKA", href: "/project-eka" },
        primary: true,
      },
      {
        number: "02",
        name: "Loop",
        subtitle: "the agent harness",
        tag: "OPEN SOURCE",
        description:
          "Tool use, evaluation and control in one loop. Run models on serious work, on your infrastructure.",
        spec: "TOOLS · EVALS · GUARDRAILS · LOGS",
        link: {
          label: "Check out Loop",
          href: "/loop",
        },
        primary: false,
      },
      {
        number: "03",
        name: "Inference Platform",
        subtitle: null,
        tag: null,
        description:
          "Serve, route and evaluate EKA and selected open models, on-premise, air-gapped or in your cloud.",
        spec: "ON-PREM · AIR-GAPPED · VPC",
        link: { label: "Learn more", href: "/inference" },
        primary: false,
      },
    ],
  },

  domains: {
    label: "// WHERE IT MATTERS",
    headline: "Built for critical work.",
    subline:
      "The domains our research is aimed at, and where partners put the Soket stack to work.",
    items: [
      {
        name: "Cybersecurity",
        description:
          "Triage alerts and trace exploits through code, with every step shown.",
        href: "/contact",
      },
      {
        name: "Defence",
        description:
          "Analysis and planning support, designed for air-gapped deployment.",
        href: "/contact",
      },
      {
        name: "Finance",
        description:
          "Models that show their arithmetic, for risk, reconciliation and reporting.",
        href: "/contact",
      },
      {
        name: "Banking",
        description:
          "Compliance-aware agents for KYC, credit and operations, inside your perimeter.",
        href: "/contact",
      },
      {
        name: "Legal",
        description:
          "Reasoning across statutes, contracts and precedent, with citations you can check.",
        href: "/contact",
      },
      {
        name: "Agriculture",
        description:
          "Decision support for yield, weather and markets, in the languages farmers speak.",
        href: "/contact",
      },
    ],
  },

  principles: {
    label: "// HOW WE BUILD",
    headline: "Five commitments, checked at every layer.",
    items: [
      {
        word: "TRUSTED",
        description: "Answers you can trace back to steps and sources.",
      },
      {
        word: "AUDITABLE",
        description:
          "Evaluations, data lineage and decision logs open to inspection.",
      },
      {
        word: "SAFE",
        description:
          "Red-teamed and evaluated before release, with guardrails for high-stakes use.",
      },
      {
        word: "ETHICAL",
        description:
          "Responsible data, inclusive languages, published methods.",
      },
      {
        word: "EFFICIENT",
        description:
          "Optimized architectures and tuned kernels: more capability per GPU-hour and per watt.",
      },
    ],
    link: { label: "Our approach to trust & safety", href: "/project-eka" },
  },

  research: {
    label: "// IN THE OPEN",
    headline: "Research, published.",
    items: [
      {
        slug: "coshe_eval",
        date: "2024",
        title: "CoSHE-Eval",
        summary: "A 30-hour Hindi–English code-switching ASR benchmark.",
        href: "/blogs/coshe_eval",
      },
      {
        slug: "dhrith",
        date: "2024",
        title: "Dhrith",
        summary:
          "Emotion-aware speech recognition for India's multilingual voices.",
        href: "/blogs/dhrith",
      },
      {
        slug: "pragna_1b",
        date: "2024",
        title: "Pragna-1B",
        summary: "Our open 1.25B multilingual model, trained from scratch.",
        href: "/blogs/pragna_1b",
      },
    ],
    link: { label: "All research & releases", href: "/blogs" },
  },

  cta: {
    headline: "Build the critical stack with us.",
    items: [
      {
        label: "Partner with us",
        value: "partnerships@soket.ai",
        href: "mailto:partnerships@soket.ai",
      },
      {
        label: "Join the team",
        value: "Open roles",
        href: "/careers/jobs",
      },
      {
        label: "Follow the research",
        value: "Join our Discord",
        href: "https://discord.gg/8GKr7mxvtS",
      },
    ],
  },

  footer: {
    tagline: "Frontier AI research lab. Bengaluru, India.",
    columns: [
      {
        title: "Products",
        links: [
          { label: "Project EKA", href: "/project-eka" },
          { label: "Loop", href: "/loop" },
          { label: "Inference", href: "/inference" },
        ],
      },
      {
        title: "Research",
        links: [
          { label: "Directions", href: "/project-eka" },
          { label: "Publications", href: "/blogs" },
          { label: "Open source", href: "https://github.com/soketlabs" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/project-eka" },
          { label: "Careers", href: "/careers/jobs" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    emails: ["connect@soket.ai", "partnerships@soket.ai"],
    socials: [
      { name: "X", href: "https://x.com/soketlabs" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/soketlabs" },
      { name: "YouTube", href: "https://www.youtube.com/@SoketAI" },
      { name: "Instagram", href: "https://www.instagram.com/soketlabs/" },
    ],
    copyright: "© 2026 Soket AI",
  },
};
