export interface TeamMember {
  id: number;
  name: string;
  role: string;
  category: "Leadership" | "Development" | "Design" | "Marketing" | "Events";
  bio: string;
  avatar: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  color: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aryan Sharma",
    role: "Club President",
    category: "Leadership",
    bio: "Leading CBNCC with a vision to build the next generation of tech innovators.",
    avatar: "AS",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    color: "#4285F4",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Vice President",
    category: "Leadership",
    bio: "Driving community engagement and fostering collaborative learning.",
    avatar: "PV",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    color: "#EA4335",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Tech Lead",
    category: "Development",
    bio: "Full-stack developer passionate about open-source and cloud technologies.",
    avatar: "RG",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    color: "#34A853",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "UI/UX Lead",
    category: "Design",
    bio: "Crafting delightful digital experiences with a user-first approach.",
    avatar: "SP",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    color: "#FBBC05",
  },
  {
    id: 5,
    name: "Karan Mehta",
    role: "Events Head",
    category: "Events",
    bio: "Orchestrating hackathons, workshops, and study jams that inspire.",
    avatar: "KM",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    color: "#4285F4",
  },
  {
    id: 6,
    name: "Anjali Singh",
    role: "Marketing Lead",
    category: "Marketing",
    bio: "Amplifying CBNCC's story through creative content and outreach.",
    avatar: "AS",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    color: "#EA4335",
  },
  {
    id: 7,
    name: "Dev Kapoor",
    role: "Backend Developer",
    category: "Development",
    bio: "Building robust APIs and scalable systems to power our projects.",
    avatar: "DK",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    color: "#34A853",
  },
  {
    id: 8,
    name: "Nisha Reddy",
    role: "Frontend Developer",
    category: "Development",
    bio: "Turning designs into pixel-perfect, accessible web experiences.",
    avatar: "NR",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    color: "#FBBC05",
  },
];
