import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface Talent {
  id: string;
  name: string;
  type?: 'talent' | 'creative'; // Type to distinguish talents from creatives
  specialty: string;
  specialties?: string[]; // Add plural version for modal compatibility
  description: string;
  image?: string;
  imgs?: string[];
  location?: string;
  city?: string; // Add city field
  age?: string | number;
  birth?: string; // Add birth field
  eyeColor?: string;
  hairColor?: string;
  shoeSize?: string;
  dressSize?: string;
  clothingSize?: string; // Alias for dressSize
  height?: string;
  pronouns?: string; // e.g., "he/him", "she/her"
  bookingBase?: string; // location
  sports?: string[]; // List of sports/activities
  specialFeatures?: string[]; // Special features like "Bart, Brille"
  stats?: Record<string, any>;
  personalInfo?: Record<string, any>; // For creatives' additional info
  enabled?: boolean;
  pdfUrl?: string; // Add PDF URL field
  portfolioUrl?: string; // Portfolio/Sedcard URL
}

export async function getTalents(): Promise<Talent[]> {
  try {
    const talentsRef = collection(db, 'talents');
    const querySnapshot = await getDocs(talentsRef);

    const allItems = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Talent[];

    // Filter to only return items with type='talent' or no type (for backwards compatibility)
    return allItems.filter(item => !item.type || item.type === 'talent');
  } catch (error) {
    console.error('Error fetching talents:', error);
    throw error;
  }
}

export async function getCreatives(): Promise<Talent[]> {
  try {
    const talentsRef = collection(db, 'talents');
    const querySnapshot = await getDocs(talentsRef);

    const allItems = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Talent[];

    // Filter to only return items with type='creative'
    return allItems.filter(item => item.type === 'creative');
  } catch (error) {
    console.error('Error fetching creatives:', error);
    throw error;
  }
}

export async function getAllPeople(): Promise<Talent[]> {
  try {
    const talentsRef = collection(db, 'talents');
    const querySnapshot = await getDocs(talentsRef);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Talent[];
  } catch (error) {
    console.error('Error fetching all people:', error);
    throw error;
  }
}

export async function getTalentPdfUrl(talentId: string): Promise<string | null> {
  try {
    const talentRef = doc(db, 'talents', talentId);
    const talentDoc = await getDoc(talentRef);
    
    if (talentDoc.exists()) {
      const data = talentDoc.data();
      return data.pdfUrl || null;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching talent PDF URL:', error);
    throw error;
  }
}