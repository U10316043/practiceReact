export default function counter(state = {result:0}, action){
    switch (action.type) {
      case 'DECREMENT':
        // return Object.assign({}, state, {result: state.result-1});
        return  {...state,
          result: state.result - 2};
      case 'INCREMENT':
          return {
            ...state,
            result: state.result+1
          };
      default:
        return state;
    }
}


