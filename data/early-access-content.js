export const WAITLIST_ENDPOINT =
  process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ||
  "https://api.soket.ai/api/v1/waitlist/eka";

export const EARLY_ACCESS_HERO = {
  label: "// EARLY ACCESS",
  title: "Get early access to EKA-1",
  description:
    "EKA-1 comes out of Project EKA, our flagship research program in math, code, reasoning and multilingual AI. Join the waitlist to be among the first to build with it.",
  stepsLabel: "How early access works",
};

export const EARLY_ACCESS_STEPS = [
  {
    number: "01",
    title: "Join the waitlist",
    description: "Tell us who you are and what you'd like to do with EKA-1.",
  },
  {
    number: "02",
    title: "We review your request",
    description: "Our team reads each request and approves access.",
  },
  {
    number: "03",
    title: "Start building",
    description: "We'll email you once you're approved.",
  },
];

export const EARLY_ACCESS_FORM = {
  label: "// REQUEST ACCESS",
  fields: {
    fullName: { label: "Full name", placeholder: "Your name", maxLength: 100 },
    email: { label: "Email", placeholder: "you@company.com", maxLength: 254 },
    useCase: {
      label: "What would you like to use EKA-1 for?",
      placeholder: "The product you're building, or the research you're doing.",
      maxLength: 1000,
    },
  },
  dataConsent:
    "I agree that Soket may use data from my EKA-1 usage, including my prompts and the responses, to improve its models.",
  submit: "Join the waitlist",
  submitting: "Sending...",
  errors: {
    fullName: "Please enter your name.",
    email: "Please enter a valid email address.",
    useCase: "Please tell us how you'd like to use EKA-1.",
    dataConsent: "Please tick this box to join the waitlist.",
    server: "We couldn't send your request. Please try again.",
  },
  success: {
    title: "You're on the waitlist",
    description: (email) =>
      `Thanks for your interest in EKA-1. We'll write to ${email} once your request has been reviewed.`,
    cta: { label: "Explore Project EKA", href: "/project-eka" },
  },
};
