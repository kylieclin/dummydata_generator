import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import '../assets/css/app.scss';
import logo from '../assets/images/logo.svg';
import InputFields from './input/input_field';

class App extends Component {

    render(){
        return(
            <div>
                <div className="app">
                    <InputFields />
                    
                </div>
            </div>
        );
    }
} 






export default App;
