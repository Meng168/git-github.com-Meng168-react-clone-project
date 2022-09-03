import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const initialState = {
    favoriteItems: localStorage.getItem("favoriteItems") 
    ? JSON.parse(localStorage.getItem("favoriteItems")) 
    : [],
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite(state, action){
            const itemIndex = state.favoriteItems.findIndex((item) => item.id === action.payload.id)
            if(itemIndex >= 0){
                toast.error(`${action.payload.title} added to favorite already`, {
                    position: "bottom-left"
                })
                return
            }else{
                const tempProduct = {...action.payload, favoriteQuantity: 1}
                state.favoriteItems.push(tempProduct)
                toast.success(`${action.payload.title} added to favorite`, {
                    position: "bottom-left"
                })
            }
            localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems))
        },
        removeFromFavorite(state, action){
            const nextCartItems = state.favoriteItems.filter(
                (favoriteItem) => favoriteItem.id !== action.payload.id
            )
            state.favoriteItems = nextCartItems
            localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems))
            toast.error(`${action.payload.title} removed from favorite`, {
                position: "bottom-left"
            })
        }
    }
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer