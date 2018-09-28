import { combineReducers } from "redux";
import { reducer as delivery } from '../pages/delivery'
import { reducer as Home } from '../pages/home'
import { reducer as Cart } from '../pages/cart'

export default combineReducers({
    delivery,
    Home,
    Cart
})