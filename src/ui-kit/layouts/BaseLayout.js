import React from 'react';
import {useTranslation} from 'react-i18next';

import Container from '@material-ui/core/Container';
import HeaderDefault from '@/modules/_main/components/Header/HeaderDefault';

const BaseLayout = ({children, menu}) => {
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
