import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from "../actions/BuscadorActions";

const initialiState = {
    loading: false,
    pokemon: [],
    error: ''
}

const buscador = (state = initialiState, action) => {
    switch(action.type){
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }
        case FETCH_POKEMON_FAILURE:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }
      default: return state;              
    }
}

export default buscador;