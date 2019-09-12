//global state
const initialState = {
    counter: 0,
    tasks: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'TASK_ADDED':
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            }
        default:
            return state
        } 
}

export default reducer;