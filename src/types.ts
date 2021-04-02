import {ValidatorType} from "./hooks/useInput";


export interface StoreProps {
    login: LoginStateProps,
    auth:AuthReducerStateType
}

export interface Form {
    id: number | string,
    value: string,
    label: string,
    validator: ValidatorType[],
    description?: string
    attributes?: React.AllHTMLAttributes<HTMLInputElement>,
}

export interface LoginStateProps {
    forms: Form[]
}

export interface AuthReducerStateType {
    isLogin: boolean,
    sendsay: any
}