/** @type {import('next').NextConfig} */
/*const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/',
  //basePath: '/locais',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      //'/locais/': { page: '/locais/' },
      '/': { page: '/' },
    }
  }
}

module.exports = nextConfig*/



const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig