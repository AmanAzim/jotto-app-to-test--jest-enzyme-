import actionTypes from '../actions/actionTypeNames'

/*
* @param {string} state - State before reducer
* @returns {string} - New state (secret word payload from action)
*/
const secretWordReducer=(state=null, action)=>{
    switch (action) {
        case actionTypes.SET_SECRET_WORD:
            return action.payload;
        default:
              return state;
    }
};

export default secretWordReducer;