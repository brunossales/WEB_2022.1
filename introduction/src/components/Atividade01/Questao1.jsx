import React from "react";

// function Questao1(){
//     return(
//         <div>
//             <h1>Nome: Bruno Sales</h1>
//             <h1>Curso: Sistemas de Informação</h1>
//             <h1>Cidade: Cariús-CE</h1>
//         </div>
//     )
// }

// const Questao1 = () => 
//         <div>
//             <h1>Nome: Bruno Sales</h1>
//             <h1>Curso: Sistemas de Informação</h1>
//             <h1>Cidade: Cariús-CE</h1>
//         </div>

const Questao1 = (props) => {
    const {nome, curso, cidade} = props;
    return(
         <div>
             <h1>Nome: {nome}</h1>
             <h1>Curso: {curso}</h1>
             <h1>Cidade: {cidade}</h1>
         </div>
    )
}

export default Questao1;