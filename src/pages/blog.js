import React, {Component} from 'react';
import Layout from "../components/global/layout";
import CallToAction from "../components/cta";
import { ChevronRightIcon } from '@heroicons/react/solid'

const posts = [
    {
        title: 'Boost your conversion rate',
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'Boost your conversion rate',
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'Boost your conversion rate',
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

class Blog extends Component {
    render() {
        return (
            <Layout>
                <main>
                    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                        <div className="mx-auto max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                    <div className="lg:py-24">
                                        <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                            <span className="block">A better way to</span>
                                            <span className="block text-indigo-400">ship web apps</span>
                                        </h1>
                                        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt
                                            amet fugiat veniam occaecat fugiat.
                                        </p>
                                        <div className="mt-10 sm:mt-12">
                                            <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                                <div className="sm:flex">
                                                    <div className="min-w-0 flex-1">
                                                        <label htmlFor="email" className="sr-only">
                                                            Email address
                                                        </label>
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            placeholder="Enter your email"
                                                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                                                        />
                                                    </div>
                                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                                        <button
                                                            type="submit"
                                                            className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                                                        >
                                                            Join our newsletter
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                        <img
                                            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                            src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 max-w-7xl m-auto">
                        <div className="relative max-w-7xl mx-auto">
                            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-5">
                                    <div  className="flex flex-col overflow-hidden col-span-2">
                                        <div className="flex-shrink-0">
                                            <img className="md:h-96 w-full object-cover rounded" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        </div>
                                        <div className="flex-1 bg-white py-4 flex flex-col justify-between">
                                            <div className="flex-1">
                                                <a href="#" className="block mt-2">
                                                    <p className="text-xl font-semibold text-gray-900">The complete guide to heatmaps</p>
                                                    <p className="mt-2 text-base text-gray-500">Heatmaps are a powerful way to understand what users do on your website pages—where they click, how far they scroll, what they look at or ignore.</p>
                                                </a>
                                            </div>
                                            {/*<div className="mt-6 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <a href={post.author.href}>
                                                        <span className="sr-only">{post.author.name}</span>
                                                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                                                    </a>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        <a href={post.author.href} className="hover:underline">
                                                            {post.author.name}
                                                        </a>
                                                    </p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime={post.datetime}>{post.date}</time>
                                                        <span aria-hidden="true">&middot;</span>
                                                        <span>{post.readingTime} read</span>
                                                    </div>
                                                </div>
                                            </div>*/}
                                        </div>
                                    </div>

                                    <div className="bg-gray-300 sm:flex-grow rounded sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden md:h-96">
                                        <div className="px-4 py-8 sm:px-10">
                                            <div>
                                                <h3>Receive exclusive tips, tricks and insights, right to your inbox.</h3>
                                            </div>
                                            <div className="mt-6">
                                                <form action="#" method="POST" className="space-y-6">
                                                    <div>
                                                        <label htmlFor="name" className="sr-only">
                                                            Full name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            autoComplete="name"
                                                            placeholder="Name"
                                                            required
                                                            className="block w-full shadow-sm pl-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="mobile-or-email" className="sr-only">
                                                            Mobile number or email
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="mobile-or-email"
                                                            id="mobile-or-email"
                                                            autoComplete="email"
                                                            placeholder="Email"
                                                            required
                                                            className="block w-full py-2 pl-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div>
                                                        <button
                                                            type="submit"
                                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            Create your account
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                                {posts.map((post) => (
                                    <div key={post.title} className="flex flex-col overflow-hidden">
                                        <div className="flex-shrink-0">
                                            <img className="h-48 w-full object-cover rounded" src={post.imageUrl} alt="" />
                                        </div>
                                        <div className="flex-1 bg-white py-4 flex flex-col justify-between">
                                            <div className="flex-1">
                                                <a href={post.href} className="block mt-2">
                                                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                                    <p className="mt-2 text-base text-gray-500">{post.description}</p>
                                                </a>
                                            </div>
                                            {/*<div className="mt-6 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <a href={post.author.href}>
                                                        <span className="sr-only">{post.author.name}</span>
                                                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                                                    </a>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        <a href={post.author.href} className="hover:underline">
                                                            {post.author.name}
                                                        </a>
                                                    </p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime={post.datetime}>{post.date}</time>
                                                        <span aria-hidden="true">&middot;</span>
                                                        <span>{post.readingTime} read</span>
                                                    </div>
                                                </div>
                                            </div>*/}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <CallToAction />
            </Layout>
        );
    }
}

export default Blog;