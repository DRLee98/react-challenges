import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Episode from "Components/Episode";

const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 85%;
  border-radius: 5px;
  position: fixed;
  top: 100px;
`;

const Data = styled.div`
  width: 65%;
  margin-left: auto;
  position: relative;
  float: right;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 900;
  margin-right: 10px;
  display: inline-block;
`;

const Year = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 2;
  color: rgb(255 255 255 / 0.7);
`;

const Overview = styled.p`
  font-size: 22px;
  opacity: 0.7;
  line-height: 1.1;
  width: 90%;
  text-align: left;
`;

const EpisodeContainer = styled.div``;

const SeasonPresenter = ({ data, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{data.name} | Nomflix</title>
      </Helmet>
      <Content>
        <Cover
          bgImage={
            data.poster_path
              ? `https://image.tmdb.org/t/p/original${data.poster_path}`
              : require("assets/no_poster.jpg").default
          }
        />
        <Data>
          <Title>{data.name}</Title>
          <Year>{(data.air_date && data.air_date.substring(0, 4)) || "Undefined"}</Year>
          <Overview>{data.overview.length > 300 ? `${data.overview.substring(0, 300)}...` : data.overview}</Overview>
          <EpisodeContainer>
            {data.episodes.map((episode) => (
              <Episode key={episode.id} {...episode} />
            ))}
          </EpisodeContainer>
        </Data>
      </Content>
    </Container>
  );

SeasonPresenter.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SeasonPresenter;
