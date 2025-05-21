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
  name: "Salman", // Updated name
  preferredName: "Khwajamainuddin", // Kept preferred name consistent
  title: "Aspiring Software Engineer | Web Developer | Tech Enthusiast | GenAI Enthusiast", // Adjusted title for fresher
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
  {
    company: 'Leosias Technologies',
    role: 'Data Analyst',
    period: 'Nov 2024 - Jan 2025',
    description: [
      'Learnt various technologies of Data Preprocessing and Visualizations.',
      'Learnt building dashboards using the PowerBI.',
      'Engineered AQI project to find the insights of the top 5 metropolitan cities.',
      'Helps the users to analyze better air quality to live in. ',
    ],
    icon: Github,
  },
];


export const projectsData: ProjectItem[] = [
  {
    title: 'Online Cake Shop',
    description: 'A full featured web application, It provides the users to customize the cakes, flavors and the date of delivery.', // Added context
    tags: ['PHP', 'HTML', 'CSS', 'JAVASCRIPT', 'Full-Stack', 'SQL'],
    link: 'https://github.com/yourusername/ecommerce', // Replace with actual link
    icon: FolderKanban,
  },
  {
    title: 'Face Recognition System',
    description: 'A platform where the users face is recognized and marks their presence in the Excel and the MySQL.', // Added context
    tags: ['Python', 'Tkinter', 'SQL', 'OpenCV', 'MySQL', 'Excel'],
    link: 'https://github.com/yourusername/task-manager', // Replace with actual link
    icon: FolderKanban,
  },
  {
    title: 'ResearchSphere',
    description: 'A platform for the students and researchers to publish their papers. Provides the AI Pre-Check functionality to check the plagiarism and Acceptance rate of the paper.', // Added context
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Shadcn/ui','GenKit'],
    link: 'https://github.com/salman-momin08/researchsphere_repo',
    icon: FolderKanban,
  },
  // Add more projects as needed
  {
    title: 'Portfolio',
    description: 'This very portfolio website, built with Next.js and Tailwind CSS to showcase my skills and projects.', // Added context
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Shadcn/ui'],
    // No link needed as it's the current site
    icon: FolderKanban,
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Pyhton', 'Java', 'Javascript', 'C programming'],
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
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase Firestore'], // Kept common ones
    icon: Code,
  },
  {
    title: 'Tools & Concepts', // Renamed category
    skills: ['Git', 'GitHub', 'Docker', 'AWS (Basic)', 'Google Cloud (Basic)', 'CI/CD (Concepts)'], // Adjusted for fresher level
    icon: Wrench,
  },
  {
    title: 'Others',
    skills: ['GenAI', 'Prompt Engineering', 'Data Structures', 'Algorithms', 'Excellent Communication', 'Leadership', 'Time Management'],
    icon: Code,
  },
];

export const educationData: EducationItem[] = [
   // Keep relevant education
   {
    institution: 'KLE SOCIETYS COLLEGE OF BCA GOKAK', 
    degree: 'Bachelor of Computer Application (BCA)', 
    period: '2020 - 2023  (CGPA: 8.92)', 
    icon: GraduationCap,
  },
  // Add M.S. if applicable
   {
    institution: 'The Oxford College of Engineering', // Replace with actual university
    degree: 'Master of Computer Application (MCA)', // Replace with actual degree
    period: '2023 - Present  (CGPA: 9.05)', // Replace with actual dates or expected graduation
    icon: GraduationCap,
  },
];

export const contactData = {
  title: "Get In Touch",
  description: "I'm actively looking for entry-level software engineering roles and eager to connect. Feel free to reach out!", // Adjusted for fresher
  email: "Khwajamainuddinmomin@gmail.com", // Replace with actual email
  socialLinks: [
    { name: 'GitHub', href: 'https://github.com/salman-momin08', icon: Github }, // Replace with actual username
    { name: 'LinkedIn', href: 'https://linkedin.com/in/khwajamainuddin-momin-9b406921b', icon: Linkedin }, // Replace with actual username
  ] as ContactLink[], // Explicitly type socialLinks
};

export const footerData = {
  text: `© ${new Date().getFullYear()} ${heroData.preferredName || heroData.name}. `
}

