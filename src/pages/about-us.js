import React, {Component} from 'react';
import Layout from "../components/global/layout";
import {Link} from 'gatsby'
import ContactForm from "../components/contact-form";
import CallToAction from "../components/cta";
import {GlobeAltIcon, LightningBoltIcon, ScaleIcon} from "@heroicons/react/outline";
import {graphql} from "gatsby";
import get from "lodash/get";

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
                                    <div className="absolute inset-0">
                                        <img
                                            className="h-full w-full object-cover"
                                            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                            alt="People working on laptops"
                                        />
                                        <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                                    </div>
                                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                            <span className="block text-white">Take control of your</span>
                                            <span className="block text-indigo-200">customer support</span>
                                        </h1>
                                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                            amet fugiat veniam occaecat fugiat aliqua.
                                        </p>
                                        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                                >
                                                    Get started
                                                </a>
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                                >
                                                    Live demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section */}

                {/* Stats Section */}
                <div className="bg-indigo-800">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold sm:text-4xl">Trusted by developers from over 80 planets</h2>
                            <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
                            </p>
                        </div>
                        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                            <div className="flex flex-col">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Pepperoni</dt>
                                <dd className="order-1 text-5xl font-extrabold">100%</dd>
                            </div>
                            <div className="flex flex-col mt-10 sm:mt-0">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Delivery</dt>
                                <dd className="order-1 text-5xl font-extrabold">24/7</dd>
                            </div>
                            <div className="flex flex-col mt-10 sm:mt-0">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Calories</dt>
                                <dd className="order-1 text-5xl font-extrabold">100k+</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                {/* Stats Section */}

                <section className="py-16 sm:py-20 bg-light-gray">
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

                {/* Service Offerings */}
                <div className="py-12 bg-white">
                    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">A better way to send money.</h2>
                        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                            {services.map((service) => (
                                <div key={service.name}>
                                    <dt>
                                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">{service.description}</dd>
                                    <div>
                                        <Link to={service.link}>Learn More</Link>
                                    </div>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
                {/* Service Offerings */}

                {/* Locations Section */}
                <section>
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                                {locations.map((location) => (
                                    <div className="relative">
                                        <Link to={`/locations/${location.node.slug}`}>
                                            <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{location.node.title}</p>
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
          slug
        }
      }
    }
  }
`
