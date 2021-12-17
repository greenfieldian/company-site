import React from 'react';
import {Helmet} from "react-helmet";
import Header from "../header";
import Footer from '../footer'

const Layout =({children}) =>{
    return(
        < div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Shockmouse Media</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                <Header />
            <main>{children}</main>
            <div><Footer /></div>
        </div>
    )
}

export default Layout;