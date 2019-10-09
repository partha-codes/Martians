import React from "react";
import { Card, Button } from "react-bootstrap";

import Styled from "styled-components";

const Styles = Styled.div`

.test{
  display: block;
  margin-left:auto;
  margin-right:auto;
  box-shadow: 10px 10px 5px grey;
}

.btn{
  position: absolute;
 bottom:15px;
 box-shadow: 5px 5px 5px grey;

}

.a{
  color:white;
}

.body{
  position: relative;
height:340px;

}
.cardImage{
  height:170px;
}
.originalPrice
{
  text-decoration:line-through;
 right:15px;
 position: absolute;
 bottom:20px;
 font-size:15px;
 color:grey;
}
.currentPrice
{ 
  font-weight:bold; 
  font-size:22px;
  right:75px;
  position: absolute;
  bottom:2px;
  
}
.offer{

font-size:15px;
color:red;
font-weight:normal;
font-style:italic;
position: absolute;
  bottom:40px;
  right:25px;
}

`;

export const Card1 = props => (
  <Styles>
    <Card className="test" style={{ width: "18rem" }}>
      <Card.Img className="cardImage" variant="top" src={props.data.image} />
      <Card.Body className="body">
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text className="descriptionText">
          {props.data.description}
        </Card.Text>

        <Card.Text className="offer">{props.data.offer}</Card.Text>

        <Button variant="success">
          <a className="a" href={props.data.link}>
            Enroll Now
          </a>
        </Button>

        <Card.Text className="currentPrice">
          {props.data.currentPrice}
        </Card.Text>

        <Card.Text className="originalPrice">
          {props.data.originalPrice}
        </Card.Text>
      </Card.Body>
    </Card>
  </Styles>
);
