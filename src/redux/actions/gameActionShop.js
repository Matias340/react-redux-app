export const BUY_HALFLIFE = 'BUY_HALFLIFE';
export const RETURN_HALFLIFE = 'RETURN_HALFLIFE';

//comprar pokemon
export const buy_halflife_action = (cant) => {
    return {
        type: BUY_HALFLIFE,
        payload: cant
    }
}

//devolver pokemon
export const return_halflife_action = (cant) => {
    return {
        type: RETURN_HALFLIFE,
        payload: cant
    }
}