// import {
//   GraduationCap,
//   MapPin,
//   Calendar,
//   Gamepad2,
//   Clapperboard,
//   BookOpen,
// } from "lucide-react";

// function About() {
//   return (
//     <section className=" w-full overflow-hidden pt-8 pb-8 md:pt-8 md:pb-8">
//       <h1 className="text-center mb-8 text-3xl s:text-xl md:2xl">About</h1>
//       <div className="flex flex-col sm:flex-row mx-auto max-w-fit">
//         <div className="max-w-lg">
//           <div>
//             <h4 className="font-heading mb-3 text-xl flex gap-1 text-deep hover:brightness-100">
//               <GraduationCap /> Education
//             </h4>
//             <span className="font-heading text-lg flex gap-1 text-black/90 hover:brightness-100">
//               B.Tech in Computer Science & Engineering (Artificial Intelligence)
//             </span>
//             <p className="font-body mb-1 text-sm text-deep hover:brightness-100">
//               Mandsaur University Mandsaur, <br />
//             </p>
//             <p className="font-body flex text-sm gap-1 text-center text-deep hover:brightness-100">
//               <MapPin size={16} /> Madhya Pradesh{" "}
//               <Calendar size={16} className="ml-2" /> Expected Graduation: 2027
//             </p>
//             {/* <span className="font-heading text-mg font-medium">
//               CGPA: {8.25}/10{" "}
//               <span
//                 className="font-body w-56 text-sm text-deep h-full rounded-full transition-all duration-1000"
//                 style={{
//                   width: `{82.5}%`,
//                   background: "linear-gradient(90deg, #40E0D0, #E5B842)",
//                   boxShadow: "0 0 8px rgba(64,224,208,0.4)",
//                 }}
//               >
//                 {(8.25 * 100) / 10}%
//               </span>
//             </span> */}
//           </div>
//           <div>
//             <span className="font-heading text-lg flex gap-1 text-black/90 hover:brightness-100">
//               Senior Secondary (12th Grade)
//             </span>
//             <p className="font-body mb-1 text-sm text-deep hover:brightness-100">
//               Oxford Public Higher Secondary School Jaora, Madhya Pradesh
//             </p>
//             <p className="font-body flex text-sm gap-1 text-center text-deep hover:brightness-100">
//               <MapPin size={16} /> Jaora, Madhya Prades{" "}
//               <Calendar size={16} className="ml-2" /> Year Of Completion: 2023
//             </p>
//             {/* <span className="font-heading text-mg font-medium">
//               CGPA: {8.25}/10{" "}
//               <span
//                 className="font-body w-56 text-sm text-deep h-full rounded-full transition-all duration-1000"
//                 style={{
//                   width: `{82.5}%`,
//                   background: "linear-gradient(90deg, #40E0D0, #E5B842)",
//                   boxShadow: "0 0 8px rgba(64,224,208,0.4)",
//                 }}
//               >
//                 {(8.25 * 100) / 10}%
//               </span>
//             </span> */}
//           </div>
//         </div>
//         <div>
//           <h3
//             className="font-heading text-2xl text-secondary text-center mb-10 tracking-wide"
//             style={{ textShadow: "0 0 10px rgba(64,224,208,0.3)" }}
//           >
//             Hobbies
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//             <div
//               className="group relative bg-primary/5 border border-primary/20 p-6 text-center transition-all duration-200 hover:border-glow"
//               style={{
//                 clipPath:
//                   "polygon(6px 0%, calc(100% - 6px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px)",
//                 animationDelay: `100ms`,
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.boxShadow =
//                   "0 0 25px rgba(64,224,208,0.25), inset 0 0 15px rgba(64,224,208,0.03)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               {/* Top-left glow dot */}
//               <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-glow opacity-0 group-hover:opacity-100 transition-opacity" />

//               <h4 className="font-heading text-surface/90 text-lg mb-1 group-hover:text-glow transition-colors">
//                 Gaming
//               </h4>
//               <p className=" font-body text-surface/40 text-sm">Gaminggabfiu</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div></div>
//     </section>
//   );
// }

// export default About;

// src/sections/About.jsx
// Purpose: About section with Education + Hobbies — Zibai theme
// Concepts: Grid layout, progress bars, card hover effects, Lucide icons

import {
  GraduationCap,
  MapPin,
  Calendar,
  Gamepad2,
  Clapperboard,
  BookOpen,
} from "lucide-react";

const education = [
  {
    id: 1,
    degree:
      "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
    school: "Mandsaur University",
    location: "Mandsaur, Madhya Pradesh",
    year: "Expected Graduation: 2027",
    score: "CGPA: 8.25/10",
    percentage: 82.5,
  },
  {
    id: 2,
    degree: "Senior Secondary (12th Grade)",
    school: "Oxford Public Higher Secondary School",
    location: "Jaora, Madhya Pradesh",
    year: "Year of Completion: 2023",
    score: "Percentage: 89.02%",
    percentage: 89.02,
  },
];

const hobbies = [
  {
    id: 1,
    name: "Gaming",
    desc: "Online story-type adventures",
    icon: Gamepad2,
  },
  {
    id: 2,
    name: "Video Editing",
    desc: "Creative cuts & montages",
    icon: Clapperboard,
  },
  {
    id: 3,
    name: "Light Novels",
    desc: "Immersive fictional worlds",
    icon: BookOpen,
  },
];

export default function About() {
  return (
    <section id="about" className="w-full bg-surface py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Title */}
        <h2 className="section-title mb-12 md:mb-16">About</h2>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* ================================ */}
          {/* LEFT: Education                  */}
          {/* ================================ */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={24} className="text-primary" />
              <h3 className="font-heading text-2xl text-deep">Education</h3>
            </div>

            {education.map((edu) => (
              <div key={edu.id} className="card group">
                {/* Degree */}
                <h4 className="font-heading text-base md:text-lg text-deep leading-snug mb-1 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h4>

                {/* School */}
                <p className="font-body text-deep/60 text-sm mb-2">
                  {edu.school}
                </p>

                {/* Meta: Location + Year */}
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-body text-deep/40 mb-4">
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={13} />
                    {edu.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={13} />
                    {edu.year}
                  </span>
                </div>

                {/* Score + Progress Bar */}
                <div className="flex items-center gap-3">
                  <span className="text-primary font-heading text-sm font-semibold whitespace-nowrap min-w-[100px]">
                    {edu.score}
                  </span>
                  <div className="flex-1 h-2 bg-secondary/30 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${edu.percentage}%`,
                        background: `linear-gradient(90deg, var(--color-primary), var(--color-accent))`,
                      }}
                    />
                  </div>
                  <span className="text-deep/40 font-body text-xs min-w-[36px] text-right">
                    {edu.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ================================ */}
          {/* RIGHT: Hobbies                   */}
          {/* ================================ */}
          <div className="lg:max-w-sm w-full">
            <div className="flex items-center gap-2 mb-6">
              <Gamepad2 size={24} className="text-accent" />
              <h3 className="font-heading text-2xl text-deep">Hobbies</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {hobbies.map((hobby) => {
                const Icon = hobby.icon;
                return (
                  <div
                    key={hobby.id}
                    className="card text-center p-6 group cursor-default"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon
                        size={26}
                        className="text-primary group-hover:text-accent transition-colors"
                      />
                    </div>

                    {/* Name */}
                    <h4 className="font-heading text-deep text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                      {hobby.name}
                    </h4>

                    {/* Description */}
                    <p className="font-body text-deep/50 text-sm leading-relaxed">
                      {hobby.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
