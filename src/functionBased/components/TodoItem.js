import React, { useState, useEffect } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import styles from './TodoItem.module.css'

const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleEditedDone = e => {
    if (e.key === 'Enter') {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through'
  }

  const { id, title, completed } = props.todo

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = 'none'
  } else {
    editMode.display = 'none'
  }

  useEffect(() => {
    return () => {
      console.log('Cleaning up...')
    }
  }, [])

  return (
    <li className={styles.item}>
      {/* Input is Controlled (only listens to the state, not DOM) */}
      <div style={viewMode}>
        <input
          className={styles.checkbox}
          type='checkbox'
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />{' '}
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{ fontSize: 16 }} />
        </button>{' '}
        <button onClick={handleEditing}>
          <FaEdit style={{ fontSize: 16 }} />
        </button>{' '}
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type='text'
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={e => {
          props.editTodo(e.target.value, id)
        }}
        onKeyDown={handleEditedDone}
      />
    </li>
  )
}

export default TodoItem
