import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Components/Header";
import GlobalStyles from "./styles/globalstyles";
import Footer from "./Components/Footer";
import Input from "./Components/Input";
import Button from "./Components/Button";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-attachment: fixed;
`;
const Section = styled.div`
  height: 500px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
function App() {
  
  const [value,setValue]=useState("");
  const onSubmit = async (e) => {
    setValue("")///버튼으로 서브밋시 밸류 초기화
    e.preventDefault();

    await axios.get("http://127.0.0.1:5000/", {
      params: {
        title: e.target.title.value,
      },
    });
    //서버 리퀘스트.
  };
  const onChange = (e)=>{
    setValue(e.target.value);
  }
  
  return (
    <>
      <>
        <GlobalStyles></GlobalStyles>
        <Wrapper>
          <Header></Header>
          <Section>
            <Form onSubmit={onSubmit}>
              <Input onChange={onChange} setValue={setValue} value={value}></Input>
              <Button></Button>
            </Form>
          </Section>
          <Footer></Footer>
        </Wrapper>
      </>
    </>
  );
}

export default App;
