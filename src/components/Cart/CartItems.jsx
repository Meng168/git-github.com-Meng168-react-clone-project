import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useDispatch } from 'react-redux'
import { removeFromCart, decreaseCart, addToCart } from '../../redux/features/cartSlice.js'

const CartItems = ({row}) => {
    const dispatch = useDispatch()
    const handleRemoveFromCart = (row) => {
        dispatch(removeFromCart(row))
    }
    const handleDecreaseCart = (row) => {
        dispatch(decreaseCart(row))
    }
    const handleIncreaseCart = (row) => {
        dispatch(addToCart(row))
    }

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="center">
                <img 
                    className='cart-img'
                    src={row.img} 
                    alt="img" 
                />
            </TableCell>
            <TableCell align="left">
                {row.title}<br />
                <div className='razzi-qty-button'>
                    <div>
                        <button onClick={() => handleDecreaseCart(row)}><RemoveIcon /></button>
                    </div>
                    <div>
                        <span>{row.cartQuantity}</span>
                    </div>
                    <div>
                        <button onClick={() => handleIncreaseCart(row)}><AddIcon /></button>
                    </div>
                </div>
            </TableCell>
            <TableCell align="left">
                {parseFloat(row.price * row.cartQuantity).toFixed(2)}<br />
                {/* {row.price * row.cartQuantity}<br /> */}
                <div className='razzi-remvoe-button'>
                    <button onClick={() => handleRemoveFromCart(row)}><CloseIcon /> Remove</button>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default CartItems
