import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  width: 200px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 300px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const HiddenBox = styled.div`
  bottom: 5px;
  left: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const MiniBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.5;
    }
    ${HiddenBox} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  font-size: 20px;
  font-weight: 900;
`;

const Year = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
`;

const Rating = styled.div``;

const RatingValue = styled.span`
  font-size: 16px;
  font-weight: 700;
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

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("assets/no_poster.jpg").default
          }
        />
        <HiddenBox>
          <Title>{title}</Title>
          <MiniBox>
            <Year>{year}</Year>
            <Rating>
              <Icon>
                <i class="fas fa-star"></i>
              </Icon>
              <RatingValue> {rating}</RatingValue>
              <RatingMax>/10 </RatingMax>
            </Rating>
          </MiniBox>
        </HiddenBox>
      </ImageContainer>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
