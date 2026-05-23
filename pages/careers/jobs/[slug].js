import { useMemo } from "react";
import dynamic from "next/dynamic";
import { jobs, jobsBySlug } from "@/data/jobs";

export default function JobPostingPage({ slug }) {
  const JobContent = useMemo(
    () =>
      dynamic(() => import(`@/content/jobs/${slug}.mdx`), {
        loading: () => null,
      }),
    [slug]
  );

  if (!jobsBySlug[slug]) {
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
