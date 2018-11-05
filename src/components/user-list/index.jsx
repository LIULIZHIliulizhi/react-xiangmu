/**
 * Created by 29671 on 2018/11/4.
 */
import React,{Component}from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types';

class Userlist extends Component{
  static propTypes = {
    item: PropTypes.object.isRequired
  }
  render(){
    const{username,herader,post,salary,company,info} = this.props.item
    return (
      <WingBlank >
        <div>
          <WhiteSpace />
          <Card>
            <Card.Header
              thumb={require()}
              extra={username}
             />
            <Card.Body>
              <div>职位: {post}</div>
              {company ? <div>公司: {company}</div> : ''}
              {salary ? <div>月薪: {salary}</div> : ''}
              <div>描述: {info}</div>
            </Card.Body>
          </Card>
         </div>
      </WingBlank>
    )
  }
}
export default Userlist