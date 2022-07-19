import React from "react";
import PropTypes from "prop-types";
const { nextRedux } = require("../redux/store");
import "@ux/button/dist/styles.css";
import "@ux/form-element/dist/styles.css";

// Simple functional App component which can be wrapped
function WrappedApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

WrappedApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

// wrap the app with higher-order components
export default [nextRedux.withRedux].reduce((cmp, hoc) => hoc(cmp), WrappedApp);
