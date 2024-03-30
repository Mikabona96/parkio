import { Button, DropdownSolutions, Select } from '@/elements';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  const t = useTranslations('Header');
  const links = [
    {
      name: t('business-parking'),
      href: '#',
    },
    {
      name: t('faq'),
      href: '#',
    },
    {
      name: t('about-us'),
      href: '#',
    },
    {
      name: t('contact-us'),
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
              className="peer transition-all hover:text-gradient-3"
              tabIndex={0}
            >
              Parkio solutions
            </div>
            <div className="absolute left-0 top-8 hidden cursor-default hover:block group-hover:block group-hover:animate-appearence peer-focus:block">
              <DropdownSolutions />
            </div>
          </li>
          {links.map((link) => (
            <li className="p-2" key={link.name}>
              <Link
                className="transition-all hover:text-gradient-3"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="w-[108px] cursor-pointer p-2">
            <Select />
          </li>
          <Button>{t('login')}</Button>
        </ul>
      </nav>
    </header>
  );
};
