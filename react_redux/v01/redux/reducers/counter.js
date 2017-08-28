//count State
function fun_counter(state = {result:0, loading:false}, action) {
    switch (action.type) {
        case 'DECREMENT': 
            return Object.assign({},state,
            {result: state.result - 1})// Note2.2
        case 'INCREMENT': // look at Note2.1
            return Object.assign({},state,
                {result: state.result + 1,
                 loading: false
                });// Note2.2
        case 'INCREMENT_LOADING': 
            return Object.assign({},state,
                {
                    loading: true
                });// Note2.2
        case 'ZERO':
            return Object.assign({},state,
                {
                    result : 0
                })
        case 'HUNDRED':
            return Object.assign({},state,
                {
                    result: 100
                })
        default:
            return state;
    }
}