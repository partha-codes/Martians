import React from "react";
import AdSense from "react-adsense";
import { Container } from "react-bootstrap";
export const AddSense = () => (
  <Container>
    <AdSense.Google
      client="ca-pub-5373396645522636"
      slot="4930884599"
      style={{ display: "block" }}
      layout="in-article"
      format="fluid"
    />
  </Container>
);
