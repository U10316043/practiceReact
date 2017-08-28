function fun_sum(currentState = 3, action) {

    switch (action.type) {
        case 'SUM': // look at Note2.1
            return parseInt(action.a) + parseInt(action.b);// Note2.2
        default:
            return currentState;
    }
}
