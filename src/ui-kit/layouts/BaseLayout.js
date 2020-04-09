import React from 'react';
import {useTranslation} from 'react-i18next';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderDefault from '@/components/Header/HeaderDefault';
import Footer from '@/temp/Footer';
import HeaderMenu from '@/ui-kit/Headers/HeaderMenu';

const BaseLayout = ({children}) => {
  const { t } = useTranslation();

  return (
    <>
      <Container maxWidth="lg">
        <HeaderDefault title={t('step by step')} />
        <HeaderMenu />
        <main>
          {children}
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </>
  );
};

export default BaseLayout;
