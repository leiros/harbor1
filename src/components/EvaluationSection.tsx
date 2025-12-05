import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Ear, BookOpen, Heart, Star, Sparkles } from 'lucide-react';

const EvaluationSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: <Eye className="w-5 h-5" />, label: 'Attentive Observation', labelPt: 'Observação Atenta', labelEs: 'Observación Atenta' },
    { icon: <Ear className="w-5 h-5" />, label: 'Sensitive Listening', labelPt: 'Escuta Sensível', labelEs: 'Escucha Sensible' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Pedagogical Documentation', labelPt: 'Documentação Pedagógica', labelEs: 'Documentación Pedagógica' },
    { icon: <Heart className="w-5 h-5" />, label: 'Individual Progress', labelPt: 'Progresso Individual', labelEs: 'Progreso Individual' },
    { icon: <Star className="w-5 h-5" />, label: 'Collective Achievements', labelPt: 'Conquistas Coletivas', labelEs: 'Logros Colectivos' },
    { icon: <Sparkles className="w-5 h-5" />, label: 'No Grades or Comparisons', labelPt: 'Sem Notas ou Comparações', labelEs: 'Sin Notas ni Comparaciones' },
  ];

  const { language } = useLanguage();

  const getFeatureLabel = (feature: typeof features[0]) => {
    if (language === 'pt') return feature.labelPt;
    if (language === 'es') return feature.labelEs;
    return feature.label;
  };

  return (
    <section id="evaluation" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-sage/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-lavender/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-lavender/20 text-lavender font-semibold rounded-full text-sm mb-4">
              📋 {t('evaluation.title')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('evaluation.title')}
            </h2>
          </div>

          {/* Main Card */}
          <div className="card-playful p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-lavender-light/50 via-transparent to-sage-light/50 opacity-50" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lavender-light mb-6">
                <span className="text-4xl">🌈</span>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-10">
                {t('evaluation.desc')}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <span className="text-primary">{feature.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {getFeatureLabel(feature)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluationSection;
