import React, {Component} from 'react';
import {Link} from "gatsby";
import Layout from "../../components/global/layout";
import {
    InboxIcon,
    TrashIcon,
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

const features = [
    {
        name: 'SEO Optimization',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: InboxIcon,
    },
    {
        name: 'Built to Scale',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: UsersIcon,
    },
    {
        name: '360° Support',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: TrashIcon,
    },
]
const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]

class WebDesign extends Component {
    render() {
        return (
            <Layout>
                <main>
                    {/* Hero section */}
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
                                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 lg:max-w-7xl sm:mx-auto">
                                            <h1 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                                <span className="block text-white">Take control of your</span>
                                                <span className="block text-indigo-200">customer support</span>
                                            </h1>
                                            <p className="mt-6 max-w-lg text-left text-xl text-indigo-200 sm:max-w-3xl">
                                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                                amet fugiat veniam occaecat fugiat aliqua.
                                            </p>
                                            <div className="mt-10 max-w-sm  sm:max-w-none sm:flex ">
                                                <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
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

                    {/* Approach Text */}
                    <section>
                        <div className="max-w-3xl mx-auto py-12 text-center">
                            <div className="mb-5">
                                <h2>Our Approach</h2>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl">Beneath the surface, there are countless factors that support the speed,
                                    functionality, and security of your website. Our seasoned developers
                                    understand the latest strategies to maximize the efficiency of your website
                                    while including the features that you need.</p>
                            </div>
                        </div>
                    </section>
                    {/* Approach Text */}

                    {/* Frameworks */}
                    <section className="bg-white">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-5">
                                <h2>Technology</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
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
                                <div className="col-span-2 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
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
                                <div className="col-span-2 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
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

                    {/* Additional Information */}
                    <section className="py-12 bg-white">
                        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">A better way to send money.</h2>
                            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
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
                    {/* Additional Information */}

                    {/* Testimonial */}
                    <section className="py-12  overflow-hidden md:py-20 lg:py-24">
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="relative">
                                <img
                                    className="mx-auto h-8"
                                    src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
                                    alt="Workcation"
                                />
                                <blockquote className="mt-10">
                                    <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                                        <p>
                                            &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                                            alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
                                        </p>
                                    </div>
                                    <footer className="mt-8">
                                        <div className="md:flex md:items-center md:justify-center">
                                            <div className="md:flex-shrink-0">
                                                <img
                                                    className="mx-auto h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                                <div className="text-base font-medium text-gray-900">Judith Black</div>

                                                <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M11 0h3L9 20H6l5-20z" />
                                                </svg>

                                                <div className="text-base font-medium text-gray-500">CEO, Workcation</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </section>
                    {/* Testimonial */}

                    {/* Case Study */}
                    <section>
                        <div className="relative bg-travel-teal lg:pt-24 lg:pb-24">
                            <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                                <div className="h-full w-full xl:grid xl:grid-cols-2">
                                    <div className="h-full xl:relative xl:col-start-2 w-full hidden lg:block">
                                        <img
                                            className="my-auto h-3/4 w-full object-cover xl:absolute xl:inset-0 rounded"
                                            src={TravelMockup}
                                            alt="People working on laptops"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                                <div className="relative pt-12 pb-16 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24 text-center sm:text-left">
                                    <div className="mt-3 mb-7 text-3xl font-extrabold lg:mb-16">
                                        <img
                                            className="mx-auto h-16 sm:mx-0"
                                            src={Logo}
                                            alt="Doughnuts & Dragons Logo"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="uppercase text-5xl tracking-tighter">Hustle Never Stops</h2>
                                    </div>
                                    <p className="mt-5 text-lg text-gray-300 md:mr-48">
                                        Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
                                        feugiat viverra eleifend fusce orci in quis amet.
                                    </p>
                                    <div className="w-1/2 mx-auto sm:mx-0">
                                        <Link className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
                                            View Case Study
                                        </Link>
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

export default WebDesign;