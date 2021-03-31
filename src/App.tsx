import React from "react";
import Login from "./components/Login/Login";
const Sendsay = require('sendsay-api');

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
        <div className='app'>
            <Login />
        </div>
    )
}

export default App;