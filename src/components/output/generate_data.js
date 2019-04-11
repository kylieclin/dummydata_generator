import React, {Component} from 'react';
import axios from 'axios';
import OutputModal from './modal';

class GenerateData extends Component {
    constructor(props){
        super(props)
        this.state = {
            randomWords: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Aspernatur', 'molestias', 'tenetur', 'fugiat', 'ab', 'ipsa', 'fuga', 'sed', 'excepturi', 'atque', 'unde', 'quam.']
        }
    }


    componentDidMount(){
        this.getRandomWords();
    }

    getRandomWords(){
        axios.get('https://baconipsum.com/api/', {
            params: {
                type: 'meat-and-filler',
                paras: 10
            }
        }).then(resp => {
            const words = resp.data.join(' ').split(' ').filter(Boolean);
            this.setState({
                randomWords: words
            });
        });
    }

    getRandomNumber(minimum, maximum){
        const min = parseInt(minimum);
        const max = parseInt(maximum);
        const randomNumber = Math.ceil((Math.random() * (max - min)) + min);
        return randomNumber;
    }

    generateData(){
        const {inputs} = this.props
        const convertOptions = inputs.map(({field, option, max, min}) => {
            let {randomWords} = this.state;
            let randomNumber = this.getRandomNumber(min, max)
            switch (option){
                case 'string':
                    option = randomWords.splice(min, max).join(' ');
                    break;
                case 'number':
                    option = randomNumber;
                    break;
                case 'object':
                    option = {};
                    break;
                case 'array':
                    option = [];
                    break;
                case 'null':
                    option = 'null';
                    break;
            }
            return {field: field, option: option}
        });
        const objOutput = {}
        convertOptions.map(({field, option}) => {
            objOutput[field] = option
        });
        const jsonOutput = JSON.stringify(objOutput, null, '\t');
        return jsonOutput;
    }

    render(){
        const output = this.generateData();
        return(
            <OutputModal output={output} />
        );
    }
}

export default GenerateData;
