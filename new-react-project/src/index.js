import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
// 把app组件挂载到id为'root'的节点上
// <App /> ← jsx语法 如果用到了就一定要在对应的文件引入import React from 'react';

// PWA progressive web application
// 第一次访问需要联网,第二次即使断网还可以访问之前网页的内容↓↓
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();

// 第一部分 - 基础jsx语法
// import TodoList from './TodoList';
// ReactDOM.render(<TodoList />, document.getElementById('root'));

// // 第二部分 - 组件拆分 + 组件传参
// import TodoListTwo from './TodoListTwo';
// ReactDOM.render(<TodoListTwo />, document.getElementById('root'));

// // 第三部分 - 生命周期
// import TodoListThree from './TodoListThree';
// ReactDOM.render(<TodoListThree />, document.getElementById('root'));

// // 第四部分 - 过度动画 CSSTransition
// import TodoListFour from './TodoListFour';
// ReactDOM.render(<TodoListFour />, document.getElementById('root'));

// // 第五部分 - 过度动画-多个动画 TransitionGroup
// import TodoListFive from './TodoListFive';
// ReactDOM.render(<TodoListFive />, document.getElementById('root'));

// // 第六部分 - antd + redux
// import TodoListSix from './TodoListSix';
// ReactDOM.render(<TodoListSix />, document.getElementById('root'));

// // 第七部分 - 拆分UI组件(傻瓜组件)和容器组件(聪明组件)
// import TodoListSeven from './TodoListSeven';
// ReactDOM.render(<TodoListSeven />, document.getElementById('root'));

// // 第八部分 - Redux中发送异步请求获取数据 Redux-thunk
// import TodoListEight from './TodoListEight';
// ReactDOM.render(<TodoListEight />, document.getElementById('root'));

// 第九部分 - Redux-saga
// import TodoListNine from './TodoListNine';
// ReactDOM.render(<TodoListNine />, document.getElementById('root'));

// 第十部分 - React-redux
import TodoListTen from './TodoListTen';
import { Provider } from 'react-redux';
import store from './storeReactRedux';

const App = (
  // Provider: 提供者, 连接store, 之后Provider内所有的组件都有能力获取到store里面的内容
  <Provider store={store}>
    <TodoListTen />
  </Provider>
)
ReactDOM.render(App, document.getElementById('root'));