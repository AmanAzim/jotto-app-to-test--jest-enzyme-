import React, {Component} from 'react';
import {connect} from 'react-redux'
import successReducer from "../store/reducers/successReducer";
import {guessWord} from '../store/actions/actionCreator'

class Input extends Component {

    render() {

        const content=this.props.success? null : (
            <form className="form-inline">
                <input data-test='input-box' id="word-guess" type="text" className="mb-2 mx-sm-3" placeholder="Enter guess" />
                <button data-test='submit-btn' type="submit" className="btn btn-primary">Submit</button>
            </form>
        );

        return (
            <div data-test='component-input'>
                {content}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        success:state.successReducer
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        guessWord:()=>dispatch(guessWord())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);