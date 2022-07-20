/* eslint-disable no-unused-vars */
import React from "react";
import Head from "../components/head";
import Header from "../sections/components/header.js";
import Payment from "../sections/components/payment.js";
import YourInfo from "../sections/components/yourInfo.js";
import styles from "../styles/pages/index.module.css";
import Item from "../sections/components/items.js";
import Modal from "@ux/modal";
import Button from "@ux/button";
import Download from "@ux/icon/download";

const sendEmail = () => {
  fetch("http://localhost:9002")
    .then((res) => {
      console.log("success");
    })
    .catch((err) => console.log(err));
};

const IndexPage = () => {
  const [show, setShow] = React.useState(false);

  function myFunction() {
    alert("Success, check your inbox!");
  }

  return (
    <>
      <Header />
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <YourInfo />
          <Item />
          <Payment />
          <div className={styles.completeButton}>
            <Button
              type="button"
              design="primary"
              onClick={() => {
                sendEmail();
                setShow(true);
              }}
            >
              Complete Checkout
            </Button>
            {show && (
              <Modal
                id="default-example"
                title=""
                onClose={() => setShow(false)}
              >
                <h2 className={styles.Modal}>Congratulations!</h2>

                <h3>You just bought your first domain!</h3>

                <div>
                  We’ve created a gift just for you. Be proud and share with
                  your community! Download below or check your email for a
                  special surprise.
                </div>
                <br></br>

                <Button
                  type="button"
                  design="primary"
                  onClick={() => {
                    myFunction();
                    setShow(false);
                  }}
                >
                  <Download />
                </Button>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
// useState
