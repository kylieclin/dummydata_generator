import React, {Component} from 'react';
import axios from 'axios';

class GenerateData extends Component {
    constructor(props){
        super(props)
        this.state = {
            randomWords: 'Lorem ipsum',
            randomNumber: 1,
        }
        this.newKey = null;
    }


    componentDidMount(){
        this.getRandomWords();
        this.getRandomNumber();
    }

    getRandomWords(){
        axios.get('https://yacdn.org/proxy/https://random-word-api.herokuapp.com/key', {
        }).then((resp) => {
            this.newKey = resp.data;
            return axios.get('https://random-word-api.herokuapp.com/word', {
                params: {
                    key: this.newKey,
                    number: 2
                }
            }).then((resp) => {
                const words = resp.data.join(' ');
                this.setState({
                    randomWords: words
                });
            });
        });
    }

    getRandomNumber(){
        const randomNumber = Math.floor(Math.random() * 100);
        this.setState({
            randomNumber: randomNumber
        });
    }

    generateData(){
        const {inputs} = this.props
        const convertOptions = inputs.map((box) => {
            let opt = box.option;
            switch (opt){
                case 'string':
                    opt = this.state.randomWords;
                    break;
                case 'number':
                    opt = this.state.randomNumber;
                    break;
                case 'object':
                    opt = {};
                    break;
                case 'array':
                    opt = [];
                    break;
                case 'null':
                    opt = 'null';
                    break;
            }
            return {field: box.field, option: opt}
        });
        const objOutput = {}
        convertOptions.map((input) => {
            objOutput[input.field] = input.option
        });
        const jsonOutput = JSON.stringify(objOutput, null, '\t');
        return jsonOutput;
    }

    render(){
        const output = this.generateData();
        return(
            <div>
                <h1>Result</h1>
                <pre>{output}</pre>
            </div>
        );
    }
}

export default GenerateData;
