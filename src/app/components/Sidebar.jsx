import Image from 'next/image'
import React from 'react'
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdWork, MdAnalytics, MdPeople, MdOutlineSettings, MdHelpCenter, MdLogout } from 'react-icons/md'

const Sidebar = () => {

    const menuItems = [
        {
            title: "Pages",
            list: [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: <MdDashboard />,

                },
                {
                    title: "Users",
                    path: "/dashboard/users",
                    icon: <MdSupervisedUserCircle />,

                },
                {
                    title: "Products",
                    path: "/dashboard/products",
                    icon: <MdShoppingBag />,

                },

            ],
        },

        {
            title: "Analytics",
            list: [
                {
                    title: "Revenue",
                    path: "/dashboard/revenue",
                    icon: <MdWork />,
                },
                {
                    title: "Reports",
                    path: "/dashboard/reports",
                    icon: <MdAnalytics />,
                },
                {
                    title: "Teams",
                    path: "/dashboard/teams",
                    icon: <MdPeople />
                },
            ]
        },
        {
            title: "User",
            list: [
                {
                    title: "Settings",
                    path: "/dashboard/settings",
                    icon: <MdOutlineSettings />,
                },
                {
                    title: "Help",
                    path: "/dashboard/help",
                    icon: <MdHelpCenter />,
                },
                {
                    title: "Logout",
                    path: "/dashboard/logout",
                    icon: <MdLogout />,
                },
            ]
        }
    ]

    return (
        <div className='flex flex-col gap-3 px-4 pt-6 pb-3 bg-[var(--bgSoft)]'>
            <div className='flex gap-3 items-center '>
                <Image src="/noavatar.png" alt="" width="50" height="50" className='rounded-[50%] object-cover' />
                <p className='text-lg'>user</p>

            </div>
            <div className='flex flex-col gap-4'>
                <ul className="list-none">
                    {menuItems.map((cat, catIndex) => (
                        <li key={cat.title}>
                            <span className="text-[var(--textSoft)] font-bold text-[13px]">{cat.title}</span>
                            {cat.list.map((item, idx) => (
                                <div key={idx} className={`flex gap-2 items-center pl-6 pr-40 py-4 hover:bg-[#2e374a] rounded-[10px] my-2 cursor-pointer ${catIndex === 0 && idx === 0 ? "bg-[#2e374a]" : ""}`}>
                                    
                                        {item.icon}
                                    
                                    {item.title}
                                    
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
