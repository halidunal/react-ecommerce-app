export const search = (keyword) => async (dispatch) => {
    const products = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    dispatch({
        type: 'SEARCH', 
        payload: products.filter(product => 
            product.title.toLocaleLowerCase().includes(keyword) ||
            product.description.toLocaleLowerCase().includes(keyword) ||
            product.category.toLocaleLowerCase().includes(keyword))
    })
}