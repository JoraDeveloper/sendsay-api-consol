import React from "react";
import {AnyAction} from "redux";
import {ValidatorType} from "../../hooks/useInput";

interface Form {
    id: number | string,
    value: string,
    label: string,
    validator: ValidatorType[],
    description?: string
    attributes?: React.AllHTMLAttributes<HTMLInputElement>,
}

export interface StateProps {
    forms: Form[]
}

const initialState: StateProps = {
    forms: [
        {
            id: 1,
            value: '',
            label: 'Логин',
            attributes: {
                name: 'login',
            },
            validator: [
                {
                    message: 'true',
                    validate: (value: string) => value.trim() !== ''
                }
            ]

        },
        {
            id: 2,
            value: '',
            label: 'Саблогин',
            description:'Опционально',
            attributes: {
                name: 'sublogin',
            },
            validator: []

        },
        {
            id: 2,
            value: '',
            label: 'Пароль',
            attributes: {
                name: 'password',
            },
            validator: [
                {
                    message: 'true',
                    validate: (value: string) => value.trim() !== ''
                },
                {
                    message: 'true',
                    validate: (value: string) => value.length > 5
                }
            ]

        }
    ]
}


const loginReducer = (state: StateProps = initialState, action: AnyAction) => {
    switch (action.type) {
        default: return state;
    }
}

export default loginReducer;

//ToDo: типизация атрибутов Input