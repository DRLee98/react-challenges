import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Season from "Components/Season";
import Profile from "Components/Profile";

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
  margin: 20px 0;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
  display: flex;
`;

const ItemBox = styled.div``;

const Item = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 2;
`;

const RatingMax = styled.span`
  opacity: 0.5;
  font-size: 14px;
  font-weight: 700;
  line-height: 2;
`;

const VoteCount = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 2;
  color: goldenrod;
`;

const Icon = styled.span`
  color: yellow;
  font-size: 18px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  margin: 15px 0;
  font-size: 18px;
  opacity: 0.7;
  line-height: 1.5;
  width: 90%;
`;

const VideoContainer = styled.div`
  display: flex;
  margin: 15px 0;
`;

const Video = styled.iframe`
  width: 460px;
  height: 255px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Collections = styled.div`
  width: 60%;
`;

const CollectionCover = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Seasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const IMDb = styled.span`
  font-weight: 900;
  background-color: #f5c518;
  color: black;
  padding: 2px 5px;
  border-radius: 5px;
`;

const ProductionContainer = styled.div`
  margin: 20px 0;
`;

const CompaniesContainer = styled.div``;

const CompanyList = styled.ul`
  display: flex;
  justify-content: center;
`;

const Company = styled.li`
  opacity: 0.7;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CompanyLogo = styled.img`
  height: 100px;
  background-color: rgb(255 255 255 / 0.4);
  padding: 8px;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  margin-bottom: 15px;
`;

const CountriesContainer = styled.ul`
  display: flex;
  justify-content: center;
`;

const Country = styled.li`
  opacity: 0.5;
  &:not(:last-child) {
    margin-right: 10px;
  }
  font-size: 20px;
  font-weight: 900;
  margin-top: 10px;
`;

const DetailPresenter = ({ result, credits, loading, error }) =>
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
        <title>{result.title ? result.title : result.name} | Nomflix</title>
      </Helmet>
      <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("assets/no_poster.jpg").default
          }
        />

        <Data>
          <ItemContainer>
            <ItemBox>
              <Title>{result.title ? result.title : result.name}</Title>
              <Item>
                {result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>{result.runtime ? result.runtime : result.episode_run_time[0]} min</Item>
              <Divider>•</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1 ? genre.name : `${genre.name} / `,
                  )}
              </Item>
              {result.imdb_id ? (
                <>
                  <Divider>•</Divider>
                  <Item>
                    <a href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">
                      <IMDb>IMDb</IMDb>
                    </a>
                  </Item>
                </>
              ) : null}
              <Divider>•</Divider>
              <Icon>
                <i class="fas fa-star"></i>
              </Icon>
              <Item> {result.vote_average}</Item>
              <RatingMax>/10 </RatingMax>
              {"("}
              <VoteCount>{result.vote_count}</VoteCount>
              {")"}
              <Overview>{result.overview}</Overview>
            </ItemBox>
            {result.belongs_to_collection && (
              <Collections>
                <Link to={`/collection/${result.belongs_to_collection.id}`}>
                  <CollectionCover
                    src={
                      result.belongs_to_collection.poster_path
                        ? `https://image.tmdb.org/t/p/original${result.belongs_to_collection.poster_path}`
                        : require("assets/no_poster.jpg").default
                    }
                  ></CollectionCover>
                </Link>
              </Collections>
            )}
          </ItemContainer>
          {result.videos.results.length >= 1 && (
            <VideoContainer>
              {result.videos.results.map((video) => (
                <Video key={video.id} src={`https://www.youtube.com/embed/${video.key}`}></Video>
              ))}
            </VideoContainer>
          )}

          {credits.cast.length > 0 && (
            <>
              <Title>Cast</Title>
              <CastContainer>
                {credits.cast.map((actor) => (
                  <Profile key={actor.id} {...actor} />
                ))}
              </CastContainer>
            </>
          )}

          {result.seasons && result.seasons.length > 1 && (
            <>
              <Title>Seasons</Title>
              <Seasons>
                {result.seasons.map((season) => (
                  <Season key={season.id} {...season} />
                ))}
              </Seasons>
            </>
          )}
          <ProductionContainer>
            <CompaniesContainer>
              <LogoContainer>
                {result.production_companies.map(
                  (company) =>
                    company.logo_path && (
                      <CompanyLogo key={company.id} src={`https://image.tmdb.org/t/p/original${company.logo_path}`} />
                    ),
                )}
                {result.networks &&
                  result.networks.map(
                    (network) =>
                      network.logo_path && (
                        <CompanyLogo key={network.id} src={`https://image.tmdb.org/t/p/original${network.logo_path}`} />
                      ),
                  )}
              </LogoContainer>
              <CompanyList>
                {result.production_companies.map((company, index) =>
                  index === result.production_companies.length - 1 ? (
                    <Company key={company.id}>{company.name}</Company>
                  ) : (
                    <>
                      <Company key={company.id}>{company.name}</Company>
                      <Divider>•</Divider>
                    </>
                  ),
                )}
                {result.networks &&
                  result.networks.map((network) => (
                    <>
                      <Divider>•</Divider>
                      <Company key={network.id}>{network.name}</Company>
                    </>
                  ))}
              </CompanyList>
            </CompaniesContainer>
            <CountriesContainer>
              {result.production_countries
                ? result.production_countries.map((country, i) => <Country key={i}>{country.name}</Country>)
                : result.origin_country.map((country, i) => <Country key={i}>{country}</Country>)}
            </CountriesContainer>
          </ProductionContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
