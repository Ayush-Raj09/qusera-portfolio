import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "group relative inline-flex items-center justify-center px-8 py-4 font-display text-xl uppercase tracking-wider overflow-hidden rounded-full transition-colors duration-300";
  
  const variants = {
    primary: "bg-accent text-black hover:text-accent",
    secondary: "bg-transparent border-2 border-black text-black hover:text-white",
    dark: "bg-black text-white hover:text-black",
  };

  const hoverBgs = {
    primary: "bg-black",
    secondary: "bg-black",
    dark: "bg-accent",
  };

  return (
    <a className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      <span className={`absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out ${hoverBgs[variant]}`}></span>
      <span className="relative">{children}</span>
    </a>
  );
};

export default Button;
