import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

// Server-side S3 client configuration
export function getS3Client() {
  const accessKeyId = import.meta.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = import.meta.env.S3_SECRET_ACCESS_KEY;
  const region = import.meta.env.S3_REGION;

  if (!accessKeyId || !secretAccessKey || !region) {
    throw new Error('S3 credentials not configured. Please set S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, and S3_REGION in your .env file.');
  }

  return new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

export function getS3Config() {
  return {
    bucket: import.meta.env.S3_BUCKET || '',
    folderPrefix: import.meta.env.S3_FOLDER_PREFIX || 'talents/',
    region: import.meta.env.S3_REGION || '',
  };
}

export async function uploadToS3(
  file: File | Buffer,
  key: string,
  contentType: string
): Promise<string> {
  const s3Client = getS3Client();
  const config = getS3Config();

  if (!config.bucket) {
    throw new Error('S3_BUCKET not configured');
  }

  const fullKey = `${config.folderPrefix}${key}`;

  const command = new PutObjectCommand({
    Bucket: config.bucket,
    Key: fullKey,
    Body: file instanceof File ? Buffer.from(await file.arrayBuffer()) : file,
    ContentType: contentType,
    // Note: ACL removed - bucket must have public read access via bucket policy
  });

  await s3Client.send(command);

  // Return the public URL
  return `https://${config.bucket}.s3.${config.region}.amazonaws.com/${fullKey}`;
}

export async function deleteFromS3(url: string): Promise<void> {
  const s3Client = getS3Client();
  const config = getS3Config();

  if (!config.bucket) {
    throw new Error('S3_BUCKET not configured');
  }

  // Extract key from URL
  const urlPattern = new RegExp(`https://${config.bucket}.s3.${config.region}.amazonaws.com/(.+)`);
  const match = url.match(urlPattern);

  if (!match) {
    console.warn('Could not parse S3 URL:', url);
    return;
  }

  const key = match[1];

  const command = new DeleteObjectCommand({
    Bucket: config.bucket,
    Key: key,
  });

  try {
    await s3Client.send(command);
  } catch (error) {
    console.error('Error deleting from S3:', error);
    // Don't throw - file might already be deleted
  }
}

export function generateS3Key(talentId: string, filename: string, type: 'main' | 'gallery' | 'pdf'): string {
  const timestamp = Date.now();
  const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
  return `${talentId}/${type}-${timestamp}-${sanitizedFilename}`;
}
