import React from 'react';
import { useSelector } from 'react-redux';

const CantidadHook = () => {

    const games_shop = useSelector((state) => state.games_shop)

    return (
        <React.Fragment>
            Unidades: {games_shop.halflife}
        </React.Fragment>
    )
}

export default CantidadHook;