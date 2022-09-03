import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import Tooltip from '../Tooltip/Tooltip'
import TableCart from './TableCart'
import Divider from '@mui/material/Divider';
import SelectBox from './SelectBox'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getTotals } from '../../redux/features/cartSlice.js'
import './Cart.css'
import Button from '@mui/material/Button';

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartTotalQuantity } = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch]);

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("Sorry, we are not connected to the server!")
    }
    return (
        <Container className='custom-container'>
            <Tooltip title="Cart"/>
            <HeaderTitle title='Cart'/>
            <Row>
                <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
                    <TableCart />
                    <div style={{ marginTop: '20px' }}>
                        {
                            cartTotalQuantity > 0 && (
                                <Button variant="outlined" color="error"
                                    onClick={()=>handleClearCart()}
                                >
                                    Clean
                                </Button>
                            )
                        }
                    </div>
                    <div className="coupon">
                        <label htmlFor="coupon_code">Coupon code:</label>
                        <div className="coupon-row">
                            <input type="text" className="input-text" placeholder="Enter coupon code" />
                            <button onClick={handleSubmit} type="submit" className="button">Apply</button>
                        </div>
                    </div>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                    <div className='cart'>
                        <div className="cart-collaterals">
                            <div><span>Subtotal</span></div>
                            ${parseFloat(cart.cartTotalAmount).toFixed(2)}
                        </div>
                        <Divider />
                        <div className='woocommerce-shipping-totals'>
                            <div><span>Shipping</span></div>
                            <div><span>Flat rate: $80.00</span></div>
                            <div><span>Shipping to <strong>NY</strong>.</span></div>
                            <div><span><a href="#">Change address</a></span></div>
                            <div className='select-box'>
                                <SelectBox />
                            </div>
                            <div className='select-box'>
                                <SelectBox />
                            </div>
                            <div className='select-box-input'>
                                <input type="text" placeholder='Town / City'/>
                            </div>
                            <div className='select-box-input'>
                                <input type="text" placeholder='ZIP Code'/>
                            </div>
                            <div onClick={handleSubmit} className='btn-update'>
                                <button>Update</button>
                            </div>
                        </div>
                        <Divider />
                        <div className="cart-collaterals total">
                            <div><strong>Total</strong></div>
                                <div>
                                    <strong>${parseFloat(cart.cartTotalAmount).toFixed(2)}</strong>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleSubmit} className='checkout'>
                        <button>Proceed to checkout</button>
                    </div>
                    <div className='continue__shopping'>
                        <div><span><KeyboardBackspaceIcon /></span></div>
                        <div><Link to="/">Continue Shopping</Link></div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart
