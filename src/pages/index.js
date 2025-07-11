import React from 'react'

import Sidebar from '../app/components/Sidebar'
import Header from '../app/components/Header'
import FilterBar from '../app/components/FilterBar'
import DashboardTable from '../app/components/Dashboardtable'

export async function getServerSideProps(context) {
  const { query } = context;
  const page = parseInt(query.page || '1', 10);
  const pageSize = 7;

  console.log("Fetching data from API...");
  const res = await fetch(`http://localhost:3000/api/listings?page=${page}&pageSize=${pageSize}`);
  const json = await res.json();
  
  // console.log("json :",json.data);

  return {
    props: {
      listings: json.data,
      page: json.page,
      total: json.total,
      pageSize: json.pageSize
    }
  }
}

export default function Home ({ listings, page, total, pageSize }) {
  return (

    <div className='flex'>
      {/* Sidebar */}
      <Sidebar />
      <div className='w-full'>
      <div className='flex flex-col gap-7 px-7 py-5'>
        <Header />
        <FilterBar />
        <DashboardTable listings={listings} page={page} total={total} pageSize={pageSize} />
      </div>
      </div>
    </div>

  
  )
} 


