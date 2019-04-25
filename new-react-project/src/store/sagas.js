import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from "./actionTypesSaga";
import axios from 'axios';
import { initListAction } from './actionCreatorsSaga';

// 8) 方法为一个generator函数, 它会去取数据, 取完数据把数据结果再创建一个action派发给store
// function* getInitList() {
//   //可以写异步任务
//   // axios.get('/list.json').then((res) => {
//   //   const action = initListAction(res.data);
//   //   put(action);
//   //   // 用put代替store.dispatch()
//   // })

//   // generator写法(用这种写法, 不用上面promise的)
//   const res = yield axios.get('./list.json'); // 等待ajax结果获取完毕后把结果直接存到res里
//   const action = initListAction(res.data);

//   // 9) action给到store, store再传给reducer, 之后正常redux流程
//   yield put(action);
// }

// 改良generator: 数据获取失败情况
function* getInitList() {
  try {
    const res = yield axios.get('./list.json'); // 等待ajax结果获取完毕后把结果直接存到res里
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log('list.json 网络请求失败');
  }
}
  


// 6) 导出一个generator函数
function* mySaga() {
  // 7) 写逻辑: 当接收收到action类型为**类型时, 执行**方法
    // takeEvery 捕捉每一个
    // 以前action只能在reducer里接收, 用了saga之后, 可以通过takeEvery去捕获到每一次派发出来的action

    //声明: 如果接收到类型是GET_INIT_LIST的, 就执行getInitList();
    yield takeEvery( GET_INIT_LIST, getInitList)
    // yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
  
export default mySaga;