import React from 'react';
import {Link} from 'react-router-dom';
import './MainHeader.scss';

const MainHeader = () => {
    return (
        <div className='main__header header'>
            <div className="header__logo logo">
                <Link to='/console' className="logo__img">
                    <img src="../../../assets/logo.svg" alt="logo"/>
                </Link>
                <p className="logo__text">
                    API-консолька
                </p>
            </div>
            <div className="header__info info">
                <div className="info__login">
                    <span>some@email.com</span>
                    <span className='info__login--colon'>:</span>
                    <span>sublogin</span>
                </div>

                <div className="info__logout">
                    <p className="info__logout--text">
                        Выйти
                    </p>
                    <div className="info__logout--icon">
                        <img src="../../../assets/logout-icon.svg" alt="logout"/>
                    </div>
                </div>

                <div className="info__fullscreen">
                    <img src="../../../assets/show_fullscrin.svg" alt="show"/>
                </div>
                {/*<div className="info__actions actions">
                    <div className="actions__logout">
                        <div className="actions__logout--text"></div>
                        <div className="actions__logout--icon"></div>
                    </div>
                    <div className="actions__fullscreen">

                    </div>
                </div>*/}
            </div>
        </div>
    )
}

export default MainHeader;