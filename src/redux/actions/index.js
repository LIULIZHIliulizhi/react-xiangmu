import {reqRegister} from '../../api';
import {AUTH_SUCCESS,ERR_MSG}from '../action-type';
//定义用户注册成功之后的状态，user就是成功之后返回状态的值（创建Action的工厂函数）
export const authSuccess = user=>({type:AUTH_SUCCESS,data:user});
//定义用户注册失败之后的状态，msg是失败之后返回状态的值（创建Action的工厂函数）
export const errMsg = msg=>({type:ERR_MSG,data:msg})
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



