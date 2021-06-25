import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './functionBased/App.css'

// component file
import TodoContainer from './functionBased/components/TodoContainer'

ReactDOM.render(
  // strict mode to check warning messages
  <React.StrictMode>
    <Router basement={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// Notes:
// Lifting state up - storing state data in closest parent component
