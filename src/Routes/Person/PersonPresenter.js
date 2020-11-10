import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Loader from "../../Components/Loader";

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
  font-size: 40px;
  font-weight: 900;
  margin: 10px 0;
  margin-right: 10px;
  display: inline-block;
`;

const Item = styled.h4`
  font-weight: 700;
  font-size: 25px;
  color: rgb(255 255 255 / 0.7);
  display: inline-block;
  margin-right: 10px;
`;

const IMDb = styled.span`
  font-weight: 900;
  background-color: #f5c518;
  color: black;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 18px;
`;

const Box = styled.div`
  margin: 15px 0;
`;

const MiniTitle = styled.h4`
  font-size: 30px;
  font-weight: 900;
  margin: 20px 0;
`;

const Biography = styled.p`
  width: 50%;
  font-size: 18px;
  font-weight: bold;
  color: rgb(255 255 255 / 0.7);
  line-height: 1.5;
`;

const HomePage = styled.a`
  font-size: 18px;
  color: rgb(255 255 255 / 0.7);
`;

const HomePresenter = ({
  loading,
  error,
  profile_path,
  name,
  place_of_birth,
  known_for_department,
  birthday,
  deathday,
  imdb_id,
  homepage,
  biography,
}) => (
  <>
    <Helmet>
      <title>Loading | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>{name} | Nomflix</title>
        </Helmet>
        <Content>
          <Cover
            bgImage={
              profile_path
                ? `https://image.tmdb.org/t/p/original${profile_path}`
                : require("assets/no_poster.jpg").default
            }
          />
          <Data>
            <Title>{name}</Title>
            <Item>{known_for_department}</Item>
            {imdb_id ? (
              <IMDb>
                <a
                  href={`https://www.imdb.com/title/${imdb_id}`}
                  target="_blank"
                >
                  IMDb
                </a>
              </IMDb>
            ) : null}
            {place_of_birth ? (
              <Box>
                <Item>{place_of_birth}</Item>
              </Box>
            ) : null}
            <Box>
              <Item>{birthday}</Item>
              {deathday ? <Item>~ {deathday}</Item> : null}
            </Box>
            {homepage ? (
              <Box>
                <HomePage href={homepage} target="_blank">
                  {homepage}
                </HomePage>
              </Box>
            ) : null}
            <MiniTitle>Biography</MiniTitle>
            <Biography>{biography}</Biography>
          </Data>
        </Content>
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  profile_path: PropTypes.string,
  name: PropTypes.string,
  place_of_birth: PropTypes.string,
  known_for_department: PropTypes.string,
  birthday: PropTypes.string,
  deathday: PropTypes.string,
  imdb_id: PropTypes.string,
  homepage: PropTypes.string,
  biography: PropTypes.string,
};

export default HomePresenter;
