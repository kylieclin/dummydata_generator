import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import '../assets/css/app.scss';

import GenerateData from './output/generate_data';
import InputFields from './input';


class App extends Component {
    constructor(props){
        super(props)

        this.state = {
        }


        this.getFields = this.getFields.bind(this);
    }
    getFields(data){
        console.log("APP:",data);
    }
    render(){
        
        return(
            <div>
                <div className="app">
                    <h1 className="center">Dummy Data Generator</h1>
                    <Route path="/" exact render={(props) => <InputFields {...props} getFields={this.getFields} /> }/>
                    <Route path="/generate" component={GenerateData} />

                    
                    {/* <GenerateData /> */}
                    {/* <InputFields  getFields={this.getFields} ref="inputs"/> */}

                </div>
            </div>
        );
    }
}

export default App;
