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
                <div>
                    <div>
                        <div className="h-screen relative">
                            <div className="bg-black md:h-screen opacity-25 absolute top-0"/>
                            <img src={location.heroImage.file.url} className="md:h-screen w-full"/>
                            <div className="bg-black"/>
                        </div>
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