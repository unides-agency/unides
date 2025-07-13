import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface Creative {
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
  pdfUrl?: string; // Add PDF URL field
}

export async function getCreatives(): Promise<Creative[]> {
  try {
    const creativesRef = collection(db, 'creatives');
    const querySnapshot = await getDocs(creativesRef);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Creative[];
  } catch (error) {
    console.error('Error fetching creatives:', error);
    throw error;
  }
}

export async function getCreativePdfUrl(creativeId: string): Promise<string | null> {
  try {
    const creativeRef = doc(db, 'creatives', creativeId);
    const creativeDoc = await getDoc(creativeRef);
    
    if (creativeDoc.exists()) {
      const data = creativeDoc.data();
      return data.pdfUrl || null;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching creative PDF URL:', error);
    throw error;
  }
}