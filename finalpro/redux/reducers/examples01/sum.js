export default function sum(state = 3, action){
    switch (action.type) {
      case 'SUM':
        return parseInt(action.a1) + parseInt(action.b1);
      default:
        return state;
    }
}

function funcWithError(){
    throw Error('an error from sum')
}
