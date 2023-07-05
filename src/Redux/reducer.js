
const intialState = {
    counter:0,
};
 export const counterReducer =(state = intialState,action) => { 
    console.warn(action)
    console.warn(state.counter)
    switch(action.type){
        case 'INCREMENT':
            return{...state,counter:state.counter +1}
        case 'DECREMENT':
            return{...state,counter:state.counter -1}
         default:
            return state;
        }
}
