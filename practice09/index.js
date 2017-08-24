
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

    // image
    document.getElementById('imagesStatus').innerHTML = store.getState().images.loading;
    if(store.getState().images.loading =="loading…"){          
         document.getElementById('imagesList').innerHTML = "";
    }
     else if(store.getState().images.loading =="loaded"){                  
         for(var i=0; i< store.getState().images.data.length; i++){
             document.getElementById('imagesList').innerHTML 
                   += ("<img src='"  + store.getState().images.data[i].link + "' style='height:200px'>");
         }
     }

    
};
store.subscribe(render);
// ~end step 1.3
render();

