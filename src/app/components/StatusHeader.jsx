"use client";
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import PageReveal from './PageReveal';

const StatusHeader = ({ onStatusChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (status) => {
    setOpen(false);
    onStatusChange?.(status);
  };

  return (
    <th className='relative'>
      <div className='flex gap-1 items-center cursor-pointer' onClick={() => setOpen(!open)}>
        <label htmlFor='status'>Status</label>
        <FaChevronDown size={14} />
      </div>
      {open && (
        <PageReveal>
        <div className='absolute left-0 mt-2 w-50 px-2 bg-gray-300 rounded-lg shadow-md z-10'>
          <ul className='text-lg text-gray-800'>
            {["Approved", "Rejected", "Pending", "All"].map((status, idx, arr) => (
              <li
                key={status}
                onClick={() => handleSelect(status === "All" ? null: status)}
                
                className='px-4 py-2 my-3 text-center border border-black  hover:bg-gray-100 bg-gray-500 cursor-pointer rounded-md font-bold'
              >
                {status}
              </li>
            ))}
          </ul>
        </div>
        </PageReveal>
      )}
    </th>
  );
};
export default StatusHeader