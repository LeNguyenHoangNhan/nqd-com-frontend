import LandingPageBody from "../../components/LandingPageBody/LandingPageBody";
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
const LandingPage = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>NQD Community</title>
        </Helmet>
        <LandingPageBody />
      </HelmetProvider>
    </React.Fragment>
  );
};
export default LandingPage;
