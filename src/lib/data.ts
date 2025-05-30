import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Wrench, FolderKanban, Code, Target, ExternalLink } from 'lucide-react'; // Added Target and ExternalLink icons

export interface NavItem {
  name: string;
  href: string;
}

export interface ContactLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  icon: LucideIcon;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link?: string; // GitHub link
  webLink?: string; // Live web link
  icon: LucideIcon;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const heroData = {
  name: "Salman",
  preferredName: "Khwajamainuddin",
  title: "Aspiring Software Engineer | Web Developer | Tech Enthusiast | GenAI Enthusiast",
  subtitle: "Eager to build beautiful and functional web applications and kickstart my career.",
  ctaText: "Get In Touch",
  ctaLink: "#contact",
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "Highly motivated and results-oriented aspiring software engineer with a passion for creating innovative and user-centric web applications. Strong foundation in web development principles gained through academic projects and self-learning.",
    "I thrive in collaborative environments and enjoy tackling challenging problems. Constantly learning and exploring new technologies to build a strong skillset.",
    "Actively seeking opportunities to apply my knowledge, contribute to exciting projects, and grow as a software engineer.",
  ],
};

export const experienceData: ExperienceItem[] = [
  {
    company: 'Learning & Projects',
    role: 'Aspiring Software Engineer',
    period: 'Ongoing',
    description: [
      'Actively seeking my first full-time software engineering role.',
      'Developed several projects (see Projects section) to apply and showcase my skills.',
      'Continuously learning new technologies and best practices in web development.',
      'Eager to contribute to a team and learn from experienced professionals.',
    ],
    icon: Target,
  },
  {
    company: 'Leosias Technologies',
    role: 'Data Analyst',
    period: 'Nov 2024 - Jan 2025', // Note: This period is in the future.
    description: [
      'Learnt various technologies of Data Preprocessing and Visualizations.',
      'Learnt building dashboards using the PowerBI.',
      'Engineered AQI project to find the insights of the top 5 metropolitan cities.',
      'Helps the users to analyze better air quality to live in. ',
    ],
    icon: Briefcase, // Changed to Briefcase for a more professional/work context
  },
];


export const projectsData: ProjectItem[] = [
  {
    title: 'Face Recognition System',
    description: 'A platform where the users face is recognized and marks their presence in the Excel and the MySQL.',
    tags: ['Python', 'Tkinter', 'SQL', 'OpenCV', 'MySQL', 'Excel'],
    link: 'https://github.com/salman-momin08/Face_recognition',
    // webLink: undefined, // Assuming this is a desktop app
    icon: FolderKanban,
  },
  {
    title: 'ResearchSphere',
    description: 'A platform for the students and researchers to publish their papers. Provides the AI Pre-Check functionality to check the plagiarism and Acceptance rate of the paper.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Shadcn/ui','GenKit'],
    link: 'https://github.com/salman-momin08/researchsphere_repo',
    webLink: 'https://researchsphere-live-demo.example.com', // Placeholder live link
    icon: FolderKanban,
  },
  {
    title: 'Csv data Analyzer',
    description: 'The is engineered to allow the users to find the insights of the data for future trends, business patters etc. It will allow the users to upload one .csv or the user can add two files for the comparison based on the similar columns present.',
    tags: ['Python', 'Streamlit', 'Plotly'],
    link: 'https://github.com/salman-momin08/AQI', // Assuming this is the correct repo for the CSV analyzer
    webLink: 'https://csv-analyzer-live.example.com', // Placeholder live link
    icon: FolderKanban,
  },
  {
    title: 'Portfolio',
    description: 'This very portfolio website, built with Next.js and Tailwind CSS to showcase my skills and projects.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Shadcn/ui'],
    link: 'https://github.com/salman-momin08/your-portfolio-repo', // Replace with your actual portfolio repo link
    webLink: '#', // Links to the current page
    icon: FolderKanban,
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'Javascript', 'C programming'],
    icon: Code,
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    icon: Code,
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs'],
    icon: Code,
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase Firestore'],
    icon: Code,
  },
  {
    title: 'Tools & Concepts',
    skills: ['Git', 'GitHub', 'Docker', 'AWS (Basic)', 'Google Cloud (Basic)', 'CI/CD (Concepts)'],
    icon: Wrench,
  },
  {
    title: 'Others',
    skills: ['GenAI', 'Prompt Engineering', 'Data Structures', 'Algorithms', 'Excellent Communication', 'Leadership', 'Time Management'],
    icon: Code,
  },
];

export const educationData: EducationItem[] = [
   {
    institution: 'KLE SOCIETYS COLLEGE OF BCA GOKAK',
    degree: 'Bachelor of Computer Application (BCA)',
    period: '2020 - 2023  (CGPA: 8.92)',
    icon: GraduationCap,
  },
   {
    institution: 'The Oxford College of Engineering',
    degree: 'Master of Computer Application (MCA)',
    period: '2023 - Present  (CGPA: 9.05)',
    icon: GraduationCap,
  },
];

export const contactData = {
  title: "Get In Touch",
  description: "I'm actively looking for entry-level software engineering roles and eager to connect. Feel free to reach out!",
  email: "Khwajamainuddinmomin@gmail.com",
  socialLinks: [
    { name: 'GitHub', href: 'https://github.com/salman-momin08', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/khwajamainuddin-momin-9b406921b', icon: Linkedin },
  ] as ContactLink[],
};

export const footerData = {
  text: `© ${new Date().getFullYear()} ${heroData.preferredName || heroData.name}. `
}