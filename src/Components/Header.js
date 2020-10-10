import React from "react";
import styled from "styled-components";
import { facebook_img, home_img, instagram_img } from "../imgs/imgs";
const Header = styled.header`
  height: 60px;
  width:100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: top 0.2s ease-in-out;
  z-index: 10;
`;
const HeaderRow = styled.div`
    display:flex;
    justify-content:center;
  width: 33%;
`;
const HeaderImage = styled.span`
  cursor: pointer;
  margin-right:10px;
`;
const HeaderTitle = styled.span`
    color:#1A1A1A;
    font-weight:700;
    font-size:18px;
    
`;
export default () => {
  return (
    <Header>
      <HeaderRow>
          <HeaderImage>
              {home_img}
          </HeaderImage>
      </HeaderRow>
      <HeaderRow>
        <HeaderTitle>SSUtegory</HeaderTitle>
      </HeaderRow>
      <HeaderRow>
        <HeaderImage>{instagram_img}</HeaderImage>
        <HeaderImage>{facebook_img}</HeaderImage>
      </HeaderRow>
    </Header>
  );
};
