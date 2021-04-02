import React from "react";
import Login from "./components/Login/Login";
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import {useLogin} from "./hooks/useLogin";

const LoginSuccess = () => {
    const {sendsay} = useLogin()
    sendsay.request({ action: 'pong'}).then(function(res: any) {
        console.log(res);
    });
    return (
        <h1>Успешный вход</h1>
    )
}


const App:React.FC = () => {
    const {isLogin} = useLogin();

    const routes = (isLogin: boolean) => {
        if (isLogin) {
            return (
                <>
                    <Route path='/console' component={LoginSuccess} />
                    <Redirect to='/console' />
                </>
            )
        } else {
            return (
                <>
                    <Route path='/login' >
                        <Login />
                    </Route>
                    <Redirect to='/login' />
                </>
            )
        }
    }


    return (
        <div className='app'>
            <Switch>
                {routes(isLogin)}
            </Switch>
        </div>
    )
}

export default App;