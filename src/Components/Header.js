import React from "react";
import styled from "styled-components";
import { facebook_img, home_img, instagram_img } from "../imgs/imgs";
const Header = styled.header`
  height: 60px;
  width:100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background-color: #2D88FF;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
const HeaderRow = styled.div`
    display:flex;
    justify-content:center;
  width: 33%;
`;
const HeaderImage = styled.span``;
const HeaderTitle = styled.span`
    color:white;
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
