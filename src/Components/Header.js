import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { handleBack, handleSubmit } from "../func";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Item = styled.li`
  width: 80px;
  height: 60px;
  &:hover {
    border-bottom: 3px solid
      ${(props) => (props.current ? "#3498db" : "#ffffff4d")};
  }
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
`;

const Form = styled.form`
  width: 0;
  display: flex;
  transition: width 0.5s ease;
`;

const Input = styled.input`
  all: unset;
  font-size: 20px;
  width: 100%;
`;

const Back = styled.div`
  margin: 0 30px;
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgb(255 255 255 / 0.3);
  }
`;

const Icon = styled.div`
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 20px;
  border-radius: 50%;
  transition: all 0.5s ease;
`;

const Search = styled.div`
  display: flex;
  width: 50%;
  &:hover {
    ${Form} {
      width: 80%;
    }
    ${Icon} {
      background-color: rgb(255 255 255 / 0.3);
    }
  }
  &:focus-within {
    ${Form} {
      width: 80%;
    }
    ${Icon} {
      background-color: rgb(255 255 255 / 0.3);
    }
  }
`;

const Img = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: bottom center;
  height: 50px;
  width: 60px;
  margin: 0 20px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Link to="/">
        <Img bgUrl={require("assets/icons8-film-reel-64.png").default} />
      </Link>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Search>
        <Icon>
          <i className="fas fa-search"></i>
        </Icon>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Search Movies or TV Shows..." />
        </Form>
      </Search>
    </List>
    <Back>
      <i className="fas fa-undo-alt" onClick={handleBack}></i>
    </Back>
  </Header>
));
