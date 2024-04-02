import { Button, WhyParkioCard } from '@/elements';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const SecondSection = () => {
  const t = useTranslations('Home');
  const cards = [
    {
      title: t('s-2-card-1-title'),
      desc: t('s-2-card-1-description'),
      img: '/s-2-icon-1.svg',
    },
    {
      title: t('s-2-card-2-title'),
      desc: t('s-2-card-2-description'),
      img: '/s-2-icon-2.svg',
    },
    {
      title: t('s-2-card-3-title'),
      desc: t('s-2-card-3-description'),
      img: '/s-2-icon-3.svg',
    },
    {
      title: t('s-2-card-4-title'),
      desc: t('s-2-card-4-description'),
      img: '/s-2-icon-4.svg',
    },
    {
      title: t('s-2-card-5-title'),
      desc: t('s-2-card-5-description'),
      img: '/s-2-icon-5.svg',
    },
    {
      title: t('s-2-card-6-title'),
      desc: t('s-2-card-6-description'),
      img: '/s-2-icon-6.svg',
    },
    {
      title: t('s-2-card-7-title'),
      desc: t('s-2-card-7-description'),
      img: '/s-2-icon-7.svg',
    },
    {
      title: t('s-2-card-8-title'),
      desc: t('s-2-card-8-description'),
      img: '/s-2-icon-8.svg',
    },
  ];
  return (
    <div className="mt-[120px] flex flex-col items-center gap-12 rounded-2xl bg-[#F2F4F7] px-[120px] py-12">
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-xl font-normal text-gray-700">{t('s-2-title')}</h3>
        <h4 className="text-[32px] font-bold text-gray-900">
          {t('s-2-subtitle')}
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <WhyParkioCard card={card} idx={idx} key={idx} />
        ))}
      </div>
      <Button>{t('s-2-button')}</Button>
    </div>
  );
};
