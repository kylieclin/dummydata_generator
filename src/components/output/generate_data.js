import React, {Component} from 'react';
import axios from 'axios';

class GenerateData extends Component {
    state = {

    }

    componentDidMount(){
        this.getRandomWords(2)
    }

    getRandomWords(numOfWords){
        const getKey = axios.get('//https://yacdn.org/proxy/https://random-word-api.herokuapp.com/key');

        const resp = axios.get('https://random-word-api.herokuapp.com/word', {
            params: {
                key: key,
                number: numOfWords
            }
        }).then((resp) => {
            console.log('response', resp)
        });
    }

    render(){
        return(
            <div>
                <h1>HERE IS YOUR DATA</h1>

            </div>
        );
    }
}

export default GenerateData;
