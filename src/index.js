import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './functionBased/App.css'

// component file
import TodoContainer from './functionBased/components/TodoContainer'
import Login from './functionBased/pages/Login'

ReactDOM.render(
  // strict mode to check warning messages
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Route path='/login' component={Login}>
        {sessionStorage.getItem('token') ? <Redirect to='/' /> : <Login />}
      </Route>
      <Route path='/'>
        {console.log('sessionStorage token', sessionStorage.getItem('token'))}
        {!sessionStorage.getItem('token') ? (
          <Redirect to='/login' />
        ) : (
          <TodoContainer />
        )}
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// Notes:
// Lifting state up - storing state data in closest parent component
