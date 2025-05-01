import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const heroElement = heroRef.current;
      
      // Parallax effect
      const parallaxElement = heroElement.querySelector('.parallax-bg') as HTMLElement;
      if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${scrollPosition * 0.25}px)`;
      }
      
      // Fade effect for content
      const contentElement = heroElement.querySelector('.hero-content') as HTMLElement;
      if (contentElement) {
        contentElement.style.opacity = `${1 - scrollPosition / 600}`;
        contentElement.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background with parallax effect */}
      <div 
        className="parallax-bg absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-700 filter blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[15%] w-80 h-80 rounded-full bg-purple-300 dark:bg-purple-800 filter blur-3xl"></div>
          <div className="absolute top-[40%] left-[30%] w-72 h-72 rounded-full bg-green-300 dark:bg-green-800 filter blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero-content flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-16 text-center lg:text-left">
            <div className="mb-4 inline-block">
              <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium">
                Introducing Horizon
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Elevate Your Digital <span className="text-blue-600 dark:text-blue-400">Experience</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Create stunning websites with our modern design system. Built for developers and designers to collaborate seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#features"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full inline-flex items-center justify-center transition-colors duration-200"
              >
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-full inline-flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-colors duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="w-full h-full absolute -right-4 -bottom-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Dashboard Preview"
                  className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -left-6 -bottom-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Fast & Responsive</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Optimized for all devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;