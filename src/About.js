import React from "react";
import { Container } from "react-bootstrap";
import Styled from "styled-components";

const Styles = Styled.div`
h2{
  font-size:30px;  
  margin-top:25px;
}

p{
  font-size:15px;

}
.containerN{
 

  word-wrap:break-word;

}

`;

class About extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     customers: []
  //   };
  // }

  // componentDidMount() {
  //   fetch("/api/customer")
  //     .then(res => res.json())
  //     .then(customers =>
  //       this.setState({ customers }, () =>
  //         console.log("data fetched", customers)
  //       )
  //     );
  // }

  render() {
    return (
      <Styles>
        <Container className="containerN">
          <h2> About Our Company</h2>
          <p>
            Our company <strong>Martians</strong> were founded by some curious,
            energetic and aspiring
            minds. Our main goal is to reach all the students
            out there who need help, does not matter 
            from which stream you are, who loves to study and curious about
            learning. We have experts to
            provide all kind of solutions to your study problems related to technology, medical, engineering, 
            or even languages.
            There're some issues in our education system because of that students do not get
            time to learn their kind of skills and interests. That's why we are here to solve your problems, 
            you don't need to go out and learn or gain skills, turn on your laptop/desktop and contact with us
            we are ready to provide you the skills related sessions so you don't need to roam in
            the city to  learn. Try us, you'll never regret yourself.
          </p>
        </Container>
      </Styles>
    );
  }
}

export { About };
