import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Brain, Sparkles, TreePine } from 'lucide-react';

const PrinciplesSection = () => {
  const { t } = useLanguage();

  const principles = [
    {
      icon: <TreePine className="w-8 h-8" />,
      titleKey: 'principles.connection.title',
      descKey: 'principles.connection.desc',
      color: 'bg-sage-light',
      iconColor: 'text-sage',
      borderColor: 'border-sage/30',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      titleKey: 'principles.values.title',
      descKey: 'principles.values.desc',
      color: 'bg-coral-light',
      iconColor: 'text-coral',
      borderColor: 'border-coral/30',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      titleKey: 'principles.autonomy.title',
      descKey: 'principles.autonomy.desc',
      color: 'bg-lavender-light',
      iconColor: 'text-lavender',
      borderColor: 'border-lavender/30',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      titleKey: 'principles.experiences.title',
      descKey: 'principles.experiences.desc',
      color: 'bg-sunny-light',
      iconColor: 'text-sunny',
      borderColor: 'border-sunny/30',
    },
  ];

  return (
    <section id="principles" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sage/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-coral/10 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            🌟 {t('principles.title')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('principles.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('principles.intro')}
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`card-playful p-6 md:p-8 ${principle.borderColor} hover:border-primary/30`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl ${principle.color} ${principle.iconColor} mb-5`}>
                {principle.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {t(principle.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(principle.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
