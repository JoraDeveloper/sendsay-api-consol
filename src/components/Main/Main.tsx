import React from 'react';
import './Main.scss';
import MainHeader from "./MainHeader/MainHeader";
import MainHistory from "./MainHistory/MainHistory";

const Main = () => {
    return (
        <div className='app__main main'>
            <MainHeader />
            <MainHistory />
        </div>
    )
}

export default Main;