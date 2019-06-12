import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constant/index'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    default:
      return
  }
}

class VisibleTodoList extends Component {

  handleToggleTodo = (id) => {
    this.props.toggleTodo(id);
  }

  renderTodo = () => {
    const {todos} = this.props;
    return todos.map((todo) => {
      return (
        <li
          key={todo.id}
          onClick={() => this.handleToggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.renderTodo()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
