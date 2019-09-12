import * as actionTypes from '../actions/actionTypes'

const initialState = {
    tasks: []
}

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TASK_ADDED:
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            }
    }

    return state
}

export default tasksReducer