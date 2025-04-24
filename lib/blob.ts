import { put, list } from '@vercel/blob';

export async function uploadToBlob(file: File | Buffer, filename: string): Promise<string> {
  const blob = await put(filename, file, {
    access: 'public',
  });
  return blob.url;
}

export async function listBlobs(prefix?: string) {
  const { blobs } = await list({
    prefix,
  });
  return blobs;
} 