import React from 'react';
import { PixelFlower } from './PixelIcons';

const PixelWindow = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-white pixel-border pixel-shadow rounded-lg overflow-hidden ${className}`}>
      {/* Window Header */}
      <div className="bg-pastel-lavender/50 border-b-2 border-pastel-dark px-3 py-2 flex justify-between items-center">
        <div className="font-pixel text-sm flex items-center gap-2">
          <PixelFlower size={14} className="text-pastel-dark" /> {title}
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 border-2 border-pastel-dark rounded-none bg-pastel-mint"></div>
          <div className="w-3 h-3 border-2 border-pastel-dark rounded-none bg-pastel-yellow"></div>
          <div className="w-3 h-3 border-2 border-pastel-dark rounded-none bg-pastel-pink flex items-center justify-center">
            <span className="text-[10px] leading-none -mt-0.5">×</span>
          </div>
        </div>
      </div>
      {/* Window Body */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default PixelWindow;
