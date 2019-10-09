import React from "react";
import Styled from "styled-components";
import { Card1 } from "./components/car1";
import { Row, Col, Badge, Container } from "react-bootstrap";
import img2 from "./assets/th.jpg";
import img3 from "./assets/android.jpg";
import img4 from "./assets/catia_solid.jpg";

const Styles = Styled.div`
.card{
   margin-top:50px;
   margin-bottom:25px;
  background-color:#e2e2e2;

}

.titleBox{
  font-family: 'IBM Plex Sans', sans-serif;
  text-align:center;
 
}
.section{
  font-size:30px;
}
.title
{
  font-size:35px;
}

`;

export const trainings = () => (
  <Styles>
    <div>
      <div className="titleBox">
        <p className="title">
          Martians, A <b>One-To-One</b> live Online Learning Platform
        </p>
      </div>

      <Container>
        <hr width="100%"></hr>
        <div className="titleBox">
          <Badge className="section " variant="dark">
            Industrial Training{" "}
          </Badge>
        </div>
        <Row>
          <Col sm={4}>
            <Card1
              data={{
                title: "WEB DEVELOPMENT TRAINING ",
                link: "https://forms.gle/96oYVsn5pmLA27TKA",
                image: img2,
                offer: "50% off till 30 oct",
                description:
                  "Learn web development. Connect with our team and get mentorship, we are here to guide you with all the technology experts. It covers all things from A to Z for your project.",
                currentPrice: "₹2000/- ",
                originalPrice: "₹4000/-"
              }}
            />
          </Col>
          <Col sm={4}>
            <Card1
              data={{
                title: "ANDROID APPLICATION DEVELOPMENT TRAINING",
                link: "https://forms.gle/96oYVsn5pmLA27TKA",
                image: img3,
                offer: "50% off till 30 oct",
                description:
                  "We provide live online training sessions on android development to curious students who want to learn app development with hands-on project experience.",
                currentPrice: "₹2000/-",
                originalPrice: "₹4000/-"
              }}
            />
          </Col>
          <Col sm={4}>
            <Card1
              data={{
                title: "MECHANICAL PARTS DESIGN TRAINING",
                link: "https://forms.gle/96oYVsn5pmLA27TKA",
                image: img4,
                offer: "50% off till 30 oct",
                description:
                  "We have design developers to train you from beginner to advanced level of part designing techniques using CATIA and SOLIDWORKS.",
                currentPrice: "₹3000/-",
                originalPrice: "₹6000/-"
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  </Styles>
);
