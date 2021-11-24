import { combineReducers } from "redux";
import games_shop from "./gameShopReducer";
import buscador from "./BuscadorReducers";


const rootReducers = combineReducers({
    games_shop,
    buscador
})

export default rootReducers;