/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const fetch = require("isomorphic-fetch")
const { createHttpLink } = require("apollo-link-http")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Recycle map UK",
    siteUrl: "https://recyclemap.uk",
    description: "Map of recycling centres in the UK",
    author: "rajraj",
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "hasura",
        fieldName: "hasura",
        createLink: () => {
          return createHttpLink({
            uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
            headers: {
              "x-hasura-admin-secret": process.env.GATSBY_HASURA_ADMIN_SECRET,
            },
            fetch,
          })
        },
        refetchInterval: 10,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
