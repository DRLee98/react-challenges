import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  margin: 15px 0;
  background-color: rgb(255 255 255 / 0.3);
  border-radius: 5px;
  padding: 10px;
}
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  min-width: 250px;
  max-width: 250px;
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
`;

const Data = styled.div`
  display: flex;
`;

const Contents = styled.div`
  padding: 10px;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: 900;
`;

const Year = styled.span`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  margin: 5px 0;
  margin-right: 15px;
`;

const Vote = styled.span``;

const VoteAvg = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 2;
`;

const VoteMax = styled.span`
  opacity: 0.5;
  font-size: 12px;
  font-weight: 700;
  line-height: 2;
`;

const VoteCount = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 2;
  color: goldenrod;
`;

const Icon = styled.span`
  color: yellow;
  font-size: 12px;
`;

const Overview = styled.p`
  font-size: 15px;
  width: 80%;
  line-height: 1.2;
  opacity: 0.8;
`;

const Episode = ({ air_date, name, overview, still_path, vote_average, vote_count, guest_stars }) => (
  <Container>
    <Data>
      <Image
        bgUrl={
          still_path ? `https://image.tmdb.org/t/p/original${still_path}` : require("assets/no_poster.jpg").default
        }
      />
      <Contents>
        <Title>{name}</Title>
        <Year>{(air_date && air_date.substring(0, 4)) || "Undefined"}</Year>
        <Vote>
          <Icon>
            <i class="fas fa-star"></i>
          </Icon>
          <VoteAvg> {vote_average}</VoteAvg>
          <VoteMax>/10 </VoteMax>
          {"("}
          <VoteCount>{vote_count}</VoteCount>
          {")"}
        </Vote>
        <Overview>{overview}</Overview>
      </Contents>
    </Data>
  </Container>
);

Episode.propTypes = {
  air_date: PropTypes.string,
  name: PropTypes.string,
  overview: PropTypes.string,
  still_path: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
};

export default Episode;
