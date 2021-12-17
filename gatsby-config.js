module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "company-site-build",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `63n4orvvac54`,
        accessToken: `F4QHqWzR4PT-8iCzc0MT9dmp7nWVZXinNW-mVkQlBnA`,
      },
    },
  ],
};
