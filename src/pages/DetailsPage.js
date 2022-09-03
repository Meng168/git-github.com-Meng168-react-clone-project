import React, { Fragment, useEffect } from 'react'
import Details from '../components/Details/Details'
import Footer from '../components/Footer/Footer'
import Helmet from '../components/Helmet/Helmet'
import Arrivals from '../components/NewArrivals/Arrivals'
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

const DetailsPage = () => {
    const { id, title } = useParams();
    useEffect(() => {
        window.scroll(0, 0)
    });

    const dispatch = useDispatch()
    const handleAddToCart = (item) =>{
        dispatch()
    }

    return (
        <Fragment>
            <Helmet title="Details">
                <Details 
                    categoryId={id}
                    handleAddToCart={handleAddToCart}
                />
                <Arrivals 
                    tabs={false} 
                    popular={false}
                    shop={false}
                    titleHead="Category"
                    titleUrl={title}
                />
                <Footer />
            </Helmet>
        </Fragment>
    )
}

export default DetailsPage
