import React, {useState} from 'react';
const Sendsay = require('sendsay-api');
import {useDispatch, useSelector} from "react-redux";
import './Login.scss';
import Button from "../Button/Button";
import {useInput} from "../../hooks/useInput";
import LoginError from "../LoginError/LoginError";
import {StoreProps} from "../../types";
import {login as loginFunc} from "../../store/actions/authActions";


type SubmitData = {
    login: string,
    sublogin: string,
    password: string
}

type ErrorType = {
    isError: boolean,
    message: string
}

// Todo: оформить useAppSelector

const Login: React.FC = () => {
    const [login, sublogin, password] = useSelector((store:StoreProps ) => store.login.forms);
    const [error, setError] = useState<ErrorType>({isError: false, message: ''});
    const [isFetch, setIsFetch] = useState<boolean>(false);
    const dispatch = useDispatch();

    const {
        value: emailValue,
        errors: emailErrors,
        onBlur: emailOnBlur,
        onChange: emailOnChange,
        cleanErrors: emailCleanErrors
    } = useInput(login.value, login.validator);

    const {
        value: subloginValue,
        errors: subloginErrors,
        onBlur: subloginOnBlur,
        onChange: subloginOnChange,
        cleanErrors: subloginCleanErrors
    } = useInput(sublogin.value, sublogin.validator);

    const {
        value: passwordValue,
        errors: passwordErrors,
        onBlur: passwordOnBlur,
        onChange: passwordOnChange,
        cleanErrors: passwordCleanErrors
    } = useInput(password.value, password.validator);

    const formError = (): boolean => {
        return Boolean(emailCleanErrors[0] || subloginCleanErrors[0] || passwordCleanErrors[0]);
    }

    const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFetch) {
            return;
        }
        setIsFetch(true);
        let sendsay = new Sendsay();

        const data: SubmitData = {
            login: emailValue,
            sublogin: subloginValue,
            password: passwordValue
        }
        sendsay.login(data).then((res: any) => {
            setIsFetch(false);
            dispatch(loginFunc(sendsay));
            document.cookie = `session=${sendsay.session}; path=/`;
        }).catch((err: any) => {
            setError({isError: true, message: `{id:"${err.id}", explain: "${err.explain}"}`});
            setIsFetch(false);
        });
        //console.log('send data: ', data);
    }



    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__modal login-modal">
                    <h2 className='login-modal__title'>API-консолька</h2>

                    {error.isError && <LoginError error={error.message}/>}

                    <form className='login-modal__form login-modal-form' onSubmit={onSubmit}>
                        <div className={`login-modal-form__field ${emailErrors[0] && 'error'}`}>
                            <label htmlFor="login" className='login-modal-form__label login-modal-label'>
                                <span className='login-modal-label__text'>{login.label}</span>
                                <span className='login-modal-label__description'>{login.description}</span>
                            </label>
                            <input
                                {...login.attributes}
                                type="email"
                                id='login'
                                className='login-modal-form__input'
                                onChange={emailOnChange}
                                onBlur={emailOnBlur}
                                value={emailValue}
                            />
                        </div>

                        <div className={`login-modal-form__field ${subloginErrors[0] && 'error'}`}>
                            <label htmlFor="sublogin" className='login-modal-form__label login-modal-label'>
                                <span className='login-modal-label__text'>{sublogin.label}</span>
                                <span className='login-modal-label__description'>{sublogin.description}</span>
                            </label>
                            <input
                                {...sublogin.attributes}
                                type="text"
                                id='sublogin'
                                className='login-modal-form__input'
                                onChange={subloginOnChange}
                                onBlur={subloginOnBlur}
                                value={subloginValue}
                            />
                        </div>

                        <div className={`login-modal-form__field ${passwordErrors[0] && 'error'}`}>
                            <label htmlFor="password" className='login-modal-form__label login-modal-label'>
                                <span className='login-modal-label__text'>{password.label}</span>
                                <span className='login-modal-label__description'>{password.description}</span>
                            </label>
                            <input
                                {...password.attributes}
                                type="password"
                                id='password'
                                className='login-modal-form__input'
                                onChange={passwordOnChange}
                                onBlur={passwordOnBlur}
                                value={passwordValue}
                            />
                        </div>

                        <div className={`login-modal-form__field`}>
                            <Button text='Войти' disabled={formError()} isFetch={isFetch} />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;