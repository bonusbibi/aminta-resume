import React from 'react';
import { journeyData } from '../data/journey';
import { getPixelIcon } from '../components/PixelIcons';

const Journey = () => {
  return (
    <section id="journey" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 flex items-center justify-center gap-3">
            My CS Journey {getPixelIcon('sprout', { size: 28 })}
          </h2>
          <p className="text-pastel-dark/70 font-pixel text-lg">A small timeline of what I've been learning throughout university.</p>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-pastel-mint/50 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {journeyData.map((phase, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-[-29px] md:left-1/2 w-8 h-8 bg-white border-4 border-pastel-mint rounded-full transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-pastel-mint rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white p-6 rounded-xl pixel-border pixel-shadow relative hover:-translate-y-1 transition-transform">
                    {/* Cute tab */}
                    <div className="absolute -top-4 left-4 bg-pastel-pink text-white px-3 py-1 rounded-t-lg font-pixel text-sm border-2 border-b-0 border-pastel-dark">
                      {phase.year}
                    </div>
                    
                    <h3 className="font-bold text-xl mb-4 mt-2">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-pastel-dark/80 items-center">
                          <span className="text-pastel-mint">{getPixelIcon('arrow', { size: 10 })}</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
