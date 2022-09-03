import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux'
import { removeFromFavorite } from '../../redux/features/favoriteSlice';
import { addToCart } from '../../redux/features/cartSlice'

const WishlistItem = ({row}) => {
    const dispatch = useDispatch()
    const handleRemoveFromFavorite = (row) => {
        dispatch(removeFromFavorite(row))
    }
    const handleAddToCart = (row) =>{
        dispatch(addToCart(row))
        dispatch(removeFromFavorite(row))
    }
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center">
                <CloseIcon 
                    onClick={() => handleRemoveFromFavorite(row)}
                    className='btn-remove'
                />
            </TableCell>
            <TableCell align="left">
                <img 
                    className='wishlist-img'
                    src={row.img} 
                    alt="img" 
                />
            </TableCell>
            <TableCell align="left">
                <span className='wishlist-name'>{row.title}</span>
            </TableCell>
            <TableCell align="left">
                <span className='wishlist-price'>${row.price}</span>
            </TableCell>
            <TableCell align="left">
                <span className='wishlist-stock'>{row.stock}</span>
            </TableCell>
            <TableCell align="left">
                <button className='btn-wishlist'
                onClick={()=>handleAddToCart(row)}
                >
                    <AddShoppingCartIcon/> Add to cart
                </button>
            </TableCell>
        </TableRow>
    )
}

export default WishlistItem
