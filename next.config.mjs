/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).

    images: {
      unoptimized: true,
    },
    env: {  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY  }
  }

  
   
  export default nextConfig