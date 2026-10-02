import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/BlogIndex.module.scss";

const blogs = [
  {
    slug: "coshe_eval",
    title:
      "CoSHE-Eval: A Code-Switching ASR Benchmark for Hindi–English Speech",
    date: "12th November, 2025",
    description:
      "CoSHE-Eval is a 30-hour Hindi–English code-switching evaluation dataset designed to benchmark ASR systems under realistic multilingual speech conditions.",
    span: 1,
  },
  {
    slug: "dhrith",
    title:
      "Dhrith: Emotionally Intelligent ASR for India's Multilingual Voices",
    date: "6th November, 2025",
    description:
      "Dhrith is our next-generation ASR model that listens beyond words. It understands emotion, rhythm, and code-switched language.",
    span: 1,
  },
  {
    slug: "pragna_1b",
    title:
      "Introducing Pragna-1B: Soket AI Labs' Multilingual Language Model for Indian Languages",
    date: "30th April, 2024",
    description:
      "We at Soket AI Labs are thrilled to unveil India's first open source multilingual model, Pragna-1B available in four Indian languages.",
    span: 2,
    cover: "/images/blog_pragna/pragna_blog_center.png",
  },
  {
    slug: "bhasha_sft",
    title:
      "Availability of the Bhasha SFT Dataset for Supervised Fine-Tuning of Indic Language Models",
    date: "19th April, 2024",
    description:
      "An extensive collection curated by Soket AI Labs for the supervised fine-tuning of Multilingual Large Language Models, focusing on Indic languages.",
    span: 1,
    cover: "/images/blog_bhasha_sft/cover.png",
  },
  {
    slug: "bhasha_wiki",
    title:
      'Introducing the "Bhasha" Series: Advancements in Indic Language AI Datasets',
    date: "17th April, 2024",
    description:
      'The "Bhasha" series datasets are engineered to support the development of AI models attuned to the linguistic and cultural nuances of India.',
    span: 1,
    cover: "/images/blog_bhasha_wiki/cover.png",
  },
];

export default function BlogIndex() {
  return (
    <main className={styles.blog_index}>
        <div className={styles.header}>
          <p className={styles.label}>// BLOG</p>
          <h1 className={styles.title}>Research & updates</h1>
          <p className={styles.subtitle}>
            Exploring the frontiers of AI, language models, and multilingual technology
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
              <span className={styles.read_more}>
                Read more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={styles.arrow}
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
    </main>
  );
}
