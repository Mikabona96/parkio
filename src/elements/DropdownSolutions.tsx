import clsx from 'clsx';
import React from 'react';

export const DropdownSolutions = () => {
  const column1 = [
    {
      title: 'For those who park',
      href: '#',
    },
    {
      title: 'How PARKIO app works',
      href: '#',
    },
    {
      title: 'Short time parking',
      href: '#',
    },
    {
      title: 'Digital permit',
      href: '#',
    },
    {
      title: 'Business parking',
      href: '#',
    },
    {
      title: 'Family account',
      href: '#',
    },
    {
      title: 'Guest parking',
      href: '#',
    },
    {
      title: "Resident's parking",
      href: '#',
    },
    {
      title: 'SMS parking',
      href: '#',
    },
  ];
  const column2 = [
    {
      title: 'For those who own parking spaces',
      href: '#',
    },
    {
      title: 'Parking for municipalities and property owners',
      href: '#',
    },
  ];
  return (
    <div className="mt-9 flex h-[458px] w-[608px] gap-8 rounded-lg border-[1px] border-gray-200 bg-[#fff] p-4 shadow-select">
      <ul className="flex flex-col gap-2">
        {column1.map((item, idx) => {
          return (
            <li
              className={clsx('cursor-pointer p-2 hover:text-gradient-3', {
                'text-gray-500': idx === 0,
              })}
              key={item.title}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col gap-2">
        {column2.map((item, idx) => {
          return (
            <li
              className={clsx('cursor-pointer p-2 hover:text-gradient-3', {
                'text-gray-500': idx === 0,
              })}
              key={item.title}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
