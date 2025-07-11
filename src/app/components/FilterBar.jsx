import React from 'react'
import {IoBagSharp} from 'react-icons/io5'
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa6";
import { GrHostMaintenance } from "react-icons/gr";

import Card from './Card'

const FilterBar = () => {
  return (
    <div className='flex justify-between items-center '>
      <Card heading={"Total number of bookings"} number={"2,659"} icon={<IoBagSharp size={24} />}/>
      <Card heading={"Total revenue generated"} number={"$ 2,666,.3K"} icon={<AiFillDollarCircle size={24} />}/>
      <Card heading={"Available cars"} number={"10,000"} icon={<FaCarSide size={24} />}/>
      <Card heading={"Recent maintainence"} number={"49.5%"} icon={<GrHostMaintenance size={24} />}/>
    </div>
  )
}

export default FilterBar
