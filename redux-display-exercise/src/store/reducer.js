const initialState = {
    counter: 0, 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INC_COUNTER':
            return {counter: state.counter + 1};
        case 'DEC_COUNTER':
            return {counter: state.counter - 1};
        case 'ADD_COUNTER':
            return {counter: state.counter + 10};
        case 'SUBTRACT_COUNTER':
            return {counter: state.counter - 10};
        default:
            return state;
    }
}

export default reducer