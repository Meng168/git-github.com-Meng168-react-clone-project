import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import ShareOn from '../ShareOn/ShareOn'
import Tooltip from '../Tooltip/Tooltip'
import './Wishlist.css'
import WishlistTable from './WishlistTable'

const Wishlist = () => {
    return (
        <Container className='custom-container'>
            <Tooltip title="Wishlist"/>
            <HeaderTitle title='Wishlist'/>
            <WishlistTable />
            <ShareOn />
        </Container>
    )
}

export default Wishlist
