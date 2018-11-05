/**
 * Created by 29671 on 2018/10/31.
 */
import React,{Component}from 'react';
import {Redirect}from 'react-router-dom'
import {NavBar,List,InputItem,Button,WingBlank,WhiteSpace} from 'antd-mobile';
import PropTypes from 'prop-types';

import Logo from '../logo'
class Login extends Component{
  static propTypes = {
    user: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  }
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
    this.props.login(this.state)
  }
  goRegister = ()=>{
    this.props.history.replace('/register')
  }
  render (){
    const {msg, redirectTo} = this.props.user;
    if (redirectTo) {
      //编程式导航
      // this.props.history.replace(redirectTo);
      //路由链接跳转
      return <Redirect to={redirectTo} />
    }
    return(
      <div>
        <NavBar> 硅 谷 直 聘 </NavBar>
        <Logo />
        <WingBlank>
          {msg ? <p className = 'err-msg'>{msg}</p> :''}
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