/**
 * Created by 29671 on 2018/10/31.
 */
import React,{Component}from 'react';
import {NavBar,List,InputItem,Radio,Button,WingBlank,WhiteSpace} from 'antd-mobile';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import Logo from '../logo'
// import {reqRegister}from '../../api/index.js'
const Item = List.Item;
class Register extends Component{
  static propTypes = {
    user: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  }
  //初始化状态
  state = {
    username:'',
    password:'',
    rePassword:'',
    type:'laoban'
  }
  handleChange = (name,val)=>{
    this.setState({
      [name]:val
    })
}
  register = async()=>{
    const {username,password,rePassword,type}= this.state;
    // if( password !== rePassword){
    //   alert('两次密码不一致')
    //   return
    // }
  //  发送请求
  //   const data = await reqRegister({username,password,type})
    this.props.register({username,password,type,rePassword});
  }
  goLogin = ()=>{
    this.props.history.replace('/login')
  }
  render (){
    const {type} = this.state;
    const {msg, redirectTo} = this.props.user;
    if (redirectTo) {
      //编程式导航
      // this.props.history.replace(redirectTo);
      //路由链接跳转
      return <Redirect to={redirectTo} />
    }
    return (
      <div>
        <NavBar> 硅 谷 直 聘 </NavBar>
        <Logo />
        <WingBlank>
          {msg ? <p className='err-msg'>{msg}</p> : ''}
          <form>
            <List>
              <WhiteSpace/>
              <InputItem
                placeholder="请输用户名"
                onChange = {val=>{this.handleChange('username',val)}}
              >用户名：</InputItem>
              <WhiteSpace/>
              <InputItem
                placeholder="请输入密码"
                type="password"
                onChange = {val=>{this.handleChange('password',val)}}
              >密 &nbsp; 码：</InputItem>
              <WhiteSpace/>
              <InputItem
                placeholder="请确认用户密码"
                type="password"
                onChange = {val=>this.handleChange('rePassword',val)}
              >确认密码：</InputItem>
              <Item>
                <WhiteSpace/>
                  用户类型：&nbsp;&nbsp;
                <Radio className="my-radio"
                       checked = {type === 'dashen'}
                       onClick = {()=>this.handleChange('type','dashen')}
                >大神</Radio>&nbsp;&nbsp;
                <Radio className="my-radio"
                       checked = {type === 'laoban'}
                       onClick = {()=>this.handleChange('type','laoban')}
                >老板</Radio>
              </Item>
              <WhiteSpace/>
                <Button type="primary" onClick={this.register}>注册</Button>
              <WhiteSpace/>
                <Button onClick={this.goLogin}>已有账号</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}
export default Register
