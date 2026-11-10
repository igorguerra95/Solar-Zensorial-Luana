import { Specialty, MethodPhase, Testimonial, FAQItem, BotanicalRitual, StatMetric } from '../types';

export const BRAND_INFO = {
  name: 'Solar Zensorial',
  professional: 'Luana Lopes',
  role: 'Massoterapeuta Integrativa & Especialista em Fitoterapia',
  specialization: 'Criadora dos métodos Alquimia das Raízes e Despertar das Raízes',
  academic: 'Graduanda em Naturologia',
  credentials: [
    { council: 'FENATE/RJ', code: '0080' },
    { council: 'ABRANA', code: '100647' },
    { council: 'CRTH-BR', code: '02840/25' },
  ],
  awards: '4º Lugar no Campeonato Internacional de Massoterapia (2026)',
  location: 'Rio de Janeiro – RJ (Espaço Zensorial)',
  locationCity: 'Rio de Janeiro, RJ',
  phoneDisplay: '(21) 98447-0911',
  phoneRaw: '5521984470911',
  email: 'terapiasmulticarerj@gmail.com',
  instagram: '@souluanalopes.raiz',
  instagramUrl: 'https://instagram.com/souluanalopes.raiz',
  logoUrl: '/assets/aistudio/471532333_1345124643147931_7533669427740502876_n_3517d8a1.jpg',
  tagline: 'Despertando as raízes da saúde através da alquimia entre a sabedoria da natureza e o cuidado sistêmico.',
};

export const STATS: StatMetric[] = [
  {
    value: '4º Lugar',
    label: 'Campeonato Mundial',
    description: '4º lugar no Campeonato Internacional de Massoterapia (2026)',
  },
  {
    value: '+10 Anos',
    label: 'Dedicação Terapêutica',
    description: 'Início oficial aos 17 anos com paixão pelo toque restaurador',
  },
  {
    value: '3 Registros',
    label: 'Chancelas Oficiais',
    description: 'Registrada na FENATE/RJ, ABRANA e CRTH-BR',
  },
  {
    value: '100%',
    label: 'Personalização Botânica',
    description: 'Óleos vegetais puros e sinergias fitoterápicas sob medida',
  },
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'massoterapia-avancada',
    title: 'Massoterapia Integrativa Avançada',
    subtitle: 'Precisão anatômica & liberação fascial profunda',
    tagline: 'Devolve a leveza, destrava bloqueios e pacifica o sistema nervoso.',
    badge: 'Alívio Tensional Profundo',
    description:
      'União minuciosa entre manobras de liberação miofascial profunda, descompressão articular suave e sinergias fitoterápicas nobres para devolver a liberdade de movimento.',
    forWhom:
      'Indicada para quem sofre com o estresse diário, dores tensionais crônicas (pescoço, trapézios, lombar), cefaleia tensional e esgotamento físico ou mental.',
    experience:
      'Inicia com acolhimento sensorial e aplicação de óleos vegetais aquecidos com ativos botânicos específicos para soltar pontos-gatilho e regular o tônus muscular.',
    benefits: [
      'Alívio imediato e sustentado de dores nas costas e cervical',
      'Desativação de pontos-gatilho e liberação miofascial',
      'Regulação do sistema nervoso simpático (redução do cortisol)',
      'Aumento da oxigenação tecidual e amplitude articular',
    ],
    duration: 'Sessões de 60 a 90 min',
    iconName: 'Sparkles',
    popular: true,
  },
  {
    id: 'detox-vitalidade',
    title: 'Protocolos de Desintoxicação & Vitalidade',
    subtitle: 'Detox Iônico & Práticas Naturais Regenerativas',
    tagline: 'Reset metabólico e purificação das sobrecargas do organismo.',
    badge: 'Regeneração Metabólica',
    description:
      'Abordagem sistêmica que combina a tecnologia de desintoxicação iônica celular com o poder drenante da fitoterapia botânica para promover a eliminação de toxinas.',
    forWhom:
      'Pessoas com sensação de peso corporal, retenção hídrica, fadiga crônica, lentidão digestiva ou que desejam um recomeço energético completo.',
    experience:
      'Associação de banho iônico podal, estimulação de pontos reflexos e orientações botânicas que potencializam os emunctórios naturais do organismo.',
    benefits: [
      'Descongestão linfática e estímulo à drenagem celular',
      'Sensação vívida de leveza nos membros inferiores',
      'Revitalização da disposição diária e clareza mental',
      'Equilíbrio eletrolítico e suporte à homeostase natural',
    ],
    duration: 'Sessões de 60 min',
    iconName: 'Droplets',
  },
  {
    id: 'sessao-sinergia',
    title: 'Sessão Sinergia: O Despertar das Raízes',
    subtitle: 'Protocolo Exclusivo de Cuidado Sistêmico & Alquímico',
    tagline: 'O ritual completo: da raiz que sustenta ao florescer da vitalidade.',
    badge: 'Protocolo Assinatura',
    description:
      'A expressão máxima do método autoral de Luana Lopes: integra a escuta profunda, o diagnóstico das couraças musculares, a fitoterapia personalizada e o toque consciente transformador.',
    forWhom:
      'Quem busca uma transformação estrutural, recuperação de eixos posturais e emocionais, e uma reconexão profunda com sua própria saúde e soberania.',
    experience:
      'Uma jornada completa que passa pela recepção na estação de chás, diagnóstico de eixos corporais, massoterapia terapêutica e infusão botânica personalizada.',
    benefits: [
      'Integração corpo-mente com desbloqueio de memórias somáticas',
      'Alinhamento biomecânico e relaxamento neurovegetativo',
      'Sinergia botânica exclusiva preparada para o seu biotipo',
      'Restauração duradoura da autonomia e da vitalidade vital',
    ],
    duration: 'Experiência Imersiva de 90 a 120 min',
    iconName: 'Flame',
    popular: true,
  },
];

