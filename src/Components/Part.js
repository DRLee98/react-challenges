import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;

const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Cover = styled.div`
  width: 80%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
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
  opacity: 0.7;
  line-height: 1.5;
  width: 80%;
  font-weight: 700;
`;

const Part = ({ id, title, release_date, poster_path, vote_average, overview }) => (
  <Container>
    <SLink to={`/movie/${id}`}>
      <Cover
        bgImage={
          poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : require("assets/no_poster.jpg").default
        }
      />
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
      <Overview>{overview.length > 150 ? `${overview.substring(0, 150)}...` : overview}</Overview>
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
