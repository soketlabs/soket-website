import Head from "next/head";
import { absoluteUrl } from "@/lib/site";

const DEFAULT_OG_IMAGE = "/images/careers/og-careers.png";
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

export default function SocialMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}) {
  const imageUrl = absoluteUrl(image);
  const pageUrl = path ? absoluteUrl(path) : absoluteUrl();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Soket AI" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
