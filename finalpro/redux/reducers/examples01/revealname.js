export default function sw(state = {sRevealUsername:0}, action){
  switch (action.type) {
    case 'REVEALNAME':
      return  {...state,
        sRevealUsername: action.sUsername};
    default:
      return state;
  }
}






