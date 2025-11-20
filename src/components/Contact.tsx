import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialise EmailJS with your user/public key
emailjs.init('AcSa1aFlL36Sxc6ge');

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 14.784 2 14.43 2 12s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.48 3.614c.636-.247 1.363-.416 2.427-.465C8.93 3.013 9.284 3 11.685 3h.63m-.001-3C9.25 0 8.884.01 7.828.056c-1.17.055-2.094.22-2.958.516a6.88 6.88 0 00-2.333 1.62A6.88 6.88 0 00.92 6.556c-.297.864-.46 1.788-.516 2.958C.01 10.516 0 10.884 0 12c0 1.116.01 1.484.056 2.542.055 1.17.22 2.094.516 2.958a6.88 6.88 0 001.62 2.333 6.88 6.88 0 002.333 1.62c.864.297 1.788.46 2.958.516.956.045 1.32.056 2.376.056s1.42-.01 2.476-.056c1.17-.055 2.094-.22 2.958-.516a6.88 6.88 0 002.333-1.62 6.88 6.88 0 001.62-2.333c.297-.864.46-1.788.516-2.958.045-1.058.056-1.426.056-2.476s-.01-1.42-.056-2.476c-.055-1.17-.22-2.094-.516-2.958a6.88 6.88 0 00-1.62-2.333A6.88 6.88 0 0017.444.92c-.864-.297-1.788-.46-2.958-.516C13.484.01 13.116 0 12 0h.315z"
            clipRule="evenodd"
        />
        <path
            fillRule="evenodd"
            d="M12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zM12 15a3 3 0 110-6 3 3 0 010 6z"
            clipRule="evenodd"
        />
        <path d="M16.95 6.05a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
    </svg>
);

const TiktokIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.85-.38-6.75-1.77-1.06-.78-1.86-1.8-2.4-2.99-.4-1.04-.6-2.13-.6-3.23s.01-2.12.02-3.18c.02-1.64.44-3.26 1.25-4.73 1.06-1.95 2.9-3.32 5.09-3.87 1.04-.26 2.1-.4 3.16-.46.24 1.41.66 2.8 1.25 4.12-1.03.26-2.1.33-3.13.33-1.04 0-2.09-.15-3.09-.54-.5-.19-.94-.48-1.32-.82-.39-.35-.7-.78-.89-1.25-.02-.05-.04-.1-.05-.15.01.01.02.01.03.02.06.05.11.09.17.14.36.3.76.54 1.19.73.94.39 1.99.54 3.03.54 1.09 0 2.19-.07 3.25-.33A15.18 15.18 0 0112.3 4.7c-.59-1.32-1.01-2.71-1.25-4.12z" />
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
        const form = e.currentTarget;

        console.log('Form submitted:', Object.fromEntries(new FormData(form)));

        emailjs
            .sendForm(
                'service_jrasc2b',   // your real service ID
                'template_qupacf8', // your real template ID
                form
            )
            .then(() => {
                alert("Message sent! We'll be in touch.");
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
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100"
                            />
                        </div>

                        <div>
                            <label htmlFor="reply_to" className="block text-shadow text-sm font-medium text-slate-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="reply_to"
                                name="reply_to"
                                value={formData.reply_to}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100"
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
                                    className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100"
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
                                    className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100"
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
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold py-3 px-6 rounded-md hover:shadow-lg hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300"
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
