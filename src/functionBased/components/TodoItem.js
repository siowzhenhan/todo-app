import React, { useState, useEffect } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import styles from './TodoItem.module.css'

const TodoItem = props => {
  const { _id, name, completed } = props.todo
  const [editing, setEditing] = useState(false)
  const [inputText, setInputText] = useState(name)
  const [isCompleted, setIsCompleted] = useState(completed)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleEditedDone = e => {
    if (e.key === 'Enter') {
      setEditing(false)
      updateValue()
    }
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through'
  }

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

  const _onChange = e => {
    setInputText(e.target.value)
  }

  const updateValue = () => {
    const newObject = {
      name: inputText,
      completed: isCompleted
    }
    props.editTodo(newObject, _id)
  }

  const onCheck = () => {
    setIsCompleted(!isCompleted)
    const newObject = {
      name: inputText,
      completed: !isCompleted
    }
    props.editTodo(newObject, _id)
  }

  return (
    <li className={styles.item}>
      {/* Input is Controlled (only listens to the state, not DOM) */}
      <div style={viewMode}>
        <input
          className={styles.checkbox}
          type='checkbox'
          checked={isCompleted}
          onChange={onCheck}
        />
        <button onClick={() => props.deleteTodoProps(_id)}>
          <FaTrash style={{ fontSize: 16 }} />
        </button>
        <button onClick={handleEditing}>
          <FaEdit style={{ fontSize: 16 }} />
        </button>
        <span style={isCompleted ? completedStyle : null}>{inputText}</span>
      </div>
      <input
        type='text'
        className={styles.textInput}
        style={editMode}
        value={inputText}
        onSubmit={updateValue}
        onChange={_onChange}
        onKeyDown={e => {
          handleEditedDone(e)
        }}
      />
    </li>
  )
}

export default TodoItem
