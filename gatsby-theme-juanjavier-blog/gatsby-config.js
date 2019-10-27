module.exports = {
  siteMetadata: {
    title: `JuanJavier's Blog Gatsby Theme`,
    description: `A simple and minimalistic Gatsby Blog Theme for JuanJavier's Blog Site.`,
    author: `@JuanJavier1979`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ]
}