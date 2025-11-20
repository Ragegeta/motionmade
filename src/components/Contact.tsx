import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        company: '',
        tiktok_handle: '',
        message: '',
    });

    // YOUR EXACT KEY HERE (old EmailJS user ID)
    emailjs.init("AcSa1aFlL36Sxc6ge");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        console.log("Form submitted:", Object.fromEntries(new FormData(form)));

        // YOUR KEY DOES NOT USE THE PUBLIC KEY ARGUMENT
        emailjs.sendForm(
            "service_5b7yd6j",        // <-- YOUR service ID
            "template_7q439sl",      // <-- YOUR template ID
            form                     // <-- NO PUBLIC KEY HERE
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
            console.error("EmailJS Error:", err);
            alert("Failed to send message. Email us directly at abbed@motionmadebne.com.au");
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
                        Your customers are already on TikTok. We help you capture their attention and turn it into measurable growth.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label className="block text-sm text-slate-300">Name</label>
                            <input
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-slate-300">Email</label>
                            <input
                                type="email"
                                name="reply_to"
                                value={formData.reply_to}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-slate-300">Company / Brand</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-slate-300">
                                    TikTok Handle <span className="text-slate-500">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    name="tiktok_handle"
                                    placeholder="@brandname"
                                    value={formData.tiktok_handle}
                                    onChange={handleChange}
                                    className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-slate-300">Tell us about your business goals</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold py-3 px-6 rounded-md"
                            >
                                Start Scaling Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

