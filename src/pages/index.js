import React, {Component} from 'react';
import {Link} from 'gatsby';
import Layout from "../components/global/layout";
import CallToAction from "../components/cta";
import Hero from "../components/hero";
import PartnerCloud from "../components/partner-cloud";
import { InboxIcon, SparklesIcon, CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon, } from '@heroicons/react/outline'


import WebsitesImage from "../images/websites-image.png"
import AppsImage from "../images/mobile-apps.png"
import ShopifyImage from "../images/shopify-image.png"
import ContactForm from "../components/contact-form";

const features = [
    { name: 'Push to Deploy', icon: CloudUploadIcon },
    { name: 'SSL Certificates', icon: LockClosedIcon },
    { name: 'Simple Queues', icon: RefreshIcon },
    { name: 'Advanced Security', icon: ShieldCheckIcon },
    { name: 'Powerful API', icon: CogIcon },
    { name: 'Database Backups', icon: ServerIcon },
]

const posts = [
    {
        title: 'Boost your conversion rate',
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        category: { name: 'Video', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '4 min',
        author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'Improve your customer experience',
        href: '#',
        category: { name: 'Case Study', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]


class IndexPage extends Component {
  render() {
    return (
        <div className="">
          <Layout>
          <Hero />
          <PartnerCloud />
              {/*
          <DoughnutsCasePreview />
          <Testimonial />
          <RealEstateCasePreview />
          <Testimonial2 />
          <AppCasePreview />*/}
          <section>
              <div className="relative bg-white pt-16 pb-32 overflow-hidden">
                  <div className="text-center mb-5 sm:mb-20">
                      <h2 className="sm:text-3xl font-extrabold">What We Do</h2>
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
                                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium shadow-sm rounded-3xl"
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
                                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium shadow-sm rounded-3xl"
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
                  <div className="relative mt-24">
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
                                          Shopify
                                      </h2>
                                      <p className="mt-4 text-lg text-gray-500">
                                          By providing conversion-oriented Shopify and Shopify Plus solutions, we help
                                          eCommerce businesses grow and scale their operations. Our experienced
                                          developers set up, design, and optimize your pages for increased sales and
                                          visibility. As digital retail grows, we help you stay at the leading edge.
                                      </p>
                                      <div className="mt-6">
                                          <Link
                                              to="/services/shopify"
                                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium shadow-sm rounded-3xl"
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
                                      src={ShopifyImage}
                                      alt="Inbox user interface"
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
                          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
                          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                          </p>
                      </div>
                      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                          {posts.map((post) => (
                              <div key={post.title} className="flex flex-col rounded-lg border border-border hover:border-accent hover:cursor-pointer overflow-hidden">
                                  <div className="flex-shrink-0">
                                      <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                                  </div>
                                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                      <div className="flex-1">
                                          <a href={post.href} className="block mt-2">
                                              <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                              <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </section>
          {/* Case Studies */}

          {/* Testimonials */}
              <div className="relative bg-white py-16 sm:py-24 lg:py-32">
                  <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                      <h2 className="font-semibold tracking-wider uppercase text-sm font-medium text-accent">Deploy faster</h2>
                      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                          Everything you need to deploy your app
                      </p>
                      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                          malesuada. Eleifend condimentum id viverra nulla.
                      </p>
                      <div className="mt-12">
                          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                              {features.map((feature) => (
                                  <div key={feature.name} className="pt-6">
                                      <div className="flow-root bg-light-blue rounded-lg px-6 pb-8">
                                          <div className="-mt-6">
                                              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                              <p className="mt-5 text-base text-gray-500">
                                                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          {/* Testimonials */}

          <ContactForm />
          <CallToAction />
          </Layout>
        </div>
    );
  }
}

export default IndexPage;
