import Link from 'next/link';

const ArrowLink = ({ href, children, variant = 'black', icon }) => {
  const textColorClass = variant === 'white' ? 'text-white hover:text-white/80' : 'text-black hover:text-soket-blue';

  return (
    <Link 
      href={href} 
      target='_blank'
      className={`flex gap-4 font-geist-mono underline items-center text-sm font-medium transition-colors ${textColorClass}`}
    >
      <span className='flex items-center gap-1'>
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </span>
      <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10.625L10.25 1.375M10.25 1.375H1M10.25 1.375V10.625" stroke={variant === 'white' ? 'white' : 'black'} stroke-width="1.2"/>
      </svg>
    </Link>
  );
};

export default ArrowLink; 