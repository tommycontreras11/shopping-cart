export const cartInitialState = []

export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}
    
const UPDATE_STATE_BY_ACTION = {
    // In case the user decides to add an item to the cart
    [CART_ACTIONS_TYPES.ADD_TO_CART]: (state, action) => {
        // Get product id
        const { id } = action.payload

        // Check if the product is already in the cart
        const productInCartIndex = state.findIndex(item => item.id === id)

        // If the product is already in the cart, increase the quantity
        if(productInCartIndex >= 0) {
            const newState = structuredClone(state)
            newState[productInCartIndex].quantity += 1
            return newState
        }

        // If the product is not in the cart, add it
        return [
            ...state, {
                ...action.payload,
                quantity: 1
            }
        ]
    },
    // In case the user decides to remove an item from the cart
    [CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, action) => {
        // Get product id
        const { id } = action.payload
        const newState = state.filter(item => item.id !== id)

        // Remove the item
        return newState
    },
    // In case the user decides to clear the cart
    [CART_ACTIONS_TYPES.CLEAR_CART]: (state, action) => {
        // Return an empty array
        return cartInitialState    
    }
}

export const cartReducer = (state, action) => {
    // Get the action and the payload
    const { type: actionType } = action

    const updateSate = UPDATE_STATE_BY_ACTION[actionType]

    return updateSate ? updateSate(state, action) : state
}
