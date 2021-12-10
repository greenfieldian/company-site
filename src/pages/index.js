import React, {Component} from 'react';
import Layout from "../components/global/layout";
import CallToAction from "../components/cta";
import Hero from "../components/hero";
import PartnerCloud from "../components/partner-cloud";
import DoughnutsCasePreview from "../components/doughnuts-case-preview";
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import Testimonial from "../components/testimonial";
import RealEstateCasePreview from "../components/re-case-preview";
import AppCasePreview from "../components/app-case-preview";


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
          <Testimonial />
          <AppCasePreview />
          <section>
              <div className="relative bg-white pt-16 pb-32 overflow-hidden">
                  <div className="text-center mb-5 sm:mb-20">
                      <h2 className="sm:text-5xl md:text-6xl lg:text-6xl font-extrabold">What We Do</h2>
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
                                          Build Something New
                                      </h2>
                                      <p className="mt-4 text-lg text-gray-500">
                                          Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                                          porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                                          viverra dui tellus ornare pharetra.
                                      </p>
                                      <div className="mt-6">
                                          <a
                                              href="#"
                                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                                          >
                                              Get started
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-12 sm:mt-16 lg:mt-0">
                              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                  <img
                                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
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
                                          Revamp an Existing Site
                                      </h2>
                                      <p className="mt-4 text-lg text-gray-500">
                                          Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                                          porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                                          viverra dui tellus ornare pharetra.
                                      </p>
                                      <div className="mt-6">
                                          <a
                                              href="#"
                                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                                          >
                                              Get started
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                  <img
                                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
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
                                          Support On-Demand
                                      </h2>
                                      <p className="mt-4 text-lg text-gray-500">
                                          Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                                          porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                                          viverra dui tellus ornare pharetra.
                                      </p>
                                      <div className="mt-6">
                                          <a
                                              href="#"
                                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                                          >
                                              Get started
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-12 sm:mt-16 lg:mt-0">
                              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                  <img
                                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                                      alt="Inbox user interface"
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="py-16 sm:py-20 bg-gray-50">
              <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="text-center sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mb-5 sm:mb-20">What We Deliver</h2>
                  <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
                      {features.map((feature) => (
                          <div key={feature.name}>
                              <dt>
                                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                                  </div>
                                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                          </div>
                      ))}
                  </dl>
              </div>
          </section>
          <section>
              <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                  <div className="absolute inset-0">
                      <div className="bg-white h-1/3 sm:h-2/3" />
                  </div>
                  <div className="relative max-w-7xl mx-auto">
                      <div className="text-center">
                          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
                          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                          </p>
                      </div>
                      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                          {posts.map((post) => (
                              <div key={post.title} className="flex flex-col overflow-hidden">
                                  <div className="flex-shrink-0">
                                      <img className="h-48 w-full object-cover rounded" src={post.imageUrl} alt="" />
                                  </div>
                                  <div className="flex-1 bg-white py-4 flex flex-col justify-between">
                                      <div className="flex-1">
                                          <a href={post.href} className="block mt-2">
                                              <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                              <p className="mt-2 text-base text-gray-500">{post.description}</p>
                                          </a>
                                      </div>
                                      {/*<div className="mt-6 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <a href={post.author.href}>
                                                        <span className="sr-only">{post.author.name}</span>
                                                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                                                    </a>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        <a href={post.author.href} className="hover:underline">
                                                            {post.author.name}
                                                        </a>
                                                    </p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime={post.datetime}>{post.date}</time>
                                                        <span aria-hidden="true">&middot;</span>
                                                        <span>{post.readingTime} read</span>
                                                    </div>
                                                </div>
                                            </div>*/}
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </section>
          <CallToAction />
          </Layout>
        </div>
    );
  }
}

export default IndexPage;
