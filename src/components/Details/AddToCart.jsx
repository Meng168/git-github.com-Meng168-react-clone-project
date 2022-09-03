import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cartSlice'
import { addToFavorite } from '../../redux/features/favoriteSlice';

const AddToCart = ({item}) => {
    const dispatch = useDispatch()

    const handleAddToCart = (item) =>{
        dispatch(addToCart(item))
    }
    const handleAddToFavorite = (item) =>{
        dispatch(addToFavorite(item))
    }
    return (
        <>
            <button className="cart" onClick={()=>handleAddToCart(item)}>Add to cart</button>
            <button 
                className="cart wishlist"
                onClick={()=>handleAddToFavorite(item)}
            >Wishlist</button>
        </>
    )
}

export default AddToCart
