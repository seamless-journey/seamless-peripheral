export default function log(state = {}, { type, payload }) {
  console.log('Reduce: ', type);
  return payload || state;
}