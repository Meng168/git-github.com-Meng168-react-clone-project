import React from 'react'
import { Container } from 'react-bootstrap'
import './NewsLetter.css'
import Fade from 'react-reveal/Fade';

const NewsLetter = () => {
    return (
        <Container className='custom-container'>
            <div className="razzi-newsletter">
                <div className="razzi-newsletter-2__heading">
                    <Fade bottom>
                        <h3 className="newsletter-title">Stay home &amp; get your needs</h3>
                        <div className="newsletter-desc">Subscribe today and get 10% for the next order</div>
                    </Fade>
                    <div className="form-fields">
                        <input type="text" placeholder='Enter Email *'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default NewsLetter
