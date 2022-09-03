import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Banner.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { productData } from '../NewArrivals/productData';

const Banner = () => {
    return (
        <Container className='custom-container'>
            <Row>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Link to={`/details/${productData[0].id}/${productData[0].category}`}>
                        <div className="banner">
                            <img src="https://images.unsplash.com/photo-1471286274405-579f8d7132d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="banner" />
                            <div className="razzi-banner-content banner__left">
                                <Fade bottom>
                                    <h2>Healthy Living Made Easy</h2>
                                    {/* <a href="#">Explore Now <ArrowRightAltIcon /></a> */}
                                    <span>Explore Now <ArrowRightAltIcon /></span>
                                </Fade>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Link to={`/details/${productData[4].id}/${productData[4].category}`}>
                        <div className="banner">
                            <img src="https://images.unsplash.com/photo-1479150928156-423a69d91fe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="banner" />
                            <div className="razzi-banner-content banner__right ">
                                <Fade bottom>
                                    <h2>Halloween Season Sale</h2>
                                    {/* <a href="#">Explore Now <ArrowRightAltIcon /></a> */}
                                    <span>Explore Now <ArrowRightAltIcon /></span>
                                </Fade>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
