export default function goo(state = {isChange:0}, action){
    switch (action.type) {
      case 'GO':
        return  {...state,
            isChange: action.iPhonenum};
      default:
        return state;
    }
}


