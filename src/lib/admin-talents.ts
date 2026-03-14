import {
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  Timestamp
} from 'firebase/firestore';
import { db, auth } from './firebase';
import type { Talent } from './talents';

export type TalentFormData = Omit<Talent, 'id'>;

// Helper function to remove undefined values from an object
function cleanUndefinedValues<T extends Record<string, any>>(obj: T): Partial<T> {
  const cleaned: Partial<T> = {};
  for (const key in obj) {
    if (obj[key] !== undefined) {
      cleaned[key] = obj[key];
    }
  }
  return cleaned;
}

export async function createTalent(data: TalentFormData): Promise<string> {
  try {
    // Verify user is authenticated
    const user = auth.currentUser;
    console.log('Creating talent with user:', user?.uid, user?.email);

    if (!user) {
      throw new Error('User not authenticated. Please log in again.');
    }

    const talentsRef = collection(db, 'talents');
    const cleanedData = cleanUndefinedValues({
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });

    console.log('Attempting to create talent with data:', cleanedData);
    const docRef = await addDoc(talentsRef, cleanedData);
    return docRef.id;
  } catch (error) {
    console.error('Error creating talent:', error);
    throw error;
  }
}

export async function updateTalent(id: string, data: Partial<TalentFormData>): Promise<void> {
  try {
    console.log('updateTalent called with data:', data);
    const talentRef = doc(db, 'talents', id);
    const cleanedData = cleanUndefinedValues({
      ...data,
      updatedAt: Timestamp.now()
    });
    console.log('Cleaned data before Firestore update:', cleanedData);
    await updateDoc(talentRef, cleanedData);
    console.log('Firestore update successful');
  } catch (error) {
    console.error('Error updating talent:', error);
    throw error;
  }
}

export async function deleteTalent(id: string): Promise<void> {
  try {
    const talentRef = doc(db, 'talents', id);
    await deleteDoc(talentRef);
  } catch (error) {
    console.error('Error deleting talent:', error);
    throw error;
  }
}

export async function getTalentById(id: string): Promise<Talent | null> {
  try {
    const talentRef = doc(db, 'talents', id);
    const talentDoc = await getDoc(talentRef);

    if (talentDoc.exists()) {
      return {
        id: talentDoc.id,
        ...talentDoc.data()
      } as Talent;
    }

    return null;
  } catch (error) {
    console.error('Error fetching talent:', error);
    throw error;
  }
}

async function getAuthToken(): Promise<string> {
  // Wait for auth to be ready
  await new Promise<void>((resolve) => {
    if (auth.currentUser) {
      resolve();
    } else {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve();
      });
    }
  });

  const user = auth.currentUser;
  console.log('Getting auth token for user:', user?.uid, user?.email);

  if (!user) {
    console.error('No current user when trying to get auth token');
    throw new Error('User not authenticated. Please refresh the page and try again.');
  }

  try {
    const token = await user.getIdToken();
    console.log('Got auth token, length:', token.length);
    return token;
  } catch (error) {
    console.error('Error getting ID token:', error);
    throw new Error('Failed to get authentication token');
  }
}

export async function uploadTalentImage(
  file: File,
  talentId: string,
  imageType: 'main' | 'gallery'
): Promise<string> {
  try {
    const token = await getAuthToken();

    // Step 1: Get pre-signed upload URL from server
    const urlResponse = await fetch('/api/get-upload-url', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type,
        talentId,
        uploadType: imageType,
      }),
    });

    if (!urlResponse.ok) {
      const error = await urlResponse.json();
      throw new Error(error.error || 'Failed to get upload URL');
    }

    const { uploadUrl, fileUrl } = await urlResponse.json();

    // Step 2: Upload directly to S3 using pre-signed URL
    const uploadResponse = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    });

    if (!uploadResponse.ok) {
      throw new Error(`Failed to upload file to S3: ${uploadResponse.statusText}`);
    }

    // Step 3: Return the public file URL
    return fileUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

export async function uploadTalentPdf(file: File, talentId: string): Promise<string> {
  try {
    console.log('Starting PDF upload for talent:', talentId);
    const token = await getAuthToken();

    // Step 1: Get pre-signed upload URL from server
    console.log('Getting pre-signed upload URL...');
    const urlResponse = await fetch('/api/get-upload-url', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type,
        talentId,
        uploadType: 'pdf',
      }),
    });

    if (!urlResponse.ok) {
      const error = await urlResponse.json();
      console.error('Failed to get upload URL:', error);
      throw new Error(error.error || 'Failed to get upload URL');
    }

    const { uploadUrl, fileUrl } = await urlResponse.json();
    console.log('Got pre-signed URL, uploading to S3...');

    // Step 2: Upload directly to S3 using pre-signed URL
    const uploadResponse = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    });

    if (!uploadResponse.ok) {
      console.error('S3 upload failed with status:', uploadResponse.status);
      throw new Error(`Failed to upload PDF to S3: ${uploadResponse.statusText}`);
    }

    console.log('PDF uploaded successfully:', fileUrl);
    // Step 3: Return the public file URL
    return fileUrl;
  } catch (error) {
    console.error('Error uploading PDF:', error);
    throw error;
  }
}
