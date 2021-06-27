import React from 'react'

const TasksCompleted = props => {
  const fractionTop = {
    fontSize: '3em',
    fontWeight: 'bold',
    color: '#5285EC'
  }

  const fractionBottom = {
    fontSize: '1em',
    fontWeight: 'bold'
  }

  return (
    // fraction component
    <>
      <span style={fractionTop}>{props.dashboardData?.tasksCompleted}</span>
      <span style={fractionBottom}>/{props.dashboardData?.totalTasks}</span>
    </>
  )
}

export default TasksCompleted
