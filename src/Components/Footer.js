import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height: 60px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0.7;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

`;
const FooterColumn = styled.div``;
const FooterSpan = styled.span`
  color: #1a1a1a;
  font-weight: 700;
  font-size: 18px;
`;
export default () => {
  return (
    <Footer>
      <FooterSpan>SSUtegory 2020 ©</FooterSpan>
    </Footer>
  );
};
