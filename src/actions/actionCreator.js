import {createAction} from "redux-actions";
import {login} from "@api/user"

const LoginAction = createAction("LOGIN_ACTION");

export const LoginAsyncAction = (userInfo)=>{

    return async (dispatch)=>{
        let data = await login(userInfo);
       dispatch(LoginAction(data))
    }
}

export const LogoutAction = createAction("LOGOUT_ACTION")