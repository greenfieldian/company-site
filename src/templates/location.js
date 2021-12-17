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
                        <div>
                            <img src={location.heroImage.file.url} className="h-2/4 w-full"/>
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
    }
}
`