/**
 * Created by 29671 on 2018/10/31.
 */
import React,{Component}from 'react';
import {NavBar} from 'antd-mobile';
import {Switch,Route}from 'react-router-dom';
import LaobanInfo from '../../containers/laobanInfo';
import DashenInfo from '../../containers/dashenInfo';
import Dashen from '../dashen';
import Lanban from'../laoban'
class Main extends Component{
  render (){
    return (
      <div>
        <NavBar> 保 存 </NavBar>
        <Switch>
          <Route path="/dashenInfo" component={DashenInfo}/>
          <Route path="/laoban" component={Lanban}/>
          <Route path="/laobanInfo" component={LaobanInfo}/>
          <Route path="/dashen" component={Dashen}/>
        </Switch>
      </div>
    )
  }
}
export default Main;