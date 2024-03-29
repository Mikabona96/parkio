'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';

export const Select = () => {
  const [open, setOpen] = useState(false);
  const [checked, setIsChecked] = useState<'eng' | 'swe'>('eng');
  console.log('🚀 ~ Select ~ checked:', checked);

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
        className="hover:text-gradient-3 flex w-full flex-row gap-2 transition-all"
      >
        <Image
          width={24}
          height={24}
          className="h-6 w-6"
          src="/iLangLogo.svg"
          alt="lang-badge.svg"
        />
        {checked === 'eng' ? 'ENG' : 'SWE'}
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
      {open && (
        <div className="shadow-select absolute top-10 flex h-[99px] w-full cursor-default flex-col gap-4 rounded-lg border-x-[1px] border-y-[1px] border-gray-200 bg-[#fff] px-3 py-4">
          <div
            className="flex h-6 w-[67px] gap-2"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setIsChecked('eng');
              }
            }}
          >
            <label className="hover:text-gradient-3 relative cursor-pointer transition-all">
              <input
                className="absolute opacity-0"
                type="checkbox"
                checked={checked === 'eng'}
                onChange={() => {
                  setIsChecked('eng');
                  setOpen(!open);
                }}
              />
              <span
                className={clsx(
                  'absolute top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-sm',
                  {
                    'from-gradient-1 via-gradient-2 to-gradient-3  bg-gradient-to-r from-10% via-[37.36%] to-[80%]':
                      checked === 'eng',
                    'border-x-[1px] border-y-[1px] border-gray-300':
                      checked !== 'eng',
                    'hover:bg-gray-200': checked !== 'eng',
                    'before:absolute before:left-1 before:top-1/2 before:block before:h-[6px] before:w-[2px] before:-translate-y-[1px] before:translate-x-[1px] before:rotate-[-45deg] before:rounded-md before:bg-[#fff] before:content-[""]':
                      checked === 'eng',
                    'after:absolute after:right-[6px] after:top-[3px] after:block after:h-3 after:w-[2px] after:rotate-[40deg] after:rounded-md after:bg-[#fff] after:content-[""]':
                      checked === 'eng',
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
              }
            }}
            tabIndex={0}
          >
            <label className="hover:text-gradient-3 relative cursor-pointer transition-all">
              <input
                className="absolute opacity-0"
                type="checkbox"
                checked={checked === 'swe'}
                onChange={() => {
                  setIsChecked('swe');
                  setOpen(!open);
                }}
              />
              <span
                className={clsx(
                  'absolute top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-sm',
                  {
                    'from-gradient-1 via-gradient-2 to-gradient-3  bg-gradient-to-r from-10% via-[37.36%] to-[80%]':
                      checked === 'swe',
                    'border-x-[1px] border-y-[1px] border-gray-300':
                      checked !== 'swe',
                    'hover:bg-gray-200': checked !== 'swe',
                    'before:absolute before:left-1 before:top-1/2 before:block before:h-[6px] before:w-[2px] before:-translate-y-[1px] before:translate-x-[1px] before:rotate-[-45deg] before:rounded-md before:bg-[#fff] before:content-[""]':
                      checked === 'swe',
                    'after:absolute after:right-[6px] after:top-[3px] after:block after:h-3 after:w-[2px] after:rotate-[40deg] after:rounded-md after:bg-[#fff] after:content-[""]':
                      checked === 'swe',
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
