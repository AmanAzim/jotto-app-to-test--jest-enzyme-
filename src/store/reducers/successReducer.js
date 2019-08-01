import actionTypes from '../actions/actionTypeNames'


const successReducer=(state=false, action)=>{

    switch (action.type) {
        case actionTypes.CORRECT_GUESS:
            return true;
        case actionTypes.RESET_GAME:
            return false;
        default:
            return state;
    }

    //return state;
};

export default successReducer;