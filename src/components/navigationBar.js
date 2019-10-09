import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/martiansLogo.png";

const Styles = styled.div`
  .navbar {
    background-color: #24963e;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    margin-right: 0px;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="sm">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <strong>Martians</strong>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/courses">Courses </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/trainings">Trainings </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About us</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
