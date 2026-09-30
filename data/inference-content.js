export const INFERENCE_HERO = {
  label: "// INFERENCE ENGINE",
  title: "AI that you run and own.",
  description:
    "Deploy open-source models and EKA models on-premise. Your data stays with you. We bring the infrastructure to you.",
};

export const INFERENCE_FEATURES = [
  {
    number: "01",
    title: "On-premise deployment",
    description:
      "Deploy in your data center, VPC, or air-gapped environment. Full control over your infrastructure.",
  },
  {
    number: "02",
    title: "Data sovereignty",
    description:
      "Your data never leaves your infrastructure. Complete compliance with data residency requirements.",
  },
  {
    number: "03",
    title: "EKA models",
    description:
      "Access Soket's frontier models — math, code, reasoning, and multilingual — optimized for your hardware.",
  },
  {
    number: "04",
    title: "Open-source models",
    description:
      "Deploy Llama, Mistral, Qwen, and other open models with production-grade serving infrastructure.",
  },
  {
    number: "05",
    title: "Optimized inference",
    description:
      "Kernel fusion, quantization, and speculative decoding. Maximum throughput on your GPUs.",
  },
  {
    number: "06",
    title: "Enterprise support",
    description:
      "Dedicated support, SLAs, and custom integrations. We work with your team to deploy and optimize.",
  },
];

export const SUPPORTED_MODELS = [
  {
    category: "EKA Models",
    models: ["EKA-Math", "EKA-Code", "EKA-Reasoning", "Pragna-1B", "Dhrith ASR"],
  },
  {
    category: "Open Source",
    models: ["Llama 3.x", "Mistral", "Qwen", "DeepSeek", "Gemma"],
  },
];

export const DEPLOYMENT_OPTIONS = [
  {
    title: "Private Cloud",
    description: "Deploy in AWS, GCP, Azure, or any cloud with your VPC.",
  },
  {
    title: "On-Premise",
    description: "Deploy in your data center with our managed infrastructure.",
  },
  {
    title: "Air-Gapped",
    description: "Fully disconnected deployments for sensitive environments.",
  },
];

export const INFERENCE_CTA = {
  title: "Ready to deploy?",
  description: "Talk to our team about on-premise deployment for your organization.",
  primaryAction: {
    label: "Contact us",
    href: "/contact",
  },
  secondaryAction: {
    label: "Learn more",
    href: "/project-eka",
  },
};
