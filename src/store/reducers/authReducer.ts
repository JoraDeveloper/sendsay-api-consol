import {AnyAction} from "redux";
import {LOGIN, LOGOUT} from "./actionTypes";
import {AuthReducerStateType} from '../../types';


const initialState = {
    isLogin: false,
    sendsay: {}
}

const authReducer = (state: AuthReducerStateType = initialState, action: AnyAction): AuthReducerStateType => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, isLogin: true, sendsay: action.payload
            }
        case LOGOUT:
            return {
                ...state, isLogin: false
            }
        default: return state;
    }
}

export default authReducer;