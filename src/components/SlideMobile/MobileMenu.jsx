import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import SubMobileMenu from './SubMobileMenu';

const MobileMenu = ({item, ArrowDownIcon, ArrowUpIcon, setBurgerStatus, setPopupStatus}) => {
    const { name } = item
    //console.log(item.path);
    const [showMenu, setShowMenu] = useState(false)
    const [active, setActive] = useState(false);
    return (
        <Fragment>
            {
                item.subMenu.map((subMenu, index) => (
                    <div key={index}>
                        <div className='slide__mobile-item'>
                            <div className='slide__mobile-link'>
                                <Link 
                                    to={item.path}
                                    onClick={() => {
                                        setBurgerStatus(false);
                                        setPopupStatus(false);
                                    }}
                                >{name}</Link>
                            </div>
                            <div className='slide__mobile-icon' onClick={()=>{
                                setActive(!active)
                                setShowMenu(!showMenu)
                            }}>
                                {active ? <ArrowUpIcon /> : <ArrowDownIcon />}
                            </div>
                        </div>
                        {
                            showMenu && (
                                <div className='slide__mobile-submenu'>
                                    <SubMobileMenu 
                                        ArrowDownIcon={ArrowDownIcon} 
                                        ArrowUpIcon={ArrowUpIcon}
                                        subMenu={subMenu}
                                        showMenu={showMenu}
                                        setShowMenu={setShowMenu}/>
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </Fragment>
    )
}

export default MobileMenu
