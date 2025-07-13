export interface FooterLink {
  description: string;  // The accessible description (e.g., "Follow Unides on Instagram")
  icon: string;        // The icon name (e.g., "fa-brands:instagram")
  url: string;         // The link URL (e.g., "https://instagram.com/unidesagency")
}

// Add interfaces for your data models
export interface Talent {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image?: string;
  imgs?: string[];
  location?: string;
  born?: string;
  eyeColor?: string;
  hairColor?: string;
  shoeSize?: string;
  dressSize?: string;
  height?: string;
  stats?: Record<string, any>;
  enabled?: boolean;
  pdfUrl?: string;
}

export interface Creative {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image?: string;
  imgs?: string[];
  location?: string;
  born?: string;
  specialties?: string[];
  stats?: Record<string, any>;
  enabled?: boolean;
  pdfUrl?: string;
}
