import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 20%;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  opacity: 1;
  transition: opacity 0.2s linear;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
`;

const ItemContainer = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px;
  transition: opacity 0.2s linear;
`;

const Item = styled.span`
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const Box = styled.div``;

const Overview = styled.p`
  font-size: 14px;
  opacity: 0.7;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:hover {
    ${ItemContainer} {
      opacity: 1;
    }
    ${Cover} {
      opacity: 0.3;
    }
  }
`;

const Season = ({ air_date, episode_count, name, overview, poster_path, season_number }) => (
  <Container>
    <CoverContainer>
      <Cover
        bgImage={
          poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : require("assets/no_poster.jpg").default
        }
      ></Cover>
      <ItemContainer>
        <Overview>{overview.length > 150 ? `${overview.substring(0, 150)}...` : overview}</Overview>
        <Box>
          <Title>{name}</Title>
          <Item>{air_date && air_date.substring(0, 4)}</Item>
          <Item>Episode: {episode_count === 0 ? "0" : episode_count}</Item>
        </Box>
      </ItemContainer>
    </CoverContainer>
  </Container>
);

Season.propTypes = {
  episode_count: PropTypes.number.isRequired,
  season_number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  air_date: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
};

export default Season;
