/**
 * Personal Portfolio Data Configuration for ABHINAV
 * 
 * All portfolio information is centralized here so you can easily edit:
 * - Your personal profile details & social links
 * - Skills & capabilities
 * - Featured projects
 * - Contact information
 */

export const personalData = {
  name: "ABHINAV",
  fullName: "Abhinav",
  prefix: "I am",
  tagline: "Developer in Progress.",
  role: "Computer Science Student | Programmer | Technology Enthusiast",
  education: "Computer Science & Engineering",
  heroBio:
    "I'm Abhinav, a Computer Science and Engineering student passionate about technology, programming and building meaningful digital experiences. I enjoy exploring new technologies, solving problems and transforming ideas into reality.",
  aboutHeading: "A Little About Me",
  aboutParagraphs: [
    "I'm a Computer Science and Engineering student with a strong interest in software development, artificial intelligence and emerging technologies.",
    "I believe in continuous learning, experimenting with ideas and improving my abilities through practical experience.",
    "I'm currently exploring programming, software development and innovative ways to use technology to solve real-world problems."
  ],
  stats: [
    { label: "Academic Track", value: "B.Tech CSE", detail: "Computer Science & Engineering" },
    { label: "Mindset", value: "Problem Solver", detail: "Algorithmic & Analytical" },
    { label: "Focus", value: "Continuous Learner", detail: "Always exploring emerging tech" },
    { label: "Status", value: "Available", detail: "For collaborations & projects" }
  ],
  socialLinks: {
    github: "https://github.com/abhinav-dev",       // Replace with your GitHub URL
    linkedin: "https://www.linkedin.com/in/abhinav-a-9a7407375/", // Replace with your LinkedIn URL
    twitter: "https://x.com/BLACKSCHY7HE",          // Replace with your Twitter/X URL
    email: "a9258782@gmail.com"               // Replace with your email address
  }
};

export const aboutHighlights = [
  {
    icon: "GraduationCap",
    title: "CS & Engineering Foundation",
    description: "Deepening knowledge in data structures, algorithms, computer architecture, database management, and object-oriented design principles."
  },
  {
    icon: "Brain",
    title: "AI & Emerging Technologies",
    description: "Fascinated by generative intelligence, LLM workflows, autonomous agent frameworks, and how AI can augment human capability."
  },
  {
    icon: "Code2",
    title: "Hands-on Implementation",
    description: "Transforming abstract logic into working, scalable applications through clean code, structured design patterns, and iterative building."
  },
  {
    icon: "Compass",
    title: "Adaptive & Fast Learner",
    description: "Thriving at the edge of the unfamiliar; rapidly picking up modern tools, languages, and development paradigms with curiosity."
  }
];

export const skillsData = [
  {
    name: "C Programming",
    category: "Languages",
    level: "Core Foundation",
    percentage: 85,
    icon: "Cpu",
    description: "Pointer arithmetic, memory management, data structures, low-level systems logic, and computational performance."
  },
  {
    name: "Java",
    category: "Languages",
    level: "Object-Oriented",
    percentage: 85,
    icon: "Coffee",
    description: "OOP principles, collections framework, multithreading basics, design patterns, and robust software architecture."
  },
  {
    name: "SQL",
    category: "Database & Backend",
    level: "Database Design",
    percentage: 80,
    icon: "Database",
    description: "Relational schema design, normalization, complex joins, aggregation queries, and transactional data integrity."
  },
  {
    name: "HTML",
    category: "Web Technologies",
    level: "Semantic & Accessible",
    percentage: 90,
    icon: "CodeXml",
    description: "Semantic markup, modern HTML5 APIs, accessibility standards, and SEO-friendly document hierarchy."
  },
  {
    name: "CSS",
    category: "Web Technologies",
    level: "Modern & Responsive",
    percentage: 88,
    icon: "Palette",
    description: "Modern CSS layouts, Flexbox, CSS Grid, custom properties, responsive design, and fluid typography."
  },
  {
    name: "Google Antigravity",
    category: "AI & Developer Tools",
    level: "Agentic Engineering",
    percentage: 82,
    icon: "Terminal",
    description: "Agent workflows, automation skills, context orchestration, and accelerated development environments."
  },
  {
    name: "Chat GPT",
    category: "AI & Developer Tools",
    level: "Prompt Engineering & Augmentation",
    percentage: 92,
    icon: "Sparkles",
    description: "Advanced prompt design, code generation, architectural ideation, debugging assistance, and conceptual exploration."
  },
  {
    name: "Quick learner",
    category: "Core Competencies",
    level: "Adaptive Mindset",
    percentage: 95,
    icon: "Zap",
    description: "Rapidly assimilating new frameworks, programming languages, and industry standards into practical workflows."
  },
  {
    name: "Problem Solving",
    category: "Core Competencies",
    level: "Algorithmic & Analytical",
    percentage: 90,
    icon: "CheckCircle2",
    description: "Deconstructing complex system bottlenecks into solvable logical sub-problems and optimizing solutions."
  }
];

