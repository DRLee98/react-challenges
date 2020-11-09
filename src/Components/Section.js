import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { handleClick, viewHandle } from "../func";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 900;
`;

const PosterContainer = styled.div`
  margin-top: 25px;
  position: relative;
  overflow: hidden;
  height: 300px;
`;

const PosterBox = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  height: 300px;
  transition: all 0.5s ease;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.div`
  cursor: pointer;
  font-size: 28px;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgb(255 255 255 / 0.3);
  }
`;

const LeftButton = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  text-align: center;
  background-image: none;
  color: #ffffff;
  font-size: 25px;
  opacity: 0;
  z-index: 5;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
    background-image: linear-gradient(to right, #000000bd, #0d0d0d00);
  }
`;

const RightButton = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50px;
  text-align: center;
  background-image: none;
  color: #ffffff;
  font-size: 25px;
  opacity: 0;
  z-index: 5;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
    background-image: linear-gradient(to left, #000000bd, #0d0d0d00);
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <TitleBox>
      <Title>{title}</Title>
      <Icon>
        <i onClick={viewHandle} class="fas fa-eye"></i>
      </Icon>
    </TitleBox>
    <PosterContainer>
      <LeftButton>
        <i onClick={handleClick} class="fas fa-chevron-left"></i>
      </LeftButton>
      <PosterBox>{children}</PosterBox>
      <RightButton>
        <i onClick={handleClick} class="fas fa-chevron-right"></i>
      </RightButton>
    </PosterContainer>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
