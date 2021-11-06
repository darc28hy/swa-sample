// https://nextjs.org/docs/api-reference/next.config.js/introduction
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/logout': { page: '/logout' },
      '/.auth/login/aad': { page: '/.auth/login/aad' },
      '/.auth/logout': { page: '/.auth/logout' },
      '/private': { page: '/private' },
    }
  },
}
