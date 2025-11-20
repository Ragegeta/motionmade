import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* … keep your existing SVG PATHS HERE … */}
    </svg>
);

const TiktokIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* … keep your existing SVG PATHS HERE … */}
    </svg>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        company: '',
        tiktok_handle: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget; // THIS is your <form id="contact-form">

        console.log('Form submitted:', Object.fromEntries(new FormData(form)));

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',   // e.g. "service_xxxxxx"
                'YOUR_TEMPLATE_ID',  // e.g. "template_xxxxxx"
                form,
                'YOUR_PUBLIC_KEY'    // e.g. "public_xxxxxx"
            )
            .then(() => {
                alert('Message sent! We’ll be in touch.');
                setFormData({
                    from_name: '',
                    reply_to: '',
                    company: '',
                    tiktok_handle: '',
                    message: '',
                });
            })
            .catch(err => {
                console.error('EmailJS Error:', err);
                alert('Failed to send message. Email us directly at abbed@motionmadebne.com.au');
            });
    };

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
                        Get the Attention You Deserve
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto" />
                    <p className="text-lg md:text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
                        Your customers are already on TikTok. We help you capture their attention and turn it into
                        measurable growth.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* THIS IS YOUR OLD HTML FORM, JUST IN JSX */}
                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="from_name" className="block text-sm font-medium text-slate-300">
                                Name
                            </label>
                            <input
                                type="text"
                                id="from_name"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="reply_to" className="block text-sm font-medium text-slate-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="reply_to"
                                name="reply_to"
                                value={formData.reply_to}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-300">
                                    Company / Brand
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="tiktok_handle" className="block text-sm font-medium text-slate-300">
                                    TikTok Handle <span className="text-slate-500">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    id="tiktok_handle"
                                    name="tiktok_handle"
                                    placeholder="@brandname"
                                    value={formData.tiktok_handle}
                                    onChange={handleChange}
                                    className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                                Tell us about your business goals
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold py-3 px-6 rounded-md hover:shadow-lg hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-pink-400"
                            >
                                Start Scaling Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <footer className="mt-20 border-t border-slate-800 pt-8">
                <div className="container mx-auto px-6 text-center text-slate-400">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a
                            href="https://www.tiktok.com/@YOUR_HANDLE"
                            className="text-white hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
                        >
                            <TiktokIcon />
                        </a>
                        <a
                            href="https://www.instagram.com/YOUR_HANDLE"
                            className="hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                    <a
                        href="mailto:abbed@motionmadebne.com.au"
                        className="hover:text-slate-100 transition-colors duration-300"
                    >
                        abbed@motionmadebne.com.au
                    </a>
                    <p className="mt-4 text-sm">
                        &copy; {new Date().getFullYear()} MotionMade. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
