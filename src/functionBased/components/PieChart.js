import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

const CompletedPieChart = props => {
  console.log('PieChart props', props.dashboardData)

  const tasksCompleted = props.dashboardData?.tasksCompleted
  const totalTasks = props.dashboardData?.totalTasks

  const dataMock = [
    { title: 'Completed', value: tasksCompleted, color: '#5285EC' },
    {
      title: 'Incomplete',
      value: totalTasks - tasksCompleted,
      color: '#E8ECEC'
    }
  ]

  return (
    <PieChart
      reveal
      data={dataMock}
      label={({ dataEntry }) =>
        dataEntry.title === 'Completed' ? dataEntry.title : null
      }
      labelStyle={() => ({
        fontSize: '7px'
      })}
      radius={38}
      labelPosition={85}
    />
  )
}

export default CompletedPieChart
