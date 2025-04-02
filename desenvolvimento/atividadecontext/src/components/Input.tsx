import{useContext} from "react";
import { LefterCtx } from "../contexts/LefterCtx";
import { styled } from "styled-components";

const InputField = styled.input`
 
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export default function Input(){
    const {input, setInput}=useContext(LefterCtx)
    return<InputField value={input} onChange={e=>setInput(e.target.value)}
    placeholder="Entre com o Nome" 
    />
}