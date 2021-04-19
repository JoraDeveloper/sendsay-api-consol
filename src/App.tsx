import React, {useEffect} from "react";
import Login from "./components/Login/Login";
import {Switch, Route, Redirect, Link} from 'react-router-dom';
const Sendsay = require('sendsay-api');
import {useLogin} from "./hooks/useLogin";
import {useDispatch} from "react-redux";
import {login as loginFunc, logout as logoutFunc} from "./store/actions/authActions";



const LoginSuccess = ({logout} : any) => {
    const {sendsay} = useLogin()
    sendsay.request({ action: 'pong'}).then(function(res: any) {
        console.log(res);
    });
    return (
        <>
            <h1>Успешный вход</h1>
        </>
    )
}


const App:React.FC = () => {

    const {isLogin, sendsay} = useLogin();
    const dispatch = useDispatch();

    const login = () => {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const [name, value] = cookie.split('=');
            if (name === 'session' && value.length > 0) {
                const newSendsay = new Sendsay();
                newSendsay.setSession(value);
                dispatch(loginFunc(newSendsay));
            }
        })
    }

    const logout = () => {
        sendsay.request({action: 'logout'});
        document.cookie = 'session=';
        dispatch(logoutFunc());
    }

    useEffect(() => {
        login();
    }, [isLogin])

    const routes = (isLogin: boolean) => {
        if (isLogin) {
            return (
                <>
                    <Route path='/console' component={LoginSuccess} />
                    <Redirect to='/console' />
                    <button onClick={logout}>logut</button>
                </>
            )
        } else {
            return (
                <>
                    <Route path='/login' component={Login} />
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