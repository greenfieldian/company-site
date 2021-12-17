import React, {Component} from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Layout from '../components/global/layout'
import CallToAction from "../components/cta";
import ContactForm from "../components/contact-form";

class ContactPage extends Component {
    render() {
        return (
            <Layout>
            <main>
                {/* Header */}
                <div className="py-24 bg-gray-50 sm:py-32">
                    <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                            Get in touch
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
                            Convallis feugiat et aliquet pellentesque dictum nisi, velit. Egestas fermentum adipiscing risus quam ac
                            consectetur mattis turpis tristique.
                        </p>
                    </div>
                </div>

                {/* Co*/}
                <div>
                    <ContactForm />
                </div>

                {/* CTA Section */}
                <CallToAction />
            </main>
            </Layout>
        );
    }
}

export default ContactPage;