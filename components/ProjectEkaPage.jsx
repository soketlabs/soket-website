import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ArrowLink from "@/components/ArrowLink";

const CAPABILITIES = [
  {
    title: "Math",
    description:
      "Advanced mathematical reasoning, proofs, and symbolic computation — models tuned for rigorous step-by-step logic.",
  },
  {
    title: "Code",
    description:
      "Multi-language code generation, debugging, and optimization across 20+ programming languages.",
  },
  {
    title: "Reasoning",
    description:
      "Logical deduction, complex analysis, and long-horizon problem solving for high-stakes workflows.",
  },
  {
    title: "Multilingual",
    description:
      "22 Indian languages, 20+ Global South languages, and English — a dedicated vertical for sovereign text and speech, with curated data and tokenization built for linguistic diversity.",
  },
];

const RESOURCES = [
  {
    value: "1536",
    label: "NVIDIA H100 GPUs",
    detail: "Sovereign compute via the IndiaAI Mission",
  },
  {
    value: "25T",
    label: "Tokens curated",
    detail: "High-quality pre-training corpus to date",
  },
  {
    value: "120B+",
    label: "Parameters (Sparse MoE)",
    detail: "Frontier-scale architecture in training",
  },
  {
    value: "60+",
    label: "Languages",
    detail: "Indian, Global South, and programming languages",
  },
];

const RESEARCH_DIRECTIONS = [
  {
    num: "01",
    title: "High-quality data for pre- and post-training",
    description:
      "Curation, filtering, and synthesis pipelines for Indic and Global South text, code, math, and speech — built for both pre-training and alignment stages.",
  },
  {
    num: "02",
    title: "Efficient model architecture for language variance",
    description:
      "Sparse MoE and routing strategies that handle extreme token-efficiency and morphological diversity across scripts and domains.",
  },
  {
    num: "03",
    title: "Efficient tokenization",
    description:
      "Building one of the most token-efficient vocabularies for Indian and Global South languages — minimizing bytes-per-token for Indic scripts and enabling longer context at lower compute cost.",
  },
  {
    num: "04",
    title: "Post-training methods",
    description:
      "SFT and preference optimization for math, code, and reasoning models; separate alignment pipelines for multilingual foundations and regulated-sector workflows.",
  },
  {
    num: "05",
    title: "Efficient inference & algorithmic design",
    description:
      "Kernel fusion, speculative decoding, quantization, and systems co-design from training through production serving.",
  },
  {
    num: "06",
    title: "Sustainable & efficient AI research",
    description:
      "Optimal power and water usage for large-scale training — measuring and minimizing the environmental cost of frontier runs.",
  },
  {
    num: "07",
    title: "AI for critical sectors",
    description:
      "Applied research for defence, cybersecurity, military and civilian intelligence, finance, banking, and information technology — with auditable, on-premise deployment paths.",
  },
  {
    num: "08",
    title: "Ethical AI",
    description:
      "Safety, alignment, bias mitigation, and responsible deployment — embedding ethical constraints into data curation, training, evaluation, and release for sovereign and high-stakes use cases.",
  },
];

const LANGUAGE_GROUPS = [
  {
    label: "22 Indian languages",
    examples:
      "Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Odia, Punjabi, Assamese, Urdu, Sanskrit, and more",
  },
  {
    label: "20+ Global South languages",
    examples:
      "Arabic, Indonesian, Thai, Vietnamese, Burmese, Kazakh, Portuguese, Spanish, and more",
  },
  {
    label: "20+ programming languages",
    examples: "Python, Rust, Go, TypeScript, C++, Java, SQL, Julia, and more",
  },
];

