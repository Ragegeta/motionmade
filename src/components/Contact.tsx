import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// ✅ Initialise EmailJS once with your PUBLIC KEY
emailjs.init({
  publicKey: "AcSa1aFlL36Sxc6ge",
});

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06..."
      clipRule="evenodd"
    />
  </svg>
);

const TiktokIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02..." />
  </svg>
);

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">(
    ""
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_jrasc2b",   // ✅ your service ID
        "template_qupacf8",  // ✅ your template ID
        form                 // ✅ the <form> element
      )
      .then(
        () => {
          setStatus("success");
          form.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Start Your Campaign Now
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-lg md:text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
            Complete the form below, and we'll reach out to start your ad
            campaign for real results.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 
                rounded-md py-3 px-4 text-slate-100 placeholder-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 
                rounded-md py-3 px-4 text-slate-100 placeholder-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="company"
                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 
                rounded-md py-3 px-4 text-slate-100 placeholder-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 
                rounded-md py-3 px-4 text-slate-100 placeholder-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1 block w-full bg-slate-800/50 border border-slate-700 
                rounded-md py-3 px-4 text-slate-100 placeholder-slate-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 
              text-white font-bold py-3 px-6 rounded-md hover:scale-105 
              transition-transform duration-300 disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center mt-4">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>

      <footer className="mt-20 border-t border-slate-800 pt-8">
        <div className="container mx-auto px-6 text-center text-slate-400">
          <div className="flex justify-center space-x-6 mb-4">
            <a className="hover:text-blue-400">
              <InstagramIcon />
            </a>
            <a className="hover:text-blue-400">
              <TiktokIcon />
            </a>
          </div>

          <a
            href="mailto:abbed@motionmadebne.com.au"
            className="hover:text-slate-100"
          >
            abbed@motionmadebne.com.au
          </a>

          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} MotionMade. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;


