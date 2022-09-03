import React, { useRef } from 'react'
import './SlideMobile.css'
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { menuData } from './menuData';
import MobileMenu from './MobileMenu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';

const SlideMobile = ({setBurgerStatus, setPopupStatus}) => {
    const listInnerRef = useRef();
    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                console.log("reached bottom");
            }
        }
    };
    
    return (
        <div className='slide__mobile-overlay'>
            <div className='slide__mobile'>
                <Link 
                    onClick={() => {
                        setBurgerStatus(false);
                        setPopupStatus(false);
                    }}
                to="/">
                    <div className="slide__mobile-logo">
                        <h1>Meng</h1>
                    </div>
                </Link>
                <div className='slide__mobile-vertical'>
                    <div>
                        <div className="slide__mobile-close">
                            <a
                                onClick={() => {
                                    setBurgerStatus(false);
                                    setPopupStatus(false);
                                }}
                            ><CloseIcon />
                            </a>
                        </div>

                        <div 
                            onScroll={onScroll}
                            ref={listInnerRef}
                            className="slide__mobile-menu-scroll"
                        >
                            {
                                menuData.map((item, index) => {
                                    return(
                                        <MobileMenu 
                                            item={item} 
                                            ArrowDownIcon={KeyboardArrowDownIcon} 
                                            ArrowUpIcon={KeyboardArrowUpIcon}
                                            key={index}
                                            setBurgerStatus={setBurgerStatus}
                                            setPopupStatus={setPopupStatus}
                                        />
                                    )
                                })
                            }

                        </div>
                    </div>

                    <div className='slide__mobile-socialLink'>
                        <div className='slide__mobile-icon'><a href="#" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a></div>
                        <div className='slide__mobile-icon'><a href="#" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a></div>
                        <div className='slide__mobile-icon'><a href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a></div>
                        <div className='slide__mobile-icon'><a href="#" target="_blank" rel="noopener noreferrer"><LocalParkingIcon /></a></div>
                    </div>
                </div>

                <div className='slide__mobile-buyOn'>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button>
                            Buy on for $29
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SlideMobile
