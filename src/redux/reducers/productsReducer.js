export const productsReducer = (state = {products: [], product: {}}, action) => {
    switch(action.type) {
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}