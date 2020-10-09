import React from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Components/Header";
import globalstyles from "./styles/globalstyles";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-color: red;
`;
function App() {
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.get("http://127.0.0.1:5000/", {
      params: {
        title: e.target.title.value,
      },
    });
  };
  return (
    <>
      <globalstyles></globalstyles>
      <>
        <Wrapper>
          <Header></Header>
        </Wrapper>
      </>
    </>
  );
}

export default App;
