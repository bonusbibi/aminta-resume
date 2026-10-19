import React from 'react';

// === EXSITING ICONS ===
export const PixelFlower = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="2" width="4" height="2" fill="#FF8FAB"/>
    <rect x="10" y="4" width="2" height="4" fill="#FF8FAB"/>
    <rect x="6" y="8" width="4" height="2" fill="#FFD166"/>
    <rect x="4" y="4" width="2" height="4" fill="#FF8FAB"/>
    <rect x="6" y="10" width="4" height="2" fill="#FF8FAB"/>
    <rect x="2" y="6" width="2" height="4" fill="#FF8FAB"/>
    <rect x="12" y="6" width="2" height="4" fill="#FF8FAB"/>
    <rect x="7" y="12" width="2" height="4" fill="#7DE2B8"/>
  </svg>
);

export const PixelGithub = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="8" height="2" fill="currentColor"/>
    <rect x="2" y="4" width="2" height="6" fill="currentColor"/>
    <rect x="12" y="4" width="2" height="6" fill="currentColor"/>
    <rect x="2" y="10" width="12" height="2" fill="currentColor"/>
    <rect x="4" y="12" width="2" height="2" fill="currentColor"/>
    <rect x="10" y="12" width="2" height="2" fill="currentColor"/>
    <rect x="6" y="6" width="2" height="2" fill="#F4E3D7"/>
    <rect x="8" y="6" width="2" height="2" fill="#F4E3D7"/>
  </svg>
);

export const PixelMail = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="12" height="8" fill="currentColor"/>
    <rect x="2" y="4" width="12" height="2" fill="#F4E3D7"/>
    <rect x="4" y="6" width="8" height="2" fill="#F4E3D7"/>
    <rect x="6" y="8" width="4" height="2" fill="#F4E3D7"/>
  </svg>
);

export const PixelFacebook = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="2" width="4" height="2" fill="currentColor"/>
    <rect x="6" y="4" width="2" height="10" fill="currentColor"/>
    <rect x="4" y="6" width="6" height="2" fill="currentColor"/>
  </svg>
);

export const PixelStar = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="1" width="2" height="4" fill="#FFD166"/>
    <rect x="7" y="11" width="2" height="4" fill="#FFD166"/>
    <rect x="1" y="7" width="4" height="2" fill="#FFD166"/>
    <rect x="11" y="7" width="4" height="2" fill="#FFD166"/>
    <rect x="5" y="5" width="6" height="6" fill="#FFD166"/>
  </svg>
);

export const PixelComputer = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="12" height="8" fill="currentColor"/>
    <rect x="4" y="5" width="8" height="4" fill="#78C4FF"/>
    <rect x="6" y="11" width="4" height="2" fill="currentColor"/>
    <rect x="4" y="13" width="8" height="2" fill="currentColor"/>
  </svg>
);

// === NEW ICONS ===
export const PixelStudent = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cap base */}
    <rect x="2" y="6" width="12" height="2" fill="currentColor"/>
    <rect x="4" y="4" width="8" height="2" fill="currentColor"/>
    <rect x="6" y="8" width="4" height="4" fill="currentColor"/>
    {/* Tassel */}
    <rect x="12" y="8" width="2" height="4" fill="#FFD166"/>
  </svg>
);

export const PixelCode = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* < */}
    <rect x="4" y="6" width="2" height="4" fill="#78C4FF"/>
    <rect x="2" y="8" width="2" height="2" fill="#78C4FF"/>
    {/* > */}
    <rect x="10" y="6" width="2" height="4" fill="#78C4FF"/>
    <rect x="12" y="8" width="2" height="2" fill="#78C4FF"/>
    {/* / */}
    <rect x="6" y="10" width="2" height="2" fill="currentColor"/>
    <rect x="8" y="8" width="2" height="2" fill="currentColor"/>
    <rect x="8" y="6" width="2" height="2" fill="currentColor"/>
  </svg>
);

export const PixelWeb = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="2" width="10" height="12" fill="none" stroke="currentColor" strokeWidth="2"/>
    <rect x="3" y="7" width="10" height="2" fill="currentColor"/>
    <rect x="7" y="2" width="2" height="12" fill="currentColor"/>
  </svg>
);

export const PixelMobile = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="8" height="12" fill="currentColor"/>
    <rect x="5" y="3" width="6" height="8" fill="#F4E3D7"/>
    <rect x="7" y="12" width="2" height="1" fill="#F4E3D7"/>
  </svg>
);

export const PixelData = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="10" width="2" height="4" fill="#FF8FAB"/>
    <rect x="7" y="6" width="2" height="8" fill="#FFD166"/>
    <rect x="11" y="4" width="2" height="10" fill="#78C4FF"/>
    <rect x="2" y="14" width="12" height="2" fill="currentColor"/>
  </svg>
);

export const PixelAI = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="8" height="8" fill="currentColor"/>
    <rect x="5" y="6" width="2" height="2" fill="#7DE2B8"/>
    <rect x="9" y="6" width="2" height="2" fill="#7DE2B8"/>
    <rect x="6" y="10" width="4" height="1" fill="#F4E3D7"/>
    <rect x="7" y="2" width="2" height="2" fill="currentColor"/>
    <rect x="2" y="7" width="2" height="2" fill="currentColor"/>
    <rect x="12" y="7" width="2" height="2" fill="currentColor"/>
  </svg>
);

