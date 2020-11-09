/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: skyblue;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: rotate 1s infinite;
`;

const Core = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  position: absolute;
  z-index: 1;
`;

const Point = styled.div`
  width: 20px;
  height: 20px;
  background-color: rgb(255, 110, 110);
  position: absolute;
  top: -16px;
  transform: rotate(45deg);
`;

export default () => (
  <Container>
    <Circle>
      <Core></Core>
      <Point></Point>
    </Circle>
  </Container>
);
