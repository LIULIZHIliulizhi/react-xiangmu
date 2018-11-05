import {reqLogin,reqRegister,reqUpdateUserInfo,getUserInfo,reqGetUserList} from '../../api';
import {AUTH_SUCCESS,ERR_MSG,UPDATE_USERINFO,REST_USERINFO,UPDATE_USER_LIST,RESET_USER_LIST}from '../action-type';
//定义用户注册成功之后的状态，user就是成功之后返回状态的值（创建Action的工厂函数）
export const authSuccess = user=>({type:AUTH_SUCCESS,data:user});
//定义用户注册失败之后的状态，msg是失败之后返回状态的值（创建Action的工厂函数）
export const errMsg = msg=>({type:ERR_MSG,data:msg})
//定义更新用户信息(完善用户信息)的状态
export const upUserInfo = user=>({type:UPDATE_USERINFO,data: user});

export const restUserInfo = msg=>({type:REST_USERINFO,data:msg})

//同步action  更新用户列表数据成功
export const updateUserList = userlist => ({type: UPDATE_USER_LIST, data: userlist});

//同步action  更新用户列表数据失败
export const resetUserList = msg => ({type: RESET_USER_LIST, data: msg});

//注册发送请求+更新状态 data 代表的是 用户传入的参数
export const register = data=>{
 // 验证信息是否填写规范
  const {username,password,type,rePassword} = data;
  if(!username){
    return errMsg({username,password,msg:'请输入用户名'})
  }else if(!password){
    return errMsg({username,password,msg:'请输入密码'})
  }else if(password !== rePassword){
    return errMsg({username,password,msg:'两次密码输入不一致'})
  }else if(!type){
    return errMsg({username,password,msg:'请选择用户类型'})
  }
  return dispatch =>{
    reqRegister(data)
      .then(res =>{//res是请求成功之后的一个对象包括请求头等等 data是res属性存储着响应回来的数据
        console.log(res)
        const result = res.data;
        if(result.code === 0){//code = 0 是注册成功的返回值得一个
          //注册成功后，使用dispatch方法传入注册成功之后的相对用应的action 自动调用reduce方法进行状态更新
          dispatch(authSuccess(result.data));
        }else{
          dispatch(errMsg({msg: result.msg,username:data.username,type:data.type}))
        }
      })
      .catch(err=>{
        dispatch(errMsg({msg:'网络不稳定，请重新注册',username:data.username,type:data.type}))
      })
  }
}
//登录的异步action
export const login = data=>{
  const {username,password}= data;
  if(!username || !password){
    return errMsg({msg:'请输用户名和密码'})
  }
  return dispatch=>{
    reqLogin(data)
      .then(res =>{
        const result = res.data
        if(result.code === 0){
          dispatch(authSuccess(result.data))
        }else{
          dispatch(errMsg(result.data))
        }
      })
      .catch(err=>{
        dispatch(errMsg({msg:'网络不稳定请重新登录'}))
      })
  }
}
//更新完善用户信息
export const updateUserInfo = (data)=>{
const {post,salary,company,info,header,type}=data
  if(!header){
  return restUserInfo({msg:'请选择头像'})
  }else if(!post){
  return restUserInfo({msg:'请输入职位'})
  }
  if(type ==='lanban'){
    if(!company){
      return restUserInfo({msg:'请输入公司名称'})
    }
    if(!salary){
      return restUserInfo({msg:'请输入职位薪资'})
    }
    if(!info){
      return restUserInfo({msg:"请输入公司简介"})
    }
  }else{
    if(!info){
      return restUserInfo({msg:"请输入个人简介"})
    }
  }
  return dispatch=>{
    reqUpdateUserInfo(data)
      .then(res=>{
        const result = res.data
        if(result.code===0){
          dispatch(upUserInfo(result.data))
        }else{
          dispatch(restUserInfo(result.msg))
        }
      })
      .catch(err => {
        dispatch(restUserInfo('网络不稳定，请重新试试！'))
      })
  }
}
//获取用户信息
export const getInfo = ()=>{
  return dispatch=>{
    getUserInfo()
      .then(res=>{
        const result = res.data;
        if(result.code===0){
          dispatch( upUserInfo(result.data))
        }else{
          dispatch(restUserInfo(result.msg))
        }
      })
      .catch(err=>{
        dispatch( restUserInfo({msg:'网络不稳定，请重新试试'}))
      })
  }

}
//获取用户列表
export const getUserList=type=>{
  return dispatch => {
    //发送请求
    reqGetUserList(type)
      .then(res => {
        const result = res.data;
        if (result.code === 0) {
          //请求成功
          dispatch(updateUserList(result.data));
        } else {
          //请求失败
          dispatch(updateUserList({msg: result.msg}));
        }
      })
      .catch(err => {
        //请求失败
        dispatch(updateUserList({msg: '网络不稳定，请重新试试~'}));
      })
  }
}





