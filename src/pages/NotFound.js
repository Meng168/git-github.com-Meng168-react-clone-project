import React, { Fragment, useEffect } from 'react'
import Demos from '../components/Demos/Demos'
import Error404 from '../components/Error404/Error404'
import Footer from '../components/Footer/Footer'
import Helmet from '../components/Helmet/Helmet'

const NotFound = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <Fragment>
            <Helmet title="Error404">
                <Demos />
                    <Error404 />
                <Footer />
            </Helmet>
        </Fragment>
    )
}

export default NotFound
