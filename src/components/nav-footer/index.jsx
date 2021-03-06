import React, {Component} from 'react';
import {TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
const Item = TabBar.Item
class NavFooter extends Component{
  static propTypes = {
    navList:PropTypes.object.isRequired
  }
  render(){
    const {pathanme}= this.props.location;
    const navList = this.props.navList.filter(nav => !nav.hide);
    return(
      <TabBar>
        {
          navList.map((item,index)=>(<Item
            key = {index}
            title = {item.text}
            icon={{uri: require(`./images/${item.icon}.png`)}}
            selectedIcon={{uri: require(`./images/${item.icon}-selected.png`)}}
            selected={pathname === item.path}
            onPress={() => this.props.history.replace(item.path)}
          />))
        }
      </TabBar>
    )
  }
}
export default NavFooter