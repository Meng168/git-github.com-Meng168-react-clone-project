import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './FAQs.css'
import { FAQsData } from './FAQsData';
import FAQsItems from './FAQsItems';
import Slide from 'react-reveal/Slide';
import HeadShake from 'react-reveal/HeadShake';

const FAQs = () => {
    return (
        <Container className='custom-container'>
            <Row>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Slide bottom>
                        <div className="elementor-widget-left" />
                    </Slide>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="elementor-widget-right">
                        <HeadShake>
                            <h2 className="razzi-heading-title">FAQs About Foods</h2>
                        </HeadShake>
                        {
                            FAQsData.map((item, index) =>(
                                <FAQsItems 
                                    key={index}
                                    item={item}
                                />
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FAQs
