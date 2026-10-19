import React from 'react'
import TaskCard from './TaskCard'
import Header from '../Header'
import TaskList from './TaskList'

const EmployeeDashboard = ({data}) => {
    console.log(data)
    return (
        <div>
            <Header name={data.name} />
            <TaskCard taskNumber={data.taskNumbers} />
            <TaskList list={data.tasks}/>
        </div>
    )
}

export default EmployeeDashboard