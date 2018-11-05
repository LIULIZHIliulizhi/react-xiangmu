/**
 * Created by 29671 on 2018/11/2.
 */
import {connect}from'react-redux';
import DashenInfo from '../components/dashen-Info/dashenInfo';
import {updateUserInfo }from '../redux/actions';
export default connect(
  state=>({user:state.user}),
  {updateUserInfo}
)(DashenInfo)