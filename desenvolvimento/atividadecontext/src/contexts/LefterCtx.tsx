import { createContext, useState, } from "react";
import { LefterCtxProps } from "../typess/Index";

const LefterCtx = createContext<LefterCtxProps>({} as LefterCtxProps);

 function LefterProvider({ children }: Props) {
  const [input, setInput] = useState<string>("");
  return (
    <LefterCtx.Provider value={{ input, setInput }}>
      {children}
    </LefterCtx.Provider>
  );
}
interface Props{
children:React.ReactNode;
}
export {LefterCtx,LefterProvider}

