import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';
import store from './store';
// 第一次改良 建立actionTypes.js, 统一常量, 预防因拼写引发的bug
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';

// 第二次改良 将action创建放到actionCreators进行统一管理, 优点: 提高代码可维护性, 对自动化测试也更方便
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';
class TodoListSix extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // 5) 监听store的变化
    // 订阅store, 只要store发生改变, subscribe里的函数就会被自动执行
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <Fragment>
        <div>
          <Input
            placeholder="todo info"
            style={{width: '300px'}}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ></Input>
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemClick.bind(this, index)}><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
        />
      </Fragment>
    );
  }
  handleInputChange(e) {
    // 1) 创建action
    // const action = {
    //   // type: 'change_input_value',
    //   // 改良版本1
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }

    // 改良版本2
    const action = getInputChangeAction(e.target.value);
    // 2) 传给store
    store.dispatch(action);
    // 3) store如果接收到了action, 会自动把之前的数据和action传给reducer (这步store帮我们做了)
    // 4) reducer拿到之前的数据和当前操作的信息, 然后对数据进行处理, 返回新的数据给store
  }
  handleStoreChange() {
    // 6) 当感知到store变化的时候, 调用store.getState()方法从store中重新取一次数据, 然后调用setState替换掉当前组件中的数据, 这样就会同步数据了
    this.setState(store.getState());
  }
  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM,
    // }
    const action = getAddItemAction();
    store.dispatch(action)
  }
  handleItemClick(index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoListSix;