import React, { useState, useEffect } from 'react'
import axios from 'axios'

import NoTask from './NoTask'
import Navbar from './Navbar'
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'

const TodoContainer = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [dashboard, setDashboard] = useState()
  const [filter, setFilter] = useState()
  const [token, setToken] = useState(sessionStorage.getItem('token'))

  // get initial tasks, and set to state
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://dev-dl.tdcx.com:3092/tasks`,
      headers: { Authorization: `Bearer ${token}` }
    }).then(fetch => {
      console.log('get all tasks', fetch.data.tasks)
      setTodos([...fetch.data.tasks])
      getDashboardData()
    })
  }, [token])

  useEffect(() => {
    console.log('Token reset')
    setToken(sessionStorage.getItem('token'))
  }, [sessionStorage.getItem('token')])

  const addTodoItem = title => {
    setLoading(true)
    getDashboardData()
    axios({
      method: 'post',
      url: 'https://dev-dl.tdcx.com:3092/tasks',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name: title
      }
    }).then(({ data, status }) => {
      setLoading(false)
      setTodos([...todos, data.task])
    })
  }

  function getDashboardData() {
    axios({
      method: 'get',
      url: 'https://dev-dl.tdcx.com:3092/dashboard',
      headers: { Authorization: `Bearer ${token}` }
    }).then(fetch => {
      console.log('dashboard fetch', fetch.data)
      setDashboard(fetch.data)
    })
  }

  // Remove this after refactoring all API calls
  useEffect(() => {
    console.log('current todos', todos)
  }, [todos])

  // delete req, filter out deleted item, then update state
  const delTodo = id => {
    getDashboardData()
    axios({
      method: 'delete',
      url: `https://dev-dl.tdcx.com:3092/tasks/${id}`,
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {
      const filter = todos.filter(todo => todo._id !== id)
      setTodos(filter)
    })
    getDashboardData()
  }

  // put request, filter out edited item, then add response back to state
  const editTodo = (object, id) => {
    getDashboardData()
    axios({
      method: 'put',
      url: `https://dev-dl.tdcx.com:3092/tasks/${id}`,
      headers: { Authorization: `Bearer ${token}` },
      data: { ...object }
    }).then(({ data }) => {
      const editedIndex = todos.findIndex(todo => todo._id === id)
      const temp = todos
      temp.splice(editedIndex, 1, data.task)
      setTodos([...temp])
    })
    getDashboardData()
  }

  const handleChange = text => {
    const filtered = todos.filter(todo => todo.name.includes(text))
    setFilter(filtered)
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <div
          className='inner-container'
          style={{ display: todos.length ? null : 'none' }}
        >
          <Header dashboardData={dashboard} loading={loading} todos={todos} />
          <InputTodo addTodoItemProps={addTodoItem} />
          <TodosList
            loading={loading}
            todos={filter || todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            editTodo={editTodo}
          />
        </div>
        <div
          className='inner-container'
          style={{
            display: todos.length ? 'none' : 'flex',
            justifyContent: 'center'
          }}
        >
          <NoTask addTodoItemProps={addTodoItem} />
        </div>
      </div>
    </>
  )
}

export default TodoContainer
