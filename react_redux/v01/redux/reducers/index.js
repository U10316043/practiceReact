function combine_fun(currentState, action) {
    var nextState = Object.assign({},currentState);
    return {
        count:fun_counter(nextState.count, action),
        sum: fun_sum(nextState.sum, action),
        images: images(nextState.images, action)

    };
}