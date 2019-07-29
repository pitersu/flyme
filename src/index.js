import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import store from "./store/"
import {HashRouter as Router,Route,Switch} from "react-router-dom"//配置路由
import {noLayoutRouteComponent} from "@router"
import routeEach from "@utils/routeEach";
const noLayoutRoute = routeEach(noLayoutRouteComponent)
ReactDOM.render(
  <Provider store={store}>
      <Router>
          <Switch>
          {
               noLayoutRoute
              }
            <Route path="/" component={App} />
             
          </Switch>
      </Router>
   
</Provider>
,
document.getElementById('root'));


