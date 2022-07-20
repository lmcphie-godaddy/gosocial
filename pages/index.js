/* eslint-disable no-unused-vars */
import React from "react";
import Head from "../components/head";
import Header from "../sections/components/header.js";
import Payment from "../sections/components/payment.js";
import YourInfo from "../sections/components/yourInfo.js";
import styles from "../styles/pages/index.module.css";
import Item from "../sections/components/items.js";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>GoSocial</title>
      </Head>

      <Header />
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <YourInfo />
          <Item />
          <Payment />
          <div className={styles.completeButton}>
            <button type="button">Complete Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
