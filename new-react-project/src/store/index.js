import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';

// const store = createStore(reducer,
//     applyMiddleware(thunk)
//     // applyMiddleware([thunk, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]),
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
// 如果window的下面有window.__REDUX_DEVTOOLS_EXTENSION__()这个方法, 那么就使用这个工具↑↑
// );

// 改良 既支持 window.__REDUX_DEVTOOLS_EXTENSION__ 又支持 redux-thunk
// 对自动化测试友好
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

export default store;

// redux原则
// 1. store是唯一的
// 2. 只有store能够改变自己的内容: reducer只是拿到数据后生成新数据, 然后把新数据返回给了store, store拿到新数据后更新自己的数据. 这也是reducer不能直接修改store中数据的原因(在reducer中处理数据时需要先拷贝出一份)
// 3. Reducer必须是纯函数: 纯函数是指给定固定的输入, 就一定会有固定的输出, 且不会有任何副作用; 一旦一个函数有一个settimeout或者ajax或者new Date相关内容的时候, 它就不是一个纯函数, 所以Reducer里不可以有异步的操作
   // 副作用: 例如对参数的修改就是副作用, 这个时候reducer也就不是一个纯函数了