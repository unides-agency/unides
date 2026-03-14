export interface FooterLink {
  description: string;  // The accessible description (e.g., "Follow Unides on Instagram")
  icon: string;        // The icon name (e.g., "fa-brands:instagram")
  url: string;         // The link URL (e.g., "https://instagram.com/unidesagency")
}

// Add interfaces for your data models
// Note: Talents and Creatives are now in the same collection with a 'type' field
export interface Talent {
  id: string;
  name: string;
  type?: 'talent' | 'creative'; // Distinguish between talents and creatives
  specialty: string;
  specialties?: string[]; // For creatives with multiple specialties
  description: string;
  image?: string;
  imgs?: string[];
  location?: string;
  city?: string;
  birth?: string;
  eyeColor?: string;
  hairColor?: string;
  shoeSize?: string;
  dressSize?: string;
  clothingSize?: string;
  height?: string;
  age?: number | string;
  pronouns?: string;
  bookingBase?: string;
  sports?: string[];
  specialFeatures?: string[];
  personalInfo?: Record<string, any>; // For creatives' additional info
  stats?: Record<string, any>;
  enabled?: boolean;
  pdfUrl?: string;
  portfolioUrl?: string;
}

// Creative is now just an alias for Talent (same collection)
export type Creative = Talent;
