import Link from 'next/link';

const Button = ({ href, variant = 'black', children, borderTopColor }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-medium font-geist transition-all duration-200 relative";
  
  const variantStyles = {
    black: "bg-black text-white hover:bg-soket-dark",
    white: "bg-white text-black hover:bg-gray-100",
  };

  const getTriangleColor = () => {
    if (borderTopColor === '#1B41FF') return 'border-t-[#1B41FF]';
    return variant === 'black' ? 'border-t-white' : 'border-t-black';
  };

  const getBottomTriangleColor = () => {
    if (borderTopColor === '#1B41FF') return 'border-l-[#1B41FF]';
    return variant === 'black' ? 'border-l-white' : 'border-l-black';
  };

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {/* Top-left triangle */}
      <div className={`absolute w-0 h-0 top-0 left-0 border-t-[16px] border-l-[16px] border-l-transparent rotate-[270deg] ${getTriangleColor()}`}>
      </div>
      {/* Bottom-left triangle */}
      <div className={`absolute w-0 h-0 bottom-0 right-0 border-b-[16px] border-l-[16px] border-b-transparent rotate-[540deg] ${getBottomTriangleColor()}`}>
      </div>
      {children}
    </Link>
  );
};

export default Button; 