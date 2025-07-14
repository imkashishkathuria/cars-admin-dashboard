"use client"
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import PageReveal from './PageReveal';
import StatusHeader from './StatusHeader';
import Modal from './Modal';
import toast from 'react-hot-toast';
// import LoginModal from './LoginModal';
import { useUser } from 'context/userContext';
import ActionModal from './ActionModal';

const DashboardTable = ({ listings = [], page, total, pageSize, isPublic = false }) => {

  const totalPages = Math.ceil(total / pageSize);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApproveModal, setIsApproveModal] = useState(false);
  const [currentListing, setCurrentListing] = useState(null);
  const [listingsData, setListingsData] = useState(listings);

  useEffect(() => {
    setListingsData(listings);
  }, [listings]);


  const handleUpdate = (updatedListing) => {
    setListingsData((prev) =>
      prev.map((item) =>
        item.booking_id === updatedListing.booking_id ? updatedListing : item
      )

    );
    toast.success("Listing updated successfully !")
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    if(user){
      router.push(`/dashboard?page=${newPage}`);
    }else{
    router.push(`/?page=${newPage}`)}
    // router.reload(); 
  }

  const { user } = useUser();

  const handleAction = async (id, action) => {
    if(!user){
    toast("Please log in to perform this action", { icon: "🔒" });
      return;
    }
    try{
     const res = await fetch(`/api/${action}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, user })
    });

    const data = await res.json();
    if(res.ok){
      toast.success(data.message);
      router.replace(router.asPath);
    }
    else{
      toast.error(data.error || "Something went wrong");
    }
  }catch{
    toast.error("Server error. Try again later.");
    console.log("Error during approval/rejection:", error);
  }

  }

  const [selectedStatus, setSelectedStatus] = useState(null);

  const filteredListings = selectedStatus
    ? listingsData.filter((listing) => listing.status === selectedStatus)
    : listingsData;


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
                  <button 
                    onClick={()=>{
                      handleAction(listing.id, "approve");
                      setIsApproveModal(true)}}
                    className='bg-green-600 px-5 py-2 ml-18 rounded-[8px] cursor-pointer hover:bg-green-600/70'>
                    Approve
                  </button>
                </td>
                <td className='px-3 py-2'>
                  <button 
                    onClick={()=>{
                      handleAction(listing.id, "reject")
                      setIsApproveModal(true)
                    }}
                    className='bg-red-500 px-8 py-2  rounded-[8px] cursor-pointer hover:bg-red-500/90'>
                    Reject
                  </button>
                </td>
                {isApproveModal && (
                  <ActionModal onClose={() => setIsApproveModal(false)} />
                )}
                <td className='px-3 py-2'>
                  {!isPublic ? 
                  (
                    <button 
                      onClick={() => {
                        setCurrentListing(listing);
                        setIsModalOpen(true)}}     
                      className='bg-blue-600 px-9 py-2 rounded-[8px] cursor-pointer hover:bg-blue-600/70'
                      >
                    Edit
                  </button>)
                  : (
                    <button 
                      onClick={() => {
                        setCurrentListing(listing);
                        setIsModalOpen(true);
                        // setIsLoginModal(true);
                        toast.error("You must be logged in");
                        }
                        }     
                      className='bg-blue-600 px-9 py-2 rounded-[8px] cursor-pointer hover:bg-blue-600/70'
                      >
                    Edit
                  </button>
                  )
                  }
                  {/* {isLoginModal && isLoginModal && (
                    <LoginModal onClose={() => setIsLoginModal(false)} />
                  )}  */}
                  {!isPublic && isModalOpen && (
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
