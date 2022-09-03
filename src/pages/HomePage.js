import React, { Fragment, useEffect } from 'react'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import Demos from '../components/Demos/Demos'
import FAQs from '../components/FAQs/FAQs'
import Footer from '../components/Footer/Footer'
import Helmet from '../components/Helmet/Helmet'
import Arrivals from '../components/NewArrivals/Arrivals'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Slide from '../components/Slide/Slide'

const HomePage = () => {
    // useEffect(() => {
    //     window.scroll(0, 0)
    // }, []);
    return (
        <Fragment>
            <Helmet title="Home">
                <Demos />
                <Slide />
                <Arrivals 
                    title="New Arrivals" 
                    tabs={true} 
                    popular={false}
                    shop={false}
                    titleHead={null}
                />
                <Banner />
                <Arrivals 
                    title="Popular Products" 
                    tabs={false} 
                    popular={true}
                    shop={false}
                    titleHead={null}
                />
                <NewsLetter />
                <FAQs />
                <Categories />
                <Footer />
            </Helmet>
        </Fragment>
    )
}

export default HomePage
