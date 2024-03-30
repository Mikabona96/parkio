import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const FirstSection = () => {
  const t = useTranslations('Home');
  const locale = useLocale();
  return (
    <div className="home-first-section-bg h-full max-h-[784px] max-w-full bg-[url('/home-first_section-background.png')] bg-no-repeat">
      <div
        className={clsx(
          'ml-auto mr-[16.5rem] mt-[15.5rem] h-full max-h-[316px] w-full max-w-[497px]',
          {
            'max-w-[570px]': locale === 'sv-SE',
            'mr-[11.5rem]': locale === 'sv-SE',
          },
        )}
      >
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-bold text-gray-900">{t('title')}</h1>
          <ul className="flex flex-col gap-4 text-[20px]">
            <li className="bg-[url('/circle.svg')] bg-left bg-no-repeat pl-6">
              {t('s-1-ul-li-1')}
            </li>
            <li className="bg-[url('/circle.svg')] bg-left bg-no-repeat pl-6">
              {t('s-1-ul-li-2')}
            </li>
            <li className="bg-[url('/circle.svg')] bg-left bg-no-repeat pl-6">
              {t('s-1-ul-li-3')}
            </li>
          </ul>
          <div className="h-[1px] w-full max-w-[420px] rounded-sm bg-gradient-to-l from-gradient-1 from-10% via-gradient-2  via-[37.36%] to-gradient-3 to-[80%]"></div>
          <div className="flex gap-4">
            <Link href={'#'}>
              <Image
                width={0}
                height={0}
                className="h-[44px] w-[133px]"
                src={'/app-store.svg'}
                alt="app-store.svg"
              />
            </Link>
            <Link href={'#'}>
              <Image
                width={0}
                height={0}
                className="h-[44px] w-[133px]"
                src={'/google-play.svg'}
                alt="google-play.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
