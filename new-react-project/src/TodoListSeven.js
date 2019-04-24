import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';
import TodoListUI from './todoListUI';

class TodoListSeven extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemClick={this.handleItemClick}
      ></TodoListUI>
    );
  }
  handleInputChange(e) {
    const value = e.target.value;
    const action = getInputChangeAction(value);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action)
  }
  handleItemClick(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoListSeven;