export const LOOP_HERO = {
  label: "// LOOP",
  title: "Your terminal, with agents.",
  description:
    "Loop is an open-source agentic terminal. Run tasks, automate workflows, and let agents work in secure sandboxes.",
  install: "curl -fsSL https://loop.soket.ai/install | bash",
  github: "https://github.com/soketlabs/loop",
};

export const LOOP_FEATURES = [
  {
    number: "01",
    title: "Open source",
    description:
      "MIT licensed. Inspect every line of code, contribute, and run it anywhere.",
    icon: "code",
    soon: false,
  },
  {
    number: "02",
    title: "Secure by default",
    description:
      "Native sandbox support. Agents run in isolated environments — no access to your files unless you allow it.",
    icon: "shield",
    soon: false,
  },
  {
    number: "03",
    title: "Skills marketplace",
    description:
      "Browse and install pre-built skills. From code generation to data analysis, extend Loop in one click.",
    icon: "grid",
    soon: true,
  },
  {
    number: "04",
    title: "Contextuality",
    description:
      "Switch context based on your work — from coding to legal to banking. Loop adapts to your domain.",
    icon: "layers",
    soon: true,
  },
  {
    number: "05",
    title: "Infinite loops",
    description:
      "Long-running agentic workloads. Set a task and let it run for hours or days. Check back when it's done.",
    icon: "loop",
    soon: false,
  },
];

export const LOOP_VIDEO = {
  src: "/videos/loop-demo.mp4",
  poster: "/images/loop-demo-poster.png",
};

export const LOOP_CTA = {
  title: "Ready to try Loop?",
  description: "One command to install. Open source. MIT licensed.",
  primaryAction: {
    label: "View on GitHub",
    href: "https://github.com/soketlabs/loop",
  },
  secondaryAction: {
    label: "Documentation",
    href: "https://github.com/soketlabs/loop#readme",
  },
};
