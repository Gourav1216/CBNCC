export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  status: "upcoming" | "past";
  image: string;
  registrationUrl?: string;
  attendees?: number;
  color: string;
  tag: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Cloud Study Jam 2025",
    description:
      "Hands-on workshop exploring Google Cloud fundamentals — from compute to machine learning. Build real projects and get certified.",
    date: "2025-06-15",
    time: "10:00 AM",
    location: "CBNCC Lab, Block C",
    category: "Workshop",
    status: "upcoming",
    image: "",
    registrationUrl: "#",
    color: "#4285F4",
    tag: "Cloud",
  },
  {
    id: 2,
    title: "HackNite 3.0",
    description:
      "48-hour hackathon challenging you to build innovative solutions. Prizes worth ₹1,00,000+ and mentorship from industry experts.",
    date: "2025-07-20",
    time: "9:00 AM",
    location: "Main Auditorium",
    category: "Hackathon",
    status: "upcoming",
    image: "",
    registrationUrl: "#",
    color: "#EA4335",
    tag: "Hackathon",
  },
  {
    id: 3,
    title: "AI/ML Bootcamp",
    description:
      "A 5-day immersive bootcamp diving into machine learning fundamentals, neural networks, and building real AI-powered apps.",
    date: "2025-08-05",
    time: "9:30 AM",
    location: "Seminar Hall 2",
    category: "Bootcamp",
    status: "upcoming",
    image: "",
    registrationUrl: "#",
    color: "#34A853",
    tag: "AI/ML",
  },
  {
    id: 4,
    title: "Web Dev Sprint",
    description:
      "A fast-paced weekend sprint where participants build a full-stack web application from scratch with expert guidance.",
    date: "2025-04-10",
    time: "10:00 AM",
    location: "CBNCC Lab, Block B",
    category: "Workshop",
    status: "past",
    image: "",
    attendees: 87,
    color: "#FBBC05",
    tag: "Web Dev",
  },
  {
    id: 5,
    title: "DevTalk: Open Source Contribution",
    description:
      "An inspiring talk session by open source contributors sharing their journeys and guiding students to get started with OSS.",
    date: "2025-03-22",
    time: "3:00 PM",
    location: "Online (Google Meet)",
    category: "Talk",
    status: "past",
    image: "",
    attendees: 142,
    color: "#4285F4",
    tag: "Talk",
  },
  {
    id: 6,
    title: "Android Study Group",
    description:
      "Weekly study group sessions covering Android development with Kotlin and Jetpack Compose for beginners.",
    date: "2025-02-18",
    time: "2:00 PM",
    location: "CBNCC Lab, Block A",
    category: "Study Group",
    status: "past",
    image: "",
    attendees: 54,
    color: "#EA4335",
    tag: "Android",
  },
];
