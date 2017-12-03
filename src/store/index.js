import { createStore } from 'redux';
import { connectSyncStore } from 'redux-bluetooth/build/peripheral';
import uuidv4 from 'uuid/v4';

import reducer from './reducer';

const key = uuidv4();
let store = createStore(reducer(key));

connectSyncStore('Seamless', store);

store.subscribe(() => {
  console.log(JSON.stringify(store.getState()));
});

process.send({ key });