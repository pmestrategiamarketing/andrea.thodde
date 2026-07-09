export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BookingSlot {
  time: string;
  available: boolean;
}

export interface BookingData {
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}
