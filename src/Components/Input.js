import React, { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
  width: 100%;
  height: 100px;
  text-align: center;
  border-radius: 20px;
  box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    height: 110px;
    border: 1px solid #74A4F2;
  }
  &:focus + label {
    top: -40px;
    color: #74A4F2;
  }
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  
`;
///transition => all = 변화되는곳(top,bottom ...) 0.3s 시간을 적음
const Label = styled.label`
  position: absolute;
  top: 40px;
  left: 10px;
  transition: top 0.3s;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.2);
`;
const Wrapper = styled.div`
  width: 33%;
  position: relative;
  margin-bottom:20px;
`;
export default (props) => {
  
  const onEnterKey=()=>{
    if(window.event.keyCode === 13){

      props.setValue("")
    }
  }
  return (
    <Wrapper>
      <Input id="textInput" type="text" name="title"autoComplete={"off"} value={props.value} onChange={props.onChange} onKeyUp={onEnterKey}></Input>
      <Label htmlFor="textInput">
        게시글의 제목을 입력하시면 카테고리를 추천해드려요!
      </Label>
    </Wrapper>
  );
};
