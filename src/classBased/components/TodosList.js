import React from 'react'

import TodoItem from './TodoItem'

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
              editTodo={this.props.editTodo}
            />
          )
        })}
      </ul>
    )
  }
}

export default TodosList
