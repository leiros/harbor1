import { useLanguage } from '@/contexts/LanguageContext';

const CurriculumSection = () => {
  const { t } = useLanguage();

  const areas = [
    {
      emoji: '🧠',
      titleKey: 'curriculum.cognitive.title',
      descKey: 'curriculum.cognitive.desc',
      bgColor: 'bg-sky-light',
      borderColor: 'border-sky/30',
      hoverBorder: 'hover:border-sky',
    },
    {
      emoji: '🤝',
      titleKey: 'curriculum.socioemotional.title',
      descKey: 'curriculum.socioemotional.desc',
      bgColor: 'bg-coral-light',
      borderColor: 'border-coral/30',
      hoverBorder: 'hover:border-coral',
    },
    {
      emoji: '🎨',
      titleKey: 'curriculum.expressive.title',
      descKey: 'curriculum.expressive.desc',
      bgColor: 'bg-lavender-light',
      borderColor: 'border-lavender/30',
      hoverBorder: 'hover:border-lavender',
    },
    {
      emoji: '🏃',
      titleKey: 'curriculum.motor.title',
      descKey: 'curriculum.motor.desc',
      bgColor: 'bg-sage-light',
      borderColor: 'border-sage/30',
      hoverBorder: 'hover:border-sage',
    },
    {
      emoji: '🕊️',
      titleKey: 'curriculum.ethical.title',
      descKey: 'curriculum.ethical.desc',
      bgColor: 'bg-sunny-light',
      borderColor: 'border-sunny/30',
      hoverBorder: 'hover:border-sunny',
    },
  ];

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-background relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-lavender/10 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-sunny/10 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-accent/30 text-accent-foreground font-semibold rounded-full text-sm mb-4">
            🎯 {t('curriculum.title')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('curriculum.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('curriculum.intro')}
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`card-playful p-6 border-2 ${area.borderColor} ${area.hoverBorder} transition-all duration-300 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Emoji Header */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${area.bgColor} mb-5`}>
                <span className="text-3xl">{area.emoji}</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t(area.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(area.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
