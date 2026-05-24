export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Medicine {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  mrp: number;
  discount: number;
  rxRequired: boolean;
  tag: string;
  condition: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  featured: boolean;
  tags: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}
