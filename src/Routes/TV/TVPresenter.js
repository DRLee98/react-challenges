import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../../Components/Section";
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

const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  loading,
  error,
  pageFunc,
  viewFunc,
  view,
}) => (
  <>
    <Helmet>
      <title>TV Shows | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section
            title="Top Rated Shows"
            view={view.topRated}
            viewFunc={viewFunc.topRatedView}
          >
            {topRated.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
            <NextPage>
              <Icon>
                <i onClick={pageFunc.topRatedPage} className="fas fa-plus"></i>
              </Icon>
            </NextPage>
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section
            title="Popular Shows"
            view={view.popular}
            viewFunc={viewFunc.popularView}
          >
            {popular.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
            <NextPage>
              <Icon>
                <i onClick={pageFunc.popularPage} className="fas fa-plus"></i>
              </Icon>
            </NextPage>
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section
            title="Airing Today"
            view={view.airingToday}
            viewFunc={viewFunc.airingTodayView}
          >
            {airingToday.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
            <NextPage>
              <Icon>
                <i
                  onClick={pageFunc.airingTodayPage}
                  className="fas fa-plus"
                ></i>
              </Icon>
            </NextPage>
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  pageFunc: PropTypes.object,
  viewFunc: PropTypes.object,
  view: PropTypes.object,
};

export default TVPresenter;
