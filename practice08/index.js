
// step 1.2
var store = Redux.createStore(combine_fun, Redux.applyMiddleware(logger, crashReporter, thunk))
// ~end step 1.2
// step 1.3
function render() {
    document.getElementById('value').innerHTML = store.getState().count.result;
    document.getElementById('value2').innerHTML = store.getState().sum;
    
    if(store.getState().count.loading){
        document.getElementById('status').innerHTML = "is loading...";
    }else{
         document.getElementById('status').innerHTML = "loaded";
    }
};
store.subscribe(render);
// ~end step 1.3
render();

