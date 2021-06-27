import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { API } from '../../utils/axios'
import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

const Login = () => {
  const [inputText, setInputText] = useState({
    id: '',
    name: ''
  })
  const history = useHistory()

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(e.target.name.value, e.target.id.value)

    const id = e.target.id.value
    const name = e.target.name.value

    if (inputText.id.trim() && inputText.name.trim()) {
      // send Axios POST request here
      try {
        const res = await API.post('/login', {
          name: name,
          apiKey: id
        })
        const { name: username, token } = res.data.token
        // API.defaults.headers.common['Authorization'] = `Bearer ${token}`

        sessionStorage.setItem('token', token)
        sessionStorage.setItem('user', username)

        token && history.push('/')
        console.log('pushed')
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Please fill the id and name fields')
    }
  }

  useEffect(() => {
    console.log('login mounted')
    return () => console.log('login unmount')
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Card style={{ width: 300, height: 300 }}>
        <CardContent>
          <div className='login-container'>
            <div style={{ textAlign: 'left', width: '85%', marginBottom: 20 }}>
              Login
            </div>
            <form className='login-form-container' onSubmit={handleSubmit}>
              <input
                className='login-input-text'
                name='id'
                placeholder='Id'
                value={inputText.id}
                onChange={onChange}
              />
              <input
                className='login-input-text'
                name='name'
                placeholder='Name'
                value={inputText.name}
                onChange={onChange}
              />
              <div>
                <button className='login-input-submit'>Login</button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
