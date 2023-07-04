export const getProducts = () => async (dispatch) => {
    const products = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    dispatch({type: 'GET_PRODUCTS', payload: products})
}
