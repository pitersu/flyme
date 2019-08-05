import {handleActions} from "redux-actions"
const defaultState={
token:sessionStorage.getItem("token")||"",
user:"未登录"
}
export default handleActions({
  LOGIN_ACTION:(state,action)=>{
    let newState = {...state};
    newState.token = "123"
    sessionStorage.setItem("token","123");
    newState.user = "su"
    return newState
  },
  LOGOUT_ACTION:(state)=>{
    let tokenstate = {...state};
    tokenstate.token = "";
    return tokenstate;
  }
},defaultState)