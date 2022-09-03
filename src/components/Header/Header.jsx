import React from 'react'
import { Container } from 'react-bootstrap'
import './Header.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container fluid={true} className="bg-header">
            <Container className='custom-container'>
                <div className='header'>
                    <div className="header__left">
                        <span className='header__left-icon'><LocalShippingIcon /></span>
                        <span className='header__left-shipping'>FREE SHIPPING OVER $100</span>
                    </div>
                    <div className="header__right">
                        <div className="header__right-one">
                            <div>
                                <Link to="/shipping">Shipping</Link>
                            </div>
                            <div>
                                <Link to="/faq">FAQ</Link>
                            </div>
                            <div>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </div>
                        <div className="header__left-two">
                            <div className='header__left-icon'><a href="https://www.facebook.com/sin.meng.3720" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a></div>
                            <div className='header__left-icon'><a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a></div>
                            <div className='header__left-icon'><a href="https://www.instagram.com/_sinmeng/?hl=en" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a></div>
                            <div className='header__left-icon'><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><LocalParkingIcon /></a></div>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Header
