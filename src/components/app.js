import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import '../assets/css/app.scss';
import logo from '../assets/images/logo.svg';
import GenerateData from './output/generate_data';

class App extends Component {

    render(){
        return(
            <div>
                <div className="app">
                    <img src={logo} className="logo rotate"/>
                    <GenerateData />
                </div>
            </div>
        );
    }
}






export default App;