export default function ProjectEkaPage() {
  return (
    <div className="text-[#1e1e1e]">
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-26 md:pb-44 text-center px-4">
        <p className="text-sm font-geist-mono text-gray-600 mb-4">
          // PROJECT EKΛ
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-geist-mono text-[#1B41FF] mb-6 px-4 py-2 rounded-full border border-[#1B41FF]/20 bg-[#1B41FF]/5">
          <span
            className="w-2 h-2 rounded-full bg-[#1B41FF]"
            aria-hidden="true"
          />
          Backed by the IndiaAI Mission
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-[64px] font-space-grotesk font-medium tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Sovereign models for reasoning &amp; multilingual AI
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Project EKΛ is Soket&apos;s flagship research program — advancing
          frontier math, code, and reasoning models in parallel with sovereign
          multilingual AI for Indian and Global South languages.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/careers/jobs" variant="black">
            VIEW OPEN ROLES
          </Button>
        </div>
      </section>

      {/* What is EKA */}
      <section className="py-12 lg:py-20 bg-soket-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="text-left">
              <p className="text-sm font-geist-mono text-gray-600 mb-4">
                // WHAT WE&apos;RE BUILDING
              </p>
              <h2 className="text-3xl md:text-5xl font-space-grotesk mb-6">
                Foundation models built for Bharat &amp; the Global South
              </h2>
              <p className="text-base text-gray-800 mb-6 leading-relaxed">
                Project EKΛ is Soket’s boldest vision — building AI for a
                billion, from the heart of India. Our mission is to create
                world-class models that master math, code, and reasoning, while
                speaking the languages of Bharat and the Global South. We
                believe talent and ambition from India can shape the very
                frontier of AI. We work at the edge of research in architecture,
                large-scale training, and language resources — reimagining
                what’s possible for low-resource and diverse languages. Join us
                at the vanguard — and help put India at the center of global AI
                innovation. Project EKΛ is dedicated to producing fundamental
                advances in both the science and engineering of AI.
              </p>
              <p className="text-base text-gray-800 leading-relaxed">
                We open-source where we can, train on sovereign compute, and
                publish research that advances Indic NLP, systems for ML, and
                efficient inference.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {RESOURCES.map(({ value, label, detail }) => (
                <div
                  key={label}
                  className="bg-white rounded-lg p-6 shadow-sm text-left"
                >
                  <div className="text-3xl md:text-4xl font-space-grotesk font-medium mb-1">
                    {value}
                  </div>
                  <div className="text-sm font-geist-mono font-medium mb-2">
                    {label}
                  </div>
                  <p className="text-sm text-black/60">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <p className="text-sm font-geist-mono text-gray-600 mb-4 text-left">
            // CORE CAPABILITIES
          </p>
          <h2 className="text-3xl md:text-5xl font-space-grotesk mb-12 text-left">
            Two tracks: technical reasoning &amp; multilingual AI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPABILITIES.map(({ title, description }) => (
              <div
                key={title}
                className="bg-soket-gray rounded-lg p-6 lg:pt-12 text-left"
              >
                <h3 className="text-2xl font-space-grotesk mb-4">{title}</h3>
                <p className="text-base text-black/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-12 lg:py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-sm font-geist-mono text-gray-400 mb-4">
                // LANGUAGE COVERAGE
              </p>
              <h2 className="text-3xl md:text-5xl font-space-grotesk mb-6">
                60+ languages — not an afterthought
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Most frontier labs optimize for English. EKΛ runs two parallel
                verticals: frontier math, code, and reasoning models for
                rigorous technical work — alongside sovereign multilingual
                modeling for Indian and Global South languages, with efficient
                tokenization and curated corpora per script for regional text,
                speech, and domain-specific use cases.
              </p>
              <ul className="space-y-6">
                {LANGUAGE_GROUPS.map(({ label, examples }) => (
                  <li key={label}>
                    <h3 className="font-geist-mono text-sm text-[#7BA3FF] mb-2">
                      {label}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {examples}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[280px] md:h-[360px] lg:h-[400px]">
              <Image
                src="/images/project_eka_abstract.png"
                alt="Project EKA visual"
                fill
                className="object-contain object-center lg:object-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research directions */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <p className="text-sm font-geist-mono text-gray-600 mb-4 text-left">
            // RESEARCH DIRECTIONS
          </p>
          <h2 className="text-3xl md:text-5xl font-space-grotesk mb-4 text-left">
            Problems we&apos;re actively working on
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mb-12 text-left leading-relaxed">
            If you care about data systems, training at scale, tokenizers,
            post-training, or ethical AI — these are the threads where your work
            ships into a national-scale model, not a side project.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {RESEARCH_DIRECTIONS.map(({ num, title, description }) => (
              <article
                key={num}
                className="group border border-black/10 rounded-lg p-6 md:p-8 text-left hover:border-[#1B41FF]/30 hover:bg-[#1B41FF]/[0.02] transition-colors"
              >
                <span className="font-geist-mono text-sm text-[#1B41FF] mb-3 block">
                  {num}
                </span>
                <h3 className="text-xl font-space-grotesk mb-3 group-hover:text-[#1B41FF] transition-colors">
                  {title}
                </h3>
                <p className="text-base text-black/65 leading-relaxed">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related work */}
      <section className="py-12 lg:py-16 bg-soket-gray">
        <div className="container mx-auto px-4">
          <p className="text-sm font-geist-mono text-gray-600 mb-8 text-left">
            // RELATED RELEASES
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 text-left">
              <h3 className="text-xl font-space-grotesk mb-2">Pragna-1B</h3>
              <p className="text-sm text-black/60 mb-4">
                1.25B-parameter open multilingual model — Hindi, English,
                Gujarati, Bengali.
              </p>
              <ArrowLink href="https://huggingface.co/soketlabs/pragna-1b">
                Hugging Face
              </ArrowLink>
            </div>
            <div className="bg-white rounded-lg p-6 text-left">
              <h3 className="text-xl font-space-grotesk mb-2">Dhrith ASR</h3>
              <p className="text-sm text-black/60 mb-4">
                Speech recognition for Indic and voice-first markets.
              </p>
              <ArrowLink href="/blogs/dhrith">Read the blog</ArrowLink>
            </div>
            <div className="bg-white rounded-lg p-6 text-left">
              <h3 className="text-xl font-space-grotesk mb-2">EKA tokenizer</h3>
              <p className="text-sm text-black/60">
                Among the most token-efficient vocabularies for Indian and
                Global South languages — built in-house to cut sequence length
                and training cost versus mainstream open tokenizers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-soket-blue text-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-white shrink-0" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-space-grotesk">
                  Help us train India&apos;s frontier models
                </h2>
              </div>
              <p className="text-white/75 text-base leading-relaxed">
                We&apos;re hiring researchers and engineers across data,
                training, inference, and applied ML. If you want hard systems
                problems at sovereign scale — we&apos;d like to hear from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button
                href="/careers/jobs"
                variant="white"
                borderTopColor="#1B41FF"
              >
                OPEN ROLES
              </Button>
              <Link
                href="mailto:careers@soket.ai"
                className="inline-flex items-center justify-center px-6 py-4 font-geist-mono text-sm font-medium underline underline-offset-4 hover:text-white/80"
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
