import React from 'react'
import './HeaderTitle.css'
import Flip from 'react-reveal/Flip';

const HeaderTitle = ({title}) => {
    return (
        <div className='HeaderTitle'>
            <Flip bottom>
                <h1>{title}</h1>
            </Flip>
        </div>
    )
}

export default HeaderTitle
