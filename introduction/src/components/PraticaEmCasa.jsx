import React from "react";
import { Pratica } from "./Atividade01/Questao2";
//Usando Arrow Function
const PraticaEmCasa = () => {
    return(
        <div>
            <Pratica
                hora="22:35"
                ano="2022"
                niveldosono="Enorme, vou é dormir agora!"
            />
        </div>
    )
}

export default PraticaEmCasa;