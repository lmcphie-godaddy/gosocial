/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import Header from '../sections/components/header.js';
import Payment from '../sections/components/payment.js';
import styles from '../styles/pages/index.module.css';

const IndexPage = () => {
  return(
      <>
      <Head>
        <title>GoSocial</title>
      </Head>

      <Header/>
      <div className={styles.background}></div>

      {/*your info area here */}

      <Payment/>
      </>
  )
  };

export default IndexPage;
