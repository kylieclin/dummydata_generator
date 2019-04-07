import React, {Component} from 'react';
import axios from 'axios';

class GenerateData extends Component {
    state = {
        words: [],
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
        console.log('state',this.state)
        const {words, numOfWords} = this.state;
        console.log('words', words)
        const inputValue = ''
        for(var i = 0; i < numOfWords; i++){
            //inputValue +=
        }
        return(
            <div>
                <h1>HERE IS YOUR DATA</h1>

            </div>
        );
    }
}

export default GenerateData;
