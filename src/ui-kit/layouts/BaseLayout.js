import React from 'react';
import {useTranslation} from 'react-i18next';

import Container from '@material-ui/core/Container';
import HeaderDefault from '@/components/Header/HeaderDefault';
import HeaderMenu from '@/ui-kit/Headers/HeaderMenu';
import mainMenuData from '@/db/mainMenuData';
import {Link} from 'react-router-dom';

const BaseLayout = ({children}) => {
  const { t } = useTranslation();
  const menuTranslated = mainMenuData.map(item => ({...item, title: t(item.title)}));

  return (
    <>
      <Container maxWidth="lg">
        <HeaderDefault title={t('step by step')} />
        <HeaderMenu sections={menuTranslated} component={Link}/>
        <main>
          {children}
        </main>
      </Container>
    </>
  );
};

export default BaseLayout;
