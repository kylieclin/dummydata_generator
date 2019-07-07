import React, {Component} from 'react';

class OutputModal extends Component{
    state={
        message: ''
    }
    componentDidMount(){
        const option ={
                startingTop: '20%'
            }
        M.Modal.init(this.modal, option).open();

    }
    copyJson= ()=>{
        this.modalContent.select();
        document.execCommand("copy");
        this.setState({
            message: 'Copied!'
        })
    }
    render(){

        return(
        <div id="modal1" className="modal modal-fixed-footer" ref={element=>{this.modal = element}}>
            <div id="modalContent" className="modal-content" ref="modalContent">
                <label>Your Dummy Data is here :)</label>
                <textarea className="materialize-textarea" ref={e =>{this.modalContent = e}} value={this.props.output} readOnly>
                </textarea>
                <div>{this.state.message}</div>
            </div>
            <div className="modal-footer">

                <button className="waves-effect waves-light btn-flat" onClick={this.copyJson}>
                    <i className="material-icons">content_copy</i>
                </button>
                <a href="#!" className="modal-close waves-effect waves-light btn-flat">Close</a>
            </div>
        </div>
        )
    }
};


export default OutputModal;
