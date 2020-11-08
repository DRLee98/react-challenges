import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  width: 20%;
`;

const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  transition: opacity 0.2s linear;
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 10px;
  font-weight: 900;
`;

const ItemContainer = styled.div`
  margin: 5px 0;
`;

const Item = styled.span`
  &:not(:last-child) {
    margin-right: 10px;
  }
  font-weight: 700;
  font-size: 17px;
`;

const Overview = styled.p`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 700;
  padding: 15px;
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.2s linear;
`;

const CoverContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  &:hover {
    ${Cover} {
      opacity: 0.4;
    }
    ${Overview} {
      opacity: 1;
    }
  }
`;

const Part = ({ id, title, release_date, poster_path, vote_average, overview }) => (
  <Container>
    <SLink to={`/movie/${id}`}>
      <CoverContainer>
        <Cover
          bgImage={
            poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : require("assets/no_poster.jpg").default
          }
        />
        <Overview>{overview}</Overview>
      </CoverContainer>
      <Title>{title}</Title>
      <ItemContainer>
        <Item>{release_date.substring(0, 4)}</Item>
        <Item>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {vote_average}/10
        </Item>
      </ItemContainer>
    </SLink>
  </Container>
);

Part.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
};

export default Part;
