import React from "react";
import { Button, Container } from "react-bootstrap";
import Styled from "styled-components";

const Styles = Styled.div`


.div{

margin-bottom:20px;

}
.b{
  background:cyan ;
  
}
.b:hover{
  background:red;
}
.a{
  color:white;
}
.con, .cont{
  text-align:center;
}
`;

export const Contact = () => (
  <Styles>
    <Container className="cont">
      <h2>Help Desk, Put your Queries. </h2>
      <div className="con">
        <p>
          <a href="mailto:martians.assist@gmail.com">
            martians.assist@gmail.com
          </a>
          <br />
          <a href="https://wa.me/917980379883">+917980379883 (WhatsApp)</a>
          <br />
          <a href="https://wa.me/918910550025">+918910550025 (WhatsApp)</a>
          <br />
          Put your query below.
        </p>
        <div className="div">
          <Button variant="success">
            <a className="a" href="https://forms.gle/MiDzcqSLHKCipoLFA">
              Leave Your Query Here
            </a>
          </Button>
        </div>
      </div>
    </Container>
  </Styles>
);

// https://forms.gle/4MUCRRGE6npFeqLT7
