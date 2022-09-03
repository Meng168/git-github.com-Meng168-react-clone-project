import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import WishlistItem from './WishlistItem';
import { useSelector } from 'react-redux'

const WishlistTable = () => {
    const favorite = useSelector((state) => state.favorite)
    return (
        <div>
            <h1>My wishlist</h1>
            {
                favorite.favoriteItems.length === 0
                ? (<div>
                        <h2 className="checkout_title">
                            Your favorite is currently empty
                        </h2>
                        <p>You have no items in your favorite. Buy one.</p>
                    </div>)
                : (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                {
                                    favorite.favoriteItems?.map((row, index) => (
                                        <WishlistItem 
                                            key={index}
                                            row={row}
                                        />
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            }
        </div>
    )
}

export default WishlistTable
