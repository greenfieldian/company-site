import React, {Component} from 'react';
import Layout from "../components/global/layout";
import {Link} from 'gatsby'
import ContactForm from "../components/contact-form";
import CallToAction from "../components/cta";
import {GlobeAltIcon, LightningBoltIcon, ScaleIcon, ArrowRightIcon} from "@heroicons/react/outline";
import {graphql} from "gatsby";
import get from "lodash/get";

import WebsitesImage from "../images/websites-image.png";
import Google from '../images/google-cert.png';
import WPEngine from '../images/wp-engine.webp'
import AWS from '../images/aws.webp';
import Shopify from '../images/shopify-partner.webp';
import Mailchimp from '../images/mailchimp-partner.webp';
import Hubspot from '../images/hubspot.webp';
import Beck from "../images/beck-logo.webp";
import Street from "../images/23-street.webp";

const services = [
    {
        name: 'Websites',
        description:
            'Our secure, mobile-friendly solutions\n' +
            'are easy to navigate, load quickly, and support the features you need.',
        link: '/services/web-design',
    },
    {
        name: 'Mobile Apps',
        description:
            'By understanding your goals, staying consistent with your\n' +
            'brand, and maintaining transparency throughout the entire process, we build\n' +
            'secure, functional, and user-friendly apps.',
        link: '/services/mobile-apps',
    },
    {
        name: 'Shopify',
        description:
            'Through conversion-oriented Shopify and Shopify Plus solutions, we help\n' +
            'e-commerce businesses grow and scale their operations.',
        link: '/services/shopify',
    },
]

const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
]

class AboutUs extends Component {
    render() {
        const locations = get(this, 'props.data.allContentfulLocations.edges')

        return (
            <Layout>
                {/* Hero Section */}
                <div>
                    <div>
                        {/* Hero card */}
                        <div className="relative">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                            <div className="mx-auto">
                                <div className="relative sm:overflow-hidden">
                                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                        <h1 className="text-center text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                                            <span className="uppercase text-sm font-medium text-accent">About Us</span>
                                            <span className="block">A team of builders, visionaries and entrepreneurs</span>
                                        </h1>
                                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                            amet fugiat veniam occaecat fugiat aliqua.
                                        </p>
                                        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                            <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center px-3 py-2 bg-accent text-white rounded-3xl text-base font-medium shadow-sm hover:bg-blue sm:px-6"
                                                >
                                                    Get in touch
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section */}

                {/* Approach */}
                <section>
                    <div className="px-4 py-8 sm:px-6 sm:py-16 lg:py-16 lg:px-8 lg:max-w-7xl sm:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="">
                            <div className="mb-5">
                                <h2>Our Story</h2>
                            </div>
                            <div className="">
                                <p className="font-light leading-loose">At Shockmouse Media, we believe that the best relationships lead to the best
                                    results. That’s why to us, you’re more than our client - you’re our partner. Having
                                    worked with businesses of all sizes across every industry, our team knows how to achieve results that noticeably improve your digital
                                    presence. Every step of the way, we keep the community in our hearts while
                                    standing tall against discrimination and racial injustice. Work with our
                                    dedicated team today and discover why Shockmouse Media is trusted on an
                                    international scale.</p>
                                <br/>
                                <div>
                                    <h4 className="font-bold mb-5">Our Mission</h4>
                                    <p className="font-light leading-loose">We're on a mission to help 1 million small businesses maximize their digital potential.</p>
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
                </section>
                {/* Approach */}

                {/* Frameworks */}
                <section className="bg-white">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-5 max-w-3xl mx-auto mb-24">
                            <h2 className="text-3xl md:text-4xl pb-8">We partner with the best in the business</h2>
                            <p className="text-base sm:text-xl font-light">We build lasting relationships with our clients that move through many stages of growth. As a result, we partner exclusively with companies that can scale with us. Together, we're an unstopable force.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6 font-medium">
                            <div className="col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-1 text-center">
                                <div className="mx-auto">
                                    <img className="h-12 mb-3" src={Google} alt="Tuple" />
                                </div>
                                <div>
                                    <p>Google <br/> Certified Agency</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-1 text-center">
                                <div className="mx-auto">
                                    <img className="h-12 mb-3" src={WPEngine} alt="Mirage" />
                                </div>
                                <div>
                                    <p>WP Engine <br /> Partners</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-1 text-center">
                                <div className="mx-auto">
                                    <img className="h-12 mb-3" src={AWS} alt="StaticKit" />
                                </div>
                                <div>
                                    <p>AWS <br /> Partners </p>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
                                <div className="mx-auto">
                                    <img
                                        className="h-12 mb-3"
                                        src={Shopify}
                                        alt="Transistor"
                                    />
                                </div>
                                <div>
                                    <p>Shopify <br />Partners</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
                                <div className="mx-auto">
                                    <img
                                        className="h-12 mb-3"
                                        src={Mailchimp}
                                        alt="Workcation"
                                    />
                                </div>
                                <div>
                                    <p>Mailchimp <br/>Partner Agency</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
                                <div className="mx-auto">
                                    <img
                                        className="h-12 mb-3"
                                        src={Hubspot}
                                        alt="Workcation"
                                    />
                                </div>
                                <div>
                                    <p>Hubspot <br/>Certified Partner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Frameworks */}

                {/* Service Offerings */}
                <div className="py-12 bg-white">
                    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="text-center mb-10">
                            <span className="uppercase text-sm font-medium">Our Services</span>
                            <h2 className="">What we do best</h2>
                        </div>
                        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                            {services.map((service) => (
                                <div key={service.name} className="bg-light-blue rounded p-6">
                                    <dt>
                                        <p className="text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                                    </dt>
                                    <dd className="my-2 text-base text-gray-500 font-light">{service.description}</dd>
                                    <div>
                                        <Link to={service.link} className="text-accent">Learn More <ArrowRightIcon className="w-8 h-4 inline-block"/></Link>
                                    </div>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
                {/* Service Offerings */}

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

                <ContactForm />
                <CallToAction />
            </Layout>
        );
    }
}

export default AboutUs;

export const pageQuery = graphql`
  query LocationsIndexQuery {
    allContentfulLocations {
      edges {
          node {
            title
            address
            city
            slug
            heroImage {
              file {
                url
              }
            }
          }
        }
    }
  }
`
