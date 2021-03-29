import React from 'react';
import './Login.scss';
import Button from "../Button/Button";

const Login: React.FC = () => {
    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__modal login-modal">
                    <h2 className='login-modal__title'>API-консолька</h2>
                    <form className='login-modal__form login-modal-form'>

                        <div className='login-modal-form__field'>
                            <label htmlFor="login" className='login-modal-form__label login-modal-label'>
                                <span className='login-modal-label__text'>Логин</span>
                                <span className='login-modal-label__description'></span>
                            </label>
                            <input type="text" id='login' className='login-modal-form__input'/>
                        </div>

                        <div className='login-modal-form__field'>
                            <label htmlFor="login" className='login-modal-form__label login-modal-label'>
                                <span className='login-modal-label__text'>Саблогин</span>
                                <span className='login-modal-label__description'>Опционально</span>
                            </label>
                            <input type="text" id='sublogin' className='login-modal-form__input'/>
                        </div>
                        <div className='login-modal-form__field'>
                            <label htmlFor="login" className='login-modal-form__label login-modal-label'>
                                <span className='login-modal-label__text'>Пароль</span>
                                <span className='login-modal-label__description'></span>
                            </label>
                            <input type="text" id='password' className='login-modal-form__input'/>
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