export default function todo(state = {RevealList:0}, action){
    switch (action.type) {
      case 'TODO':
        return  {...state,
            RevealList: action.sPreAdd};
      default:
        return state;
    }
  }
  