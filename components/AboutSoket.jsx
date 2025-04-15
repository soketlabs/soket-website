import Image from 'next/image';
import Button from './Button';
import ArrowLink from './ArrowLink';

const DiscordIcon = ({ variant = 'black' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.21 14.76 4.48 14.67 4.69C13.06 4.46 11.47 4.46 9.88 4.69C9.79 4.48 9.66 4.21 9.55 4C8.04 4.26 6.6 4.71 5.27 5.33C2.47 9.53 1.65 13.63 2.06 17.66C3.78 18.95 5.44 19.74 7.08 20.27C7.45 19.76 7.78 19.22 8.06 18.66C7.5 18.45 6.96 18.19 6.45 17.89C6.54 17.82 6.63 17.75 6.72 17.68C10.27 19.31 14.16 19.31 17.67 17.68C17.76 17.75 17.85 17.82 17.94 17.89C17.42 18.19 16.88 18.45 16.32 18.66C16.6 19.22 16.93 19.76 17.3 20.27C18.94 19.74 20.61 18.95 22.33 17.66C22.81 13.06 21.56 9 19.27 5.33ZM8.68 15.28C7.62 15.28 6.75 14.31 6.75 13.13C6.75 11.95 7.61 10.98 8.68 10.98C9.76 10.98 10.63 11.95 10.62 13.13C10.62 14.31 9.75 15.28 8.68 15.28ZM15.32 15.28C14.26 15.28 13.39 14.31 13.39 13.13C13.39 11.95 14.25 10.98 15.32 10.98C16.4 10.98 17.27 11.95 17.26 13.13C17.26 14.31 16.39 15.28 15.32 15.28Z" fill={variant === 'white' ? 'white' : 'black'}/>
  </svg>
);

const AboutSoket = () => {
  return (
    <section className="py-10 lg:py-20 lg:pb-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 text-left">
          <p className="text-sm font-geist-mono text-gray-600 mb-4">// ABOUT SOKET AI</p>
          <h2 className="text-4xl md:text-6xl font-affairs lg:mb-8">
            Building AI for Humanity,<br />
            Not Just Technology
          </h2>
        </div>

        {/* Project Eka Section */}
        <div className="bg-black text-white rounded-lg overflow-hidden mb-4">
          <div className="p-8 md:p-12 md:py-32 md:pb-12 relative">
            {/* Left Content */}
            <div className="max-w-xl mt-8 flex flex-col justify-end md:relative md:z-10">
              <div className="mb-6">
                <Image 
                  src="/images/soket-icon.svg" 
                  alt="Soket Icon" 
                  width={48} 
                  height={48}
                />
              </div>
              <h3 className="text-4xl mb-4 text-left">Project Eka</h3>
              <p className="text-gray-300 mb-8 text-left">
                Our ambitious initiative developing sovereign AI models tailored 
                for India's unique linguistic and socio-economic landscape. By 
                uniting researchers, engineers, and institutions nationwide, 
                we're creating multilingual, high-efficiency AI models that 
                serve India's needs while competing globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <ArrowLink href="/join" variant="white">
                  JOIN THE INITIATIVE
                </ArrowLink>
                <ArrowLink 
                  href="https://discord.gg/soket" 
                  variant="white"
                  icon={<DiscordIcon variant="white" />}
                >
                  JOIN DISCORD
                </ArrowLink>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative md:absolute md:bottom-0 md:right-0 w-full md:w-1/2 h-[300px] md:h-full mt-8 md:mt-0">
              <Image 
                src="/images/project-eka-visual.png" 
                alt="Project Eka Visual" 
                fill
                className="object-contain object-right-bottom k"
              />
              <div className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-4">
                <Image src="/images/project-eka-icon.png" alt="Project Icon" className='hidden lg:block' width={120} height={100} />
                <div className="bg-[#F6F4F1] p-6 rounded-lg">
                  <div className="text-5xl font-medium mb-2 text-black text-left">120B+</div>
                  <p className="text-sm text-black/80 text-left">
                    parameters, Sparse MoE—India's brain for 
                    scalable, efficient, and sovereign AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Speech API Card */}
          <div className="bg-soket-gray rounded-lg p-6 lg:pt-16">
            <div className="mb-6">
              <Image 
                src="/images/speech-icon.svg" 
                alt="Speech API Icon" 
                width={48} 
                height={48}
              />
            </div>
            <div className="lg:w-4/5">
              <h3 className="text-3xl mb-4 text-left">Realtime Speech API</h3>
              <p className="text-black opacity-70 mb-8 text-left">
                Our Realtime Speech API delivers human-like, multilingual 
                voice interactions with &lt;500ms latency. Features include tool 
                calling and Speech RAG for smart, context-aware responses. 
                OpenAI-compatible and supporting complex workflows, it 
                integrates in just 1-4 weeks.
              </p>
              <ArrowLink href="/tensor-studio">
                TRY TENSOR STUDIO
              </ArrowLink>
            </div>
          </div>

          {/* Pragna-1B Card */}
          <div className="bg-soket-gray rounded-lg p-6 lg:pt-16">
            <div className="mb-6">
              <Image 
                src="/images/pragna-icon.svg" 
                alt="Pragna Icon" 
                width={48} 
                height={48}
              />
            </div>
            <div className="lg:w-4/5">
              <h3 className="text-3xl mb-4 text-left">Pragna-1B</h3>
              <p className="text-black opacity-70 mb-8 text-left">
                Our 1.25 Billion Parameter open-source multilingual 
                foundational model built from scratch in collaboration with 
                Google Cloud. Supporting Hindi, Gujarati, Bangla, and English, 
                it's ideal for NLP, translation, and conversational AI systems 
                tailored to the Indian linguistic landscape
              </p>
              <ArrowLink href="/pragna">
                EXPLORE PRAGNA
              </ArrowLink>
            </div>
          </div>
        </div>

        {/* Join Section */}
        <div className="mt-8 bg-soket-blue text-white rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-white flex-shrink-0"></div>
                <h3 className="text-base text-left">Want to join us in our innovation and progress towards artificial intelligence?</h3>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-transparent flex-shrink-0"></div>
                <p className="text-white opacity-60 text-base text-left">Let me know if you have any questions about Artifact.</p>
              </div>
            </div>
            <Button href="mailto:careers@soket.ai" variant="white" borderTopColor="#1B41FF">
              JOIN OUR TEAM
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSoket; 