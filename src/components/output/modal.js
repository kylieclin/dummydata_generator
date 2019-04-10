import React, {Component} from 'react';

class OutputModal extends Component{
    componentDidMount(){
        const option ={
                startingTop: '20%'
            }
        M.Modal.init(this.modal, option).open();

    }
    render(){
        debugger;
        return(
        <div id="modal1" className="modal" ref={element=>{this.modal = element}}>
            <div className="modal-content">
                <pre>{this.props.output}</pre>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
        )
    }
};

export default OutputModal;