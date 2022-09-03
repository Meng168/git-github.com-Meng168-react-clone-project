import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import CartItems from './CartItems';
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material';

export default function TableCart() {
    const cart = useSelector((state) => state.cart)
    return (
        <>
            {
                cart.cartItems.length === 0
                ? (
                    <div style={{ padding: '10px' }}>
                        <h2 className="checkout_title">
                            Your cart is currently empty {cart.cartItems.length}
                        </h2>
                        <p>You have no items in your cart. Buy one.</p>
                    </div>
                )
                : (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                {
                                    cart.cartItems?.map((row) => (
                                        <CartItems 
                                            key={row.id}
                                            row={row}
                                        />
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            }
        </>
    );
}
