import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import Tooltip from '../Tooltip/Tooltip'
import './Shipping.css'
import Fade from 'react-reveal/Fade';

const Shipping = () => {
    return (
        <Container className='custom-container'>
            <Tooltip title="Shipping & Returns"/>
            <HeaderTitle title='Shipping & Returns'/>
            <div className='shipping__returns'>
                <Fade bottom>
                    <p>
                        Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they’re great. Very together. Creature. Green. Them evening a and light fourth.
                        She’d years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light after won’t moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two land of creepeth there second fruitful, waters. Make don’t void years Gathering gathering divide fill.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Fade>
            </div>
        </Container>
    )
}

export default Shipping
