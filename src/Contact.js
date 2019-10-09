import React from "react";
import { Button, Container } from "react-bootstrap";
import Styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import MessageIcon from "@material-ui/icons/Message";
import MailIcon from "@material-ui/icons/Email";
import { Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Styles = Styled.div`


.div{

text-align:center;
margin-top:20px;
margin-bottom:20px;

}

.div span{

  font-size:20px;
  margin:10px;
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
.con{

  text-align:center;
  
}




.coloumn{
 
  display: flex;
  align-items: left;
}

.coloumn a{

  margin-top:20px;
}
Button
{
  margin:10px;
}


h2
{
text-align:center;
margin-bottom:30px;
}


`;

export default function Contact() {
  const classes = useStyles();

  return (
    <Styles>
      <Container className="cont">
        <h2>Help Desk, Put your Queries. </h2>
        <div className="con">
          <Row>
            <Col sm={4}>
              <div className="coloumn">
                <Fab color="primary" aria-label="add" className={classes.fab}>
                  <MailIcon />
                </Fab>
                <a href="mailto:martians.assist@gmail.com">
                  martians.assist@gmail.com
                </a>
              </div>
            </Col>
            <Col sm={4}>
              <div className="coloumn">
                <Fab color="primary" aria-label="add" className={classes.fab}>
                  <MessageIcon />
                </Fab>
                <a href="https://wa.me/918910550025">+918910550025 </a>
              </div>
            </Col>
            <Col sm={4}>
              <div className="coloumn">
                <Fab color="primary" aria-label="add" className={classes.fab}>
                  <MessageIcon />
                </Fab>
                <a href="https://wa.me/917980379883">+917980379883 </a>
              </div>
            </Col>
          </Row>
        </div>

        <div className="div">
          <span>Put your query below:</span>
          <br />
          <Button variant="success">
            <a className="a" href="https://forms.gle/MiDzcqSLHKCipoLFA">
              Leave Your Query Here
            </a>
          </Button>
        </div>
      </Container>
    </Styles>
  );
}

// https://forms.gle/4MUCRRGE6npFeqLT7
