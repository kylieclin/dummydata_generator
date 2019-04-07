import React, {Component, Fragment} from 'react';
import Inputs from './inputbox';
import Generate from './call_generate';
import Addfield from './add_field';

class InputFields extends Component{
    constructor(props){
        super(props)

        this.state= {
            inputBox:['input_0'],
            data:[],
            error: ''
        };
        this.passField = this.passField.bind(this);
        this.addField = this.addField.bind(this);
    }
    passField(){

        const data =[]
        Object.keys(this.refs).map((input)=>{

            if(!field && !option ){
                this.setState({
                    error: 'Please enter input field and data type.'
                })
            } else {

               data.push(this.refs[input].state)
            } 

        })
        this.setState({
            data: [...this.state.data].concat(data)

        })

        
    }
    addField(){
        const newInput = `input_${this.state.inputBox.length}`;
        this.setState({
            inputBox: [...this.state.inputBox, newInput]
        })
    }
    componentDidUpdate(){
        console.log('did mount');
        this.props.getFields(this.state);
    }
    render(){
        console.log(this.state.data);
        const createInput = this.state.inputBox.map((item, index)=>{
            return <Inputs ref={index} key={index} id={item}/>
        })
        return(
        <Fragment>
            <div className="row">
              {createInput}
            </div>
            <div className="row buttons">
                <div className="error red-text">{this.state.error}</div>
                <Addfield addFields={this.addField} />
                <Generate passField={this.passField}/>
            </div>
        </Fragment>
        )
    }
}

export default InputFields;
