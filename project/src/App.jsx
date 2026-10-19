import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/Employee/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/Admin/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'
import { setLocalStorage } from './Utils/LocalStorage'


const App = () => {
  const authData = useContext(AuthContext);
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  useEffect(() => {
    setLocalStorage();
    if (authData) {
      const loggedInUser = localStorage.getItem('loggedInUser')
    }
  }, [authData])

  const userHandler = (email, password) => {
    if (email == 'admin@mail.com' && password == '123') {
      setUser('Admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'Admin' }));
    }
    else if (authData) {
      const employee = authData.employees.find((e) => {
        return (e.email == email && e.pass == password);
      })
      if (employee) {
        setUser('Employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'Employee' }));

      }
    }
    else {
      alert('INVALID CREDENTIALS')
    }
  }

  return (
    <>
      {!user ? <Login userHandler={userHandler} /> : ''}
      {user == 'Admin' && <AdminDashboard />}
      {user == 'Employee' && <EmployeeDashboard data={loggedInUserData} />}

    </>
  )
}

export default App