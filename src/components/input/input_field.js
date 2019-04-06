import React, {Component} from 'react';


class InputFields extends Component{
    constructor(props){
        super(props)

        this.state= {
            field: ''
        };

        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(event){
        this.setState({
            field: event.target.value
        })
    }
    componentDidMount(){
        M.FormSelect.init(this.formSelect);
    }
    render(){
        return(
        <div className="row">
            <div className="field-input col s8 m6">
                <form className="input-field"action="">
                    <input id="field" name="field" className="field" type="text" value={this.state.field} onChange={this.handleInput} required/>
                    <label htmlFor="field">Field</label>
                </form>
            </div>
            <div className="type-select col s4 m2">
                <select defaultValue="default" ref={(element)=>{this.formSelect = element}}>
                    <option value="default" disabled>Data Type</option>
                    <option value="stirng">String</option>
                    <option value="number">Number</option>
                    <option value="object">Object</option>
                    <option value="array">Array</option>
                    <option value="null">null</option>
                </select>
                <label>Materialize Select</label>
            </div>
        </div>
        )
    }
}

export default InputFields;
