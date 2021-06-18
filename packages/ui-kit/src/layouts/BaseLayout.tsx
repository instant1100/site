import React, { FC } from 'react';

import Container from '@material-ui/core/Container';

import { BaseLayoutProps } from './interfaces';

export const BaseLayout: FC<BaseLayoutProps> = (
  {
    children,
    menu,
    header,
  },
) => {
  return (
    <>
      <Container maxWidth="lg">
        {header}
        {menu}
        <main>
          {children}
        </main>
      </Container>
    </>
  );
};
