import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: ''
  })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoItemProps(inputText.title)
      setInputText({
        title: ''
      })
    } else {
      alert('Please specify to-do item')
    }
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input
        className='input-text'
        placeholder='Add a task...'
        value={inputText.title}
        name='title'
        onChange={onChange}
      />
      <button className='input-submit'>
        <FaPlus style={{ color: 'darkcyan', fontSize: 20, marginTop: 2 }} />
      </button>
    </form>
  )
}

export default InputTodo
