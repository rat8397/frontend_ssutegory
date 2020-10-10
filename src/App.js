import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Components/Header";
import GlobalStyles from "./styles/globalstyles";
import Footer from "./Components/Footer";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Introduction from "./Components/Introduction";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-attachment: fixed;
`;
const Section = styled.div`
  height: 80%;
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

const SecHr = styled.hr`
  width: 70%;
  opacity: 0.7;
`;
function App() {
  const [load, setLoad] = useState(false);
  const [value, setValue] = useState("");
  const onSubmit = async (e) => {
    setValue(""); ///버튼으로 서브밋시 밸류 초기화
    e.preventDefault();
    setLoad(true); ///서브밋하면 로딩중 띄움
    try {
      await axios
        .get(
          `http://ec2-3-15-158-63.us-east-2.compute.amazonaws.com:5000/recommender/${e.target.title.value}`
        )
        .then(() => setLoad(false));

      //서버 리퀘스트. 제대로 리퀘스트 가면 false로 바꿈
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <>
        <GlobalStyles/>
        <Wrapper>
          <Header/>
          <Section>
            <Introduction/>
          </Section>
          <SecHr />
          <Section>
            <Form onSubmit={onSubmit}>
              <Input
                onChange={onChange}
                setValue={setValue}
                value={value}
              ></Input>
              <Button load={load}></Button>
            </Form>
          </Section>
          <Footer/>
        </Wrapper>
      </>
    </>
  );
}

export default App;
