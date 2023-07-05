import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import {drawerReducer} from './reducers/drawerReducer'
import { productsReducer } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

let initialState = {
    cart: {cartItems}
}
const reducers = combineReducers({
    drawer: drawerReducer,
    products: productsReducer,
    cart: cartReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;