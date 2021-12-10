import React, {Component} from 'react';

class Hero extends Component {
    render() {
        return (
            <div>
                <main className="lg:relative">
                    <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-36 lg:text-left">
                        <div className="px-4 sm:px-8 text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl">
                                <span className="block xl:inline">A design experience built for small business owners</span>
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                                We’re revolutionizing the way the web is built. Learn how we help small businesses reach their most ambitious goals.
                            </p>
                            {/*<div className="mt-10 mx-auto sm:flex sm:justify-center">
                                <div className="rounded-md shadow">
                                    <Link
                                        href="#"
                                        className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                    {/*<div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                            alt=""
                        />
                    </div>*/}
                </main>
            </div>
        );
    }
}

export default Hero;