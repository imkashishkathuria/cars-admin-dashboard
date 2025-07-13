import React from 'react'

import Sidebar from '../app/components/Sidebar'
import Header from '../app/components/Header'
import DashboardTable from '../app/components/Dashboardtable'
import { Toaster } from 'react-hot-toast'
import Cards from '../app/components/Cards'
import Chart from '../app/components/Chart'

export async function getServerSideProps(context) {
  const { query } = context;
  const page = parseInt(query.page || '1');
  const pageSize = 7;

  console.log("Fetching data from API...");
  const res = await fetch(`http://localhost:3000/api/listings?page=${page}&pageSize=${pageSize}`);
  const json = await res.json();
  
  // console.log("json :",json.data);

  return {
    props: {
      listings: json.data,
      page,
      total: json.total,
      pageSize: json.pageSize
    }
  }
}

export default function Home ({ listings, page, total, pageSize }) {
  return (
    
    <div className='flex'>
      <Toaster />
      {/* Sidebar */}
      <Sidebar />
      <div className='ml-[320px] flex-1'>
      <div className='flex flex-col gap-7 px-7 py-5 '>
        <Header />
        <Cards />
        <DashboardTable listings={listings} page={page} total={total} pageSize={pageSize} />
        <Chart />
      </div>
      </div>
    </div>
    

  
  )
} 


