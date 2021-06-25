import React from 'react'
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {
  state = {
    editing: false
  }

  handleEditing = () => {
    this.setState({
      editing: true
    })
  }

  handleEditedDone = e => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false
      })
    }
  }

  componentWillUnmount() {
    console.log('Cleaning up...')
  }

  render() {
    // change style on completion
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through'
    }

    const { id, title, completed } = this.props.todo

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = 'none'
    } else {
      editMode.display = 'none'
    }

    return (
      <li className={styles.item}>
        {/* Input is Controlled (only listens to the state, not DOM) */}
        <div style={viewMode}>
          <input
            className={styles.checkbox}
            type='checkbox'
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />{' '}
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>{' '}
          <button onClick={this.handleEditing}>Edit</button>{' '}
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type='text'
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={e => {
            this.props.editTodo(e.target.value, id)
          }}
          onKeyDown={this.handleEditedDone}
        />
      </li>
    )
  }
}

// // TODO; Convert this to a function component
// const TodoItem = (props) => {
//   return <li>{props.todo.title}</li>
// }

export default TodoItem
