import React from 'react'

const Card = ({heading, number, icon}) => {
  return (
    <div>
      <div className="bg-[var(--bgSoft)] rounded-[8px] px-4 py-6 hover:bg-[#2e374a]">
        <div className='flex gap-3 items-center'>
      {icon}
      <span className="text-[20px] font-[300]">{heading}</span>
      </div>
      <div className="flex flex-col gap-3.5">
        
        <span className="text-[27px]">{number}</span>
        <span className="">
          <span className="text-lime-400">12%</span>
          more than previous week
          
          </span>
      </div>
    </div>
    </div>
  )
}

export default Card
