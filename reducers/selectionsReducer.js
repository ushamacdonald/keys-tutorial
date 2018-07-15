import { SELECT_KEY_INDEX, SELECT_CAPO } from '../actions/types';

const INITIAL_STATE = {
  selectedKeyIndex: 0,
  selectedCapo: 4,
  capoKeyIndex: 4
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_KEY_INDEX: {
      const capoKeyIndex = state.selectedCapo + action.payload;
      if (capoKeyIndex >= 12) capoKeyIndex -= 12;

      return {
        ...state,
        selectedKeyIndex: action.payload,
        capoKeyIndex
      };
    }
    case SELECT_CAPO: {
      const capoKeyIndex = state.selectedKeyIndex + action.payload;
      if (capoKeyIndex >= 12) capoKeyIndex -= 12;

      return {
        ...state,
        selectedCapo: action.payload,
        capoKeyIndex
      };
    }
    default:
      return state;
  }
};
