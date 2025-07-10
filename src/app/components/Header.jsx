import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Header = () => {
  return (
    <div className='flex flex-col gap-4 bg-[var(--bgSoft)] rounded-[8px]'>
      <div className='flex justify-between px-4 py-5 items-center max-w-full'>
        <p className='text-[var(--textSoft)] font-bold text-[16px]'>Dashboard</p>

        <div className='flex gap-3 items-center'>
          <div className='flex justify-between gap-4'>
            <button className='px-9 py-3 items-center bg-[#5d57e9] hover:bg-[#5d57e9]/80 text-white rounded-[5px] cursor-pointer'>
              Login
            </button>
             <button className='px-9 py-3 items-center bg-[#5d57e9] text-white rounded-[5px] cursor-pointer hover:bg-[#5d57e9]/80'>
              Sign Up
            </button>

          </div>
          <div className="flex gap-[20px]">
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
