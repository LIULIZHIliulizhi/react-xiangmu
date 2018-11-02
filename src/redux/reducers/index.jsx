import {combineReducers} from 'redux';
import {AUTH_SUCCESS,ERR_MSG}from '../action-type'
// import {getRedirectPath}from '../../utils'
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
      return {username: action.data.username, type: action.data.type, msg: ''}
    case ERR_MSG :
      return {...action.data}
    default:
      return preState;
  }
}
export default combineReducers({
 user
})
//最终向外暴露是 {reducer函数：reducer函数的调用} 如：{xxx: xxx(), aaa: aaa()}

