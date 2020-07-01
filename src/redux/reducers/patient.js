import { GET_PATIENT, ADD_DIAGNOSTIC_PATIENT, ADD_MEDICINE_PATIENT, REMOVE_DIAGNOSTIC_PATIENT, REMOVE_MEDICINE_PATIENT } from '../actions/types';

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

        case ADD_DIAGNOSTIC_PATIENT:
            return { ...state, diagnostics: [payload, ...state.diagnostics] }

        case ADD_MEDICINE_PATIENT:
            return { ...state, medicines: [payload, ...state.medicines] }

        case REMOVE_DIAGNOSTIC_PATIENT:
            return { ...state, diagnostics: (state.diagnostics).filter((item) => item.id !== payload) }

        case REMOVE_MEDICINE_PATIENT:
            return { ...state, medicines: (state.medicines).filter((item) => item.id !== payload)}

        default:
            return state
    }
}
