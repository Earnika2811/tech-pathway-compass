
import { Code, Compass, Database, Lock, Smartphone } from "lucide-react";

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Pathway {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: any; // Lucide icon component
  skills: string[];
  difficulty: Difficulty;
  timeEstimate: string;
  steps: PathwayStep[];
  relatedPathways: string[];
  jobRoles: JobRole[];
  resources: PathwayResource[];
}

export interface PathwayStep {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  skills: string[];
  prerequisites?: string[];
  resources?: string[];
}

export interface JobRole {
  title: string;
  description: string;
  salaryRange: string;
  demandLevel: 'high' | 'medium' | 'low';
  requiredSkills: string[];
}

export interface PathwayResource {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'book' | 'tutorial' | 'documentation' | 'video' | 'article';
  link: string;
  free: boolean;
  tags: string[];
  provider?: string;
}

export const pathways: Pathway[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Learn front-end and back-end web development technologies to build modern web applications.",
    slug: "web-development",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
    difficulty: "beginner",
    timeEstimate: "6-12 months",
    steps: [
      {
        id: "web-fundamentals",
        title: "Web Fundamentals",
        description: "Learn the core technologies that power the web: HTML, CSS, and JavaScript.",
        timeEstimate: "8 weeks",
        skills: ["HTML5", "CSS3", "JavaScript ES6+"],
        resources: ["html-basics", "css-basics", "js-basics"]
      },
      {
        id: "responsive-design",
        title: "Responsive Design",
        description: "Learn to create websites that work well on any device size.",
        timeEstimate: "4 weeks",
        skills: ["Media Queries", "Flexbox", "CSS Grid", "Mobile-First Design"],
        prerequisites: ["web-fundamentals"]
      },
      {
        id: "javascript-advanced",
        title: "Advanced JavaScript",
        description: "Deepen your JavaScript knowledge with more complex concepts.",
        timeEstimate: "6 weeks",
        skills: ["ES6+", "Asynchronous JS", "DOM Manipulation", "API Integration"],
        prerequisites: ["web-fundamentals"]
      },
      {
        id: "frontend-framework",
        title: "Frontend Framework",
        description: "Learn a popular frontend framework like React, Vue, or Angular.",
        timeEstimate: "10 weeks",
        skills: ["React", "State Management", "Component Architecture"],
        prerequisites: ["javascript-advanced"]
      },
      {
        id: "backend-basics",
        title: "Backend Basics",
        description: "Introduction to server-side programming and databases.",
        timeEstimate: "8 weeks",
        skills: ["Node.js", "Express", "RESTful APIs", "Database Basics"],
        prerequisites: ["javascript-advanced"]
      },
      {
        id: "fullstack-project",
        title: "Full-Stack Project",
        description: "Build a complete full-stack application integrating all your skills.",
        timeEstimate: "6 weeks",
        skills: ["Architecture", "Deployment", "Authentication", "Testing"],
        prerequisites: ["frontend-framework", "backend-basics"]
      }
    ],
    relatedPathways: ["mobile-development", "devops"],
    jobRoles: [
      {
        title: "Frontend Developer",
        description: "Specialize in building user interfaces and interactive web applications.",
        salaryRange: "$70,000 - $120,000",
        demandLevel: "high",
        requiredSkills: ["HTML", "CSS", "JavaScript", "React/Vue/Angular"]
      },
      {
        title: "Backend Developer",
        description: "Focus on server-side logic, databases, and application architecture.",
        salaryRange: "$75,000 - $130,000",
        demandLevel: "high",
        requiredSkills: ["Node.js/Python/Java", "Databases", "API Design", "Server Management"]
      },
      {
        title: "Full-Stack Developer",
        description: "Work across the entire web application stack, from frontend to backend.",
        salaryRange: "$85,000 - $150,000",
        demandLevel: "high",
        requiredSkills: ["Frontend skills", "Backend skills", "DevOps basics", "System Design"]
      }
    ],
    resources: [
      {
        id: "html-basics",
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web pages with this comprehensive course for beginners.",
        type: "course",
        link: "https://www.freecodecamp.org/learn/responsive-web-design/",
        free: true,
        provider: "freeCodeCamp",
        tags: ["HTML", "CSS", "Beginner"]
      },
      {
        id: "js-basics",
        title: "JavaScript: Understanding the Weird Parts",
        description: "Deep dive into JavaScript concepts and fundamentals.",
        type: "course",
        link: "https://www.udemy.com/course/understand-javascript/",
        free: false,
        provider: "Udemy",
        tags: ["JavaScript", "Programming", "Intermediate"]
      },
      {
        id: "react-tutorial",
        title: "React Official Tutorial",
        description: "Learn React directly from its official documentation with hands-on exercises.",
        type: "tutorial",
        link: "https://react.dev/learn",
        free: true,
        provider: "React Team",
        tags: ["React", "JavaScript", "Frontend"]
      },
      {
        id: "node-express",
        title: "Node.js & Express for Beginners",
        description: "Build backend applications with Node.js and the Express framework.",
        type: "course",
        link: "https://www.youtube.com/watch?v=Oe421EPjeBE",
        free: true,
        provider: "freeCodeCamp",
        tags: ["Node.js", "Express", "Backend", "JavaScript"]
      }
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Learn to build native and cross-platform mobile applications for iOS and Android.",
    slug: "mobile-development",
    icon: Smartphone,
    skills: ["React Native", "Swift", "Kotlin", "Mobile UI/UX", "API Integration"],
    difficulty: "intermediate",
    timeEstimate: "8-12 months",
    steps: [
      {
        id: "mobile-fundamentals",
        title: "Mobile Development Fundamentals",
        description: "Learn the basics of mobile app development and the various approaches.",
        timeEstimate: "4 weeks",
        skills: ["Mobile Concepts", "Platform Basics", "Development Approaches"]
      },
      {
        id: "cross-platform-basics",
        title: "Cross-Platform Development",
        description: "Introduction to frameworks like React Native or Flutter for cross-platform apps.",
        timeEstimate: "10 weeks",
        skills: ["React Native/Flutter", "Component Design", "Navigation"],
        prerequisites: ["mobile-fundamentals"]
      },
      {
        id: "mobile-advanced",
        title: "Advanced Mobile Development",
        description: "Explore deeper concepts in mobile development like state management and native modules.",
        timeEstimate: "8 weeks",
        skills: ["State Management", "Native Modules", "Performance Optimization"],
        prerequisites: ["cross-platform-basics"]
      },
      {
        id: "mobile-project",
        title: "Mobile App Project",
        description: "Build a complete mobile application from start to finish.",
        timeEstimate: "6 weeks",
        skills: ["App Architecture", "Offline Support", "Testing", "Deployment"],
        prerequisites: ["mobile-advanced"]
      }
    ],
    relatedPathways: ["web-development", "ui-ux-design"],
    jobRoles: [
      {
        title: "Mobile App Developer",
        description: "Build applications for mobile devices across various platforms.",
        salaryRange: "$75,000 - $130,000",
        demandLevel: "high",
        requiredSkills: ["React Native/Flutter/Swift/Kotlin", "Mobile Architecture", "State Management"]
      },
      {
        title: "iOS Developer",
        description: "Specialize in developing applications specifically for Apple's iOS platform.",
        salaryRange: "$80,000 - $140,000",
        demandLevel: "high",
        requiredSkills: ["Swift", "UIKit", "SwiftUI", "iOS Architecture"]
      }
    ],
    resources: [
      {
        id: "react-native-basics",
        title: "React Native - The Practical Guide",
        description: "Comprehensive course on building mobile apps with React Native.",
        type: "course",
        link: "https://www.udemy.com/course/react-native-the-practical-guide/",
        free: false,
        provider: "Udemy",
        tags: ["React Native", "JavaScript", "Mobile"]
      },
      {
        id: "flutter-tutorial",
        title: "Flutter Crash Course",
        description: "Quick introduction to building beautiful mobile apps with Flutter.",
        type: "tutorial",
        link: "https://www.youtube.com/watch?v=1gDhl4leEzA",
        free: true,
        provider: "Traversy Media",
        tags: ["Flutter", "Dart", "Cross-platform"]
      }
    ]
  },
  {
    id: "data-science",
    title: "Data Science & AI",
    description: "Learn to analyze data and create machine learning models to derive insights and predictions.",
    slug: "data-science",
    icon: Database,
    skills: ["Python", "Statistics", "Machine Learning", "Data Visualization", "SQL"],
    difficulty: "advanced",
    timeEstimate: "12-18 months",
    steps: [
      {
        id: "data-fundamentals",
        title: "Data Science Fundamentals",
        description: "Learn the basics of data science, statistics, and Python programming.",
        timeEstimate: "10 weeks",
        skills: ["Python", "Statistics", "Data Analysis", "SQL"]
      },
      {
        id: "data-manipulation",
        title: "Data Manipulation & Analysis",
        description: "Learn to clean, transform, and analyze data using Python libraries.",
        timeEstimate: "8 weeks",
        skills: ["Pandas", "NumPy", "Data Cleaning", "Exploratory Analysis"],
        prerequisites: ["data-fundamentals"]
      },
      {
        id: "data-visualization",
        title: "Data Visualization",
        description: "Learn to create compelling visualizations to communicate data insights.",
        timeEstimate: "6 weeks",
        skills: ["Matplotlib", "Seaborn", "Dashboards", "Visual Storytelling"],
        prerequisites: ["data-manipulation"]
      },
      {
        id: "machine-learning",
        title: "Machine Learning Basics",
        description: "Introduction to machine learning concepts and algorithms.",
        timeEstimate: "12 weeks",
        skills: ["Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
        prerequisites: ["data-manipulation"]
      }
    ],
    relatedPathways: ["backend-development", "devops"],
    jobRoles: [
      {
        title: "Data Scientist",
        description: "Analyze complex data to help organizations make better decisions.",
        salaryRange: "$90,000 - $160,000",
        demandLevel: "high",
        requiredSkills: ["Python/R", "Statistics", "Machine Learning", "Data Visualization"]
      },
      {
        title: "Machine Learning Engineer",
        description: "Build and deploy machine learning models and AI systems.",
        salaryRange: "$100,000 - $170,000",
        demandLevel: "high",
        requiredSkills: ["Python", "Deep Learning", "MLOps", "System Design"]
      }
    ],
    resources: [
      {
        id: "python-data-science",
        title: "Python for Data Science and Machine Learning",
        description: "Comprehensive bootcamp covering all key data science topics with Python.",
        type: "course",
        link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
        free: false,
        provider: "Udemy",
        tags: ["Python", "Data Science", "Machine Learning"]
      },
      {
        id: "statistics",
        title: "Statistics and Probability",
        description: "Learn fundamental statistical concepts essential for data science.",
        type: "course",
        link: "https://www.khanacademy.org/math/statistics-probability",
        free: true,
        provider: "Khan Academy",
        tags: ["Statistics", "Probability", "Mathematics"]
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Learn to protect systems, networks, and programs from digital attacks.",
    slug: "cybersecurity",
    icon: Lock,
    skills: ["Network Security", "Ethical Hacking", "Security Frameworks", "Encryption"],
    difficulty: "intermediate",
    timeEstimate: "10-16 months",
    steps: [
      {
        id: "security-fundamentals",
        title: "Cybersecurity Fundamentals",
        description: "Learn the basics of cybersecurity and information security principles.",
        timeEstimate: "8 weeks",
        skills: ["Security Concepts", "Threat Models", "Security Controls"]
      },
      {
        id: "network-security",
        title: "Network Security",
        description: "Learn to secure networks and understand common attack vectors.",
        timeEstimate: "10 weeks",
        skills: ["Network Protocols", "Firewalls", "VPNs", "IDS/IPS"],
        prerequisites: ["security-fundamentals"]
      },
      {
        id: "ethical-hacking",
        title: "Ethical Hacking",
        description: "Learn penetration testing methods to identify vulnerabilities before attackers do.",
        timeEstimate: "12 weeks",
        skills: ["Vulnerability Assessment", "Pen Testing", "Exploitation Techniques"],
        prerequisites: ["network-security"]
      }
    ],
    relatedPathways: ["devops", "backend-development"],
    jobRoles: [
      {
        title: "Security Analyst",
        description: "Monitor and analyze security systems and respond to security incidents.",
        salaryRange: "$70,000 - $120,000",
        demandLevel: "high",
        requiredSkills: ["Security Tools", "Incident Response", "Threat Analysis"]
      },
      {
        title: "Penetration Tester",
        description: "Identify and exploit security vulnerabilities to help organizations improve security.",
        salaryRange: "$85,000 - $150,000",
        demandLevel: "high",
        requiredSkills: ["Ethical Hacking", "Exploitation", "Network Security", "Reporting"]
      }
    ],
    resources: [
      {
        id: "comptia-security",
        title: "CompTIA Security+ Certification",
        description: "Prepare for the industry-standard Security+ certification exam.",
        type: "course",
        link: "https://www.comptia.org/certifications/security",
        free: false,
        provider: "CompTIA",
        tags: ["Certification", "Security", "Network Security"]
      },
      {
        id: "ethical-hacking",
        title: "Ethical Hacking Course",
        description: "Learn penetration testing and ethical hacking techniques.",
        type: "course",
        link: "https://www.udemy.com/course/learn-ethical-hacking-from-scratch/",
        free: false,
        provider: "Udemy",
        tags: ["Ethical Hacking", "Penetration Testing", "Security"]
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Cloud Computing",
    description: "Learn to automate and optimize development and operations processes in the cloud.",
    slug: "devops",
    icon: Compass,
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS/Azure/GCP", "Infrastructure as Code"],
    difficulty: "advanced",
    timeEstimate: "10-14 months",
    steps: [
      {
        id: "devops-fundamentals",
        title: "DevOps Fundamentals",
        description: "Learn the core principles and practices of DevOps.",
        timeEstimate: "6 weeks",
        skills: ["DevOps Culture", "CI/CD Concepts", "Automation Philosophy"]
      },
      {
        id: "containerization",
        title: "Containerization",
        description: "Learn Docker and container orchestration with Kubernetes.",
        timeEstimate: "8 weeks",
        skills: ["Docker", "Kubernetes", "Container Management"],
        prerequisites: ["devops-fundamentals"]
      },
      {
        id: "cloud-platforms",
        title: "Cloud Platforms",
        description: "Learn to work with major cloud providers like AWS, Azure, or GCP.",
        timeEstimate: "10 weeks",
        skills: ["Cloud Architecture", "Cloud Services", "Scaling"],
        prerequisites: ["devops-fundamentals"]
      },
      {
        id: "infrastructure-as-code",
        title: "Infrastructure as Code",
        description: "Learn to define and provision infrastructure using code.",
        timeEstimate: "8 weeks",
        skills: ["Terraform", "CloudFormation/ARM Templates", "Configuration Management"],
        prerequisites: ["cloud-platforms", "containerization"]
      }
    ],
    relatedPathways: ["backend-development", "cybersecurity"],
    jobRoles: [
      {
        title: "DevOps Engineer",
        description: "Bridge development and operations to improve deployment efficiency and reliability.",
        salaryRange: "$90,000 - $160,000",
        demandLevel: "high",
        requiredSkills: ["CI/CD", "Cloud Platforms", "Containers", "Infrastructure as Code"]
      },
      {
        title: "Cloud Architect",
        description: "Design and implement cloud-based solutions for organizations.",
        salaryRange: "$110,000 - $180,000",
        demandLevel: "high",
        requiredSkills: ["Cloud Architecture", "Security", "Network Design", "Cost Optimization"]
      }
    ],
    resources: [
      {
        id: "docker-kubernetes",
        title: "Docker and Kubernetes: The Complete Guide",
        description: "Master containerization and orchestration with Docker and Kubernetes.",
        type: "course",
        link: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/",
        free: false,
        provider: "Udemy",
        tags: ["Docker", "Kubernetes", "Containers", "DevOps"]
      },
      {
        id: "aws-certified",
        title: "AWS Certified Solutions Architect",
        description: "Prepare for AWS certification and learn cloud architecture.",
        type: "course",
        link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
        free: false,
        provider: "AWS",
        tags: ["AWS", "Cloud", "Architecture", "Certification"]
      }
    ]
  }
];

export const getPathwayBySlug = (slug: string): Pathway | undefined => {
  return pathways.find(pathway => pathway.slug === slug);
};

export const getPopularPathways = (count: number = 3): Pathway[] => {
  return pathways.slice(0, count);
};
