import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Slide from 'react-reveal/Slide';

const FAQsItems = ({item}) => {
    const [active, setActive] = useState(false);
    const [icon, setIcons] = useState(false);
    
    return (
        <div className="box-content">
            <Slide bottom>
                <div key={item.id} className='box-content-widget' onClick={() => {
                    setIcons(!icon)
                    setActive(!active)
                }}>
                    <div>
                        <h2 className="faq-title">{item.title}</h2>
                    </div>
                    <div>
                        { icon ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                    </div>
                </div>
                <div className={`faq-desc ${active && 'active'}`}>
                    <p>{item.des}</p>
                </div>
            </Slide>
        </div>
    )
}

export default FAQsItems
