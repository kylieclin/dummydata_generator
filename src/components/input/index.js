import React, {Component, Fragment} from 'react';
import Inputs from './inputbox';
import Generate from './call_generate';
import Addfield from './add_field';
import GenerateData from '../output/generate_data';

class InputFields extends Component{
    constructor(props){
        super(props)

        this.state= {
            inputBox:['input_0'],
            data: [],
            error: '',
            showGenerate: false
        };
        this.passField = this.passField.bind(this);
        this.addField = this.addField.bind(this);
    }
    passField(){
        const data = [];

        Object.keys(this.refs).map((input)=>{

            if(!field && option === "default" ){
                this.setState({
                    error: 'Please enter input field and data type.'
                })
            } else {
               data.push(this.refs[input].state);
               this.refs[input].clearData();
            }

        })
        this.setState({
            data,
            showGenerate: true
        });
console.log('input state', this.state)

    }
    addField(){
        const newInput = `input_${this.state.inputBox.length}`;
        this.setState({
            inputBox: [...this.state.inputBox, newInput]
        })
    }

    render(){
        const {inputBox, data, showGenerate} = this.state;
        const createInput = inputBox.map((item, index)=>{
            return <Inputs ref={index} key={index} id={item}/>
        });

        return(
        <Fragment>
            <div className="row">
              {createInput}
            </div>
            <div className="row buttons">
                <div className="error red-text">{this.state.error}</div>
                <Addfield addFields={this.addField} />
                <Generate passField={this.passField} />
            </div>
            { showGenerate ? <GenerateData inputs={data} /> : null }
        </Fragment>
        )
    }
}

export default InputFields;
