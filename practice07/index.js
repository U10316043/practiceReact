
//redux
var store = Redux.createStore(combine_fun);

function render() {
    document.getElementById('value').innerHTML = store.getState().count;   
    document.getElementById('value2').innerHTML = store.getState().sum;
};   
store.subscribe(render);
render();