/**
 * Created by 29671 on 2018/10/31.
 */
import React,{Component}from 'react'
import './index.less';
import logo from './logo.png';
class Logo extends Component {
  render(){
    return (
      <div className = "logo-container">
        <img className = "logo-img" src = {logo} alt = "logo"/>
      </div>
    )
  }
}
export default Logo ;