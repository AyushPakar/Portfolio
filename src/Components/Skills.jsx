// import { Section } from "lucide-react";
// import { Code2, Palette, Server, GitBranch } from "lucide-react";
// import { useRef, useState, useEffect } from "react";

// function skillBar({ name, level, animate }) {
//   return (
//     <div>
//       <div className="mb-2 flex items-center justify-between">
//         <span className="text-deep font-body text-sm font-medium">{name}</span>
//         <span className="text-deep/50 font-alt text-xs">{level}%</span>
//       </div>

//       <div className="h-2 overflow-hidden rounded-full bg-secondary/30">
//         <div
//           className="bg-hero-gradient h-full rounded-full transition-all duration-1000 ease-out"
//           style={{ width: animate ? `${level}%` : "0%" }}
//         />
//       </div>
//     </div>
//   );
// }

// function skillsOP() {
//   const [animate, setAnimate] = useState(false);
//   const sectionRef = useRef < HTMLElement > null;

//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 },
//     );

//     observer.observe(el);

//     return () => observer.disconnect();
//   }, []);
// }

// const skillCategories = [
//   {
//     title: "Languages",
//     icon: Code2,
//     skills: [
//       { name: "TypeScript", level: 95 },
//       { name: "Python", level: 88 },
//       { name: "Go", level: 74 },
//       { name: "SQL", level: 86 },
//     ],
//   },
//   {
//     title: "Frontend",
//     icon: Palette,
//     skills: [
//       { name: "React", level: 96 },
//       { name: "Tailwind CSS", level: 93 },
//       { name: "Vite", level: 90 },
//       { name: "Framer Motion", level: 78 },
//     ],
//   },
//   {
//     title: "Backend",
//     icon: Server,
//     skills: [
//       { name: "Node.js", level: 92 },
//       { name: "PostgreSQL", level: 84 },
//       { name: "Edge Functions", level: 80 },
//       { name: "Redis", level: 70 },
//     ],
//   },
//   {
//     title: "Tooling",
//     icon: GitBranch,
//     skills: [
//       { name: "Docker", level: 82 },
//       { name: "CI/CD", level: 85 },
//       { name: "Figma", level: 79 },
//       { name: "Testing", level: 88 },
//     ],
//   },
// ];

// function Skills() {
//   return (
//     <section className="overflow-hidden bg-canvas h-dvh max-h-screen pt-32 pb-24 md:pt-56 md:pb-32">
//       <div className="relative max-w-6xl mx-auto px-5 sm:px-8 bg-red-300">
//         <h4 className="font-sans text-md text-primary lineout mb-3">
//           CAPABILITIES
//         </h4>
//         <h1 className="font-heading text-primary text-4xl font-bold">
//           Skills & Tools
//         </h1>

//         <p className="font-body text-md text-primary mt-3">
//           The languages, frameworks, and tools I reach for most often.
//         </p>
//       </div>
//       <div className="grid sm:grid-cols-2 gap-8">
//         {skillCategories.map((category) => {
//           const Icon = category.icon;
//           return (
//             <div key={category.title} className="reveal card p-7">
//               <div className="flex items-center gap-3 mb-6">
//                 <span className="w-11 h-11 rounded-xl gradient-card flex items-center justify-center shadow-small">
//                   <Icon size={20} className="text-white" />
//                 </span>
//                 <h3 className="font-heading text-xl text-primary">
//                   {category.title}
//                 </h3>
//               </div>
//               <div className="space-y-5">
//                 {category.skillsOP.map((skill) => (
//                   <skillBar
//                     key={skill.name}
//                     name={skill.name}
//                     level={skill.level}
//                     animate={animate}
//                   />
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Skills;

// src/sections/Skills.jsx
// Purpose: Skills section with animated progress bars
// Concepts: IntersectionObserver triggers animation on scroll, reusable SkillBar

import { Code2, Palette, Server, GitBranch } from "lucide-react";
import { useRef, useState, useEffect } from "react";

function SkillBar({ name, level, animate }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-deep font-body text-sm font-medium">{name}</span>
        <span className="text-deep/50 font-alt text-xs">{level}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-secondary/30">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, var(--color-primary), var(--color-accent))`,
          }}
        />
      </div>
    </div>
  );
}

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "C++", level: 95 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 74 },
      { name: "SQL", level: 86 },
    ],
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React", level: 96 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Vite", level: 90 },
      { name: "Framer Motion", level: 78 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 92 },
      { name: "MongoDB", level: 84 },
      { name: "Edge Functions", level: 80 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Tooling",
    icon: GitBranch,
    skills: [
      { name: "Docker", level: 82 },
      { name: "CI/CD", level: 85 },
      { name: "Git/GitHub", level: 79 },
      { name: "Postman", level: 88 },
    ],
  },
];

function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="overflow-hidden bg-canvas py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-heading text-sm uppercase tracking-widest text-primary mb-2">
            Capabilities
          </p>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <p className="font-body text-deep/60 mt-3 max-w-lg mx-auto">
            The languages, frameworks, and tools I reach for most often.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div key={category.title} className="card p-7">
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-surface shadow-sm">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-heading text-xl text-deep">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      animate={animate}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
