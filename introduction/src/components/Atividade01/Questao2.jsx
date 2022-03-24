import React, { Component } from "react";

// class Questao2 extends Component {
//     render (){
//         return(
//             <div>
//                 <h1>Nome: Bruno Sales</h1>
//                 <h1>Curso: Sistemas de Informação</h1>
//                 <h1>Cidade: Cariús-CE</h1>
//             </div>
//         )
//     }
// }

class Questao2 extends Component {

    //isso já acontece por debaixo dos panos
    constructor(props){
        super(props)
    }
    render (){
        const {nome, curso, cidade} = this.props;
        return(
            <div>
                <h1>Nome: {nome}</h1>
                <h1>Curso: {curso}</h1>
                <h1>Cidade: {cidade}</h1>
            </div>
        )
    }
}

const Pratica = (props) =>{
    const {hora, ano, niveldosono} = props
    return(
        <div>
            <h1>Hora: {hora}</h1>
            <h1>Ano: {ano}</h1>
            <h1>Nivel de Sono Atual: {niveldosono}</h1>
        </div>
    )
}
//não esquece das chaves e tira o default
export {Questao2, Pratica};