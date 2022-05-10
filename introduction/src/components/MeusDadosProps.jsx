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

//Usando o ...obj ele pega tudo de obj e colocar em obj2, como se fosse herança
// let obj = {
//     nome: "bruno",
//     idade: 15
// }

// let obj2 = {
//     empresa : "UFC",
//     ...obj
// }

// console.log(obj2)


export default MeusDadosProps 