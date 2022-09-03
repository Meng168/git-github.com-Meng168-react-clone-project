import React, { Fragment, useState } from 'react'

const SubMobileMenu = ({ArrowDownIcon, ArrowUpIcon, subMenu}) => {
    const [showMenu, setShowMenu] = useState(false)
    const [active, setActive] = useState(false)
    const { name } = subMenu
    return (
        <Fragment>
            <div >
                <div className='slide__mobile-submenu-item'>
                    <div className='slide__mobile-submenu-link'><a href="#" target="_blank" rel="noopener noreferrer">{name}</a></div>
                    <div className='slide__mobile-icon' onClick={()=>{
                        setActive(!active)
                        setShowMenu(!showMenu)
                    }}>
                        {active ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </div>
                </div>
                <div className='slide__mobile-submenu'>
                    {
                        showMenu && (
                            subMenu.subSubMenu.map((subSubMenu, index) => (
                                <div className='slide__mobile-submenu-item' key={index}>
                                    <div className='slide__mobile-submenu-link slide__mobile-submenu-subSubmenu-link'><a href="#" target="_blank" rel="noopener noreferrer">{subSubMenu.name}</a></div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default SubMobileMenu
