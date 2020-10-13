import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 20%;
  position: relative;
`;
const TeamSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const TeamColumn = styled.div`
  margin: 10px;
  width: 50%;
`;
const IntroTitle = styled.h3`
  font-size: 30px;
  font-weight: 500px;
  margin: 0px 0px 30px 0px;
  color:white;
`;

const IntroDes = styled.p`
  font-size: 17px;
  line-height: 150%;
  color:white;
`;


export default () => {
  return (
    <Wrapper>
      <TeamSection>
        <TeamColumn>
          <IntroTitle>자동 카테고리 설정 프로그램</IntroTitle>
          <IntroDes>
            유저가 물건을 입력하면 자동으로 카테고리를 설정해주는 엔진입니다.{" "}
            <br />
            여러가지 물건이나 상품에 관한 게시글을 작성할 때 이용하여 편리하게
            카테고리를 분류할 수 있도록 저희 SSUtegory가 개발한 엔진입니다.
          </IntroDes>
        </TeamColumn>
      </TeamSection>
    </Wrapper>
  )
}