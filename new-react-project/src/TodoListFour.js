import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'; //动画组件
import './styleCssTransition.css'
class TodoListFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  render() {
    return (
      <Fragment>
        {/* <div className={this.state.show ? 'show' : 'hide'}>hello</div> */}
        <CSSTransition
          // 感知动画状态↓
          in={this.state.show}
          // 动画执行时长
          timeout={1000}
          // 注意class名后面有个s
          classNames='fade'
          // 自带功能(还有很多)
          unmountOnExit
          // 钩子函数-入场动画结束后 参数el指的就是div
          onEntered={(el) => {el.style.color = 'blue'}}
          // 元素第一次展示也需要动画效果
          appear={true}
        >
        {/* CSSTransition会帮我们自动增加一些class名的增加移除 */}
          <div>Hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    );
  }

  handleToggle() {
    this.setState(() => ({
      show: this.state.show ? false : true
    }))
  }
}

export default TodoListFour;