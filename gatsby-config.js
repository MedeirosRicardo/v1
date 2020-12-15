module.exports = {
  siteMetadata: {
    title: `Ricardo.TO`,
    siteUrl: 'https://www.ricardo.to',
    description: 'Ricardo Medeiros personal website portfolio.',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-material-ui",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/assets`,
      },
      __key: "src",
    },
  ],
};
