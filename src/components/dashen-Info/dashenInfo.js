/**
 * Created by 29671 on 2018/11/2.
 */
/**
 * Created by 29671 on 2018/11/2.
 */
import React,{Component}from 'react';
import {Redirect}from 'react-router-dom'
import {InputItem,Button,TextareaItem}from 'antd-mobile';
import PropTypes from'prop-types';


import HeaderSelector from "../headers-selector/index";
class DashenInfo extends Component{
  static propTypes = {
    user:PropTypes.object.isRequired,
    updateUserInfo:PropTypes.func.isRequired
  }
  state = {
    header: '',
    info: '',
    post: '',
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  setHeader = header => {
    this.setState({
      header
    })
  }
  saveUserInfo = ()=>{
    this.props.updateUserInfo(this.state)
}
  render(){
    const {msg,header} = this.props.user;
    if(header){
      return <Redirect to="/dashen"/>
    }
    return (
      <div>
        <HeaderSelector setHeader={this.setHeader}/>
        {msg?<p className="err-msg">{msg}</p>:''}
        <InputItem onChange={val=>this.handleChange('post',val)}>求职岗位： </InputItem>
        <TextareaItem title="个人介绍：" rows={3} onChange={val=>this.handleChange('info',val)} />
        <Button type="primary" onClick = {this.saveUserInfo}>保存</Button>
      </div>
    )
  }
}
export default DashenInfo;