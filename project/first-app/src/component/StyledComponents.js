import React from "react";

import styled from "styled-components";

const Wrap = styled.div`
  background-color: #ccc;
  height: 200px;
`;
const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  line-height: 200px;
  color: blue;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  /* background-color: #ccc; */
  background-color: ${(props) => (props.enter ? "yellow" : "#ccc")};
  border-color: ${(props) => (props.enter ? "blue" : "black")};
  color: blue;
  margin: 5px;
  border-radius: 5px;
  &:hover {
    font-size: 20px;
    font-weight: bold;
  }
`;
const FirstButton = styled(Button)`
  width: 150px;
  background-color: #2e2e;
  color: #fff;
`;
const LinkButton = styled(FirstButton)`
  display: block;
  text-decoration: none;
`;
export default function StyledComponents() {
  return (
    <>
      <Wrap>
        <Title>Hello,React</Title>
      </Wrap>
      <Button>Button</Button>
      <Button enter>Button</Button>
      <FirstButton>FirstButton</FirstButton>
      <LinkButton as="a" href="http://www.naver.com">
        asd
      </LinkButton>
    </>
  );
}
