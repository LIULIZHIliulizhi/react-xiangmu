/**
 * Created by 29671 on 2018/11/5.
 */
import {connect} from 'react-redux';

import Dashen from '../components/dashen';
import {getUserList} from '../redux/actions';

export default connect(
  state => ({userList: state.userList}),
  {getUserList}
)(Das