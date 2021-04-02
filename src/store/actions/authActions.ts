import {LOGIN, LOGOUT} from "../reducers/actionTypes";

export const login = (payload: any) => {
    return {
        type: LOGIN,
        payload
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}