import { useParams } from 'react-router';
import styled from 'styled-components';
import {useState} from 'react';

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height:10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
font-size:48px;
    color:${props => props.theme.accentColor};
`

const Loader = styled.span`
    text-align: center;
    display:block;
`;

interface Params {
coinId: String;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams() as unknown as Params;
  console.log(coinId);
  return(
  <Container>
      <Header>
        <Title>코인{coinId}</Title>
      </Header>
      { loading ? <Loader>Loading...</Loader>: null} 
  </Container>
  );
}

export default Coin;