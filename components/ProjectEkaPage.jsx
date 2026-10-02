import Image from "next/image";
import Link from "next/link";
import MagneticBento from "@/components/MagneticBento";
import SectionLabel from "@/components/sections/SectionLabel";

const CAPABILITIES = [
  {
    number: "01",
    title: "Math",
    description:
      "Advanced mathematical reasoning, proofs, and symbolic computation — models tuned for rigorous step-by-step logic.",
  },
  {
    number: "02",
    title: "Code",
    description:
      "Multi-language code generation, debugging, and optimization across 20+ programming languages.",
  },
  {
    number: "03",
    title: "Reasoning",
    description:
      "Logical deduction, complex analysis, and long-horizon problem solving for high-stakes workflows.",
  },
  {
    number: "04",
    title: "Multilingual",
    description:
      "22 Indian languages, 20+ Global South languages, and English — sovereign text and speech with curated data and tokenization.",
  },
];

const RESOURCES = [
  {
    value: "1,536",
    label: "H100 GPUs",
    detail: "Sovereign compute via IndiaAI Mission",
  },
  {
    value: "25T",
    label: "Tokens curated",
    detail: "High-quality pre-training corpus",
  },
  {
    value: "120B+",
    label: "Parameters",
    detail: "Frontier-scale architecture in training",
  },
  {
    value: "60+",
    label: "Languages",
    detail: "Indian, Global South, and programming",
  },
];

const RESEARCH_DIRECTIONS = [
  {
    num: "01",
    title: "High-quality data pipelines",
    description:
      "Curation, filtering, and synthesis for Indic and Global South text, code, math, and speech.",
  },
  {
    num: "02",
    title: "Efficient model architecture",
    description:
      "Routing strategies for token-efficiency and morphological diversity across scripts.",
  },
  {
    num: "03",
    title: "Efficient tokenization",
    description:
      "Token-efficient vocabularies for Indian languages — minimizing bytes-per-token for Indic scripts.",
  },
  {
    num: "04",
    title: "Post-training methods",
    description:
      "SFT and preference optimization for math, code, and reasoning; alignment for regulated sectors.",
  },
  {
    num: "05",
    title: "Efficient inference",
    description:
      "Kernel fusion, speculative decoding, quantization, and systems co-design.",
  },
  {
    num: "06",
    title: "Sustainable AI research",
    description:
      "Optimal power and water usage — minimizing environmental cost of frontier runs.",
  },
  {
    num: "07",
    title: "AI for critical sectors",
    description:
      "Defence, cybersecurity, finance, banking — with auditable, on-premise deployment.",
  },
  {
    num: "08",
    title: "Ethical AI",
    description:
      "Safety, alignment, bias mitigation — embedding constraints from data to deployment.",
  },
];

const LANGUAGE_GROUPS = [
  {
    label: "22 Indian languages",
    examples:
      "Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Odia, Punjabi, Assamese, Urdu, Sanskrit",
  },
  {
    label: "20+ Global South languages",
    examples:
      "Arabic, Indonesian, Thai, Vietnamese, Burmese, Kazakh, Portuguese, Spanish",
  },
  {
    label: "20+ programming languages",
    examples: "Python, Rust, Go, TypeScript, C++, Java, SQL, Julia",
  },
];

const RELEASES = [
  {
    title: "Pragna-1B",
    description: "1.25B-parameter open multilingual model — Hindi, English, Gujarati, Bengali.",
    link: { label: "Hugging Face", href: "https://huggingface.co/soketlabs/pragna-1b" },
  },
  {
    title: "Dhrith ASR",
    description: "Emotion-aware speech recognition for India's multilingual voices.",
    link: { label: "Read the blog", href: "/blogs/dhrith" },
  },
  {
    title: "EKA Tokenizer",
    description: "Token-efficient vocabularies for Indian and Global South languages.",
    link: null,
  },
];

