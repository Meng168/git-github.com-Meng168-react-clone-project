import React, { Fragment, useEffect } from 'react'
import Demos from '../components/Demos/Demos'
import Footer from '../components/Footer/Footer'
import Helmet from '../components/Helmet/Helmet'
import Arrivals from '../components/NewArrivals/Arrivals'
import { useParams } from 'react-router';

const CategoryPage = () => {
    const { title } = useParams();
    const titleUrl = title

    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <Fragment>
            <Helmet title="Category">
                <Demos />
                    <Arrivals 
                        tabs={false} 
                        popular={false}
                        shop={true}
                        titleHead="Category"
                        titleUrl={titleUrl}
                    />
                <Footer />
            </Helmet>
        </Fragment>
    )
}

export default CategoryPage
