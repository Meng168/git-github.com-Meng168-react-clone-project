import React, { Fragment, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Helmet from '../components/Helmet/Helmet'
import Wishlist from '../components/Wishlist/Wishlist'

const WishlistPage = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <Fragment>
            <Helmet title="Wishlist">
                <Wishlist />
                <Footer />
            </Helmet>
        </Fragment>
    )
}

export default WishlistPage
