function images(state = {data:[],
  loading:"Please click the 'Random Images' button"}, action){
    switch (action.type) {
      case 'IMAGES': 
        return Object.assign({},state,{
          data: action.data,
          loading: "loaded"
        });// Note2.2
      case 'IMAGES_LOADING': // look at Note2.1
        return Object.assign({},state,{
          loading : "loading..."
        });// Note2.2
      default:
        return state;
    }
}