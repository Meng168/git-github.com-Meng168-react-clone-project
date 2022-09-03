import React, { Fragment } from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <Fragment>
            <Container className='custom-container widget'>
                <Row>
                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                        <div className="widget_nav_menu">
                            <h6 className="widget-title">About Us</h6>
                            <ul>
                                <li className="menu-item"><a href="#">About Us</a></li>
                                <li className="menu-item"><a href="#">Customer Reviews</a></li>
                                <li className="menu-item"><a href="#">Careers</a></li>
                                <li className="menu-item"><a href="#">Media</a></li>
                                <li className="menu-item"><a href="#">Affilicate Program</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                        <div className="widget_nav_menu">
                            <h6 className="widget-title">About Us</h6>
                            <ul>
                                <li className="menu-item"><a href="#">About Us</a></li>
                                <li className="menu-item"><a href="#">Customer Reviews</a></li>
                                <li className="menu-item"><a href="#">Careers</a></li>
                                <li className="menu-item"><a href="#">Media</a></li>
                                <li className="menu-item"><a href="#">Affilicate Program</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                        <div className="widget_nav_menu">
                            <h6 className="widget-title">QUICK LINKS</h6>
                            <ul>
                                <li className="menu-item"><a href="#">About Us</a></li>
                                <li className="menu-item"><a href="#">Customer Reviews</a></li>
                                <li className="menu-item"><a href="#">Careers</a></li>
                                <li className="menu-item"><a href="#">Media</a></li>
                                <li className="menu-item"><a href="#">Affilicate Program</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                        <div className="widget_nav_menu">
                            <h6 className="widget-title">RESOURCES</h6>
                            <ul>
                                <li className="menu-item"><a href="#">About Us</a></li>
                                <li className="menu-item"><a href="#">Customer Reviews</a></li>
                                <li className="menu-item"><a href="#">Careers</a></li>
                                <li className="menu-item"><a href="#">Media</a></li>
                                <li className="menu-item"><a href="#">Affilicate Program</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='custom-container'>
                <Row className='copyright-main'>
                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className='footer__copyright'>
                            <div className='copyright'>&copy;2022 Meng</div>
                            <div className='copyright'>Terms of Service</div>
                            <div className='copyright'>Privacy Policy</div>
                            <div className='copyright'>Sustainability</div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className='copyright__right'>
                            <div className='payments'>
                                <a href="#">
                                    <img src="./icons/mastercard.png" alt="mastercard" />
                                </a>
                            </div>
                            <div className='payments'>
                                <a href="#">
                                    <img src="./icons/paypal2.png" alt="paypal" />
                                </a>
                            </div>
                            <div className='payments'>
                                <a href="#">
                                    <img src="./icons/visa.png" alt="visa" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Footer
