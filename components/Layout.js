import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default (props) => {
  return (
    <Container>
    <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.min.css"></link>
  </Head>
    <Header />
     { props.children }
  </Container>
  );
};
