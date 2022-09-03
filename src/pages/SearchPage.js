import React, {Fragment, useEffect} from 'react'
import Demos from '../components/Demos/Demos';
import Footer from '../components/Footer/Footer';
import Helmet from '../components/Helmet/Helmet';
import { useParams } from 'react-router';
import Arrivals from '../components/NewArrivals/Arrivals';

const SearchPage = () => {
    const { title } = useParams();
    const titleUrl = title
    //console.log(titleUrl);
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <Fragment>
            <Helmet title="Search">
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

export default SearchPage
