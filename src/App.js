import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { noMatch } from "./noMatch";
import { NavigationBar } from "./components/navigationBar";
import { Footer } from "./components/footer";

import { courses } from "./Courses";
import { trainings } from "./Trainings";
import Styled from "styled-components";

import "./App.css";

const Styles = Styled.div`
.wrapper
{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
 
}


`;

function App() {
  return (
    <Styles>
      <div className="wrapper">
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              className="containerBackground"
              path="/about"
              component={About}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/courses" component={courses} />
            <Route path="/trainings" component={trainings} />
            <Route component={noMatch} />
          </Switch>
        </Router>

        <Footer className="footer" />
      </div>
    </Styles>
  );
}

export default App;
