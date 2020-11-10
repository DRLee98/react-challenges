import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Cover = styled.img`
  width: 150px;
  border-radius: 5px;
  opacity: 1;
  transition: opacity 0.2s linear;
`;

const Character = styled.h4``;

const Actor = styled.h3`
  font-size: 20px;
  margin: 2px 0;
  font-weight: 700;
`;

const InfoBox = styled.div`
  padding: 5px 3px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.2s linear;
`;

const Container = styled.div`
  font-size: 16px;
  position: relative;
  &:hover {
    ${Cover} {
      opacity: 0.7;
    }
    ${InfoBox} {
      opacity: 1;
    }
  }
`;

const Profile = ({ profile_path, character, name, id }) => (
  <Container>
    <Link to={`/person/${id}`}>
      <Cover
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : require("assets/no_poster.jpg").default
        }
      />
      <InfoBox>
        <Character>{character}</Character>
        <Actor>{name}</Actor>
      </InfoBox>
    </Link>
  </Container>
);

Profile.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};

export default Profile;
