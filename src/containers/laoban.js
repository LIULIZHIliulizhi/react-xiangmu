/**
 * Created by 29671 on 2018/11/4.
 */
import {connect} from 'react-redux';

import Laoban from '../components/laoban';
import {getUserList} from '../redux/actions';

export default connect(
  state => ({userList: state.userList}),
  {getUserList}
)(Laoban);