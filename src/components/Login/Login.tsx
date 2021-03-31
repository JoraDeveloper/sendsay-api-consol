import React from 'react';
import './Login.scss';
import Button from "../Button/Button";
import {useSelector} from "react-redux";
import {StateProps} from "../../store/reducers/loginReducer";
import {useInput} from "../../hooks/useInput";

interface StoreProps {
    login: StateProps
}

type SubmitData = {
    email: string,
    sublogin: string,
    password: string
}

// Todo: оформить useAppSelector

const Login: React.FC = () => {
    const [login, sublogin, password] = useSelector((store:StoreProps ) => store.login.forms);

    const {
        value: emailValue,
        errors: emailErrors,
        onBlur: emailOnBlur,
        onChange: emailOnChange
    } = useInput(login.value, login.validator);

    const {
        value: subloginValue,
        errors: subloginErrors,
        onBlur: subloginOnBlur,
        onChange: subloginOnChange
    } = useInput(sublogin.value, sublogin.validator);

    const {
        value: passwordValue,
        errors: passwordErrors,
        onBlur: passwordOnBlur,
        onChange: passwordOnChange
    } = useInput(password.value, password.validator);

    const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data: SubmitData = {
            email: emailValue,
            sublogin: subloginValue,
            password: passwordValue
        }
        console.log('send data: ', data);
    }



    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__modal login-modal">
                    <h2 className='login-modal__title'>API-консолька</h2>
                    <form className='login-modal__form login-modal-form' onSubmit={onSubmit}>

                        <div className={`login-modal-form__field ${emailErrors[0] && 'error'}`}>
                            <label htmlFor="login" className='login-modal-form__label login-modal-label'>
                                <span className='login-modal-label__text'>{login.label}</span>
                                <span className='login-modal-label__description'>{login.description}</span>
                            </label>
                            <input
                                {...login.attributes}
                                type="text"
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
                                type="text"
                                id='password'
                                className='login-modal-form__input'
                                onChange={passwordOnChange}
                                onBlur={passwordOnBlur}
                                value={passwordValue}
                            />
                        </div>

                        <div className='login-modal-form__field'>
                            <Button text='Войти' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;