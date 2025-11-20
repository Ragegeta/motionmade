import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 md:py-32 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Selected Works</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"></div>
                    <p className="text-slate-400 mt-4">A preview of the style, creative, and performance direction we build for brands.</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-8">
                    {/* 
                      PORTFOLIO PLACEHOLDERS 
                      Replace these divs with your actual TikTok Embeds or Video Components later.
                      Standard TikTok Aspect Ratio is 9:16
                    */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="relative rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900/30 w-[280px] aspect-[9/16] flex flex-col items-center justify-center group hover:border-slate-500 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors">
                                <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-slate-400 font-medium">Portfolio Video {item}</p>
                            <p className="text-slate-600 text-sm mt-2 px-4 text-center">Insert Embed Code Here</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;