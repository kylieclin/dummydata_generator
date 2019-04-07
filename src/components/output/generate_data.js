import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class GenerateData extends Component {
    constructor(props){
        super(props)
        this.state = {
            randomWords: 'Lorem ipsum',
            numOfWords: 5,
            randomNumber: 0,
        }
        this.newKey = null;
    }


    // componentDidMount(){
    //     //needs to be dynamic
    //     this.getRandomWords();
    //     this.getRandomNumber();

    // }

    getRandomWords(){
        axios.get('https://yacdn.org/proxy/https://random-word-api.herokuapp.com/key', {
        }).then((resp) => {
            this.newKey = resp.data;
            return axios.get('https://random-word-api.herokuapp.com/word', {
                params: {
                    key: this.newKey,
                    number: this.state.numOfWords
                }
            }).then((resp) => {
                console.log('getword',resp)
                this.setState({
                    randomWords: resp.data
                });
            });
        });
    }

    getRandomNumber(){
        const randomNumber = Math.floor(Math.random() * 100);
        this.setState({
            randomNumber
        });
    }

    render(){
        console.log('inputs', this.props.inputs)
        const {inputs} = this.props
        const {option} = inputs;
        const convertOptions = option.map((option) => {
            this.getRandomWords();
            this.getRandomNumber();
            switch (option){
                case 'string':
                    option = this.state.randomWords;
                    break;
                case 'number':
                    option = this.state.number;
                    break;
                case 'object':
                    option = {};
                    break;
                case 'array':
                    option = [];
                    break;
                default:
                    option = 'undefined';
                    break;
            }
        });
        console.log('converting options check switch statement', convertOptions);
        inputs.option = convertOptions;
        console.log('check if inputs has converted options', inputs);
        const output = {}
        inputs.map((input) => {
            output[input.field] = input.option
        });
        console.log('check before stringify', output);
        const jsonOutput = json.Stringify(output);
        console.log('check after stringify', jsonOutput);

        return(
            <div>
                <h1>Result:</h1>
                <p>{jsonOutput}</p>
                <Link to="/">Back</Link>
            </div>
        );
    }
}

export default GenerateData;
