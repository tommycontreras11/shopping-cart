import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState, CART_ACTIONS_TYPES } from "../reducers/cart";

// 1. Create the context
export const CartContext = createContext()

function userCartReducer() {
    // dispatch is like a method to perform the action
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product) => {
        dispatch({
            type: CART_ACTIONS_TYPES.ADD_TO_CART,
            payload: product
        })
    }

    const removeFromCart = (product) => {
        dispatch({
            type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
            payload: product
        })
    }

    const clearCart = () => {
        dispatch({
            type: CART_ACTIONS_TYPES.CLEAR_CART
        })
    }

    return { state, addToCart, removeFromCart, clearCart }
}

// 2. Create the provider, to provide the context
export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = userCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}