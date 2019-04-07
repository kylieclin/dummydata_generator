import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import '../assets/css/app.scss';

import GenerateData from './output/generate_data';
import InputFields from './input';


class App extends Component {
    constructor(props){
        super(props)

        this.state = {
        }

        this.data = {}
        this.getFields = this.getFields.bind(this);
    }
    getFields(){
        console.log("APP:",this.data);
    }
    render(){
        
        return(
            <div>
                <div className="app">
                    <h1 className="center">Dummy Data Generator</h1>
                    {/* <GenerateData /> */}
                    <InputFields data={this.data} getFields={this.getFields}ref="inputs"/>               
                </div>
            </div>
        );
    }
}

export default App;
