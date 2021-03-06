import React, {Component} from 'react';
import {graphql, Link} from 'gatsby'
import get from 'lodash/get'
import Layout from "../../components/global/layout";
import CallToAction from "../../components/cta";



class Index extends Component {
    render() {
        const locations = get(this, 'props.data.allContentfulLocations.edges')
        return (
            <Layout>
                <section className="mt-16 mx-auto max-w-7xl px-4 sm:my-24">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Where We're Located</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            We're a national agency leveraging our size to bring value to the communities we serve. Come say hi!
                        </p>
                    </div>
                </section>

                <section>
                    <div className="">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <dl className="sm:space-y-0 grid grid-cols-2 gap-4 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                                {locations.map((location) => (
                                    <div key={location.node.title} className="relative mb-3 ">
                                        <Link to={`/locations/${location.node.slug}`}>
                                            <div className="mb-3">
                                                <img src={location.node.heroImage.file.url} className="h-44 rounded w-full"/>
                                            </div>
                                            <dt>
                                                <p className="text-lg leading-6 font-medium text-gray-900 font-bold">{location.node.title}</p>
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-500">{location.node.address}</dd>
                                            <dd className="mt-2 text-base text-gray-500">{location.node.city}</dd>
                                        </Link>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>
                <CallToAction />
            </Layout>
        );
    }
}

export default Index;

export const pageQuery = graphql`
query LocationIndexQuery {
    allContentfulLocations {
        edges {
          node {
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
    }
}
`