export const METHOD_PHASES: MethodPhase[] = [
  {
    step: 1,
    title: 'A Escuta Inicial',
    subtitle: 'Horizontalidade & Diagnóstico Sensível',
    description:
      'Acolhimento humanizado onde você não é tratado como mero paciente passivo, mas como interagente consciente da própria história. Mapeamos queixas físicas, rotina, sobrecargas emocionais e estado metabólico.',
    details: [
      'Análise biomecânica e palpatória sutil',
      'Compreensão do histórico de dores e estresse',
      'Definição personalizada do objetivo da sessão',
    ],
    iconName: 'HeartHandshake',
  },
  {
    step: 2,
    title: 'O Ritual Sensorial',
    subtitle: 'Estação Botânica & Acolhimento Neurovegetativo',
    description:
      'Antes de qualquer toque na maca, desaceleramos o sistema nervoso central. Nossa estação de chás botânicos com capim-limão, hortelã e infusões ativas prepara o organismo para receber o tratamento.',
    details: [
      'Degustação de infusões botânicas terapêuticas',
      'Aromas vivos com ramos frescos de eucalipto',
      'Harmonização da iluminação e ambiência acolhedora',
    ],
    iconName: 'Coffee',
  },
  {
    step: 3,
    title: 'A Prática Integrada',
    subtitle: 'Precisão Anatômica & Alquimia Manual',
    description:
      'Aplicação de técnicas manuais de alta precisão combinadas a sinergias fitoterápicas e óleos vegetais nobres. O toque consciente atua nas camadas profundas para desatar nós e restabelecer o fluxo vital.',
    details: [
      'Liberação fascial e descompressão de nódulos',
      'Aplicação de óleos puros com sinergias medicinais',
      'Reorientação postural e sensação profunda de paz',
    ],
    iconName: 'Leaf',
  },
];

