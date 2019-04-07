import React, {Component, Fragment} from 'react';

class InputBox extends Component {
    constructor(props){
        super(props)

        this.state= {
            field: '',
            option:''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }
    handleInput(event){
        this.setState({
            field: event.target.value
        })
    }
    handleSelect(event){
        this.setState({
            option: event.target.value
        })
    }
    componentDidMount(){
        M.FormSelect.init(this.formSelect);
    }
    render(){
        return (
            <Fragment>
                <div className="field-input col s8 m6">
                    <form className=""action="">
                        <label htmlFor="field">Field</label>
                        <input id="field" name="field" className="field" type="text" value={this.field} onChange={this.handleInput} placeholder="Enter Field"/>
                    </form>
                </div>
                <div className="type-select col s4 m2">
                    <label>Select Data Type
                    <select  defaultValue="" onChange={this.handleSelect} ref={(element)=>{this.formSelect = element}}>
                        <option value="" disabled>Select</option>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="object">Object</option>
                        <option value="array">Array</option>
                        <option value="null">null</option>
                    </select>
                    </label>
                </div>
            </Fragment>
        )
    }
}

export default InputBox;
