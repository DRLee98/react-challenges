/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

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
  width: 90%;
  font-size: 18px;
  font-weight: bold;
  color: rgb(255 255 255 / 0.7);
  line-height: 1.5;
  margin-bottom: 25px;
`;

const HomePage = styled.a`
  font-size: 18px;
  color: rgb(255 255 255 / 0.7);
`;

const PersonPresenter = ({
  loading,
  error,
  person,
  movies,
  shows,
  viewFunc,
  view,
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
          <title>{person.name} | Nomflix</title>
        </Helmet>
        <Content>
          <Cover
            bgImage={
              person.profile_path
                ? `https://image.tmdb.org/t/p/original${person.profile_path}`
                : require("assets/no_poster.jpg").default
            }
          />
          <Data>
            <Title>{person.name}</Title>
            <Item>{person.known_for_department}</Item>
            {person.imdb_id ? (
              <IMDb>
                <a
                  href={`https://www.imdb.com/title/${person.imdb_id}`}
                  target="_blank"
                >
                  IMDb
                </a>
              </IMDb>
            ) : null}
            {person.place_of_birth ? (
              <Box>
                <Item>{person.place_of_birth}</Item>
              </Box>
            ) : null}
            <Box>
              <Item>{person.birthday}</Item>
              {person.deathday ? <Item>~ {person.deathday}</Item> : null}
            </Box>
            {person.homepage ? (
              <Box>
                <HomePage href={person.homepage} target="_blank">
                  {person.homepage}
                </HomePage>
              </Box>
            ) : null}
            <MiniTitle>Biography</MiniTitle>
            <Biography>{person.biography}</Biography>
            {movies.cast.length > 0 && (
              <Section
                title="Movie"
                view={view.movie}
                viewFunc={viewFunc.movieView}
              >
                {movies.cast.map((movie) => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.title}
                    rating={movie.vote_average}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                    isMovie={true}
                  />
                ))}
              </Section>
            )}
            {shows.cast.length > 0 && (
              <Section title="TV" view={view.tv} viewFunc={viewFunc.tvView}>
                {shows.cast.map((show) => (
                  <Poster
                    key={show.id}
                    id={show.id}
                    imageUrl={show.poster_path}
                    title={show.name}
                    rating={show.vote_average}
                    year={
                      show.first_air_date && show.first_air_date.substring(0, 4)
                    }
                  />
                ))}
              </Section>
            )}
          </Data>
        </Content>
      </Container>
    )}
  </>
);

PersonPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  person: PropTypes.object,
  viewFunc: PropTypes.object,
  view: PropTypes.object,
};

export default PersonPresenter;
