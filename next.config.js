// https://nextjs.org/docs/api-reference/next.config.js/introduction
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/private': { page: '/private' },
    }
  },
}
