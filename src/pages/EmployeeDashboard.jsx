import React from 'react'
import SideBar from '../components/EmployeeDashboard/SideBar'
import NavBar from '../components/dashboard/NavBar'
import { Outlet } from 'react-router-dom'

const EmployeeDashboard = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <div className='flex-1 ml-64 bg-gray-100 h-screen'>
        <NavBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default EmployeeDashboard;