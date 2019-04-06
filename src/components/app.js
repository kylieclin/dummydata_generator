import React, {Component} from 'react';
import '../assets/css/app.scss';
import logo from '../assets/images/logo.svg';

class App extends Component {

    render(){
        return(
            <div>
                <div className="app">
                    <img src={logo} className="logo rotate"/>
                    <h1>Welcome To React</h1>
                </div>
            </div>
        );
    }
} 






export default App;
