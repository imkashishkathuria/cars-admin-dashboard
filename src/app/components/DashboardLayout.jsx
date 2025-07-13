import React from 'react'

import Sidebar from './Sidebar'
import Header from './Header'
import DashboardTable from './Dashboardtable'
import { Toaster } from 'react-hot-toast'
import Cards from './Cards'
import Chart from './Chart'


const DashboardLayout = ({ listings, page, total, pageSize, isPublic = false }) => {
  return (
    <div className='flex'>
          <Toaster />
          {/* Sidebar */}
          <Sidebar />
          <div className='ml-[320px] flex-1'>
          <div className='flex flex-col gap-7 px-7 py-5 '>
            <Header />
            <Cards />
            <DashboardTable 
              listings={listings} 
              page={page} 
              total={total} 
              pageSize={pageSize}
              isPublic={isPublic} />
            <Chart />
          </div>
          </div>
        </div>
  )
}

export default DashboardLayout
