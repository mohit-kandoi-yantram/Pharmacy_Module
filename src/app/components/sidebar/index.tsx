'use client';
import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { SidebarItems, SubItems } from '../../types/Interface';
import SidebarItem from './items';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoIosLogOut } from 'react-icons/io';
import { BsBoxFill } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { AiFillMedicineBox } from 'react-icons/ai';
import { MdEmergency } from 'react-icons/md';
import { TbEmergencyBed } from 'react-icons/tb';

const items: SidebarItems[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: MdDashboard,
  },
  {
    name: 'In Stock',
    path: '/stock',
    icon: BsBoxFill,
  },
  {
    name: 'Ordered',
    path: '/ordered',
    icon: MdShoppingCart,
  },
  {
    name: 'Expenses',
    path: '/expenses',
    icon: FaHandHoldingDollar,
  },
  {
    name: 'Order Management',
    path: '/order_management',
    icon: AiFillMedicineBox,
    items: [
      {
        name: 'IPD/Emergeny',
        path: '/order_management/ipd_emergency',
        icon: TbEmergencyBed,
      },
      {
        name: 'OPD',
        path: '/order_management/opd',
        icon: MdEmergency,
      },
    ],
  },

  {
    name: 'Profile',
    path: '/profiles',
    icon: IoMdPerson,
  },
  {
    name: 'Help',
    path: '/help',
    icon: AiOutlineQuestionCircle,
  },
  {
    name: 'Logout',
    path: '/logout',
    icon: IoIosLogOut,
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-52 shadow-lg z-10 ">
      <div className="flex justify-center items-center bg-white">
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQERWgqpQAfvww/company-logo_200_200/0/1639741901981?e=2147483647&v=beta&t=lKPRZ6GRlKFOShej0j5hPsWKZb7FMFDnSQqOCMaqa_E"
          alt="logo"
          className="h-28 "
        />
      </div>
      <div className="flex flex-col space-y-10 w-full h-full pb-20 p-4 text-center bg-blue-800 rounded-3xl">
        <div className="flex flex-col space-y-1">
          {items.map((item, index) => {
            if (index < 5) {
              return <SidebarItem key={item.path} item={item} />;
            }
          })}
        </div>
        <div className="fixed bottom-0 left-0 p-4 border-t border-white w-52 flex flex-col space-y-1">
          {items.map((item, index) => {
            if (index > 4) {
              return <SidebarItem key={item.path} item={item} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
