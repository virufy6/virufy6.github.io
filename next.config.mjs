// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
export default {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es", "pt", "jp"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // automatically handles all locales
        destination: 'https://scidroidgames-gmailcom-cms.payloadcms.app/api/:path*', // automatically passes the locale on
      },
      {
        source: '/media/:path*', // automatically handles all locales
        destination: 'https://scidroidgames-gmailcom-cms.payloadcms.app/media/:path*', // automatically passes the locale on
      },
    ]

  }
}