import React, { Fragment, useEffect } from 'react'
import Contact from '../components/Contact/Contact'
import Demos from '../components/Demos/Demos'
import Footer from '../components/Footer/Footer'
import Helmet from '../components/Helmet/Helmet'

const ContactPage = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <Fragment>
            <Helmet title="Contact">
                <Demos />
                    <Contact />
                <Footer />
            </Helmet>
        </Fragment>
    )
}

export default ContactPage
