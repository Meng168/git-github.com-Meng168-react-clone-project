import React, { Fragment, useEffect } from 'react'
import Demos from '../components/Demos/Demos'
import Footer from '../components/Footer/Footer'
import Helmet from '../components/Helmet/Helmet'
import Shipping from '../components/Shipping/Shipping'

const ShippingPage = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <Fragment>
            <Helmet title="Shipping">
                <Demos />
                    <Shipping />
                <Footer />
            </Helmet>
        </Fragment>
    )
}

export default ShippingPage
