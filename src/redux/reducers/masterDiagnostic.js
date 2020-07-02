import { GET_DIAGNOSTIC_MASTER, ADD_DIAGNOSTIC_MASTER, REMOVE_DIAGNOSTIC_MASTER } from '../actions/types';


const initialState = {
    master: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_DIAGNOSTIC_MASTER:
            return { ...state, master: payload }

        case ADD_DIAGNOSTIC_MASTER:
            return {...state, master: [payload, ...state.master]}

        case REMOVE_DIAGNOSTIC_MASTER:
            return {...state, master: (state.master).filter((item)=> item.id != payload)}

        default:
            return state
    }
}
