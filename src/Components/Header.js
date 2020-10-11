import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { facebook_img, find_img, github_img, home_img, instagram_img } from "../imgs/imgs";
const Header = styled.header`
  height: 60px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background-color: white;
  opacity: 0.7;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: top 0.2s ease-in-out;
`;
const HeaderRow = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
`;
const HeaderImage = styled.span`
  cursor: pointer;
  margin-right: 10px;
`;
const HeaderTitle = styled.span`
  color: #1a1a1a;
  font-weight: 700;
  font-size: 18px;
`;
const A = styled.a`
  &:focus {
    transition: all 0.8s;
  }
`;
const onClickInput = (e) => {
  const target = document.getElementById("textInput");

  const abTop = window.pageYOffset + target.getBoundingClientRect().top;

  window.scroll({ behavior: 'smooth', left :0 , top :abTop});
};

const onClickHome = () => {
  window.scroll({behavior: 'smooth',left: 0, top: 0});
};
export default () => {
  return (
    <Header  id="header">
      <HeaderRow>
        <HeaderImage>
          <A onClick={onClickHome}>{home_img}</A>
        </HeaderImage>
      </HeaderRow>
      <HeaderRow>
        <HeaderTitle>SSUtegory</HeaderTitle>
      </HeaderRow>
      <HeaderRow>
        <HeaderImage>
          <A onClick={onClickInput}>{find_img}</A>
        </HeaderImage>
        <HeaderImage>
        <A href="https://github.com/rat8397/frontend_ssutegory">{github_img}</A>
          </HeaderImage>
      </HeaderRow>
    </Header>
  );
};
