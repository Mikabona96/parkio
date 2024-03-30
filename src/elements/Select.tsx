'use client';

import clsx from 'clsx';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';

export const Select = () => {
  const [open, setOpen] = useState(false);
  const [checked, setIsChecked] = useState<'eng' | 'swe'>('eng');
  const [isPending, startTransition] = useTransition();
  const localeActive = useLocale();
  const router = useRouter();

  const changeLocale = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  return (
    <div className="relative select-none">
      <div
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            setOpen(!open);
          }
        }}
        onClick={() => setOpen(!open)}
        className="flex w-full flex-row gap-2 transition-all hover:text-gradient-3"
      >
        <Image
          width={24}
          height={24}
          className="h-6 w-6"
          src="/iLangLogo.svg"
          alt="lang-badge.svg"
        />
        {localeActive === 'en-US' ? 'ENG' : 'SWE'}
        <Image
          width={24}
          height={24}
          className={clsx('h-6 w-6 transition-all', {
            '-rotate-180': open === true,
          })}
          src="/chevron.svg"
          alt="lang-badge.svg"
        />
      </div>
      {open && !isPending && (
        <div className="absolute top-10 flex h-[99px] w-full cursor-default flex-col gap-4 rounded-lg border-x-[1px] border-y-[1px] border-gray-200 bg-[#fff] px-3 py-4 shadow-select">
          <div
            className="flex h-6 w-[67px] gap-2"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setIsChecked('eng');
                changeLocale('en-US');
              }
            }}
          >
            <label className="relative cursor-pointer transition-all hover:text-gradient-3">
              <input
                className="absolute opacity-0"
                type="checkbox"
                checked={localeActive === 'en-US'}
                name="en-US"
                id="en-US"
                onChange={() => {
                  setIsChecked('eng');
                  setOpen(!open);
                  changeLocale('en-US');
                }}
              />
              <span
                className={clsx(
                  'absolute top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-sm',
                  {
                    'bg-gradient-to-r from-gradient-1 from-10%  via-gradient-2 via-[37.36%] to-gradient-3 to-[80%]':
                      localeActive === 'en-US',
                    'border-x-[1px] border-y-[1px] border-gray-300':
                      localeActive !== 'en-US',
                    'hover:bg-gray-200': localeActive !== 'en-US',
                    'before:absolute before:left-1 before:top-1/2 before:block before:h-[6px] before:w-[2px] before:-translate-y-[1px] before:translate-x-[1px] before:rotate-[-45deg] before:rounded-md before:bg-[#fff] before:content-[""]':
                      localeActive === 'en-US',
                    'after:absolute after:right-[6px] after:top-[3px] after:block after:h-3 after:w-[2px] after:rotate-[40deg] after:rounded-md after:bg-[#fff] after:content-[""]':
                      localeActive === 'en-US',
                  },
                )}
              ></span>
              <span className="absolute left-[30px]">ENG</span>
            </label>
          </div>
          <div
            className="flex h-6 w-[67px] gap-2"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setIsChecked('swe');
                changeLocale('sv-SE');
              }
            }}
            tabIndex={0}
          >
            <label className="relative cursor-pointer transition-all hover:text-gradient-3">
              <input
                className="absolute opacity-0"
                type="checkbox"
                checked={localeActive === 'sv-SE'}
                name="sv-SE"
                id="sv-SE"
                onChange={() => {
                  setIsChecked('swe');
                  setOpen(!open);
                  changeLocale('sv-SE');
                }}
              />
              <span
                className={clsx(
                  'absolute top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-sm',
                  {
                    'bg-gradient-to-r from-gradient-1 from-10%  via-gradient-2 via-[37.36%] to-gradient-3 to-[80%]':
                      localeActive === 'sv-SE',
                    'border-x-[1px] border-y-[1px] border-gray-300':
                      localeActive !== 'sv-SE',
                    'hover:bg-gray-200': localeActive !== 'sv-SE',
                    'before:absolute before:left-1 before:top-1/2 before:block before:h-[6px] before:w-[2px] before:-translate-y-[1px] before:translate-x-[1px] before:rotate-[-45deg] before:rounded-md before:bg-[#fff] before:content-[""]':
                      localeActive === 'sv-SE',
                    'after:absolute after:right-[6px] after:top-[3px] after:block after:h-3 after:w-[2px] after:rotate-[40deg] after:rounded-md after:bg-[#fff] after:content-[""]':
                      localeActive === 'sv-SE',
                  },
                )}
              ></span>
              <span className="absolute left-[30px]">SWE</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
