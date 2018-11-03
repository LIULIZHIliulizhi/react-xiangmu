/**
 * Created by 29671 on 2018/10/31.
 */
import React,{Component}from 'react';
import {NavBar} from 'antd-mobile';
import {Switch,Route}from 'react-router-dom';
import LaobanInfo from '../laoban-info/laobanInfo';
import DashenInfo from '../dashen-Info/dashenInfo';
class Main extends Component{
  render (){
    return (
      <div>
        <NavBar> 保 存 </NavBar>
        <Switch>
          <Route path="/dashenIngo" component={DashenInfo}/>
          <Route path="/laobanIngo" component={LaobanInfo}/>
        </Switch>
      </div>
    )
  }
}
export default Main;