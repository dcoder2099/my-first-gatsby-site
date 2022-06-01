module.exports = {
  siteMetadata: {
    title: `Daniel's Gatsby Site`,
    siteUrl: `https://myfirstgatsbysitemain91735.gatsbyjs.io/`,
    description: `A site for learning Gatsby best practices.`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    }
  ],
}
