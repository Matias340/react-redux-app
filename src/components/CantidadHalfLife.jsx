import React, { Component } from 'react';
import { connect } from 'react-redux';


class CantidadHalfLife extends Component {
    render(){
        return (
            <React.Fragment>
                Unidades: {this.props.games_shop.halflife}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        games_shop: state.games_shop
    }
}

export default connect(mapStateToProps)(CantidadHalfLife);