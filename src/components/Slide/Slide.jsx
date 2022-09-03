import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Slide.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { slideData } from './slideData';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Slide = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber(slideData.length - 1) 
        : setSlideNumber(slideNumber - 1)
        //console.log(slideNumber);
    }
    const nextSlide = () => {
        slideNumber + 1 === slideData.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
        //console.log(slideNumber);
    }
    return (
        <Container className='custom-container'>
            <Row>
                <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
                    <div className="slide__left slick-slide-inner">
                        <img 
                            className='slide__img-left'
                            src={slideData[slideNumber].img} 
                            alt="slide-img" 
                        />
                        <div className="razzi-slide-content">
                            <div className="razzi-slide-heading razzi-slide-title">
                                <Fade bottom>
                                    <h2>
                                        {slideData[slideNumber].title} 
                                    </h2>
                                </Fade>
                            </div>
                            <Link to={`/details/${slideData[slideNumber].id}/${slideData[slideNumber].category}`}>Show Now <ArrowRightAltIcon /></Link>
                        </div>
                        <div className='razzi-slide-button'>
                            <button onClick={prevSlide}><ArrowBackIosNewIcon /></button>
                            <button onClick={nextSlide}><ArrowForwardIosIcon /></button>
                        </div>
                    </div>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="slick-slide-inner slide__right-items">
                                <Link to={
                                    `/details/5/Vegetables`
                                } >
                                    <img 
                                        className='slide__img-right'
                                        src="https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                                        alt="slide-img" 
                                    />
                                    <div className="overlay" />
                                    <div className="razzi-slide-content razzi-slide-heading-right">
                                        <div className="razzi-slide-heading">
                                            <Fade bottom>
                                                <h2>
                                                    Fresh Flavors<br />
                                                    Organic Fruits
                                                </h2>
                                            </Fade>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                        <Col xxl={12} xl={12} lg={12}>
                            <div className="slick-slide-inner slide__right-items">
                                <Link to={
                                    `/details/6/Vegetables`
                                } >
                                    <img 
                                        className='slide__img-right'
                                        src="https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                                        alt="slide-img" 
                                    />
                                    <div className="overlay" />
                                    <div className="razzi-slide-content razzi-slide-heading-right">
                                        <div className="razzi-slide-heading">
                                            <Fade bottom>
                                                <h6>Spring Sale</h6>
                                                <h2>
                                                    Save 15% + Free Shopping
                                                </h2>
                                                <h5>Get It Now</h5>
                                            </Fade>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Slide
