import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import patient from './patient';
import allPatients from './allPatients';
import masterDiagnostic from './masterDiagnostic';
import masterMedicine from './masterMedicine';

const rootReducer = combineReducers({
    auth,
    errors,
    messages,
    patient,
    allPatients,
    masterDiagnostic,
    masterMedicine,
    
});


export default (state, action) => rootReducer(action.type === 'LOGOUT_USER' ? undefined : state, action);