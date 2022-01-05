import React from 'react'
import {Link} from 'gatsby'

export default function CallToAction() {
    return (
        <div className="bg-light-blue">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="py-6 bg-indigo-700 rounded-lg md:py-12 lg:py-16 xl:flex xl:items-center">
                    <div className="xl:w-0 xl:flex-1">
                        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-accent">
                            Want exclusive news and updates?
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                            Access exclusive tips, tricks and insights we only share with email subscribers.
                        </p>
                    </div>
                    <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                        <form className="sm:flex" action="https://shockmouse.us19.list-manage.com/subscribe/post">
                            <input type="hidden" name="u" value="962f209626adb246c287f805c" />
                            <input type="hidden" name="id" value="d46690309f" />
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="MERGE0"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="mt-3 w-full flex items-center justify-center px-5 py-3 shadow text-base font-medium rounded-md text-white bg-accent hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                            >
                                Notify me
                            </button>
                        </form>
                        <p className="mt-3 text-sm text-indigo-200">
                            We care about the protection of your data. Read our{' '}
                            <Link to="/legal/privacy-policy" className="text-accent font-medium underline">
                                Privacy Policy.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}