import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Wrench, FolderKanban, Code, Target } from 'lucide-react'; // Added Target icon

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
  company: string; // Can represent "Academic", "Personal Projects", etc.
  role: string;
  period: string;
  description: string[];
  icon: LucideIcon;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
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
  name: "Salman", // Updated name
  preferredName: "Salman", // Kept preferred name consistent
  title: "Aspiring Software Engineer | Web Developer | Tech Enthusiast", // Adjusted title for fresher
  subtitle: "Eager to build beautiful and functional web applications and kickstart my career.", // Adjusted subtitle for fresher
  ctaText: "Get In Touch",
  ctaLink: "#contact",
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "Highly motivated and results-oriented aspiring software engineer with a passion for creating innovative and user-centric web applications. Strong foundation in web development principles gained through academic projects and self-learning.", // Adjusted for fresher
    "I thrive in collaborative environments and enjoy tackling challenging problems. Constantly learning and exploring new technologies to build a strong skillset.",
    "Actively seeking opportunities to apply my knowledge, contribute to exciting projects, and grow as a software engineer.", // Adjusted for fresher
  ],
};

// Updated Experience section for a fresher
export const experienceData: ExperienceItem[] = [
  {
    company: 'Learning & Projects', // Changed company to reflect focus
    role: 'Aspiring Software Engineer', // Changed role
    period: 'Ongoing', // Changed period
    description: [
      'Actively seeking my first full-time software engineering role.',
      'Developed several projects (see Projects section) to apply and showcase my skills.',
      'Continuously learning new technologies and best practices in web development.',
      'Eager to contribute to a team and learn from experienced professionals.',
    ],
    icon: Target, // Using Target icon to represent goal/aspiration
  },
  // Add internships or significant volunteer work here if applicable
  // Example:
  // {
  //   company: 'Open Source Project X',
  //   role: 'Contributor',
  //   period: 'Summer 2023',
  //   description: [
  //     'Contributed features A and B to the project.',
  //     'Fixed bugs C and D.',
  //     'Collaborated with the community via GitHub issues and PRs.',
  //   ],
  //   icon: Github,
  // },
];


export const projectsData: ProjectItem[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website built with Next.js, Stripe, and Firebase. Demonstrates full-stack capabilities.', // Added context
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Firebase', 'Full-Stack'],
    link: 'https://github.com/yourusername/ecommerce', // Replace with actual link
    icon: FolderKanban,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application using MERN stack. Showcases API development and database integration.', // Added context
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'MERN'],
    link: 'https://github.com/yourusername/task-manager', // Replace with actual link
    icon: FolderKanban,
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio website, built with Next.js and Tailwind CSS to showcase my skills and projects.', // Added context
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Shadcn/ui'],
    // No link needed as it's the current site
    icon: FolderKanban,
  },
  // Add more projects as needed
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Shadcn/ui'], // Removed Vue.js unless applicable
    icon: Code,
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs'], // Simplified for a fresher, remove Python/Django/Flask/GraphQL unless applicable
    icon: Code,
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase Firestore'], // Kept common ones
    icon: Code,
  },
  {
    title: 'Tools & Concepts', // Renamed category
    skills: ['Git', 'Docker', 'AWS (Basic)', 'Google Cloud (Basic)', 'CI/CD (Concepts)', 'Jest', 'Testing Library'], // Adjusted for fresher level
    icon: Wrench,
  },
];

export const educationData: EducationItem[] = [
   // Keep relevant education
   {
    institution: 'University of Technology', // Replace with actual university
    degree: 'B.S. in Computer Science', // Replace with actual degree
    period: '2020 - 2024', // Replace with actual dates
    icon: GraduationCap,
  },
  // Add M.S. if applicable
   {
    institution: 'Graduate University Name', // Replace with actual university
    degree: 'M.S. in Data Science', // Replace with actual degree
    period: '2024 - Present', // Replace with actual dates or expected graduation
    icon: GraduationCap,
  },
];

export const contactData = {
  title: "Get In Touch",
  description: "I'm actively looking for entry-level software engineering roles and eager to connect. Feel free to reach out!", // Adjusted for fresher
  email: "your.email@example.com", // Replace with actual email
  socialLinks: [
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github }, // Replace with actual username
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin }, // Replace with actual username
  ] as ContactLink[], // Explicitly type socialLinks
};

export const footerData = {
  text: `© ${new Date().getFullYear()} ${heroData.preferredName || heroData.name}. Built with Next.js and Tailwind CSS.`
}

