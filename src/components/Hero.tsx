import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 leading-tight mb-6" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
          Turn Attention Into <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Revenue</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          We build TikTok-first brands that convert attention into sales. We implement data, creative ideas, and execution that turn views into customers.
        </p>
        <a 
          href="#contact"
          className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold text-lg py-4 px-10 rounded-full hover:shadow-lg hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300 shadow-md shadow-black/40 ring-1 ring-white/20"
        >
          Scale Your Brand
        </a>
      </div>
    </section>
  );
};

export default Hero;