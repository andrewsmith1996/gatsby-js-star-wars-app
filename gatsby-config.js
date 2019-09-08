/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
              // This type will contain remote schema Query type
              typeName: "SWAPI",
              // This is field under which it's accessible
              fieldName: "swapi",
              // Url to query from
              url: "https://api.graphcms.com/simple/v1/swapi",
            },
          },
      ],
}
