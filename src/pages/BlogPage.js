import React, { Fragment, useEffect, useState } from 'react'
import Blog from '../components/Blog/Blog'
import Demos from '../components/Demos/Demos'
import Footer from '../components/Footer/Footer'
import Helmet from '../components/Helmet/Helmet'
import SimpleDialogDemo from '../components/Loading/SimpleDialog'

const delay = 0.9;

const BlogPage = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    useEffect(
        () => {
            let timer1 = setTimeout(() => setShow(true), delay * 1000);
            return () => {
                clearTimeout(timer1);
            };
        },
        []
    );
    return show ? (
        <Fragment>
            <Helmet title="Blog">
                <Demos />
                    <Blog />
                <Footer />
            </Helmet>
        </Fragment>
    ) : (
        //loading
        <SimpleDialogDemo / >
    )
}

export default BlogPage
