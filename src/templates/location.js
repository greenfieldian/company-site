import React, {Component} from 'react';
import Layout from "../components/global/layout";
import {graphql} from "gatsby";
import get from 'lodash/get'
import ContactForm from "../components/contact-form";

class LocationTemplate extends Component {
    render() {
        const location = get(this.props, 'data.contentfulLocations')

        return (
            <Layout>
                <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full object-cover"
                                    src={location.heroImage.file.url}
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black to-black mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">{location.title}</span>
                                </h1>
                                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                                    {location.address}
                                </p>
                                <p>{location.city}</p>
                                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                    <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                        >
                                            Get Directions
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div>
                        <div className="max-w-xl mx-auto">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">About This Office</h2>
                            <p >{location.description.description}</p>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </Layout>
        );
    }
}

export default LocationTemplate;

export const pageQuery = graphql`
query LocationPageQuery($slug: String!) {
    contentfulLocations(slug: { eq: $slug }) {
        title
        address
        city
        slug
        heroImage {
          file {
            url
          }
        }
        description {
            description
        }
    }
}
`