import React from 'react';

const portfolioItems = [
    { title: 'Featured Campaign', imageUrl: 'https://picsum.photos/seed/campaign/500/400' },
];

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Our Work</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                </div>
                <div className="max-w-lg mx-auto">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl shadow-black/40">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-100 group-hover:bg-blue-800/70 transition-all duration-500 flex items-end p-6">
                                <h3 className="text-white text-2xl font-bold opacity-100 transform translate-y-0 group-hover:-translate-y-2 transition-all duration-300">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;