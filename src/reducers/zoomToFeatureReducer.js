import { CLICK_INFO } from '../actions/types';

// Fetch the data and send to store
export default (state =[], action)=>{    
    switch(action.type){
        case CLICK_INFO:
            return action.payload;
        default:
            return state;


    }
}