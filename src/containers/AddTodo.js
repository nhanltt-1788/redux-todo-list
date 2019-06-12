import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

class AddTodo extends Component {
  handleSubmitForm = (e) => {
    let input = this.inputNode.value.trim();

    e.preventDefault()

    if(input === '') {
      return
    }

    this.props.dispatchSubmitForm(input);
    this.inputNode.value = '';
  }
  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input type="text" ref={node => {this.inputNode = node}} />
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSubmitForm: (text) => {
      dispatch(addTodo(text))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
