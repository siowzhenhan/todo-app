import React, { Component } from 'react'

class InputTodo extends Component {
  // to make input a controlled field (not rely on DOM)
  state = {
    title: ''
  }

  // event handler for input
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // form submission
  handleSubmit = e => {
    e.preventDefault() // prevents page refresh
    if (this.state.title.trim()) {
      this.props.addTodoItemProps(this.state.title)
      this.setState({
        title: ''
      }) // clears the input after submit
    } else {
      alert('Please give a name to the item')
    }
  }

  render() {
    return (
      <form className='form-container' onSubmit={this.handleSubmit}>
        <input
          className='input-text'
          type='text'
          placeholder='Add to-do...'
          value={this.state.title}
          name='title'
          onChange={this.onChange}
        />
        <button className='input-submit'>Submit</button>
      </form>
    )
  }
}

export default InputTodo
