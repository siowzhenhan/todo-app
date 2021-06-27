import React from 'react'

const LatestTasks = props => {
  console.log('LatestTasks props', props.dashboardData?.latestTasks)

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through'
  }

  return (
    <div className='latest-tasks'>
      <ul className='reversed-order'>
        {props.dashboardData?.latestTasks
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
          .map(task => {
            return (
              <li key={task._id}>
                <span style={task.completed ? completedStyle : null}>
                  {task.name}
                </span>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default LatestTasks
