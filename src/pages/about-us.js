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

const services = [
    {
        name: 'Websites',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        link: '/services/web-design',
    },
    {
        name: 'Mobile Apps',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        link: '/services/mobile-apps',
    },
    {
        name: 'Shopify',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        link: '/services/shopify',
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
                                        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                            <span className="block">Take control of your</span>
                                            <span className="block">customer support</span>
                                        </h1>
                                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                            amet fugiat veniam occaecat fugiat aliqua.
                                        </p>
                                        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                            <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                                >
                                                    Get started
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
                                <span className="uppercase text-sm font-medium">About Us</span>
                                <h2>Our Story</h2>
                            </div>
                            <div className="">
                                <p className="font-light leading-loose">Beneath the surface, there are countless factors that support the speed,
                                    functionality, and security of your website. Our seasoned developers
                                    understand the latest strategies to maximize the efficiency of your website
                                    while including the features that you need. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <br/>
                                <div>
                                    <h4 className="font-bold mb-5">Our Philosophy</h4>
                                    <p className="font-light leading-loose">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
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
                            <h2 className="text-3xl md:text-4xl pb-8">Choose battle-tested web development services with community support over hype</h2>
                            <p className="text-base sm:text-xl font-light">Whatever web applications you’re building, we got your back at every stage of web development, including web design. We’ve built a core system for a bank, an MVP marketplace sold for millions, and other 5☆ custom projects for 140+ companies worldwide. All in accordance with the client’s digital marketing strategy.</p>
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
                                <div key={service.name} className="bg-light-gray rounded p-6">
                                    <dt>
                                        <p className="text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                                    </dt>
                                    <dd className="my-2 text-base text-gray-500 font-light">{service.description}</dd>
                                    <div>
                                        <Link to={service.link}>Learn More <ArrowRightIcon className="w-8 h-4 inline-block"/></Link>
                                    </div>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
                {/* Service Offerings */}

                {/* Locations Section */}
                <section>
                    <div className="">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-10">
                                <span className="uppercase text-sm font-medium">Our Offices</span>
                                <h2>Meet us at an office near you</h2>
                            </div>
                            <dl className="sm:space-y-0 grid grid-cols-2 gap-4 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                                {locations.map((location) => (
                                    <div key={location.node.title} className="relative mb-3 ">
                                        <Link to={`/locations/${location.node.slug}`}>
                                            <div className="mb-3">
                                                <img src={location.node.heroImage.file.url} className="h-44 rounded w-full"/>
                                            </div>
                                            <dt>
                                                <p className="text-lg leading-6 font-medium text-gray-900 font-bold">{location.node.title}</p>
                                            </dt>
                                            <dd className="text-gray-500 text-sm font-light">{location.node.address}</dd>
                                            <dd className="text-gray-500 text-sm font-light">{location.node.city}</dd>
                                        </Link>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>
                {/* Locations Section */}
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
