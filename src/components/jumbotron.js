import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import Styled from "styled-components";
import logo from "../assets/target.jpg";

const Styles = Styled.div`
.jumbo{
    background: url(${logo}) no-repeat fixed bottom;
    background-size: cover;
    color: #fff;
    height: 200px;
    background-position:rtelative;
    z-index:-2;
}
.quote{
  font-size:40px;
  color:#FFFFFF;
  text-align:center;
}
p{
  color:#FFFFFF;
  text-align:center;
  font-weight:bold;
}


.overlay{
  
    opacity: 0.6;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
}


`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 className="quote">Code The Story</h1>
        <p>
          “The people who are crazy enough to think they can change the world
          are the ones who do"
        </p>
      </Container>
    </Jumbo>
  </Styles>
);
