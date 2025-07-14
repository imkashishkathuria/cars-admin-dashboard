import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Header = () => {
  return (
    <div className='flex flex-col gap-4 bg-[var(--bgSoft)] rounded-[8px]'>
      <div className='flex justify-between px-4 py-5 items-center max-w-full'>
        <p className='text-[var(--textSoft)] font-bold text-[16px]'>Dashboard</p>

        <div className='flex gap-3 items-center'>
          <div className='inline-flex'>
            <div className="flex gap-[10px] items-center bg-[#2e374a] p-[10px] rounded-[10px]">
              <MdSearch />
              <input type="text" placeholder="Search..." className="bg-transparent text-[var(--text)]" />
            </div>
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
