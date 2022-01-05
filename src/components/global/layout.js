import React from 'react';
import {Helmet} from "react-helmet";
import Header from "../header";
import Footer from '../footer'

const Layout =({children}) =>{
    return(
        <div className="bg-white">
                <Header />
            <main>{children}</main>
            <div><Footer /></div>
        </div>
    )
}

export default Layout;