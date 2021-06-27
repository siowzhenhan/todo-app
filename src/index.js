import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './functionBased/App.css'

// component file
import TodoContainer from './functionBased/components/TodoContainer'
import Login from './functionBased/pages/Login'

ReactDOM.render(
  // strict mode to check warning messages
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Route path='/login' component={Login} />
      <Route path='/' component={TodoContainer} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// Notes:
// Lifting state up - storing state data in closest parent component
