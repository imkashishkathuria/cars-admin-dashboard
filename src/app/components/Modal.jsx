"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ onClose, listing, onUpdate }) => {

    const [formData, setFormData] = useState({
        booking_id: listing?.booking_id || '',
        client: listing?.client || '',
        unit: listing?.unit || '',
        return: listing?.return || '',
        status: listing?.status || '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
        onClose();
    };

    const backdrop = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const modal = {
        hidden: { opacity: 0, scale: 0.8, y: "10", x: "10" },
        visible: {
            opacity: 1,
            scale: 1,
            y: "10",
            x: "10",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: { opacity: 0, scale: 0.8, y: "-50%", x: "-50%" }
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed top-0 left-0 right-0 bottom-0 z-[999] flex justify-center items-start  overflow-y-auto place-items-center opacity-0 backdrop-blur-[1px]  transition-opacity duration-300 "

                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="exit">
                <motion.div
                    className=" relative mx-auto w-2/3 mt-10 rounded-lg overflow-hidden shadow-sm bg-white"
                    variants={modal}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
                    {/* Close Button */}
                    <div className="flex justify-end px-3">
                        <button
                            onClick={onClose}
                            tabIndex={0}
                            className=" text-black font-bold text-xl px-4 py-2 rounded  transition cursor-pointer"
                        >
                            X
                        </button>
                    </div>

                    <div className="bg-[var(--bgsoft)]  rounded-[10px]">
                        <div className="flex items-center justify-center text-white h-15 bg-slate-800">
                            <h3 className="text-2xl font-semibold">Update Listing</h3>
                        </div>
                        <form className="flex flex-col font-[600] mb-[20px] p-[20px]" >
                            <div className='flex gap-4 px-4 mb-5'>
                                <div className='flex flex-col gap-2 text-slate-800 w-full  text-xl'>
                                    Booking Id
                                    <input 
                                        type="text" 
                                        placeholder='booking id' 
                                        name='booking_id' 
                                        className='p-[20px] bg-[var(--bg)] text-[var(--text)] text-sm border-2 border-[#2e374a] rounded-[5px]  w-full' 
                                        value={formData.booking_id}
                                        onChange={handleChange} required />
                                </div>
                                <div className='flex flex-col gap-2 text-slate-800 w-full  text-xl'>
                                    Client
                                    <input 
                                        type="text" 
                                        placeholder='client' 
                                        name='client' 
                                        className='p-[20px] bg-[var(--bg)] text-[var(--text)] text-sm border-2 border-[#2e374a] rounded-[5px] w-full' 
                                        value={formData.client}
                                        onChange={handleChange} required /></div>


                            </div>
                            <div className='flex gap-4 px-4 mb-5'>
                                <div className='flex flex-col gap-2 text-slate-800 w-full text-xl'>
                                    Unit
                                    <input 
                                        type="text" 
                                        placeholder='unit' 
                                        name='unit' 
                                        className='p-[20px] bg-[var(--bg)] text-[var(--text)] text-sm border-2 border-[#2e374a] rounded-[5px]  w-full'
                                        value={formData.unit}
                                        onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2 text-slate-800 w-full  text-xl'>
                                    Return Date
                                    <input 
                                        type="text" 
                                        placeholder='return date' 
                                        name='return' 
                                        className='p-[20px] bg-[var(--bg)] text-[var(--text)] text-sm border-2 border-[#2e374a] rounded-[5px]  w-full'
                                        value={formData.return}
                                        onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='flex gap-4 px-4 mb-6'>
                                <div className='flex flex-col gap-2 text-slate-800 w-full  text-xl'>
                                    Status
                                    <div className="w-[50%] ">
                                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-700">

                                        </label>
                                        <select
                                            id="status"
                                            name="status"
                                            className="p-[20px] bg-[var(--bg)] text-[var(--text)] text-sm  border-2 border-[#2e374a] rounded-[5px] w-full"
                                            value={formData.status}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select status</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Rejected">Rejected</option>
                                            <option value="Pending">Pending</option>
                                        </select>

                                    </div>
                                </div>
                            </div>




                            <button onClick={handleSubmit} type='submit' className='p-[15px] bg-teal-600 text-[var(--text)] text-lg rounded-[5px] cursor-pointer' >Update</button>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Modal;
