import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiRedux,
  SiFigma,
  SiVite,
  SiPostman,
  SiAntdesign,
  SiSemanticuireact,
  SiExpo,
  SiStorybook,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiGithub, FiLinkedin, FiMail, FiMonitor } from "react-icons/fi";

// ─── Types ────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  about: string;
  resumeUrl: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  category: "Languages" | "Frameworks" | "Mobile" | "Tools" | "Other";
  proficiency: "expert" | "advanced" | "intermediate";
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  type: "personal" | "professional";
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
}

// ─── Data ─────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Rahul Kumar Eshwar",
  role: "Software Engineer II",
  tagline: "Building delightful user experiences",
  email: "rahuleshwar98@gmail.com",
  about:
    "Frontend Developer with 4+ years of experience building fast, responsive web and mobile apps using React.js, Next.js, and TypeScript. I've led frontend teams, mentored developers, and shipped 5+ live products used by real customers. I write clean, well-structured code and make strong technical decisions that keep projects on track. I also use AI tools like GitHub Copilot and Claude to work faster and smarter. Always learning, currently exploring full-stack and generative AI.",
  resumeUrl: "/rendercv.pdf",
};

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", icon: SiJavascript, category: "Languages", proficiency: "expert" },
  { name: "TypeScript", icon: SiTypescript, category: "Languages", proficiency: "expert" },
  { name: "HTML5", icon: SiHtml5, category: "Languages", proficiency: "expert" },
  { name: "CSS3", icon: SiCss, category: "Languages", proficiency: "expert" },
  // Frameworks & Libraries
  { name: "React.js", icon: SiReact, category: "Frameworks", proficiency: "expert" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frameworks", proficiency: "expert" },
  { name: "Vite", icon: SiVite, category: "Frameworks", proficiency: "expert" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frameworks", proficiency: "expert" },
  { name: "Ant Design", icon: SiAntdesign, category: "Frameworks", proficiency: "intermediate" },
  { name: "Semantic UI", icon: SiSemanticuireact, category: "Frameworks", proficiency: "intermediate" },
  { name: "Redux", icon: SiRedux, category: "Frameworks", proficiency: "advanced" },
  { name: "Storybook", icon: SiStorybook, category: "Frameworks", proficiency: "advanced" },
  // Mobile
  { name: "React Native", icon: SiReact, category: "Mobile", proficiency: "advanced" },
  { name: "Expo", icon: SiExpo, category: "Mobile", proficiency: "intermediate" },
  // Tools
  { name: "Git", icon: SiGit, category: "Tools", proficiency: "advanced" },
  { name: "VS Code", icon: VscVscode, category: "Tools", proficiency: "expert" },
  { name: "Postman", icon: SiPostman, category: "Tools", proficiency: "intermediate" },
  { name: "Figma", icon: SiFigma, category: "Tools", proficiency: "intermediate" },
  { name: "Chrome DevTools", icon: FiMonitor, category: "Tools", proficiency: "intermediate" },
];

export const experiences: Experience[] = [
  {
    company: "WML IT Solutions Pvt Ltd",
    role: "Software Engineer II",
    duration: "May 2025 — Present",
    description:
      "Promoted to SE II, continuing to lead frontend development and drive engineering excellence across the team.",
    highlights: [
      "Leading frontend architecture and development for enterprise client projects",
      "Driving code quality standards and best practices across engineering team",
      "Mentoring developers and conducting code reviews for scalable UI delivery",
    ],
  },
  {
    company: "WML IT Solutions Pvt Ltd",
    role: "Software Engineer",
    duration: "Apr 2024 — May 2025",
    description:
      "Led frontend development for multiple client projects, built a reusable component library, and optimized performance at scale.",
    highlights: [
      "Led frontend development for 5+ client projects using React.js, Next.js, and Vite, improving delivery speed by 45%",
      "Collaborated with cross-functional teams to launch scalable UI solutions, reducing development rework by 35%",
      "Mentored 4 junior developers, increasing team productivity and code quality across all sprints",
      "Engineered a UI library with 30+ reusable components, accelerating dev time by 40%",
      "Boosted page performance by 55% through optimization and Core Web Vitals tuning",
    ],
  },
  {
    company: "WML IT Solutions Pvt Ltd",
    role: "Associate Software Developer",
    duration: "May 2023 — Apr 2024",
    description:
      "Developed user-facing modules for SaaS platforms and led UI improvements on admin dashboards.",
    highlights: [
      "Developed 10+ user-facing modules using React.js and Next.js for SaaS platforms, improving usability scores by 30%",
      "Led UI improvements on dashboards, enhancing admin experience and reducing support tickets by 15%",
      "Delivered 40+ bug fixes and enhancements with 95% on-time deployment across 4 agile sprints",
    ],
  },
  {
    company: "WML IT Solutions Pvt Ltd",
    role: "Assistant Software Developer",
    duration: "Apr 2022 — May 2023",
    description:
      "Built responsive UI components, integrated REST APIs, and collaborated closely with QA for quality delivery.",
    highlights: [
      "Created 15+ responsive UI components with Semantic UI and React, reducing development time by 20%",
      "Integrated 10+ REST APIs to deliver real-time data and improve user workflows",
      "Reported and resolved 50+ UI/UX issues through close collaboration with QA and users",
    ],
  },
];

export const projects: Project[] = [
  // ── Professional Projects (no client names) ──
  {
    title: "AgriTech Multi-Tenant Platform",
    description:
      "A multi-tenant e-commerce platform serving 100+ customers with customizable themes per client. Led the frontend team as Technical Lead — built new storefront themes, managed client onboarding, and admin dashboard updates. Also architected a Storybook-driven page builder for the next-gen version, enabling dynamic storefront customization.",
    image: "/projects/agritech.png",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Storybook", "Django REST API"],
    type: "professional",
  },
  {
    title: "EdTech Learning Platform",
    description:
      "A comprehensive education platform deployed across schools in Mauritius. Built the web app, Electron desktop app, and admin dashboard as Team Lead. Features student/teacher portals, ePub & PDF readers, exam creation & grading, and role-based access control.",
    image: "/projects/edtech.png",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Django REST API"],
    type: "professional",
  },
  {
    title: "Handicrafts E-Commerce & ERP",
    description:
      "A full-scale e-commerce platform with integrated ERP dashboard for authentic handicraft products, serving customers across India. Led the frontend team — built the storefront, admin panel, and ERP dashboard with inventory and order management.",
    image: "/projects/handicrafts.png",
    techStack: ["Next.js", "Tailwind CSS", "Context API", "Django REST API"],
    type: "professional",
  },
  {
    title: "Seasonal E-Commerce Store",
    description:
      "A Singapore-based e-commerce website for seasonal fresh produce. Built both the customer-facing storefront and admin panel. Admin manages inventory and stock updates; customers browse, order, and track deliveries. Goes live seasonally.",
    image: "/projects/ecommerce.png",
    techStack: ["React.js", "Tailwind CSS", "Context API", "Django REST API"],
    type: "professional",
  },
  {
    title: "Publishing & Distribution ERP",
    description:
      "An enterprise resource planning dashboard for a state-level publishing organization. Enables admins to manage bulk print orders, track order-to-delivery pipelines, and handle both online and offline distribution channels. Streamlined procurement and fulfillment workflows.",
    image: "/projects/publishing-erp.png",
    techStack: ["React.js", "Tailwind CSS", "Context API", "Django REST API"],
    type: "professional",
  },
  {
    title: "Supply Chain Management System",
    description:
      "A government-scale supply chain and inventory management platform. Features order tracking, warehouse management, distribution logistics, and role-based admin controls. Built to handle high-volume operations across multiple distribution centers.",
    image: "/projects/supply-chain.png",
    techStack: ["React.js", "Tailwind CSS", "Context API", "Django REST API"],
    type: "professional",
  },
  // ── Personal Projects ──
  {
    title: "Portlio",
    description:
      "A lightweight SaaS platform for freelancers to create branded client portals. Clients can track project progress in real-time — no login required. Features project status tracking, an updates feed with markdown support, file sharing with signed URLs, invoice creation, and email notifications. Built with a public portal view and a private freelancer dashboard.",
    image: "/projects/portlio.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "Shadcn UI"],
    githubUrl: "https://github.com/DeveloperRahul98/portlio",
    type: "personal",
  },
  {
    title: "SarkariGuide",
    description:
      "A free tool helping Indian citizens manage government document renewals. Features document tracking with color-coded expiry status, smart reminders before expiry, city-specific step-by-step guides, and community tips.",
    image: "/projects/sarkariguide.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://sarkariguide.vercel.app",
    githubUrl: "https://github.com/DeveloperRahul98/sarkariguide",
    type: "personal",
  },
  {
    title: "Saarathi",
    description:
      "A Bhagavad Gita-powered AI wellness companion mobile app. Features AI conversations via Google Gemini grounded in scriptural verses, 71 curated verses in 3 languages, guided breathing exercises, and daily streaks.",
    image: "/projects/saarathi.png",
    techStack: ["React Native", "Expo", "Gemini API"],
    githubUrl: "https://github.com/DeveloperRahul98/saarathi",
    type: "personal",
  },
  {
    title: "CookMitra",
    description:
      "A smart cooking assistant mobile app that helps users discover recipes, plan meals, and manage ingredients. Powered by a free MealDB API for a rich recipe catalog.",
    image: "/projects/cookmitra.png",
    techStack: ["React Native", "Expo", "MealDB API"],
    githubUrl: "https://github.com/DeveloperRahul98/cookmitra",
    type: "personal",
  },
  {
    title: "Netflix UI Clone",
    description:
      "A pixel-perfect Netflix clone featuring categorized movie browsing — Netflix Originals, Trending, Top Rated, and genre-based collections. Fetches real-time movie data and posters from the TMDB API with a responsive, streaming-platform-style layout.",
    image: "/projects/netflix-clone.png",
    techStack: ["React.js", "CSS", "TMDB API"],
    liveUrl: "https://rke-moviesproject.netlify.app",
    type: "personal",
  },
  {
    title: "Google Search Clone",
    description:
      "A functional Google Search interface replica with real-time search results. Features the iconic Google homepage layout, search suggestions, and results page — built to demonstrate UI cloning and API integration skills.",
    image: "/projects/google-clone.png",
    techStack: ["React.js", "CSS", "Google API"],
    liveUrl: "https://rke-googleproject.netlify.app",
    type: "personal",
  },
  {
    title: "3D iPhone Showcase",
    description:
      "An interactive 3D product showcase featuring smooth CSS animations and modal transitions. Demonstrates advanced CSS 3D transforms, perspective effects, and responsive design for an immersive product display experience.",
    image: "/projects/3d-iphone.png",
    techStack: ["React.js", "Three.js", "CSS 3D Transforms"],
    liveUrl: "https://rke-3dmodalproject.netlify.app",
    type: "personal",
  },
  {
    title: "Frontend Auditor",
    description:
      "An AI-powered website auditing tool. Enter any URL and get instant analysis for performance, accessibility (WCAG 2.2), and code architecture. Features Lighthouse scoring, Core Web Vitals dashboard, axe-core accessibility checks, and AI-generated fix suggestions with a human-in-the-loop review flow.",
    image: "/projects/frontend-auditor.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Zod"],
    liveUrl: "https://frontend-auditor.vercel.app",
    githubUrl: "https://github.com/DeveloperRahul98/frontend-auditor",
    type: "personal",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Prompt Engineering with GitHub Copilot",
    issuer: "Simplilearn",
    date: "Apr 2025",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Oct 2023",
  },
  {
    title: "React.js",
    issuer: "Udemy",
    date: "Aug 2023",
  },
  {
    title: "Young Professional",
    issuer: "Tata Consultancy Services",
    date: "Dec 2021",
  },
  {
    title: "IAB Digital Marketing Certification",
    issuer: "Google",
    date: "Dec 2021",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/DeveloperRahul98",
    icon: FiGithub,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/rahul-kumar-eshwar/",
    icon: FiLinkedin,
  },
  {
    platform: "Email",
    url: "mailto:rahuleshwar98@gmail.com",
    icon: FiMail,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Hiring", href: "#hiring" },
  { label: "Contact", href: "#contact" },
];
