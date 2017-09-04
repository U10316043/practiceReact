export default function inform(state = {}, action) {
    switch (action.type) {
        case 'STOREINFORM':
            return  {
                ...state,
                displayid: "aa",
                displayname: "ss"
            };
        default:
            return state;
    }
}

