import React, {Component} from 'react';
import {Link} from 'gatsby';
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from "../components/global/layout";
import CallToAction from "../components/cta";
import Hero from "../components/hero";
import PartnerCloud from "../components/partner-cloud";
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import WebsitesImage from "../images/websites-image.png"
import AppsImage from "../images/mobile-apps.png"
import ContactForm from "../components/contact-form";
import ArticlePreview from "../components/article-preview";

import Street from "../images/23-street.webp"
import Beck from "../images/beck-logo.webp"
import {Helmet} from "react-helmet";


class IndexPage extends Component {
  render() {
      const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
        <div className="">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Shockmouse Media | Boutique Web Agency</title>
            <link rel="canonical" href="https://shockmouse.com" />
        </Helmet>
          <Layout>
          <Hero />
          <PartnerCloud />

          <section>
              <div className="relative bg-white pt-16 pb-32 overflow-hidden">
                  <div className="text-center mb-5 sm:mb-20 mx-auto max-w-3xl">
                      <span className="uppercase text-sm font-medium text-accent">What We Do</span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold ">Development services from professionals you’ll enjoy working with</h2>
                  </div>
                  <div className="relative">
                      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                              <div>
                                  <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                                  </div>
                                  <div className="mt-6">
                                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                          Websites
                                      </h2>
                                      <p className="mt-4 text-lg text-gray-500">
                                          For startups, small businesses, and enterprises alike, having a website that’s as
                                          beautiful as it is functional is critical. That’s why we develop responsive and
                                          flexible websites that you can depend on. Our secure, mobile-friendly solutions
                                          are easy to navigate, load quickly, and support the features you need.
                                      </p>
                                      <div className="mt-6">
                                          <Link
                                              to="/services/web-design"
                                              className="inline-flex px-4 py-2 bg-accent text-white text-base font-medium shadow-sm rounded-3xl"
                                          >
                                              Learn More
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-12 sm:mt-16 lg:mt-0">
                              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                  <img
                                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                      src={WebsitesImage}
                                      alt="Inbox user interface"
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="mt-24">
                      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                              <div>
                                  <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                                  </div>
                                  <div className="mt-6">
                                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                          Mobile Apps
                                      </h2>
                                      <p className="mt-4 text-lg text-gray-500">
                                          Our mobile app developers start by getting to know your company on a
                                          personal level. By understanding your goals, staying consistent with your
                                          brand, and maintaining transparency throughout the entire process, we build
                                          secure, functional, and user-friendly apps.
                                      </p>
                                      <div className="mt-6">
                                          <Link
                                              to="/services/mobile-apps"
                                              className="inline-flex px-4 py-2 bg-accent text-white text-base font-medium shadow-sm rounded-3xl"
                                          >
                                              Learn More
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                  <img
                                      className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full my-auto lg:w-auto lg:max-w-none"
                                      src={AppsImage}
                                      alt="Customer profile user interface"
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Case Studies */}
          <section>
              <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                  <div className="absolute inset-0">
                      <div className="bg-white h-1/3 sm:h-2/3" />
                  </div>
                  <div className="relative max-w-7xl mx-auto">
                      <div className="text-center">
                          <span className="uppercase text-sm font-medium text-accent">Company Insights</span>
                          <h2 className="text-3xl tracking-tight font-extrabold text-black sm:text-4xl">From the blog</h2>
                          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                              Learn tips and tricks from our team of experts.
                          </p>
                      </div>
                      <ul className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none list-none">
                          {posts.map(({ node }) => {
                              return (
                                  <li key={node.slug} className="blog-item">
                                      <ArticlePreview article={node} />
                                  </li>
                              )
                          })}
                      </ul>
                  </div>
              </div>
          </section>
          {/* Case Studies */}

          {/* Testimonials */}
              <section className="pt-16 pb-20">
                  <div className="text-center mb-5 sm:mb-20 mx-auto max-w-3xl">
                      <span className="uppercase text-sm font-medium text-accent">Testimonials</span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold ">What our clients are saying about us</h2>
                  </div>
                  <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
                      <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">
                          <div className="md:flex-shrink-0">
                              <img className="h-12 mx-auto" src={Beck} alt="Tuple" />
                          </div>
                          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                              <div className="relative text-lg font-medium md:flex-grow text-center">

                                  <p className="relative">
                                      Their business acumen, coupled with their creative prowess, is an unmatched force. Over the course of our relationship, they've become not just a valued service provider, but a key growth partner.
                                  </p>
                              </div>
                              <footer className="mt-8 text-center">
                                  <div className="">
                                      <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                                          <img
                                              className="h-12 w-12 rounded-full"
                                              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                              alt=""
                                          />
                                      </div>
                                      <div className="ml-4">
                                          <div className="text-base font-medium">Michael Judine</div>
                                          <div className="text-base font-medium text-indigo-200">Managing Director, Beck Venture Partners</div>
                                      </div>
                                  </div>
                              </footer>
                          </blockquote>
                      </div>
                      <div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
                          <div className="md:flex-shrink-0 text-center">
                              <img
                                  className="h-12 mx-auto"
                                  src={Street}
                                  alt="Workcation"
                              />
                          </div>
                          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                              <div className="relative text-lg font-medium md:flex-grow text-center">
                                  <p className="relative">
                                      We've had issues with agencies in the past, so we were naturally hesitant to work with one again. The Shockmouse Media team understood and respected our concerns, patiently guiding us through our website re-design. As a result, we have an incredible site, and they have a lifelong customer.
                                  </p>
                              </div>
                              <footer className="mt-8 text-center">
                                  <div className="">
                                      <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                                          <img
                                              className="h-12 w-12 rounded-full"
                                              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                              alt=""
                                          />
                                      </div>
                                      <div className="ml-4">
                                          <div className="text-base font-medium">Michelle Anastasio</div>
                                          <div className="text-base font-medium">President, 23 Street</div>
                                      </div>
                                  </div>
                              </footer>
                          </blockquote>
                      </div>
                  </div>
              </section>

          {/* Testimonials */}

          <ContactForm />
          <CallToAction />
          </Layout>
        </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query HomeBlogQuery {
    allContentfulBlogPost(limit: 3) {
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
