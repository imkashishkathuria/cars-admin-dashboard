import React from 'react'

const DashboardTable = ({ listings = []}) => {
  // console.log("lisings: ", listings);
  return (
    <div className='bg-[var(--bgSoft)] rounded-[8px] px-4 py-6'>
      <h1 className='text-3xl font-[200] mb-4 text-[var(--textSoft)]'>
        Latest Listings
      </h1>

      <table>
        <thead className='text-left'>
          <tr>
            <th className='px-5 py-2'>
              Booking Id
            </th>
            <th className='px-5 py-2'>
              Client
            </th>
            <th className='px-5 py-2'>
              Unit
            </th>
             <th className='px-5 py-2'>
              Return Date
            </th>
             <th className='px-5 py-2'>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {listings.map(listing => (
            <tr key={listing.id} className='text-white'>
              <td className='px-5 py-5'>{listing.booking_id}</td>
              <td className='px-5 py-5'>{listing.client}</td>
              <td className='px-5 py-5'>{listing.unit}</td>
              <td className='px-5 py-5'>{listing.return}</td>
              <td className='px-5 py-5'>{listing.status}</td>
              <button className='bg-green-600 px-5 py-2 my-3 rounded-[8px] cursor-pointer hover:bg-green-600/70'>
                Approve
              </button>
              <button className='bg-red-500 px-8 py-2 mx-3 rounded-[8px] cursor-pointer hover:bg-red-500/90'>
                Reject
              </button>
              <button className='bg-blue-600 px-9 py-2 rounded-[8px] cursor-pointer hover:bg-blue-600/70'>
                Edit
              </button>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  )
}

export default DashboardTable
