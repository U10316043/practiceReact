export default function subbbb(state = 1, action){
    switch (action.type) {
      case 'SUB':
        return parseInt(action.a2) - parseInt(action.b2);
      default:
        return state;
    }
}

function funcWithError(){
    throw Error('an error from sub')
}
