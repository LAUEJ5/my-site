/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",
  basePath: isProd ? "/jeremys-film-reviews" : "",
  assetPrefix: isProd ? "/jeremys-film-reviews" : "",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig