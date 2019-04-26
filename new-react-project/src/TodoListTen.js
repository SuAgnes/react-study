import React from 'react';
import { connect } from 'react-redux';
import { getInputValue, getAddItemAction, getDeleteItem } from './storeReactRedux/actionCreators';

// class TodoListTen extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" name="" id="" value={this.props.inputValue} onChange={this.props.changeInputValue}/>
//         <button onClick={this.props.handleClick}>提交</button>
//         <ul>
//           {
//             this.props.list.map((item, index) => {
//               return (
//                 // <li key={item} onClick={(index) => this.props.handleDelete}>{item}</li>
//                 <li key={item}>{item}</li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

// 改良-无状态组件(没有任何生命周期函数, 同时也不会生成真正的组件的实例)

const TodoListTen = (props) => {
  const { inputValue, changeInputValue, handleClick, list, handleDelete } = props;
  return (
    <div>
      <input type="text" name="" id="" value={inputValue} onChange={changeInputValue}/>
      <button onClick={handleClick}>提交</button>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={item} onClick={() => {handleDelete(index)}}>{item}</li>
              // <li key={item}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
// 把store里的数据映射给这个组件, 变成组件的props, state指的就是store里的数据
// 例如, store里的inputValue会映射到props的inputValue中去↓↓
// this.state.xxx → this.props.xxx
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch, 把store.dispatch挂载到props上
const mapDispatchToProps = (dispatch) => {
  // 参数dispatch方法指的就是store.dispatch
  return {
    changeInputValue(e) {
      // 这个函数可以调用store.dispatch方法
      const value = e.target.value;
      const action = getInputValue(value);
      dispatch(action);
    },
    handleClick() {
      const action = getAddItemAction();
      dispatch(action);
    },
    handleDelete(index) {
      const action = getDeleteItem(index);
      dispatch(action);
    }
  }
}

// 让TodoListTen这个组件和store用connect方法进行连接
// 连接的规则在mapStateToProps中
// 不需要在文件内再引用store, connect会自动帮我们做连接
// 1) 把store里的数据和组件里的数据的关系在mapStateToProps里列清楚
// 2) 把组件里props如何对store里的数据做修改以及store里的dispatch方法做关联(通过mapDispatchToProps)
// 数据一旦发生改变, 组件会跟着变(因为connect做了连接), 不需要store.subscribe()再去做订阅
export default connect(mapStateToProps, mapDispatchToProps)(TodoListTen);

// 改良后的TodoListTen是一个UI组件(无状态组件), 当用connect把UI组件和一些数据业务相结合的时候, connect返回的内容(也可以说是执行的结果)就变成一个容器组件了