import React, {useState} from "react";

export type ValidatorType = {
    message: string,
    validate: (value: string) => boolean
}

export interface UseInputType {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: () => void,
    errors: string[],
    cleanErrors: string[]
}




export const useInput = (initialState: string, validators: ValidatorType[]): UseInputType => {
    const [value, setValue] = useState<string>(initialState);
    const [blur, setBlur] = useState(false);
    let errors: string[] = validation(value, validators);
    let cleanErrors: string[] = [...errors];
    errors = blur && errors;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target : {value}} = e;
        setValue(value);
    }

    const onBlur = () => {
        setBlur(true);
    }

    return {
        value, onChange, onBlur, errors, cleanErrors
    }
}




export const validation = (value: string, validators: ValidatorType[]) => {
    const errors: string[] = [];

    validators.forEach(({message, validate}) => {
        if (!validate(value)) {
            errors.push(message);
        }
    })

    return errors;
}