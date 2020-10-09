import React from "react";
import styled from "styled-components";
const Button = styled.button`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 600;
  color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  transition: all 0.4s;
  box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  &:hover{
    color:#74a4f2;
    border: 1px solid #74a4f2;
    box-shadow:3px 3px 3px 3px rgba(0, 0, 0, 0.2);

  };
`;
const Wrapper = styled.div`
  width: 15%;
  height: 30px;
`;
export default (props) => {
  return (
    <Wrapper>
      <Button >보내주세요</Button>
    </Wrapper>
  );
};
