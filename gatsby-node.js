const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve('./src/templates/blog-post.js');
        const locationPage = path.resolve('./src/templates/location.js');

        resolve(
            graphql(
                `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            
            allContentfulLocations {
                edges {
                  node {
                    title
                    heroImage {
                      file {
                        url
                      }
                      description
                    }
                    city
                    address
                    slug
                  }
                }
            }
          }
        `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                const posts = result.data.allContentfulBlogPost.edges
                posts.forEach(post => {
                    createPage({
                        path: `/blog/${post.node.slug}/`,
                        component: blogPost,
                        context: {
                            slug: post.node.slug,
                        },
                    })
                })

                const locations = result.data.allContentfulLocations.edges
                locations.forEach(location => {
                    createPage({
                        path: `/locations/${location.node.slug}/`,
                        component: locationPage,
                        context: {
                            slug: location.node.slug,
                        },
                    })
                })
            })
        )
    })
}