
import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Wrench, FolderKanban, Code, Target, ExternalLink, Brain, Award, User, Cloud, BookOpen, Puzzle, Terminal, Laptop, Laptop2, Laptop2Icon } from 'lucide-react';

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
  webLink?: string;
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

export interface AchievementItem {
  profile: any;
  name: string;
  href: string;
  issuer?: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Learning', href: '#learning' },
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
    role: 'Data Analyst Intern',
    period: 'Nov 2024 - Jan 2025',
    description: [
      'Learnt various technologies of Data Preprocessing and Visualizations.',
      'Learnt building dashboards using the PowerBI.',
      'Engineered AQI project to find the insights of the top 5 metropolitan cities.',
      'Helps the users to analyze better air quality to live in. ',
    ],
    icon: Briefcase,
  },
];


export const projectsData: ProjectItem[] = [
  {
    title: 'Online Cake Shop',
    description: 'A engineered to help the users and vendors to serve the customers on their customized dates along with the customized ingridients and flavors of the cakes.',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Xampp', 'SQL'],
    icon: FolderKanban,
  },
  {
    title: 'Face Recognition System',
    description: 'A platform where the users face is recognized and marks their presence in the Excel and the MySQL.',
    tags: ['Python', 'Tkinter', 'SQL', 'OpenCV', 'MySQL', 'Excel'],
    link: 'https://github.com/salman-momin08/Face_recognition',
    icon: FolderKanban,
  },
  {
    title: 'ResearchSphere',
    description: 'A platform for the students and researchers to publish their papers. Provides the AI Pre-Check functionality to check the plagiarism and Acceptance rate of the paper.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Shadcn/ui','GenKit'],
    link: 'https://github.com/salman-momin08/researchsphere_repo',
    webLink: 'https://researchsphere-two.vercel.app',
    icon: FolderKanban,
  },
  {
    title: 'Csv data Analyzer',
    description: 'The is engineered to allow the users to find the insights of the data for future trends, business patters etc. It will allow the users to upload one .csv or the user can add two files for the comparison based on the similar columns present.',
    tags: ['Python', 'Streamlit', 'Plotly'],
    link: 'https://github.com/salman-momin08/AQI',
    webLink: 'https://datacsvanalyzer.streamlit.app/',
    icon: FolderKanban,
  },
  {
    title: 'WeatherEyes',
    description: 'An Weather app designed the weather app in such a way that it uses the JWT authentication for the users. It will save the searches, modify the search, and also can delete the searches. Randomly AI generate the background image based on the current weather on the place. Shows further 5 days forecast. ',
    tags: ['NextJS', 'React', 'Tailwind CSS', 'TypeScript', 'Shadcn/ui', 'Genkit','MongoDB'],
    link: 'https://github.com/salman-momin08/weatherapp',
    webLink: 'https://weatherapp-five-omega.vercel.app',
    icon: FolderKanban,
  },
  {
    title: 'Portfolio',
    description: 'This very portfolio website, built with Next.js and Tailwind CSS to showcase my skills and projects.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Shadcn/ui'],
    link: 'https://github.com/salman-momin08/myportfolio',
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
    period: '2023 - Present  (CGPA: 9.24)',
    icon: GraduationCap,
  },
];

export const learningData = {
  title: "Continuous Learning & Problem Solving",
  description: "I'm passionate about continuously expanding my skillset and tackling challenging problems. Platforms like LeetCode are invaluable for honing my data structures and algorithms knowledge. Below are some of my achievements and ongoing learning efforts.",
  achievementsSubtitle: "Certificates & Achievements",
  achievements: [
    {
      name: "LeetCode Profile",
      href: "https://leetcode.com/u/salman_0822/",
      profile: "LeetCode",
      icon: Laptop2Icon,
    },
    {
      name: "Google Cloud Skills Boost Profile",
      href: "https://www.cloudskillsboost.google/public_profiles/9d8c4976-0a3d-49e3-8ee2-8bdc82e36a32",
      icon: Cloud,
    },
    {
      name: "Python Crash Course Certificate",
      href: "https://drive.google.com/file/d/1jE--sHyw6NNpHP3VOAqTodpr5chhd71b/view?usp=drive_lin",
      issuer: "Coursera",
      icon: Award,
    },
    {
      name: "Explore Generative AI with the Gemini API in Vertex AI Badge",
      href: "https://www.cloudskillsboost.google/public_profiles/9d8c4976-0a3d-49e3-8ee2-8bdc82e36a32/badges/15047244",
      issuer: "GoogleCloud",
      icon: Award,
    },
    {
      name: "Build Real World AI Applications with Gemini and Imagen",
      href: "https://www.cloudskillsboost.google/public_profiles/9d8c4976-0a3d-49e3-8ee2-8bdc82e36a32/badges/15043630",
      issuer: "GoogleCloud",
      icon: Award,
    },
    {
      name: "Prompt Design in Vertex AI",
      href: "https://www.cloudskillsboost.google/public_profiles/9d8c4976-0a3d-49e3-8ee2-8bdc82e36a32/badges/15021425",
      issuer: "GoogleCloud",
      icon: Award,
    },
  ] as AchievementItem[],
  icon: Brain,
};

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
