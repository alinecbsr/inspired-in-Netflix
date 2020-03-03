import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/images/Netflix_Logo_RGB.png";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 80px;
  padding: 80px 0 0 0;
  color: #fff;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

class Layout extends Component {
  render() {
    return (
      <div>
        <Title>Inspired in</Title>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </div>
    );
  }
}

export default Layout;
