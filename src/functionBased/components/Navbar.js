import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { useHistory } from 'react-router-dom'

const Navbar = () => {
  const user = sessionStorage.getItem('user')
  const history = useHistory()

  return (
    <nav className='navBar'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar atl={user} style={{ margin: 10 }} />
        <span style={{ color: '#6D8187' }}>{user}</span>
      </div>

      <button
        style={{
          lineHeight: '1.5rem',
          width: '5rem',
          margin: 10,
          borderRadius: 10,
          border: 'none',
          background: 'transparent',
          color: '#6D8187',
          cursor: 'pointer'
        }}
        onClick={() => {
          sessionStorage.clear()
          history.push('/login')
        }}
      >
        Logout
      </button>
    </nav>
  )
}

export default Navbar
