import { BUY_HALFLIFE, RETURN_HALFLIFE } from "../actions/gameActionShop";

const default_games_shop = {
    halflife: 30
}

export const games_shop = (state = default_games_shop, action) =>{
     switch(action.type) {
         case BUY_HALFLIFE: {
             return {
                halflife: state.halflife - action.payload
             }
         }
         case RETURN_HALFLIFE: {
             return {
                halflife: state.halflife + action.payload
             }
         }
         default: return state;
     }
}

export default games_shop;