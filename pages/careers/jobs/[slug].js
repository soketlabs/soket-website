import HpcInfrastructureEngineer from "@/content/jobs/hpc_infrastructure_engineer.mdx";
import AiDataEngineerFm from "@/content/jobs/ai_data_engineer_fm.mdx";
import MlEngineerFm from "@/content/jobs/ml_engineer_fm.mdx";
import DataCuratorFm from "@/content/jobs/data_curator_fm.mdx";
import KernelEngineerFm from "@/content/jobs/kernel_engineer_fm.mdx";
import ResearchScientistDataFm from "@/content/jobs/research_scientist_data_fm.mdx";
import ResearchScientistPretrainingFm from "@/content/jobs/research_scientist_pretraining_fm.mdx";
import FullStackDeveloper from "@/content/jobs/full_stack_developer.mdx";
import SocialMeta from "@/components/SocialMeta";
import { jobs, jobsBySlug } from "@/data/jobs";
import { jobShareDescription } from "@/lib/site";

const jobComponents = {
  hpc_infrastructure_engineer: HpcInfrastructureEngineer,
  ai_data_engineer_fm: AiDataEngineerFm,
  research_scientist_pretraining_fm: ResearchScientistPretrainingFm,
  ml_engineer_fm: MlEngineerFm,
  data_curator_fm: DataCuratorFm,
  kernel_engineer_fm: KernelEngineerFm,
  research_scientist_data_fm: ResearchScientistDataFm,
  full_stack_developer: FullStackDeveloper,
};

export default function JobPostingPage({ job }) {
  const JobContent = jobComponents[job.slug];

  if (!JobContent) {
    return null;
  }

  const title = `${job.title} | Soket AI Careers`;
  const description = jobShareDescription(job);

  return (
    <>
      <SocialMeta
        title={title}
        description={description}
        path={`/careers/jobs/${job.slug}`}
      />
      <JobContent />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: jobs.map((job) => ({
      params: {
        slug: job.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const job = jobsBySlug[params.slug];

  if (!job) {
    return { notFound: true };
  }

  return {
    props: {
      job,
    },
  };
}
