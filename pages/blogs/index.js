import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/BlogIndex.module.scss";

const blogs = [
  {
    slug: "pragna_1b",
    title:
      "Introducing Pragna-1B: Soket AI Labs' Multilingual Language Model for Indian Languages",
    date: "30th April, 2024",
    description:
      "We at Soket AI Labs are thrilled to unveil India's first open source multilingual model, Pragna-1B available in four Indian languages - Hindi, Gujarati, Bangla and English. The model is designed to cater to the rich tapestry of Indian languages, significantly expanding the horizons of AI inclusivity and accessibility.",
    span: 2, // spans 2 columns
    cover: "/images/blog_pragna/logo.jpg", // optional cover image
  },
  {
    slug: "bhasha_sft",
    title:
      "Availability of the Bhasha SFT Dataset for Supervised Fine-Tuning of Indic Language Models",
    date: "19th April, 2024",
    description:
      "We are pleased to inform the NLP community about the availability of the Bhasha SFT dataset, an extensive collection curated by Soket AI Labs for the supervised fine-tuning of Multilingual Large Language Models (LLMs), focusing on Indic languages. The dataset features over 13 million instruction-response pairs in four languages: Hindi, Gujarati, Bengali, and English.",
    span: 1, // spans 1 column
    cover: "/images/blog_bhasha_sft/cover.png", // optional cover image
  },
  {
    slug: "bhasha_wiki",
    title:
      'Introducing the "Bhasha" Series: Advancements in Indic Language AI Datasets',
    date: "17th April, 2024",
    description:
      'Soket Labs is pleased to announce the release of the "Bhasha" series, commencing with two significant datasets: "bhasha-wiki" and "bhasha-wiki-indic". These datasets are engineered to support the development of AI models that are attuned to the linguistic and cultural nuances of India, representing a crucial step forward in the diversification of linguistic resources in computational linguistics.',
    span: 1, // spans 1 column
    cover: "/images/blog_bhasha_wiki/cover.png", // optional cover image
  },
];

export default function BlogIndex() {
  return (
    <div className={styles.blog_index}>
      <div className={styles.header}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Exploring the frontiers of AI, language models, and multilingual
          technology
        </p>
      </div>

      <div className={styles.blogs_list}>
        {blogs.map((blog, index) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className={`${styles.blog_card} ${
              blog.span === 2 ? styles.blog_card_wide : styles.blog_card_narrow
            }`}
          >
            {blog.cover && (
              <div className={styles.blog_cover}>
                <Image
                  src={blog.cover}
                  alt={blog.title}
                  fill
                  className={styles.cover_image}
                />
              </div>
            )}
            <div className={styles.blog_meta}>
              <span className={styles.blog_date}>{blog.date}</span>
              <span className={styles.blog_number}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h2 className={styles.blog_title}>{blog.title}</h2>
            <p className={styles.blog_description}>{blog.description}</p>
            <span className={styles.read_more}>Read more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
