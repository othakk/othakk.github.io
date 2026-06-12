import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiFlask,
  SiDotnet,
  SiPostgresql,
  SiGit,
  SiJira,
  SiGithub,
} from "react-icons/si";
import { FaJava, FaHtml5, FaLinkedin, FaAws } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { Mail } from "lucide-react";

// =================================================================================
// 1. TYPES & INTERFACES
// =================================================================================

export interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  description: string;
  logo: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  logo: string;
}

export interface ProjectItem {
  name: string;
  tagline: string;
  url: string;
  repo?: string;
  image: string;
}

// =================================================================================
// 2. PERSONAL DETAILS & LINKS
// =================================================================================

export const BANNER_IMAGE = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80";

export const RESUME_URL = "/resume.pdf";
export const DISCORD_LINK = "";
export const CAL_URL = "";

// =================================================================================
// 3. SOCIAL MEDIA
// =================================================================================

export const SOCIALS = [
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/omthak",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    platform: "github",
    url: "https://github.com/othakk",
    icon: SiGithub,
    color: "#ffffff",
  },
  {
    platform: "email",
    url: "mailto:othakkar11@gmail.com",
    icon: Mail,
    color: "#EA4335",
  },
];

// =================================================================================
// 4. TECH STACK
// =================================================================================

export const STACK = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
  { name: "C#", icon: TbBrandCSharp, color: "#239120" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "SQL/PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26" },
  { name: "React/React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
  { name: ".NET", icon: SiDotnet, color: "#512BD4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
];

// =================================================================================
// 5. EXPERIENCE
// =================================================================================

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Homey",
    role: "Founder / CEO",
    date: "Jan 2026 - Present",
    description:
      "Built a React Native, Flask, and PostgreSQL marketplace enabling real-time listing discovery across 250+ universities, sustaining 99% geocoding accuracy on 300+ listings via an async ETL engine with JWT-authed REST APIs, and prioritized expansion into 15 campuses by ranking 500 markets on live demand.",
    logo: "/images/companies/homey.svg",
  },
  {
    company: "Polaris Inc.",
    role: "Software Engineering Intern, WMS Team",
    date: "Jun 2025 - Aug 2025",
    description:
      "Built an AI-powered natural-language analytics tool with .NET REST APIs and PostgreSQL that eliminated manual SQL for 30+ operations staff, cut AI query failures 40% with LLM-SQL validation workflows, and reduced data access time from hours to under a minute via secure execution pipelines.",
    logo: "/images/companies/polaris.svg",
  },
  {
    company: "Polaris Inc.",
    role: "Software Engineering Intern, Ecom Shop Team",
    date: "May 2024 - Aug 2024",
    description:
      "Refactored C# email validation to eliminate edge-case failures, raised unit test coverage 45%, expanded reach to 1000+ global customers via multilingual frontend localization, ran A/B tests to lift conversion, and cut error-log noise 60% with custom debugging utilities.",
    logo: "/images/companies/polaris.svg",
  },
];

// =================================================================================
// 6. EDUCATION
// =================================================================================

export const EDUCATION: EducationItem[] = [
  {
    institution: "University of Wisconsin-Madison",
    degree: "B.S. Computer Science, Minor in Entrepreneurship",
    period: "May 2026",
    logo: "/images/education/uw.svg",
  },
];

// =================================================================================
// 7. PROJECTS
// =================================================================================

export const PROJECTS: ProjectItem[] = [
  {
    name: "Qualcomm Capstone",
    tagline:
      "AI public-speaking coach for Snapdragon PCs delivering real-time feedback via concurrent on-device pose, gaze, and facial-landmark inference, with a backend-agnostic layer auto-selecting QAIRT, ONNX Runtime, or LiteRT per device.",
    url: "",
    repo: "",
    image: "/images/projects/qualcomm.svg",
  },
  {
    name: "Project Irona",
    tagline:
      "Low-latency voice automation system integrating speech-to-text, LLMs, and IoT APIs with NLP for multi-step task recognition.",
    url: "",
    repo: "",
    image: "/images/projects/irona.svg",
  },
  {
    name: "UW Path Finder",
    tagline:
      "Campus navigation app using Dijkstra's algorithm to find shortest walking paths between UW buildings with estimated times.",
    url: "",
    repo: "",
    image: "/images/projects/pathfinder.svg",
  },
];
