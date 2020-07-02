import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import patient from './patient';
import allPatients from './allPatients';
import masterDiagnostics from './masterDiagnostic';
import masterMedicine from './masterMedicine';
import search from './search';

export default combineReducers({
    auth,
    errors,
    messages,
    patient,
    allPatients,
    masterDiagnostics,
    masterMedicine,
    search
})