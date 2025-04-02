import styled from "styled-components";

const BallStyled = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
  background-color:#098df1 ;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export function Ball({ letter }: { letter: string }) {
  return <BallStyled>{letter}</BallStyled>;
}
 