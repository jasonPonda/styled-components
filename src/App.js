import styled, { keyframes } from "styled-components";

// Create a Title component that will rendder an <h1> tag with some styles

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `;

// Create a Wrapper component that will render a <section> tag with some styles

const Wrapper = styled.section`
    padding: 4em;
    background: #e5d9c5 ;
    `;

const Button = styled.button`
    background: ${props => props.backgroundColor === 'blue' ? "blue" : "red"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border:2px solid palevioletred;
    border-radius: 3px;
    `;

const YellowButton = styled.button`
backgroundColor: yellow;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
`;

const TomatoButton = styled(Button)`
background: tomato;
`;

const StyledCard = styled.div`
    border: 1px solid black;
    display: flex;
    align-item: center;
    flex-direction: column;
    width: 20%;
    > .name {
      font-size: 22px;
      color: black;
      transition: 0.5s;

  &:hover {
    color: red;
  }

+ .surname {
  color: #b30e16;
   }
  }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const rotate = keyframes`
from{
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`
const Rotate = styled.div`
display: inline-block;
animation: ${rotate} 2s linear infinite;
padding: 2rem 1rem;
font-size: 1.2rem;
`

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>

      <Button backgroundColor='blue'>Blue Button</Button>
      <Button backgroundColor='red'>Red Button</Button>


      <YellowButton>Yellow Button</YellowButton>
      <TomatoButton>Tomato Button</TomatoButton>

      <Container>
        <StyledCard>
          <h1 className="name">Jason</h1>
          <p className="surname">Ponda</p>
        </StyledCard>
      </Container>

      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </div>
  );
}

export default App;
