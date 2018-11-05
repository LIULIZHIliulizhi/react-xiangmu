import {combineReducers} from 'redux';
import {AUTH_SUCCESS,ERR_MSG,UPDATE_USERINFO,REST_USERINFO,UPDATE_USER_LIST,RESET_USER_LIST}from '../action-type'
import {getRedirectPath}from '../../utils'
//定义初始化状态的值
const initUserState = {
  username:'',
  type:'',
  msg:'',
  redirectTo:''
}
function user(preState = initUserState,action) {
  switch (action.type) {
    case AUTH_SUCCESS :
      return {username: action.data.username, type: action.data.type, msg: '',redirectTo: getRedirectPath(action.data.type, action.data.header)}
    case ERR_MSG :
      return {...action.data}
    case UPDATE_USERINFO:
      return action.data
    case REST_USERINFO:
      return {...action.data}
    default:
      return preState;
  }
}
const initPreState=[]
function userList(preState=initPreState,action){
  switch(action.type){
    case UPDATE_USER_LIST:
      return action.data
    case RESET_USER_LIST:
      return action.data
    default:
      return preState
  }

}
export default combineReducers({
 user,
  userList
})
//最终向外暴露是 {reducer函数：reducer函数的调用} 如：{xxx: xxx(), aaa: aaa()}

