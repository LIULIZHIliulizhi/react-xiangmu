/**
 * Created by 29671 on 2018/11/2.
 */
import React,{Component}from 'react';
import {InputItem,Button,NavBar,TextareaItem}from 'antd-mobile';
class LaobanInfo extends Component{
  render(){
    return (
     <div>
       <NavBar>老板信息完善</NavBar>
       <InputItem>招聘职位： </InputItem>
       <InputItem>公司名称：</InputItem>
       <InputItem>职位薪资：</InputItem>
       <TextareaItem title="职位要求：" rows={3}/>
       <Button type="primary">保存</Button>
     </div>
    )
  }
}
export default LaobanInfo;