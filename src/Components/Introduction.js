import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const TeamSection = styled.div`
  width: 50%;
  height: 50%;
  min-width: 200px;
  min-height: 150px;
  border: 1px solid #74a4f2;
  position: absolute;
  top: 140px;
  left: 100px;
  background-color: #74a4f2;
  opacity: 0.8;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px #74a4f2;

  &:hover {
    box-shadow: 5px 5px 5px 5px #74a4f2;
    
  }
  &:hover+div{
    border-color:red;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TeamIntroduction = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: white;
  text-align: center;
`;
const DevSection = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;
export default () => {
  return (
    <Wrapper>
      <TeamSection>
        <TeamIntroduction>
          우리의 팀은 SSUtegory입니다.<br></br>추천 카테고리 소프트웨어를
          만들기위해 구성된 팀입니다.
        </TeamIntroduction>
      </TeamSection>
    </Wrapper>
  );
};
