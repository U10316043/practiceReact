
// step 1.2
var store = Redux.createStore(combine_fun, Redux.applyMiddleware(logger, crashReporter, thunk))
// ~end step 1.2
// step 1.3
function render() {
    $('#value').text(store.getState().count.result);
    $('#value2').text(store.getState().sum);
    
    if(store.getState().count.loading){
        $('#status').text("is loading...");
    }else{
         $('#status').text("loaded");
    }

    // image
    $('#imagesStatus').text(store.getState().images.loading);
    if(store.getState().images.loading =="loading…"){          
         $('#imagesList').text("");
    }
     else if(store.getState().images.loading =="loaded"){                  
         for(let i=0; i< store.getState().images.data.length; i++){
            $('#imagesList').append("<img src='"  + store.getState().images.data[i].link + "' style='height:200px'>");
         }
     }

    
};
store.subscribe(render);
// ~end step 1.3
render();

