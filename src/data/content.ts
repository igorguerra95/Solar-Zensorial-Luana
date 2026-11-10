import { Specialty, MethodPhase, Testimonial, FAQItem, BotanicalRitual, StatMetric } from '../types';
import photoClinicalImg from '../assets/luana-jaleco.jpg';
import photoConsultorioImg from '../assets/luana-consultorio.jpg';

// Logo inline em base64 (garante 100% de disponibilidade no GitHub, GitHub Pages e qualquer domínio sem erro 404)
const LOGO_INLINE_BASE64 =
  'data:image/jpeg;base64,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';

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
  logoUrl: LOGO_INLINE_BASE64,
  photoClinical: photoClinicalImg,
  photoConsultorio: photoConsultorioImg,
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
