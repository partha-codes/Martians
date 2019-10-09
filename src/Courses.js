import React from "react";
import Styled from "styled-components";
import { Card1 } from "./components/car1";
import { Row, Col, Container, Badge } from "react-bootstrap";

import c from "./assets/c.jpg";
import java from "./assets/java.jpg";
import python from "./assets/python.jpg";
import js from "./assets/js.jpg";
import html from "./assets/html.jpg";
import ds from "./assets/ds.jpg";
import arabic from "./assets/arabic.jpg";
import quran from "./assets/quran.jpg";
import urdu from "./assets/urdu.jpg";
import bengali from "./assets/bengali.jpg";
import hindi from "./assets/hindi.jpg";
import telugu from "./assets/telugu.jpg";
import kannada from "./assets/kannada.png";
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
.title
{
  font-size:35px;
}
.section{
  font-size:30px;
}


`;

export const courses = () => (
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
            Programming Languages{" "}
          </Badge>
        </div>
        <Row>
          <Col sm={4}>
            <Card1
              data={{
                title: "C PROGRAMMING",
                link: "https://forms.gle/96oYVsn5pmLA27TKA",
                image: c,
                offer: "50% off till 30 oct",
                description:
                  "Learn to code king of programming language 'C'. No matter what you know, it's from scratch.",
                currentPrice: "₹1500/-",
                originalPrice: "₹3000/-"
              }}
            />
          </Col>
          <Col sm={4}>
            <Card1
              data={{
                title: "JAVA",
                link: "https://forms.gle/96oYVsn5pmLA27TKA",
                image: java,
                offer: "50% off till 30 oct",
                description:
                  "Start learning java now, top level platform independent programming language. We start from scratch.",
                currentPrice: "₹1500/-",
                originalPrice: "₹3000/-"
              }}
            />
          </Col>
          <Col sm={4}>
            <Card1
              data={{
                title: "PYTHON",
                link: "https://forms.gle/96oYVsn5pmLA27TKA",
                image: python,
                offer: "50% off till 30 oct",
                description:
                  "Top trending programming language in the world in which machine learninig and artificial intelligence algorithms are written. Starts from scratch.",
                currentPrice: "₹1500/-",
                originalPrice: "₹3000/-"
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Card1
              data={{
                title: "JAVASCRIPT",
                link: "https://forms.gle/96oYVsn5pmLA27TKA",
                image: js,
                offer: "50% off till 30 oct",
                description:
                  "Learn Javascript to enhance your webpage from scratch.",
                currentPrice: "₹1500/-",
                originalPrice: "₹3000/-"
              }}
            />
          </Col>
          <Col sm={4}>
            <Card1
              data={{
                title: "HTML/CSS",
                link: "https://forms.gle/96oYVsn5pmLA27TKA",
                image: html,
                offer: "50% off till 30 oct",
                description:
                  "Want to develop your own website? Dive into this course to get complete knowlwdge of website design and become a web designer.",
                currentPrice: "₹1500/-",
                originalPrice: "₹3000/-"
              }}
            />
          </Col>
          <Col sm={4}>
            <Card1
              data={{
                title: "DATA STRUCTURES USING JAVA",
                link: "https://forms.gle/96oYVsn5pmLA27TKA",
                image: ds,
                offer: "50% off till 30 oct",
                description:
                  "Develop data structure skill, the core subject of computer science to crack interviews and MNC tests using JAVA.",
                currentPrice: "₹1500/-",
                originalPrice: "₹3000/-"
              }}
            />
          </Col>
        </Row>
        <hr width="100%"></hr>
        <div className="titleBox">
          <Badge className="section " variant="dark">
            Languages And Books{" "}
          </Badge>
        </div>
        <Row>
          <Col sm={4}>
            <Card1
              data={{
                title: "ARABIC LANGUAGE",
                link: "https://forms.gle/oDVE1wTojHabSaxcA",
                image: arabic,
                offer: "25% off till 30 oct",
                description:
                  "Learn arabic language direct from experts by just sitting at your home.",
                currentPrice: "₹1500/-",
                originalPrice: "₹2000/-"
              }}
            />
          </Col>
          <Col sm={4}>
            <Card1
              data={{
                title: "URDU LANGUAGE",
                link: "https://forms.gle/oDVE1wTojHabSaxcA",
                image: urdu,
                offer: "33% off till 30 oct",
                description:
                  "Learn urdu language direct from qualified mentors by just sitting at your home.",
                currentPrice: "₹1000/-",
                originalPrice: "₹1500/-"
              }}
            />
          </Col>
          <Col sm={4}>
            <Card1
              data={{
                title: "QURANIC TAJWEED",
                link: "https://forms.gle/oDVE1wTojHabSaxcA",
                image: quran,
                offer: "33% off till 30 oct",
                description:
                  "Understand pronounciation and tajweed direct from huffaz and quraa.",
                currentPrice: "₹1000/-",
                originalPrice: "₹1500/-"
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Card1
              data={{
                title: "BENGALI LANGUAGE",
                link: "https://forms.gle/oDVE1wTojHabSaxcA",
                image: bengali,
                offer: "33% off till 30 oct",
                description:
                  "Learn bengali language direct from experts by just sitting at your home.",
                currentPrice: "₹1000/-",
                originalPrice: "₹1500/-"
              }}
            />
          </Col>
          <Col sm={4}>
            <Card1
              data={{
                title: "HINDI LANGUAGE",
                link: "https://forms.gle/oDVE1wTojHabSaxcA",
                image: hindi,
                offer: "33% off till 30 oct",
                description:
                  "Learn hindi language direct from qualified mentors by just sitting at your home.",
                currentPrice: "₹1000/-",
                originalPrice: "₹1500/-"
              }}
            />
          </Col>
          <Col sm={4}>
            <Card1
              data={{
                title: "TELUGU LANGUAGE",
                link: "https://forms.gle/oDVE1wTojHabSaxcA",
                image: telugu,
                offer: "33% off till 30 oct",
                description:
                  "Learn telugu language direct from qualified mentors by just sitting at your home.",
                currentPrice: "₹1000/-",
                originalPrice: "₹1500/-"
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Card1
              data={{
                title: "KANNADA LANGUAGE",
                link: "https://forms.gle/oDVE1wTojHabSaxcA",
                image: kannada,
                offer: "33% off till 30 oct",
                description:
                  "Learn kannada language direct from experts by just sitting at your home.",
                currentPrice: "₹1000/-",
                originalPrice: "₹1500/-"
              }}
            />
          </Col>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  </Styles>
);
