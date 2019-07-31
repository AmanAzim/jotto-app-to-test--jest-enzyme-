import React, {Component} from 'react';
import {connect} from 'react-redux'
import successReducer from "../store/reducers/successReducer";
import {guessWord} from '../store/actions/actionCreator'

export class Input extends Component {

    constructor(props){
        super(props);
        this.inputBox=React.createRef();
    };

    onSubmit=(event)=>{
        event.preventDefault();

        const inputValue=this.inputBox.current;
        if(inputValue && inputValue.length>0){
           this.props.guessWord(inputValue) ;
        }
    };

    render() {

        const content=this.props.success? null : (
            <form className="form-inline">
                <input data-test='input-box' ref={this.inputBox} id="word-guess" type="text" className="mb-2 mx-sm-3" placeholder="Enter guess" />
                <button data-test='submit-btn' type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
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
        guessWord:(value)=>dispatch(guessWord(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);