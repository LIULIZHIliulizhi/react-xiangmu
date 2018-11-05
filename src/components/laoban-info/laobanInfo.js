/**
 * Created by 29671 on 2018/11/2.
 */
import React,{Component}from 'react';
import {Redirect}from 'react-router-dom'
import {InputItem,Button,TextareaItem}from 'antd-mobile';
import PropTypes from 'prop-types'

import HeaderSelector from "../headers-selector/index";
class LaobanInfo extends Component{
  static propTypes={
    user:PropTypes.object.isRequired,
    updateUserInfo:PropTypes.func.isRequired
  }

  state={
    post:'',
    salary:'',
    company:'',
    header:'',
    info:''
  }
  setHeader = header => {
    this.setState({
      header
    })
  }
  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  saveUserInfo = ()=>{
    this.props.updateUserInfo(this.state)
  }
  render(){
    const {msg,header} = this.props.user;
    if(header){
      return <Redirect to="/laoban"/>
    }
    return (
     <div>
       <HeaderSelector setHeader={this.setHeader}/>
       {msg?<p className="err-msg">{msg}</p>:''}
       <InputItem onChange={val=>this.handleChange('post',val)}>招聘职位： </InputItem>
       <InputItem onChange={val=>this.handleChange('company',val)}>公司名称：</InputItem>
       <InputItem onChange={val=>this.handleChange('salary',val)}>职位薪资：</InputItem>
       <TextareaItem title="职位要求：" rows={3} onChange={val=>this.handleChange('info',val)}/>
       <Button type="primary" onClick={this.saveUserInfo}>保存</Button>
     </div>
    )
  }
}
export default LaobanInfo;