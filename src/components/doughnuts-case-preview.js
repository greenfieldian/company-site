import React, {Component} from 'react';
import Mockup from '../images/doughnuts-iphone-mockup.png'
import Logo from '../images/dnd-logo.png'
import {Link} from 'gatsby'

const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]

class DoughnutsCasePreview extends Component {
    render() {
        return (
            <segment>
                <div className="relative bg-doughnuts-green lg:pt-24 lg:pb-24">
                    <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                        <div className="h-full w-full xl:grid xl:grid-cols-2">
                            <div className="h-full xl:relative xl:col-start-2 hidden lg:block">
                                <img
                                    className=" object-cover xl:absolute xl:inset-0 h-3/4 my-auto mx-auto"
                                    src={Mockup}
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
                                <h2 className="uppercase text-5xl sm:text-7xl font-black tracking-tighter">Doughnuts. Beer. Board games.</h2>
                            </div>
                            <p className="mt-5 text-lg text-gray-300 md:mr-48">
                                Doughnuts & Dragons set out to revamp the fast-casual dining experience. We built the infrastructure that allows them to reach more people.
                            </p>
                            <div className="w-1/2 mx-auto sm:mx-0">
                                <Link className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border-2 border-transparent text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto">
                                    View Case Study
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </segment>
        );
    }
}

export default DoughnutsCasePreview;