
export const PROFILE = {
  name: "Niranjan",
  role: "Future CSE Engineer & Full Stack Developer",
  tagline: "Building scalable, efficient, and beautiful digital solutions.",
  resumeLink: "#",
  socials: {
    github: "https://github.com/Niranjan7771",
    linkedin: "https://www.linkedin.com/in/y-niranjan-b183622b5/",
    email: "yalamniranjan@gmail.com", 
  },
};

export const ABOUT = {
  summary:
    "I am a passionate 3rd-year Computer Science Engineering student at IIITDM Kancheepuram with a strong foundation in core CS concepts and web development. I love turning complex problems into elegant, user-centric solutions. Always eager to learn new technologies and contribute to impactful projects.",
  skills: [
    "C / C++",
    "Python",
    "React",
    "Node.js",
    "Data Structures",
    "Operating Systems",
    "DBMS",
    "Git / GitHub",
  ],
  image: "https://via.placeholder.com/300x300",
};

export const PROJECTS = [
  {
    id: 1,
    title: "LanMeet",
    description: "A serverless LAN collaboration suite delivering real-time audio, video, screen sharing, and file transfer without cloud dependency. Features a Python control plane and modern web client.",
    techStack: ["Python", "WebRTC", "React", "Socket.io"],
    image: "https://images.unsplash.com/photo-1614064641938-3eeb52207041?q=80&w=2070&auto=format&fit=crop", // Abstract Tech Image
    githubLink: "https://github.com/Niranjan7771/LanMeet",
    demoLink: "#",
  },
  {
    id: 2,
    title: "cfg2yacc",
    description: "A modern compiler generator that transforms grammar definitions into functional compilers. Includes an interactive parse tree visualization tool for educational purposes.",
    techStack: ["Python", "Flex", "Bison", "C++"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // Coding/Compiler Image
    githubLink: "https://github.com/Niranjan7771/cfg2yacc",
    demoLink: "#",
  },
  {
    id: 3,
    title: "PocketHost",
    description: "A personal media streaming application turning a mobile device into a Jellyfin-like server. Stream videos from phone to laptop with a Netflix-style UI.",
    techStack: ["React Native", "Node.js", "FFmpeg"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop", // Streaming/Mobile Image
    githubLink: "https://github.com/Niranjan7771/PocketHost",
    demoLink: "#",
  },
];

export const RESUME = {
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "IIITDM Kancheepuram",
    year: "3rd Year | CGPA: 7.45",
  },
  certifications: [
    // You can update these later
    "Full Stack Web Development",
    "Data Structures & Algorithms",
  ],
};
