'use client';

import Link from 'next/link';
import { getImagePath } from '../utils/imagePath';

interface IphoneTemplateProps {
  className?: string;
  href: string;
}

export default function IphoneTemplate({ className = '', href }: IphoneTemplateProps) {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone Image */}
      <img 
        src={getImagePath('/images/iphone.png')} 
        alt="iPhone App" 
        className="w-full h-full object-contain"
      />
      
      {/* Navigation Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link href={href}>
          <button 
            className="px-4 py-3 text-base font-semibold bg-[#0057FF] text-white rounded-lg animate-bounce hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 sm:px-8 sm:py-5 sm:text-xl md:px-10 md:py-6 md:text-2xl lg:px-6 lg:py-4 lg:text-lg"
            style={{
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              // Only apply pointer cursor on devices that support hover
              if (window.matchMedia('(hover: hover)').matches) {
                e.currentTarget.style.cursor = 'pointer';
              }
            }}
            onMouseLeave={(e) => {
              if (window.matchMedia('(hover: hover)').matches) {
                e.currentTarget.style.cursor = 'default';
              }
            }}
          >
            Click to view screen
          </button>
        </Link>
      </div>
    </div>
  );
} 