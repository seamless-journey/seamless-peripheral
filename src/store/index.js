import { createStore } from 'redux';
import { connectSyncStore } from 'redux-bluetooth/build/peripheral';

import reducer from './reducer';

let store = createStore(reducer);

connectSyncStore('Counter', store);

store.subscribe(() => {
  console.log(JSON.stringify(store.getState()));
});
