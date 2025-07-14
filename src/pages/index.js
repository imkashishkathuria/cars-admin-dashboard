import React from 'react'

import DashboardLayout from '../components/DashboardLayout'

export async function getServerSideProps(context) {
  const { query } = context;
  const page = parseInt(query.page || '1');
  const pageSize = 7;

  console.log("Fetching data from API...");
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/listings?page=${page}&pageSize=${pageSize}`);
  if(!res.ok){
    const errorText = await res.text();
    console.log("Fetch failed", errorText);
  } 
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
    
    <DashboardLayout
    listings={listings}
    page={page}
    total={total}
    pageSize={pageSize}
    isPublic={true} />
  )
} 


