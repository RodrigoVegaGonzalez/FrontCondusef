/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.NEXT_PUBLIC_AMBIENTE, // Accede a la variable de entorno
        VERSION: process.env.NEXT_PUBLIC_VERSION
      }
};

export default nextConfig;
