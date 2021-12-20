import React, {Component} from 'react';
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from "../components/global/layout";
import ArticlePreview from '../components/article-preview'
import CallToAction from "../components/cta";
import NewsletterCTA from '../components/newsletterCTA'



class Blog extends Component {
    render() {
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')

        return (
            <Layout location={this.props.location}>
                {/* Header */}
                <div className="py-24 sm:py-32">
                    <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                            Our Blog
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl leading-normal text-gray-500 text-center">
                            Learn from our team of experts, and join a community of over 100k small business owners.
                        </p>
                    </div>
                </div>
                <div style={{ background: '#fff' }} className="">
                    {/* Featured Post */}

                    {/* Featured Post */}
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 px-4 sm:px-6 py-10">
                        <ul className="article-list grid md:grid-cols-3 gap-10">
                            {posts.map(({ node }) => {
                                return (
                                    <li key={node.slug} className="blog-item">
                                        <ArticlePreview article={node} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <CallToAction />
                </div>
            </Layout>
        );
    }
}

export default Blog;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost {
    edges {
      node {
        title
        slug
        subtitle {
          subtitle
        }
        postDate(formatString: "MMMM d, yyyy")
        featuredImage {
          file {
            url
          }
        }
        category {
            name
        }
        author {
          name
          jobDescription
          avatar {
            file {
              url
            }
          }
        }
      }
    }
  }
  }
`
