import React from 'react';
import BaseLayout from '@/ui-kit/layouts/BaseLayout';
import Footer from '@/temp/Footer';

const PageLayout = (props) => {
  return (
    <>
      <BaseLayout {...props}/>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </>
  );
};

export default PageLayout;
