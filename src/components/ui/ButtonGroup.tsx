import React from 'react';
import { cn } from "~/lib/utils";

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export function Button({ variant = 'primary', children, onClick, className = '' }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded transition-colors duration-200 font-medium';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-200'
  };

  return (
    <button 
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function ButtonGroup() {
  function handleClick(buttonType: string) {
    window.alert(buttonType + ' Button clicked!');
  }

  return (
    <div>
      <Button variant="primary" onClick={() => handleClick('Primary')}>
        Primary
      </Button>
      <Button 
        variant="secondary" 
        onClick={() => handleClick('Secondary')}
        className="ml-2"
      >
        Secondary
      </Button>
      <Button 
        variant="ghost" 
        onClick={() => handleClick('Ghost')}
        className="ml-2"
      >
        Ghost
      </Button>
    </div>
  );
}


