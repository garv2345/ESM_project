import React from 'react'
import TaskCard from './TaskCard'
import Header from '../Header'
import TaskList from './TaskList'

const EmployeeDashboard = () => {
    return (
        <div>
            <Header />
            <TaskCard />
            <TaskList />
        </div>
    )
}

export default EmployeeDashboard