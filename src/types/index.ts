export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'AWS' | 'Webdev' | 'Security' | 'Content Creation';
}