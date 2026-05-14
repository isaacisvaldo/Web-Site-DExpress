/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      new URL(
        'https://dwhgufcvlmovqrtqmjdd.supabase.co/storage/v1/object/public/files/**'
      ),
    ],
  },
}

export default nextConfig
