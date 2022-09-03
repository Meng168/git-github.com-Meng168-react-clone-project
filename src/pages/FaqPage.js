import React, { Fragment, useEffect } from 'react'
import Demos from '../components/Demos/Demos'
import Faq from '../components/Faq/Faq'
import Footer from '../components/Footer/Footer'
import Helmet from '../components/Helmet/Helmet'

const FaqPage = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <Fragment>
            <Helmet title="FAQ">
                <Demos />
                    <Faq />
                <Footer />
            </Helmet>
        </Fragment>
    )
}

export default FaqPage
