/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/images/jeremy_profile.jpeg',
        destination: '/images/jeremy_profile_2024.jpeg',
        permanent: true, // 308 redirect - tells search engines this is permanent
      },
    ]
  },
};

export default nextConfig;