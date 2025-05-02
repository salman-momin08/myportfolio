import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Wrench, FolderKanban, Code } from 'lucide-react';

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
  name: "Your Name",
  title: "Software Engineer | Web Developer | Tech Enthusiast",
  subtitle: "Building beautiful and functional web applications.",
  ctaText: "Get In Touch",
  ctaLink: "#contact",
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "Highly motivated and results-oriented software engineer with a passion for creating innovative and user-centric web applications. Proven ability to design, develop, and deploy complex systems using modern technologies.",
    "I thrive in collaborative environments and enjoy tackling challenging problems. Constantly learning and exploring new technologies to stay ahead of the curve.",
    "Looking for opportunities to leverage my skills and contribute to exciting projects.",
  ],
};

export const experienceData: ExperienceItem[] = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Software Engineer',
    period: 'Jan 2020 - Present',
    description: [
      'Led the development of a new customer portal using React, Node.js, and PostgreSQL.',
      'Mentored junior engineers and conducted code reviews.',
      'Improved application performance by 20% through optimization techniques.',
    ],
    icon: Briefcase,
  },
  {
    company: 'Web Innovators LLC',
    role: 'Software Engineer',
    period: 'Jun 2018 - Dec 2019',
    description: [
      'Developed and maintained RESTful APIs for a SaaS platform.',
      'Collaborated with cross-functional teams to deliver new features.',
      'Implemented unit and integration tests to ensure code quality.',
    ],
    icon: Briefcase,
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website built with Next.js, Stripe, and Firebase.',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Firebase'],
    link: 'https://github.com/yourusername/ecommerce',
    icon: FolderKanban,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application using MERN stack.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://github.com/yourusername/task-manager',
    icon: FolderKanban,
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio website, built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    icon: FolderKanban,
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Shadcn/ui'],
    icon: Code,
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'Flask', 'REST APIs', 'GraphQL'],
    icon: Code,
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase Firestore'],
    icon: Code,
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'CI/CD', 'Jest', 'Testing Library'],
    icon: Wrench,
  },
];

export const educationData: EducationItem[] = [
  {
    institution: 'University of Technology',
    degree: 'M.S. in Computer Science',
    period: '2016 - 2018',
    icon: GraduationCap,
  },
  {
    institution: 'State College',
    degree: 'B.S. in Software Engineering',
    period: '2012 - 2016',
    icon: GraduationCap,
  },
];

export const contactData = {
  title: "Get In Touch",
  description: "I'm currently open to new opportunities and collaborations. Feel free to reach out!",
  email: "your.email@example.com",
  socialLinks: [
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  ] as ContactLink[], // Explicitly type socialLinks
};

export const footerData = {
  text: `© ${new Date().getFullYear()} Your Name. Built with Next.js and Tailwind CSS.`
}
