/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rahuleshwar.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
