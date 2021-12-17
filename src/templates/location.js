import React, {Component} from 'react';
import Layout from "../components/global/layout";
import {graphql} from "gatsby";
import get from 'lodash/get'

class LocationTemplate extends Component {
    render() {
        const location = get(this.props, 'data.contentfulLocations')

        return (
            <Layout>
                <div>
                    <div>
                        <div>
                            <img src={location.heroImage.file.url} className="h-screen w-full"/>
                        </div>
                    </div>
                </div>
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