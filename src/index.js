/**
 * Created by 29671 on 2018/10/27.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Switch,Route}from'react-router-dom';
import {Provider}from 'react-redux'
import Login from './components/login';
import Register from './containers/register';
import Main from './components/main';
import store from './redux/store';
import './assets/less/index.less';
ReactDOM.render(
  (
    <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
  ),
  document.getElementById('root')
)
