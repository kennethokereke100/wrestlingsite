'use client';

import { useEffect, useRef, useState } from 'react';
import IphoneTemplate from '../components/IphoneTemplate';
import { getImagePath } from '../utils/imagePath';

export default function Home() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);
  const messagingSectionRef = useRef<HTMLDivElement>(null);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isMessagingVisible, setIsMessagingVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === scrollSectionRef.current) setIsVisible(true);
            if (entry.target === mapSectionRef.current) setIsMapVisible(true);
            if (entry.target === messagingSectionRef.current) setIsMessagingVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (scrollSectionRef.current) observer.observe(scrollSectionRef.current);
    if (mapSectionRef.current) observer.observe(mapSectionRef.current);
    if (messagingSectionRef.current) observer.observe(messagingSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden overflow-y-auto relative">
      {/* Global Background Coverage */}
      <div 
        className="fixed inset-0 bg-black z-0"
        style={{
          backgroundImage: `url(${getImagePath('/images/wrestlingbg.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="fixed inset-0 bg-black opacity-80 z-0"></div>
      
      {/* Hero Section */}
      <div className="min-h-screen relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getImagePath('/images/wrestlingbg.png')})`
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        
        {/* Content Container */}
        <div className="relative z-20 flex flex-col min-h-screen">
          {/* Header Section - Positioned 15-20% from top */}
          <div className="flex items-center justify-center" style={{ height: '20vh' }}>
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Wrestling Connect
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Connecting indie wrestlers and promoters
              </p>
            </div>
          </div>
          
          {/* Wrestler and Speech Bubble Section - Lower half of screen */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-6 md:gap-8">
              {/* Wrestler Image */}
              <img 
                src={getImagePath('/images/wrestler.png')} 
                alt="Wrestler" 
                className="animate-floating w-44 h-44 md:w-56 md:h-56 object-contain"
              />
              
              {/* Speech Bubble */}
              <div 
                className="animate-fade-in-slide bg-white rounded-2xl p-6 md:p-8 relative shadow-lg"
                style={{ animationDelay: '0.5s', opacity: 0 }}
              >
                {/* Speech bubble tail pointing to wrestler */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-l-10 border-l-white border-t-10 border-t-transparent border-b-10 border-b-transparent"></div>
                
                <p className="text-black font-medium text-base md:text-lg">
                  I just got released and can&apos;t find bookings!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Scroll Section */}
      <div 
        ref={scrollSectionRef}
        className={`min-h-screen flex flex-col justify-center pb-24 sm:pb-28 md:pb-32 relative transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getImagePath('/images/wrestlingbg.png')})`
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        
        {/* Content Container */}
        <div className="relative z-20 flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Wrestler with Speech Bubble */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                  {/* Wrestler Image */}
                  <img 
                    src={getImagePath('/images/wrestlerverify.png')} 
                    alt="Wrestler" 
                    className="animate-floating w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain"
                  />
                  
                  {/* Speech Bubble */}
                  <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 relative shadow-lg max-w-xs sm:max-w-sm">
                    {/* Speech bubble tail pointing to wrestler */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-l-10 border-l-white border-t-10 border-t-transparent border-b-10 border-b-transparent"></div>
                    
                    <p className="text-black font-medium text-sm sm:text-base md:text-lg">
                      I just found Wrestle Connect – now I can book gigs easily!
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Single iPhone */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="flex justify-center w-full sm:justify-center md:justify-center lg:justify-start">
                  <IphoneTemplate 
                    className="w-[90vw] h-[60vh] sm:w-[70vw] sm:h-[55vh] md:w-[70vw] md:h-[60vh] lg:w-90 lg:h-[30rem]"
                    href="/verification"
                  />
                </div>
                <div className="flex justify-center w-full sm:justify-center md:justify-center lg:justify-start mt-4">
                  <p className="text-white text-sm md:text-base max-w-md text-center sm:text-center md:text-center lg:text-left">
                    Secure sign-up and verification to build trust with promoters and talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map / Opportunities Section */}
      <div 
        ref={mapSectionRef}
        className={`min-h-screen flex flex-col justify-center pb-24 sm:pb-28 md:pb-32 relative transition-all duration-700 ease-out ${
          isMapVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getImagePath('/images/wrestlingbg.png')})`
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        
        {/* Content Container */}
        <div className="relative z-20 flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Wrestler with Speech Bubble */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                  {/* Wrestler Image */}
                  <img 
                    src={getImagePath('/images/wrestlermaps.png')} 
                    alt="Wrestler" 
                    className="animate-floating w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain"
                  />
                  
                  {/* Speech Bubble */}
                  <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 relative shadow-lg max-w-xs sm:max-w-sm">
                    {/* Speech bubble tail pointing to wrestler */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-l-10 border-l-white border-t-10 border-t-transparent border-b-10 border-b-transparent"></div>
                    
                    <p className="text-black font-medium text-sm sm:text-base md:text-lg">
                      Look! I can see venues and promoters near me!
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Single iPhone */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="flex justify-center w-full sm:justify-center md:justify-center lg:justify-start">
                  <IphoneTemplate 
                    className="w-[90vw] h-[60vh] sm:w-[70vw] sm:h-[55vh] md:w-[70vw] md:h-[60vh] lg:w-90 lg:h-[30rem]"
                    href="/venues"
                  />
                </div>
                <div className="flex justify-center w-full sm:justify-center md:justify-center lg:justify-start mt-4">
                  <p className="text-white text-sm md:text-base max-w-md text-center sm:text-center md:text-center lg:text-left">
                    Discover venues, events, and opportunities near you with our interactive map.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messaging / Negotiation Section */}
      <div 
        ref={messagingSectionRef}
        className={`min-h-screen flex flex-col justify-center pb-24 sm:pb-28 md:pb-32 relative transition-all duration-700 ease-out ${
          isMessagingVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getImagePath('/images/wrestlingbg.png')})`
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        
        {/* Content Container */}
        <div className="relative z-20 flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Wrestler with Speech Bubble */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                  {/* Wrestler Image */}
                  <img 
                    src={getImagePath('/images/wrestercall.png')} 
                    alt="Wrestler" 
                    className="animate-floating w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain"
                  />
                  
                  {/* Speech Bubble */}
                  <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 relative shadow-lg max-w-xs sm:max-w-sm">
                    {/* Speech bubble tail pointing to wrestler */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-l-10 border-l-white border-t-10 border-t-transparent border-b-10 border-b-transparent"></div>
                    
                    <p className="text-black font-medium text-sm sm:text-base md:text-lg">
                      I just sent a promoter a message – no more guessing rates!
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Single iPhone */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="flex justify-center w-full sm:justify-center md:justify-center lg:justify-start">
                  <IphoneTemplate 
                    className="w-[90vw] h-[60vh] sm:w-[70vw] sm:h-[55vh] md:w-[70vw] md:h-[60vh] lg:w-90 lg:h-[30rem]"
                    href="/call"
                  />
                </div>
                <div className="flex justify-center w-full sm:justify-center md:justify-center lg:justify-start mt-4">
                  <p className="text-white text-sm md:text-base max-w-md text-center sm:text-center md:text-center lg:text-left">
                    Direct chat with promoters to negotiate rates and confirm bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}
