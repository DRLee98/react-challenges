/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Season from "Components/Season";
import Profile from "Components/Profile";
import { handleClick } from "../../func";

const Container = styled.div`
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
  position: relative;
  overflow: hidden;
  height: 315px;
`;

const VideoBox = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  height: 315px;
  transition: all 0.5s ease;
`;

const Video = styled.iframe`
  width: 560px;
  height: 315px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const CastContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 225px;
`;

const CastBox = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  height: 225px;
  transition: all 0.5s ease;
`;

const Collections = styled.div`
  margin-left: auto;
`;

const CollectionCover = styled.img`
  width: 200px;
  border-radius: 5px;
`;

const SeasonsContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 400px;
`;

const Seasons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  height: 400px;
  transition: all 0.5s ease;
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

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ViewIcon = styled.div`
  cursor: pointer;
  font-size: 28px;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgb(255 255 255 / 0.3);
  }
`;

const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 15px;
`;

const SeasonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 10px;
`;

const LeftButton = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  text-align: center;
  background-image: none;
  color: #ffffff;
  font-size: 25px;
  opacity: 0;
  z-index: 5;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
    background-image: linear-gradient(to right, black, #0d0d0d00);
  }
`;

const RightButton = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50px;
  text-align: center;
  background-image: none;
  color: #ffffff;
  font-size: 25px;
  opacity: 0;
  z-index: 5;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
    background-image: linear-gradient(to left, black, #0d0d0d00);
  }
`;

const DetailPresenter = ({ result, credits, loading, error, viewFunc, view }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    "Error"
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} | Nomflix</title>
      </Helmet>
      <Backdrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : null
        }
      />
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
                {result.release_date
                  ? (result.release_date &&
                      result.release_date.substring(0, 4)) ||
                    "Undefined"
                  : (result.first_air_date &&
                      result.first_air_date.substring(0, 4)) ||
                    "Undefined"}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.runtime || result.runtime === 0
                  ? result.runtime
                  : result.episode_run_time[0]}{" "}
                min
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
              {result.imdb_id ? (
                <>
                  <Divider>•</Divider>
                  <Item>
                    <a
                      href={`https://www.imdb.com/title/${result.imdb_id}`}
                      target="_blank"
                    >
                      <IMDb>IMDb</IMDb>
                    </a>
                  </Item>
                </>
              ) : null}
              <Divider>•</Divider>
              <Icon>
                <i className="fas fa-star"></i>
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
              <LeftButton>
                <i onClick={handleClick} className="fas fa-chevron-left"></i>
              </LeftButton>
              <VideoBox>
                {result.videos.results.map((video) => (
                  <Video
                    key={video.id + Date.now()}
                    src={`https://www.youtube.com/embed/${video.key}`}
                  ></Video>
                ))}
              </VideoBox>
              <RightButton>
                <i onClick={handleClick} className="fas fa-chevron-right"></i>
              </RightButton>
            </VideoContainer>
          )}

          {credits.cast.length > 0 && (
            <>
              <TitleBox>
                <Title>Cast</Title>
                <ViewIcon>
                  <i onClick={viewFunc.castView} className="fas fa-eye"></i>
                </ViewIcon>
              </TitleBox>
              {view.cast ? (
                <CastContainer>
                  <LeftButton>
                    <i
                      onClick={handleClick}
                      className="fas fa-chevron-left"
                    ></i>
                  </LeftButton>
                  <CastBox>
                    {credits.cast.map((actor) => (
                      <Profile key={actor.id + Date.now()} {...actor} />
                    ))}
                  </CastBox>
                  <RightButton>
                    <i
                      onClick={handleClick}
                      className="fas fa-chevron-right"
                    ></i>
                  </RightButton>
                </CastContainer>
              ) : (
                <CastGrid>
                  {credits.cast.map((actor) => (
                    <Profile key={actor.id + Date.now()} {...actor} />
                  ))}
                </CastGrid>
              )}
            </>
          )}

          {result.seasons && result.seasons.length > 1 && (
            <>
              <TitleBox>
                <Title>Seasons</Title>
                <ViewIcon>
                  <i onClick={viewFunc.seasonView} className="fas fa-eye"></i>
                </ViewIcon>
              </TitleBox>
              {view.season ? (
                <SeasonsContainer>
                  <LeftButton>
                    <i
                      onClick={handleClick}
                      className="fas fa-chevron-left"
                    ></i>
                  </LeftButton>
                  <Seasons>
                    {result.seasons.map((season) => (
                      <Season key={season.id + Date.now()} {...season} />
                    ))}
                  </Seasons>
                  <RightButton>
                    <i
                      onClick={handleClick}
                      className="fas fa-chevron-right"
                    ></i>
                  </RightButton>
                </SeasonsContainer>
              ) : (
                <SeasonGrid>
                  {result.seasons.map((season) => (
                    <Season key={season.id + Date.now()} {...season} />
                  ))}
                </SeasonGrid>
              )}
            </>
          )}
          <ProductionContainer>
            <CompaniesContainer>
              <LogoContainer>
                {result.production_companies.map(
                  (company) =>
                    company.logo_path && (
                      <CompanyLogo
                        key={company.id + Date.now()}
                        src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                      />
                    )
                )}
                {result.networks &&
                  result.networks.map(
                    (network) =>
                      network.logo_path && (
                        <CompanyLogo
                          key={network.id + Date.now()}
                          src={`https://image.tmdb.org/t/p/original${network.logo_path}`}
                        />
                      )
                  )}
              </LogoContainer>
              <CompanyList>
                {result.production_companies.map((company, i) =>
                  i === result.production_companies.length - 1 ? (
                    <Company key={company.id + Date.now()}>
                      {company.name}
                    </Company>
                  ) : (
                    <>
                      <Company key={company.id + Date.now()}>
                        {company.name}
                      </Company>
                      <Divider key={Date.now()}>•</Divider>
                    </>
                  )
                )}
                {result.networks &&
                  result.networks.map((network) => (
                    <>
                      <Divider key={Date.now()}>•</Divider>
                      <Company key={network.id + Date.now()}>
                        {network.name}
                      </Company>
                    </>
                  ))}
              </CompanyList>
            </CompaniesContainer>
            <CountriesContainer>
              {result.production_countries
                ? result.production_countries.map((country) => (
                    <Country key={Date.now()}>{country.name}</Country>
                  ))
                : result.origin_country.map((country) => (
                    <Country key={Date.now()}>{country}</Country>
                  ))}
            </CountriesContainer>
          </ProductionContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  credits: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  viewFunc: PropTypes.object,
  view: PropTypes.object,
};

export default DetailPresenter;
