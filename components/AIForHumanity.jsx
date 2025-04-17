import Button from './Button';
import Image from 'next/image';

const AIForHumanity = () => {
  return (
    <section className="py-20 bg-soket-gray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div className='text-left'>
            <p className="text-sm font-geist-mono text-gray-600 mb-4">// AI FOR HUMANITY</p>
            <h2 className="text-4xl md:text-6xl font-space-grotesk lg:mb-8">
            Human-Centered AI for a Fairer, Smarter Future
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start lg:pl-[10%] lg:w-4/5">
            <p className="text-base mb-8 text-gray-800 text-left">
              We believe in building AI technologies that are not just powerful, but also responsible—prioritizing human well-being, transparency, and fairness in all our innovations.
            </p>
            <Button href="mailto:careers@soket.ai" variant="black">
              EXPLORE
            </Button>
          </div>
        </div>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-2 mt-20 lg:mt-30">
          {/* Column 1 */}
          <div className="bg-white rounded-lg p-6 lg:pt-20 shadow-sm">
            <div className="mb-5">
              <Image 
                src="/images/open-source-icon.svg" 
                alt="Open Source Icon" 
                width={48} 
                height={48}
              />
            </div>
            <h3 className="text-lg text-medium text-left">
              Open, Transparent, and Inclusive AI Development
            </h3>
            <p className="text-base text-left text-black opacity-60 font-medium">
              Fully open-source, built in public ensuring inclusivity across diverse languages and cultures.
            </p>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-lg p-6 lg:pt-20 shadow-sm">
            <div className="mb-5">
              <Image 
                src="/images/ethical-ai-icon.svg" 
                alt="Ethical AI Icon" 
                width={48} 
                height={48}
              />
            </div>
            <h3 className="text-lg text-medium text-left">
              Ethical, Efficient, and Sustainable AI
            </h3>
            <p className="text-base text-left text-black opacity-60 font-medium">
              Prioritizes energy-efficient training, high-quality data practices, and climate-conscious algorithms.
            </p>
          </div>

          {/* Column 3 */}
          <div className="bg-white rounded-lg p-6 lg:pt-20 shadow-sm">
            <div className="mb-5">
              <Image 
                src="/images/global-ai-icon.svg" 
                alt="Global AI Icon" 
                width={48} 
                height={48}
              />
            </div>
            <h3 className="text-lg text-medium text-left">
              Building for the World's 8.1 Billion
            </h3>
            <p className="text-base text-left text-black opacity-60 font-medium">
              Empowering global intelligence through an India-first, world-ready foundation model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIForHumanity; 