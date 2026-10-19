import React from 'react';

export const FloatingOrbs = () => {
  // Circles positioned across the entire background based on the user's uploaded reference
  const orbs = [
    // 🔴 Top-left Red orb
    {
      top: '100px',
      left: '3%',
      size: 'w-14 h-14 sm:w-16 sm:h-16',
      bg: 'bg-[#FF202B]',
      animation: 'animate-orb-a',
      shadow: 'shadow-lg shadow-[#FF202B]/40'
    },
    // 🔵 Mid-left Cyan orb
    {
      top: '250px',
      left: '1%',
      size: 'w-8 h-8 sm:w-10 sm:h-10',
      bg: 'bg-[#A0E8E8]',
      animation: 'animate-orb-b',
      shadow: 'shadow-md shadow-[#A0E8E8]/50'
    },
    // 🟡 Left-center Yellow orb
    {
      top: '320px',
      left: '9%',
      size: 'w-10 h-10 sm:w-12 sm:h-12',
      bg: 'bg-[#FFDD63]',
      animation: 'animate-orb-c',
      shadow: 'shadow-md shadow-[#FFDD63]/60'
    },
    // 🔴 Lower-left Red orb (small)
    {
      top: '440px',
      left: '2%',
      size: 'w-7 h-7 sm:w-8 sm:h-8',
      bg: 'bg-[#FF202B]',
      animation: 'animate-orb-a',
      shadow: 'shadow-md shadow-[#FF202B]/40'
    },
    // 🔴 Bottom-left Red orb (medium)
    {
      top: '500px',
      left: '8%',
      size: 'w-10 h-10 sm:w-12 sm:h-12',
      bg: 'bg-[#FF202B]',
      animation: 'animate-orb-b',
      shadow: 'shadow-lg shadow-[#FF202B]/45'
    },
    // 🟡 Bottom-left Yellow orb (large)
    {
      top: '680px',
      left: '1.5%',
      size: 'w-12 h-12 sm:w-14 sm:h-14',
      bg: 'bg-[#FFDD63]',
      animation: 'animate-orb-c',
      shadow: 'shadow-lg shadow-[#FFDD63]/60'
    },

    // 🔵 Center Cyan orb near headline
    {
      top: '310px',
      left: '46%',
      size: 'w-8 h-8 sm:w-9 sm:h-9',
      bg: 'bg-[#A0E8E8]',
      animation: 'animate-orb-b',
      shadow: 'shadow-md shadow-[#A0E8E8]/50'
    },

    // 🔵 Bottom center Cyan orb
    {
      top: '720px',
      left: '49%',
      size: 'w-11 h-11 sm:w-13 sm:h-13',
      bg: 'bg-[#A0E8E8]',
      animation: 'animate-orb-a',
      shadow: 'shadow-lg shadow-[#A0E8E8]/50'
    },

    // 🟡 Top-right Yellow orb (small)
    {
      top: '90px',
      right: '1.5%',
      size: 'w-6 h-6 sm:w-7 sm:h-7',
      bg: 'bg-[#FFDD63]',
      animation: 'animate-orb-c',
      shadow: 'shadow-md shadow-[#FFDD63]/50'
    },
    // 🟡 Top-right Yellow orb (large)
    {
      top: '140px',
      right: '10%',
      size: 'w-11 h-11 sm:w-14 sm:h-14',
      bg: 'bg-[#FFDD63]',
      animation: 'animate-orb-b',
      shadow: 'shadow-lg shadow-[#FFDD63]/60'
    },
    // 🔵 Upper-right Cyan orb
    {
      top: '240px',
      right: '2%',
      size: 'w-8 h-8 sm:w-9 sm:h-9',
      bg: 'bg-[#A0E8E8]',
      animation: 'animate-orb-a',
      shadow: 'shadow-md shadow-[#A0E8E8]/50'
    },
    // 🔴 Mid-right Red orb (large)
    {
      top: '350px',
      right: '7%',
      size: 'w-12 h-12 sm:w-15 sm:h-15',
      bg: 'bg-[#FF202B]',
      animation: 'animate-orb-a',
      shadow: 'shadow-xl shadow-[#FF202B]/45'
    },
    // 🔵 Mid-right Cyan orb
    {
      top: '470px',
      right: '9%',
      size: 'w-8 h-8 sm:w-10 sm:h-10',
      bg: 'bg-[#A0E8E8]',
      animation: 'animate-orb-c',
      shadow: 'shadow-md shadow-[#A0E8E8]/50'
    },
    // 🔵 Lower-right Cyan orb
    {
      top: '640px',
      right: '12%',
      size: 'w-11 h-11 sm:w-13 sm:h-13',
      bg: 'bg-[#A0E8E8]',
      animation: 'animate-orb-b',
      shadow: 'shadow-lg shadow-[#A0E8E8]/50'
    },
    // 🔴 Bottom-right Red orb (large)
    {
      top: '720px',
      right: '4.5%',
      size: 'w-12 h-12 sm:w-15 sm:h-15',
      bg: 'bg-[#FF202B]',
      animation: 'animate-orb-a',
      shadow: 'shadow-xl shadow-[#FF202B]/50'
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {orbs.map((orb, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${orb.size} ${orb.bg} ${orb.animation} ${orb.shadow} transition-transform duration-700`}
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
