import {combineReducers} from 'redux';
import keys from './keysReducer';
import selectedValues from './selectionsReducer';
import modal from './modalReducer';

export default combineReducers({
  keys, selectedValues, modal
});
