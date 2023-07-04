export const getProducts = () => async (dispatch) => {
    const products = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    dispatch({type: 'GET_PRODUCTS', payload: products})
}

export const getProduct = (id) => async (dispatch) => {
    const product = await fetch('https://fakestoreapi.com/products/'+id)
    .then(res=>res.json())
    dispatch({type: 'GET_PRODUCT', payload: product})
}