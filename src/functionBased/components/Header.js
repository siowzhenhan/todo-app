import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Skeleton } from 'antd'

import TasksCompleted from './TasksCompleted'
import LatestTasks from './LatestTasks'
import CompletedPieChart from './PieChart'

const Header = props => {
  const [todos, setTodos] = useState(props.todos)

  console.log('Header props', props.dashboardData)

  useEffect(() => {
    setTodos(props.todos)
  }, [props.todos])

  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em'
  }

  const cardStyle = {
    borderRadius: 15
  }

  return (
    <header style={headerStyle}>
      {/* div for equally spaced cards */}
      <div className='header-div'>
        <Card style={cardStyle} className='header-card'>
          {props.loading ? (
            <Skeleton />
          ) : (
            <CardContent>
              <h5>Tasks Completed</h5>
              <div className='inner-div'>
                <TasksCompleted
                  dashboardData={props.dashboardData}
                  todos={todos}
                />
              </div>
            </CardContent>
          )}
        </Card>
        <Card style={cardStyle} className='header-card'>
          {props.loading ? (
            <Skeleton />
          ) : (
            <CardContent>
              <h5>Latest Created Tasks</h5>
              <div className='inner-div'>
                <LatestTasks
                  dashboardData={props.dashboardData}
                  todos={todos}
                />
              </div>
            </CardContent>
          )}
        </Card>
        <Card style={cardStyle} className='header-card'>
          {props.loading ? (
            <Skeleton />
          ) : (
            <CardContent>
              <CompletedPieChart
                dashboardData={props.dashboardData}
                todos={todos}
              />
            </CardContent>
          )}
        </Card>
      </div>
    </header>
  )
}

export default Header
