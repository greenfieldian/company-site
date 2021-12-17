import React, {Component} from 'react';
import Mockup from '../images/app-mockup.png'
import Logo from "../images/dnd-logo.png";
import {Link} from "gatsby";


class AppCasePreview extends Component {
    render() {
        return (
            <segment>
                <div className="relative bg-gradient-to-r from-blue-500 to-blue-300 w-full text-white lg:pt-24 lg:pb-24">
                    <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                        <div className="h-full w-full xl:grid xl:grid-cols-2">
                            <div className="h-full xl:relative xl:col-start-2 hidden lg:block">
                                <img
                                    className=" object-cover xl:absolute xl:inset-0 h-3/4 my-auto mx-auto"
                                    src={Mockup}
                                    alt="People working on laptops"
                                />

                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                        <div className="relative pt-12 pb-16 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24 text-center sm:text-left">
                            <div className="mt-3 mb-7 text-3xl font-extrabold">
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
                                <Link className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto">
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

export default AppCasePreview;