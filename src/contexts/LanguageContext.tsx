import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
    es: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', pt: 'Início', es: 'Inicio' },
  'nav.principles': { en: 'Principles', pt: 'Princípios', es: 'Principios' },
  'nav.pedagogy': { en: 'Pedagogy', pt: 'Pedagogia', es: 'Pedagogía' },
  'nav.curriculum': { en: 'Curriculum', pt: 'Currículo', es: 'Currículo' },
  'nav.projects': { en: 'Projects', pt: 'Projetos', es: 'Proyectos' },
  'nav.evaluation': { en: 'Evaluation', pt: 'Avaliação', es: 'Evaluación' },
  'nav.contact': { en: 'Contact', pt: 'Contato', es: 'Contacto' },

  // Hero Section
  'hero.title': { 
    en: 'Where Learning Blossoms', 
    pt: 'Onde o Aprendizado Floresce', 
    es: 'Donde el Aprendizaje Florece' 
  },
  'hero.subtitle': { 
    en: 'Nurturing curious minds through play, nature, and meaningful experiences', 
    pt: 'Nutrindo mentes curiosas através do brincar, da natureza e de experiências significativas', 
    es: 'Nutriendo mentes curiosas a través del juego, la naturaleza y experiencias significativas' 
  },
  'hero.cta': { en: 'Discover Our Approach', pt: 'Descubra Nossa Abordagem', es: 'Descubre Nuestro Enfoque' },

  // Guiding Principles
  'principles.title': { en: 'Guiding Principles', pt: 'Princípios Norteadores', es: 'Principios Rectores' },
  'principles.intro': { 
    en: 'Our curricular proposal is based on four essential pillars:', 
    pt: 'A proposta curricular está fundamentada em quatro pilares essenciais:', 
    es: 'La propuesta curricular se fundamenta en cuatro pilares esenciales:' 
  },
  'principles.connection.title': { 
    en: "Connection with the child's world reality", 
    pt: 'Conexão com a realidade de mundo da criança', 
    es: 'Conexión con la realidad del mundo del niño' 
  },
  'principles.connection.desc': { 
    en: 'Learning starts from active listening to children, their experiences, interests and social context, promoting real connections between content and their lives.', 
    pt: 'A aprendizagem parte da escuta ativa das crianças, suas experiências, interesses e contexto social, promovendo vínculos reais entre o conteúdo e suas vidas.', 
    es: 'El aprendizaje parte de la escucha activa de los niños, sus experiencias, intereses y contexto social, promoviendo vínculos reales entre el contenido y sus vidas.' 
  },
  'principles.values.title': { 
    en: 'Christian Values', 
    pt: 'Valores cristãos', 
    es: 'Valores cristianos' 
  },
  'principles.values.desc': { 
    en: 'Christian values — such as love, respect, empathy, cooperation, generosity, forgiveness and justice — are lived daily as the ethical foundation of coexistence, without religious imposition.', 
    pt: 'Os valores do cristianismo — como amor, respeito, empatia, cooperação, generosidade, perdão e justiça — são vividos no dia a dia como fundamento ético da convivência, sem imposição religiosa.', 
    es: 'Los valores del cristianismo — como amor, respeto, empatía, cooperación, generosidad, perdón y justicia — se viven en el día a día como fundamento ético de la convivencia, sin imposición religiosa.' 
  },
  'principles.autonomy.title': { 
    en: 'Autonomy of thought and creation', 
    pt: 'Autonomia de pensamento e criação', 
    es: 'Autonomía de pensamiento y creación' 
  },
  'principles.autonomy.desc': { 
    en: 'Children are seen as thinking, curious and creative subjects. They are encouraged to make decisions, experiment, solve problems and express their ideas freely and respectfully.', 
    pt: 'As crianças são vistas como sujeitos pensantes, curiosos e criativos. São incentivadas a tomar decisões, experimentar, resolver problemas e expressar suas ideias de forma livre e respeitosa.', 
    es: 'Los niños son vistos como sujetos pensantes, curiosos y creativos. Se les anima a tomar decisiones, experimentar, resolver problemas y expresar sus ideas de forma libre y respetuosa.' 
  },
  'principles.experiences.title': { 
    en: 'Meaningful experiences', 
    pt: 'Vivências significativas', 
    es: 'Vivencias significativas' 
  },
  'principles.experiences.desc': { 
    en: 'Learning happens in a concrete and contextualized way, through play, nature, art, body, relationships and sensory and affective experiences.', 
    pt: 'A aprendizagem acontece de forma concreta e contextualizada, por meio do brincar, da natureza, da arte, do corpo, das relações e das experiências sensoriais e afetivas.', 
    es: 'El aprendizaje ocurre de forma concreta y contextualizada, a través del juego, la naturaleza, el arte, el cuerpo, las relaciones y las experiencias sensoriales y afectivas.' 
  },

  // Pedagogical References
  'pedagogy.title': { en: 'Pedagogical References', pt: 'Referenciais Pedagógicos', es: 'Referencias Pedagógicas' },
  'pedagogy.reggio.title': { en: 'Reggio Emilia', pt: 'Reggio Emilia', es: 'Reggio Emilia' },
  'pedagogy.reggio.desc': { 
    en: "Influence on the appreciation of active listening, the environment as educator, process documentation and the construction of projects based on children's interests.", 
    pt: 'Influência na valorização da escuta ativa, no ambiente como educador, na documentação do processo e na construção de projetos a partir dos interesses das crianças.', 
    es: 'Influencia en la valorización de la escucha activa, el ambiente como educador, la documentación del proceso y la construcción de proyectos a partir de los intereses de los niños.' 
  },
  'pedagogy.pikler.title': { en: 'Emmi Pikler', pt: 'Emmi Pikler', es: 'Emmi Pikler' },
  'pedagogy.pikler.desc': { 
    en: "Foundation in respect for the child's time, freedom of movement, affective interactions and care as an integral part of development.", 
    pt: 'Fundamentação no respeito ao tempo da criança, na liberdade de movimento, nas interações afetivas e no cuidado como parte integral do desenvolvimento.', 
    es: 'Fundamentación en el respeto al tiempo del niño, la libertad de movimiento, las interacciones afectivas y el cuidado como parte integral del desarrollo.' 
  },

  // Curriculum Areas
  'curriculum.title': { en: 'Human Behavior Areas as Curricular Structure', pt: 'Áreas do Comportamento Humano como Estrutura Curricular', es: 'Áreas del Comportamiento Humano como Estructura Curricular' },
  'curriculum.intro': { 
    en: 'Learning will be promoted through projects that organically articulate the main areas of human behavior, providing global development:', 
    pt: 'A aprendizagem será promovida por meio de projetos que articulem de forma orgânica as principais áreas do comportamento humano, proporcionando um desenvolvimento global:', 
    es: 'El aprendizaje será promovido a través de proyectos que articulen de forma orgánica las principales áreas del comportamiento humano, proporcionando un desarrollo global:' 
  },
  'curriculum.cognitive.title': { en: 'Cognitive Area', pt: 'Área Cognitiva', es: 'Área Cognitiva' },
  'curriculum.cognitive.desc': { 
    en: 'Stimulation of reasoning, language, problem solving and construction of diverse knowledge (mathematics, nature, science, etc.). Activities such as experimentation, investigation, exploration of objects and phenomena, storytelling, logic and language games.', 
    pt: 'Estímulo ao raciocínio, à linguagem, à solução de problemas e à construção de conhecimentos diversos (matemática, natureza, ciência, etc.). Atividades como experimentações, investigação, exploração de objetos e fenômenos, narração de histórias, jogos de lógica e linguagem.', 
    es: 'Estímulo al razonamiento, al lenguaje, a la solución de problemas y a la construcción de conocimientos diversos (matemáticas, naturaleza, ciencia, etc.). Actividades como experimentaciones, investigación, exploración de objetos y fenómenos, narración de historias, juegos de lógica y lenguaje.' 
  },
  'curriculum.socioemotional.title': { en: 'Socioemotional Area', pt: 'Área Socioemocional', es: 'Área Socioemocional' },
  'curriculum.socioemotional.desc': { 
    en: 'Development of empathy, self-regulation, respect for others and identity construction. Experiences involving care for others, cooperation, active listening, expression of feelings, conflict resolution.', 
    pt: 'Desenvolvimento da empatia, da autorregulação, do respeito ao outro e da construção de identidade. Vivências que envolvem o cuidado com o outro, cooperação, escuta ativa, expressão de sentimentos, resolução de conflitos.', 
    es: 'Desarrollo de la empatía, la autorregulación, el respeto al otro y la construcción de identidad. Vivencias que involucran el cuidado del otro, cooperación, escucha activa, expresión de sentimientos, resolución de conflictos.' 
  },
  'curriculum.expressive.title': { en: 'Expressive and Creative Area', pt: 'Área Expressiva e Criativa', es: 'Área Expresiva y Creativa' },
  'curriculum.expressive.desc': { 
    en: 'Stimulation of artistic, bodily, musical and symbolic expression. Proposals with diverse materials, visual arts, music, dance, dramatization and free symbolic language.', 
    pt: 'Estímulo à expressão artística, corporal, musical e simbólica. Propostas com materiais diversos, artes visuais, música, dança, dramatização e linguagem simbólica livre.', 
    es: 'Estímulo a la expresión artística, corporal, musical y simbólica. Propuestas con materiales diversos, artes visuales, música, danza, dramatización y lenguaje simbólico libre.' 
  },
  'curriculum.motor.title': { en: 'Motor Area', pt: 'Área Motora', es: 'Área Motora' },
  'curriculum.motor.desc': { 
    en: 'Development of gross and fine motor coordination, balance, rhythm, body awareness and physical autonomy. Activities with free movement, circuits, object manipulation, outdoor play and self-care practices.', 
    pt: 'Desenvolvimento da coordenação motora ampla e fina, equilíbrio, ritmo, consciência corporal e autonomia física. Atividades com movimento livre, circuitos, manipulação de objetos, brincadeiras ao ar livre e práticas de autocuidado.', 
    es: 'Desarrollo de la coordinación motora gruesa y fina, equilibrio, ritmo, conciencia corporal y autonomía física. Actividades con movimiento libre, circuitos, manipulación de objetos, juegos al aire libre y prácticas de autocuidado.' 
  },
  'curriculum.ethical.title': { en: 'Ethical-Spiritual Area', pt: 'Área Ético-Espiritual', es: 'Área Ético-Espiritual' },
  'curriculum.ethical.desc': { 
    en: "Formation of values based on the experience of Jesus' teachings, adapted to children's language with a universal approach. Stories, conversation circles, symbolic celebrations, care actions, listening and dialogue about good, love and respect.", 
    pt: 'Formação de valores a partir da vivência dos ensinamentos de Jesus, adaptados à linguagem infantil e com enfoque universal. Histórias, rodas de conversa, celebrações simbólicas, ações de cuidado, escuta e diálogo sobre o bem, o amor e o respeito.', 
    es: 'Formación de valores a partir de la vivencia de las enseñanzas de Jesús, adaptadas al lenguaje infantil y con enfoque universal. Historias, ruedas de conversación, celebraciones simbólicas, acciones de cuidado, escucha y diálogo sobre el bien, el amor y el respeto.' 
  },

  // Projects
  'projects.title': { en: 'Organization by Projects', pt: 'Organização por Projetos', es: 'Organización por Proyectos' },
  'projects.item1': { 
    en: "Projects are built from children's real interests, everyday situations or themes proposed by the school community.", 
    pt: 'Os projetos são construídos a partir de interesses reais das crianças, situações do cotidiano ou temas propostos pela comunidade escolar.', 
    es: 'Los proyectos se construyen a partir de intereses reales de los niños, situaciones cotidianas o temas propuestos por la comunidad escolar.' 
  },
  'projects.item2': { 
    en: 'Each project is based on a guiding question and evolves with investigations, records, hypothesis creation and productions.', 
    pt: 'Cada projeto tem como base uma pergunta norteadora e evolui com investigações, registros, criação de hipóteses e produções.', 
    es: 'Cada proyecto tiene como base una pregunta orientadora y evoluciona con investigaciones, registros, creación de hipótesis y producciones.' 
  },
  'projects.item3': { 
    en: 'Project activities integrate all areas above and are documented to reflect the learning process.', 
    pt: 'As atividades dos projetos integram todas as áreas acima e são documentadas para refletir o processo de aprendizagem.', 
    es: 'Las actividades de los proyectos integran todas las áreas anteriores y se documentan para reflejar el proceso de aprendizaje.' 
  },

  // Evaluation
  'evaluation.title': { en: 'Evaluation', pt: 'Avaliação', es: 'Evaluación' },
  'evaluation.desc': { 
    en: 'Evaluation is qualitative, continuous and based on attentive observation, sensitive listening and pedagogical documentation. It focuses on the development process and individual and collective achievements, without comparisons or grades.', 
    pt: 'A avaliação é qualitativa, contínua e baseada na observação atenta, na escuta sensível e na documentação pedagógica. Foca-se no processo de desenvolvimento e nas conquistas individuais e coletivas, sem comparações ou notas.', 
    es: 'La evaluación es cualitativa, continua y basada en la observación atenta, la escucha sensible y la documentación pedagógica. Se enfoca en el proceso de desarrollo y en los logros individuales y colectivos, sin comparaciones ni notas.' 
  },

  // Footer
  'footer.rights': { en: 'All rights reserved', pt: 'Todos os direitos reservados', es: 'Todos los derechos reservados' },
  'footer.contact': { en: 'Contact Us', pt: 'Entre em Contato', es: 'Contáctenos' },
  'footer.address': { en: 'Address', pt: 'Endereço', es: 'Dirección' },
  'footer.phone': { en: 'Phone', pt: 'Telefone', es: 'Teléfono' },
  'footer.email': { en: 'Email', pt: 'E-mail', es: 'Correo' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
