import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import EmployeeDashboard from './pages/EmployeeDashboard'
import PrivateRoutes from './utils/PrivateRoutes'
import RoleBaseRoute from './utils/RoleBaseRoute'
import AdminSummary from './components/dashboard/AdminSummary'
import DepartmentList from './components/department/DepartmentList'
import AddDepartment from './components/department/AddDepartment'
import EditDepartment from './components/department/EditDepartment'
import List from './components/employee/List'
import Add from './components/employee/Add'
import View from './components/employee/View'
import Edit from './components/employee/Edit'
import AddSalary from './components/salary/AddSalary'
import ViewSalary from './components/salary/ViewSalary'
import AdminDashboard from './pages/AdminDashboard'
import SummaryCard from './components/EmployeeDashboard/Summary'
import LeaveList from './components/leave/List'
import AddLeave from './components/leave/Add'
import Setting from './components/EmployeeDashboard/Setting'
import Table from './components/leave/Table'
import LeaveDetail from './components/leave/Detail'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/admin-dashboard' />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoute requiredRole={["admin"]}>
              <AdminDashboard />
            </RoleBaseRoute>
          </PrivateRoutes>

        }>
          <Route index element={<AdminSummary />}></Route>
          {/*admin Department Dashboard */}
          <Route path='/admin-dashboard/departments' element={<DepartmentList />}></Route>
          <Route path='/admin-dashboard/add-department' element={<AddDepartment />}></Route>
          <Route path='/admin-dashboard/department/:id' element={<EditDepartment />}></Route>
          {/* admin Employee Dashboard */}
          <Route path='/admin-dashboard/employees' element={<List />}></Route>
          <Route path='/admin-dashboard/add-employee' element={<Add />}></Route>
          <Route path='/admin-dashboard/employees/:id' element={<View />}></Route>
          <Route path='/admin-dashboard/employees/edit/:id' element={<Edit />}></Route>
          <Route path='/admin-dashboard/employees/salary/:id' element={<ViewSalary />}></Route>
          <Route path='/admin-dashboard/employees/leaves/:id' element={<LeaveList />}></Route>

          <Route path='/admin-dashboard/salary/add' element={<AddSalary />}></Route>
          <Route path='/admin-dashboard/leaves' element={<Table />}></Route>
          <Route path='/admin-dashboard/leaves/:id' element={<LeaveDetail />}></Route>
          <Route path='/admin-dashboard/setting' element={<Setting />}></Route>

        </Route>
        {/* employee Dashboard  */}
        <Route path="/employee-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoute requiredRole={['admin', 'employee']}>
              <EmployeeDashboard />
            </RoleBaseRoute>
          </PrivateRoutes>}>
          <Route index element={<SummaryCard />}></Route>
          <Route path='/employee-dashboard/profile/:id' element={<View />}></Route>
          <Route path='/employee-dashboard/leaves/:id' element={<LeaveList />}></Route>
          <Route path='/employee-dashboard/add-leave' element={<AddLeave />}></Route>
          <Route path='/employee-dashboard/salary/:id' element={<ViewSalary />}></Route>
          <Route path='/employee-dashboard/setting' element={<Setting/>}></Route>
       
          </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
