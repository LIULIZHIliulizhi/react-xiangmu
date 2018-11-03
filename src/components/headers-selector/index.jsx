/**
 * Created by 29671 on 2018/11/2.
 */
import React,{Compomnent}from 'react';
import {Grid,List}from 'antd-mobile';
class HeaderSelector extends Component{
  state = {
    icon:null
  }
  setHeader=()=>{

  }
  render(){
    const data = Array.from(new Array(20)).map((item, index) => ({
      icon: require(`./avatars/头像${index+1}.png`),
      text: `头像${index+1}`,
    }));

    return (
      <List renderHeader={() => headerUI }>
        <Grid data={data} columnNum = {5} onClick = {this.setHeader}/>
      </List>
    )
  }
}
export default HeaderSelector


