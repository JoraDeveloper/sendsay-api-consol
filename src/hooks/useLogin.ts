import {useSelector} from "react-redux";
import {StoreProps} from "../types";


export const useLogin = () => {
    const {isLogin, sendsay} = useSelector((state: StoreProps) => state.auth);
    return {isLogin, sendsay};
}