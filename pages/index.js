/* eslint-disable no-unused-vars */
import React from "react";
import Head from "../components/head";
import Header from "../sections/components/header.js";
import Info from "../sections/components/info";
import indexStyles from "../styles/pages/index.module.css";
import Payment from '../sections/components/payment.js';
import YourInfo from '../sections/components/yourInfo.js';
import styles from '../styles/pages/index.module.css';


const IndexPage = () => {
  return (
    <div className={indexStyles.index}>
      <Head>
        <title>GoSocial</title>
      </Head>

      <Header/>
      <div className={styles.background}>
        <YourInfo/>
        <Payment/>
      </div>
      </>
  )
  };

export default IndexPage;
