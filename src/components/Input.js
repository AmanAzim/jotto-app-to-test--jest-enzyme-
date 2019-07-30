import React, {Component} from 'react';
import {connect} from 'react-redux'
import successReducer from "../store/reducers/successReducer";

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

export default connect(mapStateToProps)(Input);