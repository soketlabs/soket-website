import HpcInfrastructureEngineer from "@/content/jobs/hpc_infrastructure_engineer.mdx";
import SocialMeta from "@/components/SocialMeta";
import { jobs, jobsBySlug } from "@/data/jobs";
import { jobShareDescription } from "@/lib/site";

const jobComponents = {
  hpc_infrastructure_engineer: HpcInfrastructureEngineer,
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
