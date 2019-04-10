import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import '../assets/css/app.scss';
import InputFields from './input';


export default () => {
    return(
        <div>
            <div className="app">
                <h1 className="center">Dummy Data Generator</h1>
                <Route path="/" exact component={InputFields} />
            </div>
        </div>
    );
}
