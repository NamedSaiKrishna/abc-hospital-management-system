import {GET_PATIENT} from '../actions/types';

const initialState = {
    address: "",
    admited_on: "",
    age: 0,
    city: "",
    diagnostics: [],
    id: 0,
    medicines: [],
    name: '',
    state: '',
    type_of_bed: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_PATIENT:
        return { ...state, ...payload }

    default:
        return state
    }
}
