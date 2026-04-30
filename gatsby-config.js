const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    pathPrefix: `/v1`,
    title: `Ricardo.TO`,
    siteUrl: 'https://medeirosricardo.github.io/v1',
    description: 'Ricardo Medeiros personal website portfolio.',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-material-ui",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ricardo.TO`,
        short_name: `Ricardo.TO`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/images/icon.svg`,
        theme_color_in_head: false,
      },
    },
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
