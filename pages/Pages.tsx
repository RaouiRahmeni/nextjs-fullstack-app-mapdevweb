import React from 'react';
import Layout from 'components/layout/Layout';

const Pages = () => {
  return <div>Pages</div>;
};

export default Pages;
Pages.Layout = (Page: any) => <Layout>{Page}</Layout>;
