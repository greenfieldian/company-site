import React, {Component} from 'react';
import {Link} from "gatsby";
import Layout from "../../components/global/layout";
import {
    InboxIcon,
    TrashIcon, UserGroupIcon,
    UsersIcon,

} from '@heroicons/react/outline'
import ContactForm from "../../components/contact-form";
import TravelMockup from "../../images/travel-mockup.png";
import Logo from "../../images/dnd-logo.png";
import Contentful from "../../images/contentful.webp"
import Gatsby from "../../images/gatsby.webp"
import HTML from "../../images/html.webp"
import CSS from "../../images/css.webp"
import Rails from "../../images/rails.webp"
import NodeJS from "../../images/node-js.webp"
import WebsitesImage from "../../images/websites-image.png";
import Beck from "../../images/beck-logo.webp";
import {Helmet} from "react-helmet";

const features = [
    {
        name: 'SEO Optimization',
        description: 'Optimized for maximum searchability, allowing your customers to find you when they need you most.',
        icon: InboxIcon,
    },
    {
        name: 'Built to Scale',
        description: 'Custom solutions optimized for efficiency, flexibility and deployment speed',
        icon: UsersIcon,
    },
    {
        name: '360° Support',
        description: 'Built from the ground up, including hosting, page navigation,\n' +
            'features, SEO, and more.',
        icon: TrashIcon,
    },
    {
        name: 'Complete Product Teams',
        description: 'Access our team of business analysts, product designers, project managers, QA engineers, and full-stack developers',
        icon: UserGroupIcon,
    },
    {
        name: 'Quality Assurance',
        description: 'QA performed before each deploy through manual and automated tests that catch bugs, performance issues, and conversion blockers',
        icon: TrashIcon,
    },
    {
        name: 'World-class UX/UI',
        description: 'Designed to help your business with user adoption.',
        icon: TrashIcon,
    },
]

class WebDesign extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Websites | Shockmouse Media</title>
                    <link rel="canonical" href="https://shockmouse.com" />
                </Helmet>
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
                                            <span className="uppercase text-sm font-medium text-accent">Web Development</span>
                                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                                <span className="block">Deliver great user experiences through our proven web development strategies.</span>
                                            </h1>
                                            <p className="mt-6 mx-auto max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                                                We’ve helped hundreds of companies transform their digital presence. Develop with confidence with our proven team of web development specialists.
                                            </p>
                                            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex ">
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
                                    <h2>One scalable team for start-to-finish development</h2>
                                </div>
                                <div className="">
                                    <p className="font-light text-lg">Beneath the surface, there are countless factors that support the speed, functionality, and security of your website. Todays business landscape is becoming increasingly digital-based, requiring that all companies wishing to compete have a strong web presence. Having experienced every stage of digital, we have developed proven methodologies for achieving business success. Our seasoned developers understand the latest strategies to maximize the efficiency of your website, while including the features that matter most to all stakeholders involved.</p>
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
                    {/* Approach Text */}

                    <section className="pb-24 pt-8 bg-white font-light">
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

                    {/* Frameworks */}
                    <section className="bg-white">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-5 max-w-3xl mx-auto mb-24">
                                <h2 className="text-3xl md:text-4xl pb-8">Choose battle-tested web development services with community support over hype</h2>
                                <p className="text-base sm:text-xl font-light">Whatever web applications you’re building, we have your back at every stage of the development process. We’ve built a core system for a bank, an MVP marketplace that sold for millions, and other 5☆ projects for 140+ companies worldwide.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6 font-medium">
                                <div className="col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img className="h-12 mb-3" src={HTML} alt="Tuple" />
                                    </div>
                                    <div>
                                        <p>HTML 5</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img className="h-12 mb-3" src={CSS} alt="Mirage" />
                                    </div>
                                    <div>
                                        <p>CSS3</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img className="h-12 mb-3" src={Gatsby} alt="StaticKit" />
                                    </div>
                                    <div>
                                        <p>Gatsby JS</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img
                                            className="h-12 mb-3"
                                            src={Contentful}
                                            alt="Transistor"
                                        />
                                    </div>
                                    <div>
                                        <p>Contentful</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img
                                            className="h-12 mb-3"
                                            src={Rails}
                                            alt="Workcation"
                                        />
                                    </div>
                                    <div>
                                        <p>Ruby on Rails</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img
                                            className="h-12 mb-3"
                                            src={NodeJS}
                                            alt="Workcation"
                                        />
                                    </div>
                                    <div>
                                        <p>Node JS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Frameworks */}

                    {/* Testimonial */}
                    <section className="py-12  overflow-hidden md:py-20 lg:py-24">
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="relative">
                                <img
                                    className="mx-auto h-20"
                                    src={Beck}
                                    alt="Workcation"
                                />
                                <blockquote className="mt-10">
                                    <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                                        <p>
                                            &ldquo;Their business acumen, coupled with their creative prowess, is an unmatched force. Over the course of our relationship, they've become not just a valued service provider, but a key growth partner.&rdquo;
                                        </p>
                                    </div>
                                    <footer className="mt-8">
                                        <div className="md:flex md:items-center md:justify-center">
                                            <div className="md:flex-shrink-0">
                                                <img
                                                    className="mx-auto h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                                <div className="text-base font-medium text-gray-900">Michael Judine</div>

                                                <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M11 0h3L9 20H6l5-20z" />
                                                </svg>

                                                <div className="text-base font-medium text-gray-500">Managing Director, Beck Venture Partners</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </section>
                    {/* Testimonial */}

                    {/* Contact Form */}
                    <ContactForm />
                    {/* Contact Form */}
                </main>
            </Layout>
            </>
        );
    }
}

export default WebDesign;