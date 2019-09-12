import * as actionTypes from '../actions/actionTypes'


const initialState = {
     counter: 0
 }


const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INC_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DEC_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
      
    }

    return state
}
    
 export default counterReducer