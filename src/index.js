/*
    入口js

*/ 
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';//自定义的模块需要加点

// 将APP组件标签渲染到index页面的div上
ReactDOM.render(<App/> ,document.getElementById('root'));