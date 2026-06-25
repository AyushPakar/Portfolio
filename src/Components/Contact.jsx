// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
// import { SiDiscord } from "react-icons/si";

// export const contactLinks = [
//   {
//     label: "GitHub",
//     href: "https://github.com/AyushPakar",
//     icon: FaGithub,
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/ayush-pakar-cs108/",
//     icon: FaLinkedin,
//   },
//   {
//     label: "Email",
//     href: "mailto:ayushpakar108@gmail.com",
//     icon: FaEnvelope,
//   },
//   {
//     label: "Discord",
//     href: "https://discordapp.com/users/ayushpakar.discord",
//     icon: SiDiscord,
//   },
// ];

// function Contact() {
//   return (
//     <section className="overflow-hidden bg-white py-16 md:py-24">
//       <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col justify-center items-center">
//         <h1 className="font-heading font-bold text-2xl text-deep pb-3">
//           Connect With Me
//         </h1>
//         <div className="flex flex-col justify-center items-center gap-2">
//           <h1 className="font-sans leading-relaxed uppercase text-sm lineout font-bold">
//             Platforms
//           </h1>
//           <div className="flex gap-4 items-center">
//             {contactLinks.map((link) => {
//               const Icon = link.icon;
//               return (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   aria-label={link.label}
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   className="flex items-center justify-center border-3 border-deep/60 p-2 rounded-md text-deep/60 hover:text-accent hover:border-accent transition-all duration-200"
//                 >
//                   <Icon size={18} />
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//         <div>
//           <form action="submit" className="flex flex-col gap-4">
//             {/* Name Input */}
//             <div className="flex flex-col gap-1.5">
//               <label
//                 htmlFor="name"
//                 className="font-body text-sm font-medium text-deep/80"
//               >
//                 Name <span className="text-accent">*</span>
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full px-4 py-3 border border-secondary rounded-lg bg-surface text-deep font-body text-sm placeholder:text-deep/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
//               />
//             </div>

//             {/* Email Input */}
//             <div className="flex flex-col gap-1.5">
//               <label
//                 htmlFor="email"
//                 className="font-body text-sm font-medium text-deep/80"
//               >
//                 Email <span className="text-accent">*</span>
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="your@email.com"
//                 required
//                 className="w-full px-4 py-3 border border-secondary rounded-lg bg-surface text-deep font-body text-sm placeholder:text-deep/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
//               />
//             </div>

//             {/* Message Textarea */}
//             <div className="flex flex-col gap-1.5">
//               <label
//                 htmlFor="message"
//                 className="font-body text-sm font-medium text-deep/80"
//               >
//                 Message <span className="text-accent">*</span>
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 placeholder="Your Message..."
//                 required
//                 className="w-full px-4 py-3 border border-secondary rounded-lg bg-surface text-deep font-body text-sm placeholder:text-deep/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
//               />
//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="btn-primary mt-2 self-start">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

// src/sections/Contact.jsx
// Purpose: Contact section with form + social links

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";

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

function Contact() {
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
              onSubmit={(e) => e.preventDefault()}
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
                  className="w-full px-4 py-3 border border-secondary rounded-lg bg-surface text-deep font-body text-sm placeholder:text-deep/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
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
                  className="w-full px-4 py-3 border border-secondary rounded-lg bg-surface text-deep font-body text-sm placeholder:text-deep/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
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
                  className="w-full px-4 py-3 border border-secondary rounded-lg bg-surface text-deep font-body text-sm placeholder:text-deep/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary mt-2 self-start">
                Send Message
              </button>
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

export default Contact;
