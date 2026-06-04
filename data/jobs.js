export const jobs = [
  {
    slug: "hpc_infrastructure_engineer",
    team: "AI Infrastructure",
    title: "HPC Infrastructure Engineer",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "May 1, 2026",
    applyUrl:
      "https://northstarz.ai/ats/#/careers/911af2cf-d032-4ea1-8e39-d2f018241408/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    summary: "Manage and maintain a large-scale SLURM cluster",
    salary: {
      min: 1000000,
      max: 2000000,
    },
  },
  {
    slug: "data_curator_fm",
    team: "AI Research & Engineering",
    title: "AI Data Curator - Foundation Models",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "May 25, 2026",
    applyUrl:
      "https://northstarz.ai/ats/#/careers/aeb783a9-5942-450a-880d-32382f63eaa3/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    summary:
      "Design, curate, validate, and continuously improve high-quality datasets powering large-scale AI systems.",
    salary: {
      min: 1800000,
      max: 2500000,
    },
  },
  {
    slug: "ai_data_engineer_fm",
    team: "AI Research & Engineering",
    title: "AI Data Engineer - Foundation Models",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "May 1, 2026",
    applyUrl:
      "https://northstarz.ai/ats/#/careers/cd88e92c-2c61-4626-bafd-8e9dde70c9a3/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    summary:
      "Build and maintain scalable, production-grade data pipelines for foundation models training data.",
    salary: {
      min: 3500000,
      max: 5000000,
    },
    equity: true,
  },
  {
    slug: "research_scientist_data_fm",
    team: "AI Research & Engineering",
    title: "Research Scientist, Data - Foundation Models",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "May 24, 2026",
    applyUrl:
      "https://northstarz.ai/ats/#/careers/d56e23ba-eaf8-475b-bdf2-0876de086088/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    summary:
      "Lead capability-driven data strategy for frontier foundation model development across pretraining and post-training stages.",
    salary: {
      min: 5500000,
      max: 10000000,
    },
    equity: true,
  },
  {
    slug: "research_scientist_pretraining_fm",
    team: "AI Research & Engineering",
    title: "Research Scientist, Pretraining - Foundation Models",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "May 24, 2026",
    applyUrl:
      "https://northstarz.ai/ats/#/careers/24dda8b4-7e8f-4720-8d99-3917a11367f3/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    summary:
      "Drive research and development across both pretraining and post-training pipelines for large-scale foundation models.",
    salary: {
      min: 8000000,
      max: 15000000,
    },
    equity: true,
  },
  {
    slug: "ml_engineer_fm",
    team: "AI Research & Engineering",
    title: "Machine Learning Engineer - Foundation Models",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "May 25, 2026",
    applyUrl:
      "https://northstarz.ai/ats/#/careers/ab00cc27-c864-499f-b706-0c8c78bec5ea/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    summary:
      "Design, implement, and optimize large-scale pretraining and post-training pipelines for foundation models.",
    salary: {
      min: 5500000,
      max: 7500000,
    },
    equity: true,
  },
  {
    slug: "kernel_engineer_fm",
    team: "AI Research & Engineering",
    title: "Kernel Engineer - Foundation Models",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "May 25, 2026",
    applyUrl:
      "https://northstarz.ai/ats/#/careers/2c9f5bfe-0c9e-4c6b-8c7a-4cddc2574e9b/23faafdd-88b9-4687-9a1b-6b1ba5e6d2c0",
    summary:
      "Design, develop, and optimise high-performance CUDA kernels for large-scale foundation model training and inference workloads.",
    salary: {
      min: 5500000,
      max: 7500000,
    },
    equity: true,
  },
];

export const jobsBySlug = jobs.reduce((accumulator, job) => {
  accumulator[job.slug] = job;
  return accumulator;
}, {});
