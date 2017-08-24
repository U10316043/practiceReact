
var decrease = function(){
    return { type: 'DECREMENT' };
}

var increase = function(){
    return { type: 'INCREMENT' };
}
var zero = function(){
    return { type: 'ZERO' };
}
var hundred = function(){
    return { type: 'HUNDRED' };
}

var getSum = function(a, b){
    return { type: 'SUM', a:a, b:b };
}