"use client"
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import PageReveal from './PageReveal';
import { IoIosArrowDown } from 'react-icons/io';
import { FaChevronDown } from 'react-icons/fa6';
import StatusHeader from './StatusHeader';
import Modal from './Modal';

const DashboardTable = ({ listings = [], page, total, pageSize }) => {

  const totalPages = Math.ceil(total / pageSize);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentListing, setCurrentListing] = useState(null);
  const [listingsData, setListingsData] = useState(listings); // use local copy

  const handleUpdate = (updatedListing) => {
    setListingsData((prev) =>
      prev.map((item) =>
        item.booking_id === updatedListing.booking_id ? updatedListing : item
      )
    );
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    router.push(`/?page=${newPage}`)
  }

  const [selectedStatus, setSelectedStatus] = useState(null); // in DashboardTable

  const filteredListings = selectedStatus
    ? listingsData.filter((listing) => listing.status === selectedStatus)
    : listingsData;


  const handleStatusFilter = (status) => {
    console.log("Filter by:", status);
    // Future: you can refetch with filter here
  };


  // console.log("lisings: ", listings);
  return (

    <div className='bg-[var(--bgSoft)] rounded-[8px] px-4 py-6'>
      <h1 className='text-3xl font-[200] mb-4 text-[var(--textSoft)]'>
        Latest Listings
      </h1>
      <PageReveal page={page}>
        <table>
          <thead className='text-left'>
            <tr>

              <th className='px-5 py-2'>
                Booking Id
              </th>
              <th className='px-5 py-2'>
                Client
              </th>
              <StatusHeader onStatusChange={(status) => setSelectedStatus(status)} />
              <th className='px-5 py-2'>
                Unit
              </th>
              <th className='py-2'>
                Return Date
              </th>

            </tr>
          </thead>
          <tbody>
            {filteredListings.map(listing => (
              <tr key={listing.id} className='text-white'>
                <td className='p-5'>{listing.booking_id}</td>
                <td className='px-5 py-5'>{listing.client}</td>
                <td className="mx-3">
                  <button className={`rounded-[5px] text-[15px] p-[5px] 
                  ${listing.status === "Approved" ? "bg-[#afd6ee75]"
                      : listing.status === "Pending" ? "bg-[#f7cb7375]"
                        : "bg-[#f7737375]"}`}>{listing.status}</button>
                </td>
                <td className='px-5 py-5'>{listing.unit}</td>
                <td className='py-5'>{listing.return}</td>



                <td className='px-3 py-2'>
                  <button className='bg-green-600 px-5 py-2 ml-18 rounded-[8px] cursor-pointer hover:bg-green-600/70'>
                    Approve
                  </button>
                </td>
                <td className='px-3 py-2'>
                  <button className='bg-red-500 px-8 py-2  rounded-[8px] cursor-pointer hover:bg-red-500/90'>
                    Reject
                  </button>
                </td>
                <td className='px-3 py-2'>
                  <button onClick={() => {
                    setCurrentListing(listing);
                    setIsModalOpen(true)
                  }
                  } className='bg-blue-600 px-9 py-2 rounded-[8px] cursor-pointer hover:bg-blue-600/70'>
                    Edit
                  </button>
                  {isModalOpen && (
                    <Modal onClose={() => setIsModalOpen(false)}
                      listing={currentListing}
                      onUpdate={handleUpdate} />
                  )}
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </PageReveal>
      <div className='flex justify-between my-6'>

        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className={`px-[12px] py-[10px] text-black  text-lg  rounded-[12px] 
            ${page === 1 ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-white hover:bg-white/80'}`}>
          Previous
        </button>
        <button onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className={`px-[12px] py-[10px] text-black  text-lg  rounded-[12px] 
            ${page === totalPages ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-white hover:bg-white/80'}`}>
          Next</button>

      </div>


    </div>
  )
}

export default DashboardTable
