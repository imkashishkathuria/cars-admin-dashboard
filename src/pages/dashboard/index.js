"use client"

import { useUser } from '@/context/userContext';
import DashboardLayout from '@/src/app/components/DashboardLayout';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

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


const Dashboard = ({ listings, page, total, pageSize }) => {

    const { user } = useUser();
    const router = useRouter();

    useEffect(()=>{
        if(!user) router.push("/");
    },[user]);

    if(!user) return null;

  return (
    <DashboardLayout
    listings={listings}
    page={page}
    total={total}
    pageSize={pageSize}
    isPublic={false} />
  )
}

export default Dashboard
