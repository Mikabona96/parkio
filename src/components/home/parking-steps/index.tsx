import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const ParkingSteps = () => {
  const t = useTranslations('Home');
  return (
    <div className="flex w-full flex-col gap-10 px-[120px] pt-12">
      <h3 className="text-center text-[32px] font-bold">
        {t('park-step-title')}
      </h3>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <Image
            width={0}
            height={0}
            className="h-[94px] w-[94px]"
            src={'/park-step-1.svg'}
            alt="park-step-1.svg"
          />
          <p className="w-[290px] text-center">{t('park-step-1')}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            width={0}
            height={0}
            className="h-[94px] w-[94px]"
            src={'/park-step-2.svg'}
            alt="park-step-2.svg"
          />
          <p className="w-[290px] text-center">{t('park-step-2')}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            width={0}
            height={0}
            className="h-[94px] w-[94px]"
            src={'/park-step-3.svg'}
            alt="park-step-3.svg"
          />
          <p className="w-[290px] text-center">{t('park-step-3')}</p>
        </div>
      </div>
    </div>
  );
};
