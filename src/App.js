import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Components/Header";
import GlobalStyles from "./styles/globalstyles";
import Footer from "./Components/Footer";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Introduction from "./Components/Introduction";
import Category from "./Components/Category";

const Span = styled.span`
font-weight:600;
font-size:500px;

position:relative;
color:blue;
`;
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
  flex-direction: column;
  ${(props) =>
    props.backgroundimage
      ? `background-image:url(${props.backgroundimage})`
      : ""};
`;
const SecHr = styled.hr`
  width: 70%;
  opacity: 0.7;
  position: relative;
  bottom: 200px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SectionTitle = styled.span`
  font-size: 30px;
  position: relative;
  bottom: 200px;
`;


function App() {
  const [load, setLoad] = useState(false);
  const [value, setValue] = useState("");
  const [scroll, setScroll] = useState(false);
  const [check,setCheck]=useState(false);
  const [first,setFirst]=useState("");
  const [second,setSecond]=useState("");


  const onSubmit = async (e) => {
    const realvalue = e.target.title.value.replaceAll(" ", "_");
    setValue(""); ///버튼으로 서브밋시 밸류 초기화
    e.preventDefault();
    setLoad(true); ///서브밋하면 로딩중 띄움
    setCheck(false);
    try {
      await axios.get(`/recommender/${realvalue}`).then((res) => {

        setFirst(res.data.first.title);
        setSecond(res.data.second.title);

        setCheck(true);
        setLoad(false);
      });

      //서버 리퀘스트. 제대로 리퀘스트 가면 false로 바꿈
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // const onHeaderChange=()=>{
  //   window.scro
  // }
  return (
    <>
      <>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <Section >
            <Introduction />
          </Section>
          <Section>
            <SectionTitle>게시글의 카테고리를 찾아보세요</SectionTitle>
            <SecHr></SecHr>
            { check && <Category first={first} second={second} /> }
            <Form onSubmit={onSubmit}>
              <Input
                onChange={onChange}
                setValue={setValue}
                value={value}
              ></Input>
              <Button load={load}></Button>
            </Form>
          </Section>
          <Footer />
        </Wrapper>
      </>
    </>
  );
}

export default App;
