import React, {useState} from "react";
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.div`
  color : ${(props) => props.theme.textColor};  
`;

interface DummyProps {
  text: string;
  otherThingHere?: boolean;
}

function Dummy ({text,otherThingHere}:DummyProps) {
  return <H1>{text}</H1>
}

function App() {
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <Container>
      <H1>protected</H1>
      <Dummy text="Hello" />
      <button onClick={onClick}>Button</button>
    </Container>     
  );
  }

export default App;
