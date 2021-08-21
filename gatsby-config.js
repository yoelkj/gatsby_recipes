/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  
  siteMetadata:{
    title: 'Recipes site',
    description: 'All awesome recipes',
    author: '@yoelkj',
    person: {name: 'Yoel', age: 33},
    simpleData: [
      'item1', 'item2', 'item3'
    ],
    complexData: [
      {name: 'Yoel', age: 33},
      {name: 'Yoel', age: 33},
      {name: 'Yoel', age: 33},
      {name: 'Yoel', age: 33}

    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `do5nzk6691pu`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENFUL_API_KEY,
      },
    },


  ],
}
