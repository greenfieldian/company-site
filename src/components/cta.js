import React from 'react'
import {Link} from 'gatsby'

export default function CallToAction() {
    return (
        <div className="bg-light-blue">
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold  sm:text-4xl">
                    <span className="block">Access exclusive tips, tricks and insights we only share with email subscribers</span>
                </h2>
                <Link
                    to="/subscribe"
                    className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-3xl bg-accent text-white hover:bg-indigo-50 sm:w-auto"
                >
                    Subscribe
                </Link>
            </div>
        </div>
    )
}