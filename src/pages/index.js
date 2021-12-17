import React, {Component} from 'react';
import {Link} from 'gatsby';
import Layout from "../components/global/layout";
import CallToAction from "../components/cta";
import Hero from "../components/hero";
import PartnerCloud from "../components/partner-cloud";
import DoughnutsCasePreview from "../components/doughnuts-case-preview";
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import Testimonial from "../components/testimonial";
import Testimonial2 from "../components/testimonial-2";
import RealEstateCasePreview from "../components/re-case-preview";
import AppCasePreview from "../components/app-case-preview";

import WebsitesImage from "../images/websites-image.png"
import AppsImage from "../images/mobile-apps.png"
import ShopifyImage from "../images/shopify-image.png"
import ContactForm from "../components/contact-form";



const features = [
    {
        name: 'Faster Websites',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Real-Time Project Tracking',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        name: 'Optimized for S.E.O.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Endless Integrations',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
]

class IndexPage extends Component {
  render() {
    return (
        <div className="">
          <Layout>
          <Hero />
          <PartnerCloud />
          <DoughnutsCasePreview />
          <Testimonial />
          <RealEstateCasePreview />
          <Testimonial2 />
          <AppCasePreview />
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
                                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium shadow-sm"
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
                                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium shadow-sm"
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
                                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium shadow-sm"
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

          <ContactForm />
          <CallToAction />
          </Layout>
        </div>
    );
  }
}

export default IndexPage;
