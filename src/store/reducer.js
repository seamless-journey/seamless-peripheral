function log(state = {}, { type, payload }) {
  console.log('Reduce: ', type);
  return payload || state;
};

export default function reducer(key) { 
  return log;
};
