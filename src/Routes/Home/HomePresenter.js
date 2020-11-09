import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const NextPage = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  border-radius: 5px;
  background-color: rgb(20 20 20 / 50%);
`;

const Icon = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50%;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgb(255 255 255 / 0.3);
  }
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error, pageFunc, viewFunc, view }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>Movies | Nomflix</title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing" view={view.nowPlaying} viewFunc={viewFunc.nowPlayingView}>
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
            <NextPage>
              <Icon>
                <i onClick={pageFunc.nowPlayingPage} class="fas fa-plus"></i>
              </Icon>
            </NextPage>
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies" view={view.upcoming} viewFunc={viewFunc.upcomingView}>
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
            <NextPage>
              <Icon>
                <i onClick={pageFunc.upcomingPage} class="fas fa-plus"></i>
              </Icon>
            </NextPage>
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies" view={view.popular} viewFunc={viewFunc.popularView}>
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
            <NextPage>
              <Icon>
                <i onClick={pageFunc.popularPage} class="fas fa-plus"></i>
              </Icon>
            </NextPage>
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
