import React from 'react';
import './LoginError.scss';

type Props = {
    error: string
}


const LoginError:React.FC<Props> = ({error}) => {
    return (
        <div className='login-error'>
            <div className="login-error__icon">
                <img src="../../assets/login-error-icon.svg" />
            </div>
            <div className="login-error__title">Вход не вышел</div>
            <div className="login-error__description">{error}</div>
        </div>
    )
}

export default LoginError;