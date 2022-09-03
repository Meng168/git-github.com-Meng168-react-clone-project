import React, { Fragment, useEffect } from 'react'
import Cart from '../components/Cart/Cart'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Helmet from '../components/Helmet/Helmet'

const CartPage = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <Fragment>
            <Helmet title="Cart">
                    <Cart />
                <Footer />
            </Helmet>
        </Fragment>
    )
}

export default CartPage
