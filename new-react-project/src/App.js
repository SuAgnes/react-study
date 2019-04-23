import React, { Component } from 'react';
// import './App.css';
// 入口index.js,index.js引入了app.js,app.js引入了app.css

class App extends Component {
  //定义了一个继承react下component的类
  render() { //返回什么展示什么
    return (
      // ↓↓jsx语法
      // jsx中如果一定要使用自己创建的组件,那么开头一定要大写
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
