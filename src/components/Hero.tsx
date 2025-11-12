import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 leading-tight mb-4" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
          Digital Ads That Convert.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          We craft compelling video ad campaigns for social media that capture attention, drive traffic, and grow your business.
        </p>
        <a 
          href="#contact"
          className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg py-4 px-10 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 shadow-md shadow-black/40 ring-1 ring-blue-600"
        >
          Launch Your Campaign
        </a>
      </div>
    </section>
  );
};

export default Hero;