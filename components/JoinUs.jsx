import Button from './Button';
import Image from 'next/image';

const JoinUs = () => {
  return (
    <section className="bg-black text-white">
      <div className="relative">
        {/* Top-left squares */}
        <div className="absolute top-0 left-0">
          <Image 
            src="/images/squares-top-left.svg" 
            alt="Decorative squares" 
            width={120} 
            height={120}
            className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
          />
        </div>

        {/* Bottom-right squares */}
        <div className="absolute bottom-0 right-0">
          <Image 
            src="/images/squares-bottom-right.svg" 
            alt="Decorative squares" 
            width={120} 
            height={120}
            className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center mx-[8%] px-4 py-32 lg:py-32">
          <h2 className="text-4xl md:text-6xl font-space-grotesk mb-8 pt-6">
            Join Us on the Journey<br />
            to Ethical AGI
          </h2>
          <p className="lg:text-xl mb-12 text-white">
            Whether you're a researcher, a business, or a builder—if you're excited about ethical, multilingual AI, let's create together. Join us at Soket and be part of the future we're shaping.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-10">
            {/* <Button href="/research" variant="white">
              EXPLORE RESEARCH
            </Button> */}
            <a href="mailto:careers@soket.ai" className="text-white hover:text-gray-300 font-geist-mono font-medium underline underline-offset-4">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs; 