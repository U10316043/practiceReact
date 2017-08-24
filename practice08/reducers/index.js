function combine_fun(currentState, action) {
    var nextState = Object.assign({},currentState);
    nextState = {
        count:fun_counter(nextState.count, action),
        sum: fun_sum(nextState.sum, action)
    }
    return nextState;
}