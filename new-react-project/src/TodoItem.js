import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  // 当一个组件从父组件接收到参数的时候执行
  // 只要父组件的render函数被重新执行了, 子组件的这个生命周期函数就会被执行
  // 如果这个组件第一次存在于父组件中, 不会执行
  // 如果这个组件之前已经存在于父组件中, 才会被执行

              // Props即将更新的数据/state即将更新的数据
  shouldComponentUpdate(nextProps, nextState) {
    //此时不会跟随父组件重新渲染而渲染页面, 降低性能消耗(省略虚拟DOM比对过程)
    if(nextProps.content !== this.props.content) {
      // 原有key值改变时渲染, 参考diff算法
        return true;
    }else {
      // 子组件被渲染一次之后, 如果子组件需要更新, 那么强制要求不更新
      // 依旧会出现数据是因为diff算法, 让子组件重新渲染了
        return false;
    }
    // ↑↑ 这样写比直接return false可以避免组件做无谓的render操作
  }
  componentWillReceiveProps(nextProps) {
    //   console.log('child componentWillReceiveProps: 接收到父组件的时候执行');
    }
    //当这个组件即将从页面中剔除的时候, 自动执行
    componentWillUnmount() {
    //   console.log('child componentWillUnmount: 当这个组件即将从页面中剔除的时候执行');
    }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); 
  }
  render() {
    console.log('child 渲染');
    
    const { content, test } = this.props;
    return (
        <Fragment>
          {/* render里的JSX模板 → createElement → 变成虚拟DOM(JS对象) → 转化成真实DOM  */}
            <div onClick={this.handleClick}>{test}-{content}</div>
        </Fragment>
    );
    // return <div><span>Hi</span></div>
    // 等价于
    // return React.createElement('div', {}, React.createElement('span', {}, 'Hi')); //更偏向底层的react接口: 拿到JS对象,直接把对象变成虚拟DOM →  渲染为真实DOM
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    //子传父
    // this.props.deleteItem(this.props.index);
    deleteItem(index);
  }
}
// 默认值
// 类型检查发生在 defaultProps 赋值之后，所以类型检查也会应用在 defaultProps 上面。
TodoItem.defaultProps = {
  test: 'hello'
}

// 对TodoItem这个组件做属性的校验
// propTypes 只在开发模式下进行检查
TodoItem.propTypes = { //注意这个propTypes要小写
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  // index: PropTypes.any.isRequired, // 任意类型的数据
  // index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 组成内容可以是number类型或者是string类型
  // index: PropTypes.arrayOf(PropTypes.number, PropTypes.string), // 数组的组成内容可以是number类型或者是string类型
  index: PropTypes.number,
  test: PropTypes.string.isRequired //isRequired表示必须在父组件向子组件传值
}
export default TodoItem;  