import { BenefitCard, Testimonial, FaqItem } from "./types";

export const HERO_BULLETS = [
  "Asesoría personalizada según tus objetivos.",
  "Explicaciones claras y sin presiones.",
  "Acompañamiento antes, durante y después de contratar tu póliza.",
  "Compromiso con la educación financiera y la transparencia.",
  "Soluciones adaptadas a cada etapa de tu vida."
];

export const BENEFITS: BenefitCard[] = [
  {
    id: "proteccion-familiar",
    title: "Protección Familiar",
    description: "Garantiza el bienestar financiero de tus seres queridos en caso de imprevistos, con un respaldo económico robusto y seguro.",
    iconName: "Shield"
  },
  {
    id: "ahorro-inteligente",
    title: "Ahorro Inteligente",
    description: "Acumula valor en efectivo con ventajas fiscales que puedes retirar en vida para complementar tu retiro, educación o proyectos.",
    iconName: "TrendingUp"
  },
  {
    id: "crecimiento-patrimonio",
    title: "Crecimiento del Patrimonio",
    description: "Aprovecha el rendimiento de los índices bursátiles (como el S&P 500) con la seguridad de no perder nunca tu capital principal.",
    iconName: "BarChart3"
  },
  {
    id: "asesoria-personalizada",
    title: "Asesoría Personalizada",
    description: "Estrategias diseñadas exclusivamente para tu situación financiera, adaptándonos a tus metas sin compromisos ni presiones.",
    iconName: "UserCheck"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Qué es un IUL y cómo funciona?",
    answer: "Un IUL (Indexed Universal Life) es una póliza de seguro de vida permanente que combina la protección de un beneficio por fallecimiento con la acumulación de valor en efectivo. Este valor crece indexado al rendimiento de un índice bursátil (como el S&P 500). Lo innovador es que cuenta con un 'piso del 0%', lo que garantiza que si el mercado cae, tu dinero no pierde valor, y un 'techo' (cap) que limita el rendimiento máximo, brindando equilibrio y protección absoluta."
  },
  {
    id: "faq-2",
    question: "¿Cuánto puedo ganar con un IUL?",
    answer: "El potencial de ganancias está ligado directamente al comportamiento del índice seleccionado. Históricamente, las pólizas IUL han entregado rendimientos promedio anuales de entre el 6% y el 8% a largo plazo. Al estar exento de pérdidas de capital por caídas de mercado, tu interés compuesto trabaja de forma mucho más eficiente que en una cuenta de inversión directa tradicional."
  },
  {
    id: "faq-3",
    question: "¿Qué pasa si dejo de pagar?",
    answer: "Las pólizas IUL ofrecen una gran flexibilidad de primas. Si en algún momento necesitas pausar o disminuir tus aportaciones, puedes hacerlo siempre y cuando el valor en efectivo acumulado en tu póliza sea suficiente para cubrir los costos internos del seguro. Esto te brinda una red de seguridad inigualable en periodos de transición profesional o personal."
  },
  {
    id: "faq-4",
    question: "¿Mi dinero está protegido?",
    answer: "Sí, absolutamente. Gracias a la garantía del piso de preservación del 0%, tu capital acumulado está 100% blindado contra las volatilidades del mercado de valores. Además, las compañías aseguradoras que emiten pólizas IUL son instituciones financieras de primer nivel reguladas rigurosamente, lo que asegura solvencia y confiabilidad para tu patrimonio familiar."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Carlos Mendoza",
    role: "Director de Operaciones",
    company: "Innova Group",
    rating: 5,
    comment: "Andrea cambió por completo mi visión sobre los seguros. Explicó de forma tan transparente cómo funciona la póliza IUL que finalmente pude tomar la decisión con total tranquilidad. Su acompañamiento ha sido impecable.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "test-2",
    name: "Sofía Martínez",
    role: "Consultora Financiera Independiente",
    company: "Finanzas Claras",
    rating: 5,
    comment: "Como profesional en finanzas, soy muy exigente con las opciones de ahorro. El plan de ahorro indexado que estructuramos con Andrea superó mis expectativas: protección fiscal, crecimiento sólido y cero riesgo de caídas bursátiles.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "test-3",
    name: "Dr. Javier Ruiz",
    role: "Médico Especialista",
    company: "Centro de Diagnóstico",
    rating: 5,
    comment: "Lo que más valoro de Andrea es su paciencia y honestidad. Nunca sentí presión para firmar; en cambio, se enfocó en educarme financieramente. Ahora sé que mi familia y mi retiro están completamente respaldados.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const IUL_COMPARISON_DATA = [
  { year: "Año 1", market: 12, iul: 10, note: "Mercado alcista, IUL crece con límite (Cap)" },
  { year: "Año 2", market: -15, iul: 0, note: "Caída del mercado, IUL protegido en 0% (Floor)" },
  { year: "Año 3", market: 15, iul: 10, note: "Recuperación, IUL vuelve a sumar" },
  { year: "Año 4", market: -8, iul: 0, note: "Pérdida de mercado, IUL protegido" },
  { year: "Año 5", market: 22, iul: 10, note: "Mercado fuerte, IUL crece sólidamente" },
];
