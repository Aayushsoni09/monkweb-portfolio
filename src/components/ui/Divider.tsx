import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return <div className={`h-px w-full bg-neutral-200 ${className}`} />;
};

export default Divider;