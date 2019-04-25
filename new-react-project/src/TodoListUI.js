import React, { Fragment } from 'react';
import { Input, Button, List, Typography } from 'antd';
// 当一个组件只有render函数的时候, 我们就可以用无状态组件来定义这个组件, 然后替换掉下面那个普通的组件
// 无状态组件的性能更高, 因为无状态组件就是一个函数, 但普通的组件是js中的类, 类中还会有一些生命周期函数, 所以执行的东西远比一个函数执行的多, 性能肯定比不过一个函数
const TodoListUI = (props) => {
  // 在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。
  // 在组件的 render 方法中返回 null 并不会影响组件的生命周期。0.
  // return null;
    return (
        <Fragment>
          <div>
            <Input
              placeholder="todo info"
              style={{width: '300px'}}
              value={props.inputValue}
              onChange={props.handleInputChange}
              ></Input>
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
          </div>
          <List
            style={{width: '300px'}}
            bordered
            dataSource={props.list}
            // 给父组件传参
            renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemClick(index)}}><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
          />
      </Fragment>
    )
}

// class TodoListUI extends Component {
//     render() {
//         return (
//             <Fragment>
//               <div>
//                 <Input
//                   placeholder="todo info"
//                   style={{width: '300px'}}
//                   value={this.props.inputValue}
//                   onChange={this.props.handleInputChange}
//                   ></Input>
//                 <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//               </div>
//               <List
//                 style={{width: '300px'}}
//                 bordered
//                 dataSource={this.props.list}
//                 // 给父组件传参
//                 renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemClick(index)}}><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
//               />
//           </Fragment>
//         );
//     }
// }

export default TodoListUI;