import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; //this does what is above.
  }
  return state;
}
// never say this.state. blah blah, never set state equal to something.
// we never manipulate state directly.  we always return a completely new instance of state.
// return a new array entirely with new data. the above concat doesn't mutate.
// we never want to manipulate our state,  just create a new array. 
