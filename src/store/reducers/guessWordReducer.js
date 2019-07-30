import actionTypes from '../actions/actionTypeNames'


const guessWordReducer=(state=[], action)=>{
    switch (action.type) {
        case actionTypes.GUESS_WORD:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
};

export default guessWordReducer;