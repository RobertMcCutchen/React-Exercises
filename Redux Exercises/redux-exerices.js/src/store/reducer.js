const initialState = {
    counter: 0, 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INC_COUNTER':
            return {counter: state.counter + 1};
            break;
        case 'DEC_COUNTER':
            return {counter: state.counter - 1};
            break;
        case 'ADD_COUNTER':
            return {counter: state.counter + 10};
            break;
        case 'SUBTRACT_COUNTER':
            return {counter: state.counter - 10};
            break;
        default:
            return state;
            break
    }
}

export default reducer