/**
 * Created by 29671 on 2018/11/4.
 */
import React,{Component}from 'react';
import PropTypes from 'prop-types';
import UserList from '../user-list';
class Lanban extends Component{
  static propTypes = {
    userList: PropTypes.array.isRequired,
    getUserList: PropTypes.func.isRequired
  }
  componentDidMount(){
    this.props.getUserList('dashen')
  }
  render(){
    const {userList} = this.props;
    return (
      <div>
        {
          userList.map((item,index)=><UserList key={index} item ={item}/>)
        }
      </div>
    )
  }
}
export default Lanban