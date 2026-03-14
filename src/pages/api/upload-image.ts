import type { APIRoute } from 'astro';
import { uploadToS3, generateS3Key } from '../../lib/s3';


export const POST: APIRoute = async ({ request }) => {
  try {
    // Check authentication (verify Firebase token)
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Parse form data
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const talentId = formData.get('talentId') as string;
    const imageType = formData.get('imageType') as 'main' | 'gallery';

    if (!file || !talentId || !imageType) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return new Response(JSON.stringify({ error: 'File must be an image' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate S3 key and upload
    const key = generateS3Key(talentId, file.name, imageType);
    const url = await uploadToS3(file, key, file.type);

    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error uploading image:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to upload image' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
