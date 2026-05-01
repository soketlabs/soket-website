import { jobs, jobsBySlug } from "@/data/jobs";
import ResearchManagerInterpretability from "@/content/jobs/research-manager-interpretability.mdx";
import ResearchScientistInterpretability from "@/content/jobs/research-scientist-interpretability.mdx";
import ResearchEngineerLlm from "@/content/jobs/research-engineer-llm.mdx";
import SpeechMlEngineer from "@/content/jobs/speech-ml-engineer.mdx";
import ProductDesigner from "@/content/jobs/product-designer.mdx";
import ClusterAdmin from "@/content/jobs/cluster-admin.mdx";

const jobContentBySlug = {
  "cluster-admin": ClusterAdmin,
  "research-manager-interpretability": ResearchManagerInterpretability,
  "research-scientist-interpretability": ResearchScientistInterpretability,
  "research-engineer-llm": ResearchEngineerLlm,
  "speech-ml-engineer": SpeechMlEngineer,
  "product-designer": ProductDesigner,
};

export default function JobPostingPage({ slug }) {
  const JobContent = jobContentBySlug[slug];

  if (!JobContent) {
    return null;
  }

  return <JobContent />;
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
  if (!jobsBySlug[params.slug]) {
    return { notFound: true };
  }

  return {
    props: {
      slug: params.slug,
    },
  };
}
