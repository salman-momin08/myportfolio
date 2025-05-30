import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ExperienceSection } from '@/components/sections/experience';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsSection } from '@/components/sections/skills';
import { LearningSection } from '@/components/sections/learning'; // Added import
import { EducationSection } from '@/components/sections/education';
import { ContactSection } from '@/components/sections/contact';

export default function PortfolioPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LearningSection /> {/* Added LearningSection */}
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
