export default function sRevealUsername(state = "eee" , action){
    switch (action.type) {
      case 'REVEALNAME':
        return {
          sUsername: action.sUsername
        } 
      default:
        return state;
    }
}
function funcWithError(){
  throw Error('an error from reveal')
}
