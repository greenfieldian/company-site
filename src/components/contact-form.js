import { useState } from 'react'
import {Link} from 'gatsby'
import { Switch } from '@headlessui/react'
import React from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ContactForm() {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                </div>
                <div className="mt-12">
                    <form action="#" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" name="contact" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <input type="hidden" name="form-name" value="contact" />
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="first-name"
                                    placeholder="First Name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="py-3 px-4 block w-full focus:border-black border-light-grey border shadow-sm placeholder-light-grey rounded-3xl"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="last-name"
                                    placeholder="Last Name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-light-grey placeholder-light-grey rounded-3xl"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                Company
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    id="company"
                                    autoComplete="organization"
                                    className="py-3 rounded-3xl px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-light-grey placeholder-light-grey"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    autoComplete="email"
                                    className="py-3 rounded-3xl px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-light-grey placeholder-light-grey"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="mt-1 relative shadow-sm">
                                <input
                                    type="text"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    className="py-3 rounded-3xl px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border border-light-grey placeholder-light-grey"
                                    placeholder="+1 (555) 987-6543"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <div className="mt-1">
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message..."
                    rows={4}
                    className="py-3 rounded-3xl px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-light-grey placeholder-light-grey"
                    defaultValue={''}
                />
                            </div>
                        </div>
                        {/*<div className="sm:col-span-2">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className={classNames(
                                            agreed ? 'bg-accent' : 'bg-light-gray',
                                            'relative inline-flex flex-shrink-0 h-6 w-11 border border-light-grey rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed ? 'translate-x-5' : 'translate-x-0',
                                                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                {/*<div className="ml-3">
                                    <p className="text-base text-gray-500">
                                        By selecting this, you agree to the{' '}
                                        <Link to="/legal/privacy-policy" className="font-medium text-accent underline">
                                            Privacy Policy
                                        </Link>{' '}
                                        and{' '}
                                        <Link to="/legal/cookies-policy" className="font-medium text-accent underline">
                                            Cookie Policy
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>*/}
                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="w-full sm:w-auto rounded-3xl inline-flex items-center justify-center px-6 py-3 shadow-sm text-base font-medium hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent bg-accent text-white"
                            >
                                Send us a message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}