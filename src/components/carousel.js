import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import Styled from "styled-components";
const Styles = Styled.div`
.carouselBox{

border: 2px solid black;
 height: 300px;
}

.captionHead{

color:#000;
font-weight:800;
font-size:35px;

}
.captionText
{
  color:#000;
font-weight:400;
font-size:25px;
}




`;

export const CarouselHome = () => (
  <Styles>
    <Carousel>
      <Carousel.Item>
        <a href="/">
          {" "}
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            height="300px"
          />
        </a>
        <a href="/">
          <Carousel.Caption>
            <p className="captionHead">DBMS/WEB/CG Projects </p>
            <p className="captionText">Get Your Projects In No Time </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/courses">
          <img
            className="d-block w-100"
            src={slide2}
            alt="Third slide"
            height="300px"
          />
        </a>

        <a href="/courses">
          <Carousel.Caption>
            <p className="captionHead">Master In Data Structures</p>
            <p className="captionText">
              <b>One-To-One</b> live mentoring{" "}
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/trainings">
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            height="300px"
          />
        </a>

        <a href="/trainings">
          <Carousel.Caption>
            <p className="captionHead">Master In CATIA/SolidWork</p>
            <p className="captionText">
              <b>One-To-One</b> live mentoring
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  </Styles>
);
