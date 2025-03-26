import { useContext, useState} from "react"
import { CtxCar } from "../contexts/CtxCar";

export default function Form(){
    const [model,setModel]= useState("");
    const [color,setColor] =useState("");
    const [placa,setPlac]= useState("");
    const{add}=useContext(CtxCar);

    return <>
    <div>
        <label>Modelo</label>
        <input value={model} onChange={(e)=>setModel(e.target.value)} />
     </div>   
     <div>
            <label>Cor</label>
            <input value={color} onChange={(e)=>setColor(e.target.value)} />
        </div>
        <div>
            <label>Placa</label>
            <input value={placa} onChange={(e)=>setPlac(e.target.value)} />
        </div>

        <button onClick={() => add({model,color,placa})}>Salvar</button>
    </>;
}
