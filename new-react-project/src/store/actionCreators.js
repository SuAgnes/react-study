import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})


// Redux中间件指的是Action和Store之间, 也就是Redux的中间件: 之前说在Redux中Action只能是一个对象, 所以Action是一个对象直接派发给了Store
// 当我们使用了redux-thunk后, Action可以是函数了(Action通过dispatch方法被传递给Store, 所以Action和Store中间件指的就是对dispatch方法的封装, 或者说是对dispatch的升级)
// 最原始的dispatch方法, 接收到一个对象后, 会把对象传递给store; 当对dispatch方法做了一个升级后, 当调用dispatch方法时, 给dispatch方法传递的是一个对象的话, 那么dispatch方法就会把对象直接传给store, 和原始的dispatch方法没有区别
// 假设传给dispatch方法的是一个函数, 此时dispatch方法会把函数执行, 执行完毕后需要调用store时再去调用store, 所以说, 升级后的dispatch会根据参数的不同执行不同的事情
// redux-thunk是把异步操作放到action中去操作, redux-saga的设计思想是单独把异步逻辑拆分出来, 放到另一个文件中去管理
export const getTodoList = () => {
  // 正常来说, 应该return一个对象, 但是使用redux-thunk后, 可以return函数了, 函数里可以做异步操作
  // 当生成一个内容是函数的action时, 这个函数可以接收到store的dispatch方法
  // 只有使用了thunk 返回值才可以是函数, 不然必须是一个对象
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
      const action = initListAction(res.data);
      dispatch(action);
    })
  }
}