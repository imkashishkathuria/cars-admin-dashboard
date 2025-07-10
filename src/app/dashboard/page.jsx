import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import FilterBar from '../components/FilterBar'
import DashboardTable from '../components/Dashboard'

const Dashboard = () => {
  return (
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar />
      <div className='w-full'>
      <div className='flex flex-col gap-5 px-4 py-5'>
        <Header />
        <FilterBar />
        <DashboardTable />
      </div>
      </div>
    </div>
  )
}

export default Dashboard
