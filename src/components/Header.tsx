import { Button, DropdownSolutions, Select } from '@/elements';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  const links = [
    {
      name: 'Bussiness parking',
      href: '#',
    },
    {
      name: 'FAQ',
      href: '#',
    },
    {
      name: 'About us',
      href: '#',
    },
    {
      name: 'Contact us',
      href: '#',
    },
  ];
  return (
    <header className="flex justify-between border-b-[1px] border-gray-200 px-[120px] py-[16px]">
      <Link href={'/'}>
        <Image
          src="/Logo.svg"
          width={0}
          height={0}
          alt="logo.svg"
          priority
          className="h-[35.5px] w-[92px]"
        />
      </Link>
      <nav>
        <ul className="flex list-none gap-6">
          <li className="group relative cursor-pointer p-2">
            <div
              className="hover:text-gradient-3 peer transition-all"
              tabIndex={0}
            >
              Parkio solutions
            </div>
            <div className="group-hover:animate-appearence absolute left-0 top-8 hidden cursor-default hover:block group-hover:block peer-focus:block">
              <DropdownSolutions />
            </div>
          </li>
          {links.map((link) => (
            <li className="p-2" key={link.name}>
              <Link
                className="hover:text-gradient-3 transition-all"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="w-[108px] cursor-pointer p-2">
            <Select />
          </li>
          <Button>Log in</Button>
        </ul>
      </nav>
    </header>
  );
};
