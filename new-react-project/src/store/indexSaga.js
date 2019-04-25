import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
// 1) 引入createSagaMiddleware
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

// 2) 创建sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose;
// 3) 通过applyMiddleware去使用中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
// 4) 创建sagas.js文件, 并引入, 然后通过sagaMiddleware去运行它 → 第六步在sagas.js里
sagaMiddleware.run(todoSagas);
export default store;
