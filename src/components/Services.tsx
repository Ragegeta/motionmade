import React from 'react';

const services = [
    { title: 'Video Ad Creation', imageUrl: 'https://picsum.photos/seed/video/400/250' },
    { title: 'Campaign Strategy', imageUrl: 'https://picsum.photos/seed/strategy/400/250' },
    { title: 'Social Ad Management', imageUrl: 'https://picsum.photos/seed/social/400/250' },
    { title: 'Performance Analytics', imageUrl: 'https://picsum.photos/seed/analytics/400/250' },
    { title: 'Creative A/B Testing', imageUrl: 'https://picsum.photos/seed/testing/400/250' },
    { title: 'Landing Page Design', imageUrl: 'https://picsum.photos/seed/landingpage/400/250' },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-100 mb-2">Our Ad Services</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center text-lg text-slate-300 space-y-4 mb-16">
                    <p>
                        We're MotionMade, and we specialize in creating and managing high-performance digital ad campaigns. In a crowded digital landscape, we make your brand impossible to ignore.
                    </p>
                    <p>
                        This isn’t about just getting views. It’s about driving measurable results—clicks, conversions, and revenue. We build data-driven campaigns tailored to your business goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-slate-900/50 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 ring-1 ring-slate-700 hover:ring-blue-500 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden">
                            <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover" />
                            <div className="p-8">
                                <h3 className="text-xl font-semibold text-slate-100">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;