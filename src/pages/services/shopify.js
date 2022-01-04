import React, {Component} from 'react';
import {Link} from "gatsby";
import Layout from "../../components/global/layout";
import {
    InboxIcon,
    TrashIcon, UserGroupIcon,
    UsersIcon,

} from '@heroicons/react/outline'
import ContactForm from "../../components/contact-form";
import Worleys from '../../images/worleys-lighting.jpeg'
import WorleysLogo from '../../images/worleys-logo.png'
import ShopifyImage from "../../images/shopify-image.png"

const features = [
    {
        name: 'Full-spectrum setup',
        description: 'Software architecture have to follow business logic and provide scalability for future growth. Our team knows it instinctively.',
        icon: InboxIcon,
    },
    {
        name: 'Conversion Optimization',
        description: 'Web development services full of custom solutions optimized for efficiency, flexibility and deployment speed',
        icon: UsersIcon,
    },
    {
        name: 'Responsive Design',
        description: 'We build websites from the ground up, including hosting, page navigation,\n' +
            'features, SEO, and more. From A to Z, we cover all of your bases.',
        icon: TrashIcon,
    },
    {
        name: 'Theme Migration',
        description: 'Enjoy access to our Product Designers, Project Managers, QA Engineers, Business Analysts, DevOps, or Full-stack developers.',
        icon: UserGroupIcon,
    },
    {
        name: 'App Customization',
        description: 'We do QA before each deploy through manual and automated tests that catch bugs, performance issues, and conversion blockers.',
        icon: TrashIcon,
    },
    {
        name: 'World-class UX/UI',
        description: 'Designed to help your business with user adoption.',
        icon: TrashIcon,
    },
]
const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
]



class MobileApps extends Component {
    render() {
        return (
            <Layout>
                <main className="overflow-hidden">
                    {/* Hero section */}
                    <div>
                        <div>
                            {/* Hero card */}
                            <div className="relative">
                                <div className="absolute inset-x-0 bottom-0 h-1/2" />
                                <div className="mx-auto">
                                    <div className="relative sm:overflow-hidden">
                                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 lg:max-w-7xl sm:mx-auto text-center">
                                            <span className="uppercase text-sm font-medium text-accent">Shopify</span>
                                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                                <span className="block">Facilitating e-commerce sales through thoughtful design</span>
                                            </h1>
                                            <p className="mt-6 mx-auto max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                                                We provide ground-up support wherever you are on your e-commerce journey.
                                            </p>
                                            <div className="mt-10 max-w-sm sm:mx-auto sm:max-w-none sm:flex ">
                                                <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                                                    <Link
                                                        to="/contact"
                                                        className="flex items-center justify-center px-3 py-2 bg-accent text-white rounded-3xl text-base font-medium shadow-sm hover:bg-blue sm:px-6"
                                                    >
                                                        Book a free consultation
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Approach Text */}
                    <section>
                        <div className="px-4 py-8 sm:px-6 sm:py-16 lg:py-16 lg:px-8 lg:max-w-7xl sm:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="">
                                <div className="mb-5">
                                    <h2>Conception-to-launch mobile development services</h2>
                                </div>
                                <div className="">
                                    <p className="font-light">Beneath the surface, there are countless factors that support the speed,
                                        functionality, and security of your website. Our seasoned developers
                                        understand the latest strategies to maximize the efficiency of your website
                                        while including the features that you need. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <br/>
                                    <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                    </section>
                    {/* Approach Text */}

                    <section className="pb-24 bg-white font-light">
                        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">A better way to send money.</h2>
                            <dl className="space-y-10 text-center sm:text-left lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                                {features.map((feature) => (
                                    <div key={feature.name} className="sm:flex">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                                            <feature.icon className="h-6 w-6 text-accent sm:mt-3 sm:mr-4" aria-hidden="true" />
                                        </div>
                                        <dt>
                                            <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                            <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                                        </dt>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </section>

                    {/* Case Study */}
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
                                                src={Worleys}
                                                alt=""
                                            />
                                            <div className="absolute inset-0 bg-worley mix-blend-multiply" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-worley-dark via-worley-dark opacity-40" />
                                            <div className="relative px-8">
                                                <div>
                                                    <img
                                                        className="h-12"
                                                        src={WorleysLogo}
                                                        alt="Workcation"
                                                    />
                                                </div>
                                                <blockquote className="mt-8">
                                                    <div className="relative text-lg font-medium text-white md:flex-grow">
                                                        <p className="relative">
                                                            Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                                                            Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                                                        </p>
                                                    </div>
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
                                            <a href="#" className="text-base font-medium text-indigo-600">
                                                {' '}
                                                Learn more about how we're changing the world <span aria-hidden="true">&rarr;</span>{' '}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Case Study */}

                    {/* Contact Form */}
                    <ContactForm />
                    {/* Contact Form */}
                </main>
            </Layout>
        );
    }
}

export default MobileApps;