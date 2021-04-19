import React from 'react';
import './MainHistory.scss';
import MainHistoryItem from "./MainHistoryItem/MainHistoryItem";

const MainHistory = () => {
    return (
        <div className='main__history history'>
            <div className="history__list">

            </div>

            <div className='history__clean'>
                <img src="../../../assets/history-clean.svg" alt="clean"/>
            </div>
        </div>
    )
}

export default MainHistory;