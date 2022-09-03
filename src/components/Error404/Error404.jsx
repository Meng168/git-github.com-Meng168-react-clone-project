import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import './Error404.css'

const Title = styled.div`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

class Error404 extends Component {
    render() {
        return (
            <Fragment>
                <Container className='custom-container'>
                    <Row>
                        <Col>
                            <div id="main">
                                <div className="fof">
                                    <h1><Title>Error 404</Title></h1><br></br>
                                    <Link to='/' className='back_to_home'><Title>&larr;Back To Home</Title></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Error404
