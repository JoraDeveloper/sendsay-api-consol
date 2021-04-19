import React, {useEffect, createContext, useCallback} from "react";
import Login from "./components/Login/Login";
import {Switch, Route, Redirect} from 'react-router-dom';
const Sendsay = require('sendsay-api');
import {useLogin} from "./hooks/useLogin";
import {useDispatch} from "react-redux";
import {login as loginFunc, logout as logoutFunc} from "./store/actions/authActions";
import Main from "./components/Main/Main";

type LoginProviderType = {
    login: () => void,
    logout: () => void
}

const loginProvider = createContext<LoginProviderType>({login: null, logout: null});


const LoginProvider: React.FC = ({children}) => {

    const {isLogin, sendsay} = useLogin();
    const dispatch = useDispatch();

    const login = useCallback(() => {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const [name, value] = cookie.split('=');
            if (name === 'session' && value.length > 0) {
                const newSendsay = new Sendsay();
                newSendsay.setSession(value);
                dispatch(loginFunc(newSendsay));
            }
        })
    }, [isLogin])

    const logout = () => {
        sendsay.request({action: 'logout'});
        document.cookie = 'session=';
        dispatch(logoutFunc());
    }

    useEffect(() => {
        login();
    }, [login])

    const loginProviderValue: LoginProviderType = {login, logout}

    /*const {sendsay} = useLogin()
    sendsay.request({ action: 'pong'}).then(function(res: any) {
        console.log(res);
    });*/
    return (
        <loginProvider.Provider value={loginProviderValue}>
            {children}
        </loginProvider.Provider>
    )
}



const App:React.FC = () => {

    const {isLogin} = useLogin();

    const routes = (isLogin: boolean) => {
        if (isLogin) {
            return (
                <>
                    <Route path='/console' component={Main} />
                    <Redirect to='/console' />
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
        <LoginProvider>
            <div className='app'>
                <Switch>
                    {routes(isLogin)}
                </Switch>
            </div>
        </LoginProvider>
    )
}

export default App;