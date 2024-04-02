import {
  NextIntlClientProvider as NextIntlClientProviderCore,
  useMessages,
} from 'next-intl';
import React, { FC } from 'react';

export const NextIntlClientProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const messages = useMessages();
  return (
    <NextIntlClientProviderCore messages={messages}>
      {children}
    </NextIntlClientProviderCore>
  );
};
