/**
 * Created by 29671 on 2018/10/31.
 */
import React,{Component}from 'react';
import {NavBar,List,InputItem,Button,WingBlank,WhiteSpace} from 'antd-mobile';
import Logo from '../logo'
import {reqLogin}from '../../api/index'
class Login extends Component{
  state = {
    username:'',
    password:''
  }
  handleChange = (name,val)=>{
    this.setState({
      [name]:val
    })
  }
  reqLogin = async()=>{
    const {username,password} = this.state;
    if(username && password){
    //  发送请求
      const data = await reqLogin({username,password})
      console.log(data)
    }else{
      alert('用户名/密码不能为空')
    }
  }
  goRegister = ()=>{
    this.props.history.replace('/register')
  }
  render (){
    return(
      <div>
        <NavBar> 硅 谷 直 聘 </NavBar>
        <Logo />
        <WingBlank>
          <form>
            <List>
              <WhiteSpace/>
              <InputItem onChange={val=>this.handleChange('username',val)}>用户名：</InputItem>

              <WhiteSpace/>
              <InputItem type="password" onChange={val=>this.handleChange('password',val)}>密 &nbsp;&nbsp;码：</InputItem>
              <WhiteSpace/>
              <Button type="primary" onClick={this.reqLogin}>登录</Button>
              <WhiteSpace/>
              <Button onClick={this.goRegister}>还没有账号</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )

    }
  }
export default Login