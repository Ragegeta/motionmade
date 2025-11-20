import React from 'react';

const capabilities = [
    { title: 'Performance Creative', desc: 'Direct-response video engineered to convert cold traffic.' },
    { title: 'Media Buying', desc: 'Full-funnel TikTok ad management optimized for CAC, ROAS, and scale.' },
    { title: 'TikTok Brand Positioning', desc: 'Platform-specific strategy that helps your business stand out, build trust, and capture market share.' },
    { title: 'Creator Partnerships', desc: 'Optional creator sourcing for brands that benefit from authentic, UGC-style content.' },
    { title: 'Creative & Retention Testing', desc: 'Data-backed iterations on hooks, layouts, and structures to maximize engagement and watch time.' },
    { title: 'TikTok Shop Enablement', desc: 'Support for setting up and integrating your brand with TikTok Shop for frictionless conversions.' },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Core Capabilities</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center text-lg md:text-xl text-slate-300 space-y-6 mb-20">
                    <p className="font-medium text-2xl text-slate-100">
                        We drive sales through online presence.
                    </p>
                    <p>
                        MotionMade treats TikTok as a performance engine. We build presence, drive demand, and create predictable revenue through content and paid traffic.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((item, index) => (
                        <div key={index} className="bg-slate-900/50 rounded-xl text-center transform hover:-translate-y-1 transition-transform duration-300 ring-1 ring-slate-700 hover:ring-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 overflow-hidden group">
                           <div className="p-8 h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;