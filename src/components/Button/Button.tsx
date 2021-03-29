import React from 'react';
import './Button.scss';

interface Props {
    text: string
}

const Button:React.FC<Props> = ({text}) => {
    return (
        <div className='button'>
            <button>{text}</button>
        </div>
    )
}

export default Button;