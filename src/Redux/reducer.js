import { createStore } from "redux";
const intialState = {
    counter:0,
};
const counterReducer =(state = intialState,action) =>{
    switch(action.type){
        case 'INCREMENT':
            return{...state,counter:state.counter +1}
        case 'DECREMENT':
            return{...state,counter:state.counter -1}
         default:
            return state;
        }
}
const store = createStore(counterReducer);
export default store;