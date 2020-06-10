import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Container from '@material-ui/core/Container';
import HeaderDefault from '@/modules/_main/components/Header/HeaderDefault';

const BaseLayout = ({ children, menu }) => {
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

BaseLayout.defaultProps = {
  menu: null,
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.node,
};

export default BaseLayout;
