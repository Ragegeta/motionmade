import React, { useState } from 'react';

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 14.784 2 14.43 2 12s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.48 3.614c.636-.247 1.363-.416 2.427-.465C8.93 2.013 9.284 2 11.685 2h.63m-.001-2C9.25 0 8.884.01 7.828.056c-1.17.055-2.094.22-2.958.516a6.88 6.88 0 00-2.333 1.62A6.88 6.88 0 00.92 6.556c-.297.864-.46 1.788-.516 2.958C.01 10.516 0 10.884 0 12c0 1.116.01 1.484.056 2.542.055 1.17.22 2.094.516 2.958a6.88 6.88 0 001.62 2.333 6.88 6.88 0 002.333 1.62c.864.297 1.788.46 2.958.516.956.045 1.32.056 2.376.056s1.42-.01 2.476-.056c1.17-.055 2.094-.22 2.958-.516a6.88 6.88 0 002.333-1.62 6.88 6.88 0 001.62-2.333c.297-.864.46-1.788-.516-2.958.045-1.058.056-1.426.056-2.476s-.01-1.42-.056-2.476c-.055-1.17-.22-2.094-.516-2.958a6.88 6.88 0 00-1.62-2.333A6.88 6.88 0 0017.444.92c-.864-.297-1.788-.46-2.958-.516C13.484.01 13.116 0 12 0h.315z" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zM12 15a3 3 0 110-6 3 3 0 010 6z" clipRule="evenodd"/>
        <path d="M16.95 6.05a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
    </svg>
);
const TiktokIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.85-.38-6.75-1.77-1.06-.78-1.86-1.8-2.4-2.99-.4-1.04-.6-2.13-.6-3.23s.01-2.12.02-3.18c.02-1.64.44-3.26 1.25-4.73 1.06-1.95 2.9-3.32 5.09-3.87 1.04-.26 2.1-.4 3.16-.46.24 1.41.66 2.8 1.25 4.12-1.03.26-2.1.33-3.13.33-1.04 0-2.09-.15-3.09-.54-.5-.19-.94-.48-1.32-.82-.04-.04-.08-.08-.12-.13-.01-.01-.02-.02-.03-.03s-.01-.01-.02-.02c-.03-.03-.05-.05-.08-.08-.04-.04-.07-.07-.11-.11-.05-.05-.09-.09-.13-.14-.01-.01-.02-.02-.03-.03-.01-.01-.01-.02-.02-.03-.01-.01-.02-.02-.03-.04-.01-.01-.02-.02-.03-.03-.01-.02-.01-.03-.02-.05-.01-.01-.02-.02-.02-.04v-.01c-.01-.02-.02-.04-.02-.06v-.01c-.02-.05-.03-.1-.03-.15 0-.01-.01-.02-.01-.03 0-.01 0-.02-.01-.03v-.01h-.01c-.02-.09-.03-.18-.03-.27 0-.03 0-.05-.01-.08v-.02c0-.02 0-.03-.01-.05 0-.02 0-.04-.01-.06v-.02c0-.02 0-.03-.01-.05s0-.03-.01-.04v-.02c0-.02 0-.03-.01-.05s0-.03-.01-.04v-.01h.01Z"/>
    </svg>
);


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you would handle form submission here (e.g., API call)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-100 mb-2">Let's Talk</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                    <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">Ready to launch an ad campaign that gets results? We'd love to hear about your goals.</p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-3 px-6 rounded-md hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-400"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <footer className="mt-20 border-t border-slate-800 pt-8">
                <div className="container mx-auto px-6 text-center text-slate-400">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="#" className="hover:text-blue-400 transition-colors duration-300"><InstagramIcon /></a>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-300"><TiktokIcon /></a>
                    </div>
                    <a href="mailto:abbed@motionmadebne.com.au" className="hover:text-slate-100 transition-colors duration-300">
                        abbed@motionmadebne.com.au
                    </a>
                    <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} MotionMade. All Rights Reserved.</p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;