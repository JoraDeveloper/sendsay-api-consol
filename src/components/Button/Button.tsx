import React from 'react';
import './Button.scss';
import LoaderLoginBtn from "../LoaderLoginBtn/LoaderLoginBtn";

interface Props {
    text: string,
    [key: string]: any
}

const Button:React.FC<Props> = ({text, isFetch, disabled, ...attributes}) => {

    return (
        <div className={`button ${disabled && 'disabled'}`}>
            <button {...attributes}>
                { isFetch ? <div className='loader'><LoaderLoginBtn /></div> : text}
            </button>
        </div>
    )
}

export default Button;