import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import InputTodo from './InputTodo'

const NoTask = props => {
  return (
    <>
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          borderRadius: 15,
          width: 300,
          marginTop: 100
        }}
      >
        <CardContent>
          <span>You have no task.</span>
        </CardContent>
        <CardContent>
          <InputTodo addTodoItemProps={props.addTodoItemProps} />
        </CardContent>
      </Card>
    </>
  )
}

export default NoTask
