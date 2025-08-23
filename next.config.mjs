/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },

    env: {
    NEXT_PUBLIC_UMAMI: process.env.NEXT_PUBLIC_UMAMI,
  },
}


export default nextConfig;