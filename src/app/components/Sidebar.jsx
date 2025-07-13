
"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import LoginModal from "./LoginModal";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const { user, logout } = useUser();
  const router = useRouter();


  const handleUpdate = (formData) => {
    setUserData(formData);
  };

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
          icon: <MdPeople />,
        },
      ],
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
          title: "Logout",
          path: "/dashboard/logout",
          icon: <MdLogout />,
        },
      ],
    },
  ];

  return (
    <div className="fixed left-0 top-0  h-screen flex flex-col gap-3 px-4 pt-6 pb-3 bg-[var(--bgSoft)]">
      <div className="flex gap-3 items-center">
        <Image
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
          className="rounded-full object-cover"
        />
        <p
          className="text-lg cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {user?.name || "Guest"}
        </p>

        {isModalOpen && (
          <LoginModal
            onClose={() => setIsModalOpen(false)}
            onUpdate={handleUpdate}
          />
        )}
      </div>

      <div className="flex flex-col gap-4">
        <ul className="list-none">
          {menuItems.map((cat, catIndex) => (
            <li key={cat.title}>
              <span className="text-[var(--textSoft)] font-bold text-[13px]">
                {cat.title}
              </span>
              {cat.list.map((item, idx) => (
                <div
                  key={idx}
                  onClick={()=> {logout();
                    router.push("/");
                  toast.success("Logged out successfully!");}
                  }
                  className={`flex gap-2 items-center pl-6 pr-40 py-4 hover:bg-[#2e374a] rounded-[10px] my-2 cursor-pointer ${
                    catIndex === 0 && idx === 0 ? "bg-[#2e374a]" : ""
                  }`}
                >
                  {item.icon}
                  {item.title}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
