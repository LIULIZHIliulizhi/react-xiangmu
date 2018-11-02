/**
 * Created by 29671 on 2018/11/2.
 */
//注册的容器组件
import {connect} from 'react-redux';
import Register from '../components/register';
import {register}from '../redux/actions';
export default connect(
  state=>({user:state.user}),//状态数据  state代表将要更新的状态 ，user是更新状态的值
  {register}//更新状态的方法
)(Register)
