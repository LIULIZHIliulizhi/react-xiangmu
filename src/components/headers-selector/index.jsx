/**
 * Created by 29671 on 2018/11/2.
 */
import React,{Component}from 'react';
import {Grid,List}from 'antd-mobile';
import PropTypes from 'prop-types'
class HeaderSelector extends Component{
  static propTypes={
    setHeader:PropTypes.func.isRequired
  }
  state = {
    icon:null
  }
  setHeader=(icon,text)=>{
    this.setState({
      icon
    })
    this.props.setHeader(text)
  }
  render(){
    const {icon} = this.state;
    const headerUI = icon?<div>已选择头像 <img src={icon} alt="头像"/></div>:'请选择头像';
    const data = Array.from(new Array(20)).map((item, index) => ({
      icon: require(`../../assets/avatars/头像${index+1}.png`),
      text: `头像${index+1}`,
    }));

    return (
      <List renderHeader={() => headerUI}>
        <Grid data={data} columnNum = {5} onClick = {this.setHeader}/>
      </List>
    )
  }
}
export default HeaderSelector


