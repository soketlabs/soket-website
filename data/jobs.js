export const jobs = [
  {
    slug: "hpc_infrastructure_engineer",
    team: "AI Infrastructure",
    title: "HPC Infrastructure Engineer",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "May 1, 2026",
    applyUrl:
      "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/ecc1c880-83af-47f4-ae05-04979727f82e",
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
      "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/a619352a-217f-4106-afaf-d3765daec4cb",
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
      "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/af3b48bf-b9d8-4a4a-a10b-548fc9df1b48",
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
      "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/4e27a4a7-0224-4f54-986b-81f513e66908",
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
      "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/8130b02b-763a-40fc-aeab-0c5092e158e7",
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
      "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/34ef132c-2477-4f83-8f43-ecd86b9e22cc",
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
      "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/16394e40-df7f-44b5-9eb7-fb952f931b77",
    summary:
      "Design, develop, and optimise high-performance CUDA kernels for large-scale foundation model training and inference workloads.",
    salary: {
      min: 5500000,
      max: 7500000,
    },
    equity: true,
  },
  {
    slug: "full_stack_developer",
    team: "AI Infrastructure",
    title: "Software Engineer – Backend & Platform",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "Aug 25, 2026",
    applyUrl:
      "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/1591df77-1e21-4317-80b1-a9856a284a3f",
    summary:
      "Build and scale the platform powering Soket's Console — Our API and developer platform.",
  },
  {
    slug: "ai_solutions_partnerships_architect",
    team: "Partnerships and Business Development",
    title: "AI Solutions & Partnerships Architect",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "Oct 9, 2026",
    applyUrl:
      "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/3d7a59ed-5403-4737-949a-23995f3f21b3",
    summary:
      "Be the technical and strategic bridge between what Soket builds and what its stakeholders need, from AI solution architecture to long-term partnerships.",
  },
  {
    slug: "cybersecurity_agentic",
    team: "Expert Systems & Alignment",
    title: "Agentic Cybersecurity Engineer - Foundation Models",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    postedDate: "Oct 13, 2026",
    applyUrl:
      "https://in.northstarz.ai/job/candidate/63a14975-ee9f-4449-84e0-9b533dcaf056/0a7acbc5-a5f3-421e-a54e-583c3af2a744",
    summary:
      "Be the cybersecurity domain expert behind Soket's frontier model, curating data, designing agentic workflows, and building evals for offensive and defensive security.",
  },
];

export const jobsBySlug = jobs.reduce((accumulator, job) => {
  accumulator[job.slug] = job;
  return accumulator;
}, {});
