import React, {Component} from 'react';
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from "../components/global/layout";
import ArticlePreview from '../components/article-preview'
import CallToAction from "../components/cta";



class Blog extends Component {
    render() {
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')

        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' }} className="">
                    <div></div>
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 px-4 sm:px-6">
                        {/*<h2 className="section-headline">Recent articles</h2>*/}
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
      }
    }
  }
  }
`
