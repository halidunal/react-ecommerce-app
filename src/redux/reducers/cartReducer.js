export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type){
        case "ADD_TO_CART":
            console.log(state)
            const item = action.payload
            const existItem = state.cartItems.find(product => product?.id === item.id);
            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(product => product.id === existItem.id ? action.payload : product)
                }           
            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case "REMOVE_FROM_CART":
            return {
                cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
        default:
            return state
    }
}
