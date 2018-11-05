
/**
 * Created by 29671 on 2018/11/2.
 */
import {connect} from 'react-redux';
import Login from '../components/login'
import {login}from '../redux/actions';
export default connect(
  state=>({user:state.user}),
  {login}
)(Login)