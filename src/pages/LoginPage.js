import React, { Fragment, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import Login from '../components/Login/Login'

const LoginPage = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <Fragment>
            <Helmet title="Login">
                <Login />
            </Helmet>
        </Fragment>
    )
}

export default LoginPage
