import React, { Component } from 'react';
import AuthRoute from "@components/AuthRoute"
import LayoutCom from "./layout"
import  {layoutRouteComponent} from "@router"
import {Switch,Route,Redirect} from "react-router-dom"
import routeEach from "@utils/routeEach";
const pageRoute = routeEach(layoutRouteComponent)
class App extends Component {
  render(){
    return(
      <div>
        <Switch>
          <LayoutCom> 
            <Redirect from="/"  to="/home"/>
           {
             pageRoute
             }
          </LayoutCom>
         
        </Switch>
      </div>
    )
  }
}
export default AuthRoute(App);


