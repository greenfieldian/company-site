import React, {Component} from 'react';
import Layout from "../components/global/layout";
import {graphql} from "gatsby";
import get from "lodash/get";
import CallToAction from "../components/cta";
import { FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {Helmet} from "react-helmet";

class BlogPostTemplate extends Component {
    render() {
        const post = get(this.props, 'data.contentfulBlogPost')

        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{post.title} | Shockmouse Media</title>
                    <link rel="canonical" href="https://shockmouse.com" />
                </Helmet>
            <Layout>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center pt-12 pb-6">
                    <div className="mb-10">
                        <h2 className="pb-5 text-2xl sm:text-5xl sm:leading-tight">{post.title}</h2>
                        <p className="font-light text-sm sm:text-xl">{post.subtitle.subtitle}</p>
                    </div>
                    <div className="mb-5">
                        <img src={post.author.avatar.file.url} className="h-12 mx-auto"/>
                        <p>{post.author.name}</p>
                    </div>
                    <div>
                        <p className="font-light text-sm sm:text-xs">Published {post.postDate}</p>
                    </div>
                </div>

                <div>
                    <img src={post.featuredImage.file.url} className="sm:h-screen w-full"/>
                </div>

                <section>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 font-light">
                        <div
                            className="blog-post-body"
                            dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}}
                        />
                    </div>
                    {/*<div>
                        <aside>
                            <div>
                                <a><FaLinkedin /></a>
                                <a><FaFacebookF /></a>
                                <a><FaTwitter /></a>
                                <a><FaEnvelope /></a>
                            </div>
                        </aside>
                    </div>*/}
                </section>

                <CallToAction />
            </Layout>
                </>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
   query BlogPostBySlug($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
                title
                slug
                featuredImage {
                  file {
                    url
                  }
                }
                subtitle {
                  subtitle
                }
                postDate(formatString: "MMMM d, yyyy")
                body {
                    childMarkdownRemark {
                        html
                    }
                }
                author {
                  name
                  avatar {
                    file {
                      url
                    }
                  }
                }
      }
   }
`