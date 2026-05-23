export const jobs = [
  {
    slug: "hpc_infrastructure_engineer",
    team: "AI Infrastructure",
    title: "HPC Infrastructure Engineer",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "May 1, 2026",
    applyUrl:
      "https://northstarz.ai/ats/#/careers/24b0d23e-66aa-46a1-b7cd-158736ca9027/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    summary: "Manage and maintain a large-scale SLURM cluster",
    salary: {
      min: 1000000,
      max: 2000000,
    },
  },
  // {
  //   slug: "research-manager-interpretability",
  //   team: "AI Research & Engineering",
  //   title: "[Expression of Interest] Research Manager, Interpretability",
  //   location: "San Francisco, CA",
  //   employmentType: "Full-time",
  //   postedDate: "May 1, 2026",
  //   applyUrl: "https://example.com/apply/research-manager-interpretability",
  //   summary:
  //     "Lead execution, hiring, and growth for an interpretability research team working on mechanistic understanding of large language models.",
  // },
  // {
  //   slug: "research-scientist-interpretability",
  //   team: "AI Research & Engineering",
  //   title: "Research Scientist, Interpretability",
  //   location: "Bengaluru, India; Remote-Friendly",
  //   employmentType: "Full-time",
  //   postedDate: "April 28, 2026",
  //   applyUrl: "https://example.com/apply/research-scientist-interpretability",
  //   summary:
  //     "Drive mechanistic interpretability research on large language models.",
  // },
  // {
  //   slug: "research-engineer-llm",
  //   team: "AI Research & Engineering",
  //   title: "Research Engineer, Large Language Models",
  //   location: "Bengaluru, India",
  //   employmentType: "Full-time",
  //   postedDate: "April 22, 2026",
  //   applyUrl: "https://example.com/apply/research-engineer-llm",
  //   summary:
  //     "Build infrastructure and tooling for LLM research and evaluation.",
  // },
  // {
  //   slug: "speech-ml-engineer",
  //   team: "Speech & Applied ML",
  //   title: "ML Engineer, Speech & Audio",
  //   location: "Bengaluru, India; Hybrid",
  //   employmentType: "Full-time",
  //   postedDate: "April 15, 2026",
  //   applyUrl: "https://example.com/apply/speech-ml-engineer",
  //   summary: "Ship production speech models and low-latency ASR pipelines.",
  // },
  // {
  //   slug: "product-designer",
  //   team: "Speech & Applied ML",
  //   title: "Product Designer, Developer Tools",
  //   location: "Remote (India)",
  //   employmentType: "Full-time",
  //   postedDate: "March 30, 2026",
  //   applyUrl: "https://example.com/apply/product-designer",
  //   summary: "Design APIs and dashboards for speech and LLM products.",
  // },
];

export const jobsBySlug = jobs.reduce((accumulator, job) => {
  accumulator[job.slug] = job;
  return accumulator;
}, {});
