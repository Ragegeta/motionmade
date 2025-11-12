import React from 'react';

const services = [
    { title: 'Video Ad Creation' },
    { title: 'Campaign Strategy' },
    { title: 'Social Ad Management' },
    { title: 'Performance Analytics' },
    { title: 'Creative A/B Testing' },
    { title: 'Landing Page Design' },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Our Ad Services</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center text-lg md:text-xl text-slate-300 space-y-6 mb-20">
                    <p>
                        At MotionMade, we specialize in high-performance digital ad campaigns. We make your brand distinct and impossible to ignore.
                    </p>
                    <p>
                        We deliver measurable results—clicks, conversions, and revenue. Our ads are data-driven campaigns tailored to your business goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-slate-900/50 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 ring-1 ring-slate-700 hover:ring-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
                           <div className="p-8">
                                <h3 className="text-2xl font-semibold text-slate-100">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;