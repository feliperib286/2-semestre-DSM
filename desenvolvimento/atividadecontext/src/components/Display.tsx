import { useContext } from "react";
import { LefterCtx } from "../contexts/LefterCtx";
import { Ball } from "./Ball";
import styled from "styled-components"; // Importa Styled Components



export function Display() {
  const { input } = useContext(LefterCtx);

  return (
    <Container>
      {input ? (
        input.split("").map((char, index) => <Ball key={index} letter={char} />)
      ) : (
        <NoInput>Sem entrada</NoInput>
      )}
    </Container>
  );
}


// Estiliza o container
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 04px;
  border: 1px solid #f3f6f4;
  background-color: #222;
  border-radius: 10px;
  width: 300px;


`;

// Estiliza "Sem entrada"
const NoInput = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  width: 150px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

