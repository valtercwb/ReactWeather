import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    // console.log('Action reducer',action);
switch(action.type) {

    case FETCH_WEATHER:
    return state.concat([ action.payload.data ]);//[city,city,city]
    //return [ action.payload.data, ...state ];//[city,city,city]

    //return '';
}

    return state;
}