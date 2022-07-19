/* eslint-disable no-unused-vars */
import React from "react";
import Head from "../components/head";
import GasketEmblem from "@gasket/assets/react/gasket-emblem";
import ProgressSteps from "@ux/progress-steps";

const pageStyle = { textAlign: "center" };
const logoStyle = { width: "250px", height: "250px" };

export const IndexPage = () => (
  const { Step } = ProgressSteps;
  const [step, setStep] = React.useState(1);

  <div style={pageStyle}>
    <Head title="Home" />
    <GasketEmblem style={logoStyle} />
    <>
      <ProgressSteps value={ step }>
        <Step href='#' onClick={ () => setStep(1) }>Payment Details</Step>
        <Step href='#' onClick={ () => setStep(2) }>Billing Information</Step>
        <Step href='#' onClick={ () => setStep(3) }>Review</Step>
        <Step href='#' onClick={ () => setStep(4) }>Complete</Step>
      </ProgressSteps>
      <SiblingSet gap='md'>
        <Button design='primary' disabled={ step === 1 } onClick={ () => setStep(step - 1) } text='Back'/>
        <Button design='primary' disabled={ step === 5 } onClick={ () => setStep(step + 1) } text='Next'/>
      </SiblingSet>
    </>
    <h1>Welcome to Gasket!</h1>
    <p>
      To get started, edit <code>pages/index.js</code> and save to reload.
    </p>
    <p>
      <a href="https://gasket.dev">Learn Gasket</a>
    </p>
  </div>
);

export default IndexPage;
