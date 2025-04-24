'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [urls, setUrls] = useState<string[]>([]);

  const handleUpload = async () => {
    if (!files) return;

    setUploading(true);
    const newUrls: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (data.url) {
          newUrls.push(data.url);
        }
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }

    setUrls([...urls, ...newUrls]);
    setUploading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Upload Files to Vercel Blob</h1>
      
      <div className="mb-4">
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-primary file:text-primary-foreground
            hover:file:bg-primary/90"
        />
      </div>

      <button
        onClick={handleUpload}
        disabled={!files || uploading}
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {urls.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Uploaded URLs:</h2>
          <div className="space-y-2">
            {urls.map((url, index) => (
              <div key={index} className="p-2 bg-muted rounded-md">
                <code className="break-all">{url}</code>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 