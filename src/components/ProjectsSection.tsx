import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbulb, Search, FileText } from 'lucide-react';
import projectsImage from '@/assets/projects-image.jpg';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      textKey: 'projects.item1',
      color: 'text-sunny',
      bgColor: 'bg-sunny-light',
    },
    {
      icon: <Search className="w-6 h-6" />,
      textKey: 'projects.item2',
      color: 'text-sage',
      bgColor: 'bg-sage-light',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      textKey: 'projects.item3',
      color: 'text-coral',
      bgColor: 'bg-coral-light',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 text-8xl opacity-10">💡</div>
        <div className="absolute bottom-10 left-10 text-8xl opacity-10">🔍</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            🚀 {t('projects.title')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('projects.title')}
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Items */}
          <div className="space-y-6 order-2 lg:order-1">
            {items.map((item, index) => (
              <div
                key={index}
                className="card-playful p-5 md:p-6 flex items-start gap-4"
              >
                <div className={`flex-shrink-0 p-3 rounded-xl ${item.bgColor} ${item.color}`}>
                  {item.icon}
                </div>
                <p className="text-foreground leading-relaxed">
                  {t(item.textKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src={projectsImage}
                  alt="Project-based learning"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-sunny flex items-center justify-center text-2xl shadow-lg animate-wiggle">
                ⭐
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-sage flex items-center justify-center text-3xl shadow-lg animate-float">
                🌱
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
