import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
class TodoListThree extends Component {
  // 在组件即将被挂载到页面的时候自动执行
  componentWillMount() {
    // console.log('compontentWillMount: 在组件即将被挂载到页面的时候自动执行');
  }
  // 组件被挂载到页面之后, 自动执行
  componentDidMount() {
    // console.log('compontentWillMount: 组件被挂载到页面之后, 自动执行');
    // 一般放ajax请求
    axios.get('/api/todolist').then((res) => {
      let { data } = res;
      this.setState(() => ({
          list: [...data]
      }))
    }).catch((res) => {
      console.log('axios error!');
    })
  }
  // 组件被更新之前, 自动执行
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate: 组件被更新之前, 自动执行');
    return true;
    //如果return false, 证明组件不需要更新
  }
  // 组件被更新之前, 自动执行, 但是在shouldComponentUpdate之后执行
  // 如果shouldComponentUpdate返回true执行, 如果返回false就不执行
  componentWillUpdate(nextProps, nextState) {
    // console.log('componentWillUpdate: 组件被更新之前, 自动执行, 但是在shouldComponentUpdate之后执行');
  }
  // 组件更新完成后被执行
  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate: 组件被更新之前, 自动执行, 但是在shouldComponentUpdate和componentWillUpdate之后执行');
  }
  constructor(props) {
    //constructor 是优于其他函数最先被执行的函数
    super(props);
    this.state = {
      inputValue: 'Hi',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  // 所有生命周期函数都可以不存在, render必须得有
  // 因为我们的组件默认继承Component, React.Component组件里默认内置了所有的生命周期函数, 但唯独没有内置render函数的默认实现
  render() {
    console.log('parent 渲染');
    return (
      <Fragment>
          <div>
            <label htmlFor="insertArea">输入内容</label>
            <input
              id="insertArea"
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              />
            <button onClick={this.handleBtnClick}>提交</button>
          </div>
          <ul
          >
            {this.getTodoItem()}
          </ul>
       </Fragment>
    );
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
        inputValue: value
    }))
  }
  handleBtnClick() {
    // PrevState: 修改数据之前的那次数据
    this.setState((PrevState) => ({
      inputValue: '',
      list: [...PrevState.list, PrevState.inputValue],
    }))
  }
  handleItemDelete(index) {
    this.setState(() => {
      const list = [...this.state.list];
      list.splice(index, 1);
      return {list}
    })
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
          <TodoItem
            key={index}
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
      )
    })
  }
}


export default TodoListThree;