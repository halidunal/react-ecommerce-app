export const searchReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case "SEARCH":
            return{
                search: action.payload
            }
        default:
            return state;
    }
}