export const PixelDatabase = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="2" width="10" height="3" fill="currentColor"/>
    <rect x="3" y="6" width="10" height="3" fill="currentColor"/>
    <rect x="3" y="10" width="10" height="3" fill="currentColor"/>
    <rect x="5" y="3" width="1" height="1" fill="#7DE2B8"/>
    <rect x="5" y="7" width="1" height="1" fill="#7DE2B8"/>
    <rect x="5" y="11" width="1" height="1" fill="#7DE2B8"/>
  </svg>
);

export const PixelTools = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="2" width="4" height="2" fill="currentColor"/>
    <rect x="10" y="4" width="2" height="8" fill="currentColor"/>
    <rect x="8" y="12" width="4" height="2" fill="currentColor"/>
    <rect x="4" y="6" width="6" height="2" fill="currentColor"/>
  </svg>
);

export const PixelBooks = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="10" width="10" height="3" fill="#A88DFF"/>
    <rect x="4" y="7" width="9" height="3" fill="#78C4FF"/>
    <rect x="5" y="4" width="8" height="3" fill="#FF8FAB"/>
  </svg>
);

export const PixelSprout = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="8" width="2" height="6" fill="#7DE2B8"/>
    <rect x="4" y="5" width="4" height="3" fill="#7DE2B8"/>
    <rect x="8" y="4" width="4" height="3" fill="#7DE2B8"/>
    <rect x="5" y="14" width="6" height="2" fill="currentColor"/>
  </svg>
);

export const PixelFactory = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="12" height="6" fill="currentColor"/>
    <rect x="2" y="5" width="3" height="3" fill="currentColor"/>
    <rect x="6" y="3" width="3" height="5" fill="currentColor"/>
    <rect x="10" y="4" width="4" height="4" fill="currentColor"/>
  </svg>
);

export const PixelTent = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2L2 14H14L8 2Z" fill="#FFD166"/>
    <path d="M8 6L5 14H11L8 6Z" fill="#2B2B36"/>
  </svg>
);

export const PixelTrophy = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="8" height="6" fill="#FFD166"/>
    <rect x="6" y="8" width="4" height="2" fill="#FFD166"/>
    <rect x="7" y="10" width="2" height="2" fill="#FFD166"/>
    <rect x="5" y="12" width="6" height="2" fill="#FFD166"/>
    <rect x="2" y="3" width="2" height="4" fill="#FFD166"/>
    <rect x="12" y="3" width="2" height="4" fill="#FFD166"/>
    <rect x="3" y="4" width="1" height="2" fill="#F4E3D7"/>
    <rect x="12" y="4" width="1" height="2" fill="#F4E3D7"/>
  </svg>
);

export const PixelBulb = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="6" height="6" fill="#FFD166"/>
    <rect x="4" y="4" width="2" height="4" fill="#FFD166"/>
    <rect x="10" y="4" width="2" height="4" fill="#FFD166"/>
    <rect x="6" y="8" width="4" height="2" fill="#FFD166"/>
    <rect x="6" y="10" width="4" height="2" fill="currentColor"/>
    <rect x="7" y="12" width="2" height="2" fill="currentColor"/>
  </svg>
);

export const PixelArrow = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="2" height="8" fill="currentColor"/>
    <rect x="6" y="6" width="2" height="4" fill="currentColor"/>
    <rect x="8" y="8" width="2" height="2" fill="currentColor"/>
  </svg>
);

export const PixelCoffee = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="8" height="6" fill="currentColor"/>
    <rect x="11" y="7" width="2" height="4" fill="currentColor"/>
    <rect x="12" y="8" width="1" height="2" fill="#F4E3D7"/>
    <rect x="4" y="2" width="2" height="3" fill="#A88DFF"/>
    <rect x="7" y="1" width="2" height="4" fill="#A88DFF"/>
  </svg>
);

// Map icon strings to components for easy rendering
export const getPixelIcon = (name, props = {}) => {
  const icons = {
    flower: <PixelFlower {...props} />,
    star: <PixelStar {...props} />,
    computer: <PixelComputer {...props} />,
    github: <PixelGithub {...props} />,
    mail: <PixelMail {...props} />,
    facebook: <PixelFacebook {...props} />,
    student: <PixelStudent {...props} />,
    code: <PixelCode {...props} />,
    web: <PixelWeb {...props} />,
    mobile: <PixelMobile {...props} />,
    data: <PixelData {...props} />,
    ai: <PixelAI {...props} />,
    database: <PixelDatabase {...props} />,
    tools: <PixelTools {...props} />,
    books: <PixelBooks {...props} />,
    sprout: <PixelSprout {...props} />,
    factory: <PixelFactory {...props} />,
    tent: <PixelTent {...props} />,
    trophy: <PixelTrophy {...props} />,
    bulb: <PixelBulb {...props} />,
    arrow: <PixelArrow {...props} />,
    coffee: <PixelCoffee {...props} />
  };
  return icons[name] || <PixelFlower {...props} />;
};
