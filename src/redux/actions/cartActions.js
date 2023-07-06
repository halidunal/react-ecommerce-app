import { toast } from 'react-hot-toast';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const product = await fetch('https://fakestoreapi.com/products/'+id)
    .then(res=>res.json())
    dispatch({type: 'ADD_TO_CART', payload: {
        id: product.id,
        image: product.image,
        title: product.title,
        description: product.description,
        price: product.price,
        quantity
    }})

    const {cart: {cartItems}} = getState();
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    toast.success("Added to cart"); 
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id});

    const {cart: {cartItems}} = getState();
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}