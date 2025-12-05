import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import PrinciplesSection from '@/components/PrinciplesSection';
import PedagogySection from '@/components/PedagogySection';
import CurriculumSection from '@/components/CurriculumSection';
import ProjectsSection from '@/components/ProjectsSection';
import EvaluationSection from '@/components/EvaluationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroCarousel />
          <PrinciplesSection />
          <PedagogySection />
          <CurriculumSection />
          <ProjectsSection />
          <EvaluationSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
