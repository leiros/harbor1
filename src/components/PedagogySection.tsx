import { useLanguage } from '@/contexts/LanguageContext';
import pedagogyImage from '@/assets/pedagogy-image.jpg';

const PedagogySection = () => {
  const { t } = useLanguage();

  const references = [
    {
      title: 'pedagogy.reggio.title',
      desc: 'pedagogy.reggio.desc',
      emoji: '🎨',
      gradient: 'from-coral to-sunny',
    },
    {
      title: 'pedagogy.pikler.title',
      desc: 'pedagogy.pikler.desc',
      emoji: '🤲',
      gradient: 'from-sage to-sky',
    },
  ];

  return (
    <section id="pedagogy" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 text-6xl opacity-20">📚</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20">🌈</div>
        <div className="absolute bottom-20 left-1/4 text-4xl opacity-20">🎭</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-20">🌻</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/30 text-secondary-foreground font-semibold rounded-full text-sm mb-4">
            📖 {t('pedagogy.title')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('pedagogy.title')}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={pedagogyImage}
                alt="Pedagogical approach"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <span className="text-4xl">❤️</span>
                <div>
                  <p className="font-bold text-foreground">Child-Centered</p>
                  <p className="text-sm text-muted-foreground">Learning Approach</p>
                </div>
              </div>
            </div>
          </div>

          {/* References Cards */}
          <div className="space-y-6">
            {references.map((ref, index) => (
              <div
                key={index}
                className="card-playful p-6 md:p-8 relative overflow-hidden group"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${ref.gradient}`} />
                
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{ref.emoji}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {t(ref.title)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(ref.desc)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PedagogySection;
