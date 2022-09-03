import React, { useState} from 'react'
import { Button } from 'react-bootstrap'
import UseAnimations from "react-useanimations"
import arrowUp from 'react-useanimations/lib/arrowUp'
import './ScrollToTop.css'

const ScrollButton = () =>{
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);
    return (
        <Button variant="danger" className='ScrollButton' style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>
            <UseAnimations strokeColor='white' animation={arrowUp} size={25}/>
        </Button>
    );
}
export default ScrollButton
