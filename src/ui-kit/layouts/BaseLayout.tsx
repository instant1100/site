import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '@material-ui/core/Container';
import HeaderDefault from '@/modules/_main/components/Header/HeaderDefault';
import { BaseLayoutProps } from '/ui-kit/layouts/interfaces';

const BaseLayout: FC<BaseLayoutProps> = ({ children, menu }) => {
  const { t } = useTranslation();

  return (
    <>
      <Container maxWidth="lg">
        <HeaderDefault title={t('step by step')} />
        {menu}
        <main>
          {children}
        </main>
      </Container>
    </>
  );
};

export default BaseLayout;
