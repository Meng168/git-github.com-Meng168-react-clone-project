import React, { useState, useRef, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './Navbar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import SlideMobile from '../SlideMobile/SlideMobile';
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom';
import { nav__links } from './navLink';
import Search from '../Search/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import AlertDialog from '../AlertDialog/AlertDialog';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { logout, selectUser } from '../../redux/features/userSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const { cartTotalQuantity } = useSelector((state) => state.cart)
    const [open, setOpen] = useState(false);
    const [burgerStatus, setBurgerStatus] = useState(false)
    const [popupStatus, setPopupStatus] = useState(false)
    const [activeMenu, setActiveMenu] = useState(1)
    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("header__shrink");
            } else {
                headerRef.current.classList.remove("header__shrink");
            }
        })
        return () => {
            window.removeEventListener("scroll", headerRef);
        };
    }, [])

    const handleClick = (id) =>{
        setActiveMenu(id)
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(logout());
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <header className='header' ref={headerRef}>
            <Container fluid={true}>
                <Container className='custom-container'>
                    <div className='navbar'>
                        <div className='navbar__icons-menu hamburger' 
                            onClick={() => {
                                setBurgerStatus(true);
                                setPopupStatus(true);
                            }}>
                            <MenuIcon />
                                {/* {toggle ? <CloseIcon /> : <MenuIcon />} */}
                        </div>
                        <PopupBg 
                            onClick={() => {
                                setBurgerStatus(false);
                                setPopupStatus(false);
                            }} popupStatus={popupStatus}>
                        </PopupBg>
                        <PopupMenu show={burgerStatus}>
                            <SlideMobile 
                                setBurgerStatus={setBurgerStatus} 
                                setPopupStatus={setPopupStatus}
                            />
                        </PopupMenu>
                        <Link to="/">
                            <div className="navbar__logo">
                                Meng
                            </div>
                        </Link>
                        <div className="navbar__menu">
                            {nav__links.map((item, index) => (
                                <div key={index} className='navbar___menu-link' onClick={()=>handleClick(item.id)}>
                                    <NavLink 
                                        to={item.path}
                                        className={`${activeMenu === item.id ? "navbar___menu-link-active" : ""}`}
                                        // activeClassName="navbar___menu-link-active"
                                        
                                    >
                                        {item.display}
                                    </NavLink>
                                    {/* <div className='navbar__submenu'>
                                        <div className='navbar__submenu-title'>
                                            <h6><a href="#" target="_blank" rel="noopener noreferrer">Element</a></h6>
                                            <div className='navbar__submenu-sub-submenu'>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                            </div>
                                        </div>
                                        <div className='navbar__submenu-title'>
                                            <h6><a href="#" target="_blank" rel="noopener noreferrer">Element</a></h6>
                                            <div className='navbar__submenu-sub-submenu'>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                            </div>
                                        </div>
                                        <div className='navbar__submenu-title'>
                                            <h6><a href="#" target="_blank" rel="noopener noreferrer">Element</a></h6>
                                            <div className='navbar__submenu-sub-submenu'>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                                <h6><a href="#" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></h6>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                        
                        <div className="navbar__icons">
                            <div className='navbar__icons-menu'>
                                {/* <SearchIcon /> */}
                                <Search/>
                            </div>
                            <div className='navbar__icons-menu'>
                                <a>
                                    {
                                        user?.displayName && <LogoutIcon 
                                            // onClick={() => {if(window.confirm('Are you sure to logout?')){signOut()}}}
                                            onClick={handleClickOpen}
                                        />
                                    }
                                </a>
                                {/* <Link onClick={logout}>
                                    <LogoutIcon />
                                </Link> */}
                                </div>
                            <div className='navbar__icons-menu'>
                                <Link to="/wishlist">
                                    <FavoriteBorderIcon />
                                </Link>
                            </div>
                            
                            <div className='navbar__icons-menu'>
                                <Link to="/cart">
                                    <AddShoppingCartIcon />
                                    <span>{cartTotalQuantity}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
            <AlertDialog 
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                signOut={signOut}
            />
        </header>
    )
}

const PopupMenu = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    height: 100%;
    max-width: 440px;
    min-width: 350px;
    background: var(--white);
    padding: 18px 28px;
    transform: ${props => props.show ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform 0.2s;
`

const PopupBg = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: transform 0.2s;
    transition-delay: 1s;
    -moz-transition-delay: 2s;
    -ms-transition-delay: 2s;
    -webkit-transition-delay: 2s;
    -o-transition-delay: 2s;
    display: ${props => props.popupStatus ? 'block' : 'none'};
`

export default Navbar
