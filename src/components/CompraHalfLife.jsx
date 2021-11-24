import React, { Component } from 'react'
import { connect } from 'react-redux';
import {buy_halflife_action, return_halflife_action} from '../redux/actions/gameActionShop';

class CompraHalfLife extends Component {

    render()  {
        return (
            <div>
                <button className="btn btn-dark btn-sm mb-2">comprar juego</button>
                <button className="btn btn-dark btn-sm">devolver juego</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    buy_halflife_action,
    return_halflife_action
};

export default connect(null, mapDispatchToProps)(CompraHalfLife);
