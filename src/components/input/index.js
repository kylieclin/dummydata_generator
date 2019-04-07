import React, {Component, Fragment} from 'react';
import Inputs from './inputbox';
import Generate from './call_generate';
import Addfield from './add_field';

class InputFields extends Component{
    constructor(props){
        super(props)

        this.state= {
            inputBox:['input_0'],
            fields: [],
            options:[],
            error: ''
        };
        this.passField = this.passField.bind(this);
        this.addField = this.addField.bind(this);
    }
    passField(){
        let fieldsarr= [];
        let optionsarr=[];
        console.log('this.refs', this.refs)
        Object.keys(this.refs).map((input)=>{

            const {field, option} = this.refs[input].state;
            if(!field && !option ){
                this.setState({
                    error: 'Please enter input field and data type.'
                })
            } else {
               fieldsarr.push(field);
               optionsarr.push(option);
            }
        })
        this.setState({
            fields: [...this.state.fields].concat(fieldsarr),
            options: [...this.state.options].concat(optionsarr)
        })

        this.props.getFields();
    }
    addField(){
        const newInput = `input_${this.state.inputBox.length}`;
        this.setState({
            inputBox: [...this.state.inputBox, newInput]
        })
    }

    render(){
        this.props.data.data = this.state;
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
