// 第一节
import React, { Component, Fragment } from 'react';
// Fragment 占位符 替代最外层div, 这样就可以不显示最外层的div了--react16
import './style.css'
class TodoList extends Component {
  constructor(props) {
    //constructor 是优于其他函数最先被执行的函数
    super(props);
    //组件状态
    this.state = {
      inputValue: 'Hi',
      list: []
    }
  }
  render() {
      return (
        <Fragment>
          {/* render函数必须整体被包含在一个大的DIV中 */}
          {
            // 单行注释
          }
          <div>
          {/* 在label加for, react会认为for是循环的for, 所以要改成htmlFor */}
            <label htmlFor="insertArea">输入内容</label>
            <input
            // 不单独用class是怕react把class识别成一个类, 用className代替
              className="input-css"
              id="insertArea"
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange.bind(this)}
              />
            <button onClick={this.handleBtnClick.bind(this)}>提交</button>
          </div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={this.handleItemDelete.bind(this, index)}
                    //转义html标签↓↓
                    dangerouslySetInnerHTML={{__html: item}}//里面的花括号表示js对象
                  >
                    {/* {item} */}
                  </li>
  
                )
              })
            }
          </ul>
       </Fragment>
      );
  }
  handleInputChange(e) {
    console.log(this); // bind(this)前是undefined
    // this.state.inputValue = e.target.value; 没响应
    // 如果想改变state里的数据,必须调用setState({})
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue],
    })
  }
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
    // 不要这么写↓↓
    // this.state.list.splice(index, 1); 
    // this.setState({
    //   list: this.state.list
    // })
    // 因为react里有一个immutable概念: state不允许我们做任何改变, 如果改了, 对后续性能优化有影响
  }
}
export default TodoList;