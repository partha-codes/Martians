import React from "react";
import Styled from "styled-components";
import { Row, Col, Container, Badge } from "react-bootstrap";
import { Card1 } from "./components/car1";
import img4 from "./assets/catia_solid.jpg";
import { CarouselHome } from "./components/carousel";
import img1 from "./assets/photo1.png";
import ds from "./assets/ds.jpg";
import img3 from "./assets/android.jpg";
import img2 from "./assets/th.jpg";
import python from "./assets/python.jpg";
import js from "./assets/js.jpg";
import ReactPlayer from "react-player";

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

.player-wrapper {
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
}
 
.react-player {
  position: absolute;
  top: 0;
  left: 0;
}

.title
{
  font-size:35px;
  margin-top:20px;
  margin-left:10px;
  margin-right:10px;
}
.section{
  font-size:30px;
}
li{
  font-size:20px;
}

`;

export const Home = () => (
  <Styles>
    <div>
      <CarouselHome />
      <div className="titleBox">
        <p className="title">
          Martians, a <b>one-to-one live online</b> learning platform{" "}
        </p>
      </div>

      <Container>
        <Row>
          <Col sm={6}>
            <ul>
              <li> Cheapest</li>
              <li> Securely at home</li>
              <li> Flexible timings</li>
              <li> One teacher - one student</li>
              <li> Online via a software platform</li>
              <li> A to Z service</li>
              <li>
                {" "}
                No recorded video it's online (have reference video after each
                session)
              </li>
              <li> Fully private</li>
              <li>
                {" "}
                Learn from anywhere in the world directly by its field experts
              </li>
              <li> Get rid of travelling charges, learn at home</li>
            </ul>
          </Col>

          <Col sm={6}>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/5-lHXtTusdo"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </Col>
        </Row>
        <div className="titleBox">
          <hr width="100%"></hr>
          <Badge className="section " variant="danger">
            Hot Trending{" "}
          </Badge>
        </div>
        <Row>
          <Col sm={4}>
            <Card1
              id="porjectCard"
              data={{
                title: "LEARN PROJECTS",
                link: "https://forms.gle/zgSy4bKvJpQfYo9s6",
                image: img1,
                offer: "25% off till 30 oct",
                description:
                  "Learn project development using different technologies of your choice, we have developers to develop almost all kinds of projects based on current trending technologies as well as the oldest we had.",
                currentPrice: "₹1500/- ",
                originalPrice: "₹2000/-"
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
        <hr width="100%"></hr>
        <div className="titleBox">
          <Badge className="section " variant="danger">
            New Arrivals
          </Badge>
        </div>

        <Row>
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
        </Row>
        <hr width="100%"></hr>
        <div className="titleBox">
          <Badge className="section " variant="danger">
            Popular
          </Badge>
        </div>

        <Row>
          <Col sm={4}>
            <Card1
              data={{
                title: "LEARN PROJECTS",
                link: "https://forms.gle/zgSy4bKvJpQfYo9s6",
                image: img1,
                offer: "25% off till 30 oct",
                description:
                  "Learn project development using different technologies of your choice, we have developers to develop almost all kinds of projects based on current trending technologies as well as the oldest we had.",
                currentPrice: "₹1500/- ",
                originalPrice: "₹2000/-"
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
        </Row>
      </Container>
    </div>
  </Styles>
);
