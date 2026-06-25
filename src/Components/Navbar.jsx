// import { useState, useEffect } from "react";
// import { FileText, X, Menu } from "lucide-react";

// export const navLinks = [
//   { label: "About", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Projects", href: "#projects" },
//   { label: "Experience", href: "#experience" },
//   { label: "Contact", href: "#contact" },
// ];

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("#skills");
//   const [scrolled, setScrolled] = useState(false);

//   // ============================================
//   // 1. HANDLE SCROLL EFFECT (Navbar background)
//   // ============================================
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ============================================
//   // 2. HANDLE ACTIVE STATE (Intersection Observer)
//   // ============================================
//   useEffect(() => {
//     // Get all section IDs from navLinks
//     const ids = navLinks.map((link) => link.href.slice(1));

//     // Create Intersection Observer
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           // If section is visible in viewport
//           if (entry.isIntersecting) {
//             const sectionId = `#${entry.target.id}`;
//             setActive(sectionId);
//             console.log("📍 Active section:", sectionId);
//           }
//         });
//       },
//       {
//         rootMargin: "-80px 0px -50% 0px",
//         // Top offset = navbar height (80px), bottom = halfway down screen,
//         threshold: 0.1,
//       },
//     );

//     // Start observing each section
//     ids.forEach((id) => {
//       const element = document.getElementById(id);
//       if (element) {
//         observer.observe(element);
//         console.log(`👁️ Watching: ${id}`);
//       } else {
//         console.warn(`❌ Element not found: ${id}`);
//       }
//     });

//     // Cleanup observer
//     return () => {
//       observer.disconnect();
//       console.log("🧹 Observer cleaned up");
//     };
//   }, []); // Empty dependency array = run once

//   // ============================================
//   // 3. HANDLE CLICK NAVIGATION
//   // ============================================
//   const handleNavClick = (href) => {
//     // Update active state
//     setActive(href);

//     // Find the element
//     const element = document.querySelector(href);

//     // Smooth scroll to element
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }

//     // Close mobile menu (if open)
//     setOpen(false);

//     console.log(`🖱️ Clicked: ${href}`);
//   };

//   // ============================================
//   // 4. DEBUG: Log active changes
//   // ============================================
//   useEffect(() => {
//     console.log("🔄 Active changed to:", active);
//   }, [active]);

//   return (
//     <header
//       id="top"
//       className={`fixed top-0 inset-x-0 z-50 glass border-b border-secondary transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
//       // style={{ boxShadow: "0 4px 8px rgba(13, 58, 47, 0.06)" }}
//     >
//       <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-around">
//         <a href="#top" className="flex items-center group gap-0.5 fontWeight">
//           <span className="font-heading text-xl text-deep tracking-wide group-hover:text-primary transition-colors">
//             Ayush
//           </span>
//           <span className="text-accent text-2xl leading-none">`</span>
//           <span className="font-heading text-xl text-deep tracking-wide group-hover:text-primary transition-colors">
//             Pakar
//           </span>
//         </a>

//         <ul className="hidden md:flex gap-8 items-center">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className={`nav-link text-sm font-medium ${active === link.href ? `nav-link-active pb-1` : `py-1`}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(link.href);
//                 }}
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="hidden md:block text-deep p-2 -mr-2">
//           <a
//             href="#contact"
//             className="btn-primary text-sm px-5 py-2.5 flex items-center gap-1"
//           >
//             <FileText size={16} />
//             Resume
//           </a>
//         </div>

//         <button
//           className="md:hidden"
//           onClick={() => setOpen((v) => !v)}
//           aria-label={open ? "Close menu" : "Open menu"}
//           aria-expanded={open}
//         >
//           {open ? <X /> : <Menu />}
//         </button>
//       </nav>

//       {open && (
//         <div className="md:hidden glass border-t-2 border-secondary">
//           <ul className="px-5 py-4 flex flex-col gap-1">
//             {navLinks.map((links) => (
//               <li key={links.href}>
//                 <a
//                   href={links.href}
//                   className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
//                     active === links.href
//                       ? "text-primary bg-primary/10"
//                       : "text-deep/70 hover:text-primary hover:bg-canvas"
//                   }`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(links.href);
//                   }}
//                 >
//                   {links.label}
//                 </a>
//               </li>
//             ))}
//             <li className="pt-2">
//               <a className="btn-primary py-2 w-full flex justify-center items-center gap-0.5 text-sm">
//                 {" "}
//                 <FileText size={16} />
//                 Resume
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;

// src/components/Navbar.jsx
// Purpose: Sticky navigation with scroll spy, mobile menu, and smooth scroll
// Concepts: useState, useEffect, IntersectionObserver, event listeners

import { useState, useEffect, useCallback } from "react";
import { FileText, X, Menu } from "lucide-react";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const [scrolled, setScrolled] = useState(false);

  // ============================================
  // 1. HANDLE SCROLL EFFECT
  // ============================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============================================
  // 2. HANDLE ACTIVE STATE (Intersection Observer)
  // ============================================
  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0.1,
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // ============================================
  // 3. HANDLE CLICK NAVIGATION
  // ============================================
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setActive(href);

    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Navbar height
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }

    setOpen(false);
  }, []);

  // ============================================
  // 4. CLOSE MOBILE MENU ON RESIZE
  // ============================================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ============================================
  // 5. PREVENT BODY SCROLL WHEN MOBILE MENU OPEN
  // ============================================
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      id="top"
      className={`fixed top-0 inset-x-0 z-50 glass border-b border-secondary transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="bg-canvas/90 max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center group gap-0.5"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="font-heading text-xl text-deep tracking-wide group-hover:text-primary transition-colors">
            Ayush
          </span>
          <span className="text-accent text-2xl leading-none">`</span>
          <span className="font-heading text-xl text-deep tracking-wide group-hover:text-primary transition-colors">
            Pakar
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link text-sm ${
                  active === link.href ? "nav-link-active" : ""
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <a
            href="https://drive.usercontent.google.com/download?id=1yhTSvptaICgEpafDG5nTs29qlYtEVedQ&export=download&authuser=0&confirm=t&uuid=0fc4bd77-19f6-431e-845b-67ce6cb93e97&at=ABswASaKmS_ZsA3WBZ_0lg1Ro-fS:1782394457470"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-5 py-2.5 flex items-center gap-1.5"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-deep hover:text-primary transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass border-t border-secondary animate-fade-in">
          <ul className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    active === link.href
                      ? "text-primary bg-primary/10"
                      : "text-deep/70 hover:text-primary hover:bg-canvas"
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://drive.usercontent.google.com/download?id=1yhTSvptaICgEpafDG5nTs29qlYtEVedQ&export=download&authuser=0&confirm=t&uuid=0fc4bd77-19f6-431e-845b-67ce6cb93e97&at=ABswASaKmS_ZsA3WBZ_0lg1Ro-fS:1782394457470"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5 w-full flex justify-center items-center gap-1.5 text-sm"
              >
                <FileText size={16} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
