import { FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiTailwindcss } from "react-icons/si";

// (Desktop 16:9, Mobile 9:16)
export const projectData = [
    {
        id: 1,
        title: "Asapmu Parumu",
        description:
            "A mobile-focused application designed to help users quit smoking. Features include progress tracking, health improvement statistics, and community support forums.",
        tech: ["React", "Tailwind", "Spring Boot", "PostgreSQL"],
        githubLink: {
            frontend: "https://github.com/Iqoqacola/asapmu-parumu",
            backend: "https://github.com/Iqoqacola/asapmu-parumu-api",
        },
        liveLink: "https://asapmu-parumu.vercel.app",
        laptopImg: "/projects/asapmu-laptop.png",
        mobileImg: "/projects/asapmu-mobile.png",
    },
    {
        id: 2,
        title: "Prioritix",
        description:
            "Designed for aesthetics and efficiency, this to-do app bridges planning and execution. Features a clean interface, Dark Mode, and focus tools to boost productivity.",
        tech: ["React", "Tailwind", "Express.js ", "PostgreSQL"],
        githubLink: "https://github.com/Iqoqacola/prioritix",
        liveLink: null,
        laptopImg: null,
        mobileImg: null,
    },
];


export const experienceData = [
    {
        id: 1,
        role: "Front-End Developer",
        company: "Minilemon Technology",
        type: "Internship",
        date: "Oct 2025 - Feb 2026",
        tech: ["React.js", "Tailwind CSS", "Git"],
        description:
            "Collaborated with the development team to build dynamic and responsive web interfaces using React.js. Optimized component performance, implemented UI/UX designs into functional code, and ensured cross-browser compatibility.",
    },
];

export const educationData = [
    {
        id: 1,
        school: "Universitas Terbuka",
        degree: "Bachelor of Information Systems (S1)",
        date: "2024 - Present (Expected 2028)",
        description:
            "Majoring in Information Systems. Focusing on software engineering, database management, system analysis, and IT infrastructure.",
    },
    {
        id: 2,
        school: "Poltekkes Kemenkes Kaltim",
        degree: "Bachelor of Health Promotion (S1)",
        date: "2022 - 2026",
        description:
            "Majoring in Health Promotion. Learned about public health strategies, communication methodology, and designing health education programs for the community.",
    },
];
