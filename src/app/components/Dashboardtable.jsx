import React from 'react'

const DashboardTable = ({ listings = []}) => {
  // console.log("lisings: ", listings);
  return (
    <div className='bg-[var(--bgSoft)] rounded-[8px] px-4 py-6'>
      <h1 className='text-3xl font-[200] mb-4 text-[var(--textSoft)]'>
        Latest Listings
      </h1>

      <table>
        <thead className=''>
          <tr>
            <th>
              Car
            </th>
            <th className='px-4 py-2'>
              Location
            </th>
            <th className='px-4 py-2'>
              Price
            </th>
            <th className='px-4 py-2'>
              Status
            </th>
            <th className='px-4 py-2'>
              SubmittedAt
            </th>
          </tr>
        </thead>
        <tbody>
          {listings.map(listing => (
            <tr key={listing.id} className='text-white'>
              <td className='px-4 py-2'>{listing.name}</td>
              <td className='px-4 py-2'>{listing.location}</td>
              <td className='px-4 py-2'>{listing.price}</td>
              <td className='px-4 py-2'>{listing.status}</td>
              <td className='px-4 py-2'>{listing.submittedAt}</td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  )
}

export default DashboardTable
