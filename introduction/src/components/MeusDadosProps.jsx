import { render } from "@testing-library/react";
import React, { Component } from "react";

const MeusDadosProps = (props) => {
    //console.log(props.nome)
    return (
        <div>
            <h3>Nome: {props.nome}</h3>
        </div>
    )
}

//Usando class
// class MeusDadosPropss extends Component{
//     render (){
//         return (
//             <div>
//                 <h4>Nome: {this.props.nome}</h4>
//             </div>
//         )
//     }
// }

export default MeusDadosProps 