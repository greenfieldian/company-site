import React, {Component} from 'react';
import AWS from '../images/aws.webp'
import Hubspot from '../images/hubspot.webp'
import Webflow from '../images/webflow.webp'
import WPEngine from '../images/wp-engine.webp'
import Shopify from '../images/shopify-partner.webp'
import Mailchimp from '../images/mailchimp-partner.webp'
import Squarespace from '../images/squarespace-circle.webp'

class PartnerCloud extends Component {
    render() {
        return (
            <div className="bg-light-gray">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h4 className="text-3xl font-extrabold text-black text-center">Our Partners</h4>
                    <div className="flow-root mt-8 lg:mt-10">
                        <div className="-mt-4 -ml-8 grid md:grid-cols-7">
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                <img className="h-9 mx-auto" src={AWS} alt="Tuple" />
                            </div>
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                <img className="h-9 mx-auto" src={Hubspot} alt="Mirage" />
                            </div>
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                <img
                                    className="h-9 mx-auto"
                                    src={Webflow}
                                    alt="StaticKit"
                                />
                            </div>
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                <img
                                    className="h-9 mx-auto"
                                    src={WPEngine}
                                    alt="Transistor"
                                />
                            </div>
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                <img
                                    className="h-9 mx-auto"
                                    src={Shopify}
                                    alt="Workcation"
                                />
                            </div>
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                <img
                                    className="h-9 mx-auto"
                                    src={Mailchimp}
                                    alt="Workcation"
                                />
                            </div>
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                <img
                                    className="h-9 mx-auto"
                                    src={Squarespace}
                                    alt="Workcation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerCloud;