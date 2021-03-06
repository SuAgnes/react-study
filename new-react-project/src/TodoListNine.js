import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/indexSaga';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreatorsSaga';
import TodoListUI from './TodoListUI';
class TodoListNine extends Component {
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
  componentDidMount() {
    // axios.get('/list.json').then((res) => {
    //   const action = initListAction(res.data);
    //   store.dispatch(action);
    // })
    const action = getInitList();
    store.dispatch(action);
    console.log(action);
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

export default TodoListNine;