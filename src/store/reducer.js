import { combineReducers } from 'redux';
import predatorQuotes from 'predator-quotes';
import * as TYPES from './types';

function quote(state = '', { type }) {
  switch (type) {
    case TYPES.GENERATE:
      return predatorQuotes.random();
    default:
      return state;
  }
}

export default (key) => (state = {}, action) => { 
  if (action.apikey === key) { 
    return combineReducers({ quote })(state, action);
  }
  return state;
};
