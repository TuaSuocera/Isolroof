/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const BASE_PATH = isProd ? '/Isolroof' : ''

const nextConfig = {
  ...(isProd && {
    output: 'export',
    basePath: BASE_PATH,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
}

export default nextConfig
