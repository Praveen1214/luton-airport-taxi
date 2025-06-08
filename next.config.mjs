/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, 
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'https://lutonbackend-fsfnekbacdbycras.westus-01.azurewebsites.net',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
