import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
// 把app组件挂载到id为'root'的节点上
// <App /> ← jsx语法 如果用到了就一定要在对应的文件引入import React from 'react';

//PWA progressive web application
//第一次访问需要联网,第二次即使断网还可以访问之前网页的内容↓↓
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();

// 第一部分 - 基础jsx语法
// import TodoList from './TodoList';
// ReactDOM.render(<TodoList />, document.getElementById('root'));

// // 第二部分 - 组件拆分
// import TodoListTwo from './TodoListTwo';
// ReactDOM.render(<TodoListTwo />, document.getElementById('root'));

// 第三部分 - 生命周期
import TodoListThree from './TodoListThree';
ReactDOM.render(<TodoListThree />, document.getElementById('root'));