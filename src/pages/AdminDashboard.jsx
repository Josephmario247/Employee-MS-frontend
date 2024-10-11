import React from 'react'
import { useAuth } from '../context/AuthContext'
import AdminSideBar from '../components/dashboard/AdminSideBar'
import NavBar from '../components/dashboard/NavBar'
// import AdminSummary from '../components/dashboard/AdminSummary'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  const {user} = useAuth()
  
  return (
    <div className='flex'>
      <AdminSideBar/>
      <div className='flex-1 ml-64 bg-gray-100 h-screen'>
        <NavBar/>
        <Outlet/>
      </div>
    </div>
  )

}
export default AdminDashboard;