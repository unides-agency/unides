import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface Talent {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image?: string;
  imgs?: string[];
  location?: string;
  age?: string;
  eyeColor?: string;
  hairColor?: string;
  shoeSize?: string;
  dressSize?: string;
  height?: string;
  stats?: Record<string, any>;
  enabled?: boolean;
  pdfUrl?: string; // Add PDF URL field
}

export async function getTalents(): Promise<Talent[]> {
  try {
    const talentsRef = collection(db, 'talents');
    const querySnapshot = await getDocs(talentsRef);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Talent[];
  } catch (error) {
    console.error('Error fetching talents:', error);
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