import type { APIRoute } from 'astro';
import { generatePresignedUploadUrl, generateS3Key } from '../../lib/s3';


export const POST: APIRoute = async ({ request }) => {
  try {
    // Check authentication
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Parse request body
    const body = await request.json();
    const { filename, contentType, talentId, uploadType } = body;

    if (!filename || !contentType || !talentId || !uploadType) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate upload type
    if (!['main', 'gallery', 'pdf'].includes(uploadType)) {
      return new Response(JSON.stringify({ error: 'Invalid upload type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate content type
    const allowedTypes = uploadType === 'pdf'
      ? ['application/pdf']
      : ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

    if (!allowedTypes.includes(contentType)) {
      return new Response(JSON.stringify({
        error: `Invalid file type. Allowed: ${allowedTypes.join(', ')}`
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate S3 key
    const key = generateS3Key(talentId, filename, uploadType as 'main' | 'gallery' | 'pdf');

    // Set size limits
    const maxSize = uploadType === 'pdf' ? 20 * 1024 * 1024 : 10 * 1024 * 1024; // 20MB for PDF, 10MB for images

    // Generate pre-signed URL
    const { uploadUrl, fileUrl } = await generatePresignedUploadUrl(key, contentType, maxSize);

    return new Response(JSON.stringify({
      uploadUrl,
      fileUrl,
      expiresIn: 300 // 5 minutes
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error generating upload URL:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to generate upload URL' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
