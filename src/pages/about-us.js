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
                    <div className="relative bg-white py-16 sm:py-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                            <div className="relative sm:py-16 lg:py-0">
                                <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                                    <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                                    <svg
                                        className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                        width={404}
                                        height={392}
                                        fill="none"
                                        viewBox="0 0 404 392"
                                    >
                                        <defs>
                                            <pattern
                                                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                                x={0}
                                                y={0}
                                                width={20}
                                                height={20}
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                            </pattern>
                                        </defs>
                                        <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                                    </svg>
                                </div>
                                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                                    {/* Testimonial card*/}
                                    <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                        <img
                                            className="absolute inset-0 h-full w-full object-cover"
                                            src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                                            alt=""
                                        />
                                        <div className="absolute inset-0 bg-blue mix-blend-multiply" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                                        <div className="relative px-8">
                                            <div>
                                                <img
                                                    className="h-12"
                                                    src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                                                    alt="Workcation"
                                                />
                                            </div>
                                            <blockquote className="mt-8">
                                                <div className="relative text-lg font-medium text-white md:flex-grow">
                                                    <svg
                                                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 32 32"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                    </svg>
                                                    <p className="relative">
                                                        Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                                                        Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                                                    </p>
                                                </div>

                                                <footer className="mt-4">
                                                    <p className="text-base font-semibold text-indigo-200">Sarah Williams, CEO at Workcation</p>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                                {/* Content area */}
                                <div className="pt-12 sm:pt-16 lg:pt-20">
                                    <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                                        On a mission to empower teams
                                    </h2>
                                    <div className="mt-6 text-gray-500 space-y-6">
                                        <p className="text-lg">
                                            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                            pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
                                            porttitor vitae ut. Amet vitae fames senectus vitae.
                                        </p>
                                        <p className="text-base leading-7">
                                            Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                                            pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique
                                            eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
                                            viverra donec ut volutpat donec laoreet quam urna.
                                        </p>
                                        <p className="text-base leading-7">
                                            Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                                            velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                                            egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                                        </p>
                                    </div>
                                </div>

                                {/* Stats section */}
                                <div className="mt-10">
                                    <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                                        {stats.map((stat) => (
                                            <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                                                <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                                                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                    <div className="mt-10">
                                        <a href="#" className="text-base font-medium text-accent">
                                            {' '}
                                            Learn more about how we're changing the world <span aria-hidden="true">&rarr;</span>{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
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
