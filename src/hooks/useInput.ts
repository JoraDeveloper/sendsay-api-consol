import React, {useState} from "react";

export type ValidatorType = {
    message: string,
    validate: (value: string) => boolean
}

export interface UseInputType {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: () => void,
    errors: string[]
}




export const useInput = (initialState: string, validators: ValidatorType[]): UseInputType => {
    const [value, setValue] = useState<string>(initialState);
    const [blur, setBlur] = useState(false);
    let errors: string[] = useValidation(value, validators);
    errors = blur && errors;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target : {value}} = e;
        setValue(value);
    }

    const onBlur = () => {
        setBlur(true);
    }

    return {
        value, onChange, onBlur, errors
    }
}




const useValidation = (value: string, validators: ValidatorType[]) => {
    const errors: string[] = [];

    validators.forEach(({message, validate}) => {
        if (!validate(value)) {
            errors.push(message);
        }
    })
    //console.log(errors);

    return errors;
}