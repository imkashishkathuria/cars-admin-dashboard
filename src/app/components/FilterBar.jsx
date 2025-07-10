import React from 'react'
import { MdArrowDropDown, MdSearch  } from 'react-icons/md'
import {IoIosArrowDown } from 'react-icons/io'

const FilterBar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-3'>
        {["PDF", "Print", "Excel", "CSV", "Show 50 rows"].map((item, index, arr) => (
          <button key={index} className='px-9 py-3 items-center bg-[#5d57e9] hover:bg-[#5d57e9]/80 text-white rounded-[5px] cursor-pointer'>
              {index === arr.length-1 ? (
                <div className='flex gap-2 items-center'>
                  <IoIosArrowDown  />
                  {item}
                </div>
              ) : (item)}
            </button>
            
        ))}
      </div>
    <div className='inline-flex'>
      <div className="flex gap-[10px] items-center bg-[#2e374a] p-[10px] rounded-[10px]">
        <MdSearch />
        <input type="text" placeholder="Search..." className="bg-transparent text-[var(--text)]" />
      </div>
    </div>
    </div>
  )
}

export default FilterBar
