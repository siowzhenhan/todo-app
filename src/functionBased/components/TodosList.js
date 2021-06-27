import React, { useState } from 'react'
import Card from '@material-ui/core/Card'

import TodoItem from './TodoItem'

const TodosList = ({ todos, handleChangeProps, deleteTodoProps, editTodo }) => {
  const [inputText, setInputText] = useState('')

  const onChange = e => {
    setInputText(e.target.value)
    handleChangeProps(e.target.value)
  }

  return (
    <Card>
      <div style={{ padding: 20 }}>
        <input
          className='search-input'
          placeholder='Search tasks...'
          value={inputText}
          onChange={onChange}
          name='search'
        />

        <ul className='reversed-order'>
          {todos.map(todo => {
            return (
              <TodoItem
                key={todo._id}
                todo={todo}
                handleChangeProps={handleChangeProps}
                deleteTodoProps={deleteTodoProps}
                editTodo={editTodo}
              />
            )
          })}
        </ul>
      </div>
    </Card>
  )
}

export default TodosList