export const BOTANICAL_RITUALS: BotanicalRitual[] = [
  {
    id: 'eucalipto-fresco',
    title: 'Ramos de Eucalipto Fresco',
    botanicalElement: 'Folhas frescas selecionadas',
    purpose: 'Limpeza do campo mental e abertura das vias respiratórias profundas.',
    sensoryNote: 'Notas balsâmicas e refrescantes que induzem à presença no presente.',
  },
  {
    id: 'cha-capim-limao',
    title: 'Estação de Boas-Vindas Botânica',
    botanicalElement: 'Capim-limão, hortelã e sementes medicinais',
    purpose: 'Preparo metabólico e sedação suave do sistema nervoso autônomo.',
    sensoryNote: 'Sabor cítrico delicado com calor acolhedor que relaxa a musculatura visceral.',
  },
  {
    id: 'oleos-sinergicos',
    title: 'Óleos Vegetais Puros & Fitossinergia',
    botanicalElement: 'Bases vegetais nobres e extratos concentrados',
    purpose: 'Nutrição celular, deslizamento térmico e permeação ativa dos tecidos.',
    sensoryNote: 'Toque aveludado e fragrância herbal terrosa que ancora a mente no corpo.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Mariana Silveira',
    role: 'Arquiteta',
    location: 'Rio de Janeiro',
    treatment: 'Sessão Sinergia: O Despertar das Raízes',
    quote:
      'Cheguei com uma contratura na cervical que me acompanhava há quase dois anos e bloqueava meus dias de trabalho. O atendimento da Luana vai muito além de uma massagem tradicional: a escuta, o chá inicial e a precisão do toque me devolveram uma leveza que eu nem lembrava existir.',
    highlight: 'Livre de dores crônicas na cervical após duas sessões',
    stars: 5,
  },
  {
    id: 't2',
    author: 'Carlos Eduardo Mendes',
    role: 'Engenheiro de Software',
    location: 'Rio de Janeiro',
    treatment: 'Massoterapia Integrativa Avançada',
    quote:
      'Passo 10 horas sentado em frente à tela e vivia com dores lancinantes na lombar e ansiedade nas alturas. A técnica de liberação e os óleos fitoterápicos mudaram minha postura e até a qualidade do meu sono na mesma noite.',
    highlight: 'Sono reparador e alívio lombar imediato',
    stars: 5,
  },
  {
    id: 't3',
    author: 'Patrícia Albuquerque',
    role: 'Empresária',
    location: 'Rio de Janeiro',
    treatment: 'Protocolo Detox & Vitalidade',
    quote:
      'O cuidado e o respeito que a Luana transmite são raros. O ritual sensorial me fez desligar do ritmo caótico da cidade. Saí com o corpo desinchado, leve e com a energia completamente recarregada. Um verdadeiro refúgio no Rio.',
    highlight: 'Sensação renovadora de leveza e clareza mental',
    stars: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'conceito',
    question: 'Por que o termo "interagente" é utilizado em vez de "paciente" ou "cliente"?',
    answer:
      'O termo interagente reflete a horizontalidade e a autonomia da nossa prática: você não é um espectador passivo do seu tratamento, mas um participante ativo, consciente e soberano da sua própria jornada de saúde e reconexão corporal.',
  },
  {
    id: 'faq-2',
    category: 'atendimento',
    question: 'O que devo esperar do meu primeiro atendimento?',
    answer:
      'Seu atendimento começa com uma conversa acolhedora (escuta inicial), seguida pela nossa estação de chás botânicos e fitoterápicos para desacelerar o ritmo. Em seguida, desenvolvemos a prática corporal e terapêutica sob medida para o seu momento específico.',
  },
  {
    id: 'faq-3',
    category: 'metodo',
    question: 'As terapias substituem o acompanhamento médico tradicional?',
    answer:
      'Não. A massoterapia integrativa e as práticas naturais atuam como terapias complementares e integrativas, promovendo o bem-estar sistêmico e o alívio das dores em perfeita harmonia com o cuidado médico convencional.',
  },
  {
    id: 'faq-4',
    category: 'metodo',
    question: 'Como funcionam os rituais fitoterápicos e sensoriais?',
    answer:
      'Utilizamos óleos vegetais puros, sinergias aromáticas e chás para preparar o corpo e os sentidos. A pele e o olfato atuam diretamente sobre o sistema nervoso central, facilitando o relaxamento profundo e potencializando o toque terapêutico.',
  },
  {
    id: 'faq-5',
    category: 'atendimento',
    question: 'Como são realizados os agendamentos e onde acontecem os atendimentos?',
    answer:
      'Os atendimentos são presenciais, exclusivamente com hora marcada, em um ambiente preparado no Rio de Janeiro – RJ (Espaço Zensorial). Agendamentos e dúvidas são feitos diretamente pelo WhatsApp (21) 98447-0911.',
  },
];

export const SYMPTOM_FINDER = [
  {
    id: 'costas-lombar',
    title: 'Dores na Coluna & Lombar',
    icon: 'Activity',
    recommendedService: 'massoterapia-avancada',
    desc: 'Tensão contínua, queimação lombar ou rigidez matinal.',
  },
  {
    id: 'cervical-estresse',
    title: 'Pescoço & Ombros Travados',
    icon: 'ShieldAlert',
    recommendedService: 'sessao-sinergia',
    desc: 'Sobrecarga de estresse, tensão acumulada e cefaleia.',
  },
  {
    id: 'fadiga-retencao',
    title: 'Retenção & Cansaço Pesado',
    icon: 'Droplets',
    recommendedService: 'detox-vitalidade',
    desc: 'Pernas cansadas, retenção de líquidos e falta de disposição.',
  },
  {
    id: 'esgotamento-integral',
    title: 'Esgotamento Físico & Mental',
    icon: 'Sparkles',
    recommendedService: 'sessao-sinergia',
    desc: 'Sensação de desalinhamento geral e necessidade de renovação total.',
  },
];
