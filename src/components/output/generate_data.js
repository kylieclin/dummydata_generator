import React, {Component} from 'react';
import axios from 'axios';

class GenerateData extends Component {
    state = {
        words: null,
        numOfWords: 2
    }

    componentDidMount(){
        //needs to be dynamic
        this.getRandomWords('name')
    }

    getRandomWords(fieldWord){
        const resp = axios.get('https://api.datamuse.com/words', {
            params: {
                rel_gen: fieldWord
            }
        }).then((resp) => {
            this.setState({
                words: resp.data
            });
        })
    }

    render(){
        const {words, numOfWords} = this.state;
        if(words === null){
            return (
                <div>
                    <h1>HERE IS YOUR DATA</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            );
        }
        let inputValue = ''
        for(let i = 0; i < numOfWords; i++){
            inputValue += words[i].word + ' '
        }
        console.log('2 words', inputValue)
        return(
            <div>
                <h1>HERE IS YOUR DATA</h1>
                <p>{inputValue}</p>
            </div>
        );
    }
}

export default GenerateData;
