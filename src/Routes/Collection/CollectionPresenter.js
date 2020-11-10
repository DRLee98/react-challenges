import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Part from "Components/Part";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
  position: fixed;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 900;
`;

const Overview = styled.p`
  font-size: 22px;
  opacity: 0.7;
  line-height: 1.3;
  width: 90%;
  text-align: center;
`;

const Collections = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`;

const CollectionPresenter = ({ data, loading, error }) =>
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
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
      />
      <Content>
        <Title>{data.name}</Title>
        <Overview>{data.overview}</Overview>
        <Collections>
          {data.parts.map((part) => (
            <Part key={part.id} {...part} />
          ))}
        </Collections>
      </Content>
    </Container>
  );

CollectionPresenter.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CollectionPresenter;
