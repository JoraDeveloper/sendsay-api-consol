import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
const Sendsay = require('sendsay-api');
import './style.scss';

const loginData = {
    login: 'viktorpilevins@gmail.com',
    password: 'do2Chepha'
}


const App:React.FC = () => {

    let sendsay = new Sendsay({
        auth: loginData
    });

    sendsay.request({ action: 'pong'}).then(function(res: any) {
        console.log(res);
    })


    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

render(<App/>, document.getElementById('root'));