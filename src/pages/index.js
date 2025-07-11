import React from 'react'

import Sidebar from '@/app/components/Sidebar'
import Header from '@/app/components/Header'
import FilterBar from '@/app/components/FilterBar'
import DashboardTable from '@/app/components/Dashboardtable'

export async function getServerSideProps() {
  console.log("Fetching data from API...");
  const res = await fetch('http://localhost:3000/api/listings');
  const json = await res.json();
  
  console.log("json :",json.data);

  return {
    props: {
      listings: json.data
    }
  }
}

export default function Home ({ listings }) {
  return (
    
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar />
      <div className='w-full'>
      <div className='flex flex-col gap-7 px-7 py-5'>
        <Header />
        <FilterBar />
        <DashboardTable listings={listings} />
      </div>
      </div>
    </div>
  
  )
} 


