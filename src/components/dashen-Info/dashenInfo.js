/**
 * Created by 29671 on 2018/11/2.
 */
/**
 * Created by 29671 on 2018/11/2.
 */
import React,{Component}from 'react';
import {InputItem,Button,NavBar,TextareaItem}from 'antd-mobile';
class DashenInfo extends Component{
  render(){
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        {/*<HeadersSelector/>*/}
        <InputItem>求职岗位： </InputItem>
        <TextareaItem title="个人介绍：" rows={3}/>
        <Button type="primary">保存</Button>
      </div>
    )
  }
}
export default DashenInfo;