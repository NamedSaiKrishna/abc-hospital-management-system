import { GET_SEARCH } from '../actions/types';

const initialState = {
    search: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_SEARCH:
        return { ...state, search: payload }

    default:
        return state
    }
}
