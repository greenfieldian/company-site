import React, {Component} from 'react';
import Clutch from '../images/clutch-icon.png'
import FinTimes from '../images/financial-times-cert.png'
import Google from '../images/google-cert.png'
import Deloitte from '../images/deloitte-cert.png'
import Shopify from '../images/shopify-experts.png'

class PartnerCloud extends Component {
    render() {
        return (
            <div className="border-t border-light-gray">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="flow-root mt-8 lg:mt-10">
                        <div className="-mt-4 -ml-8 flex flex-wrap justify-between items-center text-black">
                            <div className="mt-8 ml-8 flex flex-grow flex-col flex-shrink-0 lg:flex-grow-0 lg:ml-4 text-center w-5/12 sm:w-auto">
                                <div className="h-20 flex items-center">
                                    <img className="h-20 mx-auto" src={Clutch} alt="Tuple" />
                                </div>
                                <span className="mt-2 font-medium">Global Leader <br/> Clutch 2021</span>
                            </div>
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 flex-col lg:flex-grow-0 lg:ml-4 text-center w-5/12 sm:w-auto">
                                <div className="h-20 flex items-center">
                                    <img className="h-20 mx-auto" src={FinTimes} alt="Mirage" />
                                </div>
                                <span className="mt-2 font-medium">TOP 20 <br/> FT 1000</span>
                            </div>
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 flex-col lg:flex-grow-0 lg:ml-4 text-center w-5/12 sm:w-auto">
                                <div className="h-20 flex items-center">
                                    <img
                                        className="h-20 mx-auto"
                                        src={Google}
                                        alt="StaticKit"
                                    />
                                </div>
                                <span className="mt-2 font-medium">Google <br/>Certified Agency</span>
                            </div>
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 flex-col lg:flex-grow-0 lg:ml-4 text-center w-5/12 sm:w-auto">
                                <div className="h-20 flex items-center">
                                    <img
                                        className="h-9 mx-auto"
                                        src={Deloitte}
                                        alt="Transistor"
                                    />
                                </div>
                                <span className="mt-2 font-medium">Deloitte <br/>Fast 50</span>
                            </div>
                            <div className="mt-8 ml-8 flex flex-grow flex-shrink-0 flex-col lg:flex-grow-0 lg:ml-4 text-center w-5/12 sm:w-auto">
                                <div className="h-20 flex items-center">
                                    <img
                                        className="h-16 mx-auto"
                                        src={Shopify}
                                        alt="Workcation"
                                    />
                                </div>
                                <span className="mt-2 font-medium">Certified <br/>Shopify Experts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerCloud;