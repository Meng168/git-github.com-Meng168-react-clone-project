import React from 'react'
import { Link } from 'react-router-dom'
import './Tooltip.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Tooltip = ({title}) => {
    return (
        <div className='tool__tip'>
            <div className='tool__tip-item'><Link to="/">Home</Link></div>
            <div className='tool__tip-item'><KeyboardArrowRightIcon /></div>
            <div className='tool__tip-item'>{title}</div>
        </div>
    )
}

export default Tooltip
