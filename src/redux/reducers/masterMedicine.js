import { GET_MEDICINE_MASTER, ADD_MEDICINE_MASTER, REMOVE_MEDICINE_MASTER } from '../actions/types';


const initialState = {
    master: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_MEDICINE_MASTER:
            return { ...state, master: payload }

        case ADD_MEDICINE_MASTER:
            return {...state, master: [payload, ...state.master]}

        case REMOVE_MEDICINE_MASTER:
            return {...state, master: (state.master).filter((item)=> item.id != payload)}

        default:
            return state
    }
}
