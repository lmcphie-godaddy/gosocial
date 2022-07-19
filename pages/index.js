/* eslint-disable no-unused-vars */
import React from "react";
import Head from "../components/head";
import Header from "../sections/components/header.js";
import Info from "../sections/components/info";
import indexStyles from "../styles/pages/index.module.css";
import Payment from '../sections/components/payment.js';

const IndexPage = () => {
  return (
    <div className={indexStyles.index}>
      <Head>
        <title>GoSocial</title>
      </Head>

      <Header />
      <Info />
       <Payment/>
    </div>
  );
};

export default IndexPage;
