import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import '../assets/css/app.scss';
import GenerateData from './output/generate_data';
import InputFields from './input/input_field';


class App extends Component {

    render(){
        return(
            <div>
                <div className="app">
                    <Route path="/" exact component={InputFields} />
                    <Route path="/generate" component={GenerateData} />
                </div>
            </div>
        );
    }
}

export default App;
