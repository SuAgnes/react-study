// 第二节 组件传参
import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';
class TodoListTwo extends Component {
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
  render() {
    // 当组件的state或者props发生改变的时候,render 函数就会重新执行, 所以页面才会跟着数据重新改动
    // 当父组件的render函数被运行时, 它的子组件的render都将被重新运行一次
    console.log('render被执行啦~~');
      return (
        <Fragment>
          <div>
            {/* 在label加for, react会认为for是循环的for, 所以要改成htmlFor */}
            <label htmlFor="insertArea">输入内容</label>
            <input
            // 不单独用class是怕react把class识别成一个类, 用className代替
              className="input-css"
              id="insertArea"
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              ref={(inputRef) => {this.inputRef=inputRef}}
              />
            <button onClick={this.handleBtnClick}>提交</button>
          </div>
          <ul
          ref={(url) => {this.ulRef = url}}
          >
            {this.getTodoItem()}
          </ul>
       </Fragment>
      );
  }
  handleInputChange(e) {
    // 不这样写会因为setState异步出现一些问题↓↓
    // const value = e.target.value;
    // ref写法
    const value = this.inputRef.value;
    // this.setState({
    //   inputValue: e.target.value
    // })
    // 新版react, setState里可以接收函数而不是对象了
    this.setState(() => ({
        inputValue: value
    }))
  }
  handleBtnClick() {
    // PrevState: 修改数据之前的那次数据
    this.setState((PrevState) => ({
      inputValue: '',
      // list: [...this.state.list, this.state.inputValue], 等价于↓↓
      list: [...PrevState.list, PrevState.inputValue],
    }), () => {
      console.log(`这里是setState异步已经执行完毕后执行的函数,ul的数量为${this.ulRef.querySelectorAll('div').length}个`);
      // 有时ref和setState合用的时候会出现一些坑, DOM的获取并不及时, 原因就是因为setState是异步的
      // 如果希望页面更新后再去获取DOM, 一定要把获取DOM的语法放在setState的第二个参数的函数里
    })
    // console.log(`${this.ulRef.querySelectorAll('div').length}`);
    // 因为setState是异步, 所以在后面如果使用console.log()的话, 有可能先于setState执行, 所以如果在这里执行console.log的话,打印出的length总会比实际少1个
    // 解决; setState的第二个参数是当异步执行好了之后再去执行
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
            key={item}
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
      )
    })
  }
}
export default TodoListTwo;