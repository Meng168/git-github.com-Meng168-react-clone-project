import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FAQsData } from '../FAQs/FAQsData'
import FAQsItems from '../FAQs/FAQsItems'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import Tooltip from '../Tooltip/Tooltip'
import './Faq.css'
const Faq = () => {
    return (
        <Container className='custom-container'>
            <Tooltip title="FAQs"/>
            <HeaderTitle title='FAQs'/>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="elementor-widget-right">
                        <h2 className="razzi-heading-title">Orders:</h2>
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

export default Faq