export const projectsData = [
  {
    id: "gun-ai-assistant",
    title: "GUN",
    subtitle: "AI-Powered Training & Productivity Assistant",
    tagline: "Intelligent coaching concept for physical conditioning and structured personal productivity.",
    badge: "Featured Concept",
    description:
      "An AI-powered training assistant concept engineered to elevate both physical training performance and daily personal productivity. GUN analyzes workout patterns, provides structured regimen recommendations, and keeps developers and athletes focused through automated goal tracking and real-time guidance.",
    technologies: ["AI Logic", "Python", "Google Antigravity", "React", "Prompt Workflows"],
    highlights: [
      "Dynamic routine generation customized to fitness levels and daily energy availability",
      "Productivity timer & focus module designed for high-intensity developer sessions",
      "Conversational training log with adaptive recovery reminders",
      "Real-time progression tracking and habit reinforcement algorithms"
    ],
    githubUrl: "https://github.com/abhinav-dev/gun-ai-training-assistant",
    liveDemoUrl: "https://gun-ai-concept.example.com",
    previewImage: "/assets/reference-portrait.jpg"
  },
  {
    id: "algo-workbench",
    title: "Algorithmic Workbench",
    subtitle: "Data Structure Profiler & Execution Engine",
    tagline: "Interactive Java and SQL engine for benchmarking algorithms and relational queries.",
    badge: "Core Engineering",
    description:
      "A comprehensive software engineering workbench built to model, test, and profile algorithmic complexity in Java alongside normalized SQL database operations. Features visual tree traversal, memory footprint inspection, and query execution plan analysis.",
    technologies: ["Java", "SQL", "OOP", "Data Structures", "Benchmarking"],
    highlights: [
      "Interactive data structure visualizer for binary search trees and heap structures",
      "SQL query benchmark harness comparing indexing efficiency across large mock datasets",
      "Time and space complexity profiling with automated edge-case test suites",
      "Clean modular architecture adhering to SOLID design principles"
    ],
    githubUrl: "https://github.com/abhinav-dev/algorithmic-workbench-java",
    liveDemoUrl: "https://algo-workbench.example.com",
    previewImage: null
  },
  {
    id: "campus-nexus",
    title: "Campus Nexus",
    subtitle: "Modern Student Resource & Project Hub",
    tagline: "Responsive web portal connecting engineering students with peer projects and academic materials.",
    badge: "Web Application",
    description:
      "A fast, modern student hub crafted with semantic HTML, modern responsive CSS, and modular React. Designed to centralize CS study materials, coordinate peer programming teams, and showcase student engineering projects through a high-contrast editorial interface.",
    technologies: ["React", "HTML5", "Modern CSS", "JavaScript", "Responsive UI"],
    highlights: [
      "Ultra-responsive layout optimized for desktop workstations, tablets, and mobile screens",
      "Categorized resource repository with instant keyword filtering and tag indexing",
      "Interactive project submission board with preview drawers and markdown support",
      "Accessible dark/crimson design inspired by modern software aesthetics"
    ],
    githubUrl: "https://github.com/abhinav-dev/campus-nexus-portal",
    liveDemoUrl: "https://campus-nexus.example.com",
    previewImage: null
  }
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