export default function ProjectEkaPage() {
  return (
    <div className="bg-paper text-ink">
      {/* Hero */}
      <section className="section-gap text-center">
        <div className="container-content">
          <p className="font-geist-mono text-xs uppercase tracking-label text-muted mb-4">
            // PROJECT EKA
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-geist-mono text-soket-blue mb-8 px-4 py-2 border border-soket-blue/20 bg-soket-blue/5">
            <span
              className="w-2 h-2 bg-soket-blue"
              aria-hidden="true"
            />
            Backed by the IndiaAI Mission
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Sovereign models for reasoning &amp; multilingual AI
          </h1>
          <p className="text-17 text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Project EKA is Soket&apos;s flagship research program — advancing
            frontier math, code, and reasoning models in parallel with sovereign
            multilingual AI for Indian and Global South languages.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/careers/jobs"
              className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white font-geist text-sm hover:bg-soket-blue transition-colors"
            >
              View open roles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-ink text-ink font-geist text-sm hover:border-soket-blue hover:text-soket-blue transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Stats */}
      <section className="py-16 lg:py-20 border-t border-hairline">
        <div className="container-content">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline">
            {RESOURCES.map(({ value, label, detail }) => (
              <div
                key={label}
                className="bg-paper p-4 sm:p-6 lg:p-8 text-left min-w-0"
              >
                <div className="font-geist-mono text-2xl sm:text-3xl md:text-4xl font-medium mb-1">
                  {value}
                </div>
                <div className="font-geist-mono text-xs uppercase tracking-label text-soket-blue mb-2">
                  {label}
                </div>
                <p className="text-sm text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is EKA */}
      <section className="section-gap border-t border-hairline">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionLabel>// WHAT WE'RE BUILDING</SectionLabel>
              <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium tracking-tight mb-6">
                Foundation models built for Bharat &amp; the Global South
              </h2>
              <div className="space-y-4 text-muted">
                <p>
                  Project EKA is Soket's boldest vision — building AI for a
                  billion, from the heart of India. Our mission is to create
                  world-class models that master math, code, and reasoning, while
                  speaking the languages of Bharat and the Global South.
                </p>
                <p>
                  We work at the edge of research in architecture,
                  large-scale training, and language resources — reimagining
                  what's possible for low-resource and diverse languages.
                </p>
                <p>
                  We open-source where we can, train on sovereign compute, and
                  publish research that advances Indic NLP, systems for ML, and
                  efficient inference.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/images/project_eka_abstract.png"
                alt="Project EKA visual"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-gap border-t border-hairline">
        <div className="container-content">
          <SectionLabel>// CORE CAPABILITIES</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium tracking-tight mb-12">
            Two tracks: technical reasoning &amp; multilingual AI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline">
            {CAPABILITIES.map(({ number, title, description }) => (
              <div
                key={title}
                className="bg-paper p-6 lg:p-8"
              >
                <span className="font-geist-mono text-xs text-soket-blue mb-4 block">
                  {number}
                </span>
                <h3 className="text-xl font-medium mb-3">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages - Dark Section */}
      <section className="section-gap bg-ink text-white">
        <div className="container-content">
          <p className="font-geist-mono text-xs uppercase tracking-label text-white/50 mb-4">
            // LANGUAGE COVERAGE
          </p>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
            <h2 className="lg:col-span-5 text-3xl md:text-4xl lg:text-h2 font-medium tracking-tight">
              60+ languages — not an afterthought
            </h2>
            <p className="lg:col-span-7 text-white/70 leading-relaxed self-end">
              Most frontier labs optimize for English. EKA runs two parallel
              verticals: frontier math, code, and reasoning models for
              rigorous technical work — alongside sovereign multilingual
              modeling with efficient tokenization and curated corpora.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {LANGUAGE_GROUPS.map(({ label, examples }) => (
              <div key={label} className="bg-ink p-6 lg:p-8">
                <h3 className="font-geist-mono text-xs uppercase tracking-label text-emerald-400 mb-3">
                  {label}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research directions */}
      <section className="section-gap border-t border-hairline">
        <div className="container-content">
          <SectionLabel>// RESEARCH DIRECTIONS</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium tracking-tight mb-4">
            Problems we&apos;re actively working on
          </h2>
          <p className="text-muted max-w-2xl mb-12 leading-relaxed">
            If you care about data systems, training at scale, tokenizers,
            post-training, or ethical AI — these are the threads where your work
            ships into a national-scale model.
          </p>
          <MagneticBento className="grid md:grid-cols-2 gap-4">
            {RESEARCH_DIRECTIONS.map(({ num, title, description }) => (
              <article
                key={num}
                className="group border border-hairline p-6 md:p-8"
              >
                <span className="font-geist-mono text-xs text-soket-blue mb-3 block">
                  {num}
                </span>
                <h3 className="text-lg font-medium mb-3 group-hover:text-soket-blue transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {description}
                </p>
              </article>
            ))}
          </MagneticBento>
        </div>
      </section>

      {/* Related Releases */}
      <section className="py-16 lg:py-20 border-t border-hairline">
        <div className="container-content">
          <SectionLabel>// RELATED RELEASES</SectionLabel>
          <MagneticBento className="grid md:grid-cols-3 gap-4 mt-8">
            {RELEASES.map(({ title, description, link }) => (
              <div key={title} className="border border-hairline p-6">
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-sm text-muted mb-4">{description}</p>
                {link && (
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 font-geist-mono text-xs uppercase tracking-label text-ink hover:text-soket-blue transition-colors group"
                  >
                    {link.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </MagneticBento>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-16 lg:py-20">
        <div className="container-content">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">
                Help us train India&apos;s frontier models
              </h2>
              <p className="text-white/60 leading-relaxed">
                We&apos;re hiring researchers and engineers across data,
                training, inference, and applied ML. If you want hard systems
                problems at sovereign scale — we&apos;d like to hear from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/careers/jobs"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-ink font-geist text-sm hover:bg-soket-blue hover:text-white transition-colors"
              >
                Open roles
              </Link>
              <Link
                href="mailto:careers@soket.ai"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-geist text-sm hover:border-white transition-colors"
              >
                careers@soket.ai
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
