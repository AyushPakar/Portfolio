import {
  Code2,
  Palette,
  Server,
  GitBranch,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";

// Import brand icons from react-icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Arden Whitlock",
  role: "Full-Stack Developer & UI Craftsman",
  blurb:
    "I build thoughtful, performant web applications where clean architecture meets considered design. Six years turning complex problems into calm, usable interfaces.",
  email: "hello@ardenwhitlock.dev",
};

export const stats = [
  { value: "6+", label: "Years engineering" },
  { value: "40+", label: "Projects shipped" },
  { value: "18", label: "Happy clients" },
  { value: "99", label: "Lighthouse avg" },
];

export const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "Python", level: 88 },
      { name: "Go", level: 74 },
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
      { name: "PostgreSQL", level: 84 },
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
      { name: "Figma", level: 79 },
      { name: "Testing", level: 88 },
    ],
  },
];

export const projects = [
  {
    title: "Verdant Ledger",
    description:
      "A carbon-accounting platform for small businesses. Track emissions, generate auditable reports, and offset through verified partners.",
    tags: ["React", "TypeScript", "Supabase", "D3"],
    category: "Web",
    demoUrl: "#projects",
    codeUrl: "#projects",
  },
  {
    title: "Meadow Notes",
    description:
      "A local-first markdown editor with end-to-end encryption and offline sync. Designed for writers who want clarity, not clutter.",
    tags: ["React", "IndexedDB", "CRDT", "Vite"],
    category: "Open Source",
    demoUrl: "#projects",
    codeUrl: "#projects",
  },
  {
    title: "Fern Field Guide",
    description:
      "An iOS app for identifying native plants via on-device ML. Works fully offline in the backcountry.",
    tags: ["React Native", "CoreML", "Swift"],
    category: "Mobile",
    demoUrl: "#projects",
    codeUrl: "#projects",
  },
  {
    title: "Canopy Dashboard",
    description:
      "A real-time analytics surface for forestry sensors. Sub-second updates across thousands of devices with WebSocket fan-out.",
    tags: ["Go", "WebSocket", "React", "Postgres"],
    category: "Web",
    demoUrl: "#projects",
    codeUrl: "#projects",
  },
  {
    title: "Loom UI Kit",
    description:
      "An open-source component library built on Tailwind with 60+ accessible primitives and full keyboard navigation.",
    tags: ["React", "Tailwind", "Radix", "Storybook"],
    category: "Open Source",
    demoUrl: "#projects",
    codeUrl: "#projects",
  },
  {
    title: "Grove Tracker",
    description:
      "A habit-tracker companion app with adaptive reminders and a calm, gesture-driven interface.",
    tags: ["React Native", "Expo", "SQLite"],
    category: "Mobile",
    demoUrl: "#projects",
    codeUrl: "#projects",
  },
];

export const experiences = [
  {
    type: "work",
    date: "2022 — Present",
    role: "Senior Frontend Engineer",
    org: "Willow & Oak Studio",
    description:
      "Lead the web practice building design-systems and data-driven applications for climate-tech clients. Mentor a team of four engineers.",
    icon: Briefcase,
  },
  {
    type: "work",
    date: "2019 — 2022",
    role: "Full-Stack Developer",
    org: "Bramble Labs",
    description:
      "Built and maintained a multi-tenant SaaS platform from prototype to 30k MAU. Owned the React frontend and Node/Postgres backend.",
    icon: Briefcase,
  },
  {
    type: "education",
    date: "2017 — 2019",
    role: "M.S. Human-Computer Interaction",
    org: "University of Cascadia",
    description:
      "Thesis on accessible data visualization for ambient environmental sensors. Published two papers at CHI.",
    icon: GraduationCap,
  },
  {
    type: "education",
    date: "2013 — 2017",
    role: "B.S. Computer Science",
    org: "Northwind College",
    description:
      "Graduated with honors. Specialized in distributed systems and natural-language processing.",
    icon: GraduationCap,
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "Email", href: "mailto:hello@ardenwhitlock.dev", icon: Mail },
];

export const aboutKeywords = [
  "accessibility",
  "performance budgets",
  "calm interfaces",
  "system thinking",
];

export const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind",
  "Supabase",
  "Vite",
  "Go",
];
