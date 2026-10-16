import React, { useState } from 'react'
import Header from '../Header'
import CreateTask from './CreateTask'
import AllTask from './AllTask'
const AdminDashboard = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState()
  return (
    <div>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard