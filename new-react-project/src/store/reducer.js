import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';

// defaultState的作用是, 一开始store传给reducer的值是空, 所以当第一次执行reducer的时候, 要给state赋一个默认值
const defaultState = {
    inputValue: '',
    list: []
};

// reducer 可以接收state, 但绝不能修改state, 所以要拷贝state
export default (state = defaultState, action) => {
    // state指的是上一次存储的数据, action是用户传过来的话
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state)); //深拷贝
        newState.inputValue = action.value;
        return newState; //return给了store
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    // state存放的是整个仓库里存储的数据
    return state;
}