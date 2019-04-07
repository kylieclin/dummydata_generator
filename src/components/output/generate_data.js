import React, {Component} from 'react';
import axios from 'axios';

class GenerateData extends Component {
    constructor(props){
        super(props)
        this.state = {
            words: null,
            numOfWords: 2
        }
        this.newKey = null;
    }


    componentDidMount(){
        //needs to be dynamic
        this.getRandomWords()
    }

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
                    words: resp.data
                });
            });
        });
    }

    render(){
        console.log('inputs', this.props.inputs)
        console.log(this.state.words)
        const {words, numOfWords} = this.state;
        if(words === null){
            return (
                <div>
                    <h1>HERE IS YOUR DATA</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            );
        }
        const inputValue = words.map((word, index) => {
            return <p key={index}>{word}</p>
        })

        return(
            <div>
                <h1>HERE IS YOUR DATA</h1>
                {inputValue}
            </div>
        );
    }
}

export default GenerateData;
