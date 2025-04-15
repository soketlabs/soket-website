import Image from 'next/image';

const HeroImages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
      {/* Left black section */}
      <div className="relative aspect-[1/1] rounded-[6px] overflow-hidden">
        <Image 
          src="/images/hero-1.png" 
          alt="Engineering the Frontiers of AI" 
          fill
          className="object-cover"
        />
      </div>

      {/* Middle section */}
      <div className="relative aspect-[1/1] rounded-[6px] overflow-hidden">
        <Image 
          src="/images/hero-2.png" 
          alt="AI Systems with native fluidity" 
          fill
          className="object-cover"
        />
      </div>

      {/* Right section */}
      <div className="relative aspect-[1/1] rounded-[6px] overflow-hidden">
        <Image 
          src="/images/hero-3.png" 
          alt="The COOM Framework" 
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImages; 