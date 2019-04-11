import React, {Component, Fragment} from 'react';

class InputBox extends Component {
    constructor(props){
        super(props)

        this.state= {
            field: '',
            option:'',
            max: '1',
            min: '0',
            input_detail: null
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInputDetail = this.handleInputDetail.bind(this);

    }
    handleInput(event){
        this.setState({
            field: event.target.value
        })
    }
    handleSelect(event){
        let detail = null;
        switch(event.target.value){
            case 'string':
            detail= this.stringOption();
            break;
            case 'number':
            detail=this.numberRange();
            break;
        }
        this.setState({
            option: event.target.value,
            input_detail: detail
        })
    }
    handleInputDetail(event){
        this.setState({
            max: event.target.value
        })
    }
    stringOption= ()=>{
        return(
            <div className="col s2 m1">
                <label htmlFor="strlen">Length</label>
                <input id="strlen" className="strlen" type="number" onChange={this.handleInputDetail} min="1" max="200"/>
            </div>
        )
    }
    numberRange= ()=>{
        return(
            <Fragment>
                <div className="col s1 m1">
                <label htmlFor="minnum">From</label>
                <input id="minnum" type="number" onChange={this.handleMin}/>
                </div>
                <div className="col s1 m1">
                <label htmlFor="maxnum">To</label>
                <input id="maxnum" type="number" onChange={this.handleInputDetail}/>
                </div>
            </Fragment>
        )
    }
    handleMin= (event)=>{
        this.setState({
            min: event.target.value
        })
    }
    componentDidMount(){
        M.FormSelect.init(this.formSelect);
    }
    render(){
        return (
            <Fragment>
                <div className="field-input col s6 m6">
                    <form className=""action="">
                        <label htmlFor="field">Field</label>
                        <input id="field" name="field" className="field" type="text" value={this.field} onChange={this.handleInput} placeholder="Enter Field"/>
                    </form>
                </div>
                <div className="type-select col s4 m2">
                    <label>Select Data Type
                    <select  defaultValue="default" onChange={this.handleSelect} ref={(element)=>{this.formSelect = element}}>
                        <option value="default" disabled>Select</option>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="object">Object</option>
                        <option value="array">Array</option>
                        <option value="null">null</option>
                    </select>
                    </label>
                </div>

                    {this.state.input_detail}

            </Fragment>
        )
    }
}

export default InputBox;
