import React from "react";
import Styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";

const Styles = Styled.div`
.nBar{

    background: linear-gradient(to right, #28a745, #28a745);

   
  
  }

  a
{
    color:black;
    text-decoration: none;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:10px;
    padding-right:10px;
    border-radius: 5px;
  
}

a:hover{
    color:white;
    text-decoration: none;
     background-color:#0A7A0F;

}


#sticky-footer {
   
    background: linear-gradient(to right, #28a745, #28a745);
  }
  .footerText{
      padding:20px;
      text-align:center;
      color:black;
  }
  .container
  {
      padding-top:15px;

  }
.col{
    text-align:center;
    padding:0px;
 
}

`;

export const Footer = () => (
  <Styles>
    <div className="nBar">
      <Container>
        <Row>
          <Col className="col">
            <a href="courses">Courses</a>{" "}
          </Col>
          <Col className="col">
            <a href="trainings">Trainings</a>{" "}
          </Col>
          <Col className="col">
            <a href="contact">Contact</a>
          </Col>
          <Col className="col">
            <a href="about">About</a>{" "}
          </Col>
        </Row>
      </Container>

      <footer id="sticky-footer" class=" bg-dark text-white-50">
        <div className="footerText">
          <small>Copyright &copy; Martians</small>
        </div>
      </footer>
    </div>
  </Styles>
);
