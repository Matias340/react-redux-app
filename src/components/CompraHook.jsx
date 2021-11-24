import React from 'react';
import { useDispatch } from 'react-redux';
import {buy_halflife_action, return_halflife_action} from '../redux/actions/gameActionShop';

const CompraHook = () => {

    const dispatch = useDispatch()

    return (
        <div>
                <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                  dispatch(buy_halflife_action(1));
                }}>comprar juego</button>
                <button className="btn btn-dark btn-sm"  onClick={() => {
                  dispatch(return_halflife_action(1));  
                }}>devolver juego</button>
            </div>
    )
}

export default CompraHook;