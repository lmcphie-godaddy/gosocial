import React from "react";
import Head from "../components/head";
import Header from "../sections/components/header.js";
import indexStyles from "../styles/pages/index.module.css";
import Payment from '../sections/components/payment.js';
import YourInfo from '../sections/components/yourInfo.js';
import Item from '../sections/components/items.js';
import styles from '../styles/pages/index.module.css';


const IndexPage = () => {
  return (
    <>
    <div className={indexStyles.index}>
      <Head>
        <title>GoSocial</title>
      </Head>

      <Header/>
      <div className={styles.background}>
        <div className={styles.wrapper}>
        <YourInfo/>
        <Item/>
        <Payment/>
        </div>
        
      </div>
    </div>
    </>
  )
  };
  
export default IndexPage;
