import Input from "./components/Input";
import "./App.css";
import { LefterProvider } from "./contexts/LefterCtx";
import { Display } from "./components/Display";
import { styled } from "styled-components";



function App(){
  return <LefterProvider>
 <Container>
  <Input />
  <Display />
  </Container>

  </LefterProvider>
}
export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: black;
  color: white;
  border-radius: 10px;
  border: 10px solid white;
  width: 300px;
 
`;