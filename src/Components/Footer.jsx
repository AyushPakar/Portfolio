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

// function Footer() {
//   return (
//     <footer className="h-70 max-h-9/12 w-full overflow-hidden bg-deep">
//       <div className="flex flex-col gap-2 max-w-4xl mx-auto px-5 my-10">
//         <div className="mb-6 flex justify-between">
//           <div className="group p-2">
//             <h1 className="font-heading text-3xl text-white/80 group-hover:brightness-200">
//               Ayush <span className="text-accent">`</span> Pakar
//             </h1>
//             <p className="leading-relaxed line-clamp-2 text-sm font-body text-white/60 mt-3 group-hover:brightness-200">
//               Building considered, nature-inspired software
//               <br />
//               from the Pacific Northwest.
//             </p>
//           </div>
//           <div className="p-2">
//             <h4 className="text-white/80 font-heading text-xl border-b border-white/20 max-w-24">
//               Connect
//             </h4>
//             <div className="flex gap-5 my-5 items-center">
//               {contactLinks.map((links) => {
//                 const Icon = links.icon;
//                 return (
//                   <a
//                     key={links.href}
//                     href={links.href}
//                     aria-label={links.label}
//                     target="_blank"
//                     rel="noreference noopener"
//                     className="flex items-center justify-center border border-white/80 p-1.5 rounded-md text-white/80 hover:brightness-200 transition-all duration-200 hover:text-accent hover:border-accent w-8 h-8"
//                   >
//                     <Icon size={17} />
//                   </a>
//                 );
//               })}
//             </div>
//             <p className="text-sm font-body text-white/60 hover:text-accent transition-all duration-200">
//               ayushpakar108@gmail.com
//             </p>
//           </div>
//         </div>
//         <div className="border-t text-primary flex justify-between items-center py-4">
//           <div className="text-sm font-body text-white/40 leading-relaxed">
//             © 2026 Ayush. Crafted with care.
//           </div>
//           <div className="text-sm font-body text-white/40 leading-relaxed">
//             React · Vite · Tailwind — Zibai theme
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

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

function Footer() {
  return (
    <footer className="w-full bg-deep">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
          {/* Logo + Description */}
          <div className="group">
            <h2 className="font-heading text-2xl text-white/80 group-hover:text-white transition-colors">
              Ayush <span className="text-accent">`</span> Pakar
            </h2>
            <p className="text-sm font-body text-white/50 mt-2 group-hover:text-white/70 transition-colors max-w-xs">
              Building considered, nature-inspired software from the Pacific
              Northwest.
            </p>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-white/80 font-heading text-lg border-b border-white/20 pb-1 mb-4">
              Connect
            </h4>
            <div className="flex gap-4 items-center">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center border border-white/30 p-2 rounded-md text-white/60 hover:text-accent hover:border-accent transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="text-sm font-body text-white/40 mt-3 hover:text-accent transition-colors">
              ayushpakar108@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-sm font-body text-white/30">
            © 2026 Ayush. Crafted with care.
          </p>
          <p className="text-sm font-body text-white/30">
            React · Vite · Tailwind — Zibai theme
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
