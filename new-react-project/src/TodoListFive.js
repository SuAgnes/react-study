import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; //动画组件
import './styleCssTransition.css'
class TodoListFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  
  render() {
    return (
      <Fragment>
        {
          /* 在做多个DOM动画的时候,会使用CSSTransition配合TransitionGroup使用, TransitionGroup写在所有DOM组件的外部
          CSSTransition写在具体的元素外部, 对一个元素进行动画效果管理
          这样就可以实现多个元素组件切换的效果 */
        }
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  // 外层是TransitionGroup的时候 不需要in属性
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEntered={(el) => {el.style.color = 'blue'}}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }

  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default TodoListFour;