// src/sections/Contact.jsx
// Purpose: Contact form with EmailJS integration + social links
// Concepts: useState for form status, emailjs.sendForm for submission

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/AyushPakar",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayush-pakar-cs108/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:ayushpakar108@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Discord",
    href: "https://discordapp.com/users/ayushpakar.discord",
    icon: SiDiscord,
  },
];

function Contacting() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
        // Should print: service_abc123xyz
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className="overflow-hidden bg-canvas py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Title */}
        <h2 className="section-title mb-12 md:mb-16">Connect With Me</h2>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Contact Form */}
          <div className="flex-1 max-w-xl">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-body text-sm font-medium text-deep/80"
                >
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 border border-secondary rounded-lg bg-surface text-deep font-body text-sm placeholder:text-deep/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-body text-sm font-medium text-deep/80"
                >
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 border border-secondary rounded-lg bg-surface text-deep font-body text-sm placeholder:text-deep/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-body text-sm font-medium text-deep/80"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message..."
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 border border-secondary rounded-lg bg-surface text-deep font-body text-sm placeholder:text-deep/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none disabled:opacity-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-2 self-start inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-primary font-body text-sm animate-fade-in">
                  <CheckCircle size={18} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 font-body text-sm animate-fade-in">
                  <AlertCircle size={18} />
                  Something went wrong. Please email me directly.
                </div>
              )}
            </form>
          </div>

          {/* Right: Social Links + Info */}
          <div className="lg:w-72 flex flex-col gap-8">
            {/* Platforms */}
            <div>
              <h3 className="font-heading text-sm uppercase tracking-widest text-deep/40 mb-4">
                Platforms
              </h3>
              <div className="flex gap-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-center w-10 h-10 border-2 border-deep/20 rounded-lg text-deep/40 hover:text-accent hover:border-accent transition-all duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Email Direct */}
            <div>
              <h3 className="font-heading text-sm uppercase tracking-widest text-deep/40 mb-2">
                Email Directly
              </h3>
              <a
                href="mailto:ayushpakar108@gmail.com"
                className="font-body text-sm text-primary hover:text-accent transition-colors"
              >
                ayushpakar108@gmail.com
              </a>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-heading text-sm uppercase tracking-widest text-deep/40 mb-2">
                Location
              </h3>
              <p className="font-body text-sm text-deep/50">
                Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacting;
