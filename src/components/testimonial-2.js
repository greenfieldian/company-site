import React, {Component} from 'react';
import Logo from "../images/23-street.webp"

class Testimonial2 extends Component {
    render() {
        return (
            <section className="py-12  overflow-hidden md:py-20 lg:py-24">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <img
                            className="mx-auto h-20"
                            src={Logo}
                            alt="Workcation"
                        />
                        <blockquote className="mt-10">
                            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                                <p>
                                    &ldquo;We've had issues with agencies in the past, so we were naturally hesitant to work with one again. The Shockmouse Media team understood and respected our concerns, patiently guiding us through our website re-design. As a result, we have an incredible site, and they now have a lifelong customer.  &rdquo;
                                </p>
                            </div>
                            <footer className="mt-8">
                                <div className="md:flex md:items-center md:justify-center">
                                    <div className="md:flex-shrink-0">
                                        <img
                                            className="mx-auto h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                        <div className="text-base font-medium text-gray-900">Michelle Anastasio</div>

                                        <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M11 0h3L9 20H6l5-20z" />
                                        </svg>

                                        <div className="text-base font-medium text-gray-500">President, 23 Street</div>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial2;