export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  description: string;
  forWhom: string;
  experience: string;
  benefits: string[];
  duration: string;
  iconName: string;
  bgGradient?: string;
  popular?: boolean;
}

export interface MethodPhase {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  quote: string;
  treatment: string;
  highlight: string;
  stars: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'conceito' | 'atendimento' | 'metodo';
}

export interface BotanicalRitual {
  id: string;
  title: string;
  botanicalElement: string;
  purpose: string;
  sensoryNote: string;
}

export interface BookingFormData {
  serviceId: string;
  needFocus: string;
  preferredPeriod: 'manha' | 'tarde' | 'flexivel';
  preferredDays: string;
  name: string;
  phone: string;
  notes: string;
}

export interface StatMetric {
  value: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}
