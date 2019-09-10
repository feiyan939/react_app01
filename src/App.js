import React, { Component } from 'react';
// import { Button, message } from 'antd';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './pages/logion/Login';
import Admin from './pages/admin/Admin';
/*
     应用的根组件
     BrowserRouter:路由器
     Route：路由  path：component：相当于key和value
     注意path的配置方式
     Switch:表示的是只匹配其中的一个
*/ 
export default class App extends Component{
    
    render(){
        return  (
            <BrowserRouter>
                <Switch>
                    <Route path='/Login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
            
        
    }
}