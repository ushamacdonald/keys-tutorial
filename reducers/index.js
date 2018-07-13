import {combineReducers} from 'redux';
import keys from './keysReducer';
import selectedValues from './selectionsReducer';

export default combineReducers({
  keys, selectedValues
});
